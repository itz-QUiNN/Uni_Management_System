<?php

$server = "db";
$userName = "Admin";
$Password = "Admin";
$database = "Uni_Management_System";

$conn = mysqli_connect($server, $userName, $Password, $database);

if(!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
} else {
    // echo "Database Connected Successfully.";
}

mysqli_set_charset($conn, "utf8mb4");

?>