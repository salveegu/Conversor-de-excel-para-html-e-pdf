const Reader = require("./Reader");
const Processor = require("./Processor");
const Table =  require ("./Table");

async function main() {
 
 var dados = await leitor.Read("./produtos.csv");

  var dadosProcessados = Processor.Process(dados);
  var usuarios = new Table(dadosProcessados);

  console.log(usuarios.header);  

}

main();
 