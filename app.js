const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");

async function main() {
  
  var leitor = new Reader();

  var dados = await leitor.Read("./produtos.csv");

  var dadosProcessados = Processor.Process(dados);
  
  var usuarios = new Table(dadosProcessados);

  console.log(usuarios.header);
  console.log(usuarios.rows);
}

main();
