<template>
    <div class='logo-message'>
         <div class='navInfo'>
             <span>我的主页</span>
             <span><img src="@/assets/imgs/servers/icon1.png" alt=""></span>
             <span>我的信息</span>
             <span><img src="@/assets/imgs/servers/icon1.png" alt=""></span>
             <span>注册信息完善</span>
         </div>
         <div class='main-content'>
            <div class='nav-list'>
                <ul>
                    <li>工商信息</li>
                    <li>股东信息</li>
                    <li>企业信息</li>
                    <li>经营状况</li>
                    <li>业务状况</li>
                    <li>发展规划</li>
                </ul>
            </div>
            <div class='item-list'>
                <div class='item1 item'>
                    <div class=''>
                        <span class='title'>企业简介</span>
                        <span class='i-content-big'></span>
                    </div>
                    <div>
                         <span class='title'>组织架构</span>
                        <span class='i-content-big'></span>
                    </div>
                </div>
                <div class='item2 item'>
                    <div>
                         <span class='title'>企业简介</span>
                        <span class='i-content-big'></span>
                    </div>
                    <div>
                        <span class='title'>架构图上传</span>
                        <div class='i-upload'>、
                            <span></span>
                            <img src="@/assets/imgs/reUpload.png" alt="">
                        </div>
                    </div>
                </div>
                <div class='item3 item'>
                    <div class=''>
                        <div class='left-part'>
                           <span class='title'>企业规模</span>
                           <span class='i-content-small'>大型企业</span>
                        </div>
                        <div class='right-part'>
                            <span class='title'>人员规模</span>
                            <span class='i-content-small'>200</span>
                        </div>
                    </div>
                    <div>
                        <span class='title'>参保人数</span>
                        <span class='i-content-small'>186</span>
                    </div>
                </div>
                <div class='item4 item'>
                    <div>
                        <span class='title'>董监高</span>
                        <div class=''>
                            <div class='top-part'>
                                <span class='i-content-small-s'>姓名</span>
                                <span class='i-connect'></span>
                                <span class='i-content-small-s'>执行董事</span>
                                <span class='i-connect'></span>
                                <span class='i-content-small-s telephone'>18354632245</span>
                            </div>
                            <div class='bottom-part'>
                                 <span class='i-content-small-s'>姓名</span>
                                <span class='i-connect'></span>
                                <span class='i-content-small-s'>总经理</span>
                                <span class='i-connect'></span>
                                <span class='i-content-small-s telephone'>18354632245</span>
                            </div>
                            <div class='add-person'>
                                <img src="@/assets/imgs/add-person.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class='item5 item'>
                    <div>
                        <span class='title'>管理层</span>
                        <div class=''>
                            <div class='top-part'>
                                <span class='i-content-small-s'>姓名</span>
                                <span class='i-connect'></span>
                                <span class='i-content-small-s'>总经办</span>
                                <span class='i-connect'></span>
                                <span class='i-content-small-s'>经理</span>
                            </div>
                            <div class='bottom-part'>
                                 <span class='i-content-small-s'>姓名</span>
                                <span class='i-connect'></span>
                                <span class='i-content-small-s'>总经办</span>
                                <span class='i-connect'></span>
                                <span class='i-content-small-s '>副经理</span>
                            </div>
                            <div class='add-person'>
                                <img src="@/assets/imgs/add-person.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class='item6 item' >
                   <div>
                        <span class='title'>企业愿景</span>
                        <span class='i-content-middle'>愿景的内容</span>
                   </div>
                   <div>
                       <span class='title'>企业使命</span>
                       <span class='i-content-middle'>使命的内容</span>
                   </div>
                </div>
                <div class='item7 item' >
                   <div>
                        <span class='title'>价值观</span>
                        <span class='i-content-middle'>价值观的内容</span>
                   </div>
                   <div>
                       <span class='title'>经营理念</span>
                       <span class='i-content-middle'>经营理念的内容</span>
                   </div>
                </div>
                <div class='item8 item'>
                    <span class='logo'>公司LOGO</span>
                    <span class='i-upload'></span>
                    <img src="@/assets/imgs/reUpload.png" alt="">
                </div>
            </div>
            <div class='btn'>
                <div class='btn-edit'>修改</div>
                <div class='btn-save'>保存</div>
            </div>
         </div>
         </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
    .logo-message{
        margin:100px 209px;
        padding:0px 10px;
    }
    .logo-message .navInfo span{
       margin-left:10px;
       color:#4a4a4a; 
    }
    .logo-message .main-content{
        margin-top:50px;
    }
    .main-content .nav-list{

    }
    .main-content .nav-list ul li{
        display: inline-block;
        padding-right:30px;
        color:#999999;
        padding-bottom:10px;
        border-bottom: 2px solid #dddddd;
        cursor: pointer;
    }
   .main-content .nav-list ul li:hover{
        border-bottom: 2px solid #9e0100;
    }
    .main-content .item-list{
         margin-top:30px;
    }
    .item-list .item{
        
    }
    .item-list .item span{
        display: inline-block;
    }
     .item-list .item > div{
         display: inline-block;
         
    }
    .item-list .item .title{
       
    }
    .item-list .item .i-content-big{
        width:100%;
        height: 100px;
        background: #f6f6f6;
    }
</style>