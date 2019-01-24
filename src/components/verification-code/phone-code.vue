<template>
  <div class="phone-code">
    <!-- 头部 -->
    <my-header :title="title">
      <div slot="left" @click="goback"><img src="../.././assets/img/back@2x.png"/></div>
    </my-header>

    <!-- 输入框部分 -->
    <div class="body">
      <div class="body-item1">请输入6位数字验证码</div>

      <div class="body-item2">
        <security-code :number="6" v-model="phoneCode"/>
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
        name: "phone-code",
      components: {SecurityCode},
      data(){
          return{
            phoneCode:'',
            title: '手机验证码'
          }
      },
      methods:{
        goback(){
          this.$router.push({path:'/security'})
        },
        submit(){
          console.log(this.phoneCode)
        }

      }

    }
</script>

<style lang="less" scoped>
@import "../../Less/phone-code";
</style>
