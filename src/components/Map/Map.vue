<template>
  <div class="map-container relative">
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_1999.jpg" ref="map" v-show="mapYear == 1999"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2000.jpg" ref="map" v-show="mapYear == 2000"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2001.jpg" ref="map" v-show="mapYear == 2001"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2002.jpg" ref="map" v-show="mapYear == 2002"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2003.jpg" ref="map" v-show="mapYear == 2003"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2004.jpg" ref="map" v-show="mapYear == 2004"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2005.jpg" ref="map" v-show="mapYear == 2005"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2006.jpg" ref="map" v-show="mapYear == 2006"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2006.jpg" ref="map" v-show="mapYear == 2007"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2006.jpg" ref="map" v-show="mapYear == 2008"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2006.jpg" ref="map" v-show="mapYear == 2009"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2006.jpg" ref="map" v-show="mapYear == 2010"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2006.jpg" ref="map" v-show="mapYear == 2011"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2006.jpg" ref="map" v-show="mapYear == 2012"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2006.jpg" ref="map" v-show="mapYear == 2013"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2006.jpg" ref="map" v-show="mapYear == 2014"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2006.jpg" ref="map" v-show="mapYear == 2015"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2006.jpg" ref="map" v-show="mapYear == 2016"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2006.jpg" ref="map" v-show="mapYear == 2017"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2006.jpg" ref="map" v-show="mapYear == 2018"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2006.jpg" ref="map" v-show="mapYear == 2019"
    />
    <img class="pin absolute h-auto top-0 left-0" src="../../assets/images/pin_r.png" alt srcset />
    <img class="pin absolute h-auto top-0 right-0" src="../../assets/images/pin_l.png" alt srcset />
    <h3 class="absolute h-auto w-full top-0 mx-auto text-3xl font-bold p-4">{{mapYear}}</h3>
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
    return {
      mapYear: 1999,
      mapURL: '../../assets/images/base_map_1999.png'
    };
  },
  components: {
    Point
  },
  computed: {
    getCurrentYear() {
      let currentYear = this.$store.getters.getCurrentYear;
      return currentYear;
    }
  },
  watch: {
    getCurrentYear(year) {
      console.log(year);
      this.mapYear = year;
    }
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

  img {
    @apply opacity-90;
  }

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