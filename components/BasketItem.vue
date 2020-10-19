<template>
  <div class="item">
    <div class="product-title-amount">
      <a>{{ mergeProduct.amount }}x</a>
      <a>{{ mergeProduct.title }}</a>
    </div>
    <div class="product-price">
      <a>{{ (mergeProduct.amount * +mergeProduct.price).toFixed(2) }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: false,
    },
    amount: {
      type: Number,
      required: false,
    },
  },
  mounted() {
    this.$emit('calcTotal', this.mergeProduct.amount * +this.mergeProduct.price)
  },
  computed: {
    mergeProduct() {
      return { ...this.product, amount: this.amount }
    },
  },
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
</style>
