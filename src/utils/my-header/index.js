
import MyHeader from './src/my-header'

MyHeader.install = function (Vue) {
  Vue.component(MyHeader.name, MyHeader)
}

export default MyHeader
