<template>
  <div class="home w-screen h-screen bg-center flex justify-center relative">
    <Map class="top-0" />
    <Timeline class="absolute bottom-0 pb-4 w-full" />
  </div>
</template>

<script>
// @ is an alias to /src
import Map from "@/components/Map/Map.vue";
import Timeline from "@/components/Timeline/Timeline.vue";

export default {
  name: "home",
  components: {
    Map,
    Timeline
  }
};
</script>

<style lang="scss" scoped>
.home {
  // background-image: url("../assets/images/base_map_1999.png");
  background-image: url("../assets/images/bg03.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
