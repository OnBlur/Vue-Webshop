<template>
  <div class="products-wrapper" id="Toon Alles">
    <div
      class="cat-products"
      v-for="category in products"
      :key="category.id"
      :id="category.title"
    >
      <h2 class="cat-title">{{ category.title }}</h2>
      <div class="products">
        <Product
          v-for="item in category.products"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :price="item.price"
          :image="item.image"
          @enhanceImage="enhanceImage"
        />
      </div>
    </div>
    <About />
    <ImageModal :image="image" v-if="image" @closeModal="closeModal" />
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      image: null,
    }
  },
  methods: {
    enhanceImage(link) {
      this.image = link
    },
    closeModal() {
      this.image = null
    },
  },
}
</script>

<style lang="scss" scoped>
.products-wrapper {
  flex-grow: 1;
  .cat-products {
    margin-bottom: 50px;
    .cat-title {
      margin-bottom: 10px;
      font-size: 19px;
    }
    .products {
      display: grid;
      grid-template-columns: repeat(auto-fill, 200px);
      justify-content: space-between;
      grid-gap: 10px;

      &:after {
        content: '';
        flex: auto;
      }
    }
  }
}

@media only screen and (max-width: 701px) {
  .products {
    grid-template-columns: repeat(auto-fill, 100%) !important;
    .product{
      max-width: 100%;
    }
  }
}
</style>
