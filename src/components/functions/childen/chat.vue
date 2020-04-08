<template>
    <div class="chatBox">
        <div class="chatTitle" :style="{height:Dheight}">
            <div class="userInfo">
                <div>
                    <img :src="user.userImg" alt="头像图标">
                    <span>{{user.userName}}</span>
                </div>
                <div>
                    <img src="../../../assets/icon/search.png" alt="搜索图标">
                    <input type="text" placeholder="搜索">
                </div>
            </div>
            <div class="messagebox" @click="changeActive(i,$event)" v-for="(item,i) in msg" :key="i">
                <img :src="item[0].imgUrl" alt="消息图标">
                <div>
                    <p><span>{{item[0].title}}</span><span :class="item[0].string=='未读'?'redSpan':''">{{item[0].timeOrnumber}}</span></p>
                    <span>{{item[0].content}}</span>
                </div>
            </div>
        </div>
        <div class="chatContent">
            <h5 v-if="isShow">{{h5Title}}</h5>
            <div v-for="(item,l) in this.msgs" :key="l" v-if="isShow">
                <div v-for="children in item[l].messages">
                    <img :src="item[l].imgURL" alt="头像">
                    <!-- <img class="PositionImg" src="../../../assets/funsIcon/right.png" alt=""> -->
                    <div v-html="children"></div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        
    },
    data() {
        return {
            Dheight:0,
            //h5标题
            h5Title:"",
            isShow:false,
            msgs:[
                [{
                    imgURL:require('../../../assets/funsIcon/megsicon1.png'),
                    messages:[
                        "html片段1<a href='#'>www.baidu.com</a>html片段1<a href='#'>www.baidu.com</a>html片段1<a href='#'>www.baidu.com</a>html片段1<a href='#'>www.baidu.com</a>html片段1<a href='#'>www.baidu.com</a>","HTML片段2","HtMl片段3"
                    ],
                }],
            ],
            //交流显示用户名称
            user:{userName:"用户名称",userImg:require('../../../assets/funsIcon/userTX.png')},
            //交流显示信息
            msg:[
                [{
                    imgUrl:require('../../../assets/funsIcon/messageIcon1.png'),
                    title:"标题",
                    content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容",
                    timeOrnumber:'2019.10.9'
                }],
                [{
                    imgUrl:require('../../../assets/funsIcon/messageIcon2.png'),
                    title:"标题",
                    content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容",
                    timeOrnumber:'4',string:'未读'
                }],
                [{
                    imgUrl:require('../../../assets/funsIcon/messageIcon3.png'),
                    title:"标题",
                    content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容",
                    timeOrnumber:'昨天'
                }],
                [{
                    imgUrl:require('../../../assets/funsIcon/messageIcon4.png'),
                    title:"标题",
                    content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容",
                }],
                [{
                    imgUrl:require('../../../assets/funsIcon/messageIcon5.png'),
                    title:"标题",
                    content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容",
                }],
                [{
                    imgUrl:require('../../../assets/funsIcon/messageIcon6.png'),
                    title:"标题",
                    content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容",
                }],
                [{
                    imgUrl:require('../../../assets/funsIcon/messageIcon7.png'),
                    title:"标题",
                    content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容",
                }],
                [{
                    imgUrl:require('../../../assets/funsIcon/messageIcon8.png'),
                    title:"标题",
                    content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容",
                }],
                [{
                    imgUrl:require('../../../assets/funsIcon/messageIcon8.png'),
                    title:"标题",
                    content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容",
                }],
                [{
                    imgUrl:require('../../../assets/funsIcon/messageIcon8.png'),
                    title:"标题",
                    content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容",
                }],
                [{
                    imgUrl:require('../../../assets/funsIcon/messageIcon8.png'),
                    title:"标题",
                    content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容",
                }],
                [{
                    imgUrl:require('../../../assets/funsIcon/messageIcon8.png'),
                    title:"标题",
                    content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容",
                }],
                [{
                    imgUrl:require('../../../assets/funsIcon/messageIcon8.png'),
                    title:"标题",
                    content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容",
                }],
                [{
                    imgUrl:require('../../../assets/funsIcon/messageIcon8.png'),
                    title:"标题",
                    content:"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容",
                }],
            ],
        }
    },
    methods: {
        changeActive(i,e){
            var el=e.currentTarget;
            //点击消息后时间显示未最后一条消息的时间  需要接口中返回的时间填充上去
            //点击未读消息的窗口后  未读显示消失
            if(el.lastElementChild.firstElementChild.lastElementChild.className=="redSpan"){
                el.lastElementChild.firstElementChild.lastElementChild.className="";
                var data=new Date();
                // var year=data.getFullYear();
                // var month=data.getMonth()+1;
                // var day=data.getDay();
                var hours=data.getHours();
                var min=data.getMinutes();
                // var OnData=year+'.'+month+'.'+day
                var OnData=hours+':'+min;
                el.lastElementChild.firstElementChild.lastElementChild.innerHTML=OnData;
            }
            var arr=document.getElementsByClassName("messagebox");
            for(var j=0;j<=arr.length-1;j++){
                arr[j].className="messagebox"
            }
            el.className+=" active";
            this.isShow=true;
            var act=document.getElementsByClassName("active")
            var title=act[0].lastElementChild.firstElementChild.firstElementChild;
            this.h5Title=title.innerHTML;
            
            //需要调用接口查询到这个客户发送的历史消息填充到msgs中
        },
    },
    created() {
        var LLQheight=document.documentElement.clientHeight;
        this.Dheight=(LLQheight-80)+`px`;
    },
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .chatBox{
        width: 100%;
        height: 100%;
        display: flex;
        box-sizing: border-box;
        /* min-width: 1400px; */
    }
    .chatTitle{
        overflow-y: scroll;
    }
    .chatTitle{
        width: 18%;
        background: #f9f9f9;
    }
    .chatContent{
        width: 82%;
        background: #fff;
    }
    .active{
        background: #fff;
    }
    .userInfo{
        width: 100%;
        height: 108px;
        box-sizing: border-box;
        padding: 16px;
    }
    .userInfo>div:first-child{
        display: flex;
        align-items: center;
        margin-bottom: 12px;
    }
    .userInfo>div:first-child>img{
        width: 40px;
        height: 40px;
        margin-right: 16px;
    }
    .userInfo>div:last-child{
        height: 28px;
        width: 100%;
        display: flex;
        align-items: center;
        background: #eeeeee;
        padding: 8px;
        box-sizing: border-box;
        border-radius: 4px;
    }
    .userInfo>div:last-child>input{
        padding-left: 8px;
        background: #eeeeee;
        border: 0;
        outline: 0;
        width: 90%;
    }
    .messagebox{
        width: 100%;
        height: 80px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding: 19px 16px;
    }
    .messagebox>div{
        width: 80%;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
    }
    .messagebox>div>span{
        width: 100%;
        overflow:hidden;
        text-overflow:ellipsis; 
        white-space:nowrap; 
        color:#bbbbbb;
    }
    .messagebox>div>p{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .messagebox>div>p>span:last-child{
        color: #bbbbbb;
        font-size: 12px;
    }
    .chatContent>h5{
        width: 100%;
        height: 108px;
        line-height: 108px;
        font-size: 24px;
        box-sizing: border-box;
        border-bottom: 1px solid #eeeeee;
        padding-left: 28px;
    }
    .chatContent>div{
        width: 100%;
        height: 100%;
        height: auto;
        padding-left: 28px;
    }
    .chatContent>div>div{
        width: 30%;
        margin-top: 40px;
        height: auto;
        display: flex;
        box-sizing: border-box;
    }
    .chatContent>div>div>img{
        height: 36px;
    }
    .chatContent>div>div>div{
        width: 100%;
        margin-left: 18px;
        background: #ffffff;
        padding: 16px 12px;
        border-radius: 8px;
        box-shadow: 0px 0px 5px #999;
    }
    .redSpan{
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 8px;
        text-align: center;
        line-height: 16px;
        background: #9e0100;
        color: #fff !important;
    }
    /* 设置滚动条的样式 */
    .chatTitle::-webkit-scrollbar {
        width: 10px;
    }
    /* 滚动槽 */
    .chatTitle::-webkit-scrollbar-track {
        border-radius: 8px;
    }
    /* 滚动条滑块 */
    .chatTitle::-webkit-scrollbar-thumb {
        border-radius: 8px;
        border: 2px solid rgba(0, 0, 0, 0);
        box-shadow: 8px 0 0 green inset;
    }
    .chatTitle::-webkit-scrollbar-thumb:hover {
        box-shadow: 8px 0 0 #666 inset;
    }
    .chatTitle::-webkit-scrollbar-thumb:window-inactive {
        display: none;
    }
    .chatTitle::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }
    .chatTitle:hover::-webkit-scrollbar {
        width: 10px;
    }
    .chatTitle::-webkit-scrollbar-thumb {
        border-radius: 10px;
        border: 2px solid rgba(0,0,0,0);
        box-shadow: 10px 0 0 #999 inset;
    } 
    .chatTitle {
        overflow-y: overlay;
        word-wrap: break-word;
    }
</style>