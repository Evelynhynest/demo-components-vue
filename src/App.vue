<template>
  <div class="main">
    <!-- <Menu /> -->
    <!-- <Directory /> -->
    <!-- <DraggableList /> -->
    <!-- <SimpleCarousel /> -->
    <!-- <StepsProgress /> -->
    <demo />
    <BookDirec />
  </div>
</template>

<script setup lang="ts">
// import Menu from "./components/Menu/Menu.vue";
// import Directory from "./components/Menu/Directory.vue";
// import DraggableList from "./components/Draggable/DraggableList.vue";
// import SimpleCarousel from "./components/Carousel/SimpleCarousel.vue";
// import StepsProgress from "./components/StepsProgress/StepsProgress.vue";
import demo from './components/Popover/demo.vue'
import BookDirec from './components/test/BookDirec.vue'
</script>

<style>
html,
body,
#app {
  padding: 0;
  margin: 0;
  height: 100%;
}
.main {
  height: 100%;
}
</style>
