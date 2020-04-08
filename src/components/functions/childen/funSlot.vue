<template>
    <div class="funSlotAll">
        <div class="funSlotTop">
            <slot name="topTab"></slot>
        </div>
        <div class="funSlotBottom">
            <slot></slot>
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
//     window.onscroll = function() {
//         const scrollTop =  document.documentElement.scrollTop || document.body.scrollTop
//         const goTop= document.querySelector('.funSlotTop')
//         if (scrollTop >0) {
//             goTop.style.cssText="position:fixed;width:100%;z-index:9999"
//             
//         } else{
//             goTop.style.position = 'inherit'
//         }
//     }
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .funSlotAll{
        /* min-width: 1400px; */
    }
    .funSlotTop{
        width: 100%;
        height: 80px;
        background: #9e0100;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 32px;
        align-items: center;
    }
    .funSlotBottom{
        width: 100%;
        height: auto;
        background: #fefafa;
    }

</style>