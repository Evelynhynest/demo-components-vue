<template>
  <TransitionGroup name="list" tag="ul" class="draggable-list">
    <!-- <li
      v-for="(item, index) in list"
      :key="item.label"
      @dragenter="dragenter($event, index)"
      @dragover="dragover($event, index)"
      @dragstart="dragstart($event, index)"
      @dragend="dragend($event, index)"
      draggable="true"
    > -->
    <li
      v-for="(item, index) in list"
      :key="item.label"
      :class="{ active: dragIndex === index }"
      @dragstart="dragstart($event, index)"
      @dragenter="dragenter($event, index)"
      @dragend="dragend($event, index)"
      draggable="true"
    >
      {{ item.label }}
    </li>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { ref } from "vue";
const list = ref([
  { label: "列表1" },
  { label: "列表2" },
  { label: "列表3" },
  { label: "列表4" },
  { label: "列表5" },
  { label: "列表6" },
]);
const dragIndex = ref(-1);
const dragenter = (e: Event, index: number) => {
  // console.log("dragenter", e.target, index);
  e.preventDefault()
  if (dragIndex.value !== index) {
    const resource = list.value[dragIndex.value];
    // console.log("resource:", resource);
    list.value.splice(dragIndex.value, 1);
    list.value.splice(index, 0, resource);
    dragIndex.value = index;
  }
};
const dragstart = (e: Event, index: number) => {
  dragIndex.value = index;
  // console.log("dragstart", e.target, index);
};
/* const dragover = (e: Event, index: number) => {
  // console.log("dragover", e.target, index);
  e.preventDefault()
}; */
const dragend = (e: Event, index: number) => {
  // console.log("dragend", e.target, index);
  dragIndex.value = -1;
};
</script>

<style scoped>
body {
  user-select: none;
}
.draggable-list {
  list-style: none;
  width: 120px;
  text-align: center;
}
.draggable-list li {
  margin: 10px;
  height: 32px;
  line-height: 32px;
  background-color: aliceblue;
  cursor: move;
}

.draggable-list li.active {
  opacity: 0.5;
}

/* 对移动中的元素应用的过渡 */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  /* transform: translateX(30px); */
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
</style>
