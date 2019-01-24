import NowEntrust from './src/now-entrust'

NowEntrust.install = function (Vue) {
  Vue.component(NowEntrust.name, NowEntrust)
}

export default NowEntrust
