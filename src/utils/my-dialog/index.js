import MyDialog from './src/my-dialog'

MyDialog.install = function(Vue){
  Vue.component(MyDialog.name, MyDialog)
}

export default MyDialog
