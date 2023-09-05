export default function initModal() {
  const modalContainer = document.querySelector('[data-modal="container"]');
  const loginButton = document.querySelector('[data-modal="abrir"]');
  const fecharButton = document.querySelector('[data-modal="fechar"]');

  function toggleModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle('ativo');
  }

  function outCLickModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (modalContainer && loginButton && fecharButton) {
    loginButton.addEventListener('click', toggleModal);
    fecharButton.addEventListener('click', toggleModal);
    modalContainer.addEventListener('click', outCLickModal);
  }
}
