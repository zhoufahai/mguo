<template>
  <div class="shiming">
    <my-header :title="title">
      <div slot="left"><img @click="goback" src="../.././assets/img/back@2x.png"/></div>
    </my-header>

    <div class="shiming-body">
      <div class="items" v-for="(img, index) in shimingData" :key="index">
        <div class="item1">
          <div><img :src="img.img"></div>
          <div>{{img.text1}}</div>
        </div>
        <div class="item2" @click="goShiming(index)">
          <div>{{img.text2}}</div>
          <div><img :src="imgGo"></div>
        </div>
      </div>
    </div>

    <div class="shiming-btn">
      <button>提交审核</button>

    </div>

    <div class="reason">
      <span>驳回原因:信息不符合</span>
    </div>

  </div>

</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            title: '实名认证',
            imgGo:require('../.././assets/img/deal-go@2x.png'),
            shimingData:[
              {img: require('../.././assets/img/icon-lv1@2x.png'), text1: '1级认证', text2: '审核通过'},
              {img: require('../.././assets/img/icon-lv2@2x.png'), text1: '2级认证', text2: '待审核'},
              {img: require('../.././assets/img/icon-lv3@2x.png'), text1: '3级认证', text2: '去认证'},
            ]
          }
      },
      methods:{
          goback(){
            this.$router.push({path: '/tabs/me'})
          },
        goShiming(val){
            switch (val){
              case 0 :
                this.$router.push({path: '/first'});
                break;
              case 1 :
                this.$router.push({path: '/second'});
                break;
              case 2 :
                this.$router.push({path: '/three'});
                break;
              default :
                break;

            }
        }
      }
    }
</script>

<style lang="less" scoped>
@import "../../Less/certification/shiming";

</style>
