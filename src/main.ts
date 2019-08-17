import Vue from 'vue';
import { Button, Carousel, CarouselItem } from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.component(Button.name, Button);
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
