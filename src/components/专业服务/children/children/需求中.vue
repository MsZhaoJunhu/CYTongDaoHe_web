<template>
    <div class="内容">
        <div class="left">

        </div>
        <div class="right">
            <jc :step=2></jc>
            <template v-for="item in 20">
                <gysbox
                        box-url="./release_inside"
                        boxWidth="312"
                        box-name="中国建设银行重庆分行"
                        :box-star="3"
                        :istjd="true"
                />
            </template>
        </div>
    </div>
</template>

<script>
    import jc from '../components/进程模板'
    import gysbox from '../../../public/供应商盒子'
    export default {
        components:{
            gysbox,
            jc
        }
    }
</script>

<style scoped>
    .内容{
        display: flex;
    }
    .left{
        flex-shrink: 0;
        width: 343px;
        height: 198px;
        padding-right: 47px;
    }
    .right{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>