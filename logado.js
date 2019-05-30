const mostrarUsuarioLogado = () => {
  const secaoUsuario = document.querySelector('#secao-usuario');
  const usuarioString = sessionStorage.getItem("usuario");

  if(!usuarioString){
    window.location = 'index.html';
  }

  const usuario = JSON.parse(usuarioString);

  secaoUsuario.innerHTML = usuario.nome;
}

const consultarVagas = () => {
  fetch('http://23.97.172.42/vaga/lista', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      // 'Authorization': 'Bearer ' + sessionStorage.get('token')
    }
  })
  .then(resposta => resposta.json())
  .then(dados => {
    mostrarVagas(dados);
  });
}

const mostrarVagas = vagas => {
  let secao = document.querySelector('#secao-vagas');

  for(let vaga of vagas){
    secao.innerHTML += `
      <p>${vaga.dataCadastro}</p>
      <p>${vaga.descricao}</p>
      <p>${vaga.cidade}</p>
      <hr>
    `;  
  }
}

mostrarUsuarioLogado();
consultarVagas();