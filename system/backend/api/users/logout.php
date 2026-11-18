<?php

require_once "../../config/response.php";

session_start();

session_destroy();

sendResponse(true, "Logout successful");

?>