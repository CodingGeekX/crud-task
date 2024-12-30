<?php
// For error reporting
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

// Connection
function DB()
{
    $mysqli = new mysqli("localhost", "root", "", "crud");
    // Check connection
    return isset($mysqli) ? $mysqli : "Failed to connect to MySQL: " . $mysqli->connect_error;
}
