<?php
	header('Access-Control-Allow-Origin: *');
	$conn=mysqli_connect("localhost","root","","example_web");
	mysqli_query($conn,"set names utf8");

    $msg = $_POST['msg'];
    $pwd = $_POST['pwd'];
    $mail = $_POST['mail'];
    $color = $_POST['color'];
    $gender = $_POST['gender'];

    $sql1 = "SELECT * FROM `message` WHERE `Name`='msg'";
    $result = mysqli_query($conn, $sql1);
    if (mysqli_num_rows($result) == 0){
        $sql2 = "INSERT INTO `message`(`Name`,`Password`,`Email`,`Color`,`Gender`) VALUES ('$msg','$pwd','$mail','$color','$gender')";
        if(!$send = mysqli_query($conn, $sql2)) {
            echo mysqli_error($conn);
        } else {
            echo mysqli_num_rows($result);
        }
    }
?>