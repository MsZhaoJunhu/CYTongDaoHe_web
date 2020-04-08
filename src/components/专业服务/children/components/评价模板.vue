<template>
    <div class="pj_wrap">
        <div class="tab_bar">
            <template v-for="(item,index) in tabTitle">
                <span v-if="index<jieduan" @click="change(index)" :class="selected==index?'selected':''">{{item}}阶段</span>
            </template>
        </div>
        <template v-for="(item,index) in jieduan">
            <div v-show="selected==index">
                <div class="评价">
                    <template v-for="title in sTitle">
                        <star :starTitle="title"></star>
                    </template>
                </div>
                <p class="pj_miaoshu" v-if="miaoshu[index]!=''||miaoshuStatus===1">{{miaoshu[index]}}</p>
                <textarea class="pj_miaoshu" v-else>{{miaoshu[index]}}</textarea>
                <button class="pj_btn" v-if="miaoshu[index]!=''">
                    修改
                </button>
                <button class="pj_btn" v-else>
                    提交
                </button>
            </div>
        </template>
    </div>
</template>

<script>
    import star from './评星'
    export default {
        components:{
            star
        },
        data(){
            return{
                sTitle:['商品质量','服务态度','物流水平'],
                tabTitle:["一","二","三","四","五","六","七","八","九","十"],
                selected:2,
                miaoshuStatus:[0,0,0],
                miaoshu:[
                    '',
                    '',
                    '项目评价的详细描述项目评价的详细描述项目评价的详细描述。项目评价的详细描述项目评价的详细描述，项目评价的详细描述项目评价的详细描述项目评价的详细描述，项目评价的详细描述项目评价的详细描述项目评价的详细描述，项目评价的详细描述项目评价的详细描述项目评价的详细描述项目评价的详细描述...',
                ]
            }
        },
        props:{
            jieduan:{
                type:Number,
                default:1
            }
        },
        methods:{
            change(e){
               this.selected=e;
            }
        }
    }
</script>

<style scoped>
    .tab_bar{
        border-bottom:1px solid #efefef;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #bbbbbb;
        padding:15px 0;
    }
    .tab_bar{
        border-bottom:1px solid #efefef;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #bbbbbb;
    }
    .pj_wrap{
        width: 70%;
        padding-left: 50px;
    }
    .评价{
        display: flex;
        justify-content: space-between;
    }
    .pj_miaoshu{
        border-color: #9e0000;
        max-width: 100%;
        width: 100%;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #8a8a8a;
    }
    textarea.pj_miaoshu{
        box-sizing: border-box;
        padding:5px 10px;
    }
    p.pj_miaoshu{
        margin-top: 5px;
    }
    .tab_bar span{
        margin-right: 20px;
        cursor: pointer;
    }
    .tab_bar span.selected{
        color:#353535;
    }
    .pj_btn{
        width: 64px;
        height: 28px;
        background-color: #9e0100;
        border-radius: 3px;
        border:none;
        color:#fff;
        margin-top: 20px;
    }
</style>