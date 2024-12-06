<?php
// Conexão com o banco de dados (substitua pelos seus dados de conexão)
$servername = "localhost";
$username = "root";
$password = "v3v3";
$dbname = "v3";

// Criando conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificando conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Recebendo os dados do formulário
$usuario = $_POST['usuario'];
$senha = $_POST['senha'];

// Consultando o banco de dados
$sql = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND senha = '$senha'";
$result = $conn->query($sql);

// Verificando se encontrou um usuário
if ($result->num_rows > 0) {
    // Login bem-sucedido
    echo "Login bem-sucedido!";
    // Redirecionar para uma página protegida
    header('Location: dashboard.html');
    exit();
} else {
    // Login falhou
    echo "Usuário ou senha incorretos!";
}

$conn->close();
?>
