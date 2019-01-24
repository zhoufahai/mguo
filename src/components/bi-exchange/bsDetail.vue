<template>
  <div class="bsdetail">
    <!-- 头部 -->
    <my-header :title="title">
      <div slot="left" @click="goback"><img src="../.././assets/img/back@2x.png"/></div>
    </my-header>

    <div class="bsdetail-body">
      <div class="bsdetail-body-one">
        <span>买入</span>
        <span>MTC/HTC</span>
      </div>
      <div class="bsdetail-body-two">
        <div class="body-two-items">
          <div class="two-item"  v-for="i in 3">
            <div>成交总额</div>
            <div>1.0021512</div>
          </div>
        </div>
        <div class="body-two-items">
          <div class="two-item"  v-for="i in 3">
            <div>成交总额</div>
            <div>1.0021512</div>
          </div>
        </div>
      </div>

      <div class="bsdetail-body-three" v-for="(data, index) in datas" :key="index">
        <div class="body-three-items">
          <div>时间</div>
          <div>{{data.time}}</div>
        </div>
        <div class="body-three-items">
          <div>成交价</div>
          <div>{{data.detailPrice}}</div>
        </div>
        <div class="body-three-items">
          <div>成交量</div>
          <div>{{data.detailNum}}</div>
        </div>
        <div class="body-three-items">
          <div>手续费</div>
          <div>{{data.shou}}</div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "bsDetail",
      data(){
          return{
            title: '成交明细',
            datas:[
              {time:'12:21 09/18', detailPrice: '0.00000089BTC', detailNum: '41DMS', shou: '0.0158425NBG'},
              {time:'12:21 09/18', detailPrice: '0.00000089BTC', detailNum: '41DMS', shou: '0.0158425NBG'},
              {time:'12:21 09/18', detailPrice: '0.00000089BTC', detailNum: '41DMS', shou: '0.0158425NBG'},
              {time:'12:21 09/18', detailPrice: '0.00000089BTC', detailNum: '41DMS', shou: '0.0158425NBG'},
            ]
          }
      },
      methods:{
          goback(){
            this.$router.push({path: '/tabs/biexchange'})
          }
      }
    }
</script>

<style lang="less" scoped>
@import "../../Less/bs-detail";
</style>
