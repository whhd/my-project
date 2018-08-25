<?php 
    include "dbhelper.php"; 
    $username = !isset($_POST["username"]) ? "" : $_POST["username"];
    $password = !isset($_POST["password"]) ? "" : $_POST["password"];

    $sql = "select * from login where username = '$username' and password = '$password'";

    $result = query_sql($sql);
    if(count($result) > 0){
        echo "{status: true}";
    } else {
        echo "{status: false, message: '登录失败'}";
    }
?>