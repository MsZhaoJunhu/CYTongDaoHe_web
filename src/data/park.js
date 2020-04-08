let ares=[
    [
        "热门",
        "全部",      
        ["重庆","北京","天津","上海","南京","济南","青岛","广州","厦门","杭州","深圳","武汉","成都"],
        0,
		1,
    ], 
    [
        "区域",
        "全部",      
        ["重庆","北京","天津","上海","南京","济南","青岛","广州","厦门","杭州","深圳","武汉","成都","重庆","北京","天津","上海","南京","济南","青岛","广州","厦门","杭州","深圳","武汉","成都"],
        1,0
    ], 
    [
        "区域",
        "全部",      
        ["重庆","北京","天津","上海","南京","济南","青岛","广州","厦门","杭州","深圳","武汉","成都","重庆","北京","天津","上海","南京","济南","青岛","广州","厦门","杭州","深圳","武汉","成都"],
        1,-1
    ], 
    [
        "区域",
        "全部",      
        ["重庆","北京","天津","上海","南京","济南","青岛","广州","厦门","杭州","深圳","武汉","成都","重庆","北京","天津","上海","南京","济南","青岛","广州","厦门","杭州","深圳","武汉","成都"],
        2,-1
    ],
    [
        "区域",
        "全部",      
        ["重庆","北京","天津","上海","南京","济南","青岛","广州","厦门","杭州","深圳","武汉","成都","重庆","北京","天津","上海","南京","济南","青岛","广州","厦门","杭州","深圳","武汉","成都"],
        2,-1
    ],
],

park_list=["园区一","园区一","园区一","园区一","园区一","园区一"],

dongtai=[
	{url:'',title:'重庆：高标准规划建设打造西部创新高地',date:'2019-04-25'},
	{url:'',title:'',date:'2019-04-25'},
	{url:'',title:'',date:'2019-04-25'},
	{url:'',title:'',date:'2019-04-25'},
],
zhengce=[
	{url:'',title:'1',date:'2019-04-25'},
	{url:'',title:'2',date:'2019-04-25'},
	{url:'',title:'3',date:'2019-04-25'},
	{url:'',title:'4',date:'2019-04-25'},
],

xinxi=[
	{url:'',title:'重庆：高标准规划建设打造西部创新高地',date:'2019-04-25'},
	{url:'',title:'3',date:'2019-04-25'},
	{url:'',title:'',date:'2019-04-25'},
	{url:'',title:'',date:'2019-04-25'},
],
xuqiu=[
	{url:'',title:'1',date:'2019-04-25'},
	{url:'',title:'2',date:'2019-04-25'},
	{url:'',title:'3',date:'2019-04-25'},
	{url:'',title:'4',date:'2019-04-25'},
],

company_logo=[
	require('@/assets/imgs/company_logo.png'),
	require('@/assets/imgs/company_logo.png'),
	require('@/assets/imgs/company_logo.png'),
	require('@/assets/imgs/company_logo.png'),
	require('@/assets/imgs/company_logo.png'),
	require('@/assets/imgs/company_logo.png'),
	require('@/assets/imgs/company_logo.png'),
	require('@/assets/imgs/company_logo.png')],

process_title=['买地自建','厂房租赁','写字楼租赁','公司注册','注册优惠'],
process=[require('@/assets/imgs/mdzj.png'),require('@/assets/imgs/cfzd.png'),require('@/assets/imgs/xzlzd.png'),require('@/assets/imgs/gszc.png'),require('@/assets/imgs/zcyh.png')],

investment_con=[
	{lab:"公司名称",form_type:1,input_place:'需求方公司名称',class_name:"investment_input investment_input_compay",form_name:"company"},
	{lab:"现所在地址",form_type:1,input_place:'公司所在地址',class_name:"investment_input investment_input_address",form_name:""},
	{lab:"所在行业",form_type:2,list:
		[
			{
				option:[
					{value:'',name:"一级行业类别"},
					{value:1,name:"ceshi 1"},
					{value:1,name:"ceshi 1"},
					{value:1,name:"ceshi 1"}
				],
				input_place:'一级行业类别',
				class_name:"investment_input investment_select1",
				form_name:""
			},{
				option:[
					{value:'',name:"二级行业类别"},
					{value:1,name:"ceshi 2"}
				],
				input_place:'二级行业类别',
				class_name:"investment_input investment_select2",
				form_name:""
			},{
				option:[
					{value:'',name:"三级行业类别"},
					{value:1,name:"ceshi 3"},
					{value:1,name:"ceshi 3"}
				],
				input_place:'三级行业类别',
				class_name:"investment_input investment_select3",
				form_name:""
			}
		],
		class_name:" investment_input_select"
	},
	{lab:"主营业务",form_type:3,input_place:'详细的描述',class_name:" nvestment_textarea",form_name:""},
	
	{lab:"联系人姓名",form_type:1,input_place:'联系人姓名',class_name:"investment_input investment_name",form_name:""},
	{lab:"联系电话",form_type:1,input_place:'联系人电话',class_name:"investment_input investment_publics investment_tell",form_name:""},
	{lab:"QQ",form_type:1,input_place:'QQ号码',class_name:"investment_input investment_publics investment_qq",form_name:""},
	{lab:"微信",form_type:1,input_place:'微信号',class_name:"investment_input investment_publics investment_wx",form_name:""},
	{lab:"",form_type:4,input_place:'报名时发送企业用户注册信息',class_name:"investment_radio",form_name:""},
],
investment_per=[
	{lab:"联系人姓名",form_type:1,input_place:'联系人姓名',class_name:"investment_input investment_per_name",form_name:""},
	{lab:"联系人电话",form_type:1,input_place:'联系人电话',class_name:"investment_input investment_per_tell",form_name:""},
	{lab:"QQ",form_type:1,input_place:'QQ',class_name:"investment_input investment_per_qq",form_name:""},
	{lab:"微信",form_type:1,input_place:'微信',class_name:"investment_input investment_per_wx",form_name:""}
]
export default{
    ares,
    park_list,
    dongtai,
    zhengce,
    xinxi,
    xuqiu,
    process,
    process_title,
    company_logo,
    investment_con,
	investment_per,
}

