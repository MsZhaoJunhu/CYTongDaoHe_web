<template>
    <div class="pinglun2222" :style="isPadding?'padding-left:50px':''">
        <div class="input_box">
            <p v-show="isShow">
                <span class="h3">用户留言</span>
                <span>文明上网理性发言，请遵守平台评价管理规则</span>
            </p>
            <div>
                <div class="pinglun-input">
                    <input type="text" />
                    <img src="@/assets/imgs/gy.jpg"/>
                </div>
                <button class="bg_red">发布</button>
            </div>
        </div>
        <div class="pinglun">
            <div class="img_head"></div>
            <div class="info">
                <h3>萌萌</h3>
                <p>
                    国企最喜欢咨询公司，我们公司一百多万请了
                    一个咨询公司，除了做了一个oa系统，其余的
                    就是把我们工资改来改去，改的现在不好拿
                    了，神烦这些人。
                </p>
                <span class="time">15分钟前</span>
            </div>
        </div>
        <div class="pinglun">
            <div class="img_head"></div>
            <div class="info">
                <h3>萌萌</h3>
                <p>
                    国企最喜欢咨询公司，我们公司一百多万请了
                    一个咨询公司，除了做了一个oa系统，其余的
                    就是把我们工资改来改去，改的现在不好拿
                    了，神烦这些人。
                </p>
                <span class="time">15分钟前</span>
            </div>
        </div>
        <button class="more bg_red">
            查看更多评论
        </button>
    </div>
</template>

<script>
    export default {
        props:{
            isShow:{
                type:Boolean,
                default:true,
            },
            isPadding:{
                type:Boolean,
                default:false,
            }
        }
    }
</script>

<style scoped>
    .pinglun2222{
        margin-top: 50px
    }
    .pinglun-input{
        display: flex;
        align-items: center;
        width:100%;
        border: 1px solid #e0e0e0
    }
    .pinglun-input input{
        border: none;
        outline: none;
        height: 46px;
    }
    .pinglun-input img{
        display:block;
        margin-right:10px;
        cursor:pointer    
    }
    .input_box{
        width: 100%;
    }
    .input_box p{
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .input_box p span{
        font-size: 14px;
        color: #8e6f6f;
    }
    .input_box p span.h3{
        font-size: 22px;
        color: #353535;
    }
    .input_box div{
        display: flex;
    }
    .input_box div input{
        width: 100%;
        padding:0 15px;
    }
    .input_box div button{
        flex-shrink: 0;
        width: 106px;
        height: 48px;
        background-color: #cdb0ae;
        border: solid 1px #cdb0ae;
        margin-left:8px;
        font-size: 18px;
        color: #fff;
    }
    .pinglun{
        display: flex;
        margin-top: 40px;
    }
    .pinglun .img_head{
        flex-shrink: 0;
        border-radius: 50%;
        height: 51px;
        width: 51px;
        background: #353535;
        margin-right: 20px;
    }
    .pinglun .info{
        display: flex;
        flex-direction: column;
    }
    .pinglun .info h3{
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #353535;
    }
    .pinglun .info p{
        background: #f8f8f8;
        font-size: 14px;
        color: #555555;
        padding:10px 15px;
        margin: 10px 0;
    }
    .pinglun .info .time{
        font-size: 14px;
        color: #a6a6a6;
    }
    .more{
        height: 41px;
        background-color: #cdb0ae;
        color: #fff;
        border: none;
        font-size: 16px;
        margin-top: 20px;
        width: 100%;
        cursor: pointer;
    }
    .bg_red:hover{
        background-color: #9e0100 ;
        cursor: pointer;
    }
</style>