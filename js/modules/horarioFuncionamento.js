export default class HorarioFuncionamento {
  constructor(seletorFuncionamento, classe) {
    this.funcionamento = document.querySelector(seletorFuncionamento);
    this.class = classe;
  }

  dadosFuncionamento() {
    this.diaFuncionamento = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioFuncionamento = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getUTCDay();
    this.horaAgora = this.dataAgora.getUTCHours() - 3;
  }

  verify() {
    const verifyWeek = this.diaFuncionamento.indexOf(this.diaAgora) !== -1;
    const verifyHour = (this.horaAgora >= this.horarioFuncionamento[0]
    && this.horaAgora < this.horarioFuncionamento[1]);
    return verifyWeek && verifyHour;
  }

  addClass() {
    if (this.verify()) {
      this.funcionamento.classList.add(this.class);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.addClass();
    }
    return this;
  }
}
