<template>
  <div class="setting">
    <my-header :title="title">
      <div slot="left"><img @click="goback" src="../.././assets/img/back@2x.png"/></div>
    </my-header>

    <div class="setting-body">

      <div class="items" style="border-top: 1px solid #dddddd">
        <div class="item1">交易所时区</div>
        <div class="item2">GMT +8:00</div>
      </div>
      <div class="items">
        <div class="item1">语言</div>
        <div class="item2">简体中文<img :src="imgGo"/></div>
      </div>
      <div class="items">
        <div class="item1">计价方式</div>
        <div class="item2">CNY 人民币<img :src="imgGo"/></div>
      </div>
      <div class="items">
        <div class="item1">刷新时间</div>
        <div class="item2">服务器推送<img :src="imgGo"/></div>
      </div>
    </div>

    <div class="setting-footer">
      <button @click="exit">退出登录</button>
    </div>
  </div>


</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            title: '设置',
            imgGo:require('../.././assets/img/deal-go@2x.png'),
          }
      },

      methods:{
          goback(){
            this.$router.push({path:'/tabs/me'})
          },
        exit(){
            this.$router.push({path: '/login'})
        }
      }
    }
</script>

<style lang="less" scoped>
@import "../../Less/setting";
</style>
