function tempo(data1, data2, unidade){
   var a = new Date (data1);
   var c = new Date (data2);
   var b = unidade;
 var f = Math.abs(a.getTime() - c.getTime()); 
 var g = Math.ceil(f / (1000 * 60 * 60 * 24));
 var x = Number(g);
 var h = g/30;
 var y = Number (h);
 var i = (g/30)/12;
 var z = Number (i);
 if (b === "dia")
 return (0);
    else if (b=== "mês")
    return y.toFixed(0);
    else if (b === "ano")
    return z.toFixed(0);
}
