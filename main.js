let login = JSON.parse(localStorage.getItem("login") || "[]")

document.getElementById('btnEntrar').addEventListener('click', function (){
  
  let txt = document.getElementById('txtLogin').value
  let num = Number(document.getElementById('numSenha').value)
  
  let verNome = login.some(t=> t.nome === txt)
  let verSenha = login.some(n => n.senha === num)
  
  if(!verNome || !verSenha){
    alert("Login incorreto")
  }else{
    alert("Você passou!!")
  }
  
})