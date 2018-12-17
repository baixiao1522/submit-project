/**
 * 
 */
$(function(){
	var land = $.i18n.browserLang();land='en-US';
	loadProperties();
	
	$('#button_login').click(function(){//点击登录按钮后验证用户信息
		var id = $('#username').val();//用户名
		var payload = {};
		payload['password']=$('#password').val();
		payload = $.toJSON(payload); 
		$.ajax({
			url : 'i18nService?username='+id+'&password='+$('#password').val(),//REST URI
			type : 'POST',
		   // data: payload, // Request bod y
//			contentType : 'application/json',
			dataType:'html',
			success : function(data1) {
				//var land = $.i18n.browserLang();//得到系统默认编码
				var json = eval("("+data1+")");
//				alert(land);
				//alert(json["data"].username);
				//验证成功则显示欢迎信息和密钥
				$('#content').html($.i18n.prop('string_hello',json["data"].username,json["data"].password));
			},
			error : function(jqXHR) {
				alert(jqXHR);
//				if(jqXHR.status == 403){
//					//用户不存在
//					alert($.i18n.prop('string_usernotexist'));
//				}else if(jqXHR.status == 401){
//					//密码错误
//					alert($.i18n.prop('string_wrongpassword'));
//				}else{
//					//其他异常信息
//					alert(errorThrown);
//				}
			}
		});
	});
});

function loadProperties(){
	
	jQuery.i18n.properties({//加载资浏览器语言对应的资源文件
		name:'strings', //资源文件名称
		path:'resources/i18n/', //资源文件路径
		mode:'map', //用Map的方式使用资源文件中的值
		 language:'en-US',//不填默认系统语言
		callback: function() {//加载成功后设置显示内容
			//用户名
			$('#label_username').html($.i18n.prop('string_username'));
		    //密码
			$('#label_password').html($.i18n.prop('string_password'));
		    //登录
			$('#button_login').val($.i18n.prop('string_login'));
		}
	});
}