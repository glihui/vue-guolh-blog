<template>
    <div class="cagegory_box">
        <div>
            <h1 class="category_title">编程</h1>
            <Article></Article>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Article from '@/components/Article.vue';
@Component({
  components: {
    Article,
  },
})
export default class Category extends Vue{
    mounted() {
        let x:any = {};
        Object.defineProperty(x, 1, {
            get: function() {
                console.log('getter called')
            },
            set: function(newVal) {
                console.log('setter called! newVal is:' + newVal)
            }
        })
        
        x[1] = '111'
        

    }
}
</script>
<style lang="scss" scoped>
    .cagegory_box{
        padding: 10px;
        .category_title{
            height: 40px;
            line-height: 40px;
            color: #444444;
            font-size: 18px;
        }
    }
</style>



