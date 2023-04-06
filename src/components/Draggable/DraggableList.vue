<template>
  <ul class="draggable-list">
    <li
      v-for="(item, index) in list"
      :key="item.label"
      @dragenter="dragenter($event, index)"
      @dragover="dragover($event, index)"
      @dragstart="dragstart($event, index)"
      @dragend="dragend($event, index)"
      draggable="true"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const list = ref([
  { label: "列表1" },
  { label: "列表2" },
  { label: "列表3" },
  { label: "列表4" },
  { label: "列表5" },
  { label: "列表6" },
]);
const dragIndex = ref();
const dragenter = (e, index) => {
  console.log("dragenter", e.target, index);
  // e.preventDefault()
  if (dragIndex.value !== index) {
    const resource = list.value[dragIndex.value];
    console.log("resource:", resource);
    list.value.splice(dragIndex.value, 1);
    list.value.splice(index, 0, resource);
    dragIndex.value = index;
  }
};
const dragstart = (e, index) => {
  dragIndex.value = index;
  console.log("dragstart", e.target, index);
};
const dragover = (e, index) => {
  console.log("dragover", e.target, index);
  // e.preventDefault()
};
const dragend = (e, index) => {
  console.log("dragend", e.target, index);
};
</script>

<style>
body {
  user-select: none;
}
.draggable-list {
  list-style: none;
  width: 120px;
  text-align: center;
}
li {
  margin: 10px;
  height: 32px;
  line-height: 32px;
  background-color: aliceblue;
  cursor: move;
}
</style>
