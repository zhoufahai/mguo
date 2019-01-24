<template>
    <div class="me">
      <!-- 头部 -->
      <div class="me-header">
        <!-- 我的 -->
        <div class="me-header-item1">
          <div></div>
          <div>我的</div>
          <div><img @click="gosetting" src="../.././assets/img/icon-setting@2x.png"/></div>
        </div>
        <!-- 手机号 -->
        <div class="me-header-item2">
          <!-- 人像图片 -->
          <div>
            <img src="../.././assets/img/icon-user@2x.png">
          </div>

          <div>15808176520</div>
        </div>
        <!-- UID -->
        <div class="me-header-item3">
          <span>UID</span>
          <span>123456789</span>
        </div>
      </div>

      <!-- 中间部分 -->
      <div class="me-body">
        <div class="me-body-item" v-for="(img,index) in imgData" :key="index" @click="goto(img.path)">
          <div class="msg">
            <div>
              <img :src="img.img"/>
            </div>
            <div>{{img.text}}</div>
            <div>
              <img :src="imgGo"/>
            </div>
          </div>
          <div class="line" v-show="(index+1) !== imgData.length"></div>

        </div>


      </div>

      <!-- 尾部 -->
      <div class="me-footer">
        <div class="me-footer-item" v-for="(img,index) in imgData2" :key="index" @click="goto(img.path)">
          <div class="msg">
            <div>
              <img :src="img.img"/>
            </div>
            <div>{{img.text}}</div>
            <div>
              <img :src="imgGo"/>
            </div>
          </div>
          <div class="line" v-show="(index+1) !== imgData2.length"></div>

        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            imgGo:require('../.././assets/img/deal-go@2x.png'),

            imgData:[
              {img:require('../.././assets/img/icon-zichan@2x.png'),text:'我的资产',path:'myassets'},
              {img:require('../.././assets/img/icon-information@2x.png'),text:'个人信息',path: 'personalinfo'},
              {img:require('../.././assets/img/icon-recommend@2x.png'),text:'返佣推荐',path:'recommend'},
              {img:require('../.././assets/img/icon-shiming@2x.png'),text:'实名认证',path: 'shiming'},
              {img:require('../.././assets/img/icon-safety@2x.png'),text:'安全中心',path: 'security'},
              {img:require('../.././assets/img/icon-adress@2x.png'),text:'提币地址',path:'take-bi'},
            ],

            imgData2:[
              {img:require('../.././assets/img/icon-opinion@2x.png'),text:'建议反馈',path:'suggest'},
              {img:require('../.././assets/img/icon-help-blue@2x.png'),text:'帮助中心',path:'help'},
              {img:require('../.././assets/img/icon-about@2x.png'),text:'关于',path:'about'},
            ]
          }
      },

      methods:{
          goto(val){

            switch (val){

              case 'myassets':
                this.$router.push({path:'/myassets'});
                break;
              case 'personalinfo':
                this.$router.push({path:'/personalinfo'});
                break;
              case 'recommend':
                this.$router.push({path:'/recommend'});
                break;
              case 'shiming':
                this.$router.push({path:'/shiming'});
                break;
              case 'security':
                this.$router.push({path:'/security'});
                break;
              case 'take-bi':
                this.$router.push({path:'/take-bi'});
                break;
              case 'suggest' :
                this.$router.push({path:'/suggest'});
                break;
              case 'help' :
                this.$router.push({path:'/help'});
                break;
              case 'about' :
                this.$router.push({path:'/about'});
                break;
              default:
                break;

            }
          },

          gosetting(){
            this.$router.push({path:'/setting'})
          }
      }
    }
</script>

<style lang="less" scoped>
  @import "../../Less/me";

</style>
