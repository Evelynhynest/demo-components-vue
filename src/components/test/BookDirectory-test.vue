<template>
  <div class="book-directory">
    <el-menu
      unique-opened
      :default-active="cur_chapter + ''"
      :default-openeds="defaultOpened"
      @mouseleave="hideEditHandler"
    >
      <BookDirectoryItem :chapter-list="chapterList" />
    </el-menu>
  </div>
</template>

<script setup>
import { computed, ref, nextTick } from 'vue'
import BookDirectoryItem from './BookDirectoryItem.vue'
import { storeToRefs } from 'pinia'
import { usePrepareLessonStore } from '@/stores/prepareLesson'
import {
  reqSectionSelfModify,
  reqSectionSelfDelete
} from '@/api/prepare-lesson/service'
const prepareLessonStore = usePrepareLessonStore()
const { cur_book, chapterList } = storeToRefs(prepareLessonStore)

const props = defineProps({
  cur_chapter: {
    type: Number,
    required: true
  },
  changeStore: {
    type: Boolean,
    default: true
  },
  selfSectionEditable: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['changeChapter'])

// 默认展开章节
const defaultOpened = computed(() => {
  // 一级submenu
  let index = chapterList.value?.findIndex(
    (chapter) => chapter.F_chapter_id === props.cur_chapter
  )
  // 二级submenu
  if (index === -1) {
    chapterList.value.forEach((chapter, i) => {
      if (
        chapter.F_chapter_children.findIndex(
          (child) => child.F_chapter_id === props.cur_chapter
        ) !== -1
      ) {
        index = i + '' + i
      }
    })
  }
  return [
    (index === -1 ? 0 : index) + '',
    index.length === 2 ? index[0] : undefined
  ]
})

const changeActiveChapter = (chapter_id) => {
  if (props.changeStore) {
    prepareLessonStore.changeCurrentChapter(chapter_id)
  } else {
    // 移动资源时切换章节不影响仓库数据
    emit('changeChapter', chapter_id)
  }
}

const cur_self_section = ref(-1)
const showSelfInput = ref(false)
const editSelfInputRef = ref(null)
const hideEditHandler = () => {
  if (!showSelfInput.value) [(cur_self_section.value = -1)]
}
const changeSelfSection = (F_user_create, index) => {
  if (showSelfInput.value) {
    return
  }
  if (F_user_create === 1) {
    cur_self_section.value = index
  }
}

const getSectionSelfModify = async (F_name) => {
  const res = await reqSectionSelfModify(
    cur_book.value.F_book_id,
    chapterList.value[cur_self_section.value].F_chapter_id,
    F_name
  )
  console.log('getSectionSelfModify:', res)
}

const getSectionSelfDelete = async () => {
  const res = await reqSectionSelfDelete(
    cur_book.value.F_book_id,
    chapterList.value[cur_self_section.value].F_chapter_id
  )
  if (res.F_responseNo === 10000) {
    const selfIndex = chapterList.value.findIndex(
      (item) => item.F_chapter_id === cur_self_section.value
    )
    chapterList.value.splice(selfIndex, 1)
  }
}

const editSelfSection = async () => {
  showSelfInput.value = true
  await nextTick()
  // editSelfInputRef.value[cur_self_section.value].focus()
  editSelfInputRef.value[0].value =
    chapterList.value[cur_self_section.value].F_chapter_name
  editSelfInputRef.value[0].focus()
}

const saveEditSelfSection = () => {
  const newSelfName = editSelfInputRef.value[0].value
  if (
    chapterList.value[cur_self_section.value].F_chapter_name !== newSelfName &&
    newSelfName.trim()
  ) {
    getSectionSelfModify(newSelfName)
    chapterList.value[cur_self_section.value].F_chapter_name = newSelfName
  }
  showSelfInput.value = false
}

const deleteSelfSection = () => {
  getSectionSelfDelete()
}
</script>

<style lang="less" scoped>
:deep(.el-menu) {
  width: 13vw;
  border-right: 0;
  .edit-input {
    font-size: 0.84vw;
    width: 100%;
    height: 3.5vh;
    line-height: 3.5vh;
    box-sizing: border-box;
    padding-left: 1vw;
    padding-right: 4vw;
    border-radius: 6px;
    border: dashed 1px #d9d9d9;
    background-color: #f3f5f9;
    color: #333333;
    outline: none;
  }
  .input-save {
    position: absolute;
    top: 0.2vh;
    right: 1vw;
    font-size: 0.84vw;
    color: #666666;
    cursor: pointer;
    &::before {
      position: absolute;
      top: 1vh;
      left: -1vw;
      content: '';
      display: inline-block;
      width: 1px;
      height: 2vh;
      background-color: #d9d9d9;
    }
  }

  .edit-handler {
    position: absolute;
    right: 0;
    margin-right: 1.5vw;
    display: flex;
    gap: 1vw;
    img {
      height: 1.5vh;
    }
  }

  .el-sub-menu {
    & > .menu {
      padding-left: 1vw;
    }
    .el-sub-menu__title {
      --el-menu-item-height: 4vh;
      --el-menu-item-font-size: 0.84vw;
      --el-menu-hover-bg-color: transparent;
      --el-menu-text-color: #000;
      --el-menu-base-level-padding: 0;

      span {
        width: 10vw;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      &::before {
        content: '';
        width: 0.42vw;
        height: 0.42vw;
        margin-right: 0.6vw;
        border-radius: 50%;
        display: inline-block;
        background-color: #666;
        opacity: 0.97;
      }
    }

    .child-submenu {
      .el-sub-menu__title {
        margin-left: 1vw;
      }
      .el-menu {
        padding-left: 1vw;
      }
    }

    // sub-menu选中的样式
    &.cur-active {
      & > .el-sub-menu__title {
        --el-menu-text-color: #999;
        &::before {
          background-color: #666;
          opacity: 0.5;
        }
      }
    }

    .el-sub-menu__icon-arrow {
      right: 0.6vw;
      transform: rotateZ(-90deg) !important;
    }
    &.is-opened .el-sub-menu__icon-arrow {
      transform: rotateZ(0deg) !important;
    }
  }
  .sub-menu-arrow-hidden {
    .el-sub-menu__title {
      .el-sub-menu__icon-arrow {
        display: none;
      }
    }
  }

  &.el-menu--vertical > .el-menu-item {
    --el-menu-item-height: 4vh;
    --el-menu-item-font-size: 0.84vw;
    --el-menu-hover-bg-color: transparent;
    --el-menu-text-color: #000;
    --el-menu-base-level-padding: 0;

    span {
      width: 10vw;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &::before {
      content: '';
      width: 0.42vw;
      height: 0.42vw;
      margin-right: 0.6vw;
      border-radius: 50%;
      display: inline-block;
      background-color: #666;
      opacity: 0.97;
    }
    &.cur-active {
      & > .el-sub-menu__title {
        --el-menu-text-color: #999;
        &::before {
          background-color: #666;
          opacity: 0.5;
        }
      }
    }
    &:hover {
      color: #000;
      background-color: #fff;
    }
    &.is-active {
      font-weight: normal;
      border-radius: 0;
      background-color: #fff;
    }
  }

  &.el-menu--inline {
    .el-menu-item {
      --el-menu-sub-item-height: 3.5vh;
      --el-menu-base-level-padding: 0vw;
      --el-menu-item-font-size: 0.84vw;
      --el-menu-active-color: #0079ff;
      margin-right: 0.6vw !important;
      padding-left: 1vw !important;
      &:hover {
        color: #0079ff;
        background-color: #daedff;
      }
      &.is-active {
        font-weight: bold;
        border-radius: 5px;
        background-color: #daedff;
      }
    }
  }
}
</style>
