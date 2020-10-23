<template>
  <div class="product">
    <img :src="image" alt="Steak" @click="enhanceImage" />
    <div class="product-info">
      <h3 class="product-title">{{ title }}</h3>
      <div class="weight">per 1,65 kilo</div>
      <div class="rest">
        <span class="price">
          <div class="before-decimal">{{ price.split('.')[0] + '.' }}</div>
          <sup class="after-decimal">{{ price.split('.')[1] }}</sup>
        </span>
        <div v-if="productAmount" class="actions">
          <div
            class="button"
            @click="remove"
            v-if="productAmount > 0"
          >
            <div class="icon minus" v-if="productAmount > 1">d</div>
            <div class="icon trash" v-if="productAmount == 1">a</div>
          </div>
          <input
            type="number"
            :value="productAmount"
            @change="setAmount"
            v-if="productAmount > 0"
          />
          <div class="button" @click="add">
            <div class="icon plus">b</div>
          </div>
        </div>
        <div v-else class="actions">
          <div class="button" @click="add">
            <div class="icon plus">b</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      default: 'No title found',
    },
    price: {
      type: String,
      default: '9.99',
    },
    image: {
      type: String,
      required: false,
    },
  },
  computed: {
    productAmount() {
      return this.$store.getters['basket/getAmountById'](this.id)
    },
  },
  methods: {
    enhanceImage() {
      this.$emit('enhanceImage', this.image)
    },
    add() {
      if (this.productAmount) {
        this.$store.dispatch('basket/addItem', {
          productId: this.id,
          amount: this.productAmount + 1,
        })
      } else {
        this.$store.dispatch('basket/addItem', {
          productId: this.id,
          amount: 1,
        })
      }
    },
    setAmount(event) {
      this.$store.dispatch('basket/setAmount', {
        productId: this.id,
        amount: event.target.value,
      })
    },
    remove() {
      this.$store.dispatch('basket/removeItem', {
        productId: this.id,
        amount: this.productAmount,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.product {
  box-shadow: 2px 2px 5px -4px rgba(184, 184, 184, 1);
  margin-top: 20px;
  max-width: 200px;
  img {
    cursor: pointer;
    object-fit: cover;
    height: 130px;
    width: 100%;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
  .product-info {
    padding: 15px;
    .product-title {
      margin-bottom: 20px;
    }
    .weight {
      font-size: 12px;
    }
    .rest {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .price {
        display: flex;
        font-size: 21px;
        font-weight: bold;
        .before-decimal {
          font-size: 24px;
        }
        .after-decimal {
          margin-top: 18px;
          font-size: 14px;
        }
      }
      .actions {
        display: flex;
        .button {
          display: flex;
          justify-content: center;
          align-items: center;

          cursor: pointer;
          width: 32px;
          height: 32px;
          border-radius: 2px;
          background-color: $primary;

          .icon {
            font-family: icons;
            color: white;
            font-size: 15px;
          }
        }
        input {
          width: 40px;
          text-align: center;
          border: none;

          &::-webkit-inner-spin-button,
          &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 701px) {
  img{
    height: 100% !important;
  }
}
</style>
