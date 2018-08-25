(function(){
    let username = document.querySelector('#username');
    let yz = document.querySelector('.yz');
    let password = document.querySelector('#password');
    let btn = document.querySelector('#btn');
    console.log(btn);
    let status = [200,304];

    let isok = false;

    // 注册
    btn.onclick = function(){
        if(!isok){
            return false;
        }
        
        // 获取用户名/密码
        let _username = username.value;
        var _password = password.value;
        if(_username ==''||_password ==''){
            return false;
        }
        let xhr = new XMLHttpRequest();
        xhr.onload = ()=>{
            if(status.indexOf(xhr.status) >= 0){
                console.log(xhr.responseText);
                if(xhr.responseText === 'success'){
                    //跳转到登录页面
                    location.href = "../html/login.html";
                }
              
            }
        }
        xhr.open('post','../api/php/register.php',true);

        // 设置请求头，以便后端接收post数据
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');


        xhr.send(`username=${_username}&password=${_password}`);
    }


    // 验证用户名是否存在
    username.onblur = ()=>{
        password.value = '';
        let _username = username.value;

        let xhr = new XMLHttpRequest();
        
        xhr.onload = ()=>{
            if(status.indexOf(xhr.status) >= 0){
                var formGroup = username.parentNode;
                if(xhr.responseText === 'yes'){
                    isok = true;

                    // 成功：添加has-success类
                    formGroup.classList.remove('has-error');
                    formGroup.classList.add('has-success');
                   yz.innerText = '';
                }else if(xhr.responseText === 'no'){
                    isok = false;
                    formGroup.classList.remove('has-success');
                    formGroup.classList.add('has-error');
                   yz.innerText = '用户名已存在';
                }
            }
        }
        xhr.open('get','../api/php/check_username.php?username='+_username,true);
        xhr.send();

    }
})();