import AnimaNumeros from './animaNumeros';

export default function fetchAnimais(url, target) {
  // Cria a div contendo informações
  // com total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Preenche cada animal com a div e adiciona ela na grid
  function preencherAnimais(animal) {
    const gridAnimal = document.querySelector(target);
    const divAnimal = createAnimal(animal);
    gridAnimal.appendChild(divAnimal);
  }

  // Anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo JSON
  // e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // Fetch e espera resposta
      const animaisResponse = await fetch(url);
      // Transforma a resposta em JSON
      const animaisJSON = await animaisResponse.json();

      // Após a transformação de JSON, ativa as funções
      // Para preencher e animar os números
      animaisJSON.forEach(item => preencherAnimais(item));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}
