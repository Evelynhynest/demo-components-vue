<template>
  <div class="title" @click="toggleExpanded">
    {{ subDirectory.name }}
  </div>
  <ul class="sub-directory" v-show="isExpanded || !(subDirectory.level === 1)">
    <template v-for="item in subDirectory.children">
      <template v-if="item.children">
        <SubDirectory :subDirectory="item" />
      </template>
      <template v-else>
        <DirectoryItem :subItem="item" />
      </template>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SubDirectory from "./SubDirectory.vue";
import DirectoryItem from "./DirectoryItem.vue";
import type { ISubDirectory, IDirectoryItem } from './type'

defineProps<{
  subDirectory: ISubDirectory | IDirectoryItem
}>();
const isExpanded = ref(false);
const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<style scoped>
.sub-directory {
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 20px;
  line-height: 2;
}
</style>
