<?php
	// 引入connect.php
	include 'dbhelper.php';

	/*
		接口功能：验证用户名是否存在
		所需参数：
			* username
	 */
	
	$username = isset($_GET['username']) ? $_GET['username'] : ""; 


	// 查找数据库中是否存在同名用户
	$sql = "select * from reg where username='$username'";

	// 执行sql语句
	$result = query_oop($sql);
 	
	// $aa=json_encode($result);
 	// var_dump($aa);

	if(count($result)>0){
		echo "no";
	}else{
		
		echo "yes";
	}

?>