jQuery(function(){

       // 登录
       $("#btn").click(function(){
               
        // 得到用户名和密码
        var username = $("#username").val().trim();
        var password= $("#password").val().trim();
        // 将用户名和密码写入对象
        var params ={
                    username,
                    password
                };
        console.log(params);
        http.post("login.php",params,function(res){
            // 得到后端返回给我们的值
            console.log(res); 
            if(res.indexOf("false")>=0){
                alert("登录失败");
            }else{
                alert("登录成功");
                window.localStorage.setItem('username',username);
              
            }
        })
    })
    // 以上代码可以实现将账号和密码传给后端，并得到后端返回给我的结果
   



});