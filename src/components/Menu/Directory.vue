<template>
  <ul class="directory">
    <template v-for="(subDirectory, index) in directoryData" :key="index">
      <SubDirectory v-if="subDirectory.children" :subDirectory="subDirectory" />
      <DirectoryItem v-else :subItem="subDirectory" />
    </template>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import SubDirectory from "./SubDirectory.vue";
import DirectoryItem from "./DirectoryItem.vue";
import type { IDirectoryItem } from "./type";

const directoryData: Ref<IDirectoryItem[]> = ref([
  {
    name: "Chapter1",
    level: 1,
    children: [
      {
        name: "Lesson1",
        level: 2,
        children: [
          {
            name: "Paragraph1",
            level: 3,
          },
        ],
      },
      {
        name: "Lesson2",
        level: 2,
        children: [
          {
            name: "Paragraph2",
            level: 3,
          },
        ],
      },
    ],
  },
  {
    name: "Chapter2",
    level: 1,
    children: [
      {
        name: "Lesson1",
        level: 2,
        children: [
          {
            name: "Paragraph1",
            level: 3,
          },
        ],
      },
    ],
  },
  {
    name: "Chapter3",
    level: 1,
  },
  {
    name: "Chapter4",
    level: 1,
  },
  {
    name: "Chapter5",
    level: 1,
  },
]);
</script>

<style scoped lang="less">
.directory {
  margin: 0;
  padding: 0;
  padding-left: 20px;
  width: 160px;
  line-height: 2;
  list-style: none;
  background-color: bisque;
}
</style>
