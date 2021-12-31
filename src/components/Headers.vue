<template>
  <div>
    <h1>Server Status</h1>
    <slot name="heading"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
div h1 {
  font-size: 36px;
  font-family: "Times New Roman", Times, serif;
}
</style>