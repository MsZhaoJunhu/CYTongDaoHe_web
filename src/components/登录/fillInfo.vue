<template>
    <bg>
        <template v-slot:topTab>
            <span>选择注册身份</span>
            <span>完善注册信息</span>
            <span>注册完成</span>
            <i id="after" :style="{left:(259.67*tabSelect)+'px'}"></i>
        </template>
        <transition mode="out-in">
            <div class="xzzcsf" v-if="tabSelect==0" key="a1">
                <div>
                    <img data-identity='企业会员' @click="sfChange(0)" :class="shenfen==0?'selected':''" src="@/assets/imgs/qyhy.png" alt="" />
                    <img data-identity='个人会员' @click="sfChange(1)" :class="shenfen==1?'selected':''" src="@/assets/imgs/grhy.png" alt="" />
                    <img data-identity='服务供应商' @click="sfChange(2)" :class="shenfen==2?'selected':''" src="@/assets/imgs/fwgys.png" alt="" />
                </div>
                <article>
                    <i></i>
                    <button class="btn" @click="next()">下一步</button>
                </article>
            </div>

            <div class="wszcxx" v-else-if="tabSelect==1" key="a2">
                <div class="xinxi qiye" v-if="shenfen==0">
                    <ul class="sfxx">
                        <template v-for="(title,index) in titleInfo['企业会员']">
                            <li :class="index==titleSelect?'selected':''">{{title}}</li>
                        </template>
                    </ul>
                    <transition name="info" mode="in-out">
                        <form @submit.prevent="submit($event)">
                            <template v-for="(gsxx,index) in DetailInfo['企业会员']">
                                <div class="fill_info" v-show="titleSelect==index" :key="'b'+index">
                                    <template v-for="item in gsxx">
                                        <label v-if="item[0]!=='hr'">
                                            <p>{{item[0]}}</p>
                                            <input v-if="item[1]==1" :name="item[2]" type="text" :placeholder="item[3]"/>
                                            <select v-else-if="item[1]==2" :name="item[2]">
                                                <option v-for="list in item[3]" :value="list">{{list}}</option>
                                            </select>
                                            <span v-if="item[1]==5" style="display:flex;justify-content: space-between;flex-wrap: wrap">
                                                <template v-for="(num,index) in item[2]">
                                                    <input style="margin-bottom:10px" :name="num" type="text" :placeholder="item[3][index]"/>
                                                </template>
                                            </span>
                                        </label>
                                        <hr v-else/>
                                    </template>
                                </div>
                            </template>
                            <button class="btn submit" v-show="is_submit" type="submit">提交</button>
                        </form>
                    </transition>
                </div>
                <div class="xinxi fuwuqi" v-if="shenfen==2">
                    <ul class="sfxx">
                        <template v-for="(title,index) in titleInfo['服务供应商']">
                            <li :class="index==titleSelect?'selected':''">{{title}}</li>
                        </template>
                    </ul>
                    <transition name="info" mode="in-out">
                        <form @submit.prevent="submit($event)">
                            <template v-for="(gsxx,index) in DetailInfo['服务供应商']">
                                <div class="fill_info" v-show="titleSelect==index" :key="'b'+index">
                                    <template v-for="item in gsxx">
                                        <label v-if="item[0]!=='hr'">
                                            <p>{{item[0]}}</p>

                                            <input v-if="item[1]==1" :name="item[2]" type="text" :placeholder="item[3]"/>

                                            <select v-else-if="item[1]==2" :name="item[2]">
                                                <option v-for="list in item[3]" :value="list">{{list}}</option>
                                            </select>

                                            <span v-if="item[1]==5" style="display:flex;justify-content: space-between;flex-wrap: wrap">
                                                <template v-for="(num,index) in item[2]">
                                                    <input style="margin-bottom:10px" :name="num" type="text" :placeholder="item[3][index]"/>
                                                </template>
                                            </span>
                                        </label>
                                        <hr v-else/>
                                    </template>
                                </div>
                            </template>
                            <button class="btn submit" v-show="is_submit" type="submit">提交</button>
                        </form>
                    </transition>
                </div>
<!--                <div class="xinxi fuwuqi">-->
<!--                    <ul class="sfxx">-->
<!--                        <li class="selected">工商信息</li>-->
<!--                        <li>工商信息</li>-->
<!--                        <li>工商信息</li>-->
<!--                    </ul>-->
<!--                    <div class="fill_info">-->
<!--                        <label>-->
<!--                            <p>公司信息</p>-->
<!--                            <input type="text" placeholder="请输入公司信息"/>-->
<!--                        </label>-->
<!--                        <label>-->
<!--                            <p>公司信息</p>-->
<!--                            <input type="text" placeholder="请输入公司信息"/>-->
<!--                        </label>-->
<!--                    </div>-->
<!--                    <div class="fill_info">-->
<!--                        <label>-->
<!--                            <p>公司信息</p>-->
<!--                            <input type="text" placeholder="请输入公司信息"/>-->
<!--                        </label>-->
<!--                    </div>-->
<!--                    <div class="fill_info">-->
<!--                        <label>-->
<!--                            <p>工商信息</p>-->
<!--                            <input type="text" placeholder="请输入公司信息"/>-->
<!--                        </label>-->
<!--                        <label>-->
<!--                            <p>工商信息</p>-->
<!--                            <input type="text" placeholder="请输入公司信息"/>-->
<!--                        </label>-->
<!--                    </div>-->
<!--                </div>-->
                <article>
                    <button class="btn" @click="prev()">上一步</button>
                    <button class="btn" @click="next()">下一步</button>
                </article>
            </div>
        </transition>
    </bg>
</template>
<script>
    /* eslint-disable no-console */

    import bg from '../../components/public/登录注册'
    import "../../components/js/jquery-2.0.3.min"
    export default {
        components:{
            bg
        },
        data(){
            return{
                //外步骤条初始坐标(0,1,2----选择注册身份，完善注册信息，注册完成)
                tabSelect:0,
                //内步骤条初始坐标
                titleSelect:0,
                //选择身份(0,1,2----企业，个人，服务商)
                shenfen:0,
                is_submit:false,
                titleInfo:{
                    "企业会员":[
                        "工商信息",
                        "股东信息",
                        "企业信息",
                        "经营情况",
                        "业务情况",
                        "发展规划",
                    ],
                    '个人会员':[

                    ],
                    "服务供应商":[
                        "工商信息",
                        "股东信息",
                        "企业信息",
                        "经营情况",
                        "业务情况",
                    ]
                },

                // 详细信息(1文本框，2选择框，3文本域，4上传，5多文本框)
                DetailInfo:{
                    "企业会员":[
                        [
                            ["公司名称","1","gsmc","请输入公司名称"],
                            ["公司地址","1","gsdz","请输入公司地址"],
                            ["公司电话","1","gsdh","请输入公司电话"],
                            ["公司邮箱","1","gsyx","请输入公司邮箱"],
                            ["官网","1","wz","请输入官网"],
                            ["注册资本","1","zczb","请输入注册资本"],
                            ["实缴资本","1","sjzb","请输入实缴资本"],
                            ["经营状态","2","jyzt",["存续","在业","吊销","注销","迁入","迁出","停业","清算"]],
                            ["成立日期","1","clrq","请输入成立日期"],
                            ["统一社会信用代码","1","xydm","请输入统一社会信用代码"],
                            ["纳税人识别号","1","nsrsbh","请输入纳税人识别号"],
                            ["注册号","1","zch","请输入注册号"],
                            ["组织机构代码","1","zzjgdm","请输入组织机构代码"],
                            ["登记注册类型","1","djzclx","请输入登记注册类型"],
                            ["所属行业","1","sshy","请输入所属行业"],
                            ["核准日期","1","hzrq","请输入核准日期"],
                            ["登记机关","1","djrq","请输入登记机关"],
                            ["所属区域","1","ssqy","请输入所属区域"],
                            ["经营范围","1","jyqy","请输入经营范围"],
                            // 19
                        ],
                        [
                            ["股东(自然人或法人)","1","gd","股东(自然人或法人)"],
                            ["持股比例","1","cgbl","请输入持股比例"],
                            ["认缴出资额(万元)","1","rjcze","请输入认缴出资额(万元)"],
                            ["认缴出资日期","1","rjczrq","请输入认缴出资日期"],
                            ["实缴出资额(万元)","1","sjcze","请输入实缴出资额(万元)"],

                            // ["hr"],
                            // ["股东(自然人或法人)","1","gd","股东(自然人或法人)"],
                            // ["持股比例","1","cgbl","请输入持股比例"],
                            // ["认缴出资额(万元)","1","rjcze","请输入认缴出资额(万元)"],
                            // ["认缴出资日期","1","rjczrq","请输入认缴出资日期"],
                            // ["实缴出资额(万元)","1","sjcze","请输入实缴出资额(万元)"],
                            //5
                        ],
                        [
                            ["企业简介","1","qyjj","请输入企业简介"],
                            ["组织架构","1","zzjg","请输入组织架构"],
                            ["部门职责","1","bmzz","请输入部门职责"],
                            ["董监高","5",["djgxm","djgzw","djgdhhm"],["请输入董监高姓名","请输入董监高职务","请输入董监高电话号码"]],
                            ["管理层","5",["glcxm","glcbm","glczw","glcdhhm"],["请输入管理层姓名","请输入管理层部门","请输入管理层职务","请输入管理层电话号码"]],
                            ["人员规模","1","rygm","请输入人员规模"],
                            ["参保人数","1","cbry","请输入参保人数"],
                            ["企业规模","1","qygm","请输入企业规模"],
                            ["企业文化","5",["yj","sm","jzg","jyln"],["请输入愿景","请输入使命","请输入价值观","请输入经营理念"]],
                            // 9
                        ],
                        [
                            ["近三年收入","1","jsnsr","请输入近三年收入"],
                            ["近三年利润","1","jsnlr","请输入近三年利润"],
                            // 2
                        ],
                        [
                            ["商业模式","1","syms","请输入商业模式"],
                            ["业务模式","1","ywms","请输入业务模式"],
                            ["服务&产品链","5",["rmcp&fw","jzcp&fw","lrcp&fw"],["请输入入门产品&服务","请输入标准产品&服务","请输入利润产品&服务"]],
                            ["利润来源","1","lrly","请输入利润来源"],
                            ["竞争对手","1","jzds","请输入竞争对手"],
                            ["竞争优势","1","jzys","请输入竞争优势"],
                            ["市场前景","1","scqj","请输入市场前景"],
                            // 7
                        ],
                        [
                            ["公司战略目标(近三年)","1","gszlmb","请输入公司战略目标(近三年)"],
                            ["产品&服务开发计划","1","cp&fwkfjh","请输入产品&服务开发计划"],
                            ["技术研发计划","1","jsyfjh","请输入技术研发计划"],
                            ["市场拓展计划","1","sctzjh","请输入市场拓展计划"],
                            ["人才引进计划","1","rcyjjh","请输入人才引进计划"],
                            // 5
                        ],
                    ],
                    "服务供应商":[
                        [
                            ["公司名称","1","gsmc","请输入公司名称"],
                            ["公司地址","1","gsdz","请输入公司地址"],
                            ["公司电话","1","gsdh","请输入公司电话"],
                            ["公司邮箱","1","gsyx","请输入公司邮箱"],
                            ["官网","1","wz","请输入官网"],
                            ["注册资本","1","zczb","请输入注册资本"],
                            ["实缴资本","1","sjzb","请输入实缴资本"],
                            ["经营状态","2","jyzt",["存续","在业","吊销","注销","迁入","迁出","停业","清算"]],
                            ["成立日期","1","clrq","请输入成立日期"],
                            ["统一社会信用代码","1","xydm","请输入统一社会信用代码"],
                            ["纳税人识别号","1","nsrsbh","请输入纳税人识别号"],
                            ["注册号","1","zch","请输入注册号"],
                            ["组织机构代码","1","zzjgdm","请输入组织机构代码"],
                            ["登记注册类型","1","djzclx","请输入登记注册类型"],
                            ["所属行业","1","sshy","请输入所属行业"],
                            ["核准日期","1","hzrq","请输入核准日期"],
                            ["登记机关","1","djrq","请输入登记机关"],
                            ["所属区域","1","ssqy","请输入所属区域"],
                            ["经营范围","1","jyqy","请输入经营范围"],
                            // 19
                        ],
                        [
                            ["股东(自然人或法人)","1","gd","股东(自然人或法人)"],
                            ["持股比例","1","cgbl","请输入持股比例"],
                            ["认缴出资额(万元)","1","rjcze","请输入认缴出资额(万元)"],
                            ["认缴出资日期","1","rjczrq","请输入认缴出资日期"],
                            ["实缴出资额(万元)","1","sjcze","请输入实缴出资额(万元)"],
                        ],
                        [
                            ["企业简介","1","qyjj","请输入企业简介"],
                            ["组织架构","1","zzjg","请输入组织架构"],
                            ["部门职责","1","bmzz","请输入部门职责"],
                            ["董监高","5",["djgxm","djgzw","djgdhhm"],["请输入董监高姓名","请输入董监高职务","请输入董监高电话号码"]],
                            ["管理层","5",["glcxm","glcbm","glczw","glcdhhm"],["请输入管理层姓名","请输入管理层部门","请输入管理层职务","请输入管理层电话号码"]],
                            ["人员规模","1","rygm","请输入人员规模"],
                            ["参保人数","1","cbry","请输入参保人数"],
                            ["企业规模","1","qygm","请输入企业规模"],
                            ["企业文化","5",["yj","sm","jzg","jyln"],["请输入愿景","请输入使命","请输入价值观","请输入经营理念"]],
                            ["资质证书","1","zzzs","请输入资质证书"],
                            ["荣誉称号","1","rych","请输入荣誉称号"],
                            // 11
                        ],
                        [
                            ["近三年收入","1","jsnsr","请输入近三年收入"],
                            ["近三年利润","1","jsnlr","请输入近三年利润"],
                            // 2
                        ],
                        [
                            ["主营范围","1","zyfw","请输入主营范围"],
                            ["核心业务","1","hxyw","请输入核心业务"],
                            ["竞争优势","1","jzys","请输入竞争优势"],
                            ["近三年核心业务量","1","jsnhxywl","请输入近三年核心业务量"],
                            ["典型服务案例","1","dxfwal","典型服务案例"],
                            // 5
                        ],
                    ]

                },
            }
        },
        methods:{
            sfChange:function(sf){
                this.shenfen=sf
            },
            next:function(){
                var a=0;
                switch (this.shenfen) {
                    case 0:
                        a='企业会员'
                        break;
                    case 1:
                        a='个人会员'
                        break;
                    case 2:
                        a='服务供应商'
                        break;
                }
                if(this.tabSelect!==1){
                    this.tabSelect++;
                }else{
                    if(this.titleSelect>=this.titleInfo[a].length-1){
                        this.tabSelect++;
                    }else{
                        this.titleSelect++;
                    }
                }

                if(this.titleSelect>=this.titleInfo[a].length-1){
                    this.is_submit=true
                }else{
                    this.is_submit=false
                }
            },
            prev:function(){
                if(this.tabSelect!==1){
                    this.tabSelect--;
                }else{
                    if(this.titleSelect<=0){
                        this.tabSelect--;
                    }else{
                        this.titleSelect--;
                        this.is_submit=false
                    }
                }
            },
            submit:function(event){
                var arr=[];
                for(var i=0;i<event.target.length-1;i++){
                    var name=event.target[i].name;
                    var value=event.target[i].value;
                    arr.push(`${name}:${value}`);
                }
            }
        }
    }
</script>

<!--这个style是单独拎出来修改父级样式的-->
<style>

    .right>.top div {
        text-align: center;
        width: 779px;
        font-size: 24px;
        color: #353535;
        border-bottom: 1px solid #d2d2d2;
        display: flex;
        position: relative;
    }
    .bottom>div {
        display: flex;
        height: 100%;
        width: 779px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
    }
    .bottom{
        height: 600px;
        display: flex;
    }
    .bottom>div>div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

</style>
<style scoped>
    .submit{
        right: 0;
        position: absolute;
        bottom: -100px;
    }
    form{
        height: 100%;
        position: relative;
        display: flex;
    }
    hr{
        margin-top: 20px;
        width: 100%;
        height: 1px;
        background: #8a8a8a;
        opacity:.1;
    }
    select,option{
        outline: none;
        width: 321px;
        height: 44px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0 10px;
    }
    article {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .xzzcsf>div img{
        opacity: .2;
        transition: .2s;
    }
    .xzzcsf>div img:hover{
        opacity: 1;
        transform:translateY(-10px)
    }
    .xzzcsf>div img.selected{
        opacity: 1;
        animation:mymove .5s infinite alternate;
    }
    @keyframes mymove
    {
        from {transform:translateY(0px)}
        to {transform:translateY(-10px)}
    }


    .wszcxx div{
        justify-content: flex-start !important;
        align-items: flex-start !important;
        flex-direction: column;
    }
    .wszcxx .sfxx{
        width: 100%;
        margin: 20px 0;
        padding: 0 !important;
        display: flex;
        -webkit-overflow-scrolling: touch;
    }
    .wszcxx .sfxx::-webkit-scrollbar {
        /*background-color: transparent;*/
    }

    .wszcxx .sfxx li{
        white-space: nowrap;
        list-style: none;
        padding: 9px 20px;
        background-color: #eeeeee;
        border-radius: 18px;
        margin: 0;
        margin-right: 20px;
    }
    .wszcxx .sfxx li.selected{
        background: #9e0100;
        color: #fff;
    }
    .wszcxx .fill_info{
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: row;
        justify-content: space-between !important;
        align-content: flex-start !important;
        flex-wrap: wrap;
        overflow-y: auto;
    }
    .wszcxx .fill_info p span{
        color: red;
        font-size: 14px;
        /*float: right;*/
    }
    .wszcxx .fill_info:first-of-type{
        display: flex;
    }
    /*美化滚动条*/
    .wszcxx .fill_info::-webkit-scrollbar {
        width: 12px;
    }
    .wszcxx .fill_info::-webkit-scrollbar-track {
        background-color:#efefef;
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius:2em;
    }
    .wszcxx .fill_info::-webkit-scrollbar-thumb {
        background-color:#9e0100;
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius:2em;
    }
    .wszcxx .fill_info label{
        margin-right: 50px;
        margin-top: 20px;
    }
    .wszcxx .fill_info label p{
        text-align: left;
        margin-bottom: 10px;
    }
    .wszcxx .fill_info label input{
        width: 321px;
        height: 44px;
        box-sizing: border-box;
        padding: 0 10px;
    }

    .zccg div{
        text-align: center;
        justify-content: center !important;
    }
    /*@media screen and (max-width:1400px) {
        .wrap{
            width: 1000px;
            height: 660px;
        }
        .wrap>img{
            width: 300px;
        }
        .bottom>div{
            margin-top: 20px;
        }
    }*/
    #after{
        width: 259.67px !important;
        transition: .5s;
    }
    .v-enter-active{
        transition: .3s ease;
    }
    .v-leave-active{
        transition: .3s ease;
    }
    .v-enter,.v-leave-to{
        transform: translateY(-50px);
        opacity: 0;
    }

    /*.info-enter-active{*/
    /*    transition: .5s ease;*/
    /*}*/
    /*.info-leave-active{*/
    /*    transition: .5s ease;*/
    /*}*/
    /*.info-enter,.info-leave-to{*/
    /*    transform: translateY(100px);*/
    /*    opacity: 0;*/
    /*}*/
    
</style>