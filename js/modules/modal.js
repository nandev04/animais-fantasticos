export default class Modal {
  constructor(modalContainer, loginButton, closeButton){
    this.modalContainer = document.querySelector(modalContainer);
    this.loginButton = document.querySelector(loginButton);
    this.fecharButton = document.querySelector(closeButton);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outCLickModal = this.outCLickModal.bind(this);
  }

  // Adiciona a classe ativo ao container do modal
  toggleModal() {
    this.modalContainer.classList.toggle('ativo');
  }

  // ativa o evento toggleModal 
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // Fecha o modal ao clique fora
  outCLickModal(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal(event);
    }
  }

  // Adiciona os eventos aos botões
  addModalEvents() {
    this.loginButton.addEventListener('click', this.eventToggleModal);
    this.fecharButton.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.outCLickModal);
  }

  // Inicia toda a função do modal
  init() {
    if (this.modalContainer && this.loginButton && this.fecharButton) {
      this.addModalEvents();
    }
    return this;
  }
}
