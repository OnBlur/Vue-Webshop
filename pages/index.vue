<template>
  <div class="container">
    <div class="header">
      <Banner />
      <CheckItems />
    </div>
    <div class="menu">
      <Filters :categories="products" />
    </div>
    <div class="main">
      <ProductOverview :products="products" />
    </div>
    <OrderButton @open-modal="basketModal = true" />
    <BasketModal
      v-if="basketModal"
      @closeModal="basketModal = !basketModal"
      :details="details"
    />
  </div>
</template>

<script>
import data from '@/static/products.json'

export default {
  name: 'Webshop',

  data() {
    return {
      products: data,
      basketModal: false,
    }
  },
  mounted() {
    this.$store.dispatch('basket/getAllInit')
  },
  computed: {
    details() {
      return this.$store.getters['basket/allData']
    },
    productsStore() {
      return this.$store.getters['products/allData']
    },
  },
  watch: {
    details: {
      handler(newVal, oldVal) {
        localStorage.setItem('basket', JSON.stringify(newVal))
      },
      deep: true,
    },
  },
}
</script>

<style lang="scss">
.header {
  grid-area: header;
}
.menu {
  grid-area: menu;
}
.main {
  grid-area: main;
}
.fixed-button{
  grid-area:button;
}

.container {
  width:75%;
  display: grid;
  grid-template-columns: 20% auto;
    grid-template-areas:
      "header header"
      "menu main";
  

  .header {
    margin-bottom: 20px;
  }
  .menu {
  }
  .main {
  }
}

@media only screen and (max-width: 701px) {
  .container {
    width:90%;
    grid-template-columns: auto auto;
    grid-template-areas:
    "header"
    "menu"
    "main"
    "button";
  }
}
</style>
