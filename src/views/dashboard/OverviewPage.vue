<template>
  <h3 class="p-3">
    {{ projectName }}
  </h3>
  <h3 class="p-3">Visit Count : {{ visitCount }}</h3>
  <button @click="increase">Count +</button>
</template>

<script>
import { infoStore } from "../../data/info";
export default {
  data() {
    return {
      projectName: infoStore.projectName,
      visitCount: infoStore.visitCount,
    };
  },
  methods: {
    increase() {
      infoStore.visitCount += 1;
    },
  },
};
</script>

<style>
h1 {
  color: red;
}
</style>
