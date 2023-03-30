<?php

$website =  "Site Aerocopias";//Nome do Website
// Aqui ficam os dados do formulário que serão enviados!!
$nome = $_POST["nome"];//Campo Nome do Formulário
$senha = $_POST["senha"];//Campo E-mail do Formulário
$contato = $_POST["contato"];//Campo Contato do Formulário
$mensagem = "Formulário enviado por $nome no Website $website:\n\n";//Inicio da Mensagem enviada! 
$mensagem .= "Nome: $nome\n";//Nome do Contato
$mensagem .= "E-mail: $senha\n";//Nome do Contato
$mensagem .= "Mensagem: $contato";//Mensagem Enviada do Contato

// Aqui ficam os dados do seu e-mail e da autoresposta!!!

$assunto = "Formulário"; //Assunto do e-mail q vai chegar na sua caixa de mensagem
$mail = "aerocopias@gmail.com"; //E-mail que você gostaria de receber os resultados dos formmail's
$assunto_auto = "$nome, Sua Mensagem Foi Recebida Com Sucesso!";//Assunto da Auto Resposta
$url_website = "aerocopias.net";//Url do Website
$nome_webmaster = "Julian Silva";//Nome do Webmaster do site
$mensagem_auto = "Obrigado por entrar em contato conosco $nome!\nO mais breve possivel estaremos respondendo sua mensagem!!!\n\nGiStuDios - $nome_webmaster";
$assunto_auto = "Recebemos sua mensagem";


if (empty($nome) || empty($senha) || empty($contato)) {
    echo "<script>
    alert('Preencha todos os campos!');
    window.history.back();
  </script>";
}
else{
//não modifique esta linha, pois é ela que envia a mensagem!!!
@mail($mail, $nome, $contato, "From: $senha");

//não modifique esta linha, pois é ela que envia a auto_resposta!!!
@mail($senha, $assunto_auto, $mensagem_auto, "From: $mail");

echo "<script>
alert('Email enviado com sucesso!');
window.history.back();
</script>";

}

?>
