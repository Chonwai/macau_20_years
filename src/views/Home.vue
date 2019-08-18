<template>
  <div class="home w-screen h-screen bg-center flex justify-center relative">
    <Map class="absolute top-0"/>
    <input class="absolute bottom-0 p-4" type="range" name="" id="" min="1999" max="2019" value="1999">
    <div claas="language-group">
      <button @click="$i18n.locale = 'cn'">中</button>
      <button @click="$i18n.locale = 'en'">EN</button>
      <button @click="$i18n.locale = 'pt'">PT</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Map from "@/components/Map/Map.vue"

export default {
  name: "home",
  components: {
    Map
  }
};
</script>

<style lang="scss" scoped>
.home {
  // background-image: url("../assets/images/base_map_1999.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
