import Vue from 'vue'
import Vuex from "vuex";
import App from './App.vue'
import router from './router/index'
import axios from "axios";

Vue.use(Vuex);

export default new Vuex


axios.post("https://frozen-peak-65901.herokuapp.com")
  .then(response => {
    console.log(response.text);
    this.$router.response("/")
  })
  .catch((error) => {
    console.log(error);
  });

axios.get("https://frozen-peak-65901.herokuapp.com")
  .then(response => {
    console.log(response.text);
    this.$router.response("/")
  })
  .catch((error) => {
    console.log(error);
  });


new Vue({
  router,
  render: h => h(App)
})
