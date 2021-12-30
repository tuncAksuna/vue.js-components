<template>
  <div class="container">
    <h2>Parent component</h2>
    <home-component
      :data="communucation"
      stringData="Data as string"
    ></home-component>
    <server-detail></server-detail>
  </div>
</template>

<script>
import home from "./Home.vue";
import ServerDetail from "./components/ServerDetail.vue";

export default {
  components: {
    Home: home,
    serverDetail: ServerDetail,
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