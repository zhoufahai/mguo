<template>
    <div class="second-certification">
      <my-header :title="title">
        <div slot="left"><img @click="goback" src="../.././assets/img/back@2x.png"/></div>
        <div slot="right">完成</div>
      </my-header>

      <div class="second-body">
        <div class="checkbox">
          <input type="checkbox"/>我保证以下填写或上传的资料真实准确，证件必须与1级认证上传的证件相符
        </div>
        <div class="img">
          <img class="img1" src="../.././assets/img/bg-zheng@2x.png"/>
          <img class="img2" src="../.././assets/img/icon-photo@2x.png"/>
          <div class="text">拍张或上传身份证正面</div>
        </div>
        <div class="img">
          <img class="img1" src="../.././assets/img/bg-zheng@2x.png"/>
          <img class="img2" src="../.././assets/img/icon-photo@2x.png"/>
          <div class="text">拍张或上传身份证反面</div>
        </div>
        <div class="attention">
          <p>注意事项:</p>
          <p>1支持证件类型:ID证/身份证、护照</p>
          <p>2证件照清晰，无涂改</p>

        </div>
      </div>


    </div>
</template>

<script>
    export default {
        name: "second",
      data(){
          return{
            title: '2级认证',
          }
      },
      methods:{
        goback(){
          this.$router.push({path:'/shiming'})
        },

      }
    }
</script>

<style lang="less" scoped>
@import "../../Less/certification/second";
</style>
