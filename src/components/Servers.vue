<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="index in 5" :key="index">
        Server :
        <i>{{ index }}</i>
      </li>
    </ul>
    <server-detail @data="childData = $event"></server-detail>
    <p>Data from child(server detail comp) : {{ childData }}</p>
  </div>
</template>

<script>
import ServerDetail from "./ServerDetail.vue";

export default {
  components: {
    serverDetail: ServerDetail,
  },
  data: function () {
    return {
      childData: "",
    };
  },
};
</script>

<style scoped>
</style>