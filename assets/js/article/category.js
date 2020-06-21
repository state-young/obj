$(function () {
    // 加载分类列表数据
    // 加载layui的form模块
    var addindex = null
    var form = layui.form;
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
                type: 'post',
                url: 'my/article/addcates',
                data: fd,
                success: function (res) {
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
    // 删除
    // 监听删除按钮事件
   
    
    $('body').on('click', '.del', function (e) {
        // console.log(32323);
        // 获取要删除的分类的id
        var id = e.target.dataset.id
        // console.log(id)
        // // var id = $(e.target).data('id')
        // var id = $(this).attr('data-id');
        // 根据id删除分类
        $.ajax({
            type: 'get',
            url: 'my/article/deletecate/' + id,
            data: {
                id: id
            },
            success: function (res) {
                if (res.status === 0) {
                    // 删除分类成功，刷新列表
                    layer.msg(res.message)
                    loadListData()
                }
            }
        })
    })
    var editIndex = null
    // 添加
    $('body').on('click','.edit',function(){
        var id= $(this).data('id')
        $.ajax({
            type:'get',
            url:'my/article/cates/'+id,
            data:{
                id:id
            },
            success:function(res){
                editIndex = layer.open({
                    type: 1,
                    title: '编辑分类',
                    content: $('#edit-tpl').html(),
                    area: ['500px', '250px']
                })
                // 把获取的数据添加到表单
                form.val('editForm',res.data)
            }

        })
        
    })
    $('body').on('submit','#edit-form',function(e){
        e.preventDefault()
        var fd = $(this).serialize()
        $.ajax({
            type: 'post',
            url: 'my/article/updatecate',
            data: fd,
            success: function (res) {
              if (res.status === 0) {
                // 编辑分类成功，提示一下并且关闭弹出层,刷新分类列表
                layer.msg(res.message)
                // 关闭弹出层
                layer.close(editIndex)
                // 刷新分类列表
                loadListData()
              }
            }
          })
    })


})