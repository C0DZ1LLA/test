<?php

$host= "localhost";
$username= "root";
$password = "C0DZ1LLA";

$db_name = "logindatabasesimple";

$conn = mysqli_connect($host, $username, $password, $db_name);

if (!$conn) {
	echo "Connection failed!";
}