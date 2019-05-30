const botaoCadastro = document.querySelector('#form-cadastro button');
const botaoLogin = document.querySelector('#form-login button');

const gerarDadosForm = campos => {
  let dados = {};
  
  for(let campo of campos){
    dados[campo.name] = campo.value;
  }

  return dados;
}

const cadastrarUsuario = () => {
  const campos = document.querySelectorAll('#form-cadastro input');
  const dados = gerarDadosForm(campos);

  fetch('http://23.97.172.42/usuario', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
  .then(resposta => resposta.json())
  .then(respostaJson => {
    alert('Cadastro realizado com sucesso!');
  });
}

const fazerLogin = () => {
  const campos = document.querySelectorAll('#form-login input');
  const dados = gerarDadosForm(campos);

  fetch('http://23.97.172.42/usuario/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
  .then(resposta => resposta.json())
  .then(respostaJson => {
    sessionStorage.setItem("usuario", JSON.stringify(respostaJson.usuario));
    sessionStorage.setItem("token", JSON.stringify(respostaJson.token));

    window.location = 'logado.html';
  });
}

if(botaoCadastro){
  botaoCadastro.onclick = cadastrarUsuario;
}

if(botaoLogin){
  botaoLogin.onclick = fazerLogin;
}