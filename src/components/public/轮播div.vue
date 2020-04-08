<template>
    <div class="lb_div">
        <div class="lb_div_all" v-for="(item,i) in arr" :key="i" @click="tzRourter(i)" @mouseenter="changeZjmc($event)" @mouseleave="changeZj($event)">
            <div class="lb_div_top">
                <img :src="item.profAvatar" alt="">
                <img src="../../assets/images/zjmcIcon.png" class="zjmc" alt="">
            </div>
            <div class="lb_div_bottom">
                <p>{{item.profName}}</p>
                <p>
                    <span class="afterIcon">{{item.profTitle}}</span>
                    <span>{{item.profHonor}}</span>
                </p>
                <p style="font-size:16px">
                    {{arrZJJJ1[i]}}
                </p>
                <p style="font-size:16px">
                    {{arrZJJJ2[i]}}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        arr:'',
    },
    data() {
        return {
            arrZJJJ1:[],
            arrZJJJ2:[],
        }
    },
    methods: {
        changeZjmc(e){
            var el=e.currentTarget;
            el.firstElementChild.lastElementChild.style.display="block"
        },
        changeZj(e){
            var el=e.currentTarget;
            el.firstElementChild.lastElementChild.style.display="none"
        },
        tzRourter(e){
            // this.$router.push('IndexDtaqInfo/' + device_id);带参数跳转
            //console.error(e)
            this.$router.push('/zjzk'+"?profId="+this.arr[e].profId);
            
        }
    },
    created() {
        var lsArrZJJJ1=[];
        var lsArrZJJJ2=[];
        for(var i=0;i<this.arr.length;i++){
            lsArrZJJJ1.push(this.arr[i].profResume&&this.arr[i].profResume.substring(0,17))
            lsArrZJJJ2.push(this.arr[i].profResume&&this.arr[i].profResume.substring(17,23).concat("..."))
        }
        this.arrZJJJ1=lsArrZJJJ1;
        this.arrZJJJ2=lsArrZJJJ2;
    },
}
</script>
<style scoped>
    .lb_div{
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        margin: 0 auto;
    }
    .lb_div_all{
        width: 350px;
        height: 100%;
        flex-shrink: 0;
        cursor: pointer;
    }
    .lb_div_top,.lb_div_bottom{
        width: 100%;
        height: 50%;
        position: relative;
    }
    .lb_div_top{
        min-height: 210px;
    }
    .lb_div_top>img{
        margin-top: 17px;
        margin-left: 67px;
        width: 220px;
        height: 220px;
        border-radius:110px; 
    }
    .lb_div_bottom{
        height: 35%;
        padding-top: 18px;
        box-sizing: border-box;
    }
    .zjmc{
        display: none;
        position: absolute;
        left: 0;
        top: 0;
    }
    .lb_div_bottom>p{
        text-align: center;
    }
    .lb_div_bottom>p:first-child{
        font-weight: bold;
        font-size: 18px;
    }
    .lb_div_bottom>p:nth-child(2){
        margin-top: 10px;
        font-size: 14px;
    }
    .lb_div_bottom>p:nth-child(2)>span{
        /*width: 51%;*/
        max-width:120px;
        display: inline-block;
        text-align: right;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .lb_div_bottom>p:nth-child(2)>span:last-child{
        /*width:49%;*/
        max-width:200px;
        text-align: left;
    }
    .lb_div_bottom>p:nth-child(2)>.afterIcon:after{
        content: "|";
        padding: 0 6px;
        font-weight: bolder;
    }
    .lb_div_bottom>p:nth-child(2)>span{
        color: #9e0100;
    }
    .lb_div_bottom>p:nth-child(3){
        margin-top: 13px;
        color: #888888;
        font-size: 14px;
    }
    .lb_div_bottom>p:nth-child(4){
        margin-top: 6px;
        color: #888888;
    }
    @media screen and (max-width: 1500px) {
        
    }
    @media screen and (max-width: 416px) {
        .lb_div{
            display: flex;
            flex-direction: column;
        }
        .lb_div>div{
            margin: 0 auto;
        }
    }
</style>