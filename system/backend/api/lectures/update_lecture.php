<?php

require_once "../../config/database.php";
require_once "../../middleware/permission.php";

checkRole(['lecturer']);

$id = $_GET['id'] ?? null;

if (!$id) {
    sendResponse(false, "Lecture ID is required");
}

$data = getInput();

$module = $data['module'] ?? null;
$time   = $data['time'] ?? null;
$date   = $data['date'] ?? null;

if (!$module || !$time || !$date) {
    sendResponse(false, "Module, time, and date are required");
}

$id = (int) $id;

$sql = "UPDATE lectures
        SET module = '$module', time = '$time', date = '$date'
        WHERE id = $id";

if (mysqli_query($conn, $sql)) {

    sendResponse(true, "Lecture updated successfully", [
        "id"     => $id,
        "module" => $module,
        "time"   => $time,
        "date"   => $date
    ]);

} else {

    sendResponse(false, "Unable to update lecture");

}

?>