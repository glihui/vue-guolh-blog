<template>
    <div class="reply-box">
        <img class="reply-img" src="@/assets/logo.png"/>
        <p class="reply-content">多个数乘积，仔细看测试代码，不抛异常会报错</p>
    </div>
</template>
<script lang="ts">
import { Component, Provide, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Reply extends Vue {
    @Prop() private banList!: Object;
    @Provide() msg: string = '';
}
</script>

<style lang="scss" scoped>
    .reply-box{
        display: flex;
        padding: 10px;
        .reply-img{
            width:30px;
            height: 30px;
            border-radius: 15px;
            margin-right: 10px;
        } 
        .reply-content{
            color: #0593d3;
            font-size: 14px;
            line-height: 20px;
        }
    }
</style>

