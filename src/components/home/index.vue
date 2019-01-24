<template>
  <div class="home">
    <!-- 轮播图 -->
    <!--<div class="swoing">
      <img :src="swoing">
    </div>-->
    <HomeSwoing/>
    <!-- 消息公告 -->
    <div class="msg">
      <!-- 小喇叭 -->
      <img :src="born"/>

      <div>投票专场活动第二场开启</div>
    </div>
    <!-- 数据显示模块 -->
      <HomeShowdata/>
    <!-- 我的资产 -->
    <div class="assets">
      <div class="item1">
        <div>我的资产</div>
        <img v-show="eyes" :src="asset" @click="isShowEyes">
        <img v-show="!eyes" src="../../assets/img/icon-eye-gray@2x.png"  @click="isShowEyes">
      </div>
      <div class="item2">总资产≈{{eyes ? '169582975.54' : '你猜我有多少钱'}}</div>
      <div class="item3">
        <div class="item3-v">
          <p>法币交易区(UTDE)</p>
          <p>100.23456789</p>
          <p>≈62000000000</p>
        </div>
        <div class="item3-v">
          <p>法币交易区(UTDE)</p>
          <p>100.23456789</p>
          <p>≈62000000000</p>
        </div>
      </div>
    </div>
    <!-- 各种榜 -->
    <home-bang/>
  </div>
</template>

<script>
    import HomeSwoing from "./HomeSwoing";
    import HomeBang from "./HomeBang";
    import HomeShowdata from "./HomeShowdata";
    export default {
        name: "index",
      components: {HomeShowdata, HomeBang, HomeSwoing},
      data(){
          return{
            eyes: true,//显示眼睛
            born:require('../../assets/img/icon-gonggao@2x.png'),
            swoing:require('../../assets/img/banner01@2x.png'),
            asset:require('../../assets/img/icon-eye@2x.png'),
          }
      },
      methods:{
        isShowEyes(){
          this.eyes = ! this.eyes
        }
      }

    }
</script>

<style lang="less" scoped>
  @import "../../Less/home";
</style>
