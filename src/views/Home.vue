<template>
  <div class="home">
    <Banners :banList="banList"></Banners>
    <div class="article-reply">
      <div class="article-list">
        <h1 class="article-list-title">推荐文章</h1>
        <Article 
        v-for="(item, index) in topicsList" 
        :key="index"
        :articleValue="item"
        @zanEvent="zanEvent"
        >
        </Article>
      </div>
      <div class="reply-list" v-if="false">
        <h1 class="reply-list-title">最新帖子</h1>
        <Reply v-for="(item, index) in 4" :key="index"></Reply>
      </div>
    </div>
    <!-- <div class="both-wave" v-for="(item, index) in leftMove" :key="index">
      <TextWave :moveContent="item"  allTime="20s"></TextWave>
    </div> -->
  </div>
</template>

<script lang="ts">
import API from '@/api/api.js';
import { Component, Vue, Provide } from 'vue-property-decorator';
import Banners from '@/components/Banners.vue';
import Article from '@/components/Article.vue';
import Reply from '@/components/Reply.vue';
// import TextWave from '@/components/TextWave.vue';
import { mapGetters } from 'vuex';

@Component({
  components: {
    Banners,
    Article,
    Reply,
    // TextWave
  },
  ...mapGetters(['topics'])
})
export default class Home extends Vue {
  @Provide() banList: Array<Object> = [];
  @Provide() articleList: Array<Object> = [];
  @Provide() leftMoveValue: String = "梦想";
  @Provide() leftMove: String = "";

  created () {
      // let indexFlag = 0;
      // let intervalTime = setInterval (() => {
      //   if (indexFlag < this.leftMoveValue.length) {
      //     this.leftMove += this.leftMoveValue[indexFlag];
      //     indexFlag++;
      //   } else {
      //     clearInterval(intervalTime)
      //   }
        
      // }, 3000);
      this.getBanners();
  }

  get topicsList () {
    return this.$store.state.topics.data || [];
  }

  zanEvent(id) {
    for (let i=0; i<this.topicsList.length; i++) {
      if (this.topicsList[i].id === id) {
        
        if (this.topicsList[i].is_zan === 1) {
          this.topicsList[i].zan_count -= 1;
          this.topicsList[i].is_zan = 0;
        } else {
          this.topicsList[i].zan_count += 1;
          this.topicsList[i].is_zan = 1;
        }
        return;
      }
    }
  }

  getBanners() {
    API.getBanners().then(res => {
        console.log(res);
        if (res.code === 0) {
            this.banList = res.data.data;
        }
    })
  }
}
</script>

<style lang="scss" scoped>
  .article-reply{
    width: 800px;
    display: flex;
    margin: 0 auto;
    .article-list{
      flex: 1;
      .article-list-title{
        margin-top: 10px;
        font-size: 18px;
        line-height: 24px;
        color: #fff;
      }
    }
    .reply-list{
        border-left: 1px solid #dddddd;
        width: 316px;
        .reply-list-title{
            font-size: 18px;
            line-height: 24px;
            margin: 10px 0 0 10px;
        }
    }
  }
  .both-wave{
    position: fixed;
    width: 200px;
    left: 0;
    bottom: -40px;
    text-align: center;
  }
  
</style>
