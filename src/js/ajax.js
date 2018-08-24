
/***
 * ajax 封装解决以下总是
 * 统一处理错误信息
 * 统一处理 Loading
 * 统一处理 baseUrl
***/

var $ = {};

$.baseUrl = 'http://localhost:1420/whd-project/';

$.filterUrl = function(url){
    if(url.startsWith('http')){
        return url;
    }
    return $.baseUrl + url;
}

$.ajax = function(options){
    let {api, method = 'get', params = {}, success} = options;

    document.getElementById('mask').style.display = 'block';
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            document.getElementById('mask').style.display = 'none';
            success(xhr.responseText);
        }
    }
    api = $.filterUrl(api);
    let _params = [];
    for(key in params){
        _params.push(`${key}=${params[key]}`);
    }

    if(method.toLowerCase() == 'get'){
        api += '?' + _params.join('&');
        xhr.open(method, api);
        xhr.send(null);
    } else if(method.toLowerCase() == 'post'){
        xhr.open(method, api);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(_params.join('&'));
    }
}