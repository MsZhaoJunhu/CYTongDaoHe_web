<template>
    <div class="zxksAll">
        
        <h2>考试须知</h2>
        <p>被执行规则处理的用户，当其全部违规行为被纠正、违规处理期届满、违规处理措施执行完结且通过在线管理规则考试后，方可恢复正常状态。考试满分为100分，考试分数达到80分及以上则考试通过，若为通过考试，企业用户仍处于限制状态，需要继续学习于次日再次考试，知道考试通过后，企业用户相关的限制措施才能被解除。
        </p>
        <h2>考试资格</h2>
        <p>您目前的诚信分数为<span>{{scode}}</span>分，该分数低于80分，您处于限制状态，在全部违规行为被纠正、违规处理期届满、违规处理措施执行完结后，请及时参加在线管理规则考试</p>
        
        <h2>考试入口</h2>
        <router-link to="zxksny">
            <div class="ksrk">考试入口</div>
            <el-button @click="drawer = true" type="primary">考试入口</el-button>
            <el-drawer
            :visible.sync="drawer"
            :direction="direction"
            :before-close="handleClose"
            size="100%"
            title="考试内容">
                <zxksny></zxksny>
            </el-drawer>
        </router-link>
        
    </div>
</template>

<script>
    import header_ from '../../public/头部'
    import footer_ from '../../public/底部'
    import zxksny from './在线考试内页'
    export default {
        data() {
            return {
                scode: 79,
                drawer: false,
                direction: 'btt',
                boolClosePARENT:"",
            }
        },
        components:{
            zxksny,
            header_,
            footer_,
        },
        mounted() {
            this.$emit('updatetitle', '3')
        },
        methods: {
            handleClose(done) {
                done();
            }
        },
        watch: {
        },
    }
</script>

<style scoped>
    h2 {
        font-size: 19px;
        font-weight: bold;
        color: #9e0100;
        margin-top: 54px;
    }

    h2+p {
        font-size: 1rem;
        text-indent: 2em;
        line-height: 1.5rem;
        color: #9e9e9e;
        margin-top: 0.5rem;
    }

    h2+p>span{
        color:#9e0100;
        font-size: 24px;
        padding: 0px 4px 0px 4px;
    }
    .ksrk {
        width: 120px;
        height: 36px;
        background-color: #9e0100;
        color: #fff;
        text-align: center;
        line-height: 36px;
        margin-top: 1.5rem;
    }
    .el-button{
        display: none;
    }
    @media screen and (max-width: 415px) {
        .zxksAll{
            padding: 0 24px;
            box-sizing: border-box;
        }
        .zxksAll h2{
            margin: 8px auto;
            font-size: 16px;
        }
        .zxksAll p{
            font-size: 14px;
        }
        .zxksAll p span{
            font-size: 16px;
        }
        .ksrk{
            display: none;
        }
        .el-button{
            display: block;
            background-color: #9e0100;
            outline: none;
            border: 0px;
        }
    }
</style>