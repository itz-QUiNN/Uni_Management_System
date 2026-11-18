<?php

require_once "../../config/database.php";
require_once "../../config/response.php";

$sql = "SELECT id, module, time, date FROM lectures";

$result = mysqli_query($conn, $sql);

$lectures = [];

while ($row = mysqli_fetch_assoc($result)) {

    $lectures[] = $row;

}

sendResponse(true, "Lectures retrieved successfully", $lectures);

?>