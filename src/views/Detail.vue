<template>
    <div class="box" v-if="showPage">
        <div class="title">{{detailMsg.title}}</div>
        <img class="article-img" :src="detailMsg.img"/>
        <div class="article-sub-msg">
            <span class="type" @click="goCategory">{{detailMsg.category.name}}</span>
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
                <div class="comment-content" v-for="item in commentList" :key="item.id">
                    <div class="comment-top">
                        <div class="user-avatar">
                            <img :src="item.user.avatar"/>
                        </div>
                        <div class="nickname-time">
                            <div class="nickname">{{item.user.name}}</div>
                            <div class="comment-time">{{item.created_at}}</div>
                        </div>
                    </div>
                    <div class="comment-bottom">
                        {{item.comment_content}}
                    </div>
                </div>
            </template>
        </div>
        <div class="comment-icon" @click="dialogVisible = true">
            <img src="@/assets/comment_icon.png">
        </div>

        <el-dialog
            title="评论"
            :visible.sync="dialogVisible"
            width="30%"
            center>
            <el-input v-model="commentInput" placeholder="请输入内容"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="goComment">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import {
    Component, Provide, Prop, Vue
} from 'vue-property-decorator';
import API from '@/api/api.js';

interface user {
    name: String,
    avatar: String,
    created_at: String,
    updated_at: String
}

interface category {
    id: Number,
    name: String,
    description: String
}

interface  detailData {
    id: Number,
    title: String,
    intro: String,
    body: String,
    img: String,
    user_id: Number,
    category_id: Number,
    reply_count: Number,
    view_count: Number,
    zan_count: Number,
    is_zan: Number,
    created_at: String,
    updated_at: String,
    user: user,
    category: category
}

@Component
export default class Detail extends Vue{
    @Provide() topicId: String = '';
    @Provide() commentList: Array<Object> = [];
    @Provide() detailMsg=<detailData>{};
    @Provide() showPage: Boolean = false;
    @Provide() dialogVisible: Boolean = false;
    @Provide() commentInput: String = '';


    created() {
        console.log(this.$route)
        let topicId = this.$route.params.id;
        this.topicId = topicId;
        API.getTopicDetail(topicId).then((res:any) => {
            console.log(res);
            if (res.code === 0) {
                this.detailMsg = res.data;
                this.showPage = true;
            } 
        });

        this.getCommentList();
    }
    // 评论
    goComment() {
        if (this.commentInput == '') {
            this.$message({
                message: '评论内容不能为空',
                type: 'warning'
            });
            return;
        }
        API.commentTopic(this.topicId, {
            comment_content: this.commentInput
        }).then((res:any) => {
            console.log(res);
            if (res.code === 0) {
                this.getCommentList();
                this.$message({
                    message: '评论成功',
                    type: 'success'
                });
            } else {
                this.$message.error('评论失败');
            }
            this.dialogVisible = false;
        })
        
    }

    //获取评论列表
    getCommentList() {
        API.getCommentList(this.topicId).then((res:any) => {
            console.log(res);
            if (res.code === 0) {
                this.commentList = res.data.data;
            } else {
                this.$message.error('评论列表获取失败!');
            }
            this.dialogVisible = false;
        })
    }

    goCategory() {
        if (this.detailMsg.category.id == 1) {
            this.$router.push('/').catch(err => {
                console.log(err);
            });
        } else {
            this.$router.push(`/category/${this.detailMsg.category.id}`).catch(err => {
                console.log(err);
            });
        }
        
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
            color: #fff;
        }
        .article-img{
            max-width: 100% !important;
            height: auto;
        }
        .article-sub-msg{
            line-height: 50px;
            color: #fff;
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
            color: #fff;
        }

        .comment-box{
            color: #fff;
           .comment-title{
                height: 50px;
                line-height: 50px;
                font-size: 18px;
                color: red;
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
                        color: #fff;
                     }
                 }
              } 
              .comment-bottom{
                  padding-left: 75px;
                  padding-bottom: 25px;
              }
           }
        }

        .comment-icon{
            position: fixed;
            right: 40px;
            bottom: 40px;
            cursor: pointer;
            img{
                width: 48px;
                height: 48px;
            }
        }
    }
    
</style>