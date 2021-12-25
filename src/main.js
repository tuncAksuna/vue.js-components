import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Servers from './components/Servers.vue'
import HomePage from './components/HomePage.vue'
import Headers from './components/Headers.vue'
import MainFooter from './components/MainFooter.vue'
import ServerDetail from './components/ServerDetail.vue'


//* importing lamp-component globally
Vue.component("home-component", Home);
Vue.component("servers-component", Servers);
Vue.component("homepage-component", HomePage);
Vue.component("headers-component", Headers);
Vue.component("footer-component", MainFooter);
Vue.component("serverdetail-component", ServerDetail);

new Vue({
    el: '#app',
    render: h => h(App)
})