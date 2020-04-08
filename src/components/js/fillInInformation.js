
//外步骤条
var steps=0;
//内步骤条
var n_steps=0;
//注册身份
var shenfen='企业会员';
var zcinfo=[];

$('.xzzcsf img').click(function(){
	shenfen=$(this).attr('data-identity')
	$(this).addClass('selected').siblings().removeClass('selected')
})

// var qiye={
// 	'工商信息':[
// 		'公司名称',
// 		'公司地址',
// 		'公司电话',
// 		'公司邮箱',
// 		'官网',
// 		'注册资本',
// 		'实缴资本',
// 		'经营状态',
// 		'成立日期',
// 		'统一社会信用代码',
// 		'纳税人识别号',
// 		'注册号',
// 		'组织机构代码',
// 		'登记注册类型',
// 		'所属行业',
// 		'核准日期',
// 		'登记机关',
// 		'所属区域',
// 		'经营范围',
// 	]
// }
console.info(qiye)


function next(){
	switch (steps){
		case 0:
			
			steps++;
			step()
			break;
		case 1:
			for(var a=0;a<$('.fill_info').eq(n_steps).find('label').length;a++){
				$('.fill_info').eq(n_steps).find('label p span').eq(a).remove()
				if($('.fill_info').eq(n_steps).find('input').eq(a).val()==''){
					if($('.fill_info').eq(n_steps).find('label p').eq(a).children('span').length==0){
						$('.fill_info').eq(n_steps).find('label p').eq(a).append('<span>*请填写该字段</span>')
					}
					return false;
				}
			}
			getInfo()
			
			if(n_steps>=$('.sfxx>li').length-1){
				steps++;
				step()
			}else{
				n_steps++;
				n_step() 
			}
			break;
		default:
			break;
	}
}
function prev(){
	switch (steps){
		case 1:
			if(n_steps<=0){
				steps--;
				step()
				$('.fill_info').find('input').val('')
				$('.fill_info label').find('span').remove()
				
			}else{
				n_steps--;
				n_step()
			}
			break;
		default:
			break;
	}
}
//外步骤条执行方法
function step(){
	$('#after').animate({'left':(steps*259.672)+'px'},250)
    $('.bottom>div').eq(steps).css('display','flex').siblings('div').hide()
}
//内步骤条执行方法
function n_step(){
    $('.sfxx>li').eq(n_steps).addClass('selected').siblings().removeClass('selected')
    $('.fill_info').eq(n_steps).css('display','flex').siblings('div').hide()
}
function getInfo(){
	var aa=[]
	zcinfo.splice(n_steps)
	for(var a=0;a<$('.fill_info').eq(n_steps).find('label').length;a++){
		aa.push($('.fill_info').eq(n_steps).find('input').eq(a).val())
	}
	zcinfo.push(aa)
}

function info(){
	console.info(shenfen)
	console.info(zcinfo)
}


