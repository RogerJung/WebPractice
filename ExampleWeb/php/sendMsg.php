<?php
	header('Access-Control-Allow-Origin: *');
	$conn=mysqli_connect("localhost","root","","example_web");
	mysqli_query($conn,"set names utf8");

    $msg = $_POST['msg'];

    $sql = "INSERT INTO `message`(`Name`) VALUES ('$msg')";
    if(!$send = mysqli_query($conn, $sql)) {
        echo mysqli_error($conn);
    } else {
        echo "success";
    }
?>