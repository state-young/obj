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
})