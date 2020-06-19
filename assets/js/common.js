/*
    统一
    配置接口
*/ 
// var baseURL = 'http://ajax.frontend.itheima.net/'
// $.ajaxPrefilter(function(option){
//     option.url = baseURL.url +option.url

// })


var baseURL = 'http://ajax.frontend.itheima.net/'
$.ajaxPrefilter(function(option){
    // 请求开始之前
    option.beforeSend = function(){
        window.NProgress &&  window.NProgress.start()
       
    }
    // 通用地址的设置
    option.url = baseURL + option.url
    // 设置接口的请求头
    if (option.url.lastIndexOf('/my/') !== -1) {
        option.headers = {
            Authorization: localStorage.getItem('mytoken')
        }}
        option.complete = function(res){
            window.NProgress &&  window.NProgress.done()
            if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败!') {
                // 清除无效的token
                localStorage.removeItem('mytoken')
                  // 如果身份验证失败了，就跳转到登录页面
                  location.href = './login.html'
                 
            
        }
    }

})