<template>
    <div class="security">
      <!-- 头部 -->
      <my-header :title="title">
        <div slot="left"><img @click="goback" src="../.././assets/img/back@2x.png"/></div>
      </my-header>

      <div class="body">
        <div class="items">
          <div class="item">
            <div>登录密码</div>
            <div @click="settingpassword">修改<img src="../.././assets/img/deal-go@2x.png"/></div>
          </div>
          <div class="line"></div>
          <div class="item">
            <div>资金安全密码</div>
            <div>未设置<img src="../.././assets/img/deal-go@2x.png"/></div>
          </div>
        </div>

        <div class="items">
          <div class="item">
            <div>多因子安全验证<span>(至少开启一项)</span></div>
          </div>
          <div class="line"></div>
          <div class="item">
            <div>手机</div>
            <div>已开启<img src="../.././assets/img/deal-go@2x.png"/></div>
          </div>
          <div class="line"></div>
          <div class="item">
            <div>邮箱</div>
            <div>未开启<img src="../.././assets/img/deal-go@2x.png"/></div>
          </div>
          <div class="line"></div>
          <div class="item">
            <div>谷歌身份验证器</div>
            <div @click="goyanzheng">未绑定<img src="../.././assets/img/deal-go@2x.png"/></div>
          </div>
        </div>

        <div class="items" style="margin-bottom: 2rem">
          <div class="item">
            <div>登录安全<span>(建议开启)</span></div>
          </div>
          <div class="line"></div>
          <div class="item">
            <div>手势密码</div>
            <div>已开启<img src="../.././assets/img/deal-go@2x.png"/></div>
          </div>
          <div class="line"></div>
          <div class="item">
            <div>指纹解锁</div>
            <div>未开启<img src="../.././assets/img/deal-go@2x.png"/></div>
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
            title: '安全中心',
          }
      },

      methods:{
        goback(){
          this.$router.push({path:'/tabs/me'})
        },
        goyanzheng(){
          this.$router.push({path: '/googlecode'})
        },
        settingpassword(){
          this.$router.push({path: '/settingpassword'})
        }
      }
    }
</script>

<style lang="less" scoped>
@import "../../Less/security";
</style>
