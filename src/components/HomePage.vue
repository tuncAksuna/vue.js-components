<template>
  <div>
    <headers></headers>
    <hr>
    <div class="row">
      <servers></servers>
      <server-detail></server-detail>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import Headers from "./Headers.vue";
import Servers from "./Servers.vue";
import ServerDetail from "./ServerDetail.vue";
import MainFooter from "./MainFooter.vue";

export default {
  components: {
    headers: Headers,
    servers: Servers,
    serverDetail: ServerDetail,
    mainFooter: MainFooter,
  },
};
</script>

<style>
</style>