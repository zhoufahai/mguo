<template>
  <div class="login">
    <!-- 取消 -->
    <div class="canle">
      <p>取消</p>
    </div>
    <!-- logo -->
    <div class="logo">
      <p><b>Mango</b></p>
    </div>
    <!-- 账号 -->
    <div class="u-p">
      <div class="item1">手机号或邮箱</div>
      <div class="item2">
        <input type="text" placeholder="请输入手机号或邮箱" v-model="phone"/>
      </div>
    </div>
    <!-- 密码 -->
    <div class="u-p" style="margin-top: 0.8rem;">
      <div class="item1">密码</div>
      <div class="item2">
        <input type="password" placeholder="请输入密码" v-model="password"/>
      </div>
    </div>
    <!-- 登录按钮 -->
    <div class="btn">
      <button type="submit" @click="denglu">登录</button>
    </div>
    <!-- 忘记密码 -->
    <div class="forget">
      <span @click="findpassword">忘记密码</span>
    </div>
    <!-- 注册 -->
    <div class="register">
      <p>还没有账号？去<b @click="register">注册</b></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            phone: '',
            password: '',
          }
      },

      methods:{
          register(){
            this.$router.push({path:'/register'})
          },
        denglu(){
            if(this.phone === '123456' && this.password === '123456'){
              this.$router.push({path:'/tabs/home'})
            }else{
              alert('用户名或密码错误')
            }
        },
        findpassword(){
            this.$router.push({path: '/findpassword'})
        }
      }
    }
</script>

<style lang="less" scoped>
  @import "../../Less/login/login.less";

</style>
