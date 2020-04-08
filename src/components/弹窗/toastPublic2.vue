<template>
<!-- -->
    <div class="toast_popup" v-show="isshwo">
        <div class="popup_main" :style="style_width_height">
            <div class="popup_main_nav">
                <font class="popup_main_title">{{title_name}}</font>
                <img src="../../assets/imgs/close.png" @click="close"/>
            </div>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
         return {
            isshwo:true,
            style_width_height:{
                "min-width":"715px",
                "min-height":"500px"
            }
         }
    },
    props:{
        value:{},
        title_name:{}
    },
    methods:{
        close(){
            this.isshwo=false
        }
    },
    mounted(){
        this.isshwo=this.value
    },
    watch:{
        value(newv,oldv){
            this.isshwo=newv
        },
        isshwo(val){
            this.$emit('input',val);
        }
    }
}
</script>
<style scopednpm>
    .toast_popup{
        position: fixed;
        width:100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(00, 00, 00, 0.5);
        display: flex;
        justify-content: center;
        align-items: center
    }
    .popup_main{
        background-color:#fff;
    }
    .popup_main_nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height:45px ;
        padding: 15px;
        box-sizing: border-box;
        background-color: #f6f6f6
    }
    .popup_main_title{
        border-left: 4px solid #9d0200;
        padding-left: 10px;
        color: #333333;
        line-height: 16px
    }
    .popup_main_nav img {
        cursor: pointer;
    }
</style>