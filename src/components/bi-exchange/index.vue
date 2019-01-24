<template>
    <div class="biexchange">
      <my-header :title="title">
        <div slot="left"><img class="img1" src="../.././assets/img/selectmarket@2x.png"/></div>
        <div slot="right">
          <img class="img2" v-show="isCollection" @click="Collection" src="../.././assets/img/collection@2x.png"/>
          <img class="img2" v-show="!isCollection" @click="Collection" src="../.././assets/img/add-collection@2x.png"/>
          <img class="img3" src="../.././assets/img/quotation@2x.png"/>
        </div>
      </my-header>

      <div class="biexchange-body">
        <div class="body-item1">
          <div class="body-item1-left">
            <!-- 买入卖出按钮 -->
            <div class="btns">
              <div class="buybtn"><button :class="issell ? 'isbuybtn' : 'isbuybtn-selected'" @click="buy">买入</button></div>
              <div class="sellbtn"><button :class="issell ? 'issellbtn-selected' : 'issellbtn'" @click="sell">卖出</button></div>
            </div>
            <!-- 选择限价市价 -->
            <div class="select">
              <div @click="showjia = true">
                {{selectedjia}}
              </div>
              <img src="../.././assets/img/huazhuan@2x.png"/>
            </div>

            <!-- 选择市价限价 -->
            <div :class="showjia === true?'back-active': ''">
              <my-dialog :shownum="showjia">
                <div class="deepnum-items" v-for="(item, index) in jiaData" :key="index" @click="selectedjias(item.id)">
                  <div class="deepnum">{{item.value}}</div>
                </div>
                <div class="deepnum-items" style="margin:0.1rem"  @click="showjia = false">
                  <div class="deepnum">取消</div>
                </div>
              </my-dialog>
            </div>

            <!-- -->
            <div class="nums">
              <div class="nums-num" v-show="selectedjia === '限价'">
                <input class="nums-num-left" v-model="num1" />
                <div class="shu"></div>
                <div class="nums-num-right"><img @click="jian" src="../.././assets/img/jian@2x.png"/><img @click="jia" src="../.././assets/img/jia@2x.png"/></div>
              </div>
              <div>
                <input class="nums-num-shi" v-show="selectedjia === '市价'" disabled value="以当前最优价格交易"/>
              </div>
              <div class="nums-text">≈0.52CNY</div>
            </div>
            <!-- -->
            <div class="nums">
              <div class="nums-num">
                <input class="nums-num-left" v-model="num2"/>
                <div class="nums-num-right">ETH</div>
              </div>
              <div class="nums-text">≈0.52CNY</div>
            </div>
            <!-- 圈圈 -->
            <div class="quan">
              <div class="quan-item1">
                <div class="quan-item1-v1">
                  <div><img v-show="!issell" src="../.././assets/img/greenquan@2x.png"/><img v-show="issell" src="../.././assets/img/or-quan@2x.png"/></div>
                  <div :class="issell ? 'orxian' : 'greenxian'"></div>
                  <div><img v-show="!issell" src="../.././assets/img/greenquan@2x.png"/><img v-show="issell" src="../.././assets/img/or-quan@2x.png"/></div>
                  <div :class="issell ? 'orxian' : 'greenxian'"></div>
                  <div><img v-show="!issell" src="../.././assets/img/greenquan@2x.png"/><img v-show="issell" src="../.././assets/img/or-quan@2x.png"/></div>
                  <div :class="issell ? 'orxian' : 'greenxian'"></div>
                  <div><img src="../.././assets/img/huiquan@2x.png"/></div>
                  <div class="xian2"></div>
                  <div><img src="../.././assets/img/huiquan@2x.png"/></div>

                </div>
              </div>
              <div class="quan-item2">
                <div>0</div>
                <div>5676.58ETC</div>
              </div>
            </div>
            <!--交易额-->
            <div class="trade">
              <span>交易额</span>
              <span>0.87564912BTC</span>
            </div>
            <!-- 买入 -->
            <div class="buy">
              <button class="isbuy" v-show="!issell">买入ETH</button>
              <button class="issell" v-show="issell">卖出ETH</button>
            </div>
          </div>

          <div class="body-item1-right">
            <!-- 盘口、价格、数量 -->
            <div class="titles">
              <div style="width: 20%">盘口</div>
              <div style="width: 50%;text-align: right;">价格</div>
              <div style="width: 30%;text-align: right;">数量</div>
            </div>
            <!-- 第一个数据块 -->
            <div class="data1">
              <div class="data1-items" v-for="(data,index) in data1" :key="index">
                <div style="width: 10%">{{5-index}}</div>
                <div style="width: 58%;text-align: right;">{{data.price}}</div>
                <div style="width: 32%;text-align: right;">{{data.num}}</div>
              </div>
            </div>
            <!-- -->
            <div class="text1">0.0015789546</div>
            <div class="text2">≈0.52CNY</div>
            <!-- 第二个数据块 -->
            <div class="data1">
              <div class="data1-items" v-for="(data,index) in data1" :key="index">
                <div style="width: 10%">{{index+1}}</div>
                <div style="width: 58%;text-align: right;">{{data.price}}</div>
                <div style="width: 32%;text-align: right;">{{data.num}}</div>
              </div>
            </div>
            <!-- 深度 -->
            <div class="deep">
              <div class="deep-item1">深度</div>
              <div class="deep-item2">
                <div class="select" @click="shownum = true">
                  {{selectednums}}
                </div>
                <img src="../.././assets/img/huazhuan@2x.png"/>
              </div>

              <!-- 保留几位小数弹出框 -->
              <div :class="shownum === true?'back-active': ''">
                <my-dialog :shownum="shownum">
                  <div class="deepnum-items" v-for="(item, index) in deepnumData" :key="index" @click="selectednum(item.id)">
                    <div class="deepnum">{{item.value}}</div>
                  </div>
                  <div class="deepnum-items" style="margin:0.1rem"  @click="shownum = false">
                    <div class="deepnum">取消</div>
                  </div>
                </my-dialog>
              </div>

            </div>
          </div>
        </div>

        <div class="body-item2">
          <div class="entrust">
            <div class="entrust-text">当前委托</div>
            <div class="entrust-all"><img src="../.././assets/img/all@2x.png"/>全部</div>
          </div>
          <now-entrust
            v-for="(buy,index) in buyData"
            :key="index"
            :bs="issell ? buy.bs1 : buy.bs2"
            :time="buy.time"
            :price="buy.price"
            :num="buy.num"
            :deal="buy.deal"
            :issell="issell"
            @delete-item="deleteitem(index)"
            @bs-detail="bsdetail"
          >
          </now-entrust>
          <div :class="showconfirm === true?'back-active': ''">
            <my-confirm
              :showconfirm="showconfirm"
              :msg="msg"
              @cancle="cancle"
              @sure="sure(lll)"
            >
            </my-confirm>
          </div>
        </div>
        <div v-show="buyData.length === 0" style="text-align: center;font-size: 0.4rem;margin-bottom: 3rem;">没有啦</div>

      </div>

    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            title: 'BTH/TCH',
            selectedjia:'限价',
            num1:'10000.265',
            num2: '1125.5555',
            shownum: false,
            showjia: false,
            showconfirm: false,
            selectednums: '默认',
            msg:'确定撤销此单？',
            data1: [],
            buyData:[
              {bs1: '卖出1', bs2:'买入1', time: '13:07 05/18' ,price: '0.0012005', num: '1.000000', deal: '0'},
              {bs1: '卖出2', bs2:'买入2', time: '13:07 05/18' ,price: '0.0012005', num: '1.000000', deal: '0'},
              {bs1: '卖出3', bs2:'买入3', time: '13:07 05/18' ,price: '0.0012005', num: '1.000000', deal: '0'},
              {bs1: '卖出4', bs2:'买入4', time: '13:07 05/18' ,price: '0.0012005', num: '1.000000', deal: '0'},
              {bs1: '卖出5', bs2:'买入5', time: '13:07 05/18' ,price: '0.0012005', num: '1.000000', deal: '0'},
              {bs1: '卖出6', bs2:'买入6', time: '13:07 05/18' ,price: '0.0012005', num: '1.000000', deal: '0'},
            ],
            issell: false,
            isCollection: false,

            deepnumData:[
              {id: 0, value: '四位小数'},
              {id: 1, value: '五位小数'},
              {id: 2, value: '六位小数'},
              {id: 3, value: '七位小数'},
            ],
            jiaData:[
              {id: 0, value: '限价'},
              {id: 1, value: '市价'},
            ],
            data:[
              {price:0.0000124578, num:'7K'},
              {price:0.4512789654, num:'12K'},
              {price:0.0021563213, num:'0.5K'},
              {price:0.3210540058, num:'43.4K'},
              {price:0.9850216478, num:'74.2K'},
            ],
            lll:'',

          }
      },
      methods:{
          buy(){
            this.issell = false;
          },
        sell(){
          this.issell = true;
        },
        //是否收藏
        Collection(){
            this.isCollection = !this.isCollection
        },

        selectedjias(val){
            this.selectedjia = this.jiaData[val].value
          this.showjia = false
        },
        selectednum(val){
          // 选择几位小数，并显示
          this.selectednums = this.deepnumData[val].value;
          console.log(this.data)

          //改变买卖盘口中数据小数位数
          this.data1 = [];
          let data2 = [...this.data]
          for(let i of data2){
            console.log(i)
            i.price = Number(i.price).toFixed((Number(this.deepnumData[val].id)+4));
            console.log(111111111111)
            console.log(i)
            this.data1.push(i)
          }
          // this.data1 = [...data2]
          this.shownum = false;

        },
        deleteitem(val){
          this.lll = val
            this.showconfirm = true;
        },
        cancle(){
            this.showconfirm = false
        },

        sure(val){
          this.buyData.splice(val,1);
          this.showconfirm = false
        },

        bsdetail(){
          this.$router.push({path: '/bsdetail'})
        },

        jian(){
            this.num1 = this.num1 - 1
        },
        jia(){
          this.num1 = this.num1 + 1
        }

      },

      created(){
          this.data1 = [...this.data]
      }



    }
</script>

<style lang="less" scoped>
@import "../../Less/bi-exchange";
</style>
