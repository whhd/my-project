<?php
    
     session_start();
    include 'dbhelper.php';
    // 接收前端post传过来的数据
    $username = isset($_POST['username']) ? $_POST['username'] : "";
    $password = isset($_POST['password']) ? $_POST['password'] : "";
    echo "$username,$password";
    $sql = "select * from users where username = '" . $username . "' and password = '" . $password . "'";
    $result = query_sql($sql);
    if(count($result) > 0){
        //使用session保存登录信息
        $_SESSION['user'] = $username;
        echo "{status: true}"; 
    } else {
        echo "{status: false, message: '登录失败'}";
    }


?>