import AssetsList from './src/assets-list'

AssetsList.install = function(Vue){
  Vue.component(AssetsList.name, AssetsList)
}

export default AssetsList
