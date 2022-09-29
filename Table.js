class Table {
  constructor(dadosProcesados) {
    this.header = dadosProcesados[0]; //peguei o cabecalho- que sao as categorias da tabela
    dadosProcesados.shift(); //removi o cabecalho pois ja usei ele - que o corpo/os ddos
    this.rows = dadosProcesados;
  }
}

module.exports = Table;
