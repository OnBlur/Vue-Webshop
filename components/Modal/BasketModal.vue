<template>
  <Modal @close="close">
    <div class="basket">
      <div class="check">
        <BasketItem
          v-for="(item, index) in products"
          :key="item.id"
          :product="item"
          :amount="details[index].amount"
          @calcTotal="calcTotal"
        />
        <hr />
        <div class="total">
          <div class="total-text">Total</div>
          <div class="total-amount">€ {{ totalPrice.toFixed(2) }}</div>
        </div>
      </div>
      <button class="button-checkout">Betalen</button>
    </div>
  </Modal>
</template>

<script>
export default {
  props: {
    details: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      totalPrice: 0,
    }
  },
  computed: {
    products() {
      return this.$store.getters['products/getProducts'](this.details)
    },
  },
  methods: {
    close() {
      this.$emit('closeModal')
    },
    calcTotal(value) {
      this.totalPrice += value
    },
  },
}
</script>

<style lang="scss" scoped>
.basket {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 500px;
  height: 600px;
  background-color: white;
  z-index: 701;
  padding: 60px;
  border-radius: 5px;

  .check {
    hr {
      margin-top: 10px;
    }
    .total {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      margin-top: 5px;
      .total-text {
      }
      .total-amount {
      }
    }
  }
  .button-checkout {
    cursor: pointer;
    border: none;
    background-color: $primary;
    color: white;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 5px;
  }
}

/* Add Animation */
.basket {
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
