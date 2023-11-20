<?php
//header('Access-Control-Allow-Origin: *'); 
//header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
//header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode($_GET);

} else if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
    #raw json
    //$data = file_get_contents('php://input');
    //$data = json_decode($data); 



    echo json_encode($_POST);
}

