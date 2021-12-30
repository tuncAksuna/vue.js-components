<template>
  <div class="col-xs-12 col-sm-6">
    <h2>Child component</h2>
    <hr />
    <p>Server informations is out of date !</p>
    <button @click="sendToParent">Send data to parent(Servers comp.)</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendToParent() {
      this.$emit("data", "tunCode");
    },
  },
};
</script>

<style scoped>
div p {
  font-size: 22px;
}
</style>