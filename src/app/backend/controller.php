<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);


if (isset($_POST['action']) && $_POST['action'] !== '') {
    switch ($_POST['action']) {
        case 'uploadavatar':
            header('Content-Type: application/json');
            echo json_encode(uploadavatares($_FILES['file']));
            break;
    }
}

function uploadavatares($avatar)
{
    $nombreArchivo = basename($avatar['name']);
    if ($avatar['error'] === UPLOAD_ERR_OK) {
        $nombreArchivo = preg_replace(
            "/[^a-zA-Z0-9\-\_\.]/",
            "",
            basename($avatar['name'])
        );
        $nombreArchivo = strtolower(str_replace(" ", "-", $nombreArchivo));
        $nombreArchivo = time() . "-" . $nombreArchivo;
        $nombreArchivo = str_replace(["'", "\"", ";", "{", "}"], '', $nombreArchivo);
        $extension = strtolower(pathinfo($nombreArchivo, PATHINFO_EXTENSION));
        if (!in_array($extension, ['jpg', 'png', 'txt'])) {
            return ['status' => 'error', 'message' => 'File must be a jpg or png'];
        }
        $rutaDestino = "/assets/" . $nombreArchivo;
        if (move_uploaded_file($avatar['tmp_name'], $rutaDestino)) {
            return ['status' => 'success', 'message' => 'File uploaded successfully', 'imgurl' => $rutaDestino];
        } else {
            return ['status' => 'error', 'message' => 'File upload error'];
        }
    }
}
