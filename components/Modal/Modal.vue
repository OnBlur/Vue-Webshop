<template>
  <div class="modal">
    <div class="overlay" @click="close"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods:{
    close(){
      this.$emit("close")
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  /* margin: 0 auto; */
  z-index: 700;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  .overlay {
    cursor: pointer;
    position: fixed;
    background-color: gray;
    height: 100vh;
    width: 100%;
    opacity: 0.6;
  }
}
</style>
