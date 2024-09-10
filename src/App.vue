<template>
  <div>
    <div class="toasts">
      <the-toast
        v-for="(toast, i) in toasts"
        :key="i"
        :toastType="toast.type"
        :message="toast.message"
      />
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import TheToast from "./components/TheToast.vue";
import { myBus } from "./utils/eventBus";
export default {
  data() {
    return {
      toasts: [],
    };
  },
  components: { TheToast },
  mounted() {
    myBus.on("toast", (data) => {
      // console.log(data);
      this.toasts.push(data);
      this.removeOneToast();
    });
  },
  methods: {
    removeOneToast() {
      setTimeout(() => {
        this.toasts.shift();
      }, 3000);
    },
  },
};
</script>

<style></style>
