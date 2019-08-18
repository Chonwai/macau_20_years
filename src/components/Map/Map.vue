<template>
  <div class="map-container relative">
    <img
      class="w-full h-full object-contain object-center absolute opacity-75"
      src="../../assets/images/base_map_1999.png"
    />
    <img class="pin absolute h-auto top-0 left-0" src="../../assets/images/pin_r.png" alt srcset />
    <img class="pin absolute h-auto top-0 right-0" src="../../assets/images/pin_l.png" alt srcset />
    <Point
      class="absolute point-1"
      placeName="RuinsOfStPauls"
      :id="0"
      url="../../assets/images/RuinsOfStPauls.png"
    />
    <Point
      class="absolute point-2"
      placeName="temp01"
      :id="0"
      url="../../assets/images/RuinsOfStPauls.png"
    />
    <Point
      class="absolute point-3"
      placeName="temp02"
      :id="0"
      url="../../assets/images/RuinsOfStPauls.png"
    />
    <Point
      class="absolute point-4"
      placeName="temp03"
      :id="0"
      url="../../assets/images/RuinsOfStPauls.png"
    />
    <Point
      class="absolute point-5"
      placeName="temp04"
      :id="0"
      url="../../assets/images/RuinsOfStPauls.png"
    />
  </div>
</template>

<script>
import Point from "../Point/Point";
export default {
  name: "Map",
  data() {
    return {};
  },
  components: {
    Point
  }
};
</script>

<style lang="scss" scoped>
.map-container {
  // background-image: url("../../assets/images/base_map_1999.png");
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: contain;
  width: calc(95vh * 1.41421356);
  height: calc(95vh);

  .pin {
    width: 6%;
  }

  .point-1 {
    top: 65%;
    left: 17%;
  }
  .point-2 {
    top: 67%;
    left: 30%;
  }
  .point-3 {
    top: 50%;
    left: 60%;
  }
  .point-4 {
    top: 50%;
    left: 25%;
  }
  .point-5 {
    top: 30%;
    left: 80%;
  }
}
</style>