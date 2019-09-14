<template>
    <div class="article-box" @click="goDetail">
        <img class="article-img" :src="articleValue.img"/>
        <div class="article-msg">
            <p class="article-title">
                {{articleValue.title}}
            </p>
            <p class="article-content">
                {{articleValue.body}}
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Provide, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Article extends Vue {
    @Prop() private articleValue!: any;
    @Provide() msg: string = '';

    goDetail() {
        this.$router.push({
            name:'detail',
            params: {
                id: this.articleValue.id
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    .article-box{
        height: 110px;
        display: flex;
        padding: 10px 0;
        cursor: pointer;
        .article-img{
            width: 160px;
            height: 90px;
        }
        .article-msg{
            flex:1;
            margin-left: 20px; 
            .article-title{
                font-size: 18px;
                line-height: 24px;
                color: #0593d3;
            }
            .article-content{
                width: 100%;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
                margin-top: 10px;
                font-size: 14px;
                line-height: 20px;
                color: #666;
            }
        }
    }
</style>

