<template>
  <div class="steps-progress">
    <div class="steps">
      <template v-for="n in 3" :key="n">
        <div class="step-stage" :class="{ finished: cur_stage >= n }">{{ n }}</div>
        <div v-if="n < 3" class="step-line" :class="{ finished: cur_stage - 1 >= n }"></div>
      </template>
    </div>
    <div class="controller">
      <div class="btn prev" @click="goStage(-1)" v-show="cur_stage !== 1">上一步</div>
      <div class="btn next" @click="goStage(1)" v-show="cur_stage !== 3">下一步</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const cur_stage = ref(1)
const goStage = (value) => {
  cur_stage.value += value 
}
</script>

<style lang="less" scoped>
.steps-progress {
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vw;
  .steps {
    display: flex;
    align-items: center;
    .step-stage {
      width: 4vw;
      height: 4vw;
      line-height: 4vw;
      text-align: center;
      background-color: #fff;
      border-radius: 50%;
      border: 2px solid #333;
      color: #333;
      font-weight: bold;
      
      &.finished {
        color: #007aff;
        border-color: #007aff;
      }
    }

    .step-line {
      width: 8vw;
      height: 2vh;
      background-color: #333;
      &.finished {
        background-color: #007aff;
      }
    }

  }

  .controller {
    display: flex;
    gap: 3vw;
    .btn {
      border: 1px solid #000;
      padding: 1vh 1vw;
      cursor: pointer;
    }
  }
}
</style>