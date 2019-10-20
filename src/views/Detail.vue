<template>
    <div class="box" v-if="showPage">
        <div class="title">{{detailMsg.title}}</div>
        <img class="article-img" :src="detailMsg.img"/>
        <div class="article-sub-msg">
            <span class="type">{{detailMsg.category.name}}</span>
            <span class="xie-g">/</span>
            <span class="time">{{detailMsg.created_at}}</span>
            <span class="xie-g">/</span>
            <span class="read-text">阅读:</span>
            <span class="read-num">0</span>
        </div>
        <div class="content" v-html="detailMsg.body">
        </div>
    </div>
</template>

<script lang="ts">
import {
    Component, Provide, Prop, Vue
} from 'vue-property-decorator';
import API from '@/api/api.js';

@Component
export default class Detail extends Vue{
    @Provide() detailMsg: Object = {};
    @Provide() showPage: Boolean = false;


    created() {
        console.log(this.$route)
        let topicId = this.$route.params.id;
        API.getTopicDetail(topicId).then((res:any) => {
            console.log(res);
            if (res.code === 0) {
                this.detailMsg = res.data;
                this.showPage = true;
            }
            
        })
    }
}
</script>

<style lang="scss" scoped>
    .box{
        width: 1000px;
        margin:0 auto;
        .title{
            font-size: 18px;
            line-height: 70px;
            color: #444444;
        }
        .article-img{
            max-width: 100% !important;
            height: auto;
        }
        .article-sub-msg{
            line-height: 50px;
            span{
                font-size: 14px;
            }
            .name, .type{
                color: #0593d3;
                cursor: pointer;
            }
            .xie-g{
                margin: 0 5px;
            }
        }
        .content{
            font-size: 16px;
        }
    }
    
</style>