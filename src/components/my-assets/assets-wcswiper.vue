<template>
  <div>
    <wc-swiper :autoplay="false">
      <wc-slide v-for="(data, index) in dataList" :key="index">
        <div class="assets-slide">
          <p class="p1">{{data.bi}}</p>
          <p class="p2">{{iseye ? data.mon : '*******'}}</p>
          <p class="p3">≈{{data.cny}}</p>
        </div>
      </wc-slide>
    </wc-swiper>
  </div>
</template>

<script>
    export default {
        name: "assets-wcswiper",
      props:{
          iseye: '',
      },
      data(){
          return{
            dataList:[
              {bi: '币币资产估值(BTC)', mon: '100.123456789', cny: '100,551,221,.2554CNY'},
              {bi: '法币资产估值(USDT)', mon: '450.19846789', cny: '10,891,871,.1294CNY'},
            ]
          }
      }
    }
</script>

<style>
  .swiper img{
    width: 100%;
  }
  .wc-swiper-container{
    position:relative;
    width:100%;
    overflow:hidden
  }
  .wc-default-swiper-box{
    height:100%
  }
  .wc-default-swiper-box,.wc-pagination{
    width:100%;
    display:-webkit-box;
    display:-webkit-flex;
    display:-ms-flexbox;
    display:flex
  }
  .wc-pagination{
    position:absolute;
    bottom:10px;
    height:18px;
    background:transparent;
    -webkit-box-align:center;
    -webkit-align-items:center;
    -ms-flex-align:center;
    align-items:center;
    -webkit-box-pack:center;
    -webkit-justify-content:center;
    -ms-flex-pack:center;
    justify-content:center
  }
  .wc-pagination .wc-dot{
    height:3px;
    width:15px;
    background:#000;
    opacity:.2;
    margin:0 5px;
    -webkit-border-radius:50%;
    border-radius:5px;
  }
  .wc-pagination .wc-dot-active{
    opacity:1;
    background:#3498db
  }
  .wc-slide{
    height:100%;
    width:100%;
    -webkit-flex-shrink:0;
    -ms-flex-negative:0;
    flex-shrink:0;
    z-index:10;
    overflow:hidden
  }
  .wc-slide img{
    -webkit-user-drag:none
  }



  .assets-slide {
    padding: 0.2rem 1.5rem;
    margin: 1rem;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px #999999;
    line-height: 8px;
    text-align: center;
  }

  .assets-slide .p1{
    font-size: 0.4rem;
  }

  .assets-slide .p2 {
    font-size: 0.5rem;
    color: #1a58ff;
  }

  .assets-slide .p3{
    color: #999999;
  }

</style>
