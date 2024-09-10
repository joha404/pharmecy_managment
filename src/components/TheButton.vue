<template>
  <div class="the-button">
    <button>
      <slot></slot>
    </button>
    <div class="the-button_loading" v-if="loading">
      <img src="../assets/spinner.gif" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.the-button {
  position: relative;
  display: inline-block;

  margin-top: 10px;
}
.the-button-block {
  width: 100%;
}
.the-button_loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(48, 15, 13);
}
.the-button button {
  padding: 9px 22px;
  font-size: 15px;
  background-color: rgb(17, 2, 2);
  border: 1px solid green;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 2px 2px 1px #fafafa;
  border-radius: 3px;
  width: 100% !important;
}
.the-button button:hover {
  color: #ffdac8;
  background-color: #000;
  box-shadow: 0 2px 3px 2px #afafaf;
}
.the-button_loading img {
  width: 25px;
}
</style>
