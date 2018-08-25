document.addEventListener('DOMContentLoaded',()=>{

    let username = document.querySelector('.username');
    let password = document.querySelector('.password');
    let btnReg = document.querySelector('.btn');
    let no = document.querySelector('.no');
    let no2 = document.querySelector('.no2');
    let no3 = document.querySelector('.no3');
    let code = document.querySelector('.mycode');
    let showCode = document.querySelector('.showcode');
    
    // let form = document.querySelector('.form');

    let status = [200,304];


    let isok = false;

    username.focus();
        //随机颜色验证码
        function cs(min,max,n){   
            var code = '';
            var mima='';
            for(var i = 0; i<n;i++){
                var r = parseInt(Math.random()*256);
                var g = parseInt(Math.random()*256);
                var b = parseInt(Math.random()*256);
                var res = parseInt(Math.random()*(max-min+1)+min);
                mima +=res;
                code+= '<span style="color:'+'rgb('+r+','+g+','+b+')'+'">'+res+'</span>' ;  

                
    }
    return [code,mima];
}


        var sc = cs(0,9,4);

       showCode.onclick = function(){
            sc = cs(0,9,4);
            showCode.innerHTML = sc[0];
          
       }
   


    
        showCode.innerHTML= sc[0];
        var aa= showCode.innerHTML;
        console.log(aa)

        code.onfocus = function(){
             var timest = setInterval(function yzm(){
                     var _code = code.value;
                    
                    if(_code ==Number(sc[1])){
                       
                        no3.style.display = 'none';
                        clearInterval(timest)
                        console.log(_code)
                          return;    
                        
                    }else{
                        no3.style.display = 'block';
                       
                        // console.log(_code);
                        
                         return false;
                    }
                    
                },1000);
        }

        
       
          
    
        
        //获取用户名/密码
        onkeyup = function(e){

            var key = e.keyCode || e.which; 
            
            let _username = username.value;
            let _password = password.value;
            let _code = code.value;
         
            if(!/^[1-9][a-z0-9_\-]{5,19}$/i.test(_username)){
                no.style.display = 'block';
                
                return false;
            }else{
                no.style.display = 'none';
            }
           
            if(!/^[^\s]{6,16}$/i.test(_password)){

                no2.style.display = 'block';
               
                return false;
            }else{
                no2.style.display = 'none';
            }

            let repassword = document.querySelector('.repassword').value;
            let ckp = document.querySelector('.ckp');
            if(repassword != password){
                // alert('两次输入密码不一致');
                ckp.innerText="两次输入密码不一致";
                return false;
            }
            else{
                ckp.innerText="";
                return true;
            }
        
        
             let checkbox = document.querySelector('#checkbox').checked;
             if(checkbox != true){
                 alert('请阅读交易条款');
                 return false;
            }
        }
        // console.log(res)

        btnReg.onclick = ()=>{

            console.log(isok)
        if(!isok){
            return false;
        }
        let _username = username.value;

        let _password = password.value;

        console.log( _password);

        let xhr = new XMLHttpRequest();
        xhr.onload = ()=>{
            if(status.indexOf(xhr.status) >= 0){
                console.log(xhr.responseText);location.href = '../index.html';
            }
        }
        xhr.open('post','../api/php/register.php',true);

        //设置请求头，以便后端接收post数据
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

        xhr.send(`username=${_username}&password=${_password}`);
        
    }

    //验证用户名是否存在
    username.onblur =()=>{
        let _username = username.value;

        let xhr = new XMLHttpRequest();
   
        xhr.onload = ()=>{
           
            if(status.indexOf(xhr.status) >= 0){ 
                
                var aa = xhr.responseText
                console.log(aa)
                 
                if(aa == 'yes'){
                    console.log(666)
                    isok = true;
                }else if(xhr.responseText == 'no'){
                    console.log(7777)
                    isok = false;
                  
                    username.nextElementSibling.innerText = '用户名已存在';
                    username.focus();
                } 
            }
        }
       
        xhr.open('get','../api/php/check_username.php?username='+_username,true);
        xhr.send();
    } 
});