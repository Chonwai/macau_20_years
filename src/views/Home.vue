<template>
  <div class="home w-screen h-screen bg-center flex justify-center relative">
    <Map class="absolute top-0" />
    <Timeline class="absolute bottom-0 p-4" />
    <div class="language-group absolute top-0 right-0">
      <button class="w-12 h-12 border border-gray-500 m-2 rounded" @click="$i18n.locale = 'cn'">中</button>
      <button class="w-12 h-12 border border-gray-500 m-2 rounded" @click="$i18n.locale = 'en'">EN</button>
      <button class="w-12 h-12 border border-gray-500 m-2 rounded" @click="$i18n.locale = 'pt'">PT</button>
    </div>
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
