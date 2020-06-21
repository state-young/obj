$(function(){
    var $image =  $('.cropper-box img')
    var options = {
        // 纵横比
        aspectRatio: 1,
        // 指定预览区域
        preview: '.img-preview'
      }

     $image.cropper(options)
      
    //   拿到用户选择的文件
      $('#uploadImg').click(function(){
            $('#selectImg').trigger('click')
      })
    //  获取选中的文件信息
    $('#selectImg').change(function(e){
        var file = e.target.files[0]
        // 根据选择的文件，创建一个对应的 URL 地址
        var newImgURL = URL.createObjectURL(file)
        $image
            .cropper('destroy')      // 销毁旧的裁剪区域
            .attr('src', newImgURL)  // 重新设置图片路径
            .cropper(options)        // 重新初始化裁剪区域
    })

})