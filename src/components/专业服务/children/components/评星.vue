<template>
    <label class="pingxing">
        <span>{{starTitle}}：</span>
        <p>
            <template v-for="(item,index) in 5">
                <span class="star" @click="change(index+1)">
                    <img v-if="starLV<=index" src="../../../../assets/icon/star.png"/>
                    <img v-else src="../../../../assets/icon/star_s.png"/>
                </span>
            </template>
        </p>
    </label>
</template>

<script>
    export default {
        props:{
            starTitle:String,
        },
        data() {
            return {
                starLV: 0
            }
        },
        methods: {
            change(e) {
                this.starLV=e;
            }
        }
    }
</script>

<style scoped>
    .pingxing {
        display: flex;
        align-items: center;
    }
    .pingxing>span{
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 0px;
        color: #8a8a8a;
    }
    .pingxing>p{
        display: flex;
        margin-left: 5px;
    }
    .star {
        margin-top: 3px;
        display: block;
        margin-right: 20px;
    }
</style>