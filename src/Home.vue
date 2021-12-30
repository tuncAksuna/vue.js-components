<template>
  <div class="container">
    <h2>Child component</h2>
    <home-page></home-page>
    <hr />
    <h3>Communucation between components</h3>
    <p>Data from parent : {{ data }}</p>
    <p>Data from parent (string) : {{ stringData }}</p>
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";

export default {
  props: {
    data: {
      type: String,
      required: true,
      // default: function(){
      //   return {
      //     ...
      //   }
      // }
    },
  },
  components: {
    homePage: HomePage,
  },
};
</script>

<style >
div {
  margin-top: 3em;
}
</style>