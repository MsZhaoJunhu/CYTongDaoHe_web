<template>
    <div class="taoIndex">
        <header_ :select_index="3"></header_>
        <!-- 顶部header -->
        <tao-header />
        <el-row type="flex" justify="center" align="center" class="taoswiper">
            <el-col :span="16">
                <div class="receiving">
                    <p>收货信息</p>
                    <div>
                        <div>
                            <div>
                                <el-checkbox class="aloneCheckbox" v-model="checked"></el-checkbox>
                                <p>王源</p>
                                <p>15213280546</p>
                                <p>重庆市 市辖区 渝北区</p>
                                <p>服装城大道云尚城1-8-5</p>
                                <div class="functions_delete">
                                    <div>修改</div>
                                    <div>删除</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="addNewAdress" @click="drawer = true">
                                <p>+</p>
                                <p>使用新的地址</p>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-drawer title="管理收货地址" class="elDrawer" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
            <div class="elDrawerPar">
                <div>
                    <span>姓名：</span>
                    <el-input v-model="input" placeholder="请输入"></el-input>
                </div>
                <div>
                    <span>联系方式：</span>
                    <el-input v-model="input2" placeholder="请输入"></el-input>
                </div>
                <div>
                    <span>地址选择：</span>
                    <el-cascader :options="options" class="elDrawerCascader" clearable></el-cascader>
                </div>
                <div>
                    <span>详细地址：</span>
                    <el-input v-model="input3" placeholder="请输入"></el-input>
                </div>
                <div>
                    <span></span>
                    <el-radio v-model="radio" label="1">设为默认地址</el-radio>
                </div>
            </div>
        </el-drawer>
        <el-row type="flex" justify="center" align="center" class="taoswiper_secend">
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
                        <div v-for="city in cities" class="first_elRow_elCol">
                            <el-col :span="16">
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
                    </el-row>
                    <el-row class="secendRlRow" type="flex">
                        <el-col :span="14">
                            
                        </el-col>
                        <el-col :span="10">
                            <p>
                                应付总额：
                            </p>
                            <span class="priceClass">￥129.00</span>
                            <button class="Settlement" @click="submitOrder" >提交订单</button>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
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
            checked:true,
            drawer:false,
            direction:"ttb",
            options: [{
                value: 'zhinan',
                label: '指南',
                children: [{
                    value: 'shejiyuanze',
                    label: '设计原则',
                    children: [{
                    value: 'yizhi',
                    label: '一致'
                    }, {
                    value: 'fankui',
                    label: '反馈'
                    }, {
                    value: 'xiaolv',
                    label: '效率'
                    }, {
                    value: 'kekong',
                    label: '可控'
                    }]
                }, {
                    value: 'daohang',
                    label: '导航',
                    children: [{
                    value: 'cexiangdaohang',
                    label: '侧向导航'
                    }, {
                    value: 'dingbudaohang',
                    label: '顶部导航'
                    }]
                }]
                }, {
                value: 'zujian',
                label: '组件',
                children: [{
                    value: 'basic',
                    label: 'Basic',
                    children: [{
                    value: 'layout',
                    label: 'Layout 布局'
                    }, {
                    value: 'color',
                    label: 'Color 色彩'
                    }, {
                    value: 'typography',
                    label: 'Typography 字体'
                    }, {
                    value: 'icon',
                    label: 'Icon 图标'
                    }, {
                    value: 'button',
                    label: 'Button 按钮'
                    }]
                }, {
                    value: 'form',
                    label: 'Form',
                    children: [{
                    value: 'radio',
                    label: 'Radio 单选框'
                    }, {
                    value: 'checkbox',
                    label: 'Checkbox 多选框'
                    }, {
                    value: 'input',
                    label: 'Input 输入框'
                    }, {
                    value: 'input-number',
                    label: 'InputNumber 计数器'
                    }, {
                    value: 'select',
                    label: 'Select 选择器'
                    }, {
                    value: 'cascader',
                    label: 'Cascader 级联选择器'
                    }, {
                    value: 'switch',
                    label: 'Switch 开关'
                    }, {
                    value: 'slider',
                    label: 'Slider 滑块'
                    }, {
                    value: 'time-picker',
                    label: 'TimePicker 时间选择器'
                    }, {
                    value: 'date-picker',
                    label: 'DatePicker 日期选择器'
                    }, {
                    value: 'datetime-picker',
                    label: 'DateTimePicker 日期时间选择器'
                    }, {
                    value: 'upload',
                    label: 'Upload 上传'
                    }, {
                    value: 'rate',
                    label: 'Rate 评分'
                    }, {
                    value: 'form',
                    label: 'Form 表单'
                    }]
                }, {
                    value: 'data',
                    label: 'Data',
                    children: [{
                    value: 'table',
                    label: 'Table 表格'
                    }, {
                    value: 'tag',
                    label: 'Tag 标签'
                    }, {
                    value: 'progress',
                    label: 'Progress 进度条'
                    }, {
                    value: 'tree',
                    label: 'Tree 树形控件'
                    }, {
                    value: 'pagination',
                    label: 'Pagination 分页'
                    }, {
                    value: 'badge',
                    label: 'Badge 标记'
                    }]
                }, {
                    value: 'notice',
                    label: 'Notice',
                    children: [{
                    value: 'alert',
                    label: 'Alert 警告'
                    }, {
                    value: 'loading',
                    label: 'Loading 加载'
                    }, {
                    value: 'message',
                    label: 'Message 消息提示'
                    }, {
                    value: 'message-box',
                    label: 'MessageBox 弹框'
                    }, {
                    value: 'notification',
                    label: 'Notification 通知'
                    }]
                }, {
                    value: 'navigation',
                    label: 'Navigation',
                    children: [{
                    value: 'menu',
                    label: 'NavMenu 导航菜单'
                    }, {
                    value: 'tabs',
                    label: 'Tabs 标签页'
                    }, {
                    value: 'breadcrumb',
                    label: 'Breadcrumb 面包屑'
                    }, {
                    value: 'dropdown',
                    label: 'Dropdown 下拉菜单'
                    }, {
                    value: 'steps',
                    label: 'Steps 步骤条'
                    }]
                }, {
                    value: 'others',
                    label: 'Others',
                    children: [{
                    value: 'dialog',
                    label: 'Dialog 对话框'
                    }, {
                    value: 'tooltip',
                    label: 'Tooltip 文字提示'
                    }, {
                    value: 'popover',
                    label: 'Popover 弹出框'
                    }, {
                    value: 'card',
                    label: 'Card 卡片'
                    }, {
                    value: 'carousel',
                    label: 'Carousel 走马灯'
                    }, {
                    value: 'collapse',
                    label: 'Collapse 折叠面板'
                    }]
                }]
                }, {
                value: 'ziyuan',
                label: '资源',
                children: [{
                    value: 'axure',
                    label: 'Axure Components'
                }, {
                    value: 'sketch',
                    label: 'Sketch Templates'
                }, {
                    value: 'jiaohu',
                    label: '组件交互文档'
                }]
            }],
            input:"",
            input2:"",
            input3:"",
            radio:""
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
            this.$router.push()
        },
        handleClose(done){
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
            .catch(_ => {});
        },
        submitOrder(){
            this.$router.push('payRoute')
        }
    }
}
</script>
<style scoped>
    .taoIndex {
        height: 100%;
        background: rgba(237, 237, 237, 1);
        padding-bottom: 4rem;
    }
    .taoswiper {
        height: auto;
        margin-top: 130px;
    }
    .taoswiper_secend{
        height: auto;
        margin-top: 2rem;
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
    .first_elRow_elCol>div:not(:first-child)>div{
        font-size: 14px;
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
        font-size: 14px;
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
    .secendRlRow>div:last-child{
        display: flex;
        justify-content: flex-end;
        padding-right: 2rem;
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
    .receiving{
        background-color: #FFF;
        border-radius: 1rem;
        margin-top: 2rem;
    }
    .receiving>p{
        font-size: 20px;
        font-weight: bold;
        color: #888;
        padding: 1rem;
    }
    .receiving>div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 1rem;
        border-top: 1px solid #999;
    }
    .receiving>div>div{
        width: calc(100%/4);
        height: auto;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .receiving>div>div>div{
        width: 80%;
        height: 140px;
        box-sizing: border-box;
        border: 1px solid rgb(194, 194, 194);
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0;
        position: relative;
        padding-left: 1rem;
        overflow: hidden;
    }
    .aloneCheckbox,.functions_delete{
        position: absolute;
    }
    .aloneCheckbox{
        top: 0.5rem;
        right: 1rem;
    }
    .functions_delete{
        width: 100%;
        top: 100%;
        bottom: -2rem;
        left: 0;
        display: flex;
        justify-content: space-around;
        transition: all .3s
    }
    .functions_delete>div{
        width: 50%;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border-top: 1px solid #999;
        font-size: 14px;
        cursor: pointer;
        color: rgb(117, 117, 117);
    }
    .functions_delete>div:first-child{
        border-right: 1px solid #999;
    }
    .receiving>div>div>div:hover>.functions_delete{
        top: auto;
        bottom: 0;
        left: 0;
    }
    .addNewAdress{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0px !important;
        cursor: pointer;
    }
    .elDrawer{
        width: 480px;
        height: auto;
        height: 382px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-240px,-220px);
    }
    .elDrawer /deep/ .el-drawer{
        height: auto !important;
    }
    .elDrawerPar{
        border: 1px solid #999;
        border-right: 0;
        border-left: 0;
        padding: 0 2rem;
        margin-bottom: 2rem;
    }
    .elDrawer /deep/ .el-drawer__title{
        overflow: hidden;
    }
    .elDrawerPar>div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 1rem 0;
    }
    .elDrawerPar>div>span{
        width: 20%;
        display: flex;
        justify-content: flex-end;
    }
    .elDrawerPar>div>div{
        width: 60%;
    }
    .elDrawerPar>div>div /deep/.el-input__inner:focus{
        border-color: #9e0000;
    }
    .elDrawer /deep/ .el-radio__label{
        color: #9e0000;
    }
</style>