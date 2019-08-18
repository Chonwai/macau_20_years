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
        title: "大三巴牌坊",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageUrl: this.imgURL,
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: "Custom image"
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