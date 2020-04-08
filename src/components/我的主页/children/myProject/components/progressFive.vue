<template>
    <div class='progress-five'>
         <div class='title'>
                        <p class='title-top'></p>
                        <p class='title-mid'>
                            <span>
                             05
                            </span>
                            <span class='dot'>

                            </span>
                        </p>
                        <p class='title-bottom'>服务反馈</p>
        </div>
        <div class='content'>
           <p><span class='color-red'>需求方反馈</span>
               <span class='light-grey'>
                  服务商反馈  
                </span>
            </p>
           <div class='info'> 
            <template v-for='(item,index) in feedbackPage.length'>
                <table v-show='index == currFeed' class='feedback'>
                   <thead>
                       <tr>
                           <th>编号{{index}}</th>
                           <th>反馈类型</th>
                           <th>主要行为</th>
                           <th>发起时间</th>
                           <th>处理状态</th>
                           <th>操作</th>
                       </tr>
                   </thead>
                   <tbody>
                       <template v-for='(item2,index2) in feedItemInfo'> 
                           <tr>
                                <td>{{item2.id}}</td>
                                <td>{{item2.type}}</td>
                                <td>{{item2.behaviour}}</td>
                                <td>{{item2.createTime}}</td>
                                <td>{{item2.status}}</td>
                                <td>详情</td>
                           </tr>
                       </template>
                   </tbody>
               </table>
            </template>
               <div class='pages'>
                   <ul>
                       <li v-for='(item,index) in feedbackPage' :key='index' 
                        :class="{'grey': index === currPage}" 
                        @click='changeHandler(index)'>
                       {{item}}
                    </li>
                   </ul>
               </div>
           </div>
        </div>
    </div>
</template>

<script>
import simData from '@/data/simulatedData'
export default {
    data() {
        return {
            currFeed:0,
            currPage:0,
            feedbackPage:[1,2,3,4,5],
            feedItemInfo:simData.feedItemInfo

        }
    },
    methods: {
        changeHandler(index){
            this.currPage = index;
        }
    },
}
</script>

<style scoped>
    .progress-five{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .progress-five .title{
        align-self: flex-start;
        width:17.5%;
        /* padding-right:150px; */
    }
    .title .title-top{
        width:15%;
        height: 3px;
        background:#000;
        margin-bottom: 5px;
    }
    .title .title-mid span{
       font-size:30px;
       font-weight: 600;
    }
     .title .title-mid .dot{
         display: inline-block;
         width:6px;
         height:6px;
         border-radius: 50%;
         background: #000;
     }
     .title .title-bottom {
         font-weight: 600;

     }
     
    .content{
        flex:5;
        padding-left:100px;
        border-left:1px solid #eeeeee;
    }
    .content .color-red{
        color:#9e0100;

    }
    .content .light-grey{
        color:#e2e2e2;
    }
    .content > p{
        font-size:20px;
        font-weight: 600;
    }
    .content > p span{
        margin-right:15px;
    }
    .feedback{
        /* background-color: #fafafa; */
        padding:15px 0;
        border-bottom: 1px solid #dedede;
        margin-bottom: 15px;
        width: 100%;
        height:100%;
        text-align: center;
    }
    .feedback thead tr{
        background:#fafafa;
    }
    .feedback thead th{
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 0px;
        color: #000000;
    }
    .feedback tbody tr td{
        /* font-size: 14px; */
        font-weight: normal;
        letter-spacing: 0px;
        color: #777777;
        line-height: 40px;
    }
    .pages{
        padding-left:5%;
    }
    .pages ul li{
      display: inline-block;
      width:30px;
      height:30px;
      line-height: 30px;
      border-radius: 50%;
      margin-right:20px;
      text-align: center;
      cursor: pointer;
    }
    .pages ul .grey{
        background:#e6e6e6;
    }
</style>