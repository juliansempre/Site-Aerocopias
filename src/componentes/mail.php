<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Contato</title>
</head>
<body>
	
<table class="tab">
<form action="envia.php" onsubmit="return verifica();" name="formu" method="POST" enctype="multipart/form-data">
<tr><td><input type="text" class="formte" id="nome" name="nome" placeholder="Qual o seu nome?" /><br /><br /></tr></td>
<tr><td><input type="text" class="formte" id="senha"  name="senha" placeholder="Qual o seu e-mail?"/><br /><br /></tr></td>
<tr><td><textarea name="contato"class="forme" id="contato"  title="Escreva a sua mensagem"></textarea><br /><br /></tr></td>
<tr><td><input type="submit" class="formb" name="Enviar" onClick="verifica()" value="Enviar" name="enviar" />
<input type="reset" value="limpar"  class="formb"  /></tr></td>
</form>

</table>
<!-- ====================================
// <input type="reset" value="limpar" /> // limpar o formulario
==================================== -->
<script>
    

//validação javascript campo vazio:

function verifica(){
if (document.formu.nome.value=="" && document.formu.senha.value==""  && document.formu.mensagem.value==""){
alert("Preencha o formulário!");
return false;}
	if (document.formu.nome.value==""){
alert("Por favor, Digite o nome!");
return false;}
if (document.formu.senha.value==""){
alert("Por favor, Digite a senha!");
return false;}
if (document.formu.mensagem.value==""){
alert("Por favor, Digite sua mensagem!");
return false;}
}
</script>
</body>
</html>