export default function initFetchBitcoin() {
  async function fetchBTC() {
    try {
      const buscaBTC = await fetch('https://www.blockchain.com/pt/ticker');
      const btcJSON = await buscaBTC.json();
      const spanBTC = document.querySelector('.btc-preco');
      const bitcoinBRL = (1000 / btcJSON.BRL.sell).toFixed(4);

      spanBTC.innerText = bitcoinBRL;
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  fetchBTC();
}
