<template>
  <div id="app">
    <div id="nav">
      <HomeTab/>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeTab from '@/components/HomeTab.vue';
import API from '@/api/api.js';

@Component({
  components: {
    HomeTab
  },
})
export default class App extends Vue {
  created() {
    // 从缓存获取登录信息
    let user:string = localStorage.getItem('user') || '';
    if (user !== '') {
      this.$store.commit('setUser', JSON.parse(user));

      // 刷新token
      API.refreshToken().then((res:any) => {
        console.log(res);
        if (res) {
          let userObj = JSON.parse(user);
          userObj.meta = res;
          localStorage.setItem('user', JSON.stringify(userObj));
          this.$store.commit('setUser', JSON.parse(userObj));
        }
        
      }).catch(error => {
          
      });
    }
    
  }
}
</script>

<style lang="scss">
body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0}
body{font:12px"宋体","Arial Narrow",HELVETICA;background:#fff;-webkit-text-size-adjust:100%;}
a{color:#2d374b;text-decoration:none}
a:hover{color:#cd0200;text-decoration:underline}
em{font-style:normal}
li{list-style:none}
img{border:0;vertical-align:middle}
table{border-collapse:collapse;border-spacing:0}
p{word-wrap:break-word}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 1200px;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
ul li{
  list-style: none;
}
</style>
