<?php
$nombre = $_POST['nombre'];
$asunto = $_POST['asunto'];
$correo = $_POST['correo'];
$contenido = $_POST['contenido'];

$destinatario = "cec.interamericano@gmail.com";
$asunto = "$asunto";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Asunto: $asunto \n";
$carta .= "Contenido: $contenido \n";

mail($destinatario, $correo, $asunto, $carta);
header('Location:../index.html')
?>