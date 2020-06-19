$(function(){
    var form = layui.form
    function lost (){
        $.ajax({
            type : 'get',
            url :'my/userinfo',
            success: function(res){
                // $('#form input[name = username]').val(res.data.username)
                // $('#form input[name = nickname]').val(res.data.nickname)
                // $('#form input[name = email]').val(res.data.email)
                form.val('f1',res.data)
            }
        })
    }
    lost()
    $('#form').submit(function(e){
        e.preventDefault()
        // var fd =$(this).serialize()
       // 此时，serializeArray的返回值fd是数组
         var fd = $(this).serializeArray()
        fd =fd.filter(function(item){
            // 把不是username的筛选出来
            return item.name !== 'username'

        })
        $.ajax({
            type :'post',
            url : 'my/userinfo',
            data : fd,
            srccess :function(res){
                if (res.status === 0) {
                    // layui 内置的弹出狂
                   layer.msg (res.message)
            }}
        })
         
        
    })
})