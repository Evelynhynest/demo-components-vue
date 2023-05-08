<template>
  <teleport to='body' :disabled="showPopover">
    <div class="popover-container" ref="popoverContainerRef">
      <div class="popover" ref="popoverRef" v-show="showPopover" id="pop-0">
        <slot name="reference" v-if="showRefer"></slot>
        <slot></slot>
      </div>
    </div>
  </teleport>
  <!-- <div class="popover-container" ref="popoverContainerRef">
    <div class="popover">
      <PopTrigger>
        <slot></slot>
      </PopTrigger>
      <PopContent>
  
      </PopContent>
    </div>
  </div> -->
</template>

<script setup>
import { ref, onMounted } from "vue";
// import PopContent from "./PopContent.vue";
// import PopTrigger from "./PopTrigger.vue";

const props = defineProps({
  trigger: {
    type: String,
    default: 'hover'
  }
})

const showPopover = ref(false);
const showRefer = ref(true);

const popoverRef = ref(null);
const popoverContainerRef = ref(null);

const referEl = ref(null);
const parentEl = ref(null)

const openPopover = () => {
  showPopover.value = !showPopover.value;
};

onMounted(() => {
  // console.log("element:", popoverRef.value.firstElementChild);
  console.log("element:", popoverContainerRef.value.parentElement);
  referEl.value = popoverRef.value.firstElementChild;
  referEl.value.setAttribute('refer-pop-id', referEl.value.id);
  referEl.value.addEventListener("click", openPopover);
  parentEl.value = popoverContainerRef.value.parentElement
  parentEl.value.appendChild(referEl.value)
  showRefer.value = false
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
  // inset: 367px auto auto 1534px;
  // :deep(.inner) {
  //   position: absolute;
  //   top: 20px;
  //   left: 40px;
  //   width: 40px;
  //   height: 20px;
  //   inset: -10px;
  //   background-color: aliceblue;
  //   cursor: pointer;
  // }
}
</style>
