<template>
  <div class="point-container relative bounce" @click="showInfo">
    <img
      class="w-hull h-full rounded object-cover object-center"
      :src="imgURL"
      alt
      srcset
      ref="pointImg"
    />
  </div>
</template>

<script>
export default {
  name: "Point",
  props: {
    placeName: {
      type: String,
      default: ""
    },
    id: {
      type: Number,
      default: ""
    }
  },
  data() {
    return {
      imgURL: null
    };
  },
  methods: {
    showInfo(e) {
      this.$swal.fire({
        title: this.$t('location.place1.name'),
        text: this.$t('location.place1.information'),
        imageUrl: this.imgURL,
        imageWidth: 500,
        imageHeight: 500,
        imageAlt: this.$t('location.place1.name')
      });
    }
  },
  mounted() {
    this.imgURL = require("../../assets/images/" + this.placeName + ".png");
  }
};
</script>

<style lang="scss" scoped>
// .point-container::after {
//   content: "";
//   position: absolute;
//   top: calc(4rem - 2px);
//   left: calc(1rem);
//   border-left: 1rem solid transparent;
//   border-right: 1rem solid transparent;
//   border-top: 1rem solid #718096;
// }

@keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -7.5px, 0);
    transform: translate3d(0, -7.5px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}

.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
  animation-iteration-count: infinite;
  animation-duration: 1s;
}

.point-container {
  width: 5%;
  height: 5%;
}
</style>