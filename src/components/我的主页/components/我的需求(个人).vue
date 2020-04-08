<template>
     <div class="my-requirements" id="glgz">
        <p class="wodexuqiu_title">我的需求<span class="more" @click="showMore">查看更多</span></p>
        <div class="info">
            <div class='new-require' >
                <p style='padding-top:40px;'>
                 <img src="@/assets/imgs/ipad_icon.png" alt="">
                </p>
                <p style='padding-top:20px;text-align:center'><img @click="clickImgRouter" src="@/assets/imgs/re-a.png" alt=""></p>
            </div>
            <div class='require-item' v-for='item in requireList' :key='item.personId'>
                <h5 style='font-weight:600'>{{item.personResource}}</h5>
                <span class='close-icon'><img src="@/assets/imgs/close.png" alt=""></span>
                <p style='font-size:12px;color:#666666;padding:10px 0;'>{{item.createdTime}}</p>
                <div class="itemPersonBody">{{item.personBody}}</div>
                <div class='require-status'>
                   <!-- <img :src="item.statusSrc" alt=""> -->
                   <p :class="item.personStatus">{{item.personStatus}}</p>
                   <span class='plus'><img src="@/assets/imgs/plus.png" alt=""></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import simData from '@/components/js/simulatedData.js'
import Bus from '../../../bus.js'
import toastJS from '../../../data/toast.js'
import {getPersonNeeds} from "../../api/api"
export default {
    data() {
        return {
            // requireList:simData.requireList,
            requireList:[],
            toastJS,
        }
    },
    methods:{
        // showTwo(){
        //     Bus.$emit('arrs',toastJS.wdxq_ge.arrTwo)
        //     this.$store.commit("changeToastZjTrue")
        // },
        closeAll(){
            this.$store.commit("changeToastZjFalse");
        },
        // 这里是需要执行的sj事件
        /*showNext(){
            Bus.$emit('arrs',this.arrTwoOne)
        }*/
        showMore(){
            Bus.$emit('arrs',toastJS.wdxq_ge.arrThree)
            // this.$store.commit("changeToastZjTrue")
            this.$router.push("/fun/releaseXQLB")
        },
        clickImgRouter(){
            this.$router.push('/fun/releaseFBGR')
        }
        
    },
    mounted() {
        let user=JSON.parse(sessionStorage.getItem("user"));
        let that = this;
            getPersonNeeds({listType: '我的需求', indivId: user.roleId || 0, pageSize: 5}).then(res=>{
                that.requireList = res.data.data.records;
            })

  }
}
</script>

<style scoped>
    .wodexuqiu_title{
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 0px;
        color: #9e0100;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
    }
    .wodexuqiu_title span.more{
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 0px;
        color: #cccccc;
    }
    .my-requirements{
        background: #fff;
        box-sizing: border-box;
        padding: 25px;
        margin-bottom: 20px;
    }
    .my-requirements .wodexuqiu_gr_title{
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 0px;
        color: #9e0100;
        margin-bottom: 30px;
        display: flex;
        flex-direction: row-reverse;
    }
     .my-requirements .wodexuqiu_gr_title span.more{
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 0px;
        color: #cccccc;
    }
    .info{
        width:100%;
        /* display: flex;
        justify-content: space-between;
        align-items: center; */
        display: grid;
        grid-template-columns: repeat(6,16%);
        grid-column-gap:10px;
    }
    .info .new-require{
         box-sizing: border-box;
         
         background:#fafafa;
         text-align: center;
         min-height:187px;
    } 
    .info  .require-item{
        background:#fafafa;
        box-sizing: border-box;
        min-height:187px;
        margin-top:0px;
        padding:15px;
        position: relative;
    }
    .info  .require-item .close-icon{
        position: absolute;
        left:85%;
        top:20px;
    }
    .info  .require-item .require-status {
        position: relative;
        padding:0 0 10px 0;
        top:20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .info  .require-item .require-status .plus{
        padding:10px 11px;
        float: right;
        background:#eeeeee;
    }
    .itemPersonBody{
        width: 160px;
        height: 44px;
        font-size:12px;
        color:#666666;
        word-wrap:break-word;
        word-break:break-all;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
    .服务中{
        width: 50px;
        height: auto;
        padding: 4px;
        color: #68d0da;
        border: 1px solid #68d0da;
    }
    .需求中{
        width:50px;
        height: auto;
        padding: 4px;
        color: #e2b62e;
        border: 1px solid #e2b62e;
    }
    .已终止{
        width:50px;
        height: auto;
        padding: 4px;
        color: #bbbbbb;
        border: 1px solid #bbbbbb;
    }
    .已结束{
        width:50px;
        height: auto;
        padding: 4px;
        color: #9e0100;
        border: 1px solid #9e0100;
    }
    @media screen and (max-width: 415px) {
        .my-requirements{
            padding: 8px;
        }
        .wodexuqiu_gr_title{
            margin:0 0 16px 0 !important;
        }
        .info{
            /* width: 1100px; */
            overflow: scroll;
            display: flex;
        }
        .info div{
            /* 保持元素不变 */
            flex-shrink: 0;
            margin-right: 16px;
        }
        .require-item{
            width: 50%;
        }
    }
</style>