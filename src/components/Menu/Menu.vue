<template>
  <ul class="menu">
    <template v-for="item in menuData">
      <MenuItem :menuItem="item" />
    </template>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";
import MenuItem from "./MenuItem.vue";
import type { IMenuItem } from './type'

const menuData: Ref<IMenuItem[]> = ref([
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
]);
</script>

<style>
.menu {
  margin: 0;
  padding: 0;
  padding-left: 20px;
  width: 160px;
  list-style: none;
  background-color: aliceblue;
}
</style>
