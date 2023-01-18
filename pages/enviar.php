<?php
$nombre = $_POST['nombre'];
$asunto = $_POST['asunto'];
$correo = $_POST['correo'];
$contenido = $_POST['contenido'];

$destinatario = "cec.interamericano@gmail.com";
$asunto = "$asunto";

$carta = "De: $nombre \n";
$carta .= "Asunto: $asunto \n";
$carta .= "Contenido: $contenido \n";

mail($destinatario, $asunto, $carta);
header('Location:../index.html')
?>