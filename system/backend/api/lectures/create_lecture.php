<?php

require_once "../../config/database.php";
require_once "../../middleware/permission.php";

checkRole(['lecturer']);

$data = getInput();

$module = $data['module'];
$time = $data['time'];
$date = $data['date'];

$sql = "INSERT INTO lectures
        (module, time, date)
        VALUES
        ('$module', '$time', '$date')";

if (mysqli_query($conn, $sql)) {

    sendResponse(true, "Lecture created successfully", ["module"=> $module,"time"=> $time,"date"=> $date]);

} else {

    sendResponse(false, "Unable to create lecture");

} 


?>