$(function(){
    var mytoken = localStorage.getItem('mytoken')
    if (!mytoken) {
        location.href = './login.html'
    }
   function loadUserInfo(){
       $.ajax({
           type: 'get',
           url: 'http://ajax.frontend.itheima.net/my/userinfo',
           headers: {
            Authorization: localStorage.getItem('mytoken')
           },
            success : function(res){
                if (res.status === 0) {
                    // 获取用户信息
                    var info = res.data
                    info.user_pic = 'http://t.cn/RCzsdCq"'
                    $('#welcome-username').html(info.username)
                    $('#nav-username').html(info.username)
                    // 头像数据
                    if (info.user_pic) {
                        //存在就显示图片
                        $('#welcome-username').parent().siblings('div').remove()
                        $('#welcome-username').parent().prepend('<img src="'+info.user_pic+'" alt="" />')
                        $('#nav-username').siblings().remove()
                        $('#nav-username').prepend('<img src="'+info.user_pic+'" alt="" />')


                    }
                }
            }
       })
   }
   loadUserInfo()
})