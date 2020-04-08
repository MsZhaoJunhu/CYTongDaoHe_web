<template>
    <div class="itemSubmissionPar">
        <el-row class="first_itemSubmission" type="flex" justify="start" align="middle">
            <el-col :span="24">
                <a @click="clickToRouter">
                    <i class="el-icon-arrow-left"></i>
                    服务信息
                </a>
            </el-col>
        </el-row>
        <el-row class="serverRecord">
            <el-col :span="24" class="serverRecordCenter" v-if="details.thisType==0">服务记录</el-col>
            <el-col :span="24" class="serverRecordCenter" v-if="details.thisType==1">项目阶段验收确认书</el-col>
            <el-col :span="24" class="serverRecordCenter" v-if="details.thisType==2">项目整体验收确认书</el-col>
            <el-col :span="24" class="serverRecordCenter" v-if="details.thisType==3">项目结项验收确认书</el-col>
            <el-col :span="24" class="technologicalProcess">
                <div>服务确认流程</div>
                <div>
                    <div>
                        <div :class="details.serverStatus==1?'activeNow':'active'">
                            <div>
                                <div class="middleCircular"></div>
                                <div class="grayLine"></div>
                            </div>
                            <p>提交</p>
                            <p>{{corpName}}</p>
                            <p>2017-10-01 12:00</p>
                        </div>
                        <div :class="details.serverStatus==2?'active':''">
                            <div>
                                <div class="middleCircular"></div>
                                <div class="grayLine"></div>
                            </div>
                            <p v-show="details.serverStatus==2">确认</p>
                            <p v-show="details.serverStatus==2">{{corpName}}</p>
                            <p v-show="details.serverStatus==2">2017-10-01 12:00</p>
                        </div>
                        <div :class="details.serverStatus==2?'active':''">
                            <div>
                                <div class="middleCircular"></div>
                                <div class="grayLine"></div>
                            </div>
                            <p v-show="details.serverStatus==2">审核</p>
                            <p v-show="details.serverStatus==2">{{corpName}}</p>
                            <p v-show="details.serverStatus==2">2017-10-01 12:00</p>
                        </div>
                        <div :class="details.serverStatus==2?'activeNow':''">
                            <div>
                                <div class="middleCircular"></div>
                            </div>
                            <p v-show="details.serverStatus==2">已完成</p>
                            <p v-show="details.serverStatus==2">{{corpName}}</p>
                            <p v-show="details.serverStatus==2">2017-10-01 12:00</p>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="24">
                <div>基本内容</div>
                <div>
                    <div v-show="details.thisType==0||details.thisType==1">
                        <div>里程碑事件名：</div>
                        <span>{{title}}</span>
                    </div>
                    <div v-show="details.thisType==2">
                        <div>里程碑事件名：</div>
                        <span>整体验收确认</span>
                    </div>
                    <div v-show="details.thisType==0">
                        <div>服务主题：</div>
                        <span>{{details.serverMajor}}</span>
                    </div>
                    <div v-show="details.thisType==3">
                        <div>项目经理：</div>
                        <span>{{details.projectManager}}</span>
                    </div>
                    <div v-show="details.thisType==3">
                        <div>申请时间：</div>
                        <span>{{details.createdTime}}</span>
                    </div>
                    <div v-show="details.thisType==3">
                        <div>整体验收时间：</div>
                        <span>{{details.allTime}}</span>
                    </div>
                    <div v-show="details.thisType==3">
                        <div>质保期：</div>
                        <span>{{details.qualityTime}}</span>
                    </div>
                    <div v-show="details.thisType==3">
                        <div>质保期承诺：</div>
                        <span>{{details.qualityPromisee}}</span>
                    </div>
                    <div v-show="details.thisType==3">
                        <div>致：</div>
                        <span>需求方名称（甲方）我司已按合同要求完成相关服务内容，所有输出成果已向贵司提交，经三方（平台）评审，请给予验收。</span>
                    </div>
                    <div v-show="details.thisType==0||details.thisType==1||details.thisType==2">
                        <div>服务时间：</div>
                        <span>{{details.serverTime}}</span>
                    </div>
                    <div v-show="details.thisType==0">
                        <div>服务地点：</div>
                        <span>{{details.serverAddress}}</span>
                    </div>
                    <div v-show="details.thisType==0">
                        <div>参与人员：</div>
                        <span>{{details.serverPeopel}}</span>
                    </div>
                    <div v-show="details.thisType==1||details.thisType==2">
                        <div>公司参与人员：</div>
                        <span>{{details.serverPeopel}}</span>
                    </div>
                    <div v-show="details.thisType==1||details.thisType==2">
                        <div>项目小组人员：</div>
                        <span>{{details.serverProgrammer}}</span>
                    </div>
                    <div v-show="details.thisType==0||details.thisType==1||details.thisType==2">
                        <div>服务内容：</div>
                        <span>{{details.serverContent}}</span>
                    </div>
                    <div v-show="details.thisType==0||details.thisType==1||details.thisType==2">
                        <div>输出成果：</div>
                        <span>{{details.serverOut}}</span>
                    </div>
                    <div v-show="details.thisType==1||details.thisType==2">
                        <div>上传附件：</div>
                        <span>
                            <span class="downloadFile" v-for="(item,index) in serverFile" :key="index">
                                <i class="el-icon-folder-opened"></i>
                                <span>附件</span>
                                <a :href="base+item">下载</a>
                            </span>
                        </span>
                    </div>
                    <div v-show="details.thisType==1||details.thisType==2">
                        <div>特别说明：</div>
                        <span>以上服务内容确认完毕，即代表甲方针对上述服务阶段/服务内容的确认完毕，如甲方对输出成果还有疑虑，项目组将根据甲方意见，结合自己的专业判断对该方案进行修订完善并对实施情况做出跟踪辅导，如还有任何疑问，请向同道合平台进行反馈或投诉，在此也感谢甲方对乙方以及同道合平台的支持和配合</span>
                    </div>
                    <div v-show="details.thisType==0">
                        <div>亟待解决问题：</div>
                        <span>{{details.serverProblem}}</span>
                    </div>
                    <div v-show="false">
                        <div>上传附件：</div>
                        <span>
                            <span class="downloadFile" v-for="(item,index) in outFile" :key="index">
                                <i class="el-icon-folder-opened"></i>
                                <span>附件</span>
                                <a :href="base+item">下载</a>
                            </span>
                        </span>
                    </div>
                </div>
            </el-col>
            <el-col :span="24" v-show="details.thisType==0">
                <div>下阶段服务计划</div>
                <div>
                    <div>
                        <div>服务时间：</div>
                        <span>{{details.nextTime}}</span>
                    </div>
                    <div>
                        <div>服务主题：</div>
                        <span>{{details.nextMajor}}</span>
                    </div>
                    <div>
                        <div>输出成果：</div>
                        <span>{{details.nextOut}}</span>
                    </div>
                </div>
            </el-col>
            <el-col :span="24" v-show="details.thisType==0">
                <div>其他</div>
                <div>
                    <div>
                        <div>上传附件：</div>
                        <span>
                            <span class="downloadFile" v-for="(item,index) in serverFile" :key="index">
                                <i class="el-icon-folder-opened"></i>
                                <span>附件</span>
                                <a :href="base+item">下载</a>
                            </span>
                        </span>
                    </div>
                    <div>
                        <div>现场照片上传：</div>
                        <div class="allPicPar">
                            <div>
                                <img src="../../../assets/itemSubmission/scenePic.png" alt="">
                            </div>
                            <div>
                                <img src="../../../assets/itemSubmission/scenePic.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="24" v-show="details.thisType==0||details.thisType==1||details.thisType==2||details.thisType==3">
                <div>审核意见</div>
                <div>
                    <div>
                        <div>甲方确认意见：</div>
                        <span></span>
                    </div>
                    <div>
                        <div>平台审核意见：</div>
                        <span>经审核，该项目：1、服务计划按时推进；2、符合三方合同要求；3、所有提交的文档、资料符合要求综上所述，该项目审核通过可以验收</span>
                    </div>
                </div>
            </el-col>
            <!-- 仅企业会员显示 -->
            <el-col :span="24" class="serverRecordCenter" v-if="userRole==0&&QYHYconfirmServerValue!=2">
                <button @click="drawer = true">服务确认</button>
            </el-col>
        </el-row>
        <el-drawer title="管理收货地址" class="elDrawer" :visible.sync="drawer" size="300px" :direction="direction" :before-close="handleClose">
            <div class="elDrawerPar">
                <div>
                    <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="message">
                    </el-input>
                </div>
                <div class="allButtons">
                    <button @click="drawer = false">取消</button>
                    <button @clikc="QYHYconfirmServer">确认</button>
                </div>
            </div>
        </el-drawer>
    </div>
</template>
<script>  
import { 
    serverItem,
    confirmServer
} from "@/components/api/api";
    export default{
        data () {
            return {
                //获取href传过来的参数
                type:this.$route.query.type,
                serverId:this.$route.query.serverId,
                contractId:this.$route.query.contractId,
                title:this.$route.query.title,
                corpName:this.$route.query.corpName,
                details:"",
                base: "http://42.51.16.10:8080/file/",
                serverFile:"",
                serverImg:"",
                QYHYconfirmServerValue:"",
                userRole:"",
                drawer:false,
                direction:"btt",
                message:"",
                outFile:"",
            }
        },
        methods: {
            clickToRouter(){
                this.$router.push({path:"itemSubmission",query:{"contractId":this.contractId}})
            },
            QYHYconfirmServer(){
                confirmServer(this.serverId,{"serverResult":this.message}).then(res => {
                    // 差一个提示弹窗
                    if (res.data.code === 200) {
                        this.clickToRouter();
                    }
                });
            },
            handleClose(done){
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                .catch(_ => {});
            },
        },
        components: {
            
        },
        mounted () {
            let user = JSON.parse(sessionStorage.getItem("user"));
            this.userRole=user.role
            serverItem({"serverId":this.serverId}).then(res => {
                console.log(res.data.data)
                if (res.data.code === 200) {
                    this.details=res.data.data
                    this.message=this.details.serverResult
                    if(this.details.serverFile){
                        this.serverFile = this.details.serverFile.match('[^/]+(?!.*/)');
                    }
                    if(this.details.outFile){
                        this.outFile = this.details.outFile.match('[^/]+(?!.*/)');
                    }
                    if(this.details.serverStatus==2){
                        this.QYHYconfirmServerValue=2
                    }
                }
            });
        }
    }
</script>
<style scoped>
    .itemSubmissionPar{
      width: 80%;
      height: auto;
      margin: 0 auto;
      padding-bottom: 4rem;
      position: relative;
    }
    .first_itemSubmission{
      height: 80px;
    }
    .first_itemSubmission a{
      color: #9e0000;
      font-size: 18px;
    }
    .first_itemSubmission a>i{
      font-weight: bold;
    }
    .serverRecord{
        background-color: #fff;
        box-sizing: border-box;
        padding: 3rem 2rem;
    }
    .serverRecordCenter{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 34px;
        margin-bottom: 4rem;
    }
    .serverRecord>div:not(:first-child)>div:first-child{
        font-size: 19px;
        font-weight: bold;
        margin-bottom: 2rem;
        margin-top: 2rem;
    }
    .serverRecord>div:not(:first-child)>div:last-child>div{
        margin: 1rem 0;
        display: flex;
    }
    .serverRecord>div:not(:first-child)>div:last-child>div+div{
        margin-top: 2rem;
    }
    .serverRecord>div:not(:first-child)>div:last-child>div:last-child{
        margin-bottom: 2rem;
    }
    .serverRecord>div:not(:first-child)>div:last-child>div>div:first-child{
        min-width: 130px;
        width: auto;
        white-space: nowrap;
        color: rgb(77, 77, 77);
    }
    .serverRecord>div:not(:first-child)>div:last-child>div>*{
        color: rgb(77, 77, 77);
    }
    .serverRecord>div:nth-child(2)>div:first-child{
        margin-bottom: 0;
    }
    .technologicalProcess{
        display: flex;
        flex-direction: row;
    }
    .technologicalProcess>div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .technologicalProcess>div:first-child{
        font-size: 30px;
        display: inline-block;
        width: 10%;
        white-space: nowrap;
    }
    .technologicalProcess>div:last-child{
        width: 90%;
    }
    .technologicalProcess>div:last-child>div:last-child{
        display: flex;
        justify-content: center;
        margin: 2rem 0;
    }
    .technologicalProcess>div:last-child>div:first-child{
        min-width: 130px;
        width: auto;
    }
    .technologicalProcess>div:last-child>div:last-child>div>div:first-child{
        height: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .technologicalProcess>div:last-child>div:last-child>div>p{
        transform: translateX(-0.5rem);
    }
    .technologicalProcess>div:last-child>div:last-child>div>p:nth-child(2){
        line-height: 2rem;
    }
    .technologicalProcess>div:last-child>div:last-child>div>p:nth-child(n+3){
        font-size: 14px;
        color: rgb(177, 177, 177);
        line-height: 20px;
    }
    .middleCircular{
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #999;
    }
    .grayLine{
        width: 300px;
        height: 2px;
        background-color: #999;
    }
    .active>div>div:first-child{
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #9e0000;
    }
    .active .grayLine{
        background-color: #9e0000;
    }
    .activeNow>div>div:first-child{
        width: 14px;
        height: 14px;
        border-radius: 7px;
        background-color: #9e0000;
    }
    .activeNow .grayLine{
        background-color: #999;
    }
    .downloadFile{
        display: inline-block;
        width: auto;
        height: auto;
        padding: 0 1rem;
    }
    .downloadFile>i{
        font-size: 22px;
    }
    .downloadFile>span{
        margin: 0 0.5rem;
    }
    .downloadFile>a{
        color: rgb(87, 87, 87);
        text-decoration: underline;
    }
    .allPicPar{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .allPicPar>div{
        width: 110px;
        height: 110px;
        padding: 1rem;
        box-sizing: border-box;
        border: 1px dashed #999;
        border-radius: 10px;
    }
    .allPicPar>div>img{
        width: 100%;
        height: 100%;
    }
    .allPicPar>div{
        margin: 0 1rem;
    }
    .allPicPar>div:nth-child(n+10){
        margin-top: 1rem;
    }
    .serverRecordCenter>button{
        width: 400px;
        height: 40px;
        border-radius: 20px;
        background-color: #9e0000;
        color: #fff;
        border: 0;
        margin-top: 4rem;
        cursor: pointer;
    }
    .elDrawer /deep/ .el-drawer__container{
        width: 480px;
        height: auto;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-240px,-300px);
    }
    .elDrawerPar /deep/ .el-textarea__inner{
        resize: none;
        height: 80px;
        border-left: 0;
        border-right: 0;
        border-radius: 0;
    }
    .elDrawerPar>div{
        border-top: 1px solid #999;
        border-bottom: 1px solid #999;
        padding: 2rem 0;
    }
    .elDrawer /deep/ .el-drawer__header{
        margin-bottom: 1rem;
    }
    .allButtons{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-end;
        border: 0 !important;
    }
    .allButtons>button{
        width: 4rem;
        height: 2rem;
        margin: 0 1rem;
        border: 1px solid #000;
        background: #fff;
        cursor: pointer;
    }
    .allButtons>button:last-child,.allButtons>button:hover{
        background: #9e0000;
        color: #fff;
        border-color: #9e0000;
    }
</style>