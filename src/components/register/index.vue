<template>
    <div class="register">
      <!-- 头部 -->
      <my-header :title="isShow ? title1 : title2">
        <div slot="left"><img @click="goback" src="../.././assets/img/back@2x.png"/></div>
        <div slot="right" @click="goback">登录</div>
      </my-header>

      <!-- 国家或地区 -->
      <div class="controy">
        <div class="controy-item1">
          <span>国家或地区注册后，不可修改</span>
        </div>
        <div class="select">
          <span>国家或地区</span>
          <select>
            <option v-for="(item,index) in controies">{{item}}</option>
          </select>
        </div>
        <div class="phone">
          <div v-show="isShow">
            <span>+86</span>
            <input type="text" v-model.number="phone" @blur="getphone(phone)" placeholder="请输入手机号"/>
            <div v-show="iserror" class="error">输入手机号格式不正确</div>
            <div v-show="isnone" class="error">手机号不能为空</div>
          </div>
          <div v-show="!isShow">
            <input type="text" v-model="email" @blur="getemail(email)" placeholder="请输入邮箱号"/>
            <div v-show="iserror" class="error">输入邮箱格式不正确</div>
            <div v-show="isnone" class="error">邮箱不能为空</div>
          </div>


        </div>
      </div>
      <!-- 密码 -->
      <div class="u-p">
        <div class="item1">密码</div>
        <div class="item2">
          <input type="password" v-model="password" @blur="getpassword(password)" placeholder="输入密码"/>
        </div>
      </div>
      <!-- 确认密码 -->
      <div class="u-p">
        <div class="item1">重新输入密码</div>
        <div class="item2">
          <input type="password" v-model="surepassword" @blur="getsurepassword(surepassword)" placeholder="请重新输入密码"/>
        </div>
      </div>


      <!-- 下一步按钮 -->
      <div class="btn">
        <button type="submit" @click="submit">下一步</button>
      </div>

      <div class="email" v-show="isShow"><span @click="change">使用邮箱注册</span></div>
      <div class="email" v-show="!isShow"><span @click="change">使用手机注册</span></div>

    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            title1: '手机注册',
            title2: '邮箱注册',
            isShow:true,
            iserror: false,
            isnone:false,
            email:'',
            phone:'',
            password:'',
            surepassword: '',
            controies:[
              '中国',
              '美国',
              '英国',
              '法国',
              '德国',
              '韩国',
              '蒙古国',
            ]

          }
      },

      methods:{
          goback(){
            this.$router.push({path:'/login'})
          },
        login(){
            this.$router.push({path:'/login'})
        },
        getphone(val){
            if(val.length===0){
              this.iserror = false
              this.isnone = !this.none
            }else if(!/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(val)){
              this.isnone = false
              this.iserror = !this.iserror
            }
        },
        getemail(val){
            if(val.length === 0){
              this.iserror = false
              this.isnone = !this.none
            }else if(!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(val)){
              this.isnone = false
              this.iserror = !this.iserror
            }


        },
        getpassword(val){

        },
        getsurepassword(val){
            if(val.length === 0){
              alert('请确认密码')
            }else if(this.surepassword !== this.password){
              alert('输入有误，')
              this.surepassword = ''
            }
        },
        change(){
            this.isShow = ! this.isShow
          this.isnone = false
          this.iserror = false
        },

        submit(){

        }


      }
    }
</script>

<style lang="less" scoped>
  @import "../../Less/register";

</style>
