import initAnimaNumeros from './animaNumeros.js';

function createAnimal(animal) {
  const div = document.createElement('div');
  div.classList.add('numero-animal');
  div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
  return div;
}

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const gridAnimal = document.querySelector('.numeros-grid');

      animaisJSON.forEach((item) => {
        const divAnimal = createAnimal(item);
        gridAnimal.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchAnimais('./animaisapi.json');
}
