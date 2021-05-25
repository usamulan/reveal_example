<?php

include_once "connect.php";

//$db_conn = mysqli_connect('localhost', 'root', '', 'test');

$name = mysqli_real_escape_string($db_conn,$_POST['name']);
$email = mysqli_real_escape_string($db_conn,$_POST['email']);
$subject = mysqli_real_escape_string($db_conn,$_POST['subject']);
$message = mysqli_real_escape_string($db_conn,$_POST['message']);
$regist = date("Y-m-d");

// echo $name, $email, $subject, $message;

$sql = "INSERT INTO re_message(RE_name, RE_email, RE_subject, RE_msg, RE_reg) VALUES('$name', '$email', '$subject', '$message', '$regist')";

mysqli_query($db_conn, $sql);
echo "

<script>
  alert('메시지가 입력되었습니다.');
  location.href='/reveal/index.php';
  </script>
  ";

?>