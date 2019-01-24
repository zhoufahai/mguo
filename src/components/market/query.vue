<template>
    <div class="query">
      <div class="query-item">
        <div class="query-item-left">
          <img src="../.././assets/img/icon-search@2x.png"/>
          <input type="text" placeholder="请输入" v-model="searchAssets"/>
        </div>
        <div class="query-item-right">
          <span @click="goback">取消</span>
        </div>
      </div>
      <div class="query-item" v-for="(item,index) in searchList" :key="index">
        <div class="query-item-left">
          <span>{{item.assetsname}}</span>
        </div>
        <div class="query-item-right">
          <img class="img2" v-show="item.isCollection" @click="Collection(index)" src="../.././assets/img/collection@2x.png"/>
          <img class="img2" v-show="!item.isCollection" @click="Collection(index)" src="../.././assets/img/add-collection@2x.png"/>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "query",
      data(){
          return{
            searchAssets: '',
            assetsData:[
              {assetsname: 'YUF',isCollection: true},
              {assetsname: 'HGD',isCollection: true},
              {assetsname: 'POK/HGFD',isCollection: false},
              {assetsname: 'KJH/UYTR',isCollection: true},
              {assetsname: 'HGF',isCollection: true},
              {assetsname: 'POI/QWER',isCollection: false},
              {assetsname: 'VCDE',isCollection: false},
              {assetsname: 'NHYU',isCollection: true},
              {assetsname: 'KBCZ',isCollection: false},
              {assetsname: 'DES',isCollection: true},
            ]
          }
      },
      methods:{
        goback(){
          this.$router.push({path: '/tabs/market'})
        },
        Collection(val){
          this.searchList[val].isCollection = !this.searchList[val].isCollection
        }
      },
      computed:{
        searchList(){
          let assetsList = this.assetsData
          let searchAssets = this.searchAssets

          if(!searchAssets){
            return assetsList
          }

          searchAssets = searchAssets.trim().toLowerCase()
          assetsList = assetsList.filter(function(item){
            if(item.assetsname.toLowerCase().indexOf(searchAssets) !== -1){
              return item
            }
          })

          return assetsList
        }
      }
    }
</script>

<style lang="less" scoped>
.query{
  .query-item{
    padding: 0.5rem;
    background-color: #ffffff;
    border-bottom: 1px solid #dddddd;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .query-item-left{
      font-size: 0.4rem;

      img{
        width: 0.5rem;
        height: 0.5rem
      }

      input{
        border: 0px;
        outline: none;
        margin-left: 0.3rem;
        font-size: 0.4rem;
      }
    }

    .query-item-right{
      img{
        width: 0.5rem;
        height: 0.5rem;
      }
    }
  }
}
</style>
