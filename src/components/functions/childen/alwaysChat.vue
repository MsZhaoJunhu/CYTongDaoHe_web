<template>
	<div class="chatBox">
		<div class="chatTitle">
			<div class="userInfo">
				<div>
					<img :src="user.userImg" alt="头像图标">
					<span>{{user.userName}}</span>
				</div>
				<div>
					<img src="../../../assets/icon/search.png" alt="搜索图标">
					<input type="text" placeholder="搜索">
				</div>
			</div>
			<div>
				<h1 class="标题分组">客服组
					<i :class="showTable[0]"></i>
				</h1>
				<div class="组">
					<div class="messagebox" @click="changeActive(i,$event,item.room_id)" v-for="(item,i) in msg.kf" :key="i">
						<img :src="item.imgUrl" alt="消息图标">
						<div>
							<p>
								<span>{{item.title}}</span>
								<span :class="item.string=='未读'?'redSpan':''">{{item.timeOrnumber}}</span>
							</p>
							<span>{{item.content}}</span>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h1 class="标题分组">个人组
					<i :class="showTable[0]"></i>
				</h1>
				<div class="组">
					<div class="messagebox" @click="changeActive(i,$event)" v-for="(item,i) in msg.gr" :key="i">
						<img :src="item.imgUrl" alt="消息图标">
						<div>
							<p>
								<span>{{item.title}}</span>
								<span :class="item.string=='未读'?'redSpan':''">{{item.timeOrnumber}}</span>
							</p>
							<span>{{item.content}}</span>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h1 class="标题分组">企业组
					<i :class="showTable[0]"></i>
				</h1>
				<div class="组">
					<div class="messagebox" @click="changeActive(i,$event)" v-for="(item,i) in msg.qy" :key="i">
						<img :src="item.imgUrl" alt="消息图标">
						<div>
							<p>
								<span>{{item.title}}</span>
								<span :class="item.string=='未读'?'redSpan':''">{{item.timeOrnumber}}</span>
							</p>
							<span>{{item.content}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="chatContent">
			<h5 v-if="isShow">{{h5Title}}</h5>
			<div v-if="isShow" id="chat_box" @click="hide">
				<div v-for="children in msgs">
					
					<div class="item other_party" v-if="children.type==1">
						<span><img :src="children.imgURL" alt="头像"></span>
						<div v-html="children.content" v-if="children.msg_type===0"></div>
						<div v-else><img :src="children.content" /></div>
					</div>
					
					<div class="item" v-if="children.type==2">
						<span><img :src="children.imgURL" alt="头像"></span>
						<div v-html="children.content" v-if="children.msg_type===0"></div>
						<div v-else><img :src="children.content" /></div>
					</div>
					
				</div>
			</div>
			<div class="dialog_box">

				<div v-show="fun" class="more_box">
					<ul class="emoji-list" v-show="is_emoji">
						<li @click="emoji($event)">&#x1F600;</li>
						<li @click="emoji($event)">&#x1F601;</li>
						<li @click="emoji($event)">&#x1F602;</li>
						<li @click="emoji($event)">&#x1F603;</li>
						<li @click="emoji($event)">&#x1F604;</li>
						<li @click="emoji($event)">&#x1F605;</li>
						<li @click="emoji($event)">&#x1F606;</li>
						<li @click="emoji($event)">&#x1F607;</li>
						<li @click="emoji($event)">&#x1F608;</li>
						<li @click="emoji($event)">&#x1F609;</li>
						<li @click="emoji($event)">&#x1F60A;</li>
						<li @click="emoji($event)">&#x1F60B;</li>
						<li @click="emoji($event)">&#x1F60C;</li>
						<li @click="emoji($event)">&#x1F60D;</li>
						<li @click="emoji($event)">&#x1F60E;</li>
						<li @click="emoji($event)">&#x1F60F;</li>
						<li @click="emoji($event)">&#x1F610;</li>
						<li @click="emoji($event)">&#x1F611;</li>
						<li @click="emoji($event)">&#x1F612;</li>
						<li @click="emoji($event)">&#x1F613;</li>
						<li @click="emoji($event)">&#x1F614;</li>
						<li @click="emoji($event)">&#x1F615;</li>
						<li @click="emoji($event)">&#x1F616;</li>
						<li @click="emoji($event)">&#x1F617;</li>
						<li @click="emoji($event)">&#x1F618;</li>
						<li @click="emoji($event)">&#x1F619;</li>
						<li @click="emoji($event)">&#x1F61A;</li>
						<li @click="emoji($event)">&#x1F61B;</li>
						<li @click="emoji($event)">&#x1F61C;</li>
						<li @click="emoji($event)">&#x1F61D;</li>
						<li @click="emoji($event)">&#x1F61E;</li>
						<li @click="emoji($event)">&#x1F61F;</li>
						<li @click="emoji($event)">&#x1F620;</li>
						<li @click="emoji($event)">&#x1F621;</li>
						<li @click="emoji($event)">&#x1F622;</li>
						<li @click="emoji($event)">&#x1F623;</li>
						<li @click="emoji($event)">&#x1F624;</li>
						<li @click="emoji($event)">&#x1F625;</li>
						<li @click="emoji($event)">&#x1F626;</li>
						<li @click="emoji($event)">&#x1F627;</li>
						<li @click="emoji($event)">&#x1F628;</li>
						<li @click="emoji($event)">&#x1F629;</li>
						<li @click="emoji($event)">&#x1F62A;</li>
						<li @click="emoji($event)">&#x1F62B;</li>
						<li @click="emoji($event)">&#x1F62C;</li>
						<li @click="emoji($event)">&#x1F62D;</li>
						<li @click="emoji($event)">&#x1F62E;</li>
						<li @click="emoji($event)">&#x1F62F;</li>
						<li @click="emoji($event)">&#x1F630;</li>
						<li @click="emoji($event)">&#x1F631;</li>
						<li @click="emoji($event)">&#x1F632;</li>
						<li @click="emoji($event)">&#x1F633;</li>
						<li @click="emoji($event)">&#x1F634;</li>
						<li @click="emoji($event)">&#x1F635;</li>
						<li @click="emoji($event)">&#x1F636;</li>
						<li @click="emoji($event)">&#x1F637;</li>
						<li @click="emoji($event)">&#x1F638;</li>
						<li @click="emoji($event)">&#x1F639;</li>
						<li @click="emoji($event)">&#x1F63A;</li>
						<li @click="emoji($event)">&#x1F63B;</li>
						<li @click="emoji($event)">&#x1F63C;</li>
						<li @click="emoji($event)">&#x1F63D;</li>
						<li @click="emoji($event)">&#x1F63E;</li>
						<li @click="emoji($event)">&#x1F63F;</li>
						<li @click="emoji($event)">&#x1F640;</li>
						<li @click="emoji($event)">&#x1F641;</li>
						<li @click="emoji($event)">&#x1F642;</li>
						<li @click="emoji($event)">&#x1F643;</li>
						<li @click="emoji($event)">&#x1F644;</li>
						<li @click="emoji($event)">&#x1F916;</li>
						<li @click="emoji($event)">&#x1F917;</li>
						<li @click="emoji($event)">&#x1F920;</li>
						<li @click="emoji($event)">&#x1F921;</li>
						<li @click="emoji($event)">&#x1F922;</li>
						<li @click="emoji($event)">&#x1F923;</li>
						<li @click="emoji($event)">&#x1F924;</li>
						<li @click="emoji($event)">&#x1F925;</li>
						<li @click="emoji($event)">&#x1F927;</li>
						<li @click="emoji($event)">&#x1F928;</li>
						<li @click="emoji($event)">&#x1F929;</li>
						<li @click="emoji($event)">&#x1F92A;</li>
						<li @click="emoji($event)">&#x1F92B;</li>
						<li @click="emoji($event)">&#x1F92F;</li>
						<li @click="emoji($event)">&#x1F92C;</li>
						<li @click="emoji($event)">&#x1F92D;</li>
						<li @click="emoji($event)">&#x1F92E;</li>
					</ul>
				</div>

				<div class="edit_bar">
					<div class="edit_left">
						<div @click="showEmoji">
							<img src="../../../assets/icon/chat_emoji.png" />
						</div>
						<div>
							<input type="file" @change="img">
							<img src="../../../assets/icon/chat_file.png" />
						</div>
						<div>
							<img src="../../../assets/icon/chat_phrase.png" />
						</div>
					</div>
				</div>
				<div>
					<textarea v-model="input" id="input" @keyup.enter="submit">
                    </textarea>
					<div class="send_box">
						<button id="send" @click="submit">发送</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {getMyFriend} from "@/components/api/api"
	export default {
		props: {

		},
		data() {
			return {
				showTable: [1, 1, 1],
				Dheight: 0,
				//h5标题
				h5Title: "标题",
				isShow: 1,
				msgs: [
					// {
					// 	imgURL: require('../../../assets/funsIcon/megsicon1.png'),
					// 	type: 1, //1自己，2对方
					// 	msg_type: 1, //1文字，2图片
					// 	content: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述' +
					// 		'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述' +
					// 		'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述' +
					// 		'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述'
					// },
					// {
					// 	imgURL: require('../../../assets/funsIcon/megsicon1.png'),
					// 	type: 2, //1自己，2对方
					// 	msg_type: 1, //1文字，2图片
					// 	content: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述'
					// },
				],
				//交流显示用户名称
				user: {
					userName: "用户名称",
					userImg: require('../../../assets/funsIcon/userTX.png')
				},
				//交流显示信息
				msg: {
					'kf': [{
						imgUrl: require('../../../assets/funsIcon/messageIcon1.png'),
						title: "标题",
						content: "这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容",
						timeOrnumber: '2019.10.9',
						room_id:'2'
					}, ],
					'gr': [{
						imgUrl: require('../../../assets/funsIcon/messageIcon1.png'),
						title: "标题",
						content: "这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容",
						timeOrnumber: '2019.10.9',
						room_id:'22'
					}, ],
					'qy': [{
						imgUrl: require('../../../assets/funsIcon/messageIcon1.png'),
						title: "标题",
						content: "这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容",
						timeOrnumber: '2019.10.9',
						room_id:'222'
					}, ],
				},
				fun: 0,
				is_emoji: 0,
				input: '',
				ws:new WebSocket("ws://192.168.1.190:9090")
			}
		},
		methods: {
			send(content){
				this.ws.send(JSON.stringify({
					t:2,
					room_id:12,
					n:JSON.parse(sessionStorage.getItem('user')).userName,
					body:content
				}))
			},
			link(room_id){
				const that = this
				if ("WebSocket" in window) {
					that.ws.onopen = function() {
						that.ws.send(
							JSON.stringify({
								t: 0, //0 第一次打开 
								room_id: room_id,
							})
						);
					};
					that.ws.onmessage = function(evt) {
						const res = JSON.parse(evt.data)
						if(res.t === 0){
							if(res.n !== JSON.parse(sessionStorage.getItem('user')).userName){
								that.msgs.push({
									imgURL:'',
									msg_type: res.type, //0文字,1图片
									type: 2, //1自己,2对方
									content:res.body,
								})
							}else{
								that.msgs.push({
									imgURL:'',
									msg_type: res.type, //0文字,1图片
									type: 1, //1自己,2对方
									content:res.body,
								})
							}
						}
						that.scroll()
					};
					that.ws.onclose = function() {
						alert('连接断开')
					};
				} else {
					// 浏览器不支持 WebSocket
				}
			},
			changeActive(i, e, room) {
				var el = e.currentTarget;
				//点击消息后时间显示未最后一条消息的时间  需要接口中返回的时间填充上去
				//点击未读消息的窗口后  未读显示消失
				if (el.lastElementChild.firstElementChild.lastElementChild.className == "redSpan") {
					el.lastElementChild.firstElementChild.lastElementChild.className = "";
					var data = new Date();
					// var year=data.getFullYear();
					// var month=data.getMonth()+1;
					// var day=data.getDay();
					var hours = data.getHours();
					var min = data.getMinutes();
					// var OnData=year+'.'+month+'.'+day
					var OnData = hours + ':' + min;
					el.lastElementChild.firstElementChild.lastElementChild.innerHTML = OnData;
				}
				var arr = document.getElementsByClassName("messagebox");
				for (var j = 0; j <= arr.length - 1; j++) {
					arr[j].className = "messagebox"
				}
				el.className += " active";
				this.isShow = true;
				var act = document.getElementsByClassName("active")
				var title = act[0].lastElementChild.firstElementChild.firstElementChild;
				this.h5Title = title.innerHTML;
				
				//需要调用接口查询到这个客户发送的历史消息填充到msgs中
				this.link(room)
			},
			emoji(event) {
				let e = event.currentTarget
				this.input += e.innerText
				document.getElementById('input').focus()
				this.hide()
			},
			show() {
				this.fun = 1
			},
			showEmoji() {
				if (this.is_emoji == 0) {
					this.show()
					this.is_emoji = 1
				} else {
					this.hide()
				}
			},
			hide() {
				this.fun = 0
				this.is_emoji = 0
			},
			submit() {
				const that = this
				if (that.input.length <= 1) {
					return false;
				}
				// that.msgs.push({
				// 	imgURL:JSON.parse(sessionStorage.getItem('user')).avatar,
				// 	msg_type: 1, //1文字,2图片,3音频,4视频
				// 	type: 1, //1自己,2对方
				// 	content: that.input,
				// })
				that.send(that.input)
				that.input = ''
				that.scroll()
			},
			img(e) { //file点击事件
				const that = this
				var file = e.path[0].files[0];
				//判断是否是图片类型
				if (!/image\/\w+/.test(file.type)) {
					alert("只能选择图片");
					return false;
				}
				var reader = new FileReader();
				reader.onload = function(e) {
					that.msgs.push({ 
						imgURL: JSON.parse(sessionStorage.getItem('user')).avatar,
						msg_type: 2, //1文字,2图片,3音频,4视频,5提示
						type: 1, //1自己,2对方,3系统提示
						content: reader.result,
					})
					that.scroll()
				}
				reader.readAsDataURL(e.path[0].files[0])
			},
			scroll() {
				let top = 0
				setTimeout(function() {
					var div = document.getElementById('chat_box');
					div.scrollTop += top + 5000
				}, 100)
			},
		},
		created() {
			getMyFriend().then(res => {
				
            })
		},
		mounted(){
			const that = this
			that.link(String([123456,123457,123458]))
		}
		
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.chatBox {
		width: 100%;
		height: 100%;
		display: flex;
		box-sizing: border-box;
		/* min-width: 1400px; */
	}

	.chatTitle {
		overflow-y: scroll;
	}

	.chatTitle {
		width: 18%;
		background: #f9f9f9;
	}

	.chatContent {
		height: calc(100vh - 80px);
		width: 82%;
		background: #fff;
		display: flex;
		flex-direction: column;
	}
	

	.active {
		background: #fff;
	}

	.userInfo {
		width: 100%;
		height: 108px;
		box-sizing: border-box;
		padding: 16px;
	}

	.userInfo>div:first-child {
		display: flex;
		align-items: center;
		margin-bottom: 12px;
	}

	.userInfo>div:first-child>img {
		width: 40px;
		height: 40px;
		margin-right: 16px;
	}

	.userInfo>div:last-child {
		height: 28px;
		width: 100%;
		display: flex;
		align-items: center;
		background: #eeeeee;
		padding: 8px;
		box-sizing: border-box;
		border-radius: 4px;
	}

	.userInfo>div:last-child>input {
		padding-left: 8px;
		background: #eeeeee;
		border: 0;
		outline: 0;
		width: 90%;
	}

	.messagebox {
		width: 100%;
		height: 80px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		padding: 19px 16px;
	}

	.messagebox>div {
		width: 80%;
		display: flex;
		flex-direction: column;
		margin-left: 10px;
	}

	.messagebox>div>span {
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #bbbbbb;
	}

	.messagebox>div>p {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 10px;
	}

	.messagebox>div>p>span:last-child {
		color: #bbbbbb;
		font-size: 12px;
	}

	.chatContent>h5 {
		width: 100%;
		height: 58px;
		line-height: 58px;
		font-size: 24px;
		box-sizing: border-box;
		border-bottom: 1px solid #eeeeee;
		padding-left: 28px;
	}

	.redSpan {
		display: block;
		width: 16px;
		height: 16px;
		border-radius: 8px;
		text-align: center;
		line-height: 16px;
		background: #9e0100;
		color: #fff !important;
	}

	/* 设置滚动条的样式 */
	.chatTitle::-webkit-scrollbar {
		width: 10px;
	}

	/* 滚动槽 */
	.chatTitle::-webkit-scrollbar-track {
		border-radius: 8px;
	}

	/* 滚动条滑块 */
	.chatTitle::-webkit-scrollbar-thumb {
		border-radius: 8px;
		border: 2px solid rgba(0, 0, 0, 0);
		box-shadow: 8px 0 0 green inset;
	}

	.chatTitle::-webkit-scrollbar-thumb:hover {
		box-shadow: 8px 0 0 #666 inset;
	}

	.chatTitle::-webkit-scrollbar-thumb:window-inactive {
		display: none;
	}

	.chatTitle::-webkit-scrollbar {
		width: 0px;
		height: 0px;
	}

	.chatTitle:hover::-webkit-scrollbar {
		width: 10px;
	}

	.chatTitle::-webkit-scrollbar-thumb {
		border-radius: 10px;
		border: 2px solid rgba(0, 0, 0, 0);
		box-shadow: 10px 0 0 #999 inset;
	}

	.chatTitle {
		overflow-y: overlay;
		word-wrap: break-word;
		box-shadow: 2px 0 10px rgba(0,0,0,.5) inset;
	}

	.dialog_box {
		width: 100%;
		padding: 0 !important;
	}

	.dialog_box>div {
		width: 100% !important;
		margin: 0 !important;
	}

	.dialog_box textarea {
		min-height: 120px;
		max-height: 250px;
		width: 100%;
		resize: none;
		border: none;
		padding: 10px;
		box-sizing: border-box;
		font-size: 18px;
	}

	.edit_bar {
		height: 30px !important;
		width: 100%;
		background: rgba(0, 0, 0, .05);
	}

	.edit_left {
		width: 50% !important;
		padding: 0 !important;
		background: transparent !important;
		border-radius: 0 !important;
		display: flex;
		align-items: center;
		box-shadow: none !important;
		margin: 0 !important;
		height: 100% !important;
	}

	.edit_left>div {
		position: relative;
		height: 18px;
		width: 18px;
		margin-left: 30px;
		overflow: hidden;
	}

	.edit_left>div input {
		position: absolute;
		opacity: 0;
	}

	#chat_box {
		padding: 20px;
		height: 100%;
		overflow-y: scroll;
	}

	.item {
		display: flex;
		margin-bottom: 20px;
	}
	.item span img{
		border-radius: 50%;
		width: 36px;
	}
	.item>div {
		margin: 0 10px;
		background: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, .1);
		padding: 10px;
		max-width: 60%;
		border-radius: 5px;
		font-size: 14px;
		line-height: 25px;
		letter-spacing: 1px;
	}

	.item>div img {
		max-height: 500px;
	}

	.other_party {
		flex-direction: row-reverse;
	}

	.send_box {
		display: flex;
		justify-content: flex-end;
		padding: 0 10px 10px 0;
	}

	#send {
		box-shadow: none;
		border: 1px solid rgba(0, 0, 0, .2);
		letter-spacing: 5px;
		background: #f6f6f6;
		padding: 3px 15px;
		margin: 0 !important;
	}

	.dialog_box {
		position: relative;
	}

	.more_box {
		position: absolute;
		top: -200px;

	}

	.emoji-list {
		width: 500px;
		display: flex;
		flex-wrap: wrap;
		height: 200px;
		overflow-y: auto;
		border: 1px solid rgba(0, 0, 0, .1);
		padding: 10px;
		padding-right: 0;
		box-sizing: border-box;
	}

	.emoji-list li {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		font-size: 20px;
	}


	/*滚动条样式*/
	.emoji-list::-webkit-scrollbar,
	#chat_box::-webkit-scrollbar {
		/*滚动条整体样式*/
		width: 4px;
		/*高宽分别对应横竖滚动条的尺寸*/
		height: 4px;
	}

	.emoji-list::-webkit-scrollbar-thumb,
	#chat_box::-webkit-scrollbar-thumb {
		/*滚动条里面小方块*/
		border-radius: 5px;
		-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
		background: rgba(0, 0, 0, 0.2);
	}

	.emoji-list::-webkit-scrollbar-track,
	#chat_box::-webkit-scrollbar-track {
		/*滚动条里面轨道*/
		-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
		border-radius: 0;
		background: rgba(0, 0, 0, 0.1);
	}

	.标题分组 {
		background: #9D0000;
		color: #fff;
		font-size: 18px;
		padding: 5px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.标题分组 i {
		position: absolute;
		right: 15px;
		width: 8px;
		height: 8px;
		border-right: 2px solid #fff;
		border-bottom: 2px solid #fff;
		transform: rotateZ(45deg) translateY(-4px);
	}

	.标题分组 i.shouqi {
		transform: rotateZ(45deg);
	}
</style>
