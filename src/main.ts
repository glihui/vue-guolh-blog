import Vue from 'vue';
import { 
  Button, 
  Carousel, 
  CarouselItem,
  Dialog, 
  Form, 
  Input,
  FormItem,
  Message,
  Upload
 } from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.component(Button.name, Button);
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
Vue.component(Dialog.name, Dialog);
Vue.component(Form.name, Form);
Vue.component(Input.name, Input);
Vue.component(FormItem.name, FormItem);
Vue.component(Upload.name, Upload);

Vue.prototype.$message = Message;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
