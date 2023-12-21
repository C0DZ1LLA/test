<?php
// vote.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $choice = isset($_POST['choice']) ? $_POST['choice'] : null;
    
    if ($choice && ($choice == 1 || $choice == 2)) {
        $ipAddress = $_SERVER['REMOTE_ADDR'];
        
        // Check if the IP has already voted
        $db = new mysqli('localhost', 'root', '(S19A1M13A1N14)97906864SAMANABOTALEBY', 'poll_system_db');
        
        $checkQuery = "SELECT * FROM poll_data WHERE ip_address = '$ipAddress'";
        $checkResult = $db->query($checkQuery);

        if ($checkResult->num_rows === 0) {
            // Insert vote into the database
            $insertQuery = "INSERT INTO poll_data (ip_address, choice) VALUES ('$ipAddress', $choice)";
            $db->query($insertQuery);
            echo "success";
        } else {
            echo "duplicate";
        }

        $db->close();
    } else {
        echo "invalid_choice";
    }
} else {
    echo "invalid_request";
}
?>
