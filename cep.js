consultarCep = () => {
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(function(result){
            return result.json();
        })
        .then(function(data){
            rua.value = data.logradouro;
            complemento.value = data.complemento;
            bairro.value = data.bairro;
            cidade.value = data.localidade;
            uf.value = data.uf;
            cep.disabled = true;
        })
}
