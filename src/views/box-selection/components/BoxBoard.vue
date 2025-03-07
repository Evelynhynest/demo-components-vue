<template>
  <div class="box-board" ref="boardRef" :style="renderSize">
    <div
      class="box"
      v-for="box in boxList"
      :key="box.id"
      :data-box-id="box.id"
      :style="getBoxStyle(box)"
    >
      <div class="tag-index" v-show="(!isDrawing || activeBox?.id !== box.id) && box.isFirst">{{
        box.index
      }}</div>
      <!-- v-show="activeBox?.id === box.id || (isSelected && selectedIds.has(box.id))" -->
      <div
        class="box-anchor"
        v-show="!isDrawing"
        v-for="anchor in anchorList"
        :key="anchor"
        :data-anchor="anchor"
        :class="anchor"
        :style="{ cursor: ANCHOR_CUSOR_MAP[anchor] }"
      ></div>
    </div>
    <img class="bg-img" draggable="false" :src="picBg.F_url" :style="renderSize" />
    <ul class="context-memu" :style="contextMenuStyle">
      <!--
        注意这里有个问题：
          在外层 board 的 mousedown 事件中会隐藏菜单，同时由于该事件触发早于 click，
          触发 mousedown 时菜单已隐藏，点击事件无法触发，
          目前的解决方法是把菜单项的 click 事件换成 mousedown，并阻止冒泡（避免不必要的函数调用）
      -->
      <li class="menu-item" @click="deleteBoxByMenu">删除题框</li>
      <li class="menu-item" @click="exportBoxImageByMenu">导出图片</li>
      <!-- <li class="menu-item" @mousedown.stop="deleteBoxByMenu">删除题框</li>
      <li class="menu-item" @mousedown.stop="exportBoxImageByMenu">导出图片</li> -->
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue'

const colors = [
  'rgba(68, 142, 251, 0.15)', // 默认背景颜色
  'rgba(0, 255, 0, 0.15)',
  'rgba(0, 255, 255,0.15)',
  'rgba(179, 92, 68,0.15)',
  'rgba(120, 146, 98,0.15)',
  'rgba(102, 0, 255,0.15)',
  'rgba(255, 0, 255,0.15)',
  'rgba(241, 198, 117,0.15)',
  'rgba(255, 0, 102,0.15)',
  'rgba(255, 78, 32,0.15)',
  'rgba(44, 169, 225,0.15)',
  'rgba(0, 52, 114,0.15)',
  'rgba(255, 241, 67,0.15)',
  'rgba(87, 66, 102,0.15)',
  'rgba(201, 31, 55,0.15)',
  'rgba(5, 119, 72,0.15)',
  'rgba(217, 182, 17,0.15)',
  'rgba(25, 68, 142,0.15)',
  'rgba(136, 72, 152,0.15)',
  'rgba(159, 111, 85,0.15)',
  'rgba(234, 255, 86,0.15)',
]

type BoxPic = {
  F_url: string
  width: number
  height: number
  page: number
  points?: [number, number, number, number]
  scale: number
  reWidth: number
  reHeight: number
  [k: string]: any
}

type FragmentItem = {
  id: string
  color: number
  points: number[]
  index: number // 序号
  combinedId?: string // 合并后对应EditQstInfo的id
  isFirst: boolean
  pageNum: number
}

const props = defineProps<{
  picBg: BoxPic
  drawingStatus: boolean
  connectStatus: boolean
  cache: Recordable<FragmentItem>
  scrollPos: { top: number; left: number }
}>()

const emits = defineEmits(['updateBoxCache', 'updateBoxItem', 'combineBox'])

const renderSize = computed(() => ({
  width: props.picBg.reWidth + 'px',
  height: props.picBg.reHeight + 'px',
}))

console.log('picBg =>', props.picBg)

const boardRef = ref()
const boxList = computed(() => Object.values(props.cache))
const isDrawing = ref(false)
let isResizing = false
const isSelected = ref(false)
const selectedIds = ref<Set<string>>(new Set())
let isDragging = false
// 当前图框位置大小发生变化需要触发重新渲染
const activeBox = ref()
let resizeAnchor: string
let boardRect: any = {}
const mousePos = {
  startX: 0,
  startY: 0,
}
let combineColor = 0

const getBoxStyle = (box: FragmentItem) => {
  const [x, y, width, height] = box.points
  const result: any = {
    left: x + 'px',
    top: y + 'px',
    width: width + 'px',
    height: height + 'px',
    backgroundColor: colors[box.color],
    borderWidth: '2px',
    // borderWidth: box.color ? '0' : '2px',
    borderColor: box.color ? colors[box.color] : '#448efb',
  }
  // 点击题框时添加的样式
  // if (activeBox.value?.id === box.id) {
  //   result.backgroundColor = 'rgba(68, 142, 251, 0.15)'
  // }
  // 题框选中状态添加的样式
  if (isSelected.value && selectedIds.value.has(box.id)) {
    result.borderWidth = '3px'
  }
  return result
}

const ANCHOR_CUSOR_MAP: Recordable = {
  'top-left': 'nwse-resize',
  'top-center': 'ns-resize',
  'top-right': 'nesw-resize',
  'left-center': 'ew-resize',
  'right-center': 'ew-resize',
  'bottom-left': 'nesw-resize',
  'bottom-center': 'ns-resize',
  'bottom-right': 'nwse-resize',
}

const anchorList = computed(() => Object.keys(ANCHOR_CUSOR_MAP))

// 记录起始位置，新增题框
const onMouseDown = (e: any) => {
  const isLeftClick = e.button === 0
  console.log('isLeftClick =>', isLeftClick);
  if (!isLeftClick) return
  hideContextMenu()
  let selectedBoxId = e.target.dataset.boxId
  if (e.target.classList.contains('box-anchor')) {
    // 点击题框锚点拖动缩放的情况
    isResizing = true
    const { anchor } = e.target.dataset
    resizeAnchor = anchor
    // boardRef.value.style.cursor = ANCHOR_CUSOR_MAP[anchor]
    const { boxId } = e.target.parentElement.dataset
    if (boxId) {
      const targetBox = props.cache[boxId]
      activeBox.value = targetBox
    }
  } else if (selectedBoxId) {
    if (props.connectStatus) {
      // 选中题框合并的情况
      isSelected.value = true
      // 鼠标点击同一个题框取消选中
      if (selectedIds.value.has(selectedBoxId)) {
        selectedIds.value.delete(selectedBoxId)
      } else {
        selectedIds.value.add(selectedBoxId)
      }
      return
    }
    // 选中题框拖拽的情况
    isDragging = true
    boardRef.value.style.cursor = 'move'
    const targetBox = props.cache[selectedBoxId]
    activeBox.value = targetBox
    mousePos.startX = e.pageX + props.scrollPos.left
    mousePos.startY = e.pageY + props.scrollPos.top
  } else if (props.drawingStatus) {
    // 绘制新题框的情况
    isDrawing.value = true
    boardRef.value.style.cursor = 'crosshair'
    mousePos.startX = e.pageX + props.scrollPos.left
    mousePos.startY = e.pageY + props.scrollPos.top
    // console.log('down start =>', e.pageX, e.pageY, props.scrollPos.top, props.scrollPos.left)
    activeBox.value = {
      id: buildShortUUID('box'),
      color: 0,
      points: [mousePos.startX - boardRect.x, mousePos.startY - boardRect.y, 0, 0],
      index: 0,
      pageNum: 1,
    }
    emits(
      'updateBoxCache',
      { ...props.cache, [activeBox.value.id]: activeBox.value },
      activeBox.value.id,
    )
  }
}

// 题框大小位置变化
const onMouseMove = (e: any) => {
  let newBox
  if (isDrawing.value) {
    const { startX, startY } = mousePos
    const disX = e.pageX + props.scrollPos.left - startX
    const disY = e.pageY + props.scrollPos.top - startY
    let left, top, width, height
    if (disX > 0) {
      left = startX - boardRect.left
    } else {
      left = e.pageX + props.scrollPos.left - boardRect.left
    }
    if (disY > 0) {
      top = startY - boardRect.top
    } else {
      top = e.pageY + props.scrollPos.top - boardRect.top
    }
    width = Math.abs(disX)
    height = Math.abs(disY)
    newBox = { ...activeBox.value, points: [left, top, width, height] }
  }
  if (isResizing && activeBox.value) {
    const [originLeft, originTop, originW, originH] = activeBox.value.points
    const newLeft = e.pageX + props.scrollPos.left - boardRect.left
    const newTop = e.pageY + props.scrollPos.top - boardRect.top
    // 设置初始默认值
    let left = originLeft,
      top = originTop,
      width = originW,
      height = originH
    switch (resizeAnchor) {
      case 'top-left':
        left = newLeft
        top = newTop
        width = originLeft + originW - newLeft
        height = originTop + originH - newTop
        break
      case 'top-center':
        top = newTop
        height = originTop + originH - newTop
        break
      case 'top-right':
        top = newTop
        width = newLeft - originLeft
        height = originTop + originH - newTop
        break
      case 'left-center':
        left = newLeft
        width = originLeft + originW - newLeft
        break
      case 'right-center':
        width = newLeft - originLeft
        break
      case 'bottom-left':
        left = newLeft
        width = originLeft + originW - newLeft
        height = newTop - originTop
        break
      case 'bottom-center':
        height = newTop - originTop
        break
      case 'bottom-right':
        width = newLeft - originLeft
        height = newTop - originTop
        break
    }
    newBox = { ...activeBox.value, points: [left, top, width, height] }
  }
  if (isDragging && activeBox.value) {
    const { startX, startY } = mousePos
    const [originLeft, originTop, width, height] = activeBox.value.points
    const disX = e.pageX + props.scrollPos.left - startX
    const disY = e.pageY + props.scrollPos.top - startY
    let left = originLeft + disX
    let top = originTop + disY
    if (left <= 0) {
      left = 0
    } else if (left + width >= boardRect.width) {
      left = boardRect.width - width
    }
    if (top <= 0) {
      top = 0
    } else if (top + height >= boardRect.height) {
      top = boardRect.height - height
    }
    newBox = { ...activeBox.value, points: [left, top, width, height] }
    // 注意更新下一次触发移动事件的startX/Y
    mousePos.startX = e.pageX + props.scrollPos.left
    mousePos.startY = e.pageY + props.scrollPos.top
  }
  const needUpdate = newBox && JSON.stringify(newBox) !== JSON.stringify(activeBox.value)
  console.log('needUpdate =>', needUpdate);
  if (needUpdate) {
    emits('updateBoxItem', newBox)
    activeBox.value = newBox
  }
}

// 结束绘制题框，重置状态
const onMouseUp = (e: any) => {
  if (isDrawing.value) {
    isDrawing.value = false
    const { startX, startY } = mousePos
    const disX = Math.abs(e.pageX + props.scrollPos.left - startX)
    const disY = Math.abs(e.pageY + props.scrollPos.top - startY)
    const limit = 30
    if (disX < limit || disY < limit) {
      const newCache = { ...props.cache }
      delete newCache[activeBox.value.id]
      // 如果题框绘制尺寸小于限制大小需要删除
      emits('updateBoxCache', newCache, activeBox.value.id)
    }
  }
  if (isResizing) {
    isResizing = false
  }
  if (isDragging) {
    isDragging = false
  }
  activeBox.value = null
  boardRef.value.style.cursor = 'initial'
}

const onClick = (e: any) => {
  const { boxId } = e.target.dataset
  console.log('click', e, boxId)
  if (boxId) {
    const targetBox = props.cache[boxId]
    activeBox.value = targetBox
  }
}

// 分解重置合并的题框
const decompoundBox = (combinedId: string) => {
  const newCache = { ...props.cache }
  combinedId.split(',').forEach((id) => {
    newCache[id] = { ...newCache[id], combinedId: '', color: 0 }
  })
  return newCache
}

// 合并题框
const combineBox = () => {
  if (!props.connectStatus) return
  if (selectedIds.value.size > 0) {
    const selectedBoxes = [...selectedIds.value].map((id) => props.cache[id])
    const hasBoxCombined = selectedBoxes.some((box) => box.combinedId)
    if (hasBoxCombined) {
      console.error('有区域已被关联，无法二次关联！')
      return
    }
    selectedBoxes.sort((a, b) => a.index - b.index)
    const ids = selectedBoxes.map((box) => box.id)
    combineColor++
    const combinedId = ids.join(',')
    ids.forEach((boxId) => {
      // combinedId 记录所有合并的题框id，并且更新合并后的题框颜色
      const newBox = { ...props.cache[boxId], combinedId, color: combineColor }
      emits('updateBoxItem', newBox)
    })
    emits('combineBox', combinedId)
  } else {
    console.error('请选择至少两个区域进行关联')
  }
  resetSelectedStatus()
}

// 删除题框
const deleteBox = () => {
  if (activeBox.value) {
    let newCache = { ...props.cache }
    if (activeBox.value.combinedId) {
      // 题框合并的情况，需要重置其他合并题框的合并状态
      newCache = decompoundBox(activeBox.value.combinedId)
    }
    delete newCache[activeBox.value.id]
    emits('updateBoxCache', newCache, activeBox.value.id)
    resetSelectedStatus()
  }
}

// 重置选中状态
const resetSelectedStatus = () => {
  selectedIds.value = new Set()
  isSelected.value = false
  activeBox.value = null
}

// 监听键盘按键
const keyboardListener = (e: KeyboardEvent) => {
  if (e.code === 'Delete') {
    deleteBox()
  } else if (e.code === 'Enter') {
    combineBox()
  }
  e.preventDefault()
}

const contextMenuStyle = reactive<any>({
  display: 'none',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 100,
})
const hideContextMenu = () => {
  contextMenuStyle.display = 'none'
}
const showContextMenu = () => {
  contextMenuStyle.display = 'initial'
}
async function deleteBoxByMenu() {
  console.log('@@@@@ deleteBoxByMenu');
  deleteBox()
  hideContextMenu()
  activeBox.value = null
}
async function exportBoxImageByMenu() {
  console.log('####### exportBoxImageByMenu =>', activeBox.value);
  if(activeBox.value) {
    await cropAndSaveImage(props.picBg.F_url, activeBox.value.points)
    hideContextMenu()
    activeBox.value = null
  }
}

const contextMenuListener = (e: MouseEvent) => {
  console.log('context =>', e);
  const boxId = (e.target as HTMLElement)?.dataset?.boxId
  if (boxId) {
    e.preventDefault()
    e.stopPropagation()
    console.log('boxId =>', boxId);
    activeBox.value = props.cache[boxId]
    contextMenuStyle.top = `${e.clientY}px`
    contextMenuStyle.left = `${e.clientX}px`
    console.log('contextMenuStyle =>', contextMenuStyle);
    showContextMenu()
  }
}

const initBoard = () => {
  if (!boardRef.value) return
  /**
   * 当前页面内有其他异步获取数据渲染的组件，
   * 因此暂时用计时器等页面差不多渲染完成再获取元素相对于视口位置
   * 否则获取到的位置数据不准，图框会从鼠标位置偏移
   */
  // setTimeout(() => {
  boardRect = boardRef.value.getBoundingClientRect()
  console.log('settimeout boardRect =>', boardRef.value.getBoundingClientRect())
  // }, 3500)
  boardRef.value.addEventListener('mousedown', onMouseDown)
  boardRef.value.addEventListener('mousemove', onMouseMove)
  boardRef.value.addEventListener('mouseup', onMouseUp)
  boardRef.value.addEventListener('click', onClick)
  boardRef.value.addEventListener('contextmenu', contextMenuListener)
  document.documentElement.addEventListener('keydown', keyboardListener)
}

onMounted(() => {
  initBoard()
})

const removeAllListner = () => {
  boardRef.value.removeEventListener('mousedown', onMouseDown)
  boardRef.value.removeEventListener('mousemove', onMouseMove)
  boardRef.value.removeEventListener('mouseup', onMouseUp)
  boardRef.value.removeEventListener('click', onClick)
  document.documentElement.removeEventListener('keydown', keyboardListener)
}

onBeforeUnmount(() => {
  removeAllListner()
})

const getCroppedImage = (points: number[]) => {
  return new Promise((resolve, reject) => {
    const [x, y, width, height] = points
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = width
    canvas.height = height
    const imgEl = new Image()
    imgEl.crossOrigin = 'Anonymous'
    imgEl.onload = () => {
      ctx?.drawImage(imgEl, x, y, width, height, 0, 0, width, height)
      canvas.toBlob((blob) => {
        if (blob) {
          const newImg = document.createElement('img')
          const url = URL.createObjectURL(blob)
          newImg.onload = () => {
            URL.revokeObjectURL(url)
          }
          newImg.src = url
          document.body.appendChild(newImg)
        }
      })
    }
    imgEl.src = props.picBg.F_url
  })
}
// getCroppedImage([165, 428, 487, 101])

async function cropAndSaveImage(url: string, points: number[]) {
  const [x, y, width, height] = points
  const image = await loadImage(url)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  // 设置canvas尺寸为裁剪区域大小
  canvas.width = width
  canvas.height = height
  ctx?.drawImage(image, x, y, width, height, 0, 0, width, height)
  // canvas.toBlob((blob) => {
  //   if (blob) {
  //     const url = URL.createObjectURL(blob)
  //     loadImage(url).then((imgEl) => {
  //       document.body.appendChild(imgEl)
  //       URL.revokeObjectURL(url)
  //     })
  //   }
  // })
  const dataURL = canvas.toDataURL('image/png')
  const link = document.createElement('a')
  link.download = `cropped-image-${Date.now()}.png`
  link.href = dataURL
  link.click()
}
// cropAndSaveImage(props.picBg.F_url, [165, 428, 487, 101])
// 
function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = url
  })
}

let unique = 0
function buildShortUUID(prefix = '') {
  const time = Date.now()
  const random = Math.floor(Math.random() * 1000000000)
  unique++
  return prefix + '_' + random + unique + String(time)
}
</script>

<style lang="less" scoped>
.box-board {
  position: relative;
  user-select: none;
  .box {
    position: absolute;
    z-index: 10;
    border: 2px solid #448efb;
    .tag-index {
      position: absolute;
      z-index: 10;
      right: -2px;
      top: -2px;
      transform: translateY(-100%);
      padding: 3px 8px;
      color: #386bff;
      background-color: #cddfff;
    }
    .box-anchor {
      position: absolute;
      left: 0;
      top: 0;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #fff;
      border: 2px solid silver;
      &.top-center {
        left: 50%;
      }
      &.top-right {
        left: 100%;
      }
      &.left-center {
        top: 50%;
      }
      &.right-center {
        left: 100%;
        top: 50%;
      }
      &.bottom-left {
        top: 100%;
      }
      &.bottom-center {
        left: 50%;
        top: 100%;
      }
      &.bottom-right {
        left: 100%;
        top: 100%;
      }
    }
  }
  .bg-img {
    user-select: none;
  }
  .context-memu {
    padding: 10px 6px;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
    .menu-item {
      font-size: 16px;
      padding: 6px 12px;
      cursor: pointer;
      &:hover {
        color: #448efb;
        background-color: #f1f1f1;
        background-color: aliceblue;
      }
    }
  }
}
</style>
