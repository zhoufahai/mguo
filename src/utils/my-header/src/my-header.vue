<template>
  <div class="header">
    <div class="left"><slot name="left"></slot></div>
    <div class="title">{{title}}</div>
    <div class="right" style=""><slot name="right"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "my-header",
      props:{
        title: '',
      }
    }
</script>

<style lang="less" scoped>
  .header{
    background-color: #ffffff;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 1;
    width: 100%;
    top: 0;
    right: 0;

  .left{
    width: 30%;
    color: #999999;

    img{
      width: 0.3rem;
      height: 0.3rem;
      margin-left: 0.3rem;
    }
  }

  .title{
    padding: 0.5rem 0;
    width: 90%;
    text-align: center;
    font-size: 0.4rem;
  }

  .right{
    width: 30%;
    text-align: center;

    img{
      width: 0.5rem;
      height: 0.5rem;
    }
  }
  }

</style>
