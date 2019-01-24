<template>
  <div class="list">
    <!-- 各种榜的头部-->
    <div class="list-header">
      <div v-for="(bang,index) in bangs" :key="index" @click="clickbang(index)" :class="{'active':bang.isActive}">{{bang.text}}</div>
    </div>
    <!-- 分割线 -->
    <div class="line"></div>
    <!-- 各种榜的数据 -->
    <!-- 成交榜 -->
    <div class="list-body" v-for="i in 10" v-show="cheng">
      <div class="list-body-item1">
        <div>BCH/BTD</div>
        <div class="list-body-item1-1">
          <div>24h量</div>
          <div>1000</div>
        </div>
      </div>
      <div class="list-body-item1">
        <div>BCH/BTD</div>
        <div class="list-body-item1-1">
          <div>24h量</div>
          <div>1000</div>
        </div>
      </div>
      <div class="list-body-item1">
        123456.789
      </div>
    </div>
<!-- 涨幅榜 -->
    <div class="list-body" v-for="i in 10" v-show="zhang">
      <div class="list-body-item1">
        <div>BTD</div>
        <div class="list-body-item1-1">
          <div>24h量</div>
          <div>1000</div>
        </div>
      </div>
      <div class="list-body-item1">
        <div>BCH/BTD</div>
        <div class="list-body-item1-1">
          <div>24h量</div>
          <div>1000</div>
        </div>
      </div>
      <div class="list-body-item2">
        +25.6%
      </div>
    </div>
<!-- 跌幅榜 -->
    <div class="list-body" v-for="i in 10" v-show="die">
      <div class="list-body-item1">
        <div>BCH</div>
        <div class="list-body-item1-1">
          <div>24h量</div>
          <div>1000</div>
        </div>
      </div>
      <div class="list-body-item1">
        <div>BCH/BTD</div>
        <div class="list-body-item1-1">
          <div>24h量</div>
          <div>1000</div>
        </div>
      </div>
      <div class="list-body-item3">
        -12.8%
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "HomeBang",
      data(){
        return{
          zhang: true,
          die: false,
          cheng: false,
          bangs:[
            {text:'涨幅榜',isActive:true},
            {text:'跌幅榜',isActive:false},
            {text:'成交榜',isActive:false},

          ]
        }
      },

      methods:{
        clickbang(i){
          if(i === 0){
            this.zhang = true;
            this.die = false;
            this.cheng = false;
            this.bangs[i].isActive = true;
            this.bangs[i+1].isActive = false;
            this.bangs[i+2].isActive = false;

          }else if(i === 1){
            this.zhang = false;
            this.die = true;
            this.cheng = false;
            this.bangs[i].isActive = true;
            this.bangs[i-1].isActive = false;
            this.bangs[i+1].isActive = false;

          }else{
            this.zhang = false;
            this.die = false;
            this.cheng = true;
            this.bangs[i].isActive = true;
            this.bangs[i-1].isActive = false;
            this.bangs[i-2].isActive = false;

          }

        }
      }

    }
</script>

<style lang="less" scoped>
  @import "../../Less/com/homebang";
</style>
