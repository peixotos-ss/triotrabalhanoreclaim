function login(){
    var nome = $("#nome").val()
    // var senha = document.getElementById("senha").value
    var senha = $("#senha").val()

    if(nome && senha && nome === "pietro" && senha === "12345"){
        const user = {
            name: nome, 
            dataEntrada: new Date(),
            id: Math.floor(Math.random() * 1000000)
        }
        localStorage.setItem("usuario", JSON.stringify(user))
        window.location.href = "../Loja"
    }else{
        document.getElementById("error-modal").style.display = "flex"
        document.getElementById("nome").style.border = "3px solid red"
        document.getElementById("senha").style.border = "3px solid red"
    }
}

function showPassword(){
    var inputSenha = document.querySelector("#senha")
    var img_eye = document.querySelector("#eye")

    if(inputSenha.getAttribute("type") === "password"){ 
        inputSenha.setAttribute("type", "text")
        img_eye.setAttribute("src", "../../public/view.png")
    }else{
        inputSenha.setAttribute("type", "password")
        img_eye.setAttribute("src", "../../public/hide.png")
    }
}


function fecharError(){
    document.getElementById("error-modal").style.display = "flex"
    document.getElementById("nome").style.border = "2px solid black"
    document.getElementById("senha").style.border = "2px solid black"
}