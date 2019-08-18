<template>
  <div class="map-container border border-gray-500 relative">
    <!-- <img
      class="w-full h-full object-contain object-center"
      src="../../assets/images/base_map_1999.png"
    />-->
    <Point class="absolute point-1" placeName="RuinsOfStPauls" :id="0" url="../../assets/images/RuinsOfStPauls.png"/>
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
  background-image: url("../../assets/images/base_map_1999.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: calc(92vh * 1.41421356);
  height: calc(92vh);
}

.point-1 {
  top: 65%;
  left: 17%;
}
</style>