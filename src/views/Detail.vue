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
            <span class="read-num">{{detailMsg.view_count}}</span>
        </div>
        <div class="content" v-html="detailMsg.body">
        </div>
        <div class="comment-box">
            <div class="comment-title">评论</div>
            <template>
                <div class="comment-content" v-for="(item, index) in 5" :key="index">
                    <div class="comment-top">
                        <div class="user-avatar">
                            <img src="@/assets/banner1.jpg"/>
                        </div>
                        <div class="nickname-time">
                            <div class="nickname">solo</div>
                            <div class="comment-time">2019-11-29</div>
                        </div>
                    </div>
                    <div class="comment-bottom">
                        只为当初那个梦想，会加油的额！
                    </div>
                </div>
            </template>
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

        .comment-box{
           .comment-title{
                height: 50px;
                line-height: 50px;
                font-size: 18px;
           } 
           .comment-content{
               border-top: 1px solid #ddd;
              .comment-top{
                  display: flex;
                  padding: 10px;
                 .user-avatar{
                     width: 50px;
                     height: 50px;
                     border-radius: 50%;
                     margin-right: 15px;
                     img{
                         border-radius: 50%;
                         width: 50px;
                         height: 50px;
                     }
                 } 
                 .nickname-time{
                     .nickname{
                        color: #0593d3;
                        line-height: 22px;
                        margin-top: 5px;
                        font-size: 11px;
                        font-weight: bold;
                     }
                     .comment-time{
                        font-size: 11px;
                        line-height: 16px;
                        margin-top: 2px;
                        color: #999999;
                     }
                 }
              } 
              .comment-bottom{
                  padding-left: 75px;
                  padding-bottom: 25px;
              }
           }
        }
    }
    
</style>