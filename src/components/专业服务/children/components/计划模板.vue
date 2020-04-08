<template>
    <div class="计划模板">
        <div class="wrap">
            <div class="xueqiu" v-for="item in 3">
                <li>
                    <h4>里程碑事件{{item}}：</h4>
                    <div>
                        <p>烘焙大赛主办方</p>
                    </div>
                </li>
                <li>
                    <h4>主要内容：</h4>
                    <div>
                        <p>烘焙大赛主办方烘焙大赛主办方烘焙大赛主办方烘焙大赛主办方烘焙大赛主办方烘焙大赛主办方烘焙大赛主办方烘焙大赛主办方烘焙大赛主办方烘焙大赛主办方烘焙大赛主办方烘焙大赛主办方烘焙大赛主办</p>
                    </div>
                </li>

                <li>
                    <h4>关键产出物：</h4>
                    <div>
                        <p>烘焙大赛主办方</p>
                    </div>
                </li>
                <li>
                    <h4>服务起止时间：</h4>
                    <div>
                        <p>烘焙大赛主办方</p>
                    </div>
                </li>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props:{

        }
    }
</script>

<style scoped>
    .计划模板{
        widows: 100%;
    }
    .wrap{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: -40px;
        justify-content: space-between;
    }
    .item .xueqiu{
        flex-shrink: 0;
        padding-left:50px;
        width: calc((1400px - 300px) / 2);
        box-sizing: border-box;
        margin-bottom: 30px;
        /*display: flex;
        flex-direction: column;
        justify-content: center;*/
    }
    .item .xueqiu li{
        display: flex;
        font-size: 14px;
        color: #8a8a8a;
        margin-bottom: 5px;
    }
    .item .xueqiu li h4{
        flex-shrink: 0;
        color: #333;
    }
    .item .xueqiu li p{
        opacity:.7;
        margin-bottom: 5px;
    }
</style>