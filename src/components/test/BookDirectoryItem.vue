<template>
  <template v-for="(chapter, index) in chapterList" :key="chapter.F_chapter_id">
    <template v-if="chapter.F_chapter_children.length">
      <el-sub-menu :index="index + ''">
        <template #title>
          {{ chapter.F_chapter_name }}
        </template>
        <BookDirectoryItem :chapter-list="chapter.F_chapter_children" />
      </el-sub-menu>
    </template>
    <template v-else>
      <el-menu-item :index="chapter.F_chapter_id + ''">
        {{ chapter.F_chapter_name }}
      </el-menu-item>
    </template>
  </template>
</template>

<script setup>
defineProps({
  chapterList: Array
})
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
    .el-sub-menu__title {
      --el-menu-item-height: 4vh;
      --el-menu-item-font-size: 0.84vw;
      --el-menu-hover-bg-color: transparent;
      --el-menu-text-color: #000;
      --el-menu-base-level-padding: 3vw;

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
</style>
