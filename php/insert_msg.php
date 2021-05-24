<?php

include_once "connect.php"

$db_conn = mysqli_connect('localhost', 'root', '', 'test');

$name = mysqli_real_escape_string($_POST['name']);
$email = mysqli_real_escape_string($_POST['email']);
$subject = mysqli_real_escape_string($_POST['subject']);
$message = mysqli_real_escape_string($_POST['message']);

echo $name, $email, $subject, $message;

?>