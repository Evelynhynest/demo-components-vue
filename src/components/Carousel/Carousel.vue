<template>
  <div class="carousel">
    <ul class="carousel-wrapper">
      <li class="carousel-slide" v-for="n in 5">{{ n }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.carousel-wrapper {

  .carousel-slide {
    width: 500px;
    height: 200px;
    background-color: aliceblue;
  }
}
</style>