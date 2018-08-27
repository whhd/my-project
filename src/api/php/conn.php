
<?php
/**
 * @Author: Marte
 * @Date:   2018-08-16 14:48:19
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-08-23 17:03:07
 */
    $servername = "localhost";//服务器名
    $username = "root";//用户名
    $password = "root";//用户密码
    $dbname = 'register';//数据库名

    // 创建连接
    $conn = new mysqli($servername, $username,$password, $dbname);
    mysqli_set_charset($conn,'utf8');
    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 

  

    ?>
