<template>
    <div class="背景内容">
        <div class="dlzcwrap">
            <img src="../../../src/assets/imgs/loginleft.png"/>
            <div class="right">
                <div class="top">
                    <div>
                        <slot name="topTab"></slot>
                    </div>
                </div>
                <div class="bottom">
                    <slot></slot>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>

<style>
    .背景内容{
        background-image:url("../../../src/assets/imgs/loginba.png");
        display:flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        padding:50px 0;
        padding-top: 100px;
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
        width: 518px;
        font-size: 24px;
        color: #353535;
        /* border-bottom: 1px solid #d2d2d2; */
        display: flex;
        position: relative;
    }
    .right>.top div span{
        display: block;
        padding:1rem 0;
        width: 50%;
        box-sizing: border-box;
        cursor:pointer;
        padding-top: 0px;
    }
    .right>.top #after,.right>.top #after2,#after3{
        content:'';
        display: block;
        width: 209px;
        height: 1px !important;
        border: 0;
        background: #9e0100;
        position: absolute;
        bottom: -1px;
        left: 0;
    }
    .bottom{
        font-size: 16px;
        color: #777;
    }
    .bottom>div{
        width: 418px;
    }
    #username,#password,#sjh,#dtmsrk,#yxyzm,#zcxy,#wt1,#wt2,#xmm,#mm,#passwordsj,#passwordyx,#passwordzsj,#passwordzyx{
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
    .hqdtm,.fsyzyj{
        color: #fff;
        height: 49px;
        background-color: #9e0100;
        border: 0;
        outline:none;
        cursor:pointer;
        width: 116px;

    }
    .dtm{
        display: flex;
    }
    .dtm>.hqdtm{
        margin: 15px 0 25px 0;
    }
    .right>.top #after2{
        display: none;
    }
    @media screen and (max-width: 415px) {
        .背景内容{
            align-items: normal;
            width: 100%;
            background: url('')
        }
        .dlzcwrap>img{
            display: none;
        }
        .dlzcwrap{
            width: auto;
            height: auto;
            border-radius: 0;
            padding: 0 24px;
            box-sizing: border-box;
        }
        .right>div{
            width: 100%;
        }
        .top{
            width: 100% !important;
        }
        .top>div{
            width: 100% !important;
        }
        .top>div>span{
            font-size: 16px !important;
            padding: 0 0 16px 0 !important;
        }
        .right>.top #after{
            display: none;
        }
        .right>.top #after2,#after3{
            display: block;
            width: 180px;
        }
        .bottom>div{
            width: 100%;
        }
        .bottom>div:nth-child(2) input,#zcxy,#sjh,#wt1,#wt2{
            width: 350px !important;
        }
        .bottom>div:nth-child(2) input+img{
            left: 320px !important;
        }
        .bottom>div:nth-child(2)>label>input{
            width: 1rem !important;
            top: 3px !important;
        }
        .bottom>div:nth-child(2)>.loginbut{
            width:200px !important;
            height: 40px;
            font-size: 16px;
            margin-left: 23%;
        }
        .bottom{
            height: 600px;
        }
        .bottom>.form_reg{
            width: 100% !important;
            margin-top: 1rem !important;
        }
        .form_reg input{
            width: 350px !important;
            margin: 16px auto !important;
        }
        #agreement{
            width: auto !important;
        }
        #email_login,#sj_login,.loginbut{
            display: block;
            width:200px !important;
            height: 40px;
            font-size: 16px;
            margin-left: 23%;
        }
    }
</style>