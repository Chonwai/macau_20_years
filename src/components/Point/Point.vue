<template>
  <div class="point-container cursor-pointer" @click="showInfo">
    <img
      class="w-hull h-full rounded object-cover object-center absolute"
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
        title: this.$t(`location.${this.id}.name`),
        text: this.$t(`location.${this.id}.information`),
        imageUrl: this.imgURL,
        imageWidth: 500,
        imageHeight: 500,
        imageAlt: this.$t(`location.${this.id}.name`)
      });
    }
  },
  mounted() {
    this.imgURL = require("../../assets/images/building/" +
      this.placeName +
      ".png");
  }
};
</script>

<style lang="scss" scoped>
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

.point-container:hover {
  @apply bounce;
}
</style>