function precoMedio (){
med=0
max=-1
resp= ""
    for(i=0;i<arguments.length;i++){
        med+=arguments[i].preco
            if (arguments[i].preco>max){
                max=arguments[i].preco
                resp=arguments[i].nome
            }
    }
console.log("O produto mais caro se chama \"" + resp + "\"")
return med/arguments.length
}
