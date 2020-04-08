<template>
    <div>
        <div class="complete">
        <router-view></router-view>
        </div>
    </div>
</template>
<script>
/*
     import header_ from '@/components/public/头部'
    import footer_ from '@/components/public/底部'
    export default {
        components: {
            header_,
            footer_,
        },
        data(){
        	return{
                //外步骤条初始坐标(0,1,2,3----选择注册身份，完善注册信息，完善安全设置，注册完成)
                tabSelect:0,
                shenfen:0
           }
        },
        
    }
    */
</script>

<!--这个style是单独拎出来修改父级样式的-->
<style>
	.complete{
        background-image:url(../../assets/imgs/loginba.png);
        display:flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        padding: 50px 0
    }
</style>