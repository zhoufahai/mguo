<template>
    <div class="my-assets">
      <div class="assets-header">
        <img src="../.././assets/img/background@2x.png"/>
        <my-header :title="title">
          <div slot="left"><img @click="goback" src="../.././assets/img/nav-icon-back@2x.png"/></div>
          <div slot="right"><img @click="eye" v-show="iseye" src="../.././assets/img/icon-eye-white@2x.png"/><img @click="eye" v-show="!iseye" src="../.././assets/img/icon-noeye-blue@2x.png"/></div>
        </my-header>

        <div class="assets-swiper">
          <assets-wcswiper :iseye="iseye"></assets-wcswiper>
        </div>
      </div>

      <div class="assets-body">
        <div class="assets-search">
          <div class="search-left">
            <div><img src="../.././assets/img/icon-search@2x.png"/></div>
            <div><input type="text" placeholder="搜索资产" v-model="searchAssets"/></div>
          </div>
          <div class="search-right">
            <div><input type="checkbox"/>隐藏小额币种</div>
            <div><img src="../.././assets/img/icon-help@2x.png"/></div>
          </div>
        </div>

        <assets-list
          v-for="(asset,index) in searchList"
          :key="index"
          :assetsname="asset.assetsname"
          :useable="asset.useable"
          :frozen="asset.frozen"
          :isopen="asset.isopen"
          @open-btns = open(asset)
        >
          <div v-show="!asset.isopen" class="four-imgs">
            <div class="img-items">
              <div class="img-item">
                <img src="../.././assets/img/icon-chongbi@2x.png"/>
                充币
              </div>
              <div class="img-item">
                <img src="../.././assets/img/icon-tibi@2x.png"/>
                提币
              </div>
              <div class="img-item">
                <img src="../.././assets/img/icon-huazhuan@2x.png"/>
                划转
              </div>
              <div class="img-item">
                <img src="../.././assets/img/icon-record@2x.png"/>
                记录
              </div>
            </div>
          </div>

        </assets-list>
      </div>
    </div>
</template>

<script>
    import AssetsWcswiper from "./assets-wcswiper";
    export default {
        name: "index",
      components: {AssetsWcswiper},
      data(){
          return{
            title: '资产管理',
            iseye: true,
            searchAssets: '',
            assetsData:[
              {assetsname: 'YUF', useable: '100.00',frozen: '120.56',isopen: true},
              {assetsname: 'DFG', useable: '100.00',frozen: '120.56',isopen: true},
              {assetsname: 'ERT', useable: '100.00',frozen: '120.56',isopen: true},
              {assetsname: 'XCV', useable: '100.00',frozen: '120.56',isopen: true},
              {assetsname: 'ASD', useable: '100.00',frozen: '120.56',isopen: true},
              {assetsname: 'TYY', useable: '100.00',frozen: '120.56',isopen: true},
              {assetsname: 'YUF', useable: '100.00',frozen: '120.56',isopen: true},
              {assetsname: 'DFG', useable: '100.00',frozen: '120.56',isopen: true},
              {assetsname: 'ERT', useable: '100.00',frozen: '120.56',isopen: true},
              {assetsname: 'XCV', useable: '100.00',frozen: '120.56',isopen: true},
              {assetsname: 'ASD', useable: '100.00',frozen: '120.56',isopen: true},
              {assetsname: 'TYY', useable: '100.00',frozen: '120.56',isopen: true},
            ]
          }
      },
      methods:{
          open(asset){
            asset.isopen = !asset.isopen
          },
        goback(){
            this.$router.push({path:'/tabs/me'})
        },
        eye(){
            this.iseye = !this.iseye
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
  @import "../../Less/my-assets";

</style>


