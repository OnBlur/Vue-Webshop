<template>
  <Modal @close="close">
    <div class="filters">
      <div
        class="filter-item"
        v-for="(cat, index) in filters"
        :key="index"
        :class="{ active: selectedCat === index }"
        @click="selectFilter(cat, index)"
      >
        {{ cat }}
      </div>
    </div>
  </Modal>
</template>

<script>
export default {
  props: {
    filters: {
      type: Array,
      required: false,
    },
    selectedCat: {
      type: Number,
      default: 0,
    },
    selectFilter: {
      type: Function,
      required: false,
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
.filters {
  display: flex;
  justify-content: space-between;

  width: 100%;
  background-color: white;
  z-index: 701;
  padding: 60px;
  border-radius: 5px;
  .filter-item {
    cursor: pointer;
    &.active {
      font-weight: bold;
    }
  }
}

/* Add Animation */
.filters {
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
</style>
