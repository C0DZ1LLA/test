<!-- register.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>C0DZ1LLA Registration</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <form action="registration.php" method="post">
        <h2>Registration</h2>
        <?php if (isset($_GET['error'])) { ?>
            <p class="error"><?php echo $_GET['error']; ?></p>
        <?php } ?>
        <label>Name:</label>
        <input type="text" name="name" placeholder="Your Name" required><br>

        <label>User Name:</label>
        <input type="text" name="uname" placeholder="User Name" required><br>

        <label>Password:</label>
        <input type="password" name="password" placeholder="Password" required><br>

        <label>Confirm Password:</label>
        <input type="password" name="confirm_password" placeholder="Confirm Password" required><br>

        <button type="submit">Register</button>
    </form>

    <p>Already have an account? <a href="index.php">Back to Login</a></p>
</body>
</html>
