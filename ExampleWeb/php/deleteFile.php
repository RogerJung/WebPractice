<?php
	header('Access-Control-Allow-Origin: *');
	$conn=mysqli_connect("localhost","root","","fakebook");
	mysqli_query($conn,"set names utf8");

    $fname = $_POST['fname'];
    $user = $_POST['user'];

    $sql = "DELETE FROM `file` WHERE `Name`='$fname' AND `User`='$user'";
    $result = mysqli_query($conn, $sql);
    echo 0;
?>