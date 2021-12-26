<template>
  <home-component
    :data="communucation"
     stringData="Data as string"
  ></home-component>
</template>

<script>
import home from "./Home.vue";
export default {
  components: {
    Home: home,
  },
  data: function () {
    return {
      communucation: "data received (from parent to child)",
    };
  },
};
</script>

<style >
</style>