<template>
    <div class="complete_two_select">
       
        <div class="complete_two_top">
            <div>
                <span :class="tabSelect==0?'complete-two-nav selected':'complete-two-nav'">选择注册身份</span>
                <span :class="tabSelect==1?'complete-two-nav selected':'complete-two-nav'">完善注册信息</span>
                <span :class="tabSelect==2?'complete-two-nav selected':'complete-two-nav'">完善安全设置</span>
                <span :class="tabSelect==3?'complete-two-nav selected':'complete-two-nav'">注册成功</span>
                <i id="after" :style="{left:(25*tabSelect)+'%'}"></i>
                <i id="after2" :style="{left:(25*tabSelect)+'%'}"></i>
            </div>
        </div>
        <!--
        <div class="circle_one">
            <canvas id="completed_canvas_one"></canvas>
            <div class="circle_two"><font>完善度</font><br/><span>80%</span></div>
        </div>
        -->
        <ul class="sfxx" mode="out-in">
            <template v-for="(title,index) in titleInfo[shenfen]">
                <li :class="index<=titleSelect?'selected':''">{{title}}</li>
                <i v-if="index!=titleInfo[shenfen].length-1" :class="index<titleSelect?'selected':''"></i>
                <i v-if="index!=titleInfo[shenfen].length-1" :class="index<titleSelect?'selected':''"></i>
                <i v-if="index!=titleInfo[shenfen].length-1" :class="index<titleSelect?'selected':''"></i>
            </template>
            
        </ul>
        <form @submit.prevent="submit($event)" mode="in-out" class="complete-form layui-form">
            <div class="layui-form-item" style="margin-top:25px;line-height:55px">
                <template v-for="(item,key) in DetailInfo[shenfen][titleSelect]">

                    <!-- 普通输入框 -->
                    <template  v-if="item[1]==1">
                        <div class="layui-inline">
                            <label class="layui-form-label">{{item[0]}}</label>
                            <div class="layui-input-inline">
                                <input type="text" :name="item[2]" :placeholder="item[3]" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                    </template>

                    <!-- 下拉菜单  联动菜单 -->
                    <template  v-else-if="item[1]==2">
                        <div :class="shenfen==2?'layui-inline':'layui-form-item'" style="margin-top:7px">
                            <label class="layui-form-label">{{item[0]}}</label>
                            <div class="layui-input-inline" v-for="(itemchild,index) in item[4]">
                                <select :name="itemchild" :id="itemchild">
                                    <option value="" selected>{{item[3]}}</option>
                                    <option v-for="grandson in item[5][index]" :select_name="item[2]" :itemLevel="grandson['itemLevel']" :value="grandson['dictItemId']" >{{grandson['itemName']}}</option>
                                </select>
                            </div>
                        </div>
                    </template>

                    <!-- 文本输入框 -->
                    <template  v-else-if="item[1]==3">
                        <div class="layui-form-item layui-form-text" style="width: 95%;margin-top:7px">
                            <label class="layui-form-label">{{item[0]}}</label>
                            <div class="layui-input-block">
                              <textarea :placeholder="item[3]" :name="item[2]" class="layui-textarea"></textarea>
                            </div>
                          </div>
                    </template>

                    <!--文件上传-->
                    <template  v-else-if="item[1]==4">
                        <div class="layui-form-item layui-form-text" style="width: 95%;margin-top:7px">
                            <label class="layui-form-label">{{item[0]}}</label>
                            <div class="layui-input-block">
                                 <el-upload
                                    :class="item[5]"
                                    action="http://localhost:8081/upload/common/file"
                                    :on-success="handleAvatarFileSuccess"
                                    ref="upload"
                                    :on-error="handleAvatarFileError"
                                    :before-upload="beforeAvatarFileUpload"
                                    :limit=1
                                    name="file"
                                    >
                                    <el-button size="small" type="primary">点击上传</el-button>
                                </el-upload>
                            </div>
                          </div>
                    </template>



                   <!-- 动态添加较少的的 -->
                    <template  v-else-if="item[1]==5" >
                        <table class="my_table layui-table" style="margin-top: 50px">
                            <thead>
                                 <tr>
                                    <th :colspan="item[2].length+1">{{item[0]}}</th>
                                </tr>
                                <tr>
                                    <th v-for="(grandson,indexchild) in item[2]" >{{grandson[0]}}</th>
                                    <td>操作</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td v-for="(grandson,indexchild) in item[2]">
                                        <input v-if="grandson[1]==1 || grandson[1]==8" type="text" :id="grandson[2]" :name="grandson[2]" :placeholder="grandson[3]" autocomplete="off" class="layui-input no-border">
                                        <template v-else-if="grandson[1]==2" v-for="(itemchild,index) in grandson[4]">
                                            <select  :name="grandson[2]" lay-search="">
                                                <option value="" selected>请选择</option>
                                                <option v-for="grandsonchild in grandson[5][index]" :value="grandsonchild.dictItemId">{{grandsonchild.itemName}}</option>
                                            </select>
                                        </template>
                                        <textarea v-else-if="grandson[1]==3" :placeholder="grandson[3]" :name="grandson[2]" class="layui-textarea"></textarea>
                                        <input v-else-if="grandson[1]==11" type="text" :name="grandson[2]" readonly class="layui-input no-border" :value="grandson[4]"/>
                                    </td>
                                    <td width="5%"><a style="color:red;cursor: pointer;" @click="delete_tr($event)" >删除</a></td>
                                </tr>
                                <tr>
                                    <td :colspan="item[2].length+1" style="text-align:center"><a style="color:red;cursor: pointer;" @click="add_tr($event,shenfen,titleSelect,key)">+ 新增{{item[0]}}</a></td>
                                </tr>
                            </tbody>
                        </table>
                        <div style="margin-top:25px"></div>
                    </template>


                    <!--这里是动态添加较多的弹出框-->
                    <template v-if="item[1]==9">
                        <table class="my_table layui-table" style="margin-top: 50px">
                            <thead>
                            <tr>
                                <th :colspan="item[2].length+1">{{item[0]}}</th>
                            </tr>
                            <tr>
                                <th v-for="(grandson,indexchild) in item[2].slice(0,4)" >{{grandson[0]}}</th>
                                <td>操作</td>
                            </tr>
                            </thead>
                            <tbody>

                                <tr v-for="c_item in number_ke">
                                	
                                     <td v-for="(grandson,indexchild) of  content.slice(0,4)">
                                        {{content[indexchild][c_item-1]}}
                                    </td>
                                    <td v-if="content" width="5%"><a style="color:red;cursor: pointer;" @click="delete_tr($event)" >删除</a></td>
                                </tr>

                                <tr>
                                    <td :colspan="item[2].length+1" style="text-align:center"><a style="color:red;cursor: pointer;" @click="add_tr($event,shenfen,titleSelect,key,'tc_add')">+ 新增{{item[0]}}</a></td>
                                </tr>

                            </tbody>
                        </table>


                    </template>




                    <!--单选按钮-->
                    <template v-else-if="item[1]==6">
                        <div class="layui-form-item" >
                            <label class="layui-form-label" style="width:160px !important;line-height: 39px;">{{item[0]}}</label>
                            <div class="layui-input-block">
                              <input v-for="child in item[3]" type="radio" :name="item[2]" :value="child['value']" :title="child['name']" >
                            </div>

                         </div>
                    </template>



                    <!-- 日历插件 -->
                    <template  v-else-if="item[1]==8">
                        <div class="layui-inline" >
                            <label class="layui-form-label">{{item[0]}}</label>
                            <div class="layui-input-inline">
                                <input type="text" :id="item[2]" lay-verify="date" :name="item[2]" :placeholder="item[3]" autocomplete="off" class="layui-input ]">
                            </div>
                        </div>
                    </template>


                    <!--发展规划-->
                    <template  v-else-if="item[1]==10">

                        <div class="layui-form-item">
                            <label class="layui-form-label">战略目标</label>
                            <div class=" layui-form-pane" style="float: left;margin-left:10px;width: calc((100% - 230px) / 3);">
                                <div class="layui-form-text" >
                                    <label class="layui-form-label" style="width: 100% !important;text-align: center;">2017年</label>
                                    <div class="layui-input-inline" style="width: 100% !important;">
                                        <textarea placeholder="请输入内容" class="layui-textarea" name="strategyTarget"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class=" layui-form-pane" style="float: left;margin-left:10px;width: calc((100% - 230px) / 3);">
                                <div class="layui-form-text" >
                                    <label class="layui-form-label" style="width: 100% !important;text-align: center;">2018年</label>
                                    <div class="layui-input-inline" style="width: 100% !important;">
                                        <textarea placeholder="请输入内容" class="layui-textarea" name="strategyTarget"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class=" layui-form-pane" style="float: left;margin-left:10px;width: calc((100% - 230px) / 3);">
                                <div class="layui-form-text" >
                                    <label class="layui-form-label" style="width: 100% !important;text-align: center;">2019年</label>
                                    <div class="layui-input-inline" style="width: 100% !important;">
                                        <textarea placeholder="请输入内容" class="layui-textarea" name="strategyTarget"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="layui-form-item" style="width: 95%;margin-top:7px">
                            <label class="layui-form-label">开发计划</label>
                            <div class="layui-input-block">
                                <textarea placeholder="请输入内容" class="layui-textarea" name="prodPlan"></textarea>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">开发文档</label>
                            <div class="layui-input-block">
                                <el-upload

                                        action="/peng/addFile"
                                        :on-success="handleAvatarFileSuccess"
                                        :on-error="handleAvatarFileError"
                                        :before-upload="beforeAvatarFileUpload"
                                        :limit=1

                                >
                                <el-button size="small" type="primary">点击上传</el-button>
                                </el-upload>
                            </div>
                        </div>
                        <div class="layui-form-item" style="width: 95%;margin-top:7px">
                            <label class="layui-form-label">服务计划</label>
                            <div class="layui-input-block">
                                <textarea placeholder="请输入内容" class="layui-textarea" name="desc"></textarea>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">服务文档</label>
                            <div class="layui-input-block">
                                <el-upload

                                        action="/peng/addFile"
                                        :on-success="handleAvatarFileSuccess"
                                        :on-error="handleAvatarFileError"
                                        :before-upload="beforeAvatarFileUpload"
                                        :limit=1

                                >
                                    <el-button size="small" type="primary">点击上传</el-button>
                                </el-upload>
                            </div>
                        </div>
                        <div class="layui-form-item" style="width: 95%;margin-top:7px">
                            <label class="layui-form-label">研发计划</label>
                            <div class="layui-input-block">
                                <textarea placeholder="请输入内容" class="layui-textarea" name="techPlan"></textarea>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">研发文档</label>
                            <div class="layui-input-block">
                                <el-upload

                                        action="/peng/addFile"
                                        :on-success="handleAvatarFileSuccess"
                                        :on-error="handleAvatarFileError"
                                        :before-upload="beforeAvatarFileUpload"
                                        :limit=1

                                >
                                    <el-button size="small" type="primary">点击上传</el-button>
                                </el-upload>
                            </div>
                        </div>
                        <div class="layui-form-item" style="width: 95%;margin-top:7px">
                            <label class="layui-form-label">拓展计划</label>
                            <div class="layui-input-block">
                                <textarea placeholder="请输入内容" class="layui-textarea" name="marketPlan"></textarea>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">拓展文档</label>
                            <div class="layui-input-block">
                                <el-upload

                                        action="/peng/addFile"
                                        :on-success="handleAvatarFileSuccess"
                                        :on-error="handleAvatarFileError"
                                        :before-upload="beforeAvatarFileUpload"
                                        :limit=1

                                >
                                    <el-button size="small" type="primary">点击上传</el-button>
                                </el-upload>
                            </div>
                        </div>
                        <div class="layui-form-item" style="width: 95%;margin-top:7px">
                            <label class="layui-form-label">引进计划</label>
                            <div class="layui-input-block">
                                <textarea placeholder="请输入人才引进计划" class="layui-textarea" name="talentPlan"></textarea>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">引进文档</label>
                            <div class="layui-input-block">
                                <el-upload

                                        action="/peng/addFile"
                                        :on-success="handleAvatarFileSuccess"
                                        :on-error="handleAvatarFileError"
                                        :before-upload="beforeAvatarFileUpload"
                                        :limit=1

                                >
                                    <el-button size="small" type="primary">点击上传</el-button>
                                </el-upload>
                            </div>
                        </div>
                    </template>
                </template>
            </div>

            <article class="complete-article" >
                <button  :class="titleSelect==0?'firstbtn btn' :'btn'" >下一步</button>
            </article>
            
            
            <!--弹出框-->
            
            <div v-show="parentshow" class="eject_tc"  >
            	
            	<template v-for="(a,b) in list"> 
            		
                	<div v-show="b==number_ke" class="eject_main">
                        <div class="layui-layer-title" style="cursor: move;">
                            <span class="layui-layer-setwin">
                           		 <a class="layui-layer-ico layui-layer-close layui-layer-close1" @click="hidden()"></a>
                        	</span>
                        </div>
                    
						<div class="layui-row" style="margin-top:40px">
	                            <template v-for="(grandson,indexchild) in list[b]" >
	                                <div v-if="grandson[1]!=3 && grandson[1]!=5" class="layui-form-item layui-col-sm6 myeject">
	                                    <label class="layui-input-block layui-form-text">{{grandson[0]}}</label>
	                                    <div class="layui-input-block nameejec">
	                                        <input v-if="grandson[1]==1 || grandson[1]==8" type="text" :id="grandson[2]" :name="grandson[2]" :placeholder="grandson[3]" autocomplete="off" class="layui-input">
	                                        <template v-else-if="grandson[1]==2" v-for="(itemchild,index) in grandson[4]">
	                                            <select  :name="itemchild" lay-search="">
	                                                <option value="" selected>请选择</option>
	                                                <option v-for="grandsonchild in grandson[5][index]" :value="grandsonchild.dictItemId">{{grandsonchild.itemName}}</option>
	                                            </select>
	                                        </template>
	
	                                    </div>
	                                </div>
	
	                                <div v-else-if="grandson[1]==3" class="layui-form-item layui-col-sm12 myeject">
	
	                                    <label class="layui-input-block">{{grandson[0]}}</label>
	                                    <div class="layui-input-block nameejec">
	                                        <textarea :placeholder="grandson[3]" :name="grandson[2]" class="layui-textarea"></textarea>
	                                    </div>
	                                </div>
	
	                                <template v-else-if="grandson[1]==5">
	
	                                    <table class="my_table layui-table" style="margin-top: 50px">
	                                        <thead>
	                                            <tr>
	                                                <th :colspan="grandson[2].length+1">{{grandson[0]}}</th>
	                                            </tr>
	                                            <tr>
	                                                <th v-for="(g_item,g_index) in grandson[2]" >{{grandson[0]}}</th>
	                                                <td>操作</td>
	                                            </tr>
	                                        </thead>
	                                        <tbody>
	                                            <tr>
	                                                <td v-for="(g_item,g_index) in grandson[2]">
	                                                    <input v-if="g_item[1]==1 || g_item[1]==8" type="text" :id="g_item[2]" :name="g_item[2]" :placeholder="g_item[3]" autocomplete="off" class="layui-input no-border">
	                                                    <textarea v-else-if="g_item[1]==3" :placeholder="g_item[3]" :name="g_item[2]" class="layui-textarea"></textarea>
	                                                </td>
	                                                <td width="5%"><a style="color:red;cursor: pointer;" @click="delete_tr($event)" >删除</a></td>
	                                            </tr>
	                                            <tr>
	                                                <td :colspan="grandson[2].length+1" style="text-align:center"><a style="color:red;cursor: pointer;" @click="add_tr($event,shenfen,titleSelect,2,'',13)">+ 新增{{grandson[0]}}</a></td>
	                                            </tr>
	                                        </tbody>
	                                    </table>
	                                </template>
	
	                            </template>
	                        
	                    	
						</div>
	                    <template >
	                        <div style="display: flex;justify-content: center;margin-top: 30px">
	                            <button type="button" class="layui-btn" @click="save(number_ke)">保存</button>
	                            <button type="button" class="layui-btn layui-btn-normal" @click="hidden()">取消</button>
	                        </div>
	                    </template>
	                </div>
                </template>
            </div>
            
               
        </form>



    </div>
</template>

<script>
    var form;
    // import nameeject from '@/components/登录/children/nameeject'
	import "../../../components/js/jquery-2.0.3.min"
    import '../../../../public/layui/css/layui.css';
    import complete from '@/data/complete.js';
    import {hyList,htListChildren,getCity1,getCity2,getCity3,file} from '@/components/api/api.js';
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    import { talentReg,enterpMemberReg,ServiceSupplyReg,sharingTalentsReg,resources,resourcesEr } from "../../api/api";
    

    export default {
        // components:{
        //     nameeject
        // },
        data(){
            return {
                shenfen:0,
                tabSelect:0,
                titleSelect:0,
                titleInfo:complete.titleInfo,
                DetailInfo:complete.DetailInfo,
                //这个是界面循环需要展示的数据，需要从后台获取
                content:new Array(),
                list:[],
				frequency:0,
                number_ke:0,
                parentshow:false,
                imgList:'' ,
                //图片上传路径
                file:'' ,
            }
        },
        methods:{
        	handleAvatarFileError: function (err, file) {
                alert("文件上传走丢了。。");
            },
            handleAvatarFileSuccess: function (res, file) {
                this.$message.success("上传文件成功！");
            },
            beforeAvatarFileUpload: function (file) {
                //限制的上限为10M
                const isLt10M = file.size / 1024 / 1024 < 10;
            
                if (!isLt10M) {
                    this.$message.error('上传文件大小不能超过 10MB!');
                }
                return isLt10M;
            },
            //上传
            // updateImg(){
            //     file({file:"xx"},{method:'patch'}).then(res=>{

            //     })
            // },
            //一级行业
            hyList(){
                hyList().then(res=>{
                    if(res.data.code===200){
                        this.$set(this.DetailInfo[0][0][16][5],0,res.data.data)
                        this.$set(this.DetailInfo[1][0][16][5],0,res.data.data)
                    }
                })
            },
            //二级行业
            htListChildren(itemId){
                htListChildren(itemId).then(res=>{
                    if(res.data.code===200){
                        this.$set(this.DetailInfo[0][0][16][5],1, res.data.data)
                        this.$set(this.DetailInfo[1][0][16][5],1,res.data.data)
                    }
                })
                
            },
           
            //省市区
            getCity1(itemId){
            	getCity1(itemId).then(res=>{
                    if(res.data.code===200){
                        this.$set(this.DetailInfo[0][0][17][5],0, res.data.data)
                        this.$set(this.DetailInfo[1][0][17][5],0, res.data.data)
                    }
            	})
            },
            getCity2(itemId){
            	getCity2(itemId).then(res=>{
                    if(res.data.code===200){
                    	this.$set(this.DetailInfo[0][0][17][5],1, res.data.data)
                        this.$set(this.DetailInfo[1][0][17][5],1, res.data.data)
                        
                    }
            	})
            },
            getCity3(itemId){
            	getCity3(itemId).then(res=>{
                    if(res.data.code===200){
                        this.$set(this.DetailInfo[0][0][17][5],2, res.data.data)
                        this.$set(this.DetailInfo[1][0][17][5],2, res.data.data)
                    }
            	})
            },
            //删除tr
            delete_tr(e){
                e.currentTarget.parentElement.parentElement.parentElement.removeChild(e.currentTarget.parentElement.parentElement)
            },
            hidden(){
        	    this.parentshow=false;
            },
            
			save(numer){
				let list_data=this.list[numer];
				
				for(var i in list_data){
					
					let i_name=list_data[i][2]
					let names=document.getElementsByName(i_name)
					if(!this.content[i]){
						this.$set(this.content,i,new Array());
					}
					
					for(var j=0;j<names.length;j++){
						if(list_data[i][1]==2){
							let info=list_data[i][5][0];
							for(var a in info){
								if(names[j].value==info[a]['dictItemId']){
									this.$set(this.content[i],j,info[a]['itemName']);
									break;
								}else{
									this.$set(this.content[i],j,'');
								}
							}
						}else{
							this.$set(this.content[i],j,names[j].value);
						}
						
				    }
			    }
			
				
				this.number_ke++
				this.layui_render();
				this.hidden();
			},
			//添加tr
            add_tr(e,a,b,c,d='',f=''){
            	
                if(d=='tc_add'){
                    this.$set(this.list,this.number_ke,this.DetailInfo[a][b][c][2]);
                    this.parentshow=true;
                    return ;
                }
                var tr=document.createElement('tr')
                var td='';
                
                if(f==13){
                	
                    var info_data=this.DetailInfo[a][b][0][c][12];
                }else{
                    var info_data=this.DetailInfo[a][b][c];
                }
                var add_tr=e.currentTarget.parentNode.parentNode;
                var class_time=[]
                
                info_data[2].forEach((item,index) => {
     
                	switch(item[1]){
                		case 8:
                		class_time.push(item[2]);
                		case 1:
                			td+='<td><input type="text" name="'+item[2]+'" placeholder="'+item[3]+'" autocomplete="off" class="layui-input no-border '+item[2]+'"></td>';
                		break;
                		case 2:
                			td+='<td><select name="'+item[2]+'" ><option value="" selected>请选择</option>';
                			item[4].forEach((itemchild,indexchild)=>{
                				item[5][indexchild].forEach((child,key)=>{
                					td+='<option value="'+child.dictItemId+'">'+child.itemName+'</option>';
                				})
	                		})
	                		td+="</td>";
                		break;
                		case 3:
                			td+='<td><textarea placeholder="'+item[3]+'" name="'+item[2]+'" class="layui-textarea"></textarea></td>';
                		break;
                		case 11:
                		td+='<td><input type="text" name="'+item[2]+'" readonly placeholder="'+item[3]+'"  autocomplete="off" class="layui-input no-border '+item[2]+'"></td>';
                		break;
                	}
                });
                
                td+='<td width="5%"><a style="color:red;cursor: pointer;" onclick="delete_tr(this)" >删除</a></td>'
                
                tr.innerHTML=td;
                e.currentTarget.parentNode.parentNode.parentNode.insertBefore(tr,e.currentTarget.parentNode.parentNode)

                class_time.forEach((item,index)=>{
                	this.show_time(item)
                })
                this.layui_render()
            },
            
            layui_render(){
            	layui.use(['form','laydate','table'],function(){
	    			var laydate=layui.laydate,table = layui.table;form=layui.form;
	    			laydate.render();
	    			table.render();
	    			form.render('select');
	    		})
            },
            show_time(mydata){
                var laydate=layui.laydate
                
               
                // 定义时间
                if(typeof(mydata)=='string'){
                    var id_list="#"+mydata;
                    var class_list="."+mydata;
                    layui.laydate.render({
                        elem: id_list
                    })
                    layui.laydate.render({
                        elem: class_list
                    })
                    return ;
                }
				
                mydata.map((item,index) => {

                    if(item[1]==5 || item[1]==9){
                        item[2].forEach((itemchild,indexchild)=>{
                            if(itemchild[1]==8){

                                var id_list="#"+itemchild[2];
                                var class_list="."+itemchild[2];
                                layui.laydate.render({
                                    elem: id_list
                                })
                                layui.laydate.render({
                                    elem: class_list
                                })
                            }
                        })
                    }else if(item[1]==8){
                        var id_list="#"+item[2];
                        var class_list="."+item[2];
                        layui.laydate.render({
                            elem: id_list
                        })
                        layui.laydate.render({
                            elem: class_list
                        })
                    }


                })

            
            },
            
            submit:function(event){
                
            	let $event=event.target;
                var arr=new Array(),data={};
                var info=this.DetailInfo[this.shenfen][this.titleSelect];
                for(var i=0;i<$event.length-1;i++){
                	if($event[i].name!=''){
                    	arr[$event[i].name]= new Array();
                   	}
                }
                 
                for( var i in arr){
                    let names=document.getElementsByName(i)
                    
                	if(names.length<=1){
                        arr[i]=names[0].value
                    }else{
                        for(var j=0;j<names.length;j++){
                            arr[i].push(names[j].value)
                        }
                    }
                }
                //数组转对象
                var data1=Object.assign({},arr)
               
                //页数条数
                data1["titleTable"]=this.titleSelect;
                //名称
                data1["username"]=sessionStorage.getItem("username");
                //上传
                data1["file"]=this.file;
                //企业会员
                if(this.shenfen===0){
                    enterpMemberReg(JSON.stringify(data1)).then(res=>{
                        
                        if(res.code===200){
                            this.$message({
                            showClose: true,
                            message: res.msg,
                            type: "success"
                        });
                                this.next()
                        }else{

                        }
                    })   
                 }
                 //服务商
                  if(this.shenfen===1){
                    ServiceSupplyReg(JSON.stringify(data1)).then(res=>{
                        if(res.code===200){
                               this.$message({
                            showClose: true,
                            message: res.msg,
                            type: "success"
                        });
                                this.next()
                        }else{

                        }
                    })   
                 }
                 //共享
                  if(this.shenfen===3){
                    sharingTalentsReg(JSON.stringify(data1)).then(res=>{
                        if(res.code===200){
                               this.$message({
                            showClose: true,
                            message: res.msg,
                            type: "success"
                        });
                                this.next()
                        }else{

                        }
                    })   
                 }
               //人才会员注册
               if(this.shenfen===2){
                 talentReg(JSON.stringify(data1)).then(res=>{
                      if(res.code===200){
                            this.$message({
                            showClose: true,
                            message: res.msg,
                            type: "success"
                        });
                        this.next()
                      }
                   })
              
                } 

               },

            //转化格式
            jsonByarr(arr){
                    let jarr='{'
				for(let a in arr){
					//取出冒号的下标
					let index=arr[a].indexOf(":")
					let key=arr[a].slice(0,index)
					let val=arr[a].slice(index+1,arr[a].length)
					jarr+=`"${key}"`;
					if(a==arr.length-1){
						jarr+=`:"${val}"`;
						jarr+=`}`;
					}else{
						jarr+=`:"${val}",`;
					}
				}
				return JSON.parse(jarr)
			},
            prev(){
                this.titleSelect--      
            },
            next(){
			
            	this.titleSelect++;
            	
            	if(this.titleSelect>this.titleInfo[this.shenfen].length-1){
                	this.$router.push({path:'/complete/complete_three',query:{shenfen:this.shenfen,tabSelect:2}})  
               	}
    		},
            addinfo($shenfen,$index,$key){
                let info=this.DetailInfo[$shenfen][$index];
                this.DetailInfo[$shenfen][$index][info.length]=info[$key];
                this.$set(this.DetailInfo,info,info[$key]);
                
            },
			
            
            //注册完成度
            canvas_circle(k, Idname, style) {
                var element = document.getElementById(Idname);
                var canvas = element.getContext("2d");
                element.width = element.height = style.width;
                canvas.fillStyle = style.banck;
                var step = 1;
                var time = 10;
                var i = 0,
                    rage = 360 * k;
                var srage = -Math.PI * 0.5; //90°（90度）
                var use = function() {
                    i = i + step;
                    if (i <= rage) {
                    canvas.beginPath();
                    canvas.moveTo(54, 54);
                    canvas.arc(54, 54, 54, srage, Math.PI * 2 * (i / 360) + srage);
                    canvas.fill();
                    setTimeout(use, time);
                    }
                };
                use();
            },
            //个人资源  选择资源类型和等级
            personal_type(){
                resources().then(res=>{
                    if(res.data.code===200){
                        this.$set(this.DetailInfo[2][1][0][2][0][5],0, res.data.data);
                        return 
                    }
                })
            },
            personal_grade(dictItemId,itemCode=''){
                //获取等级
                if(itemCode==''){
                    this.personal_resources_type=dictItemId
                    let itemId={dictItemId} 
                    resourcesEr(itemId).then(res=>{
                        if(res.data.code===200){
                            
                            this.$set(this.DetailInfo[2][1][0][2][1][5],0, res.data.data)  
                            return 
                        }
                    })      
                }else{//获取资源标准
                    let itemId={dictItemId,itemCode} 
                    resourcesEr(itemId).then(res=>{
                       
                        if(res.data.code===200){
                            this.$set(this.DetailInfo[2][1][0][2][2],4, res.data.data[0].itemValue1)  
                           
                            return 
                        }
                    })    
                }
                
                
            },
            
        },
        
        mounted(){
            for(var i=0;i<50;i++){
            	this.list[i]=new Array();
            }
            var _this=this
            _this.hyList()
            _this.getCity1()
            _this.personal_type();
            
            layui.use(['form','laydate','table'],function(){
                var laydate=layui.laydate,table = layui.table;form=layui.form;
                form.render();
                form.on('select',function(data){
                	//获取当前选中下拉项的索引
                    var indexGID = data.elem.selectedIndex;
                    //个人资源
                    var personal_name=data.elem.name;
                    if(personal_name=='resourceType'){
                        _this.personal_grade(data.value)
                        return ;
                    }
                    if(personal_name=='resourceLevel'){
                        
                        let itemcode=_this.DetailInfo[2][1][0][2][1][5][0][indexGID-1].itemCode;
                        
                        _this.personal_grade(data.value,itemcode)
                        return ;
                    }

		            if(indexGID>0){
		            
                        var selectName = data.elem[indexGID].getAttribute("select_name");
                       
			            //获取当前选中下拉项的自定义属性值 itemLevel
			            var goodsName = data.elem[indexGID].getAttribute("itemLevel");
						
						
						//行业
	                	if(goodsName<2 && selectName=='subIndustry'){
	                    	_this.htListChildren({itemId:data.value}) 
		                }else if(goodsName==1 && selectName=='subArea'){//省市区
	                   		_this.getCity2({itemId:data.value})
		                }else if(goodsName==2 && selectName=='subArea'){
	                   		_this.getCity3({itemId:data.value})
		                }
                  	}
                })
                _this.show_time(_this.DetailInfo[_this.shenfen][_this.titleSelect])

					
            
            	
            
            })
            
        },
        created() {
            this.shenfen=this.$route.query.shenfen;
            this.tabSelect=this.$route.query.tabSelect;

            //如果是第一个选择身份就返回
            if(this.tabSelect==0){
                this.$router.push({path:'/complete'})
            };
            
            if(this.tabSelect>=2){
                this.$router.push({path:'/complete/complete_three',query:{shenfen:this.shenfen,tabSelect:2}})
            }
        },
        //等vue渲染完了再渲染layui的
        updated(){
            this.show_time(this.DetailInfo[this.shenfen][this.titleSelect]);
        	this.layui_render()
        },
        
    }
    window.delete_tr = function(obj){
        obj.parentElement.parentElement.parentElement.removeChild(obj.parentElement.parentElement)
    }
</script>

<!--这个style是单独拎出来修改父级样式的-->
<style>

	.complete_two_select{
        width: 1400px;
        height: 807px;
        background-color: #fff;
        border-radius:5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 50px;
        overflow-y: auto;
        overflow-x: hidden;
        position: relative;
        
    }
    /*美化滚动条*/
    .complete_two_select::-webkit-scrollbar {
        width:5px;
        height: 830px;
    }
    .complete_two_select::-webkit-scrollbar-track {
        -webkit-border-radius: 2rem;
        -moz-border-radius: 2rem;
        border-radius:2rem;
    }
    .complete_two_select::-webkit-scrollbar-thumb {
        -webkit-border-radius: 2rem;
        -moz-border-radius: 2rem;
        border-radius:2rem;
    }
    .complete_two_top{
        display: flex;
        justify-content:center;
    }
    .complete_two_top div{
        text-align: center;
        width: 779px;
	    height: 57px;
        font-size: 24px;
        color: #353535;
        border-bottom: 1px solid #d2d2d2;
        display: flex;
        position: relative;
        margin-top: 50px
    }
    .complete-two-nav{
        display: block;
        padding:32px 0;
        width: 50%;
        box-sizing: border-box;
        cursor:pointer;
        padding-top: 0px;
        color:#bbbbbb;
    }
    .complete-two-nav.selected{
        color: #353535 !important;
    }
    #after,#after2{
        content:'';
        display: block;
        width: 209px;
        height: 2px;
        background: #9e0100;
        position: absolute;
        bottom: -1px !important;
        left: 0;
    }
    #after2{
        width: 104px;
    }
    .sfxx{
        width: 1370px;
        display: flex;
        height: 30px;
        margin-top: 55px;
        color: #bbbbbb;
        border-bottom:solid 2px #eeeeee;
        padding-bottom: 25px;
        align-items: center
    }
    
    .sfxx li{
        display: block;
        /*height: 16px;*/
        font-size: 16px;
        /*line-height: 16px;*/
        color: #bbbbbb;
        padding: 5px;
        border-radius: 3px;
	    border: solid 1px #e4e1e1;
        margin: 0 8px;
        padding: 7px 12px;
    }
    .sfxx li:first-child{
        margin-left: 0px !important
    }
    .sfxx .selected{
        background-color: #9e0100;
        color: #fff;
    }
    .sfxx i{
       display: block;
       width: 5px;
       height: 5px;
       background-color: #cccccc;
       border-radius: 10px ;
       margin: 0 3px;
    }
    .complete-form{
        width:100%
    }
    .complete-article{
        text-align: center;
        
    }
    .my_table{
        margin: 0 auto 25px !important;
        width: 90% !important;

    }
    .no-border{
        border:none;
        outline: none
    }
    .layui-row{
        padding: 0 30px;
        box-sizing: border-box;
    }
    .layui-form-label{
    	padding: 9px 10px !important;
    	width: 115px !important;;
    }

    .myeject .layui-input-block{
        margin-left: 30px !important;
        margin-top: 10px;
    }
    .layui-input-block{
   	    margin-left: 135px;
    }
    .layui-form-item .layui-input-inline{
	    width: 242px;
    }
    .layui-laydate-content table{
    	width:100%
    }
    .layui-form-radio{
	   	margin: -5px 10px 0 0 !important;
	}
    .eject_tc{
		display: flex;
		flex-direction: row;
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		right: 0;
		bottom: 0;
		top:0;
		background-color: rgba(0,0,0,0.3);
		justify-content: center;
		align-items: center;
	}
	.eject_main{
		display: block;
		width: 900px;
		height: 820px;
		background-color: #fff;
		padding-bottom: 50px;
		box-sizing: border-box;
		overflow-x: hidden;
		overflow-y: auto;
	}
	/*美化滚动条*/
	.eject_main::-webkit-scrollbar {
		width:5px;
		height: 830px;
	}
	.eject_main::-webkit-scrollbar-track {
		-webkit-border-radius: 2rem;
		-moz-border-radius: 2rem;
		border-radius:2rem;
	}
	.eject_main::-webkit-scrollbar-thumb {
		-webkit-border-radius: 2rem;
		-moz-border-radius: 2rem;
		border-radius:2rem;
	}

	.layui-layer-setwin {
		position: relative !important;
		right: -60px !important;
		float: right;
	}
	.layui-form-item{
		clear: none !important;
		margin-bottom: 25px !important;
	}
	.layui-input{
		border-color: #d4d0d0 !important;
	}
	.layui-select-title{
		padding-left: 3px;
	}
	.nameejec .layui-form-select{
		border:1px solid #d4d0d0 !important
	}



</style>
<style>

  @media screen and (max-width: 415px) {
      .complete_two_select{
          height: auto;
      }
      .sfxx{
          display: none;
      }
      .complete_two_top div{
          margin-top: 20px;
      }
      .layui-form-item{
          overflow: scroll;
      }
      .my_table{
          /* min-width: 1400px; */
      }
      .layui-input-inline>.layui-unselect .layui-edge{
          margin-top: 20px;
      }
      #after2 {
          width: 190px;
      }
  }
</style>