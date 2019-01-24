<template>
    <div class="now-entrust">
      <div class="top-items">
        <div class="item1">
          <span :class="issell ? 'sellspan' : 'buyspan'" @click="bsDetail">{{bs}}</span>
          <span class="span2">{{time}}</span>
        </div>
        <div class="item2" @click="deleteItem" >撤销</div>
      </div>
      <div class="bottom-items">
        <div class="item">
          <div>价格(BTC)</div>
          <div>{{price}}</div>
        </div>
        <div class="item">
          <div>数量(ETH)</div>
          <div>{{num}}</div>
        </div>
        <div class="item">
          <div>实际成交(ETH)</div>
          <div class="deal">{{deal}}</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "now-entrust",
      props:{
          bs: '',
        time: '',
        price: '',
        num: '',
        deal: '',
        issell: '',

      },
      methods:{
        deleteItem(){
            this.$emit('delete-item',this.$props)
          },
        bsDetail(){
          this.$emit('bs-detail', this.$props)
        }
      }
    }
</script>

<style lang="less" scoped>
.now-entrust{
  .top-items{
    display: flex;
    justify-content: space-between;
    padding: 0.3rem 0;

    .item1{
      .buyspan{
        font-size: 0.35rem;
        color: #23ceb7;
        margin-right: 0.3rem;
      }
      .sellspan{
        font-size: 0.35rem;
        color: #ff6023;
        margin-right: 0.3rem;
      }

      .span2{
        color: #999999;
      }
    }

    .item2{
      color: #1a58ff;
    }
  }

  .bottom-items{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dddddd;

    .item{
      display: flex;
      flex-direction: column;

      .deal{
        text-align: right;
      }

      :first-child{
        color: #999999;
        padding: 0.2rem 0;
      }

      :last-child{
        color: #1a58ff;
        padding: 0.2rem 0;
      }
    }
  }
}
</style>
