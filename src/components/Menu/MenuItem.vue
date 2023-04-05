<template>
  <li class="item">
    <div class="title" @click="toggleExpanded">
      {{ menuItem.name }}
      <span v-if="menuItem.level === 3"> 12 </span>
    </div>
    <ul
      class="submenu"
      v-if="menuItem.children"
      v-show="isExpanded || !(menuItem.level === 1)"
    >
      <template v-for="(subItem, index) in menuItem.children" :key="index">
        <MenuItem :menuItem="subItem" />
      </template>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MenuItem from "./MenuItem.vue";
interface IMenuItem {
  name: string,
  level: number,
  children: [],
}
defineProps<{
  menuItem: IMenuItem
}>();
const isExpanded = ref(false);
const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<style scoped>
.item {
  line-height: 2.2;
}
.submenu {
  list-style: none;
  margin: 0;
  padding: 0;
}
.submenu li {
  padding-left: 20px;
}
.submenu li .submenu li {
  color: gold;
}
</style>
