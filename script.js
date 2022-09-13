async function buscaEndereco(cep) {
  var mensagemErro = document.getElementById('erro');
  mensagemErro.innerHTML = '';
  try {
    var consultaCep = await (await fetch(`https://viacep.com.br/ws/${cep}/json/`)).json()
    //var consultaCepConvertida = await consultaCep.json();
    // if (consultaCep.erro) {
    //   throw Error ('Cep não existe!')
    // }

    var logradouro = document.getElementById('endereco');
    var cidade = document.getElementById('cidade');
    var estado = document.getElementById('estado');

    logradouro.value = consultaCep.logradouro;
    bairro.value = consultaCep.bairro
    cidade.value = consultaCep.localidade;
    estado.value = consultaCep.uf;
    console.log(consultaCep);
    return consultaCep;
  } catch (erro){
    mensagemErro.innerHTML = `<p>Cep Inválido! Tente novamente</p>`;
    mensagemErro.classList.add('erro__texto');
    console.log(erro);
  }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));



// let ceps = ['33930590', '31742525', '30320720'];
// let conjuntoCeps = ceps.map(valores =>  buscaEndereco(valores));

// console.log(conjuntoCeps);
// Promise.all(conjuntoCeps).then(resposta => console.log(resposta));

// .then(transformaParaJson())
// .then(verificaCepValido())
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log('Processamento concluido!'))

// console.log(consultaCep);

// function transformaParaJson() {
//   return resposta => resposta.json();
// }

// function verificaCepValido() {
//   return r => {
//     if (r.erro) {
//       throw Error('Esse cep não existe');
//     } else {
//       console.log(r);
//     }
//   };
// }


