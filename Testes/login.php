<?php
// Recebe os dados do formulário
$usuario_input = $_POST['usuario']; // Nome de usuário do formulário
$senha_input = $_POST['senha']; // Senha do formulário

// Configurações do banco de dados
$host = 'localhost'; // Endereço do servidor MySQL
$dbname = 'nome_do_banco'; // Nome do banco de dados
$username = 'root'; // Usuário do banco de dados
$password = 'v3v3'; // Senha do banco de dados

// Conexão com o banco de dados usando PDO
try {
    // Criação da conexão
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    
    // Configuração para tratar erros com exceções
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Preparando a consulta SQL para verificar o usuário
    $sql = "SELECT * FROM usuarios WHERE usuario = :usuario LIMIT 1";
    $stmt = $pdo->prepare($sql);
    
    // Bind do valor do usuário
    $stmt->bindParam(':usuario', $usuario_input);
    
    // Executa a consulta
    $stmt->execute();
    
    // Verifica se um usuário foi encontrado
    if ($stmt->rowCount() > 0) {
        // Obtém o resultado
        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);
        
        // Verifica se a senha fornecida corresponde à senha do banco
        if (password_verify($senha_input, $usuario['senha'])) {
            // Senha correta, redireciona para a página HTML
            header("Location: pagina_de_sucesso.html");
            exit();  // Interrompe a execução do script após o redirecionamento
        } else {
            // Se a senha estiver incorreta, redireciona com mensagem de erro
            header("Location: login.php?erro=Senha incorreta!");
            exit();
        }
    } else {
        // Se o usuário não for encontrado, redireciona com mensagem de erro
        header("Location: login.php?erro=Usuário não encontrado!");
        exit();
    }

} catch (PDOException $e) {
    // Caso ocorra um erro na conexão, exibirá a mensagem
    echo 'Erro de conexão: ' . $e->getMessage();
}
?>
