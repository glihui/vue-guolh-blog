<template>
    <div class="article-box" @click="goDetail">
        <img class="article-img" :src="articleValue.img"/>
        <div class="article-msg">
            <p class="article-title">
                {{articleValue.title}}
            </p>
            <p class="article-content">
                {{articleValue.intro}}
            </p>
            <div class="zan_browse">
                <img class="zan-img" :src="articleValue.is_zan ? require('@/assets/zan.png'): require('@/assets/no_zan.png')" @click.stop="goZan(articleValue.id)">
                <div class="zan-num">{{articleValue.zan_count}}</div>
                <img class="brower-img" src="@/assets/brower.png">
                <div class="brower-num">{{articleValue.view_count}}</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Provide, Prop, Vue } from 'vue-property-decorator';
import API from '@/api/api.js';

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

    goZan(id) {
        if (this.articleValue.is_zan) {
            API.goUnZan(id).then(res => {
                console.log(res);
                if (res.code === 0) {
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    });
                    this.$emit('zanEvent',id);
                }
            })
        } else {
            API.goZan(id).then(res => {
                console.log(res);
                if (res.code === 0) {
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    });
                    this.$emit('zanEvent',id);
                }
            })
        }
        
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
                height: 24px;
                line-height: 24px;
                color: #0593d3;
            }
            .article-content{
                width: 100%;
                height: 46px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                font-size: 14px;
                line-height: 20px;
                color: #666;
            }
            .zan_browse{
                display: flex;
                height: 20px;
                padding-top: 3px;
                box-sizing: border-box;
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

