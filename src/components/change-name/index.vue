<template>
    <div class="change-name">
      <!-- 头部 -->
      <my-header :title="title">
        <div slot="left" @click="goback"><img src="../.././assets/img/back@2x.png"/></div>
      </my-header>

      <div class="body">
        <div class="u-p">
          <div class="item1">新用户名</div>
          <div class="item2">
            <input type="text" placeholder="请新用户名" v-model="mynewname"/>
          </div>
        </div>
        <div class="tip">
          <p>提示，用户名只能修改一次，所有用户名不能重复</p>
        </div>
        <div class="btn">
          <button @click="save">保存</button>
        </div>
      </div>
    </div>

</template>

<script>

    export default {
        name: "index",
      data(){
          return{
            title: '修改用户名',
            mynewname:'',
          }
      },
      methods:{
          goback(){
            this.$router.push({path:'/personalinfo'})
          },
        save(){
          this.$router.push({path:'/personalinfo',query:{newname:this.mynewname}});

        }
      }
    }
</script>

<style lang="less" scoped>
  @import '../../Less/changename.less';
</style>
