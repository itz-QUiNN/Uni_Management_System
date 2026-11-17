<?php

require_once "../../config/database.php";
require_once "../../config/response.php";
require_once "../../middleware/permission.php";

$data = getInput();

$name = $data["name"];
$email = $data["email"];
$password = $data["password"];
$role = $data["role"];

$sql = "INSERT INTO users
        (name, email, password, role)
        VALUES
        ('$name', '$email', '$password', '$role')";

if(mysqli_query($conn, $sql)) {
    sendResponse(true, "User created successfully", ["name" => $name,"email"=> $email]);
}

?>