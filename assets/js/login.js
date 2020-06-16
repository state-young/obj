// 控制表单
$(function(){
 
  $('.layui-form').submit(function(e){
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
          location .href = './index.html'
        }
        
      }
    })
    
  })
})