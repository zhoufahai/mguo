<template>
  <transition name="slide-fade" class="lll" :aria-modal="true">
    <div v-show="showconfirm" class="lllo">
      <div>
        <div class="msg">{{msg}}</div>
        <div class="btns">
          <div class="cancle" @click="cancle">取消</div>
          <div class="sure" @click="sure">确定</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "my-confirm",
    props:{
      showconfirm:'',
      msg: '',
    },
    methods:{
      cancle(){
        this.$emit('cancle',this.$props)
      },
      sure(){
        this.$emit('sure',this.$props)
      }
    }
  }
</script>

<style scoped>
  .slide-fade-enter-active {
    transition: all 0.1s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(1px);
    opacity: 0;
  }

  .lllo{
    position: fixed;
    bottom: 35%;
    left: 10%;
    width: 80%;
  }

  .lllo .msg{
    padding: 1rem;
    text-align: center;
    background-color: #ffffff;
    border-bottom: 1px solid #999999;
  }

  .lllo .btns{
    display: flex;
    background-color: #ffffff;
  }

  .btns .cancle{
    width: 50%;
    text-align: center;
    padding: 0.5rem 0;
  }

  .btns .sure{
    width: 50%;
    text-align: center;
    padding: 0.5rem 0;
    background-color: rgba(65, 152, 255, 0.99);
  }
</style>
