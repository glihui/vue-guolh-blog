<template>
    <div class="tab_box">
        <div class="blog_name">Dream It Possible</div>
        <ul class="tab_ul">
            <li class="tab_li" :key="index" v-for="(item, index) in tabs" @click="goTabPage(item.id)">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import {
    Component, Provide, Prop, Vue
} from 'vue-property-decorator';

@Component
export default class HomeTab extends Vue {
    @Prop() private msg!: string;
    @Provide() tabs: Array<Object> = [
        {
            'id':0,
            'title':'首页',
        },
        {
            'id':1,
            'title':'编程',
        },
        {
            'id':2,
            'title':'读书',
        },
        {
            'id':3,
            'title':'旅游',
        },
        {
            'id':4,
            'title':'运动',
        }
    ];

    goTabPage(id:number) {
        if (id === 0) {
            this.$router.push('/');
        } else {
            this.$router.push(`/category/${id}`);
        }
    }
}
</script>
<style lang="scss" scoped>
    .tab_box{
        display: flex;
        background-color:#0593d3; 
        .blog_name{
            line-height: 50px;
            font-size: 24px;
            color:white;
            padding: 0 15px;
        }
        .tab_ul{
            height: 50px;
            .tab_li {
                float: left;
                padding: 0 15px;
                line-height: 50px;
                font-size: 14px;
                color: white;
                cursor: pointer;
            }
        }
    } 
</style>

