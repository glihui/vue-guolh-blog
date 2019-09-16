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
            <div class="zan_browse">
                <img class="zan-img" src="@/assets/no_zan.png">
                <div class="zan-num">0</div>
                <img class="brower-img" src="@/assets/brower.png">
                <div class="brower-num">0</div>
            </div>
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
                -webkit-line-clamp: 2;
                overflow: hidden;
                margin-top: 10px;
                font-size: 14px;
                line-height: 20px;
                color: #666;
            }
            .zan_browse{
                display: flex;
                .zan-img, .brower-img{
                    width: 14px;
                    height: 14px;
                }
                .brower-img{
                    margin-left: 20px;
                }
                .zan-num, .brower-num{
                    margin-left: 4px;
                    color: #b4b4b4;
                    font-size: 12px;
                }
            }
        }
    }
</style>

