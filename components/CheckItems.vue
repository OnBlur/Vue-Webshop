<template>
  <div class="checks">
    <div class="check-item" v-for="(item, index) in checks" :key="index">
      <div class="icon check">e</div>
      <div class="check-text">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checks: [
        'Gemmakelijk en snel',
        'Ruime keuze uit luxe vlees',
        '5 dagen na bestelling af te halen',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.checks {
  display: flex;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid $lines;

  .check-item {
    display: flex;
    flex-grow: 0.1;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: icons;
      margin-right: 10px;
      color: $primary;
      font-size: 20px;
    }
    .check-text{
      font-size: 14px;
    }
  }
}

@media only screen and (max-width: 701px) {
  .checks{
    display: none;
  }
}
</style>
