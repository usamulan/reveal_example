<?php

  $id = $_POST['id'];
  $pass = $_POST['pass'];

  echo $id.'<br>';
  echo $pass.'<br>';

  $dbConnect = mysqli_connect('localhost', 'root', '', 'test');
  $sql = "insert into example(id, pass) values('$id', '$pass')";

  mysqli_query($dbConnect, $sql);

?>