<template>
    <div class="toast_public1" v-show="$store.getters.getToastZj" v-if="arrs.length>0">      
        <div class="contant_public1" :style="{width:arrs[steps][0]+'px',height:arrs[steps][1]+'px'}">
            <div class="topname_public1">
                <div class="topTitle_public1">
                    <span class="topIcon_public1"></span><i class="title_public1">{{arrs[steps][2]}}</i>
                </div>
                <img class="close_public1" src="../../assets/tc/close.png" alt="关闭按钮" @click="closeAll()">
            </div>
            <div class="contants_public1">
                <div class="programmeAll_public1">
                    <div v-if="arrs[steps][10]==true" class="rl">
                        <div class="block_public1">
                            <el-date-picker
                            @change="change"
                            v-model="value1"
                            type="date"
                            placeholder="选择日期">
                            </el-date-picker>
                        </div>
                        <div class="block_public1">
                            <el-date-picker
                            v-model="value2"
                            type="date"
                            @focus="focus"
                            :picker-options="pickerOptions1"
                            placeholder="选择日期">
                            </el-date-picker>
                        </div>
                        <button class="BlockBut_public1">
                            <img src="../../assets/tc/search.png" alt="11">
                            <span>搜索</span>
                        </button>
                    </div>
                    <div v-for="(item,i) of arrs[steps][3]" :key="i">
                        <p v-if="item.name==0">
                            <span v-html="item.htmlPd"></span>
                        </p>
                        <p v-if="item.name==1">
                            <span :class="item.fontSize">{{item.title}}</span><span :class="item.fontColor">{{item.answer}}</span><span>{{item.answer2}}</span><span v-show="item.hide==0" style="margin-left:8px;">{{item.hideText}}</span>
                        </p>
                        <p v-if="item.name==2" class="media_sjed">
                            <span :class="item.fontSize">{{item.title}}</span><input type="item.format" :placeholder="item.placeholder" class="input" :class="item.class"><span v-show="item.hide==0" style="margin-left:8px;">{{item.hideText}}</span>
                        </p>
                        <p v-if="item.name==3" class="media_zffs">
                            <span :class="item.fontSize">{{item.title}}</span>
                            <span v-for="(imgItem,imgI) of item.imgArr" :key="imgI" class="icon" @click="changeBorder($event)">
                                <img :src="imgItem.url" alt="">
                                <span>{{imgItem.explain}}</span>
                            </span>
                        </p>
                        <p v-if="item.name==4">
                            <span :class="item.fontSize">{{item.title}}</span><input type="item.format" :placeholder="item.placeholder"  class="input"><span v-show="item.hide==0" class="ColorRed" style="font-size:14px;margin-left:8px;">{{item.hideText}}</span>
                        </p>
                        <p v-if="item.name==6">
                            <span :class="item.fontSize">{{item.title}}</span>
                            <select class="selectOption">
                                <option v-for="(secend,k) of item.options" :key="k">{{secend}}</option>
                            </select>
                            <span v-show="item.hide==0" class="ColorRed">{{item.hideText}}</span>
                        </p>
                        <p v-if="arrs[steps][11]==true" class="LastWc_public1">
                            <img :src="arrs[steps][12]" alt=""><br/>
                            <span>{{arrs[steps][13]}}</span>
                        </p>
                        <p v-if="item.name==14" :class="item.flex">
                            <span :class="item.fontSize">{{item.title}}</span>
                            <span v-for="(secend,k) of item.btns" :key="k" :class="secend.selected">{{secend.contant}}</span>
                            <span v-show="item.hide==0">{{item.hideText}}</span>
                        </p>
                        <p v-if="item.name==15" class="media_xqmc">
                            <span v-for="(secend,k) of item.titleSelects" :key="k" :class="item.hang==true?'hang':''">
                                <span  v-if="secend.type=='select'" :class="secend.fontSize">
                                    <span :class="secend.fontSize">{{secend.nam}}</span>
                                    <select :class="secend.fontSizeS"><option v-for="(seard,y) of secend.options" :key="y">{{seard}}</option></select>
                                </span>
                                <span  v-if="secend.type=='fzDiv'" :class="secend.fontSize">
                                    <span :class="secend.fontSize">{{secend.nam}}</span>
                                    <span :class="secend.type">{{secend.options}}</span>
                                </span>
                            </span>
                        </p>
                        <p v-if="item.name==16" class="media_textarea">
                            <span style="float:left;">{{item.title}}</span>
                            <textarea :style="{width:item.width+'px',height:item.height+'px'}"></textarea>
                        </p>
                        <p v-if="item.name==18">
                            <span :class="item.fontSize">{{item.title}}</span>
                            <input type="file" id="file-input" name="fileContent">
                        </p>
                        <div v-if="item.name=='borderTop'" :class="item.borderTop"></div>
                        <div v-if="item.name==19" :style="{width:item.w,height:item.h}" class="alss_public1">
                            <div :class="item.fontSize" style="min-width:80px;">{{item.mc}}</div>
                            <div v-for="(secend,k) of item.alssSZ" :key="k" class="alssDiv_public1">
                                <img :src="secend.imgURL" alt="">
                                <p class="alssP_public1">
                                    <span>{{secend.title}}</span>
                                    <span class="next_public1">
                                        <img src="../../assets/tc/next2.png" alt="11">
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div v-if="item.name==20" class="fwsmc_public1">
                            <div>
                                <p class="ColorRed">{{item.title}}</p>
                                <p>
                                    <span :class="item.jjFontSize">{{item.jj}}</span>
                                    <span>{{item.jjContent}}</span>
                                </p>
                                <p>
                                    <span :class="item.CxFontSize">{{item.cxfs}}</span>
                                    <span style="color:#999999;">{{item.cxfsContent}}</span>
                                </p>
                            </div>
                            <div>
                                <img :src="item.img" alt="">
                            </div>
                        </div>
                        <div v-if="item.name==21" class="tbsj_public1">
                            <span :class="item.FontSize">{{item.title}}</span>
                            <p>
                                {{item.answer}}
                                <span class="ColorRed">{{item.bzAnswer}}</span>
                            </p>
                        </div>
                        <div v-if="item.name==22">
                            <span :class="item.FontSize">{{item.title}}</span>
                            <span v-for="(secend,k) of item.wj" :key="k" class="xzSpan_public1">
                                {{secend.title}}
                                <a :href="secend.lj">下载</a>
                            </span>
                        </div>
                        <div v-if="item.name==23" class="xy_public1">
                            <p>
                                {{item.titleA}}
                                <span>{{item.titleRed}}</span>
                                {{item.titleB}}
                            </p>
                            <div >
                                <span :class="item.fontSize">{{item.Nr}}</span>
                                <div @scroll="Tscroll">
                                    <p v-html="item.content[0].htmls">{{item.content[0].htmls}}</p>
                                </div>
                            </div>
                            <button class="wcjy_public1" disabled @click="stepsUp">完成交易</button>
                        </div>
                        <div v-if="item.name==24">
                            <toastPublic>
                                <template v-slot:bottomTable>
                                    <span class="bottomTabSpan_public1" v-for="(secend,k) of item.bottomTab" :key="k" @click="tabChange(secend.index,$event)">{{secend.title}}</span>
                                    <i class="afterLine"></i>
                                    <i id="after" :style="tabSelect==0?'left:28px;width:80px':tabSelect==1?'left:112px;width:90px':tabSelect==2?'left:210px;width:120px':'left:334px;width:78px'"></i>
                                </template>
                                <transition mode="out-in">
                                    <div v-for="(secend,k) in item.tabContent" :key="k" v-if="tabSelect==secend.index" key="a1">
                                        <div  v-html="secend.content"></div>
                                    </div>
                                </transition>
                            </toastPublic>
                        </div>
                        <div v-if="item.name==25">
                            <toastPublic>
                                <template v-slot:bottomTable>
                                    <span class="bottomTabSpan_public1" v-for="(secend,k) of item.bottomTab" :key="k" @click="tabChange(secend.index,$event)">{{secend.title}}</span>
                                    <i class="afterLine"></i>
                                    <i id="after" :style="tabSelect==0?'left:5px;width:80px;':tabSelect==1?'left:90px;width:90px':tabSelect==2?'left:188px;width:120px':tabSelect==3?'left:312px;width:78px':'left:390px;width:80px'"></i>
                                </template>
                                <transition mode="out-in">
                                    <div v-for="(secend,k) in item.tabContent" :key="k" v-if="tabSelect==secend.index" key="a1">
                                        <div  v-html="secend.content" style="margin-top:20px;"></div>
                                    </div>
                                    <div v-if="tabSelect==4">
                                        <div class="uploadPICS">
                                            <img src="../../assets/tc/alss.png" alt="">
                                            <img src="../../assets/tc/alss.png" alt="">
                                            <img src="../../assets/tc/alss.png" alt="">
                                            <el-upload 
                                                class="toastpublic1"
                                                action="/peng/addFile"
                                                :on-success="handleAvatarFileSuccess"
                                                :on-error="handleAvatarFileError"
                                                :before-upload="beforeAvatarFileUpload"
                                                :limit=1
                                                name="pics"
                                                >
                                                <img src="../../assets/tc/uploadPICS.png" />
                                                <!-- <el-button size="small" class="" type="primary">点击上传</el-button> -->
                                            </el-upload>
                                        </div>
                                        <p>
                                            <span :class="item.tabContent[3].fontSize">{{item.tabContent[3].jfqr}}</span>
                                            <span :class="item.tabContent[3].jfqrContentColor">{{item.tabContent[3].jfqrContent}}</span>
                                        </p>
                                        <p class="uploadPICSLastp">
                                            <span :class="item.tabContent[3].fontSizetwo">{{item.tabContent[3].jf}}</span>
                                            <span>{{item.tabContent[3].jfContent}}</span>
                                        </p>
                                        <p class="uploadPICSLastp">
                                            <span :class="item.tabContent[3].fontSizetwo">{{item.tabContent[3].rq}}</span>
                                            <span>{{item.tabContent[3].rqContent}}</span>
                                        </p>
                                    </div>
                                </transition>
                            </toastPublic>
                        </div>
                        <div v-if="item.name==30">
                            <toastPublic2>
                                <template v-slot:bottomTable>
                                    <span class="bottomTabSpan_public1" v-for="(secend,k) of item.bottomTab" :key="k" @click="tabChange(secend.index,$event)">{{secend.title}}</span>
                                    <i class="afterLine"></i>
                                    <i id="after" :style="tabSelect==0?'left:10px;width:125px;':'left:140px;width:105px;'"></i>
                                </template>
                                <transition mode="out-in">
                                    <div v-for="(secend,k) in item.tabContent" :key="k" v-if="tabSelect==secend.index" key="a1">
                                        <div  v-html="secend.content" style="margin-top:20px;"></div>
                                    </div>
                                </transition>
                            </toastPublic2>
                        </div>
                        <div v-if="item.name==26">
                            <p v-for="(secend,k) of item.jyxm" :key="k" class="jyxm">
                                <span :class="secend.fontSize">{{secend.first}}</span>
                                <span :class="secend.secendColor">{{secend.secend}}</span>
                            </p>
                        </div>
                        <p v-if="item.name==27" class="progressThreeFWNR">
                            <span :class="item.fontSize">{{item.title}}</span>
                            <span :class="item.fontColor">{{item.answer}}</span>
                            <span v-show="item.hide==0">{{item.hideText}}</span>
                        </p>
                        <p v-if="item.name==28" class="progressThreeJXQRS">
                            <span :class="item.fontSize">{{item.title}}</span>
                            <span :class="item.fontColor" v-for="(secend,k) of item.answer" :key="k">{{secend.content}}</span>
                            <span v-show="item.hide==0">{{item.hideText}}</span>
                        </p>
                        <div v-if="item.name==29" class="progressThreeLastQZ">
                            <p v-for="(secend,k) of item.contents" :key="k">
                                <span :class="secend.fontSize">{{secend.title}}</span>
                                <span :class="secend.fontColor">{{secend.answer}}</span>
                            </p>
                        </div>
                        <!-- <div class="bannerSearch" v-if="item.name==31">
                            <label>
                                <h1>快速解决您的问题</h1>
                                <input type="text" placeholder="输入关键字搜索">
                                <img src="@/assets/imgs/search.png"/>
                            </label>
                        </div> -->
                        <div v-if="item.name==17" class="AllInputParent_public1">
                            <span :class="item.fontSize">{{item.title}}</span>
                            <div class="AllInputs_public1">
                                <div v-for="(secend,k) of item.inputs" :key="k">
                                    <button :class="item.class" @click="changeJeBorder($event)">{{secend}}</button>
                                </div>
                            </div>
                            <input type="text" v-if="item.input=='null'" class="InputsLast_public1">
                        </div>
                        
                        <button v-if="item.name==5" class="btn_public1" @click="stepsUp">{{item.title}}</button>
                    </div>
                    <div class="arrsBidv_public1" v-if="arrs[steps][14]==true">
                        <div v-for="(item,i) of arrs[steps][15]" :key="i">
                        <div v-if="item.name=='div'" :class="item.class" @click="showDifer($event)">{{item.title}}</div>
                    </div>
                </div>
                <div v-if="arrs[steps][16]==true" :style="{width:arrs[steps][18]+'px',height:arrs[steps][19]+'px'}" class="AllDiv_public1">
                        <div  v-for="(item,i) of arrs[steps][17]" :key="i" >
                            <div :class="item.class" v-if="item.name=='bDiv'" :style="{width:item.width+'px',height:item.height+'px'}"  >
                                <p>
                                    <span>{{item.title}}</span>
                                    <span :class="item.ztColor">{{item.zt}}</span>
                                </p>
                                <p>{{item.content}}</p>
                                <div :class="item.topBorder">
                                    <span>{{item.time}}</span>
                                    <img :src="item.img" alt="" :style="{width:item.imgWidth+'px',height:item.imgHeight+'px'}">
                                </div>
                            </div>
                        </div>
                </div>
                <div class="yeshu_public1"  v-if="arrs[steps][16]==true">
                    <span class="selecteSpan_public1">1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                </div>
                <table v-if="arrs[steps][4]=='table'" :style="{height:arrs[steps][5]+'px'}" class="table_public1" >
                    <tr v-for="(item,i) of arrs[steps][6]" :key="i ">
                        <td v-for="(secend,k) of item" :key="k">{{secend}}</td>
                    </tr>
                </table>
                <table v-if="arrs[steps][11]==7" class="TableDj">
                    <tr v-for="(item,i) of arrs[steps][12]" :key="i">
                        <td v-for="(secend,k) of item" :key="k">{{secend}}</td>
                    </tr>
                </table>
                <div v-if="arrs[steps][7]=='btn'" class="btnAll_public1">
                    <button v-for="(item,i) of arrs[steps][8]" :key="i">{{item}}</button>
                    <p>共<span>{{arrs[steps][9]}}</span>条</p>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import toastPublic from './children/toastPublic2Child.vue'
import toastPublic2 from './children/toastPublic2Child2.vue'
import img from "../../assets/tc/close.png"; 
export default {
    data() {
        return {
            value1: '',//开始日期
            value2: '',//结束日期
            pickerOptions1:{},//结束日期配置,
            steps:0,
            tabSelect:0,
            bdiv:0,
        }    
    },
    methods:{
        tabChange:function(index,e){
            var el=e.target;
            var xiongdis=el.parentNode.children;
            for(var i=0;i<xiongdis.length-1;i++){
                xiongdis[i].style.color="#999999";
                el.style.color="#000";
            }
            this.tabSelect = index
        },
        closeAll(){
            this.$store.commit("changeToastZjFalse");
            this.steps=0;
        },
        //日历
        change() {
            // console.log(this.value1);
        },
        focus(time) {
            let aa = new Date(this.value1).getTime()
            this.pickerOptions1 = {
            disabledDate(time) {
                    return time.getTime() < aa
                },
            }
        },
        disabledDate(time) {
                return time.getTime() > new Date(value1).getTime()
            },
        stepsUp(){
            if(this.steps<this.arrs.length-1){
                this.steps++;
            }else{
                this.$store.commit("changeToastZjFalse");
                this.steps=0;
            }
        },
        Tscroll($even){
            var wcjy=document.getElementsByClassName("wcjy_public1")
            if($even.target.scrollHeight-$even.target.scrollTop<405){
                wcjy[0].disabled=false;
                wcjy[0].style="background-color:#9e0000";
            }else{
                wcjy[0].disabled=true;
                wcjy[0].style="background-color:#f6f6f6";
            }
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
        },
        changeBorder(e){
            var el=e.target.parentNode.parentNode.childNodes;
            document.querySelectorAll("span[class='icon']").forEach((item,key)=>{
                item.style.border='2px solid #eeeeee'
            })
            e.currentTarget.style.cssText="border:#9e0100 2px solid"
        },
        changeJeBorder(e){
            var el=e.target.parentNode.parentNode.childNodes;
            document.querySelectorAll("button[class='inputjes']").forEach((item,key)=>{
                item.style.border='2px solid #eeeeee'
            })  
            e.currentTarget.style.cssText="border:#9e0100 2px solid"
            var je=e.currentTarget.innerHTML;
            je=je.substring(0, je.length-1);
            var srje=document.getElementsByClassName("srje");
            srje[0].value=je;
        },
        showDifer(e){
            if(e.target.innerHTML=="普通发布"){
                this.bdiv=1;
                e.target.className="topTabed";
                e.target.parentElement.previousElementSibling.children[0].className="topTab";
            }else{
                this.bdiv=0;
                e.target.className="topTabed"
                e.target.parentElement.nextElementSibling.children[0].className="topTab";
            }
        }    
    },
    props: {
        arrs:{
            type:Array,
            required:true,
        },
    },
    components:{
        toastPublic,
        toastPublic2  
    },
    created() {
    },
}
</script>
<style scopednpm>
    .afterLine{
        content:"";
        display: block;
        height: 2px;
        background-color: #f6f6f6;
        width: 704px;
        position: absolute;
        bottom: -4px;
        left: 0;
    }
    #after{
        transition: .5s;
        content:'';
        display: block;
        height: 2px;
        background-color: #9e0100;
        position: absolute;
        bottom: -4px;
        left: 0;
    }
    .toast_public1{
        width: 100%;
        height: 100%;
        background-color: rgba(00,00,00,0.7);
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }
    .contant_public1{
        background-color:#fff;
        margin: 0 auto;
    }
    .topname_public1{
        width: 100%;
        height:40px;
        box-sizing: border-box;
        padding-left: 3%;
        padding-right: 3%;
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
    }
    .topTitle_public1{
        width: 95%;
        height: 20px;
    }
    .topIcon_public1{
        display: inline-block;
        width: 4px;
        height: 16px;
        background-color: #9e0100;
        position: relative;
        top: -2px;
    }
    .title_public1{
        position: relative;
        top: -25%;
        margin-left: 1%;
        font-style: normal;
    }
    .close_public1{
        width: 14px;
        height: 14px;
        margin-top: 0.6%;
        cursor: pointer;
    }
    .contants_public1{
        width: 100%;
        height: 85%;
        padding-left: 16px;
        box-sizing: border-box;
    }
    .programmeAll_public1{
        width: 100%;
        height: 100%;
        padding-top: 3%;
    }
    .programmeAll_public1>div+div{
        margin-top: 2.5%;
    }
    .btn_public1{
        width: 50%;
        height: 38px;
        display: block;
        margin: 0 auto;
        border: 0px;
        color: #fff;
        background-color: #9e0100;
    }
    .ColorRed{
        font-weight: bold;
        color: #9e0100;
        margin-left: 16px;
        cursor: pointer;
    }
    .fontFive{
        /* margin-right: 0px; */
        width: 18%;
        display: inline-block;
    }
    .fontFour{
        /* margin-right: 16px; */
        width: 18%;
        display: inline-block;
    }
    .fontThree{
        /* margin-right: 32px; */
        width: 18%;
        display: inline-block;
    }
    .fontTwo{
        /* margin-right: 48px; */
        width: 18%;
        display: inline-block;
    }
    .icon{
        padding: 8px 12px 8px 12px;
        border: 2px solid #eeeeee;
        border-radius: 2px;
        color: #444444;
    }
    .icon+.icon{
        margin-left: 8px;
    }
    .icon>img{
        margin-right: 6px;
        position: relative;
        top: 2px;
    }
    .input{
        width: 150px;
        height: auto;
        min-height: 30px;
        border: 1px solid #eeeeee;
        padding-left: 4px 0 4px 8px;
    }
    .table_public1{
        width: 100%;
        display: block;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .table_public1>tr{
        padding:8px 0px 8px 0px;
        display: flex;
        justify-content: space-between;
        text-align: center;
    }
    .table_public1>tr>td{
        display: block;
        width: 16%;
        height: 36px;
        line-height: 36px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;/*文本不换行*/
    }
    .btnAll_public1{
        padding:32px 32px 0 0;
        display: flex;
        justify-content: flex-end;
    }
    .btnAll_public1>button{
        width: auto;
        height: auto;
        border: 1px solid #eeeeee;
        box-sizing: border-box;
        background-color: #fff;
        color: #666666;
        cursor: pointer;
        padding:4px 8px;
    }
    .btnAll_public1>button+button{
        border-left: 0px;
    }
    .btnAll_public1>button+p{
        margin-left: 12px;
    }
    .btnAll_public1>button+p>span{
        padding: 0 4px 0 4px;
    }
    .rl{
        width: 100%;
        height:auto;
        display: flex;
        padding:8px 0;
    }
    .block_public1{
        margin-left: 16px;
    }
    .block_public1>div>input{
        height: 30px;
    }
    .BlockBut_public1{
        width: auto;
        height: auto;
        margin-left: 16px;
        line-height: 26px;
        background-color: #9e0100;
        color: #fff;
        border: 0;
        display: flex;
        align-items: center;
        padding:4px 8px;
    }
    .BlockBut_public1>img{
        width: 14px;
        height: 14px;
        flex-shrink: 0;
        margin: 0 4px;
        /* margin-right: 4px;
        position: relative;
        top: 2px; */
    }
    .selecteds{
        width: 72px;
        height: 26px;
        color: #fff;
        display: block;
        line-height: 26px;
        background-color: #9e0100;
    }
    .select{
        width: 72px;
        height: 26px;
        color: #9e0100;
        display: block;
        
        background-color: #fff;
        box-sizing: border-box;
        border: 1px solid #9e0100;
    }
    .hang{
        display: flex;
        justify-content: space-between;
    }
    .fzDiv{
        display: inline-block;
        border: 1px solid #eeeeee;
        padding: 2px 4px;
    }
    .flexBTNS{
        display: flex !important;
    }
    .flexBTNS>span:nth-child(n+3){
        margin-left: 16px;
    }
    .flexBTNS>span:not(:first-child){
        width: 100px;
        text-align: center;
    }
    .fontFourS{
        width: 132px;
        height: 26px;
        box-sizing: border-box;
        border: 1px solid #eeeeee;
    }
    textarea{
        resize:none;
        margin-left: 16px;
    }
    .arrsBidv_public1{
        display: flex;
        border-bottom: 1px solid #bbbbbb;
    }
    .arrsBidv_public1>div+div{
        margin-left: 8px;
    }
    .topTabed{
        width: 65px;
        height: 35px;
        color: #9e0100;
        position: relative;
        top: 1px;
        border-bottom: 2px solid #9e0000;
        box-sizing: border-box;
    }
    .topTab{
        width: 65px;
        height: 35px;
        position: relative;
        top: 1px;
        color: #bbbbbb;
    }
    .topBorder{
        display: flex;
        justify-content: space-between;
        padding-top: 8px;
        border-top: 1px solid #bbbbbb;
    }
    .topBorder>span{
        color: #bbbbbb;
    }
    .contantBG{
        background-color: #fafafa;
        padding: 8px;
        box-sizing: border-box;
    } 
    .contantBG>p:nth-child(2){
        width: 100%;
        height: 65%;
        color: #999999;
        overflow: hidden;
    }
    .contantBG>p:first-child{
        color: #555555;
        display: flex;
        justify-content: space-between;
    }
    .AllDiv_public1{
        display: flex;
        flex-flow:row wrap;
        overflow: hidden;
    }
    .AllDiv_public1>div{
        margin-right: 8px;
    }
    .AllDiv_public1>div:nth-child(n+3){
        margin-top: 10px;
    }
    .yeshu_public1{
        width: 100%;
        height: 60px;
        display: flex;
        box-sizing: border-box;
        padding-top: 12px;
    }
    .yeshu_public1>span{
        width: 30px;
        height: 30px;
        border-radius: 15px;
        text-align: center;
        line-height: 30px;
        display: block;
        font-size: 16px;
        color: #000;
    }
    .yeshu_public1>.selecteSpan_public1{
        background-color: #e6e6e6;
    }
    .yeshu_public1>span+span{
        margin-left: 8px;
    }
    .inputjes{
        width: auto;
        height: auto;
        border: 2px solid #eeeeee;
        color: #000;
        background-color: #fff;
        margin-right: 8px;
        padding: 0 4px;
    }
    .AllInputs_public1{
        display: flex;
    }
    .AllInputs_public1>div{
        width: auto;
    }
    .AllInputParent_public1{
        display: flex;
        flex-wrap: wrap;
    }
    .InputsLast_public1{
        width: 75px;
        height: 26px;
        box-sizing: border-box;
    }
    .LastWc_public1{
        margin: 0 auto;
        text-align: center;
        margin-bottom: 16px;
    }
    .LastWc_public1>img{
        margin-bottom: 16px;
    }
    .LastWc_public1>span{
        font-size: 24px;
        color: #9e0100;
    }
    .TableDj{
        margin-top: 16px;
    }
    .TableDj>tr{
        width: 100%;
        padding-left: 16px;
        display: flex;
        justify-content: space-between;
    }
    .TableDj>tr>td{
        text-align: center;
    }
    .TableDj>tr>td:nth-child(even){
        padding-right: 16px;
        color: #9e0100;
        font-weight: bold;
    }
    .TableDj>tr>td:not(:last-child):nth-child(even){
        margin-right: 200px;
    }
    .qe2b62e{
        color: #e2b62e;
    }
    .q68d0da{
        color: #68d0da;
    }
    .qbbbbbb{
        color: #bbbbbb;
    }
    .q9e0000{
        color: #9e0000;
    }
    .q999999{
        color: #999999;
    }
    .next_public1{
        width: 20px;
        height: 20px;
        border: 0;
        border-radius: 10px;
        display: inline-block;
        background-color: #9e0100;
    }
    .next_public1>img{
        position: relative;
        left: 8px;
    }
    .alss_public1{
        display: flex;
        overflow: hidden;
        width: 690px;
        box-sizing: border-box;
    }
    .borderTop{
        width: 100%;
        margin-bottom: 26px;
        border-top: 1px solid #eeeeee;
    }
    .alssP_public1{
        display: flex;
        justify-content: space-between;
        padding: 0 8px 0 8px;
    }
    .alssDiv_public1{
        border: 1px solid #eeeeee;
        margin-right: 12px;
    }
    .fwsmc_public1{
        width: 100%;
        display: flex;
        padding-right: 16px;
        box-sizing: border-box;
        justify-content: space-between;   
    }
    .fwsmc_public1>div:first-child{
        width: 60%;
    }
    .fwsmc_public1>div:first-child>p:first-child{
        margin-left: 0;
    }
    .fwsmc_public1>div:first-child>p:nth-child(2){
        display: flex;
    }
    .fwsmc_public1>div:first-child>p:nth-child(2)>span:first-child{
        float: left;
    }
    .fwsmc_public1>div:first-child>p:nth-child(2)>span:last-child{
        width: 310px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:4;
        -webkit-box-orient:vertical;
        color: #999999;
    }
    .fwsmc_public1>div:first-child>p:not(:first-child){
        margin-top: 16px;
    }
    .tbsj_public1{
        display: flex;
        height: 24px;
    }
    .tbsj_public1>p{
        line-height: 24px;
    }
    .xzSpan_public1+.xzSpan_public1{
        margin-left: 16px;
        padding-left: 16px;
        border-left: 1px solid #eeeeee;
    }
    .xzSpan_public1>a{
        text-decoration: underline ;
    }
    .xy_public1>p>span{
        color: #9e0000;
    }
    .xy_public1>p{
        font-size: 16px;
    }
    .xy_public1>div{
        display: flex;
        margin-top: 30px;
    }
    .xy_public1>div>div{
        width: 594px;
        height: 400px;
        padding: 15px;
        box-sizing: border-box;
        background-color: #f6f6f6;
        overflow-y:scroll;
    }
    .xy_public1>div>div>p:first-child{
        font-size: 20px;
        color: #9e0000;
        text-align: center;
        margin: 35px 0 19px 0;
    }
    .xy_public1>div>div>p:not(:first-child){
        font-size: 14px;
        color: #666666;
        text-indent:2em; 
    }
    .paddingLeftNull{
        text-indent: 0em !important;
    }
    .xy_public1>button{
        width: 410px;
        height: 42px;
        text-align: center;
        line-height: 42px;
        border: 0px;
        box-sizing: border-box;
        margin-top: 48px;
        margin-left: 155px;
        border-radius: 21px;
        color: #fff;
        background-color:#dddddd;
    }
    [v-cloak] {
        display: none;
    }
    .fontColor9{
        color:#999999;
    }
    .bottomTabSpan_public1{
        padding-right: 16px;
        padding-bottom: 4px;
        cursor: pointer;
        color: #999999;
    }
    .bottomTabSpan_public1:first-child{
        padding-left: 16px;
        color: #000;
    }
    .toastpublic1{
        width: 140px;
        height: 140px;
        border: 1px dashed #999999;
    }
    .uploadPICS{
        width:100%;
        height:165px;
        border-bottom:1px solid #999999;
        overflow:hidden;
        display:flex;
        margin-top: 20px;
    }
    .uploadPICS>div>div>img{
        padding:46px 49px;
    }
    .uploadPICS>img{
        width:140px;
        height:140px;
        margin-right:16px;
    }
    .uploadPICS+p{
        margin-top: 8px;
    }
    .uploadPICSLastp{
        margin-left: 500px;
        margin-top: 8px;
    }
    .jyxm{
        display: inline-block;
        width: 50%;
    }
    .jyxm:nth-child(n+3){
        margin-top: 30px;
    }
    .jyxm>span{
        float: left;
        line-height: 21px;
    }
    .jyxm>span:last-child{
        display: inline-block;
        width: 200px;
    }
    .progressThreeFWNR>span:first-child{
        float: left;
    }
    .progressThreeFWNR>span:nth-child(2){
        width: 550px;
        display: inline-block;
    }
    .progressThreeJXQRS>span:first-child{
        float: left;
    }
    .progressThreeJXQRS>span:not(:first-child):not(:last-child){
        width: 550px;
        display: inline-block;
    }
    .progressThreeJXQRS>span:not(:first-child):not(:last-child):nth-child(n+3){
        width: 590px;
        margin-left: 101px;
        margin-top: 4px;
    }
    .progressThreeLastQZ{
        margin-top: 30px;
    }
    .progressThreeLastQZ>p{
        margin-top: 8px;
        padding-left: 65%;
    }
    .el-input__icon{
        line-height: 27px !important;
    }
    .selectOption{
        width:160px;
        height:32px;
        border: 1px solid #eeeeee;
    }
    .bannerSearch{
        width: 98%;
        height: 300px;
        text-align: center;
    }
    .bannerSearch>label>h1{
        margin-top: 60px;
    }
    .bannerSearch>label>input{
        width: 640px;
        height: 55px;
        margin-top: 32px;
        margin-left: 21px;
        border-radius: 10px;
        padding-left: 16px;
        box-sizing: border-box;
        border: 1px solid #999;
    }
    .bannerSearch>label>img{
        position: relative;
        left: -48px;
        top: 6px;
    }
    @media screen and (max-width: 415px) {
        .contant_public1{
            width: 94% !important;
        }
        .contants_public1{
            width: 100%;
            height: 90%;
        }
        .media_zffs{
            display: flex;
            flex-wrap: wrap;
            height: 40px !important;
        }
        .media_zffs>span:nth-child(4){
            margin-left: 25%;
            margin-top: 8px;
        }
        .icon{
            padding: 8px;
        }
        .AllInputs_public1{
            width: 74%;
        }
        .programmeAll_public1{
            overflow: scroll;
        }
        .table_public1{
            width: auto;
            overflow: scroll;
        }
        .btnAll_public1{
            position: fixed;
            left: 45%;
        }
        .BlockBut_public1{
            min-width: 64px !important;
        }
        .media_xqmc{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
        .media_xqmc>span:nth-child(n+2){
            margin-top: 16px;
        }
        .media_textarea{
            display: flex;
        }
        .media_textarea>textarea{
            width: 260px !important;
        }
        .media_sjed{
            display: flex;
            flex-wrap: wrap;
        }
        .media_sjed>span:nth-child(3){
            margin: 16px 26% 0 0 !important;
        }
        .LastWc_public1>span{
            font-size: 17px;
        }
        .TableDj{
            width: auto;
        }
        .TableDj td{
            height: 16px;
            width: 130px;
            word-wrap: none;
        }
        .TableDj>tr>td:not(:last-child):nth-child(even){
            margin-right: 0px;
            width: 60px;
        }
        .contant_public1{
            width: 100%;
            box-sizing: border-box;
        }
        .AllDiv_public1{
            width: 100% !important;
            display: block;
            overflow-y: scroll;
        }
        .AllDiv_public1>div{
            margin-top: 8px;
        }
    }
</style>