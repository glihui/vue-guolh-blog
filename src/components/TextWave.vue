<template>
    <div id="textWave" class="text-wave-box">
        <span class="text-value">
            {{moveContent}}
        </span>
    </div>
</template>
<script lang="ts">
import {
    Component, Provide, Prop, Vue
} from 'vue-property-decorator';

@Component
export default class TextWave extends Vue{
    @Prop() private moveContent!: String;
    @Prop() private delayTime!: String;
    @Prop() private allTime!: String;
    // @Provide() msg: string = '';
    mounted() {
        // document.getElementById('textWave').style.animationDelay = this.delayTime;
        // document.getElementById('textWave').style.animationDuration = this.allTime;
    }
}
</script>
<style lang="scss" scoped>
    .text-wave-box{
        color: red;
        position: relative;
        left: 0;
        bottom: 0;
        animation: text-wave-key 10s linear 0s infinite normal;
        -webkit-animation: text-wave-key 10s linear 0s infinite normal;
        .text-value{
            font-size: 30px;
        }
    }
    @keyframes text-wave-key {
        0% {
            bottom: -40px;
            left: 0;
        }
        25% {
            bottom: 50px;
            left: 50px;
        }
        50% {
            bottom: 100px;
            left: 0px;
        }
        75% {
            bottom: 150px;
            left: 50px;
        }
        100% {
            bottom: 200px;
            left: 0px;
        }
    }       
</style>