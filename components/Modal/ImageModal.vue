<template>
  <Modal @close="close">
    <div class="image">
      <img :src="image" alt="" />
    </div>
  </Modal>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit('closeModal')
    },
  },
}
</script>

<style lang="scss" scoped>
.image {
  z-index: 701;
  img {
    max-width: 700px;
  }
}

/* Add Animation */
.image {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.3s;
  animation-name: zoom;
  animation-duration: 0.3s;
}

@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@media only screen and (max-width: 701px) {
  .image{
    width: 100%;
    img{
      width: 100%;
    }
  }
}
</style>
