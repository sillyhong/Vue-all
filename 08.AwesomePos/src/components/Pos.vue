<template>
  <div class="pos">
    <div>
      <el-row>
        <el-col :span="7" class="pos-order" id="pos-order">
          <el-tabs>
              <el-tab-pane label="点餐">
                  <!--el-table组件制作表格-->
                <el-table :data="tableData"  border  style="width: 100%" >

                  <el-table-column prop="goodsName" label="商品"  ></el-table-column>
                  <el-table-column prop="count" label="量" width="50"></el-table-column>
                  <el-table-column prop="price" label="金额" width="70"></el-table-column>
                  <el-table-column  label="操作" width="100" fixed="right">
                    <template slot-scope="scope">
                      <el-button type="text" size="small" @click="delSingelGood(scope.row)">删除</el-button>
                      <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                    </template>
                  </el-table-column>


                </el-table>
                <div class="count">
                  <small>数量：</small>{{totalCount}}
                  <small>总价：</small>{{totalMoney}}元
                </div>
                <!--el-button按钮组件-->
                <div class="div-button">
                  <el-button type="warning">挂单</el-button>
                  <el-button type="danger" @click="delAllGood">清空</el-button>
                  <el-button type="success" @click="checkOut">结账</el-button>
                </div>
              </el-tab-pane>
              <el-tab-pane label="挂单">挂单</el-tab-pane>
              <el-tab-pane label="外卖">外卖</el-tab-pane>
          </el-tabs>
        </el-col>

        <el-col :span="17">
          <div class="often-goods">
            <div class="title">常用商品</div>
            <div class="often-goods-list">
              <ul>
                <li v-for="item in oftenGoods" @click="addOrderList(item)">
                  <span>{{item.goodsName}}</span>
                  <span class="o-price">￥{{item.price}}元</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-type">
            <el-tabs>
              <el-tabs>
                <el-tab-pane label="汉堡">
                  <ul class="cookList">
                    <li v-for="item in type0Goods" @click="addOrderList(item)">
                      <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                      <div class="foodItem">
                        <span class="foodName">{{item.goodsName}}</span>
                        <span class="foodPrice">￥{{item.price}}元</span>
                      </div>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="小食">
                  <ul class="cookList">
                    <li v-for="item in type1Goods" @click="addOrderList(item)">
                      <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                      <div class="foodItem">
                        <span class="foodName">{{item.goodsName}}</span>
                        <span class="foodPrice">￥{{item.price}}元</span>
                      </div>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="饮料">
                  <ul class="cookList">
                    <li v-for="item in type2Goods" @click="addOrderList(item)">
                      <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                      <div class="foodItem">
                        <span class="foodName">{{item.goodsName}}</span>
                        <span class="foodPrice">￥{{item.price}}元</span>
                      </div>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="套餐">
                  <ul class="cookList">
                    <li v-for="item in type3Goods" @click="addOrderList(item)">
                      <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                      <div class="foodItem">
                        <span class="foodName">{{item.goodsName}}</span>
                        <span class="foodPrice">￥{{item.price}}元</span>
                      </div>
                    </li>
                  </ul>
                </el-tab-pane>

              </el-tabs>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  //引入axios
  import axios from 'axios'
  export default {
  name: 'pos',
  //需要解决高度100%的问题
  mounted(){
    var posOrderHeight = document.body.clientHeight
    document.getElementById('pos-order').style.height = posOrderHeight +　'px'
  },

    methods: {

      //添加订单列表功能
      addOrderList(goods){
        //1.判断这个商品是否已经存在订单上

        let isHave = false
        for (let goodItem of this.tableData){
          if(goodItem.goodsId === goods.goodsId ){
            isHave = true//已经存在
          }
        }

        //2.根据isHave判断订单上是否存在这个商品的业务逻辑
        if(isHave){//存在就进行数量添加
          let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
          arr[0].count++
//          console.log(arr)
        }else{//不存在商品就推入数组
          let newGoods = {...goods}//只是赋值，没有复制地
          newGoods.count = 1
//          console.log(newGoods)
          this.tableData.push(newGoods)
        }

        //3.计算最后的数量和总价
        this.getAll()

      },

      //删除单个商品功能
      delSingelGood(goods){
        if(good.count >1){
          good.count--
        }else{
          this.tableData = this.tableData.filter( o => o.goodsId !=goods.goodsId)
        }
        //计算最后的数量和总价
        this.getAll()
      },

      //删除所有商品功能
      delAllGood(){
        this.tableData = []
        this.totalCount = 0
        this.totalMoney = 0
      },


      //结账功能
      checkOut(){
        if(this.tableData != 0){


          //提交订单
          axios.post('/api/checkout', {
            totalCount: this.totalCount,
            totalMoney: this.totalMoney
          })
            .then( (response)=> {
              this.tableData = []
              this.totalCount = 0
              this.totalMoney = 0
              this.$message({
                message:'结账成功，谢谢你有为本店出了一份力！',
                type:'success'
              })
            }).catch( (error) => {
            console.log(error)
            alert('网络错误，不能访问')
          })
        }else{
          this.$message.error('不能空结账。老板娘知道你心急！')
        }

      },

      //计算最后的数量和总价
      getAll(){
        this.totalCount = 0
        this.totalMoney = 0
        this.tableData.forEach( (element) => {
          this.totalCount += element.count
          this.totalMoney += element.price * element.count
        })
      }
    },
    //创建的时候调用
  created(){

    //拉取商品数据
     axios.get('/api/oftenGoods')
//    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
      .then( (response) => {
          console.log('常用商品',response.data)
          this.oftenGoods = response.data.data
      }).catch( (error)=> {
        console.log(error)
        alert('网络错误，不能访问')
    })

//    //拉取商品分类数据
      axios.get('/api/typeGoods')
//    axios.get('http://jspang.com/DemoApi/typeGoods.php')
      .then( (response)=> {
//        console.log('分类商品',response.data)
        this.type0Goods = response.data[0]
        this.type1Goods=response.data.data[1];
        this.type2Goods=response.data.data[2];
        this.type3Goods=response.data.data[3];
      }).catch( (error) => {
        console.log(error)
        alert('网络错误，不能访问')
    })


  },
  data(){
    return {
      totalCount:0,
      totalMoney: 0,
      tableData:[],
      oftenGoods:[],
      type0Goods:[],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],

//      oftenGoods:[
//        {
//          goodsId:1,
//          goodsName:'香辣鸡腿堡',
//          price:18
//        }, {
//          goodsId:2,
//          goodsName:'田园鸡腿堡',
//          price:15
//        }, {
//          goodsId:3,
//          goodsName:'和风汉堡',
//          price:15
//        }, {
//          goodsId:4,
//          goodsName:'快乐全家桶',
//          price:80
//        }, {
//          goodsId:5,
//          goodsName:'脆皮炸鸡腿',
//          price:10
//        }, {
//          goodsId:6,
//          goodsName:'魔法鸡块',
//          price:20
//        }, {
//          goodsId:7,
//          goodsName:'可乐大杯',
//          price:10
//        }, {
//          goodsId:8,
//          goodsName:'雪顶咖啡',
//          price:18
//        }, {
//          goodsId:9,
//          goodsName:'大块鸡米花',
//          price:15
//        }, {
//          goodsId:20,
//          goodsName:'香脆鸡柳',
//          price:17
//        }
//      ],
//      type0Goods:[
//      {
//        goodsId:1,
//        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
//        goodsName:'香辣鸡腿堡',
//        price:18
//      }, {
//        goodsId:2,
//        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
//        goodsName:'田园鸡腿堡',
//        price:15
//      }, {
//        goodsId:3,
//        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
//        goodsName:'和风汉堡',
//        price:15
//      }, {
//        goodsId:4,
//        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
//        goodsName:'快乐全家桶',
//        price:80
//      }, {
//        goodsId:5,
//        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
//        goodsName:'脆皮炸鸡腿',
//        price:10
//      }, {
//        goodsId:6,
//        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
//        goodsName:'魔法鸡块',
//        price:20
//      }, {
//        goodsId:7,
//        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
//        goodsName:'可乐大杯',
//        price:10
//      }, {
//        goodsId:8,
//        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
//        goodsName:'雪顶咖啡',
//        price:18
//      }, {
//        goodsId:9,
//        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
//        goodsName:'大块鸡米花',
//        price:15
//      }, {
//        goodsId:20,
//        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
//        goodsName:'香脆鸡柳',
//        price:17
//      }
//
//    ],
    }
  }

}
</script>


<style scoped>
  .pos-order {
    background-color: #F9FAFC;
    border-right: 1px solid #C0CCDA;
    height: 100%;
  }
  .div-button {
    margin: 0 auto;
    text-align: center;
    margin-top: 20px;
  }
  .title {
    height:20px;
    border-bottom:1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding:10px;
  }
  .often-goods-list ul li{
    list-style: none;
    float:left;
    border:1px solid #E5E9F2;
    padding:10px;
    margin:5px;
    background-color:#fff;
  }
  .o-price{
    color:#58B7FF;
  }
  .goods-type {
    clear: both;
  }
  .cookList li{
    display: flex;
    list-style: none;
    width:23%;
    border:1px solid #E5E9F2;
    height: auto;
    overflow: hidden;
    background-color:#fff;
    padding: 2px;
    float:left;
    margin: 2px;

  }
  .foodItem {
    flex: 0 1 80px;
  }
  .cookList li span{
    display: block;
    float:left;
  }
  .foodImg{
    flex: 1;
    /*width: 40%;*/
  }
  .foodName{
    font-size: 18px;
    padding-left: 10px;
    color:brown;

  }
  .foodPrice{
    font-size: 16px;
    padding-left: 10px;
    padding-top:10px;
  }
  .count{
    text-align: center;
  }
  .count small {
    margin: 10px;
  }
</style>
