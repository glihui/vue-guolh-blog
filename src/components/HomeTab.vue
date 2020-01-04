<template>
    <div>
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
                <img class="user-img" @click="changeAvatar" v-if="userMsg.avatar" :src="userMsg.avatar"/>
                <img class="user-img" @click="changeAvatar" v-else src="@/assets/default_boy.png"/>
                <span class="user-name">{{userMsg.name}}</span>
                <span class="user-logout" @click="logout">退出</span>
            </div>
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

        <el-dialog
            title="更换头像"
            :visible.sync="avtarDialogVisible"
            :center="true"
            width="30%">
            <div class="avatar-box">
                <el-upload
                    class="avatar-uploader"
                    action="/api/images"
                    name="image"
                    :data="{type:'avatar'}"
                    :headers="{
                        'Authorization': `Bearer ${getToken()}`
                    }"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :on-error="handleAvatarError"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="avtarDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="updateAvatar">确 定</el-button>
                </span>
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
    @Provide() avtarDialogVisible: Boolean = false;
    @Provide() loginOrRegist: String = '登录';
    @Provide() logOrRegFlag: Number = 1;
    @Provide() imageUrl: String = '';
    @Provide() avatarImageId: Number = 0;

    @Provide() form: FormObject = {
        name:'',
        password:''
    };

    created() {
        this.$store.dispatch('getCategories');

        setTimeout(() => {
            // 从缓存获取登录信息
            let user:string = localStorage.getItem('new_user') || '';
            if (user !== '') {
                this.$store.commit('setUser', JSON.parse(user));

                setTimeout(() => {
                    // 刷新token
                    API.refreshToken().then((res:any) => {
                        console.log(res);
                        if (res.code === 0) {
                            let userObj = JSON.parse(user);
                            userObj.meta = res.data;
                            localStorage.setItem('new_user', JSON.stringify(userObj));
                            console.log(',,,-',this.$route)
                            this.$store.commit('setUser', userObj); 
                        } 
                        if (this.$route.name === 'category' || this.$route.name === 'home') {
                            let categoryId = this.$route.params.id;
                            this.$store.dispatch('getTopics', {id: categoryId ? categoryId : 1});
                        }
                    }).catch(error => {
                        
                    });
                }, 1000);
                
            } else {
                if (this.$route.name === 'category' || this.$route.name === 'home') {
                    let categoryId = this.$route.params.id;
                    this.$store.dispatch('getTopics', {id: categoryId ? categoryId : 1});
                }
            } 
        }, 500);
        
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
            if (res.code === 0) {
                this.$message({
                    message: `恭喜你，${this.loginOrRegist}成功`,
                    type: 'success'
                });
                this.$store.commit('setUser', res.data);
                // 存入缓存
                localStorage.setItem('new_user', JSON.stringify(res.data));

                let categoryId = this.$route.params.id;
                this.$store.dispatch('getTopics', {id: categoryId ? categoryId : 1});

                this.dialogVisible = false;
            } else {
                this.$message({
                    message: res.message,
                    type: 'error'
                });
            }    
        }).catch(error => {
            console.log(error.message);
            this.$message.error(error.message);
            
            this.dialogVisible = false;
        });
    }

    logout() {
        API.deleteToken().then((res:any) => {  
        });
        this.$store.commit('setUser', {});
        // 清除缓存
        localStorage.removeItem('new_user');

        let categoryId = this.$route.params.id;
        this.$store.dispatch('getTopics', {id: categoryId ? categoryId : 1});
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

    changeAvatar() {
        this.avtarDialogVisible = true;
    }

    handleAvatarSuccess(res, file) {
        console.log(res);
        if (res.code === 0) {
            this.imageUrl = URL.createObjectURL(file.raw);
            this.avatarImageId = res.data.id;
        } else {
            this.$message.error(res.message);
        }
        
    }

    handleAvatarError(err, file, fileList) {
        console.log(err);
    }
    
    beforeAvatarUpload(file) {
        console.log(file.type)
        const isJPG = file.type === 'image/jpeg' || 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
        }
        if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
    }

    updateAvatar() {
        if (this.avatarImageId !== 0) {
            API.editUser(
                {
                avatar_image_id: this.avatarImageId
                }
            ).then((res:any) => {  
                console.log(res);
                this.$message({
                    message: '头像修改成功',
                    type: 'success'
                });
                // userMsg
                let userObj = this.userMsg;
                userObj.avatar = res.data.avatar;
                localStorage.setItem('new_user', JSON.stringify(userObj));
                this.$store.commit('setUser', userObj);
                console.log(this.userMsg);
                this.avtarDialogVisible = false;
            });
        } else {
            this.avtarDialogVisible = false;
        }

        
        
    }

    getToken() {
        let user = localStorage.getItem('new_user') || '';
        let token = user ? JSON.parse(user).meta.access_token : '';
        return token;
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
        width: 100%;
        background-color: #194ba8;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
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
                border-radius: 20px;
                margin: 5px 10px 0 0;
                cursor: pointer;
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
        .avatar-box{
            text-align: center;
        }
    } 

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
    border-radius: 50%;
  }
</style>

