<template>
    <div class="three-certification">
      <my-header :title="title">
        <div slot="left"><img @click="goback" src="../.././assets/img/back@2x.png"/></div>
        <div slot="right">完成</div>
      </my-header>

      <div class="three-body">
        <div class="checkbox">
          <input type="checkbox"/>我保证以下填写或上传的资料真实准确
        </div>

        <div class="items">
          <div>地址类型文件</div>
          <div class="select">
            <select>
              <option>账单</option>
              <option>账单</option>
              <option>账单</option>
            </select>
          </div>
        </div>

        <div class="three-phone">

          <div class="phones">
            <div class="img">
              <img class="img1" src="../.././assets/img/bg-file@2x.png">
              <img class="img2" src="../.././assets/img/icon-photo@2x.png">
              <div class="text">拍照或上传</div>
            </div>

            <div class="img">
              <img class="img1" src="../.././assets/img/bg-file@2x.png">
              <img class="img2" src="../.././assets/img/icon-photo@2x.png">
              <div class="text">拍照或上传</div>
            </div>
          </div>

          <div class="phones">
            <div class="img">
              <img class="img1" src="../.././assets/img/bg-file@2x.png">
              <img class="img2" src="../.././assets/img/icon-photo@2x.png">
              <div class="text">拍照或上传</div>
            </div>

            <div class="img">
              <img class="img1" src="../.././assets/img/bg-file@2x.png">
              <img class="img2" src="../.././assets/img/icon-photo@2x.png">
              <div class="text">拍照或上传</div>
            </div>
          </div>
      </div>

        <div class="attention">
          <p>注意事项:</p>
          <p>1支持证件类型:ID证/身份证、护照1支持证件类型:ID证/身份证、护照1支持证件类型:ID证/身份证、护照1支持证件类型:ID证/身份证、护照</p>
          <p>1支持证件类型:ID证/身份证、护照</p>
          <p>1支持证件类型:ID证/身份证、护照</p>
          <p>2证件照清晰，无涂改</p>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "three",
      data(){
          return{
            title: '3级认证',
          }
      },
      methods:{
        goback(){
          this.$router.push({path:'/shiming'})
        }
      }
    }
</script>

<style lang="less" scoped>
@import "../../Less/certification/three";
</style>
