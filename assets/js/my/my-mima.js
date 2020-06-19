$(function(){
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
                }
            }
        })
    })
})