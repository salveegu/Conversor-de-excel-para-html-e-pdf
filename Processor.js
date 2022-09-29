class Processor {
  static Process(dados) {
    var dados_separados_por_quebra_de_linha = dados.split("\r\n");

    var rows = [];

    dados_separados_por_quebra_de_linha.forEach((row) => {
      var arr = row.split(",");
      rows.push(arr);
    });
    return rows;
  }
}

module.exports = Processor;
