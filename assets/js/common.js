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
    option.url = baseURL + option.url
    // 设置接口的请求头
    if (option.url.lastIndexOf('/my/') !== -1) {
        option.headers = {
            Authorization: localStorage.getItem('mytoken')
        }
    }
    
})