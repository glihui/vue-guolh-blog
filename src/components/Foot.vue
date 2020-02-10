<template>
    <div class="guolh-copyright-text">
        © 2017-2020 guolh.com 版权所有
        <a href="http://beian.miit.gov.cn/" target="_blank">粤ICP备17025820号</a>
    </div>
</template>

<script lang="ts">
import { Component, Provide, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Foot extends Vue {

}

</script>

<style lang="scss" scoped>
.guolh-copyright-text{
    line-height: 60px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    a{
        color: #fff;
    }
}
</style>