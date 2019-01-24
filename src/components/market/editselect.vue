<template>
    <div class="editselect">
      <!-- 头部 -->
      <my-header :title="title">
        <div slot="left" ><span style="margin-left: 0.3rem" @click="goback">完成</span></div>
        <div slot="right"  style="color: #999999;text-align: right;margin-right: 0.3rem;"><span>添加</span></div>
      </my-header>

      <div class="edit-body">
        <div class="edit-body-one">
          <div style="width: 40%">市场</div>
          <div>置顶</div>
          <div>排序</div>
        </div>
        <div class="edit-body-two">
          <div class="body-two-items" v-for="i in 5">
            <div style="width: 40%"><img src="../.././assets/img/edit@2x.png"/><span style="margin-left: 0.3rem">BCC/UDRG</span></div>
            <div><img src="../.././assets/img/settop@2x.png"/></div>
            <div><img src="../.././assets/img/sort@2x.png"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "editselect",
      data(){
          return{
            title: '编辑自选',

          }
      },
      methods:{
          goback(){
            this.$router.push({path: '/tabs/market'})
          }
      }
    }
</script>

<style lang="less" scoped>
.editselect{
  .edit-body{
    margin-top: 1.55rem;

    .edit-body-one{
      padding: 0.5rem;
      background-color: #ffffff;
      border-bottom: 1px solid #dddddd;
      display: flex;
      justify-content: space-between;
      color: #999999;

    }

    .edit-body-two{

      .body-two-items{
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
        background-color: #ffffff;
        font-size: 0.4rem;
        border-bottom: 1px solid #dddddd;

        img{
          width: 0.4rem;
          height: 0.4rem;
        }

        :first-child{
          display: flex;
          align-items: center;
        }
      }

    }
  }
}
</style>
