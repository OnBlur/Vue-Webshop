<template>
  <div class="banner-wrapper">
    <div class="banner-overlay"></div>
    <div class="banner">
      <div class="banner-steps">
        <h1 class="title">Ons luxe assortiment vlees</h1>
        <div class="steps" v-for="(item, index) in steps" :key="index">
          <div class="circle">{{ index + 1 }}</div>
          <div class="step">{{ item }}</div>
        </div>
      </div>
      <div class="right">
        <div class="action">
          <div class="title">Alleen op bestelling af te halen in de winkel</div>
          <div class="subtitle">> 5 dagen na bestellen</div>
        </div>
        <img src="@/assets/img/cutting.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cssProps: {
        backgroundImage: `linear-gradient(90deg,rgba(126, 192, 181, 1) -50%,rgba(255, 255, 255, 1) 45%)`,
        backgroundImage: `url(${require('@/assets/img/cutting.jpg')})`,
      },
      steps: [
        'Kies je vlees of vis',
        'Kies je winkel en ophaaldatum',
        'Haal en betaal in de winkel',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.banner-wrapper {
  position: relative;
  .banner-overlay {
    width: 100%;
    position: absolute;
    height: 200px;
    // background: linear-gradient(
    //   90deg,
    //   #208070 80%,
    //   white 85%
    // );
    background: linear-gradient(90deg, $secondary 70%, #242424bd 100%);
    // opacity: 0.6;
  }
  .banner {
    display: flex;
    justify-content: space-between;
    // align-items: center;

    // background-repeat: no-repeat;
    // background-attachment: fixed;
    // background-position: right;
    // background-color: $secondary;

    height: 200px;
    // padding-top:30px;
    // padding-bottom: 30px;
    // padding-left:60px;
    .banner-steps {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 30px;
      padding-left: 60px;
      z-index: 1;
      .title {
      }
      .steps {
        display: flex;
        align-items: center;
        .circle {
          display: flex;
          justify-content: center;
          align-items: center;

          height: 20px;
          width: 20px;
          background-color: white;
          border-radius: 50%;
          font-size: 11px;
          font-weight: bold;
          margin-right: 10px;
        }
        .step {
          color: $text;
          font-size: 14px;
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      .action {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 180px;
        height: 180px;
        padding: 10px;
        border-radius: 50%;
        margin-right: -90px;
        background-color: white;
        font-weight: bold;
        transform: rotate(7deg);
        z-index: 2;
        .title {
          text-align: center;
          margin-bottom: 10px;
          font-size: 18px;
          color: #285c63;
        }
        .subtitle {
          text-align: center;
          text-transform: uppercase;
          color: #285c63;
          opacity: 0.9;
        }
      }
      .image {
        // background-repeat: no-repeat;
        // background-attachment: fixed;
        // background-position: right;
        height: 100%;
        width: 300px;
        z-index: 1;
        // background: linear-gradient(
        //   90deg,
        //   rgba(126, 192, 181, 1) 70%,
        //   rgba(255, 255, 255, 1) 100%
        // ),
        // url({{backgroundImage}});
        // display: flex;
      }
      img {
        height: 100%;
        width: 300px;
        z-index: 1;
        mask-image: linear-gradient(
          to left,
          rgba(0, 0, 0, 1),
          rgba(0, 0, 0, 0)
        );
      }
    }
  }
}

@media only screen and (max-width: 1200px) {
  .title{
    font-size: 24px;
  }
}

@media only screen and (max-width: 1020px) {
  .banner-steps {
    padding-left: 30px !important;
    .title {
      font-size: 21px;
    }
  }
  .action{
    margin-right: -267px !important;
  }
}

@media only screen and (max-width: 701px) {
  .banner-overlay {
    display: none;
  }
  .banner {
    height: unset !important;
    .banner-steps {
      display: block !important;
      padding: 0px !important;
      padding-left: 0px !important;
      z-index: 1 !important;

      .steps {
        margin-bottom: 10px;
        .circle {
          background-color: $primary !important;
          color: white !important;
        }
      }
    }
    .right {
      display: none !important;
    }
  }
}
</style>
