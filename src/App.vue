<template>
  <div class="app">
    <!-- <Menu /> -->
    <!-- <Directory /> -->
    <!-- <DraggableList /> -->
    <!-- <SimpleCarousel /> -->
    <!-- <StepsProgress /> -->
    app
  </div>
</template>

<script setup lang="ts">
// import Menu from "./components/Menu/Menu.vue";
// import Directory from "./components/Menu/Directory.vue";
import DraggableList from "./components/Draggable/DraggableList.vue";
import SimpleCarousel from "./components/Carousel/SimpleCarousel.vue";
import StepsProgress from "./components/StepsProgress/StepsProgress.vue";

import mammoth from 'mammoth'

mammoth.convertToHtml({ path: "https://ziyuan.ebag.readboy.com/ebag-homework-api/3171183520118595/20231018错题训练-教师用卷.docx" })
.then((res) => {
  const html = res.value
  console.log('converted:', res, html);
})
.catch((err) => {
  console.log('convert failed:', err);
})
</script>

<style scoped></style>
