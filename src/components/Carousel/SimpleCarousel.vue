<template>
  <div class="carousel">
    <div class="carousel-wrapper">
      <ul class="carousel-list" ref="carouselListRef">
        <template v-for="n in 7">
          <li class="carousel-item" ref="carouselItemRefs">{{n}}00</li>
        </template>
      </ul>
    </div>
    <div class="controller">
      <div class="left" @click="changeItem(0)">&lt;</div>
      <div class="right" @click="changeItem(1)" v-show="cur_last_item < 7">&gt;</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

/* const changeStep = computed(() => document.querySelector('.carousel-item').offsetWidth + window.getComputedStyle(document.querySelector('.carousel-item'))['margin-left'].slice(0, -2) * 2)
const changeItem = (type) => {
  console.log(carouselItemRefs.value);
  // console.log('#', window.getComputedStyle(document.querySelector('.carousel-item'))['margin-left']);
  // console.log('changeStep:', changeStep.value);
  const originX = document.querySelector('.carousel-list').style.transform.split('(')[1]?.slice(0, -3) * 1 || 0
  // console.log('originX:', originX);
  const TranslateX = type === 1 ? originX - changeStep.value : originX + changeStep.value
  // console.log('TranslateX:', TranslateX);
  document.querySelector('.carousel-list').style.transform = `translateX(${TranslateX}px)`
} */

const carouselListRef = ref()
const carouselItemRefs = ref([])
const cur_last_item = ref(3)
const changeStep = computed(() => carouselItemRefs.value[0].offsetWidth + window.getComputedStyle(carouselItemRefs.value[0])['margin-left'].slice(0, -2) * 2)
const changeItem = (type) => {
  console.log(carouselItemRefs.value.at(-1).offsetLeft);
  const originX = carouselListRef.value.style.transform.split('(')[1]?.slice(0, -3) * 1 || 0
  const TranslateX = type === 1 ? originX - changeStep.value : originX + changeStep.value
  carouselListRef.value.style.transform = `translateX(${TranslateX}px)`
  cur_last_item.value = type === 1 ? cur_last_item.value += 1 : cur_last_item.value -= 1
  console.log(cur_last_item.value);
}
</script>

<style lang="less" scoped>
.carousel {
  position: relative;
  width: 210px;
  padding: 0 20px;
}
.carousel-wrapper {
  width: 210px;
  height: 50px;
  overflow: hidden;
}
.carousel-list {
  width: 700px;
  padding: 0;
  margin: 0;
  list-style: none;
  transition: all 0.3s;

  li {
    float: left;
    margin: 0 5px;
    width: 50px;
    text-align: center;
    padding: 2px 4px;
    border: 1px #000 solid;
  }
}

.controller {
  .left {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
  }
  .right {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
}
</style>