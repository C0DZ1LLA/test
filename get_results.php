<?php
// get_results.php

$db = new mysqli('localhost', 'root', '(S19A1M13A1N14)97906864SAMANABOTALEBY', 'poll_system_db');

// Get live results
$resultsQuery = "SELECT choice, COUNT(*) as count FROM poll_data GROUP BY choice";
$resultsResult = $db->query($resultsQuery);

$liveResults = [
    'option1' => 0,
    'option2' => 0
];

while ($row = $resultsResult->fetch_assoc()) {
    $choice = $row['choice'];
    $count = $row['count'];
    $liveResults["option$choice"] = $count;
}

$db->close();

// Return results as JSON
header('Content-Type: application/json');
echo json_encode($liveResults);
?>
