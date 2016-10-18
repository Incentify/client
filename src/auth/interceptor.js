import Vue from 'vue';
// import VueResource from 'vue-resource';
import auth from './index.js';

export default{
  init(){
    Vue.http().interceptors.push((request, next) => {
      if(!request.headers["Authorization"]) {
          request.headers["Authorization"] = 'Bearer ' + auth.getToken()
      }
      next()
    })
  }
}