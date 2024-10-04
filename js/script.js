function validacampos(){
    if (document.getElementById("nome").value==""){
        document.getElementById("valida-nome").innerHTML="O campo NOME não pode estar em branco";
    } else {document.getElementById("valida-nome").innerHTML="";}
    if (document.getElementById("email").value==""){
        document.getElementById("valida-email").innerHTML="O campo EMAIL não pode estar em branco";
    } else {document.getElementById("valida-email").innerHTML="";}
    if (document.getElementById("rg").value==""){
        document.getElementById("valida-rg").innerHTML="O campo RG não pode estar em branco";
    } else {document.getElementById("valida-rg").innerHTML="";}
    if (document.getElementById("cpf").value==""){
        document.getElementById("valida-cpf").innerHTML="O campo CPF não pode estar em branco";
    } else {document.getElementById("valida-cpf").innerHTML="";}
    if (document.getElementById("aniversario").value==""){
        document.getElementById("valida-aniversario").innerHTML="O campo DATA não pode estar em branco";
    } else {document.getElementById("valida-aniversario").innerHTML="";}
    if (document.getElementById("termos").value==""){
        document.getElementById("valida-termo").innerHTML="O campo TERMO não pode estar em branco";
    } else {document.getElementById("valida-termo").innerHTML="";}
}