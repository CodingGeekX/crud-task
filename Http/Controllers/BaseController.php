<?php

namespace http\Controllers;

class BaseController
{
    const STATUS_SUCCESS  = 200;
    const STATUS_ERROR    = 400;

    // Request function to take user input
    public static function requestJSON()
    {
        return json_decode(file_get_contents("php://input"), true);
    }

    // Respond function to return response
    public static function respondJSON($Data, $Status = null)
    {
        header("Content-type: application/json");
        if (is_null($Status)) $Status = static::STATUS_SUCCESS;
        http_response_code($Status);
        echo json_encode($Data);
    }
}
