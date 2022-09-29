const fs = require("fs");


fs.writeFile("./gustavo.txt","message: Olá gustavo",( error)=>{

    if(error){
        console.log(error);
    }else{
        console.log("Arquivo modificado!");
    }
});


fs.readFile("./gustavo.txt",{ encoding: 'utf-8' },(erro, dados) => {
    if (erro) {
      console.log(erro);
    } else {
      console.log(dados);
    }
});
