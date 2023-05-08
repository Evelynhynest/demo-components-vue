<template>
  <div class="header">header text</div>
  <div class="content">
    <div class="content-title">title</div>
    <Popover class="container">
      <template v-slot:reference>
        <div class="inner">123</div>
      </template>
      <template v-slot:default>
        <div>content text</div>
      </template>
    </Popover>
    <div class="content-footer">footer</div>
  </div>
</template>

<script setup>
import Popover from './Popover.vue'

</script>

<style lang="less" scoped>

.content {
  .popover {
    position: absolute;
  }
  .inner {
    position: absolute;
    top: 20px;
    left: 40px;
    width: 40px;
    height: 20px;
    background-color: #fff;
    cursor: pointer;
  }
}
</style>

<!-- <template>
  <div @click="closeDialog">
    <div ref="tableMainRef">
      <div class="cell-item" @click="showDialog">test popover</div>
    </div>
    <div
      class="dialog"
      ref="dialogRef"
      v-show="dialogVisiable"
      :style="{ left: xAxis + 'px', top: realYAxis + 'px' }"
    >
      <div class="dialog-arrow"></div>
      <div class="dialog-insideArrow"></div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const dialogVisiable = ref(false);
const xAxis = ref(0);
const yAxis = ref(0);
const initScrollTop = ref(0);
const realYAxis = ref(0);
const dialogRef = ref(null);
const tableMainRef = ref(null);
const showDialog = (event) => {
  let domLoc = event.srcElement.getBoundingClientRect();
  xAxis.value = domLoc.x + domLoc.width;
  yAxis.value = domLoc.y - domLoc.height;
  initScrollTop.value = tableMainRef.value.scrollTop;
  realYAxis.value = yAxis.value;
  dialogVisiable.value = true;
};
// 显示弹出框
const handleScroll = () => {
  realYAxis.value =
    yAxis.value - tableMainRef.value.scrollTop + initScrollTop.value;
};
const closeDialog = (event) => {
  if (
    event.srcElement.className !== "cell-item" &&
    !dialogRef.value.contains(event.srcElement)
  ) {
    // 获取点击到的dom的className
    dialogVisiable.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, true);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll, true);
});
</script>
<style lang="less">
.cell-item {
  display: inline-block;
}
.dialog {
  background: #fff;
  position: absolute;
  width: 80px;
  z-index: 100;
  border: 1px solid #ebeef5;
  box-shadow: 1px 1px 2px 0px rgba(192, 196, 204, 1),
    -1px -1px 2px 0px rgba(192, 196, 204, 1);
  &-arrow {
    width: 0;
    height: 0;
    border: 14px solid transparent;
    border-right-color: rgba(192, 196, 204, 0.7);
    position: relative;
    top: 25px;
    left: -29px;
  }
  &-insideArrow {
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-right-color: #fff;
    position: relative;
    top: -1px;
    left: -24px;
  }
}
</style> -->
