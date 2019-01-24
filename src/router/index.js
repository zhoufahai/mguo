import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Tabs from '../components/tabs/index'
import Login from '../components/login/index'
import PersonalInfo from '../components/personal-info/index'
import ChangeName from '../components/change-name/index'
import Home from '../components/home/index'
import Register from  '../components/register/index'
import BiExchange from '../components/bi-exchange/index'
import FaExchange from  '../components/fa-exchange/index'
import Market from '../components/market/index'
import Me from '../components/me/index'
import MyAssets from '../components/my-assets/index'
import Recommend from '../components/recommend/index'
import ShiMing from '../components/shiming/index'
import SecurityCenter from '../components/security-center/index'
import TibiAddress from '../components/tibi-address/index'
import GoogleCode from '../components/verification-code/google-code'
import PhoneCode from '../components/verification-code/phone-code'
import Setting from '../components/setting/index'
import First from '../components/shiming/first'
import Second from '../components/shiming/second'
import Three from '../components/shiming/three'
import FindPassword from '../components/login/findpassword'
import TakeBi from '../components/me/take-bi'
import Suggest from '../components/me/suggest'
import Help from '../components/me/help'
import About from '../components/me/about'
import BsDetail from '../components/bi-exchange/bsDetail'
import SettingPassword from '../components/security-center/settingpassword'
import EditSelect from '../components/market/editselect'
import Query from '../components/market/query'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      component: Tabs,
      redirect: '/login'
    },
    {
      path: '/tabs',
      component: Tabs,
      redirect: '/tabs/home',
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'biexchange',
          component: BiExchange
        },
        {
          path: 'faexchange',
          component: FaExchange
        },
        {
          path: 'market',
          component: Market
        },
        {
          path: 'me',
          component: Me
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/changename',
      name:'changename',
      component: ChangeName
    },
    {
      path:'/register',
      name: 'register',
      component:Register
    },
    {
      path: '/personalinfo',
      name: 'PersonalInfo',
      component: PersonalInfo
    },
    {
      path: '/myassets',
      name: 'myassets',
      component: MyAssets
    },
    {
      path: '/recommend',
      name:'recommend',
      component: Recommend
    },
    {
      path: '/shiming',
      name: 'shiming',
      component: ShiMing
    },
    {
      path: '/security',
      name: 'security',
      component: SecurityCenter
    },
    {
      path: '/tibi',
      name: 'tibi',
      component: TibiAddress
    },
    {
      path: '/phonecode',
      name: 'PhoneCode',
      component: PhoneCode
    },
    {
      path: '/googlecode',
      name: 'GoogleCode',
      component: GoogleCode
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: Second
    },
    {
      path: '/three',
      component: Three
    },
    {
      path: '/findpassword',
      component: FindPassword
    },
    {
      path: '/take-bi',
      component: TakeBi
    },
    {
      path: '/suggest',
      component: Suggest
    },
    {
      path: '/help',
      component: Help
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/bsdetail',
      component: BsDetail
    },
    {
      path: '/settingpassword',
      component: SettingPassword
    },
    {
      path: '/editselect',
      component: EditSelect
    },
    {
      path: '/query',
      component: Query
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
