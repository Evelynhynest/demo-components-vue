<template>
  <div class="move-popover" v-show="visible">
    <div class="popover-mask" @click="$emit('closePopover')"></div>
    <div class="popover-container" ref="containerRef">
      <div class="popover-left">123</div>
      <div class="popover-right">456</div>
    </div>
  </div>
  <slot name="reference"></slot>
</template>

<script setup>
import { ref, onMounted, watchEffect, nextTick } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  referenceRef: {
    type: Object,
    required: true,
  }
})

defineEmits('closePopover')

const containerRef = ref(null)

const handleBoundary = (referenceRect, containerRect) => {
  const result = {}
  result.top = referenceRect.top
  result.left = referenceRect.left + referenceRect.width
  // top center bottom <--> popover height
  const top = referenceRect.top

  // left right <--> popover width
  const left = referenceRect.left
  if(left < containerRect.width) {
    return 'right'
  }
  const right = document.documentElement.clientWidth - (referenceRect.left + referenceRect.width)
  if(left > containerRect.width) {
    return 'left'
  }


}

const handlePosition = async () => {
  await nextTick()
  // if(props.referenceRef) {
    const referenceRect = props.referenceRef.getBoundingClientRect()
    const containerRect = containerRef.value.getBoundingClientRect()
    // console.log('position:', referenceRect.top, referenceRect.left, containerRef.value);
    containerRef.value.style.top = referenceRect.top + 'px'
    containerRef.value.style.left = referenceRect.left + referenceRect.width + 'px'
  // }
}

onMounted(() => {
  handlePosition()
})

</script>

<style lang="less" scoped>
.move-popover {
  &,
  .popover-mask {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .popover-container {
    position: fixed;
    background-color: aliceblue;
  }
}
</style>
