function por42(n1, n2){
   var a = (Math.floor(n1/42)+2)*42;
   if (a <= n2 )
    return a;
else {console.log("Não encontrado");
return false}
}