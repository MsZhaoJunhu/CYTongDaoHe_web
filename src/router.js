import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('./components/index.vue')
        },

        {
            path:'/test',
            component: ()=>import('./components/mapTest.vue')
        },
        {
            path:'/test1',
            component: ()=>import('./components/mapTest2.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./components/登录/login.vue')
        },
        {
            path: '/reg',
            name: 'reg',
            component: () => import('./components/登录/reg.vue')
        },
        
        {
          path: '/sharingTalents',
          component: () => import('./components/登录/sharingTalents.vue')
        },
        
        {
            path: '/complete',
            name: 'complete',
            component: () => import('./components/登录/complete.vue'),
            redirect:'/complete/login_complete',
            children: [
                {
                    path: 'login_complete',
                    component: () => import('./components/登录/children/login_complete.vue')
                },
                {
                    path: 'complete_two',
                    component: () => import('./components/登录/children/complete_two.vue')
                },
                {
                    path: 'complete_three',
                    component: () => import('./components/登录/children/complete_three.vue')
                },
            ]
        },
        {
            path: '/fillInfo',
            name: 'fillInfo',
            component: () => import('./components/登录/fillInfo.vue')
        },
        {
            path: '/findPassword',
            name: 'findPassword',
            component: () => import('./components/登录/findPassword.vue')
        },
        {
            path: '/zyfw',
            name: 'zyfw',
            component: () => import('./components/专业服务/专业服务.vue'),
            redirect:'/zyfw/all_projects',
            children: [
                {
                    path: 'all_projects',
                    component: () => import('./components/专业服务/children/all_projects.vue'),
                },
               
                {
                    path: 'my_projects_require',
                    component: () => import('./components/专业服务/children/my_projects_require.vue'),
                },
                {
                    path: 'publishing_projects',
                    component: () => import('./components/专业服务/children/publishing_projects.vue'),
                },
                
            ]
        },
        {
              path: "/fwgys",
              name: "fwgys",
              component: () => import("./components/服务供应商/服务供应商.vue"),
              redirect: "/fwgys/gys",
              children: [
                {
                  path: "gys",
                  component: () => import("./components/服务供应商/children/供应商.vue")
                },
                // {
                //   path: "release",
                //   component: () =>
                //     import("./components/服务供应商/children/release.vue")
                // },
                {
                  path: "release_details",
                  component: () =>
                    import("./components/专业服务/children/my_projects_inside.vue")
                },
                {
                  path: "fwgys_alny",
                  component:() => import("./components/服务供应商/children/服务供应商-内页.vue")
                },
                {
                  path: "fwgys_ny",
                  component:() => import("./components/服务供应商/children/服务供应商-案例库内页.vue")
                }
              ]
        },
       
        {
            path: '/SaidSchoolBusNew',
            name: 'SaidSchoolBusNew',
            component: () => import('./components/德商学院/SaidSchoolBusNew.vue'),
            redirect:'/SaidSchoolBusNew/BusinessmanGy',
            children: [
                {
                    path: 'BusinessmanGy',
                    component: () => import('./components/德商学院/childrens/BusinessmanGy.vue'),
                },
                {
                    path: 'SouthBusinessman',
                    component: () => import('./components/德商学院/childrens/SouthBusinessman.vue'),
                },
                {
                    path: 'ManagEnterSkills',
                    component: () => import('./components/德商学院/childrens/ManagEnterSkills.vue'),
                },
                {
                    path: "ztjzny",
                    component: ()=>import("./components/德商学院/childrens/专题讲座内页.vue")
                },
                {
                    path: "shydgnwyxny",
                    component: ()=>import("./components/德商学院/childrens/商海有道国内外游学内页.vue")
                },
                {
                    path: "gyhdny",
                    component: ()=>import("./components/德商学院/childrens/公益活动内页.vue")
                }
            ]
        },
        {
            path: '/gywm/aboutus',
            name: 'aboutus',
            component: () => import('./components/关于我们/AboutUs.vue'),
        },
        {
            path: '/gywm/joinus',
            name: 'joinus',
            component: () => import('./components/关于我们/AboutUs_JoinUs2.vue'),
        },
        
        {
            path: '/gywm/news',
            component: () => import('./components/关于我们/AboutUs-news.vue'),
        },
        {
            path: '/gywm/newsny',
            component: () => import('./components/关于我们/AboutUs-newsny.vue'),
        },
        {
            path: '/zxsd',
            name: 'zxsd',
            component: () => import('./components/咨询速递/咨询速递.vue'),
        },
        {
            path: '/zxsd2',
            name: 'zxsd',
            component: () => import('./components/咨询速递/咨询速递2.vue'),
        },
        {
            path: '/zxsd3',
            name: 'zxsd',
            component: () => import('./components/咨询速递/咨询速递3.vue'),
        },
        {
            path: '/zxsdInside',
            name: 'zxsdInside',
            component: () => import('./components/咨询速递/咨询速递内页.vue'),
        },
        {
            path: '/glzx',
            name: 'glzx',
            component: () => import('./components/管理中心/管理中心.vue'),
            redirect:'/glzx/glgz',
            children:[
                {
                    path: 'tggs',
                    component: () => import('./components/管理中心/children/通告公示.vue'),
                },
                {
                    path: 'fwxy',
                    component: () => import('./components/管理中心/children/服务协议.vue'),
                },  
                {
                    path: 'glgz',
                    component: () => import('./components/管理中心/children/管理规则.vue'),
                },
                {
                    path: 'zxks',
                    component: () => import('./components/管理中心/children/在线考试.vue'),
                },
                {
                    path: "zxksny",
                    component: () => import("./components/管理中心/children/在线考试内页.vue")
                },
                {
                    path: 'hyqy',
                    component: () => import('./components/管理中心/children/会员权益.vue'),
                },
                {
                path: "tsjbny",
                component: () => import("./components/管理中心/children/投诉举报内页.vue")
                },
                {
                    path: 'tsjb',
                    component: () => import('./components/管理中心/children/投诉举报.vue'),
                },
            ]
        },
        {
            path: '/glgzInside',
            name:'glgzInside',
            component: () => import('./components/管理中心/children/管理规则内页.vue'),
        },
        {
            path:'/home',
            name:'home',
            redirect:'/home/server',
            component:()=> import('@/components/我的主页/我的主页.vue'),
            children:[
                {
                    path:'server',
                    component:()=>import('@/components/我的主页/children/我的主页(服务供应商).vue'),
                },
                {
                    path:'individual-member',
                    name:'individual-member',
                    component:()=> import('./components/我的主页/children/我的主页(个人会员).vue')
                },
                {
                    path:'talent-member',
                    name:'talent-member',
                    component:()=> import('./components/我的主页/children/我的主页(共享人才).vue')
                },
                {
                    path:'company-member',
                    name:'company-member',
                    component:()=> import('./components/我的主页/children/我的主页(企业会员).vue')
                },
                {  
                    path:'myProject',
                    name:'myProject',
                    component:()=> import('./components/我的主页/children/myProject/myProjectRunning.vue'),
                    
                },

                // {
                //     path:'ProjectEnding',
                //     name:'ProjectEnding',
                //     component:()=> import('./components/我的主页/children/myProject/myProjectEnding.vue')
                // },
                {
                    path:'ProjectRequire',
                    name:'ProjectRequire',
                    component:()=> import('./components/我的主页/children/myProject/myProjectRequire.vue')
                },
                {
                    path:'ProjectRequireEnding',
                    name:'ProjectRequireEnding',
                    component:()=> import('./components/我的主页/children/myProject/myProjectRequireEnding.vue')
                },
                // {
                //     path:'ProjectComplete',
                //     name:'ProjectComplete',
                //     component:()=> import('./components/我的主页/children/myProject/myProjectComplete.vue')
                // },
                {
                    path:'ProjectGuarantee',
                    name:'ProjectGuarantee',
                    component:()=> import('./components/我的主页/children/myProject/myProjectGuarantee.vue')
                }
            ]
        },
        /*登录之后的企业黄页*/
        {
            path:'/company',
            name:'company',
            redirect:'/company/company_int',
            component: ()=> import('./components/company/company.vue'),
            children:[
                {
                    path: 'company_int',
                    component: () => import('./components/company/children/company_int.vue'),
                },
                {
                    path: 'company_news',
                    component: () => import('./components/company/children/company_news.vue'),
                },
                {
                    path: 'company_cont',
                    component: () => import('./components/company/children/company_cont.vue'),
                }
            ]
        },

        {
          path: '/park',
          name: 'park',
          component: () => import('./components/智慧园区/园区列表.vue'),
        },
        {
          path: '/investment',
          name: 'investment',
          component: () => import('./components/智慧园区/招商信息.vue'),
        },
        {
          path: '/park_substance',
          name: 'park_substance',
          component: () => import('./components/智慧园区/智慧园区内容页.vue'),
        },
        {
          path: '/signUpContent',
          name: 'signUpContent',
          component: () => import('./components/智慧园区/signUpContent.vue'),
        },
        {
          path: '/signUp',
          name: 'signUp',
          component: () => import('./components/智慧园区/signUp.vue'),
        },
        {
          path: '/fun',
          name: 'fun',
          redirect: '/fun/funs',
          component: () => import('./components/functions/fun.vue'),
          children: [
            {
              path: 'chat',
              component: () => import('./components/functions/childen/chat.vue'),
            },
            {
              path: 'funs',
              component: () => import('./components/functions/childen/funs.vue'),
            },
            {
              path: 'alwaysChat',
              component: () => import('./components/functions/childen/alwaysChat.vue'),
            },
            {
              path: 'releaseFB',
              component: () => import('./components/functions/qyhy/releaseFB.vue'),
            },
            {
              path: 'updateDemand',
              component: () => import('./components/functions/qyhy/updateDemand.vue'),
            },
            {
              path: 'releaseFBGR',
              component: () => import('./components/functions/grhy/releaseFBGR.vue'),
            },
            {
              path: 'releaseXQLB',
              component: () => import('./components/functions/grhy/releaseXQLB.vue'),
            },
            {
              path: 'personalEvaluate',
              component: () => import('./components/functions/grhy/personalEvaluate.vue'),
            },
            {
              path: "home_",
              component: () => import('./components/我的主页/children/我的主页(企业会员).vue')
            },
            {
              path: "homeGr",
              component: () => import('./components/我的主页/children/我的主页(个人会员).vue')
            },
            {
              path: "homeGx",
              component: () => import('./components/我的主页/children/我的主页(共享人才).vue')
            },
            {
              path: "homeFw",
              component: () => import('./components/我的主页/children/我的主页(服务供应商).vue')
            },
            {
              path: "my_projects_require",
              component: () => import('./components/专业服务/children/my_projects_require.vue')
            },
            {
              path: "my_project_details",
              component: () => import('./components/functions/childen/funDetails.vue')
            },
            {
              path: "tb_person_details",
              component: () => import('./components/functions/childen/tbPersonDetails.vue')
            },
            {
              path: "jsz1",
              component: () => import('./components/functions/childen/jsz.vue')
            },
            {
              path: "serviceTransaction",
              component: () => import('./components/functions/qyhy/serviceTransaction.vue')
            },
            {
              path: "checkDetails",
              component: () => import('./components/functions/qyhy/checkDetails.vue')
            },
            {
              path: "reportFeedBackComplaint",
              component: () => import('./components/functions/childen/reportFeedBackComplaint.vue')
            },
            {
              path: "gysServicetransaction",
              component: () => import('./components/functions/gys/gysServicetransaction.vue')
            },
            {
              path: "myFillBid",
              component: () => import('./components/functions/gys/myFillBid.vue')
            },
            {
              path: "fillBidInfo",
              component: () => import('./components/functions/gys/fillBidInfo.vue')
            },
            {
              path: "qyhyFillInBidInfo",
              component: () => import('./components/functions/qyhy/qyhyFillInBidInfo.vue')
            },
            {
              path: "reportFeedBackComplaint",
              component: () => import('./components/functions/childen/reportFeedBackComplaint.vue')
            },
            {
              path: "feedBackList",
              component: () => import('./components/functions/childen/feedBackList.vue')
            },
            {
              path: "qyhySignContract",
              component: () => import('./components/functions/qyhy/qyhySignContract.vue')
            },
            {
              path: "gysSignContract",
              component: () => import('./components/functions/gys/gysSignContract.vue')
            },
            {
              path: "gysFillSignContract",
              component: () => import('./components/functions/gys/gysFillSignContract.vue')
            },
            {
              path: "gysFillPrevContract",
              component: () => import('./components/functions/gys/gysFillPrevContract.vue')
            },
            {
              path: "gysPreviewContract",
              component: () => import('./components/functions/gys/gysPreviewContract.vue')
            },
            {
              path: "qyhyPreviewContract",
              component: () => import('./components/functions/qyhy/qyhyPreviewContract.vue')
            },
            {
              path: "gysUpdateContract",
              component: () => import('./components/functions/gys/gysUpdateContract.vue')
            },
            {
              path: "perfectUserInfo",
              component: () => import('./components/functions/childen/perfectUserInfo.vue')
            },
            {
              path: "perfectUserInfo1",
              component: () => import('./components/functions/childen/perfectUserInfo1.vue')
            },
            {
              path: "editFillInfo",
              component: () => import('./components/functions/childen/editFillInfo.vue')
            },
            {
              path: "serverItems",
              component: () => import('./components/functions/submission/serverItems.vue')
            },
            {
              path: "itemSubmission",
              component: () => import('./components/functions/submission/itemSubmission.vue')
            },
            {
              path: "serverSubmissionDetails",
              component: () => import('./components/functions/submission/serverSubmissionDetails.vue')
            },
            {
              path: "gysaddevent",
              component: () => import('./components/functions/submission/gysaddevent.vue')
            },
            {
              path: "gyssubmievent",
              component: () => import('./components/functions/submission/gyssubmievent.vue')
            },
            {
              path: "nodeTermSubmit",
              component: () => import('./components/functions/submission/nodeTermSubmit.vue')
            },
            {
              path: "qualitySubmit",
              component: () => import('./components/functions/submission/qualitySubmit.vue')
            },
          ]
        },
        {
          path: '*',
          component: () => import('./components/404'),
        },
        /* 建设中 */
        {
          path: '/jsz1',
          component: () => import('./components/public/建设中1.vue')
        },
        /* 建设中 */
        {
          path: '/jsz2',
          component: () => import('./components/public/建设中2.vue')
        },
        {
          path: '/jsz3',
          component: () => import('./components/public/建设中3.vue')
        },
        // 专家智库
        {
          path: '/zjzk',
          name: 'zjzk',
          component: () => import('./components/专家智库/zjzk.vue')
        },
        {
          path: '/testAll',
          name: 'testAll',
          component: () => import('./components/functions/test.vue')
        },
        {
          path:'/taoIndex',
          name:'taoIndex',
          component:()=> import('./components/同淘淘/taoIndex.vue')
        },
        {
          path:'/commodityDetails',
          name:'commodityDetails',
          component:()=> import('./components/同淘淘/commodityDetails.vue')
        },
        {
          path:'/standardDetails',
          name:'standardDetails',
          component:()=> import('./components/同淘淘/standardDetails.vue')
        },
        {
          path:'/order',
          name:'order',
          component:()=> import('./components/同淘淘/order.vue')
        },
        {
          path:'/userInfo',
          name:'userInfo',
          component:()=> import('./components/同淘淘/userInfo.vue')
        },
        {
          path:'/userAdress',
          name:'userAdress',
          component:()=> import('./components/同淘淘/userAdress.vue')
        },
        {
          path:'/orderDetails',
          name:'orderDetails',
          component:()=> import('./components/同淘淘/orderDetails.vue')
        },
        {
          path:'/shoppintCart',
          name:'shoppintCart',
          component:()=> import('./components/同淘淘/shoppintCart.vue')
        },
        {
          path:'/settlement',
          name:'settlement',
          component:()=> import('./components/同淘淘/settlement.vue')
        },
        {
          path:'/payRoute',
          name:'payRoute',
          component:()=> import('./components/同淘淘/payRoute.vue')
        },
        {
          path:'/payResout',
          name:'payResout',
          component:()=> import('./components/同淘淘/payResout.vue')
        },
        {
          path: "/newFillInfo",
          component: () => import('./components/functions/childen/newFillInfo.vue')
        },
        {
          path: "/newFillInfoCompeny",
          component: () => import('./components/functions/childen/newFillInfoCompeny.vue')
        },
    ],
    // scrollBehavior (to, from, savedPosition) {
    //     return { x: 0, y: 0 }
    // }
})