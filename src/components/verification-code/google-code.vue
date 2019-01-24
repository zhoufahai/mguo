<template>
    <div class="google-code">
      <!-- 头部 -->
      <my-header :title="title">
        <div slot="left" @click="goback"><img src="../.././assets/img/back@2x.png"/></div>
      </my-header>

      <!-- 输入框部分 -->
      <div class="body">
        <div class="body-item1">请输入6位数字验证码</div>

        <div class="body-item2">
          <!--<div v-for="(code,index) in codes.numbers" :key="index"><input v-focus maxlength="1" type="text" v-model.number="codes.num[index]"/></div>-->
          <security-code :number="6" v-model="googleCode"/>
        </div>

      </div>
      <div class="btn">
        <button type="submit" @click="submit">下一步</button>
      </div>

    </div>
</template>

<script>
import SecurityCode from "./SecurityCode";

    export default {
        name: "google-code",
      components: {SecurityCode},
      data(){
          return{
            googleCode: '',
            title: '谷歌身份验证码'

          }
      },

      methods:{
        goback(){
          this.$router.push({path:'/security'})
        },
        submit(){
          console.log(this.googleCode)
        }

      }
    }
</script>

<style lang="less" scoped>
  @import "../../Less/google-code";
</style>
