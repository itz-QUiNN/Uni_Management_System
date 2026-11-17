<?php

$host = "db";
$user = "Admin";
$password = "Admin";
$database = "Uni_Management_System";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

echo "<h1>PHP + MariaDB is working!</h1>";
echo "<p>Connected successfully to the university database.</p>";

$result = $conn->query("SELECT VERSION() AS version");

if ($result) {
    $row = $result->fetch_assoc();
    echo "<p>MariaDB version: " . htmlspecialchars($row["version"]) . "</p>";
}

$conn->close();

?>