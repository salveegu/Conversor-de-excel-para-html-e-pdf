const fs = require("fs");

fs.readFile("./usuario.json", { encoding: "utf-8" }, (error, dados) => {
  if (error) {
    console.log(error);
  } else {
    console.log(dados);

    var conteudoJson = JSON.parse(dados);

    conteudoJson.nome = "xxt";
    conteudoJson.idade = "29";
    conteudoJson.sexo = "Feminino";
    conteudoJson.profissao = "medico";
    console.log(conteudoJson);
    
fs.writeFile('./usuario.json',JSON.stringify(conteudoJson),(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Dados atualizados com sucesso!");
    }
})

  }

 

});
