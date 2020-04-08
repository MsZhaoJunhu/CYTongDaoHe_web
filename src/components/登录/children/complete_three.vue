<template>
    <div class="complete_two">
        <div class="top_three">
            <div>
                <span :class="tabSelect==0?'complete-two-nav selected':'complete-two-nav'">选择注册身份</span>
                <span :class="tabSelect==1?'complete-two-nav selected':'complete-two-nav'">完善注册信息</span>
                <span :class="tabSelect==2?'complete-two-nav selected':'complete-two-nav'">完善安全设置</span>
                <span :class="tabSelect==3?'complete-two-nav selected':'complete-two-nav'">注册成功</span>
                <i id="after" :style="{left:(25*tabSelect)+'%'}"></i>
                <i id="after2" :style="{left:(25*tabSelect)+'%'}"></i>
            </div>
        </div>
        <form @submit.prevent="submit($event)" mode="in-out" class="complete-form">
            <div class="complete_three_one">
                <!-- 账户安全设置 -->
                <div class="complete_three_title_one">账户安全设置</div>
                <div class="complete_three_content">
                    <div class="complete_three_public">
                        <label class="complete_three_public_title">账号安全问题一</label>
                        <select class="complete_three_select" v-model="problemOne">
                            <option>你的爸爸叫什么?</option>
                            <option>你的妈妈叫什么？</option>
                            <option>你的奶奶叫什么？</option>
                            <option>你的爷爷叫什么？</option>
                        </select>
                        <input type="txt" placeholder="账号安全答案" class="complete_three_input" v-model="answerOne" />
                    </div>
                    <div class="complete_three_public">
                        <label class="complete_three_public_title">账号安全问题二</label>
                        <select class="complete_three_select" v-model="problemTow">
                           <option>你的爸爸叫什么?</option>
                           <option>你的妈妈叫什么？</option>
                           <option>你的奶奶叫什么？</option>
                           <option>你的爷爷叫什么？</option>
                        </select>
                        <input type="txt" placeholder="账号安全答案" class="complete_three_input" v-model="answerTow" />
                    </div>
                </div>
            </div>
            <div class="complete_three_one">
                <!-- 支付安全设置 -->
                <div class="complete_three_title_one">支付安全设置</div>
                <div class="complete_three_content">
                    <div class="complete_three_public">
                        <label class="complete_three_public_title">企业支付账号</label>
                        <select class="complete_three_select">
                            <option>账号安全问题？</option>
                            <option>账号安全问题？</option>
                        </select>
                        <input type="txt" placeholder="账号安全答案" class="complete_three_input"/>
                    </div>
                    <div class="complete_three_public">
                        <label class="complete_three_public_title">账号安全问题一</label>
                        <div>
                            <label class="complete_three_ts">原密码</label><input type="txt" placeholder="账号安全答案" class="complete_three_input2"/>
                        </div>
                        <div>
                            <label class="complete_three_ts">新密码</label><input type="txt" placeholder="账号安全答案" class="complete_three_input2"/>
                        </div>
                    </div>
                    <div class="complete_three_public">
                        <label class="complete_three_public_title">支付安全问题一</label>
                        <select class="complete_three_select">
                            <option >你的爸爸叫什么？</option>
                            <option>你的老师叫什么？</option>
                        </select>
                        <input type="txt" placeholder="账号安全答案" class="complete_three_input"/>
                    </div>
                    <div class="complete_three_public">
                    <label class="complete_three_public_title">支付安全问题二</label>
                        <select class="complete_three_select">
                            <option>账号安全问题？</option>
                            <option>账号安全问题？</option>
                        </select>
                        <input type="txt" placeholder="账号安全答案" class="complete_three_input"/>
                    </div>
                </div>
            </div>
            <div class="complete_three_one">
                <!-- 支付安全设置 -->
                <div class="complete_three_title_one">证照安全审核</div>
                <div class="complete_three_content">
                    <div class="complete_three_public2">
                        <label class="complete_three_public_title">证照审核</label>
                        <el-upload 
                            class="avatar-uploader"
                            action="/peng/addFile"
                            :on-success="handleAvatarFileSuccess"
                            :on-error="handleAvatarFileError"
                            :before-upload="beforeAvatarFileUpload"
                            :limit=1
                            >
                            <img src="@/assets/imgs/imgpg.jpg"/>
                            <el-button size="small" type="primary" class="anniu">工商营业执照</el-button>
                        </el-upload>
                        <el-upload 
                            class="avatar-uploader"
                            action="/peng/addFile"
                            :on-success="handleAvatarFileSuccess"
                            :on-error="handleAvatarFileError"
                            :before-upload="beforeAvatarFileUpload"
                            :limit=1
                            >
                            <img src="@/assets/imgs/imgpg.jpg"/>
                            <el-button size="small" type="primary" class="anniu">组织机构代码</el-button>
                        </el-upload>
                        <el-upload 
                            class="avatar-uploader"
                            action="/peng/addFile"
                            :on-success="handleAvatarFileSuccess"
                            :on-error="handleAvatarFileError"
                            :before-upload="beforeAvatarFileUpload"
                            :limit=1
                            >
                            <img src="@/assets/imgs/imgpg.jpg"/>
                            <el-button size="small" type="primary" class="anniu">税务登记证</el-button>
                        </el-upload>
                        <el-upload 
                            class="avatar-uploader"
                            action="/peng/addFile"
                            :on-success="handleAvatarFileSuccess"
                            :on-error="handleAvatarFileError"
                            :before-upload="beforeAvatarFileUpload"
                            :limit=1
                            >
                            <img src="@/assets/imgs/imgpg.jpg"/>
                            <el-button size="small" type="primary" class="anniu">法人身份证</el-button>
                        </el-upload>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="complete_three_public3">
                        <label class="complete_three_public_title_red">注意</label>
                        <div class="complete_three_public_title_last">为确保注册用户的真实性和合法性，有效保障交易双方的合法权益，根据平台入驻协议的相关要求，注册用户应向平台提供线上所有交易、支付活动所需的证照或相关文件，平台审核后，注册用户完成平台资质认证，享有经营权限及平台相关服务。特别说明：未通过审核的注册用户，不能发起需求或提供服务。</div>
                    </div>
                </div>
            </div>
        </form>
         <article class="complete-article"  v-show="!is_submit">
            <button class="firstbtn btn" @click="next()">下一步</button>
        </article>
    </div>
</template>

<script>
    import { safety } from "../../api/api";
    export default {
        data(){
            return {
                shenfen:0,
                tabSelect:0,
                is_submit:0,
                 problemOne:'',
                 problemTow:'',
                 answerOne:'',
                 answerTow:''
                  
            }
        },
        created(){
            this.shenfen=this.$route.query.shenfen;
            this.tabSelect=this.$route.query.tabSelect;
        },
        methods:{
            submit(){
            },
            next(){
                let data={
                    problemOne:this.problemOne,
                    problemTow:this.problemTow,
                    answerOne:this.answerOne,
                    answerTow:this.answerTow,
                    username:sessionStorage.getItem("username")
                }
                safety(data).then(res=>{
                    if(res.code===200){
                       this.$message({
                        showClose: true,
                        message: res.msg,
                        type: "success"
                        });
                       this.$router.push({path:'/complete/login_complete',query:{shenfen:this.shenfen,tabSelect:3}})
                    }else{
                        this.$message({
                        showClose: true,
                        message: res.msg,
                        type: "error"
                        });
                        return false;
                    }
                })
            
            },
            handleAvatarFileError: function (err, file) {
                alert("文件上传走丢了。。");
            },
            handleAvatarFileSuccess: function (res, file) {
                this.$message.success("上传文件成功！");
            },
            beforeAvatarFileUpload: function (file) {
                //限制的上限为10M
                const isLt10M = file.size / 1024 / 1024 < 10;
            
                if (!isLt10M) {
                    this.$message.error('上传文件大小不能超过 10MB!');
                }
                return isLt10M;
            }

        }
    }
</script>

<!--这个style是单独拎出来修改父级样式的-->
<style>
	.complete_two{
        width: 1400px;
        height: 807px;
        background-color: #fff;
        border-radius: 10px;
        display: flex;
        position: relative;
        overflow: auto;
        flex-direction: column;
        align-items: center;
        padding-bottom: 50px
    }
    .top_three{
        display: flex;
        justify-content:center;
    }
    .top_three div{
        text-align: center;
        width: 779px;
	    height: 57px;
        font-size: 24px;
        color: #353535;
        border-bottom: 1px solid #d2d2d2;
        display: flex;
        position: relative;
        margin-top: 50px
    }
    .complete-two-nav{
        display: block;
        padding:32px 0;
        width: 50%;
        box-sizing: border-box;
        cursor:pointer;
        padding-top: 0px;
        color:#bbbbbb;
    }
    .complete-two-nav.selected{
        color: #353535 !important;
    }
    #after,#after2{
        content:'';
        display: block;
        width: 209px;
        height: 1px;
        background: #9e0100;
        position: absolute;
        bottom: -1px;
        left: 0;
    }
    #after2{
        width: 104px;
    }
    .complete-form{
        width:100%;
        padding-left:15px;
        padding-right: 30px;
        box-sizing: border-box;
        flex-wrap: wrap
    }
    .complete_three_title_one{
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #333333;
        margin-top: 25px;
        margin-bottom: 25px
    }
    .complete_three_content{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        
    }
    .complete_three_public{
        width: 42%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px
    }
    .complete_three_public2{
        width: 42%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px
    }
    .complete_three_select{
        border: none;
        width: 200px;
        outline: none;
        background-color: #e2e0e0;
        height: 32px;
        line-height: 32px;
        text-indent: 8px;
        font-size: 14px;
        color: #999999;
    }
    .complete_three_input,
    .complete_three_input2{
         width:200px;
        height: 32px;
        background-color: #e2e0e0;;
        border-radius: 1px;
        border: none;
        outline: none;
        text-indent:10px
    }
    .complete_three_ts{
        margin-right: 10px;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #aaaaaa;
    }
    .complete_three_input2{
        width: 145px !important
    }
    .complete_three_public_title{
        width: 100px;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #666666;
    }
    .complete_three_public_title_red{
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #9e0000;
        width: 140px;
    }
    .complete_three_public3{
        width: 42%;
        display: flex;
        margin-bottom: 20px
    }
    .complete_three_public_title_last{
        	
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 0px;
            color: #555555;
    }
    .avatar-uploader{
        width: 96px
    }
    .el-button--primary,
    .el-button--primary:hover,
    .el-button--primary:active{
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #aaaaaa;
        background-color: #fff;
        border: none
    }
    .firstbtn{
        width: 410px;
        height: 51px;
        background-color: #9e0100;
        border-radius: 26px; 
    }
    @media screen and (max-width: 415px) {
        .complete{
            background: url('');
            padding: 0;
        }
        .complete,.complete_two{
            display: block;
            width: 100%;
        }
        .top_three{
            width: 100% !important;
        }
        .top_three>div{
            margin: 16px 0 0 0;
            width: 414px !important;
            word-wrap: break-word;
            display: flex;
            justify-content: space-between;
        }
        .top_three div{
            height: 42px;
        }
        .top_three>div>span{
            font-size: 16px;
            height: auto;
            height: 32px !important;
        }
        #after{
            display: none;
        }
        #after2{
            display: block;
        }
        .complete-form>div>div{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
        }
        .complete_three_title_one{
            margin: 16px 0;
        }
        .complete_three_content>div{
            margin: 16px 0 0 0;
        }
        .complete_three_public{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
        }
        .complete_three_public>*{
            margin-top: 16px;;
        }
        .complete_three_content>.complete_three_public:first-child{
            margin: 0;
        }
        .complete_three_public_title,.complete_three_title_one{
            text-align: center;
        }
        .complete_three_public2,.complete_three_public3{
            width: 100%;
            display: flex;
            flex-direction: row;
            margin: 0 !important;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        .complete_three_public_title{
            margin: 0;
            width: 100%;
            font-size: 12px;
            display: block;
        }
        .complete_three_public2>div:nth-child(n+2){
            margin-top: 16px;
        }
        .el-upload{
            width: 115px;
        }
        .complete-article{
            width: 100%;
        }
        .complete-article>.btn{
            width: 50%;
            height: 42px;
            display: block;
            margin: 0 auto;
            margin-top: 20px;
        }
    }
</style>