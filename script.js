function logar(){
    let usuario = document.getElementById("InputUsuario").value
    let senha = document.getElementById("inputSenha").value
    
    if(usuario == "Vitor"&& senha == "12345"){
        window.location.href = "home.html"
    } else { 
        // alert("Usuario senha incorreta! Tenta novamente!")

        Swal.fire({
        title: "ACESSO NEGADO!",
        text: "USUARIO INCORRETO, TENTE NOVAMENTE!",
        icon: "ERRO"
}       );
    }


}