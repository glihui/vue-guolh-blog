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
        >
        </Article>
      </div>
      <div class="reply-list" v-if="false">
        <h1 class="reply-list-title">最新帖子</h1>
        <Reply v-for="(item, index) in 4" :key="index"></Reply>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Api from '@/api/api.js';
import { Component, Vue, Provide } from 'vue-property-decorator';
import Banners from '@/components/Banners.vue';
import Article from '@/components/Article.vue';
import Reply from '@/components/Reply.vue';
import { mapGetters } from 'vuex';

@Component({
  components: {
    Banners,
    Article,
    Reply,
  },
  ...mapGetters(['topics'])
})
export default class Home extends Vue {
  @Provide() banList: Array<Object> = [
    {
      img: require('@/assets/banner1.jpg')
    },
    {
      img: require('@/assets/banner2.jpg')
    }
  ];
  @Provide() articleList: Array<Object> = [];

  created () {
    
  }

  get topicsList () {
    return this.$store.state.topics.data || [];
  }
}
</script>

<style lang="scss" scoped>
  .article-reply{
    display: flex;
    margin: 0 20px;
    .article-list{
      flex: 1;
      .article-list-title{
        margin-top: 10px;
        font-size: 18px;
        line-height: 24px;
        color: #444444;
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
  
</style>
