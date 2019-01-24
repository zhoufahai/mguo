<template>
    <div class="take-bi">
      <my-header :title="title">
        <div slot="left"><img @click="goback" class="img1" src="../.././assets/img/back@2x.png"/></div>
      </my-header>

      <div class="take-body">
        <div class="take-body-items" v-for="(takebi, index) in takebiData" :key="index">
          <div class="items-left">{{takebi.bi}}</div>
          <div class="items-right">{{takebi.num}} <img src="../.././assets/img/deal-go@2x.png"/></div>

        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "take-bi",
      data(){
          return{
            title: '提币地址',
            takebiData:[
              {bi: 'BTC', num: 32},
              {bi: 'FKD', num: 78},
              {bi: 'PSDK', num: 1},
              {bi: 'SDF', num: 1},
              {bi: 'EFD', num: 5},
              {bi: 'CVG', num: 2},
              {bi: 'DDD', num: 3},
            ]
          }
      },
      methods:{
          goback(){
            this.$router.push({path: '/tabs/me'})
          }
      }
    }
</script>

<style lang="less" scoped>
  .take-bi{
    .take-body{
      margin-top: 2rem;

      .take-body-items{
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        padding: 0.3rem 0.5rem;
        font-size: 0.4rem;
        align-items: center;
        border-bottom: 1px solid #dddddd;

        .items-right{
          display: flex;
          align-items: center;

          img{
            width: 0.3rem;
            height: 0.4rem;
            margin-left: 0.3rem;
          }
        }

      }

    }
  }
</style>
