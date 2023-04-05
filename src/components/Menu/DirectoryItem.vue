<template>
  <li>{{ subItem.name }}</li>
</template>

<script setup lang="ts">
import type { IDirectoryItem } from './type'
defineProps<{
  subItem: IDirectoryItem
}>();
</script>

<style scoped></style>
