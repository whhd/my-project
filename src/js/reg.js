


// $("#yanzhengma").attr("value",yanzhengma());

// function yanzhengma(){
//     return parseInt((Math.random()*8999)+1000);
// }


document/addEventListener('DOMContentLoaded',function(){

    var username = document.querySelector('.username');
    var password = document.querySelector('.password');
    var mycode =  document.querySelector('.mycode');
    var u1 =  document.querySelector('.u1');
    var u2 =  document.querySelector('.u2');
    var u3 =  document.querySelector('.u3');
    let status = [200,304];


    let isok = false;

    username.focus();

    var _username = username.value;
    var _password = password.value;
    var _mycode = mycode.value;
    
    if(_username == ''){
        u1.innerText = '用户名不能为空！！！';
        username.focus();

        return;
    }
    else if(_mycode == ''){
        u3.innerText = '验证码不能为空！！！';
        code.focus();
        return;
    }else if(_password == ''){
        u2.innerText = '密码不能为空！！！';
         password.focus();
         return;
     }


     let xhr = new XMLHttpRequest();
     xhr.onload = ()=>{
         if(status.indexOf(xhr.status) >= 0){
          
         }
     }
     xhr.open('post','../api/reg.php',true);

     //设置请求头，以便后端接收post数据
     xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

     xhr.send(`username=${_username}&password=${_password}`);
     
 

 //验证用户名是否存在
    username.onblur =()=>{
     let _username = username.value;

     let xhr = new XMLHttpRequest();

     if(_username === ''){
         username.nextElementSibling.innerText = '用户名不能为空！！！';
         
       
         username.focus();
         // return
     }
     console.log(_username)

     password.onfocus =()=>{
         let _password = password.value;
         if(_password == ''){
             password.nextElementSibling.innerText = '密码不能为空!!!';
             password.focus();
             return;
         }else{
             password.nextElementSibling.innerText = '';
         }
     }



     xhr.onload = ()=>{
         if(status.indexOf(xhr.status) >= 0){
             var formGroup = username.parentNode;

             if(xhr.responseText === 'yes'){
                 isok = true;

                 //成功添加has-success类
                 formGroup.classList.remove('has-error');
                 formGroup.classList.add('has-success');
                 username.nextElementSibling.innerText = '';

             }else if(xhr.responseText === 'no'){
                 isok = false;
                 formGroup.classList.remove('has-success');
                 formGroup.classList.add('has-error');
                 username.nextElementSibling.innerText = '用户名已存在';
                 username.focus();
             } 
         }
     }
    
     xhr.open('get','../api/check_username.php?username='+_username,true);
     xhr.send();
 } 
});