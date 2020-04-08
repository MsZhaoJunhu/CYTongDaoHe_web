<template>
    <div class="taoIndex">
        <header_ :select_index="3"></header_>
        <!-- 顶部header -->
        <tao-header />
        <el-row type="flex" justify="center" align="center" class="taoswiper">
            <el-col :span="16">
                <div class="shoppingCartPar">
                    <p>购物清单</p>
                    <el-row class="first_elRow" type="flex">
                        <el-col :span="16">商品信息</el-col>
                        <el-col :span="2">单价</el-col>
                        <el-col :span="2">数量</el-col>
                        <el-col :span="2">小计</el-col>
                        <el-col :span="2">操作</el-col>
                    </el-row>
                    <el-row>
                        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                            <div v-for="city in cities" class="first_elRow_elCol">
                                <el-col :span="16">
                                    <el-checkbox :label="city" :key="city"></el-checkbox>
                                    <div class="imgPar">
                                        <img src="../../assets/tao/order1.png" alt="">
                                    </div>
                                    <div>
                                        <p>标题名称</p>
                                        <p>一段假想的简介，这是一段比较长的简介。</p>
                                    </div>
                                </el-col>
                                <el-col :span="2">
                                    <div>
                                        ￥129.00
                                    </div>
                                </el-col>
                                <el-col :span="2">
                                    <div class="addAndReduce">
                                        <button @click="btnBuyNum(0)">-</button>
                                        <span>{{buyNum}}</span>
                                        <button @click="btnBuyNum(1)">+</button>
                                    </div>
                                </el-col>
                                <el-col :span="2">
                                    <div class="font_Bold">
                                        ￥129.00
                                    </div>
                                </el-col>
                                <el-col :span="2">
                                    <div class="circle">
                                        <i class="el-icon-close"></i>
                                    </div>
                                </el-col>
                            </div>
                        </el-checkbox-group>
                    </el-row>
                    <el-row class="secendRlRow" type="flex">
                        <el-col :span="14">
                            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                            <span class="shu">|</span>
                            <p>删除选中商品</p>
                        </el-col>
                        <el-col :span="10">
                            <p>
                                已选择
                                <span class="priceClass1">1</span>
                                件商品
                            </p>
                            <span class="shu">|</span class="shu">
                            <p>
                                应付总额：
                            </p>
                            <span class="priceClass">￥129.00</span>
                            <button class="Settlement" @click="settlement">现在结算</button>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <tao-goodslist :title="'特惠团购'" :grouplist="grouplist"></tao-goodslist>
    </div>
</template>
<script>
import header_ from '@/components/public/头部'
import TaoHeader from './taoheader'
import TaoGoodslist from './taogoodslist'
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default{
    data () {
        return {
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true,
            buyNum:1,
            grouplist: [
                {
                id: '001',
                Url: require('../../assets/tao/pro1smart.png'),
                Route:"standardDetails"
                },
                {
                id: '002',
                Url: require('../../assets/tao/pro1smart.png'),
                Route:"commodityDetails"
                },
                {
                id: '003',
                Url: require('../../assets/tao/pro1smart.png'),
                Route:"commodityDetails"
                },
                {
                id: '004',
                Url: require('../../assets/tao/pro1smart.png'),
                Route:"commodityDetails"
                },
            ],
        }
    },
    components: {
        header_,
        TaoHeader,
        TaoGoodslist
    },
    methods: {
        handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        },
        btnBuyNum(index){
            if(index==0&&this.buyNum>1){
                this.buyNum--;
            }else if(index==0&&this.buyNum<1){
                
            }else if(index==1){
                this.buyNum++;
            }
        },
        settlement(){
            this.$router.push('settlement')
        }
    }
}
</script>
<style scoped>
    .taoIndex {
        background: rgba(237, 237, 237, 1);
        padding-bottom: 4rem;
    }
    .taoswiper {
        height: auto;
        margin-top: 130px;
    }
    .imgPar{
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background:rgba(185, 185, 185, 0.5);
    }
    .shoppingCartPar{
        margin-top: 2rem;
        background-color: #fff;
        border-radius: 1rem;
    }
    .shoppingCartPar>P{
        font-size: 20px;
        font-weight: bold;
        color: #888;
        padding: 1rem;
    }
    .first_elRow{
        border: 1px solid rgb(207, 207, 207);
        border-left: 0;
        border-right: 0;
        height: 45px;
        background-color: rgb(241, 241, 241);
    }
    .first_elRow>.el-col{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: bold;
    }
    .first_elRow>.el-col:first-child{
        justify-content: flex-start;
        padding-left: 1rem;
        box-sizing: border-box;
    }
    .first_elRow_elCol{
        height: 60px;
        margin-top: 1rem;
    }
    .first_elRow_elCol:last-child{
        margin-bottom: 1rem;
    }
    .first_elRow_elCol>div{
        height: 60px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .first_elRow_elCol>div:not(:first-child){
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .first_elRow_elCol>div:first-child>div{
        margin: 0 1rem;
    }
    .first_elRow_elCol>div:first-child /deep/ .el-checkbox{
        margin: 0 0.25rem 0 1rem;
    }
    .first_elRow_elCol>div:first-child>div:last-child{
        margin: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .first_elRow_elCol>div:first-child>div:last-child>p{
        color: #999;
    }
    .first_elRow_elCol>div:first-child>div:last-child>p:first-child{
        color: #000;
        font-weight: bold;
    }
    .first_elRow_elCol /deep/ .el-checkbox__label{
        display: none;
    }
    .el-checkbox-group{
        font-size: 14px;  
    }
    .font_Bold{
        font-weight: bold;
    }
    .addAndReduce{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .addAndReduce>button{
        width: 30px;
        height: 30px;
        border: 0px solid #999;
        border-radius: 15px;
        background-color: #fff;
        box-shadow: 0 0 4px 4px rgba(153, 151, 151, 0.4);
        cursor: pointer;
    }
    .circle{
        width: 18px;
        height: 18px;
        border-radius: 9px;
        background-color: rgba(134, 134, 134, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .circle /deep/ .el-icon-close{
        color: #fff;
    }
    .secendRlRow{
        height: 60px;
        border-top: 1px solid rgb(206, 206, 206);
    }
    .secendRlRow>div{
        display: flex;
        align-items: center;
    }
    .secendRlRow>div:first-child{
        padding-left: 1rem;
    }
    .shu{
        margin: 0 1rem;
        color: rgb(109, 109, 109);
    }
    .secendRlRow>div:first-child>p{
        cursor: pointer;
        font-size: 14px;
        color: rgb(85, 85, 85);
    }
    .priceClass1{
        font-size: 20px;
        color: #000;
    }
    .priceClass{
        font-size: 24px;
        color: #9e0000;
        transform: translateY(-3px);
    }
    .secendRlRow>div:last-child>p{
        color: rgb(68, 68, 68);
    }
    .Settlement{
        width: 120px;
        height: 40px;
        margin-left: 2rem;
        background-color: #9e0000;
        border: 1px solid #9e0000;
        color: #fff;
        font-size: 18px;
        border-radius: 0.3rem;
        font-weight: bold;
        cursor: pointer;
    }
</style>