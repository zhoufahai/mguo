<template>
    <div class="findpassword">
      <my-header :title="title">
        <div slot="left"><img @click="goback" src="../.././assets/img/back@2x.png"/></div>
      </my-header>

      <div class="findpassword-body">
        <div class="items">
          <div class="item1">手机或邮箱</div>
          <div class="item2">
            <input type="text" placeholder="请输入手机号或邮箱"/>
          </div>
        </div>

        <div class="btn">
          <button>下一步</button>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "findpassword",
      data(){
          return{
            title: '找回密码',
          }
      },
      methods:{
          goback(){
            this.$router.push({path: '/login'})
          }
      }
    }
</script>

<style lang="less" scoped>
  @import "../../Less/login/findpassword";

</style>
