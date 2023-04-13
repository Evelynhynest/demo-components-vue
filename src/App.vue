<template>
  <div class="app">
    <!-- <Menu /> -->
    <!-- <Directory /> -->
    <DraggableList />
    <SimpleCarousel />
  </div>
</template>

<script setup lang="ts">
// import Menu from "./components/Menu/Menu.vue";
// import Directory from "./components/Menu/Directory.vue";
import DraggableList from "./components/Draggable/DraggableList.vue";
import SimpleCarousel from "./components/Carousel/SimpleCarousel.vue";
const a = [
  {
    F_id: "0-2018-0-f1c6f8fc-a734-38c8-97b5-c738a8c8b7f3",
    F_no: "020203",
    F_name: "一生",
    F_gender: 2,
    F_class_name: "三年级（1）班",
    F_objective_score: "30.0",
    F_correcting_status: 1,
    F_speed: 130324,
    F_submit_datetime: "2023-03-29 16:14:09",
  },
  {
    F_id: "0-2018-0-fc9701fe-0392-3358-a7a5-d25a1d25ace0",
    F_no: "020102",
    F_name: "一心",
    F_gender: 1,
    F_class_name: "三年级（1）班",
    F_objective_score: 200,
    F_correcting_status: 1,
    F_speed: 25421,
    F_submit_datetime: "",
    status: "未完成",
    speed: "—",
    submit_datetime: "—",
    isChecked: false,
  },
  {
    F_id: "0-2018-0-f63932ca-38d5-3660-b511-50d3152a7174",
    F_no: "020101",
    F_name: "一意",
    F_gender: 1,
    F_class_name: "三年级（1）班",
    F_objective_score: 0,
    F_correcting_status: 1,
    F_speed: 0,
    F_submit_datetime: "",
    status: "未完成",
    speed: "—",
    submit_datetime: "—",
    isChecked: false,
  },
  {
    F_id: "0-2018-0-e830da33-452d-3fd4-aca8-1c0a883a6689",
    F_no: "020204",
    F_name: "一世",
    F_gender: 2,
    F_class_name: "三年级（1）班",
    F_objective_score: 0,
    F_correcting_status: 0,
    F_speed: 0,
    F_submit_datetime: "",
    status: "未完成",
    speed: "—",
    submit_datetime: "—",
    isChecked: false,
  },
  {
    F_id: "0-2018-0-e830da33-452d-3fd4-aca8-1c0a883a6689",
    F_no: "020204",
    F_name: "一世",
    F_gender: 2,
    F_class_name: "三年级（1）班",
    F_objective_score: 0,
    F_correcting_status: 0,
    F_speed: 0,
    F_submit_datetime: "",
    status: "未完成",
    speed: "—",
    submit_datetime: "—",
    isChecked: false,
  },
  {
    F_id: "0-2018-0-e830da33-452d-3fd4-aca8-1c0a883a6689",
    F_no: "020204",
    F_name: "一世",
    F_gender: 2,
    F_class_name: "三年级（1）班",
    F_objective_score: 0,
    F_correcting_status: 0,
    F_speed: 0,
    F_submit_datetime: "",
    status: "未完成",
    speed: "—",
    submit_datetime: "—",
    isChecked: false,
  },
  {
    F_id: "0-2018-0-e830da33-452d-3fd4-aca8-1c0a883a6689",
    F_no: "020204",
    F_name: "一世",
    F_gender: 2,
    F_class_name: "三年级（1）班",
    F_objective_score: 0,
    F_correcting_status: 0,
    F_speed: 0,
    F_submit_datetime: "",
    status: "未完成",
    speed: "—",
    submit_datetime: "—",
    isChecked: false,
  },
  {
    F_id: "0-2018-0-e830da33-452d-3fd4-aca8-1c0a883a6689",
    F_no: "020204",
    F_name: "一世",
    F_gender: 2,
    F_class_name: "三年级（1）班",
    F_objective_score: 0,
    F_correcting_status: 0,
    F_speed: 0,
    F_submit_datetime: "",
    status: "未完成",
    speed: "—",
    submit_datetime: "—",
    isChecked: false,
  },
];
</script>

<style scoped></style>
