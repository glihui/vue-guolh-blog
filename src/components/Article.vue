<template>
    <div class="article-box">
        <img class="article-img" src="@/assets/logo.png"/>
        <div class="article-msg">
            <p class="article-title">
                Python教程
            </p>
            <p class="article-content">
                小白的Python新手教程，具有如下特点：中文，免费，零起点，完整示例，基于最新的Python 3版本。随着AI时代的来临，Python已经是必学语言。
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Provide, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Article extends Vue {
    @Prop() private banList!: Object;
    @Provide() msg: string = '';
}
</script>

<style lang="scss" scoped>
    .article-box{
        height: 110px;
        display: flex;
        padding: 10px 0;
        .article-img{
            width: 160px;
            height: 90px;
        }
        .article-msg{
            margin-left: 20px; 
            .article-title{
                font-size: 18px;
                line-height: 24px;
                color: #0593d3;
            }
            .article-content{
                margin-top: 10px;
                font-size: 14px;
                line-height: 20px;
                color: #666;
            }
        }
    }
</style>

