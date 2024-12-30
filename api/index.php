<?php
// Include the Composer autoloader
require_once '../vendor/autoload.php';
require('../system_functions.php');
require('../database_connection.php');

// Import Bramus Router
use Bramus\Router\Router;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: GET, POST, PUT,DELETE');

// Instantiate the router
$router = new Router();

$router->options('.*',   function () {}); // return for all pre-flight checks

$router->setNamespace('\Http\Controllers');

$router->post('/user',         'UserProfileController@addUser');
$router->put('/user/{$id}',    'UserProfileController@updateUser');
$router->delete('/user/{$id}', 'UserProfileController@deleteUser');
$router->get('/user/{$id}',    'UserProfileController@getUserByID');
$router->get('/users',         'UserProfileController@getAllUsers');

error_log('Request to: ' . $_SERVER['REQUEST_URI']);
// Run the router
$router->run();
