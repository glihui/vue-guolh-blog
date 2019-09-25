<template>
    <div class="tab_box">
        <div class="blog_name">Dream It Possible</div>
        <ul class="tab_ul">
            <li class="tab_li" :key="index" v-for="(item, index) in tabs" @click="goTabPage(item.id)">
                {{item.name}}
            </li>
        </ul>
        <div class="login_register" v-if="!userMsg.name">
            <div class="login-btn" @click="goLogOrReg(1)">登录</div>
            <div class="register-btn" @click="goLogOrReg(2)">注册</div>
        </div>

        <div class="user-msg" v-if="userMsg.name">
            <img class="user-img" v-if="userMsg.avatar" :src="userMsg.avatar"/>
            <img class="user-img" v-else src="@/assets/default_boy.png"/>
            <span class="user-name">{{userMsg.name}}</span>
            <span class="user-logout" @click="logout">退出</span>
        </div>

        <el-dialog
            :title="loginOrRegist"
            :center="true"
            :visible.sync="dialogVisible"
            width="30%">
            <div class="login-register-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="账号">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.password" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">{{loginOrRegist}}</el-button>
                    </el-form-item>
                </el-form> 
            </div>   
        </el-dialog>
    </div>
</template>
<script lang="ts">
import {
    Component, Provide, Prop, Vue
} from 'vue-property-decorator';
import API from '@/api/api.js';
import { mapActions, mapGetters } from 'vuex';

interface FormObject {
    name: String,
    password: String
}

@Component({
    ...mapGetters(['categories']),
    ...mapActions(['getTopics', 'getCategories'])
})

export default class HomeTab extends Vue {
    
    @Provide() dialogVisible: Boolean = false;
    @Provide() loginOrRegist: String = '登录';
    @Provide() logOrRegFlag: Number = 1;

    @Provide() form: FormObject = {
        name:'',
        password:''
    };

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

    onSubmit() {
        console.log(this.form);
        let url = "";
        if (this.logOrRegFlag === 1) {
            url = "authorizations";
        } else {
            url = "register";
        }
        API.loginOrRegister(url,{
            name: this.form.name,
            password: this.form.password
        }).then((res:any) => {
            this.$message({
                message: `恭喜你，${this.loginOrRegist}成功`,
                type: 'success'
            });
            this.$store.commit('setUser', res);
            this.dialogVisible = false;

            // 存入缓存
            localStorage.setItem('user', JSON.stringify(res));
        }).catch(error => {
            console.log(error.message);
            this.$message.error(error.message);
            
            this.dialogVisible = false;
        });
    }

    logout() {
        this.$store.commit('setUser', {});
        // 清除缓存
        localStorage.removeItem('user');
    }

    goLogOrReg(flag) {
        if(flag === 1) {
            this.loginOrRegist = '登录';
        } else {
            this.loginOrRegist = '注册';
        }
        this.dialogVisible = true;
        this.logOrRegFlag = flag;
    }
    

    get tabs() {
        return this.$store.state.categories;
    }

    get userMsg() {
        return this.$store.state.user;
    }
}
</script>
<style lang="scss" scoped>
    .tab_box{
        display: flex;
        background-color:#0593d3; 
        position: relative;
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
        .login_register{
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            height: 50px;
            line-height: 50px;
            .login-btn, .register-btn{
                font-size: 14px;
                color:white;
                cursor: pointer;
            }
            .register-btn{
                margin: 0 20px;
            }
        }
        .login-register-box{
            text-align: center;
            padding-right: 40px;
        }
        .user-msg{
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            height: 50px;
            .user-img {
                width: 40px;
                height: 40px;
                margin: 5px 10px 0 0;
            }
            .user-name, .user-logout{
                line-height: 50px;
                color: #fff;
                font-size: 16px;
            }
            .user-logout{
                font-size: 18px;
                margin: 0 10px;
                cursor: pointer;
            }
        }
    } 
</style>

