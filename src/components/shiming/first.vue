<template>
    <div class="first-certification">
      <my-header :title="title">
        <div slot="left"><img @click="goback" src="../.././assets/img/back@2x.png"/></div>
        <div slot="right">完成</div>
      </my-header>

      <div class="first-body">
        <div class="chechbox">
          <input type="checkbox"/>我保证以下填写的信息真实准确，并按照证件上填写
        </div>

        <div class="first-items" >
          <div>姓(母语)</div>
          <div class="input"><input type="text" placeholder="请输入您的姓" /></div>
        </div>
        <div class="first-items" >
          <div>名(母语)</div>
          <div class="input"><input type="text" placeholder="请输入您的名" /></div>
        </div>
        <div class="first-items" >
          <div>姓(英语或拼音)</div>
          <div class="input"><input type="text" placeholder="请输入您的姓" /></div>
        </div>
        <div class="first-items" >
          <div>名(英语或拼音)</div>
          <div class="input"><input type="text" placeholder="请输入您的名" /></div>
        </div>
        <div class="first-items" >
          <div>证件类型</div>
          <div class="select">
            <select>
              <option>身份证</option>
              <option>护照</option>
            </select>
          </div>
        </div>
        <div class="first-items" >
          <div>证件号码</div>
          <div class="input"><input type="text" placeholder="请输入您的证件号码" /></div>
        </div>
        <div class="first-items" >
          <div>地址</div>
          <div class="input"><input type="text" placeholder="请输入您的地址" /></div>
        </div>
        <div class="first-items" >
          <div>城市</div>
          <div class="input"><input type="text" placeholder="请输入您的城市" /></div>
        </div>
        <div class="first-items" >
          <div>州或省份</div>
          <div class="input"><input type="text" placeholder="请输入您的州或省份" /></div>
        </div>
        <div class="first-items" >
          <div>签发日期</div>
          <div class="input"><input type="text" placeholder="请输入您的签发日期" /></div>
        </div>
        <div class="first-items" >
          <div>有效截止日期</div>
          <div class="input"><input type="text" placeholder="请输入您的有效截止日期" /></div>
        </div>
        <div class="first-items" >
          <div>出生日期</div>
          <div class="input"><input type="text" placeholder="请输入您的出生日期" /></div>
        </div>
        <div class="first-items" >
          <div>性别</div>
          <div class="select">
            <select>
              <option>男</option>
              <option>女</option>
            </select>
          </div>
        </div>


      </div>

    </div>
</template>

<script>
    export default {
        name: "first",
      data(){
          return{
            title: '1级认证',
          }
      },
      methods:{
        goback(){
          this.$router.push({path: '/shiming'})
        }
      }
    }
</script>

<style lang="less" scoped>
  @import "../../Less/certification/first";

</style>
