<template>
    <transition name="slide-fade" class="lll" :aria-modal="true">
      <div v-show="shownum" class="lllo">
        <slot></slot>
      </div>
    </transition>
</template>

<script>
    export default {
        name: "my-dialog",
      props:{
          shownum:''
      }

    }
</script>

<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(10px);
    opacity: 0;
  }

  .lllo{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
