$(function () {
    // 加载分类列表数据
    function loadListData() {
        $.ajax({
            type: 'get',
            url: 'my/article/cates',
            success: function (res) {
                var result = template('list-tpl', res)
                $('.layui-table tbody').html(result)

            }
        })
    }
    loadListData()

    // 添加分类（通过弹出层方式实现）
    $('#addCategory').click(function () {
        // 弹出层效果
        var addindex = null
        addindex = layer.open({
            type: 1,
            title: '添加分类',
            content: $('#tpl-add').html(),
            area: ['500px', '250px']
        })
        //监听添加分类的表单提交事件
        $('#add-form').submit(function (e) {
            e.preventDefault()
            // 获取表单数据
              var fd = $(this).serialize()
            $.ajax({
                type:'post',
                url:'my/article/addcates',
                data:fd,
                success :function(res){
                    if (res.status === 0) {
                        layer.msg(res.message)
                        // 关闭弹窗
                        layer.close(addindex)
                        loadListData()
                    }
                }
            })
            
        })
    })

})