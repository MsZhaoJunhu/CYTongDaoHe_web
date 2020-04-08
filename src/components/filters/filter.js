//过滤器
import Vue from 'vue'
import moment from 'moment'
Vue.filter('fromat',function(val,arg){
    if(!val) return;
    val=val.toString();
    return moment(val).format(arg)
})
