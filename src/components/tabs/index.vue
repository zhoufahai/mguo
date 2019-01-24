<template>
  <div>
    <div class="tabs">

      <ul>
        <router-link to="/tabs/home" tag="li" exact>
          <div><img class="img1" src="../.././assets/img/tab-icon-home-selected@2x.png"/></div>
          <div><img class="img2" src="../.././assets/img/tab-icon-home-normal@2x.png"/></div>
          <div>首页</div>
        </router-link>
        <router-link to="/tabs/market" tag="li">
          <div><img class="img1" src="../.././assets/img/tab-icon-market-selected@2x.png"/></div>
          <div><img class="img2" src="../.././assets/img/tab-icon-market@2x.png"/></div>
          <div>市场</div>
        </router-link>
        <router-link to="/tabs/biexchange" tag="li">
          <div><img class="img1" src="../.././assets/img/tab-icon-bb-selected@2x.png"></div>
          <div><img class="img2" src="../.././assets/img/tab-icon-bb@2x.png"></div>
          <div>币币交易</div>
        </router-link>
        <router-link to="/tabs/faexchange" tag="li">
          <div><img class="img1" src="../.././assets/img/tab-icon-fb-selected@2x.png"></div>
          <div><img class="img2" src="../.././assets/img/tab-icon-fb@2x.png"></div>
          <div>法币交易</div>
        </router-link>
        <router-link to="/tabs/me" tag="li">
          <div><img class="img1" src="../.././assets/img/tab-icon-my-selected@2x.png"/></div>
          <div><img class="img2" src="../.././assets/img/tab-icon-my@2x.png"/></div>
          <div>我的</div>
        </router-link>
      </ul>

    </div>
    <router-view/>
  </div>


</template>

<script>
    export default {
        name: "index",
      data(){
          return{

          }
      },
      methods:{

      }
    }
</script>

<style lang="less" scoped>
  .tabs {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px #000;
    width: 100%;
    & > ul, & > ul > li {
      margin: 0;
      padding: 0;
    }
    ul {
      display: table;
      width: 100%;
      & > li {
        text-align: center;
        font-size: 16px;
        display: table-cell;
        padding: 8px 12px;
        cursor: pointer;
        color: #999999;

        .img1{
          display: none;
        }

        .img2{
          display: inline;
        }

        img{
          width: 0.75rem;
          height: 0.75rem;
        }

        &.router-link-active{
          .img1{
            display: inline;
          }
          .img2{
            display: none;
          }
          color: #285fd0;
        }
        & > div {
          font-size: 14px;
          & > i {
            font-size: 30px;
          }
        }
      }
    }
  }

</style>
