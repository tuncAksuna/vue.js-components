<template>
  <div class="container">
    <home-page></home-page>
    <hr>
    <h3>Communucation between components</h3>
    <p>Data from parent : {{ data }}</p>
    <p>Data from parent (string) : {{ stringData }}</p>
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";

export default {
  props: ["data","stringData"],
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