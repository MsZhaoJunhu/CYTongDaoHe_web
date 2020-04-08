let titleInfo=[
    //企业
    [
        "工商信息",
        "高管信息",
        "企业信息",
        "经营情况",
        "业务情况",
        "发展规划",
    ],
    //服务商
    [
        "工商信息",
        "高管信息",
        "企业信息",
        "经营情况",
        "业务情况",
        "典型服务案例"
    ],
    //个人会员
    [
        "个人信息",
        "个人资源",
    ],
    //共享人才
    [
        "基本信息",
        "个人经历",
        "项目经验",
        "服务意愿",
        "资质证书",
        "自我评价",
    ]
];



let DetailInfo=[
    //企业
    [
        //工商信息
        [
            ["公司名称","1","corpName","请输入公司名称"],
            ["公司地址","1","corpAdd","请输入公司地址"],
            ["公司电话","1","corpPhoneno","请输入公司电话"],
            ["公司邮箱","1","corpEmail","请输入公司邮箱"],
            ["公司官网","1","corpWeb","请输入官网"],
            ["注册资本","1","registerCapital","请输入注册资本(万元)"],
            ["实缴资本","1","actualCapital","请输入实缴资本(万元)"],
            ["经营状态","1","manageState", "请输入经营情况"],
            ["成立日期","8","establishDate","请输入成立日期"],
            ["核准日期","8","approvalDate","请输入核准日期"],
            ["注册类型","1","registerType","请输入登记注册类型"],
            ["信用代码","1","creditCode","请输入统一社会信用代码"],
            ["识别号","1","taxpayerNo","请输入纳税人识别号"],
            ["注册号","1","registerNo","请输入注册号"],
            ["机构代码","1","orgCode","请输入组织机构代码"],
            ["登记机关","1","registerOffice","请输入登记机关"],
            //行业分类（行业+行业细分）
            ["所属行业","2","subIndustry","请输入所属行业",['subIndustry1','subIndustry2'],[[],[]]],
            ["所属区域","2","subArea","请输入所属区域",['subArea1','subArea2','subArea3'],[[],[],[]]],
            ["经营范围","1","manageRange","请输入经营范围"],
            // 19
        ],
        
        //高管信息
        [
            [
                "股东信息",
                "5",
                [
                	["姓名",1,'shareholder',"请输入股东(自然人或法人)姓名"],
                	["持股比例",1,'shareholdRatio',"请输入持股比例(百分比)"],
                	["认缴出资",1,'admitPay',"请输入认缴出资(单位:万元)"],
                	["认缴日期",8,'admitDate',"认缴日期(2018-05-13)"],
                	["实缴出资",1,'actualPay',"请输入实缴出资(单位:万元)"]
                ]
                
            ],
            [
                "董监高信息","5",
                [
                	["董监高姓名",1,'djgName',"请输入董监高姓名"],
                	["董监高职务",1,'djgpost',"请输入董监高职务"],
                	["董监高电话",1,'djgPhone',"请输入董监高电话"]
                ]
                
            ],
            [
                "管理层信息","5",
                [
                	["管理层姓名",1,'glcName',"请输入管理层姓名"],
                	["管理层部门",1,'glcDepartment',"请输入管理层部门"],
                	["管理层职务",1,'glcPost',"请输入管理层职务"],
                	["管理层电话",1,'glcPhone',"请输入管理层电话"]
                	
                ]
            ],
            
        ],
    
        //企业信息
        [
        
        
            ["组织架构","1","orgFramework","请输入组织架构"],
            ["部门职责","1","departmentDuty","请输入部门职责"],
            
        
            ["人员规模","1","personnelScale","请输入人员规模"],
            ["参保人数","1","insuranceAmount","请输入参保人数"],
            
            ["企业规模","2","corpScale","请选择企业规模",['corpScale'],
	            [
	            	[
	            		{dictItemId:'1',itemName:'大型企业'},
	            		{dictItemId:'2',itemName:'中型企业'},
	            		{dictItemId:'3',itemName:'小型企业'},
	            		{dictItemId:'4',itemName:'微型企业'}
	            	]
            	]
            ],
           
            ["愿景","3","vision","请输入企业愿景"],
            ["使命","3","mission","请输入企业使命"],
            ["价值观","3","value","请输入企业价值观"],
            ["经营理念","3","idea","请输入经营理念"],
            ["简介","3","enterpriceIntro","请输入企业简介"],
            ["logo","4","logo",""],
        
            ["知识产权","9",
            	[
            		["产权类型",2,'knowledgeType',"请输入管理层姓名",['knowledgeType'],
	            		[
	            			[
	            				{dictItemId:'1',itemName:'发明'},
		                        {dictItemId:'2',itemName:'实用新型'},
		                        {dictItemId:'3',itemName:'外观设计'}
	            			]
	            		]
	            	],
            		["产权名称",1,'iprName',"请输入知识产权名称"],
            		["发明人",1,'inventor',"请输入知识产权发明人"],
            		["专利号",1,'patentNo',"请输入专利号"],
            		["申请日期",8,'patentDt',"请输入申请日期"],
            		["专利权人",1,'patentee',"请输入专利权人"],
            		["地址",1,'iprAdd',"请输入地址"],
            		["公告日期",8,'noticeDt',"请输入授权公告日期"],
            		["公告号",1,'noticeNo',"请输入授权公告号"],
            		["证书号",1,'certificateNo',"请输入证书号"]
            	]
            
            
               
            ],
    
        ],
    
    
    	//经营情况
    	[
            ["收入","1","income3years","请输入近三年收入(逗号隔开)"],
            ["利润","1","profit3years","请输入近三年利润(逗号隔开)"],
            
        ],
        
        //业务情况
        [
            ["商业模式","1","commerceMd","请输入商业模式"],
            ["业务模式","1","businessMd","请输入业务模式"],
            ["利润来源","1","profitSource","请输入利润来源"],
            ["入门","3","priProd","请输入入门产品&服务"],
            ["标准","3","standardProd","请输入标准产品&服务"],
            ["利润","3","profitProd","请输入利润产品&服务"],
            ["竞争对手","3","jzdcompetitors","请输入竞争对手"],
            ["竞争优势","3","advantage","请输入竞争优势"],
            ["市场前景","3","marketProspect","请输入市场前景"],
            
        ],
        
        
        //发展规划
        [
        	['发展规划',10]
		]
        
    ],

	//服务器供应商
	[
		//工商信息
        [
            ["公司名称","1","splrName","请输入公司名称"],
            ["公司地址","1","splrAdd","请输入公司地址"],
            ["公司电话","1","splrPhoneno","请输入公司电话"],
            ["公司邮箱","1","splrEmail","请输入公司邮箱"],
            ["公司官网","1","splrWeb","请输入官网"],
            ["注册资本","1","registerCapital","请输入注册资本"],
            ["实缴资本","1","actualCapital","请输入实缴资本"],
            ["经营状态","1","manageState","请输入经营情况"],
            ["成立日期","8","establishDate","请输入成立日期"],
            ["核准日期","8","approvalDate","请输入核准日期"],
            ["注册类型","1","registerType","请输入登记注册类型"],
            ["信用代码","1","creditCode","请输入统一社会信用代码"],
            ["识别号","1","taxpayerNo","请输入纳税人识别号"],
            ["注册号","1","registerNo","请输入注册号"],
            ["机构代码","1","orgCode","请输入组织机构代码"],
            ["登记机关","1","registerOffice","请输入登记机关"],
            ["所属行业","2","subIndustry","请输入所属行业",['subIndustry1','subIndustry2'],[[],[]]],
            ["所属区域","2","subArea","请输入所属区域",['subArea1','subArea2','subArea3'],[[],[],[]]],

            ["经营范围","1","manageRange","请输入经营范围"],
        ],
        
        //高管信息
        [
            [
                "股东信息",
                "5",
                [
                	["姓名",1,'shareholder',"请输入股东(自然人或法人)姓名"],
                	["持股比例",1,'shareholdRatio',"请输入持股比例(百分比)"],
                	["认缴出资",1,'admitPay',"请输入认缴出资(单位:万元)"],
                	["认缴日期",8,'admitDate',"认缴日期(2018-05-13)"],
                	["实缴出资",1,'actualPay',"请输入实缴出资(单位:万元)"]
                ]
                
            ],
            [
                "董监高信息","5",
                [
                	["董监高姓名",1,'djgName',"请输入董监高姓名"],
                	["董监高职务",1,'djgpost',"请输入董监高职务"],
                	["董监高电话",1,'djgPhone',"请输入董监高电话"]
                ]
                
            ],
            [
                "管理层信息","5",
                [
                	["管理层姓名",1,'glcName',"请输入管理层姓名"],
                	["管理层部门",1,'glcDepartment',"请输入管理层部门"],
                	["管理层职务",1,'glcPost',"请输入管理层职务"],
                	["管理层电话",1,'glcPhone',"请输入管理层电话"]
                	
                ]
            ],
            
        ],  
        
        
        //企业信息
        [
            
            ["组织架构","1","orgFramework","请输入组织架构"],
            ["部门职责","1","departmentDuty","请输入部门职责"],
            
        
            ["人员规模","1","personnelScale","请输入人员规模"],
            ["参保人数","1","insuranceAmount","请输入参保人数"],
            
            ["企业规模","2","corpScale","请选择企业规模",['corpScale'],
	            [
	            	[
	            		{dictItemId:'1',itemName:'大型企业'},
	            		{dictItemId:'2',itemName:'中型企业'},
	            		{dictItemId:'3',itemName:'小型企业'},
	            		{dictItemId:'4',itemName:'微型企业'}
	            	]
            	]
            ],
           
            ["愿景","3","vision","请输入企业愿景"],
            ["使命","3","mission","请输入企业使命"],
            ["价值观","3","value","请输入企业价值观"],
            ["经营理念","3","idea","请输入经营理念"],
            ["简介","3","enterpriceIntro","请输入企业简介"],
            ["logo","4","logo",""],
        
            ["知识产权","9",
            	[
            		["产权类型",2,'knowledgeType',"请输入管理层姓名",['knowledgeType'],
	            		[
	            			[
	            				{dictItemId:'1',itemName:'发明'},
		                        {dictItemId:'2',itemName:'实用新型'},
		                        {dictItemId:'3',itemName:'外观设计'}
	            			]
	            		]
	            	],
            		["产权名称",1,'iprName',"请输入知识产权名称"],
            		["发明人",1,'inventor',"请输入知识产权发明人"],
            		["专利号",1,'patentNo',"请输入专利号"],
            		["申请日期",8,'patentDt',"请输入申请日期"],
            		["专利权人",1,'patentee',"请输入专利权人"],
            		["地址",1,'iprAdd',"请输入地址"],
            		["授权公告日期",1,'noticeDt',"请输入授权公告日期"],
            		["授权公告号",1,'noticeNo',"请输入授权公告号"],
            		["证书号",1,'certificateNo',"请输入证书号"]
            	]
            
            
               
            ],
    
        ],

		//经营情况
    	[
            ["收入","1","income3years","请输入近三年收入"],
            ["利润","1","profit3years","请输入近三年利润"],
            
        ],
        
        //业务情况
        [
            ["主营范围","1","mainBusiness","请输入主营范围"],
            ["竞争优势","1","advantage","请输入竞争优势"],
            ["三年业务量","1","businessVolume","请输入近三年业务量"],
            [
                "产品&服务名称","5",[
                	['名称',1,'prodserName',"请输入产品&服务名称"],
                	['简介',3,'prodserIntro',"请输入产品&服务简介"],
                	['主要效果',3,'mainEffect',"请输入产品主要效果"],
                	['适用范围',3,'applicationScope',"请输入产品适用范围"]
                ]
            ],
        ],
        
        //典型服务案例
         [
            ["典型服务案例",9,
            	[
            		// ['案例评价',2,'publi1',"请选择案例评价",['publi1'],
	            	// 	[
		            // 		[
		            // 			{dictItemId:'1',itemName:'经典'},
			        //             {dictItemId:'2',itemName:'优秀'},
			        //             {dictItemId:'3',itemName:'良好'},
			        //             {dictItemId:'4',itemName:'普通'}
		            // 		]
	            	// 	]
            		// ],
            		["项目名称",1,"projectName","请输入项目名称"],
            		["开始时间",8,"startDt","请输入开始时间"],
            		["结束时间",8,"endDt","请输入结束时间"],
            		["业务类型",1,"businessType","请输入业务类型"],
            		["专业领域",1,"field","请输入技术研发文档"],
            		["所在行业",1,"industry","请输入所在行业"],
            		["背景描述",3,"background","请输入背景描述"],
            		["调研工具",1,"surveyTool","请输入调研工具"],
            		["调研方法",1,"surveyMethod","请输入调研方法"],
            		["调研结论",1,"surveyResult","请输入调研结论"],
            		["解决方案",3,"solution","请输入解决方案"],
            		["实施效果",3,"effect","请输入实施效果描述"],
                    [
                        "里程碑事件","5",
                        [
                            ["里程碑",1,"lcbMilestoneEvent","请输入里程碑事件"],
                            ["主要内容",3,"lcbMainContent","请输入事件主要内容"],
                            ["开始时间",8,"lcbStartDt","请输入服务开始时间"],
                            ["结束时间",8,"lcbEndDt","请输入服务结束时间"],
                        ]
                    ],
            	]
            ],

        ]
	],
	
	
	//个人会员
    [
        //个人信息
        [
            ["真实姓名",1,"actualName","请输入真实姓名"],
            ["昵称",1,"nickname","请输入昵称"],
            ["电话号码",1,"phoneNo","请输入电话号码"],
            ["邮箱地址",1,"emailAdd","请输入邮箱地址"],
            ["身份证号",1,"idNo","请输入身份证号"],
            ["联系地址",1,"contactAdd","请输入联系地址"],
            ["微信号",1,"wechatNo","请输入微信号"],
            ["QQ号",1,"qqNo","请输入QQ号"],
            ["微博账号",1,"microblogNo","请输入微博账号"],
            ["公司名称",1,"associatedCo","请输入关联公司名称"],
            ["岗位名称",1,"postName","所在公司岗位名称"],
            ["职务",2,"corpPost","请输入所在公司职务",['corpPost'],
            	[
	                [
	                    {dictItemId:"实际控制人",itemName:"实际控制人",itemLevel:1},
	                    {dictItemId:"董事长",itemName:"董事长",itemLevel:1},
	                    {dictItemId:"董事",itemName:"董事",itemLevel:1},
	                    {dictItemId:"监事",itemName:"监事",itemLevel:1},
	                    {dictItemId:"高管",itemName:"高管",itemLevel:1},
	                    {dictItemId:"中干",itemName:"中干",itemLevel:1},
	                    {dictItemId:"基干",itemName:"基干",itemLevel:1},
	                    {dictItemId:"员工",itemName:"其它",itemLevel:1}
	                ]
                ]
            ],
		],
		//个人资料
        [
            [
                "个人资源",5,
                [
                	["资源类型",2,"resourceType","请选择资源类型",['resourceType'],
	                	[
		                	[]
	                	]
	                ],
	                ["资源等级",2,"resourceLevel","请选择资源等级",['resourceType'],
	                	[
		                	[
		                		
		                	]
	                	]
	                ],
	                ["资源标准",11,"levelStandard","请输入资源标准"],
	                ["资源描述",3,"resourceDesc","请输入资源描述"]
                ]
            ]    
        ],
    ],
	
	
	
	
	   
    //共享人才
    [
        //基本信息
        [
            ["姓名","1","actualname","请输入真实姓名"],
            ["年龄","1","age","请输入年龄"],
            ["身份证号",1,"idNo","请输入身份证号"],
            ["省份",1,"province","请输入联系地址"],
            ["城市",1,"city","请输入邮箱地址"],
            ["手机号",1,"phoneNo","请输入手机号"],
            ["注册邮箱",1,"registerEmail","请输入注册邮箱"],
            ["微信号",1,"wechatNo","请输入微信号"],
            ["QQ号",1,"qqNo","请输入QQ号"],
            ["微博账号",1,"microblogNo","请输入微博账号"],
            ["工作年限",1,"workYears","请输入工作年限"],
            ["咨询年限",1,"consultionYears","请输入咨询年限"],
        	["性别",2,"gender","请选择性别",['gender'],
        		[
		            [
		                {dictItemId:1,itemName:"男",itemLevel:1},
		                {dictItemId:2,itemName:"女",itemLevel:1}
		            ]
	            ]
	        ],
            ["工作状态",2,"workState","请选择状态",['workState'],
            	[
	            	[
	                    {dictItemId:1,itemName:"在职-咨询行业",itemLevel:1},
	                    {dictItemId:2,itemName:"在职-其他行业",itemLevel:1},
	                    {dictItemId:3,itemName:"自由职业-咨询业务为主",itemLevel:1},
	                    {dictItemId:4,itemName:"自由职业-其他业务为主",itemLevel:1},
	                    {dictItemId:5,itemName:"企业家-咨询行业",itemLevel:1},
	                    {dictItemId:6,itemName:"企业家-其它行业",itemLevel:1},
	                    {dictItemId:7,itemName:"短期离职",itemLevel:1},
	                    {dictItemId:8,itemName:"其它",itemLevel:1}
                    ]
                ]
            ]
            
        ],
        
        //教育经历
        [
            [
            	"教育经历","5",
            	[
            		["学校名称",1,"schoolName","请输入学校名称"],
            		["开始时间",8,"schoolStartDt","请输入就读开始时间"],
            		["结束时间",8,"schoolEndDt","请输入就读结束时间"],
            		["所学专业",1,"schoolMajor","请输入所学专业"],
            		["是否统招",2,"unifiedBachelor","请选择",['unifiedBachelor'],
            			[
            				[
            					{dictItemId:"是",itemName:"是",itemLevel:1},
            					{dictItemId:"否",itemName:"否",itemLevel:1}
            				]
            			]
            		],
            		["学历",2,"eduDegree","请选择学历",['eduDegree'],
            			[
            				[
            					{dictItemId:1,itemName:"中技",itemLevel:1},
		                        {dictItemId:2,itemName:"高中",itemLevel:1},
		                        {dictItemId:3,itemName:"中专",itemLevel:1},
		                        {dictItemId:4,itemName:"大专",itemLevel:1},
		                        {dictItemId:5,itemName:"本科",itemLevel:1},
		                        {dictItemId:6,itemName:"硕士",itemLevel:1},
		                        {dictItemId:7,itemName:"MBA",itemLevel:1},
		                        {dictItemId:8,itemName:"EMBA",itemLevel:1},
		                        {dictItemId:9,itemName:"博士",itemLevel:1},
		                        {dictItemId:10,itemName:"其他",itemLevel:1}
            				]
            			]
            		],
            	]
            ],
            
            //培训经历
            [
            	"培训经历","5",
            	[
            		['开始时间',8,'pxStartDt',"请选择培训开始时间"],
            		['结束时间',8,'pxEndDt',"请选择培训开始时间"],
            		['培训机构',1,'trainMechanism',"请输入培训机构名称"],
            		['培训课程',1,'trainCourse',"请输入培训课程名称"]
            	]
            ],
            
            //培训专业能力经历
            [
            	"培训专业能力经历","5",
            	[
            		["擅长专业",3,"specialityMajor","请输入自己擅长专业"],
            		["擅长行业",3,"specialityIndustry","请输入自己擅长行业"],
            	]
                
            ],
            //工作经验
            [
                "工作经验",9,
                [
                	
                	["公司性质",2,"corpNature","请选择公司性质",['corpNature'],
                		[
                			[
                				{dictItemId:1,itemName:"国有企业",itemLevel:1},
		                        {dictItemId:2,itemName:"集体企业",itemLevel:1},
		                        {dictItemId:3,itemName:"私营企业",itemLevel:1},
		                        {dictItemId:4,itemName:"合资企业",itemLevel:1},
		                        {dictItemId:5,itemName:"外商独资",itemLevel:1},
		                        {dictItemId:6,itemName:"政府机构",itemLevel:1},
		                        {dictItemId:7,itemName:"事业单位",itemLevel:1},
		                        {dictItemId:8,itemName:"公益组织",itemLevel:1}
                			]
                		]
                	],
                	["公司规模",2,"corpScale","请选择公司规模",["corpScale"],
	                	[
		                	[
		                		{dictItemId:1,itemName:"大型企业",itemLevel:1},
		                        {dictItemId:2,itemName:"中型企业",itemLevel:1},
		                        {dictItemId:3,itemName:"小型企业",itemLevel:1},
		                        {dictItemId:4,itemName:"微型企业",itemLevel:1}
		                	]
	                	]
                	],
                	["发展阶段",2,'devStage',"请选择公司发展阶段",['devStage'],
                		[
                			[
                				{dictItemId:1,itemName:"初创期",itemLevel:1},
		                        {dictItemId:2,itemName:"成长期",itemLevel:1},
		                        {dictItemId:3,itemName:"高速发展期",itemLevel:1},
		                        {dictItemId:4,itemName:"成熟期",itemLevel:1},
		                        {dictItemId:4,itemName:"转型期",itemLevel:1}
                			]
                		]
                	],
                	["公司名称",1,"corpName","请输入公司名称"],
//              	["所属行业",1,"industry","请输入公司名称"],
					["最高职位",1,"topPosition","请输入最高职位"],
					["开始时间",8,"gzStartDt","请输入在职开始时间"],
					["结束时间",8,"gzEndDt","请输入在职结束时间"],
					["工作描述",3,"workDesc","请输入工作描述"],
					["工作业绩",3,"achievement","请输入工作业绩"],
                ],
                
            ]   
               
        ],

    	
    	//项目经验 
        [
            [
	            "项目经验",9,
	            [
	            	["公司性质",2,"corpNature","请选择公司性质",['corpNature'],
	            		[
	            			[
	            				{dictItemId:1,itemName:"国有企业",itemLevel:1},
		                        {dictItemId:2,itemName:"集体企业",itemLevel:1},
		                        {dictItemId:3,itemName:"私营企业",itemLevel:1},
		                        {dictItemId:4,itemName:"合资企业",itemLevel:1},
		                        {dictItemId:5,itemName:"外商独资",itemLevel:1},
		                        {dictItemId:6,itemName:"政府机构",itemLevel:1},
		                        {dictItemId:7,itemName:"事业单位",itemLevel:1},
		                        {dictItemId:8,itemName:"公益组织",itemLevel:1}
	            			]
	            		]
	            	],
	            	["公司规模",2,"corpScale","请选择公司规模",["corpScale"],
	                	[
		                	[
		                		{dictItemId:1,itemName:"大型企业",itemLevel:1},
		                        {dictItemId:2,itemName:"中型企业",itemLevel:1},
		                        {dictItemId:3,itemName:"小型企业",itemLevel:1},
		                        {dictItemId:4,itemName:"微型企业",itemLevel:1}
		                	]
	                	]
	            	],
	            	["发展阶段",2,'devStage',"请选择公司发展阶段",['devStage'],
	            		[
	            			[
	            				{dictItemId:1,itemName:"初创期",itemLevel:1},
		                        {dictItemId:2,itemName:"成长期",itemLevel:1},
		                        {dictItemId:3,itemName:"高速发展期",itemLevel:1},
		                        {dictItemId:4,itemName:"成熟期",itemLevel:1},
		                        {dictItemId:4,itemName:"转型期",itemLevel:1}
	            			]
	            		]
	            	],
	            	["项目类型",2,'projectType',"请选择公司项目类型",['projectType'],
	            		[
	            			[
	            				{dictItemId:1,itemName:"人力资源管理",itemLevel:1},
		                        {dictItemId:2,itemName:"战略规划",itemLevel:1},
		                        {dictItemId:3,itemName:"商业模式",itemLevel:1},
		                        {dictItemId:4,itemName:"公司治理",itemLevel:1},
		                        {dictItemId:5,itemName:"财税管理",itemLevel:1},
		                        {dictItemId:6,itemName:"市场营销",itemLevel:1},
		                        {dictItemId:7,itemName:"供应链管理",itemLevel:1},
		                        {dictItemId:8,itemName:"生产管理",itemLevel:1},
		                        {dictItemId:9,itemName:"流程管理",itemLevel:1},
		                        {dictItemId:10,itemName:"培训教育",itemLevel:1},
		                        {dictItemId:11,itemName:"企业信息化",itemLevel:1},
		                        {dictItemId:12,itemName:"其它",itemLevel:1}
	            				
	            			]
	            		]
	            	],
	            	["公司名称",1,"custcoName","请输入公司名称"],
                    ["项目名称",1,"projectName","请输入项目名称"],
                    ["总费用",1,"projectCost","请输入项目总费用"],
                    ["岗位名称",1,"jobName","请输入岗位名称"],
                    ["开始时间",8,"pjStartDt","请输入项目开始时间"],
                    ["结束时间",8,"pjEndDt","请输入项目结束时间"],
	            	["客户需求",3,"custDemand","请输入客户需求"],
	            	["其他类型",3,"projectCost","请输入其他项目类型"],
	            	["服务简介",3,"serIntro","请输入项目简介"],
	            	["工作职责",3,"jobDuty","请输入工作职责"],
	            	["主要业绩",3,"xmAchievement","请输入主要业绩"]
	            	
	            ]
            ]
        ],
    
    	//服务意愿
        [
            ["承接咨询项目","6","presentConsul",
                [
                    {value:1,name:"是"},
                    {value:0,name:"否"}
                ]
            ],
            ["适应外地出差","6","businessTravel",
                [
                    {value:1,name:"是"},
                    {value:0,name:"否"}
                ]
            ],
            ["意愿担当项目经理","6","projectManager",
                [
                    {value:1,name:"是"},
                    {value:0,name:"否"}
                ]
            ],
            ["愿意担任项目组员","6","projectMember",
                [
                    {value:1,name:"是"},
                    {value:0,name:"否"}
                ]
            ],
            ["独立完成项目","6","indcompProject",
                [
                    {value:1,name:"是"},
                    {value:0,name:"否"}
                ]
            ],
            ["收费标准","1","feeStandard","请输入收费标准（单位元）"],
        ],
        
        //资质证书
        [
            [
                "资质证书","5",
                [
                	['资质名称',1,"qualName","请输入资质名称"],
                	['证书名称',1,"credName","请输入证书名称"],
                	['获得时间',8,"gainDt","请选择获得时间"],
                ]
               
            ],
        ],
        
        //自我评价
        [
        	["自我评价","3","selfEvaluation","自我评价"],
        ]
    
    ],
   
	
	
]






export default {
    titleInfo,
    DetailInfo
}

