<template>
  <div class="timeline-component block">
    <h2 class="inline-block mr-4 text-white font-bold text-2xl">1999</h2>
    <!-- <button class="w-8 h-8 border-2 border-gray-700 mr-4 bg-white rounded" @click="changeTimelineYear(-1)">-</button> -->
    <input
      class="w-1/3 inline-block"
      type="range"
      name="timeline"
      id="timeline"
      min="1999"
      max="2019"
      v-model="timelineYear"
    />
    <h2 class="inline-block ml-4 text-white font-bold text-2xl">2019</h2>
    <!-- <button class="w-8 h-8 border-2 border-gray-700 ml-4 bg-white rounded" @click="changeTimelineYear(+1)">+</button> -->
  </div>
</template>

<script>
export default {
  name: "Timeline",
  data() {
    return {
      timelineYear: 1999
    };
  },
  watch: {
    timelineYear() {
      this.$store.commit("setCurrentYear", this.timelineYear);
    }
  },
  methods: {
    changeTimelineYear(num) {
      console.log(typeof num);
      if (this.timelineYear + num > 2019) {
        this.timelineYear = 2019;
      } else if (this.timelineYear + num < 1999) {
        this.timelineYear = 1999;
      } else {
        this.timelineYear = this.timelineYear + num * 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
input[type="range"] {
  -webkit-appearance: none;
  background-color: transparent;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 12px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #000000;
  background: #545454;
  border-radius: 3px;
  border: 1px solid #000000;
}
input[type="range"]::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px #000000;
  border: 2px solid #808080;
  height: 30px;
  width: 15px;
  border-radius: 5px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -10.5px;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #545454;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 12px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #000000;
  background: #545454;
  border-radius: 3px;
  border: 1px solid #000000;
}
input[type="range"]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000;
  border: 2px solid #808080;
  height: 30px;
  width: 15px;
  border-radius: 5px;
  background: #ffffff;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 12px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: #545454;
  border: 1px solid #000000;
  border-radius: 6px;
  box-shadow: 1px 1px 1px #000000;
}
input[type="range"]::-ms-fill-upper {
  background: #545454;
  border: 1px solid #000000;
  border-radius: 6px;
  box-shadow: 1px 1px 1px #000000;
}
input[type="range"]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 1px 1px 1px #000000;
  border: 2px solid #808080;
  height: 30px;
  width: 15px;
  border-radius: 5px;
  background: #ffffff;
  cursor: pointer;
}
input[type="range"]:focus::-ms-fill-lower {
  background: #545454;
}
input[type="range"]:focus::-ms-fill-upper {
  background: #545454;
}
</style>