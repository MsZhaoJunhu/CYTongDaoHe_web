<template>
    <div class="taoIndex">
        <header_ :select_index="3"></header_>
        <!-- 顶部header -->
        <tao-header />
        <el-row type="flex" justify="center" align="center" class="taoswiper">
            <el-col :span="16">
                <el-row type="flex" justify="center" align="center" class="orderPar">
                    <el-col :span="4">
                        <div class="userInfo">
                            <img src="../../assets/tao/userImg.png" alt="">
                            <p>15213280546</p>
                            <router-link to="order">我的订单</router-link>
                            <router-link to="userInfo">账户资料</router-link>
                            <router-link to="userAdress">收货地址</router-link>
                        </div>
                    </el-col>
                    <el-col :span="18" :offset="1">
                        <div class="userOrder">
                            <div class="userOrder_title">
                                <span>收货地址</span>
                                <button class="addMyAdress" @click="drawer = true">
                                    <img src="" alt="">
                                    <span>添加收货地址</span>
                                </button>
                            </div>
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
                            <div>
                                <div class="userAdress_title">
                                    <el-row>
                                        <el-col :span="5">姓名</el-col>
                                        <el-col :span="9">详细地址</el-col>
                                        <el-col :span="5">电话</el-col>
                                        <el-col :span="5">操作</el-col>
                                    </el-row>
                                </div>
                                <div class="userAdress_title userAdress_value">
                                    <el-row>
                                        <el-col :span="5">王源</el-col>
                                        <el-col :span="9">重庆市 市辖区 渝北区 服装城大道云尚城1栋8-5</el-col>
                                        <el-col :span="5">15213280546</el-col>
                                        <el-col :span="5">
                                            <button>修改</button>
                                            <button>删除</button>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import header_ from '@/components/public/头部'
import TaoHeader from './taoheader'
export default {
    data () {
        return {
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
    },
    methods: {
        handleClose(done){
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
            .catch(_ => {});
        },
    }
}
</script>
<style scoped>
    .taoIndex {
        height: 100%;
        background: rgba(237, 237, 237, 1);
    }
    .taoswiper {
        margin-top: 130px;
    }
    .userInfo{
        width: 100%;
        height: auto;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 1rem;
        border-radius: 0.5rem;
    }
    .userInfo>p,.userInfo>a{
        display: block;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000;
    }
    .userInfo>a{
        border-top: 1px solid rgb(197, 196, 196);
        font-size: 14px;
    }
    .userInfo>a:hover{
        background-color: #9e0000;
        color: #fff;
    }
    .userInfo>a:last-child:hover{
        border-bottom-right-radius: 1rem;
        border-bottom-left-radius: 1rem;
    }
    .orderPar{
        padding: 2rem 0;
    }
    .userOrder{
        width: 100%;
        height: auto;
        border-radius: 0.5rem;
        background-color: #fff;
    }
    .userOrder_title{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        padding: 1rem 1rem 0.5rem 1rem;
        box-sizing: border-box;
    }
    .userOrder_title>span{
        font-size: 18px;
        font-weight: bold;
        color: #777777;
        line-height: 36px;
    }
    .userAdress_title{
        height: 46px;
        border: 1px solid rgb(207, 207, 207);
        border-left: 0;
        border-right: 0;
        background-color: #f5f5f5;
    }
    .userAdress_title /deep/ .el-row .el-col,.userAdress_title /deep/ .el-row{
        height: 100%;
        line-height: 46px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .userAdress_title /deep/ .el-row .el-col:first-child{
        padding-left: 1rem;
    }
    .userAdress_title /deep/ .el-row .el-col:last-child,.userAdress_title /deep/ .el-row:last-child{
        justify-content: center;
    }
    .userAdress_value{
        border: 0 !important;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        background-color: #fff !important;
    }
    .userAdress_value /deep/ .el-row button{
        border: 0;
        background-color: #fff;
        cursor: pointer;
        margin: 0 1rem;
    }
    .userAdress_value /deep/ .el-row button:hover{
        color: #9e0000;
    }
    .addMyAdress{
        width: 12rem;
        height: 36px;
        border: 0;
        background: #9e0000;
        color: #fff;
        border-radius: 6px;
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
<style>
    .el-cascader .el-input .el-input__inner:focus, .el-cascader .el-input.is-focus .el-input__inner{
        border-color: #9e0000;
    }
    .el-radio__input.is-checked .el-radio__inner{
        background: #9e0000;
        border-color: #9e0000;
    }
    .el-cascader-node.in-active-path, .el-cascader-node.is-active, .el-cascader-node.is-selectable.in-checked-path{
        color: #9e0000;
    }
</style>
