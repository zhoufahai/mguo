<template>
    <div class="settingpassword">
      <!-- 头部 -->
      <my-header :title="title">
        <div slot="left"><img @click="goback" src="../.././assets/img/back@2x.png"/></div>
      </my-header>

      <div class="settingpassword-body">
        <div class="u-p">
          <div class="item1">原密码</div>
          <div class="item2">
            <input type="text" placeholder="请输入原密码" v-model="oldpassword"/>
          </div>
        </div>
        <div class="u-p">
          <div class="item1">新密码</div>
          <div class="item2">
            <input type="text" placeholder="请输入新密码" v-model="newpassword"/>
          </div>
        </div>
        <div class="u-p">
          <div class="item1">重新输入新密码</div>
          <div class="item2">
            <input type="text" placeholder="请重新输入新密码" v-model="surepassword"/>
          </div>
        </div>

        <div class="btn">
          <button>提交</button>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "settingpassword",
      data(){
          return{
            title: '设置登录密码',
            oldpassword: '',
            newpassword:'',
            surepassword: '',
          }
      },
      methods:{
          goback(){
            this.$router.push({path: '/security'})
          }
      }
    }
</script>

<style lang="less" scoped>
@import "../../Less/settingpassword";
</style>
