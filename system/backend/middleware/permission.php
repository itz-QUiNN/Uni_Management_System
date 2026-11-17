<?php

session_start();

require_once __DIR__ . "/../config/response.php";

function checkLogin() {
    if(!isset($_SESSION["user_id"])) {
        sendResponse(false, "Please login first.");
    }
}

function checkRole($roles) {
    checkLogin();

    if(!in_array($_SESSION["role"], $roles)) {
        sendResponse(false, "Access denied");
    }
}

?>