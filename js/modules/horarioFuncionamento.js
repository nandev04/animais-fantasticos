export default class HorarioFuncionamento {
  constructor(seletorFuncionamento, classe) {
    this.funcionamento = document.querySelector(seletorFuncionamento);
    this.class = classe;
  }

  checkHour() {
    const diaFuncionamento = this.funcionamento.dataset.semana.split(',').map(Number);
    const horarioFuncionamento = this.funcionamento.dataset.horario.split(',').map(Number);
    const dataAgora = new Date();
    const diaAgora = dataAgora.getUTCDay();
    const horaAgora = dataAgora.getUTCHours() - 3;
    const verificação = diaAgora > 0 && diaAgora <= diaFuncionamento[4] && horaAgora >= horarioFuncionamento[0] && horaAgora < horarioFuncionamento[1];

    if (verificação) {
      this.funcionamento.classList.add(this.class);
    }
  }

  init() {
    if (this.funcionamento) {
      this.checkHour();
    }
    return this;
  }
}
