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
      src="../../assets/images/base_map_2007.jpg" ref="map" v-show="mapYear == 2007"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2008.jpg" ref="map" v-show="mapYear == 2008"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2009.jpg" ref="map" v-show="mapYear == 2009"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2010.jpg" ref="map" v-show="mapYear == 2010"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2011.jpg" ref="map" v-show="mapYear == 2011"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2012.jpg" ref="map" v-show="mapYear == 2012"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2013.jpg" ref="map" v-show="mapYear == 2013"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2014.jpg" ref="map" v-show="mapYear == 2014"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2015.jpg" ref="map" v-show="mapYear == 2015"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2016.jpg" ref="map" v-show="mapYear == 2016"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2017.jpg" ref="map" v-show="mapYear == 2017"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2018.jpg" ref="map" v-show="mapYear == 2018"
    />
    <img
      class="w-full h-full object-contain object-center absolute"
      src="../../assets/images/base_map_2019.jpg" ref="map" v-show="mapYear == 2019"
    />
    <img class="pin absolute h-auto top-0 left-0" src="../../assets/images/pin_r.png" alt srcset />
    <img class="pin absolute h-auto top-0 right-0" src="../../assets/images/pin_l.png" alt srcset />
    <h3 class="absolute h-auto w-full top-0 text-3xl font-bold p-4">{{mapYear}}</h3>
    <div class="language-group absolute p-4 top-0">
      <button class="w-8 h-8 border-2 border-gray-700 m-1 rounded bg-white" @click="$i18n.locale = 'cn'">中</button>
      <button class="w-8 h-8 border-2 border-gray-700 m-1 rounded bg-white" @click="$i18n.locale = 'en'">EN</button>
      <button class="w-8 h-8 border-2 border-gray-700 m-1 rounded bg-white" @click="$i18n.locale = 'pt'">PT</button>
    </div>
    <Point
      class="absolute point-1"
      placeName="RuinsOfStPauls"
      :id="1"
    />
    <Point
      class="absolute point-2"
      placeName="LotusSquare"
      :id="2"
    />
    <Point
      class="absolute point-3"
      placeName="HotelLisboa"
      :id="3"
    />
    <Point
      class="absolute point-4"
      placeName="AMaTemple"
      :id="4"
    />
    <Point
      class="absolute point-5"
      placeName="MacauTower"
      :id="5"
      v-show="mapYear >= 2001"
    />
    <Point
      class="absolute point-6"
      placeName="FoodFestival"
      :id="6"
      v-show="mapYear >= 2001"
    />
    <Point
      class="absolute point-7"
      placeName="HandoverGiftsMuseum"
      :id="7"
      v-show="mapYear >= 2004"
    />
    <Point
      class="absolute point-8"
      placeName="Sands"
      :id="8"
      v-show="mapYear >= 2004"
    />
    <Point
      class="absolute point-9"
      placeName="FishermanWharf"
      :id="9"
      v-show="mapYear >= 2006"
    />
    <Point
      class="absolute point-10"
      placeName="Wynn"
      :id="10"
      v-show="mapYear >= 2006"
    />
    <Point
      class="absolute point-11"
      placeName="TheVenetian"
      :id="11"
      v-show="mapYear >= 2007"
    />
    <Point
      class="absolute point-12"
      placeName="GrandLisboa"
      :id="12"
      v-show="mapYear >= 2008"
    />
    <Point
      class="absolute point-13"
      placeName="ScienceCenter"
      :id="13"
      v-show="mapYear >= 2009"
    />
    <Point
      class="absolute point-14"
      placeName="UniversityOfMacau"
      :id="14"
      v-show="mapYear >= 2014"
    />
    <Point
      class="absolute point-15"
      placeName="LightFestival"
      :id="15"
      v-show="mapYear >= 2015"
    />
    <Point
      class="absolute point-16"
      placeName="TheParisian"
      :id="16"
      v-show="mapYear >= 2016"
    />
    <Point
      class="absolute point-17"
      placeName="LightRail"
      :id="17"
      v-show="mapYear >= 2019"
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
    top: 0px;
    @apply opacity-90;
  }

  .language-group {
    right: 5%;
  }

  .pin {
    width: 6%;
  }

  .point-1 {
    top: 73%;
    left: 23%;
  }
  .point-2 {
    top: 57%;
    left: 25%;
  }
  .point-3 {
    top: 70%;
    left: 30%;
  }
  .point-4 {
    top: 85%;
    left: 34%;
  }
  .point-5 {
    top: 78%;
    left: 37%;
  }
  .point-6 {
    top: 78%;
    left: 35%;
  }
  .point-7 {
    top: 58%;
    left: 28%;
  }
  .point-8 {
    top: 61%;
    left: 26%;
  }
  .point-9 {
    top: 54%;
    left: 28%;
  }
  .point-10 {
    top: 66%;
    left: 32%;
  }
  .point-11 {
    top: 51%;
    left: 63%;
  }
  .point-12 {
    top: 73%;
    left: 29%;
  }
  .point-13 {
    top: 56%;
    left: 31%;
  }
  .point-14 {
    top: 72%;
    left: 77%;
  }
  .point-15 {
    top: 76%;
    left: 26%;
  }
  .point-16 {
    top: 47%;
    left: 63%;
  }
  .point-17 {
    top: 37%;
    left: 51%;
  }
}
</style>