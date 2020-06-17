// 控制表单
$(function(){
  // 表单验证
  var form = layui.form;
  form.verify({
    username : [ /^[\S]{6,8}$/,'请输入6-8位数字'],
    pwd : function(value,item){
      var teg = /^\d{6}$/
      if (!teg.test(value)) {
        return '密码必须是6位数字'
      }
    }
   
  })
// 登录表单
  $('#loginForm').submit(function(e){
    e.preventDefault()
    // 获取表单的登录名和密码
    var formData = $(this).serialize()
    // 调[]用后台接口
    $.ajax({
      type : 'post',
      url : 'http://ajax.frontend.itheima.net/api/login',
      data : formData,
      success : function(res){
        if (res.status === 0) {
          
          // 存储客户端信息
          localStorage.setItem('matoken',res.token)
          location .href = './index.html'
        }
        
      }
    })
    
  })
  //监听注册提交事件 ----控制表单的提交
$('#registerForm').submit(function(e){
  e.preventDefault()
  //获取表单数据
  var formDtat = $(this).serialize()  // 一次性获取所有表单数据
  // 调用数据
  $.ajax({
    type :'post',
    url : 'http://ajax.frontend.itheima.net/api/reguser' ,
    data : formDtat,
    success : function(res){
      if (res.status === 0) {
        $('#registerForm a').click()
      }else{
        layer.msg(res.message); 
      }
    }
  })
})

  // 去注册
  $('#loginForm a').click(function(){
    $('#loginForm').hide()
    $('#registerForm').show()
    
  })
  // 去登录
  $('#registerForm a').click(function(){
    $('#loginForm').show()
    $('#registerForm').hide()
  })
})