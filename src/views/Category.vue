<template>
    <div class="cagegory_box">
        <div v-if="!fetchIng">
            <h1 class="category_title">{{titleName}}</h1>
            <Article
             v-for="(item, index) in topicsList"
             :key="index"
             :articleValue="item"
            ></Article>
        </div>
        <div v-if="fetchIng" class="loading-box">
            <img src="@/assets/loading.gif">
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Article from '@/components/Article.vue';
import { mapGetters } from 'vuex';

@Component({
  components: {
    Article,
  },
  ...mapGetters(['topics'])
})
export default class Category extends Vue{
    
    mounted() {
       
    }
    get fetchIng () {
        return this.$store.state.fetchIng;
    }
    get topicsList () {
        return this.$store.state.topics.data || [];
    }
    get titleName () {
        let titleValue = '';
        for(let i=0; i < this.$store.state.categories.length; i++) {
            if (this.$store.state.categories[i].id == this.$route.params.id) {
                titleValue = this.$store.state.categories[i].name;
            }
        }
        return titleValue;
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
    .loading-box{
        text-align: center;
    }
</style>



