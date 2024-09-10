<template>
  <teleport to="body">
    <transition name="fade">
      <div class="the-modal" v-show="modelValue">
        <transition name="zoom">
          <div class="the-modal__container" v-show="modelValue">
            <div class="the-modal__header d-flex jc-between ai-center">
              <div class="p-2 pl-3">
                {{ heading }}
              </div>
              <div class="the-modal__close" @click="closeModal">X</div>
            </div>
            <div class="the-modal__body">
              <slot></slot>
              <!-- Modal content here -->
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: "TheModal",
  props: {
    heading: {
      type: String,
      default: "Default Heading",
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("update:modelValue", false);
    },
  },
};
</script>

<style>
.the-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.the-modal__container {
  width: 444px;
  min-height: 222px;
  background-color: rgb(235, 235, 235);
  border-radius: 9px;
  box-shadow: 0 0 15px 5px rgb(0 0 0 / 20%);
}
.the-modal__header {
  font-size: 22px;
  font-weight: bold;
  color: red;
}
.the-modal__close {
  cursor: pointer;
  padding: 3px 9px;
  font-weight: bold;
}
.the-modal__close:hover {
  color: green;
}
.the-modal__body {
  padding: 44px;
  padding-top: 22px;
}
</style>
