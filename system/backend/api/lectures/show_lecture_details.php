<?php

require_once "../../config/database.php";
require_once "../../middleware/permission.php";

checkRole(['lecturer', 'student']);

$id = $_GET['id'] ?? null;

if (!$id) {
    sendResponse(false, "Lecture ID is required");
}

$sql = "SELECT * FROM lectures WHERE id = '$id'";
$result = mysqli_query($conn, $sql);

if ($result && mysqli_num_rows($result) > 0) {

    $lecture = mysqli_fetch_assoc($result);
    sendResponse(true, "Lecture details fetched successfully", $lecture);

} else {

    sendResponse(false, "Lecture not found");

}

?>