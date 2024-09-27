<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "italoita59@gmail.com"; // E-mail de destino
    $subject = "Novo contato de $name";
    $body = "Nome: $name\nE-mail: $email\nMensagem: $message";

    if (mail($to, $subject, $body)) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Erro ao enviar o e-mail.";
    }
}
?>
