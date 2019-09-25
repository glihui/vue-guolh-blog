<template>
    <div>
        <div class="block">
            <el-carousel trigger="click" height="400px">
                <el-carousel-item v-for="(item, index) in banList" :key="index">
                    <div class="banner_content">
                        <img :src="item.img"/>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Provide, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Banners extends Vue {
    @Prop() private banList!: Array<Object>;
    @Provide() msg: string = '';
}
</script>

<style lang="scss" scoped>
.banner_content{
    text-align: center;
}
.el-carousel__item img {
    height: 400px;
}
</style>

