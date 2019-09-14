<template>
    <div class="tab_box">
        <div class="blog_name">Dream It Possible</div>
        <ul class="tab_ul">
            <li class="tab_li" :key="index" v-for="(item, index) in tabs" @click="goTabPage(item.id)">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import {
    Component, Provide, Prop, Vue
} from 'vue-property-decorator';
import Api from '@/api/api.js';
import { mapActions, mapGetters } from 'vuex';

@Component({
    ...mapGetters(['categories']),
    ...mapActions(['getTopics', 'getCategories'])
})

export default class HomeTab extends Vue {
    created() {
        this.$store.dispatch('getCategories');
        this.$store.dispatch('getTopics', {id: 1});
    }

    goTabPage(id:number) {
        this.$store.dispatch('getTopics', {id});
        if (id === 1) {
            this.$router.push('/').catch(err => {
                console.log(err);
            });
        } else {
            this.$router.push(`/category/${id}`).catch(err => {
                console.log(err);
            });
        }
    }

    get tabs() {
        return this.$store.state.categories;
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

