export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabcontent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabcontent.forEach((item) => {
      item.classList.remove('ativo');
    });
    const direcao = tabcontent[index].dataset.anime;
    tabcontent[index].classList.add('ativo', direcao);
  }

  if (tabcontent.length && tabMenu.length) {
    tabcontent[0].classList.add('ativo');

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
