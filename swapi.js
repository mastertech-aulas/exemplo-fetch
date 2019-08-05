let caixaTexto = document.querySelector("input");
let botao = document.querySelector("button");
let texto = document.querySelector("h1");

pesquisarPersonagem = () =>{
    fetch(`https://swapi.co/api/people/${caixaTexto.value}`)
        .then(function(result){
            return result.json()
        })
        .then(function(data){
            texto.innerHTML = data.name;
        })
}

botao.onclick = pesquisarPersonagem;