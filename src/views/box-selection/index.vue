<template>
  <div class="parse-box">
    <!-- <el-scrollbar ref="stageScrollRef" class="container-scroll" @scroll="onScroll"> -->
    <div class="container-scroll" ref="stageScrollRef" @scroll="onScroll">
      <BoxBoard
        :picBg="mockPicList[0]"
        :drawingStatus="drawingStatus"
        :connectStatus="connectStatus"
        :cache="cache"
        :scrollPos="scrollPos"
        @updateBoxCache="updateBoxCache"
        @updateBoxItem="updateBoxItem"
        @combineBox="combineBox"
      />
    </div>
    <!-- </el-scrollbar> -->
    <div class="bottom-handler">
      <button class="handle-btn" @click="startDrawBox">框题</button>
      <button class="handle-btn" @click="startCombineBox">合并</button>
    </div>
    <!-- <FileDragUploader /> -->
  </div>
</template>

<script setup lang="ts">
import BoxBoard from '@/views/box-selection/components/BoxBoard.vue'
// import FileDragUploader from '@/views/box-selection/components/FileDragUploader.vue'
import { ref, reactive, onMounted } from 'vue'
import useGrab from '@/hooks/useGrab'

type BoxPic = {
  F_url: string
  width: number
  height: number
  page: number
  scale: number
  reWidth: number
  reHeight: number
  // points?: [number, number, number, number]
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

type EditQstInfo = {
  id: string
  index: number
  qstInfo: any
  lackTag: string
  annotation: any
  [k: string]: any
}

const mockPicList: BoxPic[] = [
  {
    page: 1,
    F_url:
      'https://precision-science-miniprogram.oss-cn-shenzhen.aliyuncs.com/student-wrong-book/preview/1f93ebb758c17f92a683763d757adeaa.jpg',
    width: 1191,
    height: 1684,
    scale: 1,
    reWidth: 1191,
    reHeight: 1684,
    // scale: 0.5,
    // reWidth: 1191 * 0.5,
    // reHeight: 850,
  },
]

const drawingStatus = ref(false) // 手动框题激活状态
const connectStatus = ref(false) // 题目关联激活状态

const startDrawBox = () => {
  drawingStatus.value = true
  connectStatus.value = false
}

const startCombineBox = () => {
  drawingStatus.value = false
  connectStatus.value = true
}

const cache = ref<Recordable<FragmentItem>>({})
const editQstList = ref<EditQstInfo[]>([])

// 滚动情况下的题框坐标
const scrollPos = reactive({
  top: 0,
  left: 0,
})
const onScroll = (e: any) => {
  // console.log('scroll =>', e);
  const { scrollTop, scrollLeft } = e.target
  scrollPos.top = scrollTop
  scrollPos.left = scrollLeft
}
// const onScroll = ({ scrollTop, scrollLeft }) => {
//   scrollPos.top = scrollTop
//   scrollPos.left = scrollLeft
// }

const stageScrollRef = ref(null)
onMounted(() => {
  stageScrollRef.value && useGrab(stageScrollRef.value)
})

// 获取空的框题编辑题目
const getEmptyEditQstInfo = (initValue?: any, initAnno?: any): EditQstInfo =>
  Object.assign(
    {
      id: '',
      index: 0,
      qstInfo: {},
      lackTag: '缺少题型',
      annotation: initAnno || {},
    },
    initValue,
  )

// 新增和删除题框传入对应题框的 boxId
const updateBoxCache = (newCache: Recordable<FragmentItem>, boxId: string) => {
  // 只需要单独处理题框对应的题目列表数据，题框数据在最后直接用新的值覆盖
  if (boxId) {
    // 如果旧的 cache 中不存在 boxId 则为新增
    const isAdd = !cache.value[boxId]
    if (isAdd) {
      // 新增空白题目数据，题目的 id 即题框id
      const oldData = editQstList.value.find((v) => v.id.includes(boxId))
      !oldData && editQstList.value.push(getEmptyEditQstInfo({ id: boxId }))
    } else {
      // 删除题框对应题目数据
      const deletedBox = cache.value[boxId]
      let deletedId = boxId
      if (deletedBox.combinedId) {
        deletedId = deletedBox.combinedId
        // 删除的是合并过的题框，除了选中的题框 id，其他合并题框需要生成对应的空白题目数据
        const combindIds = deletedId.split(',').filter((id) => id !== boxId)
        combindIds.forEach((id) => editQstList.value.push(getEmptyEditQstInfo({ id })))
      }
      // 移除需要删掉的题框对应的题目
      console.log('deletedId =>', deletedId)
      editQstList.value = editQstList.value.filter((v) => v.id !== deletedId)
    }
  }
  // 更新题框数据
  cache.value = newCache
  updateIndexOrder()
}

// 更新单个题框数据
const updateBoxItem = (newBox: FragmentItem) => {
  cache.value[newBox.id] = newBox
  updateIndexOrder()
}

// 合并题框，题目列表中也需要相应进行合并
const combineBox = (combinedId: string) => {
  editQstList.value = editQstList.value.filter((v) => !combinedId.includes(v.id))
  editQstList.value.push(getEmptyEditQstInfo({ id: combinedId }))
  updateIndexOrder()
}

// 更新题号排序
const updateIndexOrder = () => {
  editQstList.value.sort((a, b) => {
    const aMinFrag = cache.value[a.id.split(',')[0]]
    const bMinFrag = cache.value[b.id.split(',')[0]]
    const [ax, ay] = aMinFrag.points
    const [bx, by] = bMinFrag.points
    const range = 300
    // 题框在同一页面按照优先从左到右，从上到下排序
    // console.log(
    //   aMinFrag.pageNum === bMinFrag.pageNum,
    //   ax - bx,
    //   ay - by,
    //   aMinFrag.pageNum - bMinFrag.pageNum,
    // )
    if (aMinFrag.pageNum === bMinFrag.pageNum) {
      return Math.abs(ax - bx) < range ? ay - by : ax - bx
    } else {
      // 题框不在同一页面，按照页码排序
      return aMinFrag.pageNum - bMinFrag.pageNum
    }
  })
  // 同步题框和题目 index
  editQstList.value.forEach((v, i) => {
    v.index = i + 1
    const ids = v.id.split(',')
    ids.forEach((id, index) => {
      cache.value[id].isFirst = index === 0
      cache.value[id].index = i + 1
    })
  })
}

</script>

<style lang="less" scoped>
.parse-box {
  // display: flex;
  // justify-content: center;
  // flex: 1;
  // overflow: auto;
  // background-color: #f7f8fa;
  .container-scroll {
    // height: calc(100vh - 54px);
    height: 80vh;
    overflow: auto;
  }
}
</style>