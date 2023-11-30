<?php
session_start();
include "db_conn.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = validate($_POST['name']);
    $uname = validate($_POST['uname']);
    $pass = validate($_POST['password']);
    $confirm_password = validate($_POST['confirm_password']);

    // Check if the username is already taken
    $check_username = "SELECT * FROM users WHERE user_name='$uname'";
    $result = mysqli_query($conn, $check_username);

    if (mysqli_num_rows($result) > 0) {
        header("Location: register.php?error=Username is already taken");
        exit();
    }

    // Check if the password and confirm password match
    if ($pass !== $confirm_password) {
        header("Location: register.php?error=Passwords do not match");
        exit();
    }

    // Collect the user's IP address
    $ip_address = $_SERVER['REMOTE_ADDR'];

    // Hash the password
    $hashed_password = password_hash($pass, PASSWORD_DEFAULT);

    // Insert user data into the database along with IP address
    $sql = "INSERT INTO users (name, user_name, password, ip_address) VALUES ('$name', '$uname', '$hashed_password', '$ip_address')";
    mysqli_query($conn, $sql);

    // Redirect to login page or any other desired page after successful registration
    header("Location: index.php");
    exit();
} else {
    header("Location: register.php");
    exit();
}

function validate($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
