<template>
  <template v-for="chapter in chapterList">
    <template v-if="chapter.F_chapter_children && chapter.F_chapter_children.length">
      <li class="menu-item">
        <ul class="sub-menu">
          <BookDirectoryItem :chapter-list="chapter.F_chapter_children"/>
        </ul>
      </li>
    </template>
    <template v-else>
      <li class="menu-item">{{ chapter.F_chapter_name }}</li>
    </template>
  </template>
</template>

<script setup>
import BookDirectoryItem from "./BookDirecItem.vue";
defineProps({
  chapterList: {
    type: Array,
    required: true,
  }
})
</script>

<style lang="less" scoped>

</style>
