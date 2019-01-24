<template>
    <div class="suggest">
      <my-header :title="title">
        <div slot="left"><img @click="goback" class="img1" src="../.././assets/img/back@2x.png"/></div>
      </my-header>
    </div>
</template>

<script>
    export default {
        name: "suggest",
      data(){
          return{
            title: '建议反馈'
          }
      },
      methods:{
        goback(){
          this.$router.push({path: '/tabs/me'})
        }
      }

    }
</script>

<style scoped>

</style>
