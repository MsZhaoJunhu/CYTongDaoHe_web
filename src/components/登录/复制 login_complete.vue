<template>
    <div class="背景内容">
        <div class="dlzcwrap">
        	<img  src="../../../src/assets/imgs/loginleft.png"/>
            <div class="right">
                <div class="top">
                    <div>
                        <span>选择注册身份</span>
			            <!-- <span>完善注册信息</span>
			            <span>完善安全设置</span>
			            <span>注册成功</span> -->
			            <i id="after" :style="{left:(25*tabSelect)+'%'}"></i>
                    </div>
                </div>
                <div class="bottom">
	                <div class="xzzcsf" v-if="tabSelect==0" key="a1">
		                <div>
		                    <img data-identity='企业会员' @click="sfChange(0)" :class="shenfen==0?'selected':''" src="@/assets/imgs/qyhy.png" alt="" />
		                    <img data-identity='个人会员' @click="sfChange(1)" :class="shenfen==1?'selected':''" src="@/assets/imgs/grhy.png" alt="" />
		                    <img data-identity='服务供应商' @click="sfChange(2)" :class="shenfen==2?'selected':''" src="@/assets/imgs/fwgys.png" alt="" />
		                    <img data-identity='共享人才' @click="sfChange(3)" :class="shenfen==3?'selected':''" src="@/assets/imgs/gxrc.png" alt="" />
		                </div>
		                <article class="login-complete-article">
		                    <i></i>
		                    <button class="btn" @click="next()">下一步</button>
		                </article>
		            </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable no-console */

    import "../../components/js/jquery-2.0.3.min"
    export default {
        data(){
            return{
                //外步骤条初始坐标(0,1,2,3----选择注册身份，完善注册信息，完善安全设置，注册完成)
                tabSelect:0,
                //内步骤条初始坐标
                titleSelect:0,
                //选择身份(0,1,2,3----企业，个人，服务商，共享人才)
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
                            ["经营状态","2","jyzt",[
                                {value:1,name:'存续'},
                                {value:2,name:'在业'},
                                {value:3,name:'吊销'},
                                {value:4,name:'注销'},
                                {value:5,name:'迁入'},
                                {value:6,name:'迁出'},
                                {value:7,name:'停业'},
                                {value:7,name:'清算'}]],
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
                    case 3:
                        a='共享人才'
                        break;
                }
                if(this.tabSelect<1 ){
                    this.tabSelect++;
                }else{
                    if(this.titleSelect>=this.titleInfo[a].length-1){
                        this.tabSelect++;
                    }else{
                        this.titleSelect++;
                    }
                }
                if(this.titleSelect>=this.titleInfo[a].length-1 && this.titleSelect==2){
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
	
	.背景内容{
        background-image:url("../../../src/assets/imgs/loginba.png");
        display:flex;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
    .dlzcwrap{
        width: 1200px;
        height: 807px;
        background-color: #fff;
        border-radius: 10px;
        display: flex;
        position: relative;
        overflow: hidden;
    }
    .dlzcwrap>img{
        flex-shrink: 0;
    }
    .dlzcwrap>div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .right>.top div{
        text-align: center;
        width: 418px;
        font-size: 24px;
        color: #353535;
        border-bottom: 1px solid #d2d2d2;
        display: flex;
        position: relative;
    }
    .right>.top div span{
        display: block;
        padding:32px 0;
        width: 50%;
        box-sizing: border-box;
        cursor:pointer;
        padding-top: 0px;
    }
    .right>.top #after{
        content:'';
        display: block;
        width: 209px;
        height: 1px;
        background: #9e0100;
        position: absolute;
        bottom: -1px;
        left: 0;
    }
    .bottom{
        font-size: 16px;
        color: #777;
        margin-top: 10px;
    }
    .bottom>div{
        margin-top: 60px;
        width: 418px;
    }

    #username,#password,#sjh,#dtmsrk{
        font-size: 15px;
        margin: 15px 0 25px 0;
        padding-left:20px;
        width: 411px;
        height: 47px;
        background-color: #ffffff;
        border: solid 1px #e6e6e6;
        width: 400px;
        outline-color: #9e0100;
    }
    .bottom a{
        text-decoration:none;
        color: #9e0100;
    }
    .loginbut{
        font-size: 18px;
        color: #fff;
        height: 51px;
        background-color: #9e0100;
        border-radius: 26px;
        border: 0;
        outline:none;
        margin: 30px 0;
        width: 100%;
        cursor:pointer;
        box-shadow: 0 3px 9px #dd7272;
    }
    .bottom p:last-of-type{
        text-align: center;
    }
    .bottom ul{
        margin-top: 35px;
        padding-left: 70px;
    }
    .bottom ul>li{
        list-style: none;
        float: left;
        margin: 0 20px;
    }
    .hqdtm{
        color: #fff;
        height: 49px;
        background-color: #9e0100;
        border: 0;
        outline:none;
        cursor:pointer;
        width: 96px;

    }
    .dtm{
        display: flex;
    }
    .dtm>.hqdtm{
        margin: 15px 0 25px 0;
    }

    @media screen and (max-width:1400px) {
        .dlzcwrap{
            width: 1000px;
            height: 660px;
        }
        .dlzcwrap>img{
            width: 300px;
        }
        .bottom>div{
            margin-top: 20px;
        }
    }
	
	
	
	
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
        width: 780px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
    }
    .bottom{
        height: 600px;
        display: flex;
        margin-bottom: 15px;
    }
    .xzzcsf div{
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    .bottom>div>div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding-top: 20px;
    }


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
    .login-complete-article{
        justify-content: center !important;
    }
    .login-complete-article .btn{
         width:420px !important
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
   
    #after{
        width: 25% !important;
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

    .login-complete-left{
        display: flex;
        flex-direction: column;
        align-items: flex-start !important;
        justify-content: center;
    }
    .complate-four{
        display: flex !important;
        align-items: flex-start !important;;
    }
</style>