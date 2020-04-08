<template>
    <div class="allJournalPar">
        <div class="journalPar" v-for="(item,index) of journalObject" @click="jumpOthers(item,title,corpName)" :key="index">
            <p>{{item.serverMajor}}</p>
            <div class="journal">
                <div :class="item.serverStatus==0?'待确认':(item.serverStatus==1?'待审核':(item.serverStatus==2?'已完成':''))"></div>
                <span>{{item.serverStatus==0?'待确认':(item.serverStatus==1?'待审核':(item.serverStatus==2?'已完成':''))}}</span>
            </div>
            <p>
                <span>{{item.serverTime}}</span>
            </p>
        </div>
    </div>
</template>
<script>
export default{
    props: {
        journalObject:Array,
        title:"",
        corpName:"",
    },
    data () {
        return {
            
        }
    },
    methods: {
        jumpOthers(i,title,corpName){
            this.$router.push({ path:'serverSubmissionDetails',query:{"serverId":i.serverId,"contractId":i.contractId,"title":title,"corpName":corpName}})
        }
    },
    mounted () {
        
    }
}
</script>
<style scoped>
    .allJournalPar{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transform: translate();
        transition: all 1s;
    }
    .journalPar{
        min-width: 190px;
        width: 190px;
        height: 100px;
        overflow: hidden;
        border: 1px solid rgb(187, 187, 187);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.75rem;
        margin-right: 1rem;
        box-sizing: border-box;
        cursor: pointer;
    }
    .journal{
        width: auto;
        display: flex;
        align-items: center;
    }
    .journal>div{
        width: 8px;
        height: 8px;
        border-radius: 4px;
        margin-right: 0.25rem;
    }
    .journal span{
        font-size: 14px;
        white-space: nowrap;
        color: #666;
    }
    .journalPar p span,.journalPar p{
        color: #666;
    }
    .journalPar p span{
        font-size: 12px;
    }
    .journal .已完成{
        background-color: rgb(8, 161, 8);
    }
    .journal .待确认{
        background-color: rgb(255, 204, 51);
    }
    .journal .待审核{
        background-color: rgb(51, 153, 255);
    }
</style>