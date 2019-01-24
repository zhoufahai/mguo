<template>

  <!--<div class="homeshowdata">
    <div>
      <ul>
        <transition-group tag="ul" name="image">
          <li v-for="(i,index) in 2" :key="index" v-show="index === mark" @touchstart.capture="touchStart" @touchend.capture="touchEnd">
            <div class="showdata">
              <div class="item" v-for="i in 3">
                <p><b>BTC/UFDT</b></p>
                <p><b>9500.00</b></p>
                <p>-1.38%</p>
                <p>≈￥62000.00</p>
              </div>
            </div>
          </li>
        </transition-group>
      </ul>
    </div>
    <div class="bar">
      <span v-for="(i,index) in 2" :key="index" :class="{'active':index === mark}"></span>
    </div>
  </div>-->

    <!--<div class="homeshowdata">
      <div class="showdata">
        <div class="item" v-for="i in 3">
          <p><b>BTC/UFDT</b></p>
          <p><b>9500.00</b></p>
          <p>-1.38%</p>
          <p>≈￥62000.00</p>
        </div>
      </div>
    </div>-->

  <div>
    <wc-swiper :autoplay="false">
      <wc-slide v-for="(i,index) in 2" :key="index">
        <div class="homeshowdata">
          <div class="showdata">
            <div class="item" v-for="i in 3">
              <p><b>BTC/UFDT</b></p>
              <p><b>9500.00</b></p>
              <p>-1.38%</p>
              <p>≈￥62000.00</p>
            </div>
          </div>
        </div>
      </wc-slide>
    </wc-swiper>
  </div>


</template>

<script>
    export default {
        name: "HomeShowdata",
      data(){
          return{
            mark : 0,
          }
      },
      /*methods:{

        touchStart (e) {
          // 记录初始位置
          e.preventDefault() // 阻止默认事件，滚动等
          this.startX = e.touches[0].clientX // 记录滑动开始的位置
          console.log(this.startX)
        },
        touchEnd (e) {
          e.preventDefault() // 阻止默认事件
          // 记录结束位置
          this.endX = e.changedTouches[0].clientX
          clearInterval(this.timer)
          console.log(this.endX)
          // 左滑
          if (this.startX - this.endX > 30) {
            console.log('左滑')
            /!*if (this.mark >= this.imgArrary.length - 1) {
              // 不做操作
            } else {*!/
            this.mark++
            if(this.mark === 2){
              this.mark = 0;
            }
            /!*document.getElementById('activityUl').style.left = -this.mark * this.liWidth + 'px'
          }*!/
          }
          // 右滑
          if (this.startX - this.endX < -30) {
            console.log('右滑')
            /!*if (this.mark === 0) {
              // 不做操作
            } else {*!/
            this.mark--
            if(this.mark === -1){
              this.mark = 1
            }
            // document.getElementById('activityUl').style.left = -this.mark * this.liWidth + 'px'
            // }
          }
          this.startX = 0
          this.endX = 0
        }
      }*/
    }
</script>

<style lang="less" scoped>
  @import "../../Less/com/homeshowdata";


</style>
