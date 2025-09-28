let login = JSON.parse(localStorage.getItem("login") || "[]")

var add = document.getElementById('btnAdd').addEventListener('click', function (){

let txt=document.getElementById('txtAddLogin').value
let num=Number(document.getElementById('numAddSenha').value)

let verNome = login.some(t => t.nome === txt)
let verSenha = login.some(n => n.senha=== num)

if (txt=="" || num==""){
  alert("Digite um nome para login e uma senha para adicionar")
  }
  else if(isNaN(num)){
    alert("Apenas números na senha!")
    }
    else if (String(num).length < 8){
    alert("Mínimo de 8 caracteres")
      }
      else if (verNome){
        alert("Este login já está sendo utilizado")
      }
      else if(verSenha){
        alert("Esta senha já está sendo utilizada")
      }else{
login.push({nome: txt, senha: num})

localStorage.setItem("login",JSON.stringify(login))
  
  alert(`Login: ${txt}; Senha: ${num} adicionados!`)
  
  window.location.replace("/index.html")
}
})

document.getElementById('txtVoltar').addEventListener('click', function(){
  
  window.location.replace("/index.html")
})