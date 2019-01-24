<template>
    <div class="market">
       <!--头部-->
      <my-header :title=title>
        <div slot="left"><span class="span" @click="edit">编辑自选</span></div>
        <div slot="right"><img @click="query" src="../.././assets/img/icon-search@2x.png"></div>
      </my-header>


      <div class="market-body">

        <div class="market-body-item1">
          <div>自选</div>
          <div v-for="(name,index) in names" :key="index" >{{name}}</div>
        </div>

        <div class="market-body-item2">
          <div @click="sort1">
            <span>市场/24h量</span>
            <img v-show="a" :class="{'isshow':IsShowa}" src="../../assets/img/sort-top@2x.png"/>
            <img v-show="!a" :class="{'isshow':IsShowa}" src="../../assets/img/sort-bottom@2x.png"/>
            <img :class="{'isshow':!IsShowa}" src="../../assets/img/sort-notselect@2x.png"/>
          </div>
          <div @click="sort2">
            <span>最新价</span>
            <img v-show="b" :class="{'isshow':IsShowb}" src="../../assets/img/sort-top@2x.png"/>
            <img v-show="!b" :class="{'isshow':IsShowb}" src="../../assets/img/sort-bottom@2x.png"/>
            <img :class="{'isshow':!IsShowb}" src="../../assets/img/sort-notselect@2x.png"/>
          </div>
          <div @click="sort3">
            <span>24h跌涨</span>
            <img v-show="c" :class="{'isshow':IsShowc}" src="../../assets/img/sort-top@2x.png"/>
            <img v-show="!c" :class="{'isshow':IsShowc}" src="../../assets/img/sort-bottom@2x.png"/>
            <img :class="{'isshow':!IsShowc}" src="../../assets/img/sort-notselect@2x.png"/>
          </div>
        </div>

        <div class="market-body-item3">
          <div class="list-body" v-for="(item,index) in data" :key="index">
            <div class="list-body-item1">
              <div>{{item.n1}}</div>
              <div class="list-body-item1-1">
                <div>{{item.n2}}</div>
                <div>{{item.n3}}</div>
              </div>
            </div>
            <div class="list-body-item1">
              <div>{{item.m1}}</div>
              <div class="list-body-item1-1">
                <div>{{item.m2}}</div>
                <div>{{item.m3}}</div>
              </div>
            </div>
            <div :class="item.number > 0 ? 'list-body-item2' : 'list-body-item3'">
              {{item.number}}%
            </div>
          </div>

        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            title : '行情',
            a:false,
            b:false,
            c:false,
            IsShowa: true,
            IsShowb: true,
            IsShowc: true,
            names:['BTC', 'TCU', 'IMDC', 'MMP', 'HMP', 'BTCD', 'TCU', 'IMD', 'MMP', 'HMP',],
            data:[
              {n1: 'BTD',n2: '1h量',n3: '1000',m1: 'BTC/KJHD',m2: '24h',m3: '1000',number:Math.floor(Math.random()*100-50)},
              {n1: 'BTD',n2: '2h量',n3: '1000',m1: 'BTC/KJHD',m2: '24h',m3: '1000',number:Math.floor(Math.random()*100-50)},
              {n1: 'BTD',n2: '3h量',n3: '1000',m1: 'BTC/KJHD',m2: '24h',m3: '1000',number:Math.floor(Math.random()*100-50)},
              {n1: 'BTD',n2: '4h量',n3: '1000',m1: 'BTC/KJHD',m2: '24h',m3: '1000',number:Math.floor(Math.random()*100-50)},
              {n1: 'BTD',n2: '5h量',n3: '1000',m1: 'BTC/KJHD',m2: '24h',m3: '1000',number:Math.floor(Math.random()*100-50)},
              {n1: 'BTD',n2: '5h量',n3: '1000',m1: 'BTC/KJHD',m2: '24h',m3: '1000',number:Math.floor(Math.random()*100-50)},
              {n1: 'BTD',n2: '7h量',n3: '1000',m1: 'BTC/KJHD',m2: '24h',m3: '1000',number:Math.floor(Math.random()*100-50)},
              {n1: 'BTD',n2: '8h量',n3: '1000',m1: 'BTC/KJHD',m2: '24h',m3: '1000',number:Math.floor(Math.random()*100-50)},

            ],
            count1: 0,


          }
      },

      methods:{
        sort1(){
          this.IsShowa = false
          this.IsShowb = true
          this.IsShowc = true
          this.a = ! this.a
          this.count1 = 0

        },
        sort2(){
          this.IsShowb = false
          this.IsShowa = true
          this.IsShowc = true
          this.b = ! this.b
          this.count1 = 0

        },
        sort3(){
          this.IsShowc = false
          this.IsShowa = true
          this.IsShowb = true
          this.c = ! this.c
          console.log(this.count1)
          this.count1++
          if(this.count1%2 === 0){
            this.data.sort((a, b)=>{
              return a.number < b.number
            })
          }else{
            this.data.sort((a, b)=>{
              return a.number > b.number
            })
          }
        },
        edit(){
          this.$router.push({path: '/editselect'})
        },
        query(){
          this.$router.push({path: '/query'})
        }



      }
    }


</script>

<style lang="less" scoped>
@import "../../Less/market";
</style>
