<template>
  <div class="filters">
    <a
      v-for="(cat, index) in getCategories"
      :key="index"
      :class="{ active: selectedCat === index }"
      @click="selectFilter(cat, index)"
      >{{ cat }}</a
    >
    <button class="filter-mobile" @click="filterModal = !filterModal">
      Filter
    </button>
    <FilterModal
      v-if="filterModal"
      @closeModal="filterModal = !filterModal"
      :filters="getCategories"
      :selectedCat="selectedCat"
      :selectFilter="selectFilter"
    />
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      selectedCat: 0,
      filterModal: false,
    }
  },
  computed: {
    getCategories() {
      let categoryTitles = []
      for (let i = 0; i < this.categories.length; i++) {
        categoryTitles.push(this.categories[i].title)
      }
      return ['Toon Alles', ...categoryTitles]
    },
  },
  methods: {
    selectFilter(title, index) {
      this.selectedCat = index

      let elmnt = document.getElementById(title)
      elmnt.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 2;
  a {
    cursor: pointer;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
    &.active {
      font-weight: bold;
    }
  }
  .filter-mobile {
    display: none;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid $primary;
    background-color: white;
    color: $primary;
    font-weight: bold;
    margin-bottom: 20px;

    &:hover {
      background-color: $primary;
      color: white;
    }
  }
}

@media only screen and (max-width: 701px) {
  a {
    display: none;
  }
  .filter-mobile {
    display: block !important;
  }
}
</style>
