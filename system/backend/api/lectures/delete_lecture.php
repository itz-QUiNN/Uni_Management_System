<?php

require_once "../../config/database.php";
require_once "../../middleware/permission.php";

checkRole(['lecturer']);

$id = $_GET['id'] ?? null;

if (!$id) {
    sendResponse(false, "Lecture ID is required");
}

$id = (int) $id;
$sql = "DELETE FROM lectures WHERE id = $id";

if (mysqli_query($conn, $sql)) {

    if (mysqli_affected_rows($conn) > 0) {
        sendResponse(true, "Lecture deleted successfully");
    } else {
        sendResponse(false, "Lecture not found");
    }

} else {

    sendResponse(false, "Unable to delete lecture");

}

?>