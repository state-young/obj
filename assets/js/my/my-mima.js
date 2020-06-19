$(function(){
    // 表单验证
    var form =layui.form
    form.verify({
        diff:function(value){
            // 获取原来的密码
            var old = $('#form input[name = oldPwd]').val()
            if(oldPwd === value){
                return '输入的密码不能和原来的密码相同'
            }
        },
        same:function(){
            // 2.确认密码必须一致
             // 获取新的的密码
            var newold = $('#form input[name = newPwd]').val()
            if (newpwd !== value) {
                return '两次输入的密码不相同'
            }else{

            }
        }
    })

    $('#form').submit(function(e){
        e.preventDefault()
        var fd = $(this).serialize()
        $.ajax({
            type : 'post',
            url : 'my/updatepwd',
            data : fd,
            success :function(res){
                if (res.status === 0) {
                    layer.msg(res.message)
                }else{
                    layer.msg(res.message)
                }
            }
        })
    })
})