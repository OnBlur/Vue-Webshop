<template>
  <div class="fixed-button" @click="$emit('open-modal')">
    <a>Bestellen</a>
  </div>
</template>

<style lang="scss" scoped>
.fixed-button {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 20px;
  right: 40px;
  width: 100px;
  height: 100px;
  background-color: $primary;
  border-radius: 50%;
  z-index: 2;

  a {
    color: white;
    font-weight: bold;
    font-size: 14px;
  }
}

@media only screen and (max-width: 701px) {
  .fixed-button{
    margin-top:50px;
    margin-bottom: 50px;
    position: inherit;
    width: 100%;
    border-radius: 100px;
    height: 50px;
  }
}
</style>
