<template>
    <div class="包裹">
        <header_ :select_index="1"/>
        <xfc></xfc>
        <router-view @select="updateselect">
        </router-view>
        <footer_ />
    </div>
</template>

<script>
import header_ from '@/components/public/头部'
import footer_ from '@/components/public/底部'
import xfc from '@/components/public/悬浮窗.vue'
    export default {
        
        components: {
            header_,
            footer_,
            xfc,
        },
        methods:{
            updateselect:function(data){
                this.$emit('updateheader',data)
            }
        }
    }
</script>

<style scoped> 
    .包裹{
        width: 100%;
        /* min-width: 1400px; */
    }
    @media screen and (max-width: 415px) {
        .包裹{
            overflow-x: hidden;
        }
    }
</style>