<template>
	<div>
		<div class="wszcxx" v-else-if="tabSelect==1" key="a2">
	        <div class="xinxi qiye" v-if="shenfen==0">
	            <ul class="sfxx">
	                <template v-for="(title,index) in titleInfo['企业会员']">
	                    <li :class="index==titleSelect?'selected':''">{{title}}</li>
	                </template>
	            </ul>
	            <transition name="info" mode="in-out">
	                <form @submit.prevent="submit($event)">
	                    <template v-for="(gsxx,index) in DetailInfo['企业会员']">
	                        <div class="fill_info" v-show="titleSelect==index" :key="'b'+index">
	                            <template v-for="item in gsxx">
	                                <label v-if="item[0]!=='hr'">
	                                    <p>{{item[0]}}</p>
	
	                                    <input v-if="item[1]==1" :name="item[2]" type="text" :placeholder="item[3]"/>
	
	                                    <select v-else-if="item[1]==2" :name="item[2]">
	                                        <option v-for="list in item[3]" :value="list.value">{{list.name}}</option>
	                                    </select>
	
	                                    <span v-if="item[1]==5" style="display:flex;justify-content: space-between;flex-wrap: wrap">
	                                        <template v-for="(num,index) in item[2]">
	                                            <input style="margin-bottom:10px" :name="num" type="text" :placeholder="item[3][index]"/>
	                                        </template>
	                                    </span>
	
	                                </label>
	                                <hr v-else/>
	                            </template>
	                        </div>
	                    </template>
	                    <button class="btn submit" v-show="is_submit" type="submit">提交</button>
	                </form>
	            </transition>
	        </div>
	        
	        
	        
	        <div class="xinxi fuwuqi" v-if="shenfen==2">
	            <ul class="sfxx">
	                <template v-for="(title,index) in titleInfo['服务供应商']">
	                    <li :class="index==titleSelect?'selected':''">{{title}}</li>
	                </template>
	            </ul>
	
	            <transition name="info" mode="in-out">
	
	                <form @submit.prevent="submit($event)">
	                    <template v-for="(gsxx,index) in DetailInfo['服务供应商']">
	                        <div class="fill_info" v-show="titleSelect==index" :key="'b'+index">
	                            <template v-for="item in gsxx">
	                                <label v-if="item[0]!=='hr'">
	                                    <p>{{item[0]}}</p>
	
	                                    <input v-if="item[1]==1" :name="item[2]" type="text" :placeholder="item[3]"/>
	
	                                    <select v-else-if="item[1]==2" :name="item[2]">
	                                        <option v-for="list in item[3]" :value="list">{{list}}</option>
	                                    </select>
	
	                                    <span v-if="item[1]==5" style="display:flex;justify-content: space-between;flex-wrap: wrap">
	                                        <template v-for="(num,index) in item[2]">
	                                            <input style="margin-bottom:10px" :name="num" type="text" :placeholder="item[3][index]"/>
	                                        </template>
	                                    </span>
	
	                                </label>
	                                <hr v-else/>
	                            </template>
	                        </div>
	                    </template>
	
	                    <button class="btn submit" v-show="is_submit" type="submit">提交</button>
	                </form>
	            </transition>
	        </div>
	        <article>
	            <button class="btn" @click="prev()">上一步</button>
	            <button class="btn" @click="next()">下一步</button>
	        </article>
	    </div>
	
	    <div class="complate-three" v-else-if="tabSelect==2" key="a3">完善安全设置</div>
	    <div class="complate-four" v-else-if="tabSelect==3" key="a4"> 
	        <!-- 注册成功 -->
	        <img src="../../assets/imgs/login_complete.png"/>
	    </div>
		
	</div>
</template>

<script>
</script>

<style>
</style>