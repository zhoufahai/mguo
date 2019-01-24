<template>
    <div class="assets-lists">
      <div class="assets-list">
        <div class="assets-name">{{assetsname}}</div>
        <div class="use-frozen">
          <div>可用</div>
          <div>{{useable}}</div>
        </div>
        <div class="use-frozen">
          <div>冻结</div>
          <div>{{frozen}}</div>
        </div>
        <div class="imgs"><img @click="openBtns" v-show="isopen" src="../../../assets/img/icon-open@2x.png"/><img @click="openBtns" v-show="!isopen" src="../../../assets/img/icon-shouqi@2x.png"/></div>
      </div>

      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "assets-list",
      props:{
          assetsname: '',
        useable: '',
        frozen: '',
        isopen: '',
      },
      data(){
          return{

          }
      },
      methods:{
          openBtns(){
            this.$emit('open-btns',this.$props)
          }
      }


    }
</script>

<style lang="less" scoped>
  .assets-lists{
    background: #ffffff;

    .assets-list{
      padding: 0.3rem 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #dddddd;

      .assets-name{
        font-size: 0.4rem;
      }

      .use-frozen{
        display: flex;
        flex-direction: column;

        :first-child{
          color: #999999;
          margin-bottom: 0.1rem;
        }

        :last-child{
          font-size: 0.35rem;
        }
      }



      .imgs{
        img{
          width: 0.4rem;
          height: 0.2rem;
        }
      }

    }

  }

</style>
