$(function(){
    // 加载分类列表数据
    function loadListData(){
        $.ajax({
            type:'get',
            url:'my/article/cates',
            success : function(res){
                var result = template('list-tpl',res)
                $('.layui-table tbody').html(result)
                
            }
        })
    }
    loadListData()
})