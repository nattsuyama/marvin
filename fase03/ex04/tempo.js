function tempo(data1, data2, unidade){
   var a = new Date (data1);
   var c = new Date (data2);
   var b = unidade;
 var f = Math.abs(a.getTime() - c.getTime()); 
 var g = Math.ceil(f / (1000 * 60 * 60 * 24));
 var h = g/30;
 var i = (g/30)/12;
 if (b === "dia")
 return g.toFixed(0);
    else if (b=== "mes")
    return h.toFixed(0);
    else if (b === "ano")
    return i.toFixed(0);
}
