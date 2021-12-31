<template>
  <div>
    <h2>Parent component</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="index in 5" :key="index">
        Server :
        <i>{{ index }}</i>
      </li>
    </ul>
    <server-detail @data="childData = $event"></server-detail>
    <p>Data from child(server detail comp) : {{ childData }}</p>

    <!-- SLOTS -->
    <app-headers>
      <h1 slot="heading">SLOTS</h1>
      <p slot="content">Using <b>Slot</b> for sending "content" to component</p>
    </app-headers>
    <!-- SLOTS -->
  </div>
</template>

<script>
import ServerDetail from "./ServerDetail.vue";
import Headers from "./Headers.vue";

export default {
  components: {
    serverDetail: ServerDetail,
    appHeaders: Headers,
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