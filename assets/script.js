/* fazendo conexao com o arquivo html, declarando as variaveis que serão manipuladas */
let textarea = document.querySelector("textarea");
let botaoCripto = document.getElementById("botaoCripto");
let botaoDescripto = document.getElementById("botaoDescripto");

// Evento disparado quando uma tecla é pressionada no textarea
textarea.addEventListener("keypress", (e) => {
  // Verifica se o caractere não está na lista permitida
  if (!checkChar(e)) {
    // Impede a inserção do caractere no textarea
    e.preventDefault();
  }
});

// Função para verificar se o caractere é permitido
function checkChar(e) {
  // Obtém o caractere da tecla pressionada
  const char = String.fromCharCode(e.keyCode);

  // Define o padrão de caracteres permitidos (letras e números)
  const pattern = "[a-zA-Z0-9]";

  // Verifica se o caractere corresponde ao padrão
  if (char.match(pattern)) {
    return true; // Caractere permitido
  } else {
    console.log("Caracter especial digitado " + char);
  }
}

// Adiciona um ouvinte de eventos para o evento "keypress" no elemento textarea
textarea.addEventListener("keypress", () => {
  // Verifica se o valor do textarea está vazio ou nulo
  if (textarea.value === "" && textarea.value === null) {
    // Desabilita os botões de criptografia
    botaoCripto.classList.remove("criptografar");
    botaoCripto.classList.add("desabilitado");

    // Desabilita os botões de descriptografia
    botaoDescripto.classList.remove("descriptografar");
    botaoDescripto.classList.add("desabilitado");
  }

  // Habilita o botão de criptografia
  botaoCripto.disabled = false;
  botaoCripto.classList.remove("desabilitado");
  botaoCripto.classList.add("criptografar");

  // Habilita o botão de descriptografia
  botaoDescripto.disabled = false;
  botaoDescripto.classList.remove("desabilitado");
  botaoDescripto.classList.add("descriptografar");
});


// Adiciona um ouvinte de eventos para o evento "paste" no elemento textarea
textarea.addEventListener("paste", () => {
  // Verifica se o valor do textarea está vazio ou nulo
  if (textarea.value === "" && textarea.value === null) {
    // Desabilita os botões de criptografia
    botaoCripto.classList.remove("criptografar");
    botaoCripto.classList.add("desabilitado");

    // Desabilita os botões de descriptografia
    botaoDescripto.classList.remove("descriptografar");
    botaoDescripto.classList.add("desabilitado");
  }

  // Habilita o botão de criptografia
  botaoCripto.disabled = false;
  botaoCripto.classList.remove("desabilitado");
  botaoCripto.classList.add("criptografar");
  
  // Exibe mensagem no console
  console.log("Entrou nessa porra aqui!");

  // Habilita o botão de descriptografia
  botaoDescripto.disabled = false;
  botaoDescripto.classList.remove("desabilitado");
  botaoDescripto.classList.add("descriptografar");
});


// Função que é chamada para carregar a página e configurar a aparência inicial
function carregaPagina() {
  // Seleciona o elemento textarea na página
  let textarea = document.querySelector("textarea");

  // Seleciona o elemento com o id "resultado" na página
  let resultado = document.getElementById("resultado");

  // Seleciona a imagem dentro da tag "aside" na página
  let imagem = document.querySelector("aside img");

  // Seleciona o parágrafo dentro da tag "aside" na página
  let asideP = document.querySelector("aside p");

  // Seleciona o botão com o id "copiar" na página
  let botaoCopiar = document.querySelector("#copiar");

  // Oculta o elemento resultado
  resultado.style.display = "none";

  // Oculta o botão de copiar
  botaoCopiar.style.display = "none";

  // Exibe a imagem
  imagem.style.display = "block";

  // Exibe o parágrafo
  asideP.style.display = "block";

  // Define o foco para o textarea
  textarea.focus();
}


// Função que executa a criptografia do texto inserido no textarea
function criptografar() {
  // Seleciona o elemento textarea na página
  let textarea = document.querySelector("textarea");

  // Seleciona o elemento com o id "resultado" na página
  let resultado = document.getElementById("resultado");

  // Seleciona a imagem dentro da tag "aside" na página
  let imagem = document.querySelector("aside img");

  // Seleciona o parágrafo dentro da tag "aside" na página
  let asideP = document.querySelector("aside p");

  // Seleciona o botão com o id "copiar" na página
  let botaoCopiar = document.querySelector("#copiar");

  // Exibe o elemento resultado
  resultado.style.display = "block";

  // Exibe o botão de copiar
  botaoCopiar.style.display = "block";

  // Oculta a imagem
  imagem.style.display = "none";

  // Oculta o parágrafo
  asideP.style.display = "none";

  // Obtém o valor do textarea, converte para minúsculas, remove acentos
  let texto = textarea.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  // Exibe no console o texto após a normalização
  console.log(texto);

  // Realiza a substituição de letras de acordo com a lógica de criptografia
  cripto = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  // Define o texto criptografado no elemento resultado
  resultado.innerText = cripto;

  // Define a cor do texto criptografado
  resultado.style.color = "#0A3871";

  // Limpa o conteúdo do textarea
  textarea.value = "";

  // Desabilita o botão de criptografar
  botaoCripto.classList.remove("criptografar");
  botaoCripto.classList.add("desabilitado");

  // Desabilita o botão de descriptografar
  botaoDescripto.classList.remove("descriptografar");
  botaoDescripto.classList.add("desabilitado");

  // Define o foco para o textarea
  textarea.focus();
}

// Função que executa a descriptografia do texto inserido no textarea
function descriptografar() {
  // Seleciona o elemento textarea na página
  let textarea = document.querySelector("textarea");

  // Seleciona o elemento com o id "resultado" na página
  let resultado = document.getElementById("resultado");

  // Seleciona a imagem dentro da tag "aside" na página
  let imagem = document.querySelector("aside img");

  // Seleciona o parágrafo dentro da tag "aside" na página
  let asideP = document.querySelector("aside p");

  // Seleciona o botão com o id "copiar" na página
  let botaoCopiar = document.querySelector("#copiar");

  // Exibe o elemento resultado
  resultado.style.display = "block";

  // Define a cor do texto descriptografado
  resultado.style.color = "#0A3871";

  // Exibe o botão de copiar
  botaoCopiar.style.display = "block";

  // Oculta a imagem
  imagem.style.display = "none";

  // Oculta o parágrafo
  asideP.style.display = "none";

  // Obtém o valor do textarea
  let texto = textarea.value;

  // Realiza a substituição de sequências específicas para descriptografar o texto
  descripto = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  // Define o texto descriptografado no elemento resultado
  resultado.innerText = descripto;

  // Limpa o conteúdo do textarea
  textarea.value = "";

  // Desabilita o botão de criptografar
  botaoCripto.classList.remove("criptografar");
  botaoCripto.classList.add("desabilitado");

  // Desabilita o botão de descriptografar
  botaoDescripto.classList.remove("descriptografar");
  botaoDescripto.classList.add("desabilitado");

  // Define o foco para o textarea
  textarea.focus();
}

function copiar() {
  // Obtém o elemento com o id "resultado" do DOM
  let resultado = document.getElementById("resultado");

  // Tenta escrever o conteúdo do elemento no clipboard
  navigator.clipboard.writeText(resultado.innerHTML)
    .then(() => {
      // Se a operação for bem-sucedida, chama a função exibirAlerta com a mensagem "Texto copiado!"
      exibirAlerta("Texto copiado!");
    })
    .catch((err) => {
      // Se houver um erro, exibe uma mensagem de erro no console
      console.error('Erro ao copiar texto:', err);
    });
}

function exibirAlerta(mensagem) {
  // Cria um elemento div que será o modal de alerta
  const modal = document.createElement('div');
  
  // Estiliza o modal
  //modal.style é uma propriedade de objetos DOM em JavaScript que fornece acesso aos estilos 
  //aplicados a um elemento. Ele permite que você leia ou modifique as propriedades de estilo do 
  //elemento diretamente via JavaScript.
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = '#fff';
  modal.style.padding = '20px';
  modal.style.border = '1px solid #ccc';
  modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  modal.style.zIndex = '9999';
  modal.textContent = mensagem; // Define o texto do modal com a mensagem fornecida

  // Adiciona o modal ao corpo do documento
  document.body.appendChild(modal);

  // Define um timeout para remover o modal após 3 segundos (ajuste conforme necessário)
  setTimeout(() => {
    document.body.removeChild(modal);
  }, 3000); // Desaparece após 3 segundos (ajuste conforme necessário)
}

carregaPagina();