<template>
  <teleport to="body" :disabled="!showPopover">
    <div class="popover" ref="popoverRef" v-show="showPopover" @click="togglePopover">
      <slot name="reference"></slot>
      <slot></slot>
    </div>
  </teleport>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  trigger: {
    type: String,
    default: "hover",
  },
});

const showPopover = ref(false);

const popoverRef = ref(null);

const referEl = ref(null);
const parentEl = ref(null);

const togglePopover = () => {
  showPopover.value = !showPopover.value;
};

const clickOutside = (e) => {
  if(!e.target.contains(popoverRef.value) && e.target !== referEl.value) {
    showPopover.value = false
  }
}

onMounted(() => {
  // console.log("popoverRef:", popoverRef.value.parentElement);
  referEl.value = popoverRef.value.firstElementChild;
  referEl.value.addEventListener('click', togglePopover)
  // console.log('referEl', referEl.value);
  parentEl.value = popoverRef.value.parentElement
  const nextSibling = referEl.value.parentElement.nextElementSibling
  // console.log('nextElementSibling', nextSibling, nextSibling.parentElement);
  parentEl.value.insertBefore(referEl.value, nextSibling)
  document.documentElement.addEventListener('click', clickOutside)
});
</script>

<style lang="less" scoped>
.popover {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px;
  height: 100px;
  background-color: aliceblue;
  border-radius: 12px;
  inset: 45px 15px;
}
</style>
