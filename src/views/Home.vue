<template>
  <div class="home">
    <Banners :banList="banList"></Banners>
    <div class="article-reply">
      <div class="article-list">
        <h1 class="article-list-title">推荐文章</h1>
        <Article v-for="(item, index) in 4" :key="index"></Article>
      </div>
      <div class="reply-list">
        <h1 class="reply-list-title">最新帖子</h1>
        <Reply v-for="(item, index) in 4" :key="index"></Reply>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import Banners from '@/components/Banners.vue';
import Article from '@/components/Article.vue';
import Reply from '@/components/Reply.vue';

@Component({
  components: {
    Banners,
    Article,
    Reply,
  },
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
}
</script>

<style lang="scss" scoped>
  .article-reply{
    display: flex;
    margin: 0 20px;
    .article-list{
      border-right: 1px solid #dddddd;
      .article-list-title{
        margin-top: 10px;
        font-size: 18px;
        line-height: 24px;
        color: #444444;
      }
    }
    .reply-list{
        width: 316px;
        .reply-list-title{
            font-size: 18px;
            line-height: 24px;
            margin: 10px 0 0 10px;
        }
    }
  }
  
</style>
