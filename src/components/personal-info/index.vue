<template>
    <div class="personal-info">
      <!-- 头部 -->
      <my-header :title="title">
        <div slot="left"><img @click="goback" src="../.././assets/img/back@2x.png"/></div>
      </my-header>

      <div class="body">
        <!-- 注册账号-->
        <div class="item">
          <div>注册账号</div>
          <div>15808176250</div>
        </div>
        <div class="line"></div>
        <!-- UID -->
        <div class="item">
          <div>UID</div>
          <div>15808</div>
        </div>
        <div class="line"></div>
        <!-- 用户名 -->
        <div class="item">
          <div>用户名</div>
          <div @click="goChangename">{{namell}}<img src="../.././assets/img/deal-go@2x.png"/></div>
        </div>
      </div>

      <div class="foot">
        <!-- 姓-->
        <div class="item">
          <div>姓</div>
          <div>周</div>
        </div>
        <div class="line"></div>
        <!-- 名 -->
        <div class="item">
          <div>名</div>
          <div>法海</div>
        </div>
        <div class="line"></div>
        <!-- 国家-->
        <div class="item">
          <div>国家或地区</div>
          <div>中国</div>
        </div>
        <div class="line"></div>
        <!-- 身份证-->
        <div class="item">
          <div>身份证或护照号</div>
          <div>330889199506158564</div>
        </div>
        <div class="line"></div>
        <!-- 认证级别 -->
        <div class="item">
          <div>认证级别</div>
          <div>3</div>
        </div>
      </div>
    </div>
</template>

<script>

    export default {
        name: "index",
      data(){
          return{
            title: '个人信息',
            namell: ''
          }
      },
      methods:{
        goChangename(){
          this.$router.push({path:'/changename'})
        },
        goback(){
          this.$router.push({path:'/tabs/me'})
        },
      },

      mounted(){
        if(typeof this.$route.query.newname === 'undefined' ){
          this.namell = 'uid123456'
        }else{
          this.namell = this.$route.query.newname
        }
      }

    }
</script>

<style lang="less" scoped>
  @import "../../Less/personalinfo.less";

</style>
