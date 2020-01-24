function meuNome(nome) {
var o = {}; 
var a = nome;
var b =  a.substring(0,1);
var c = b.toUpperCase();
var d = a.substr(1);
var e = (c+d);
var bValue = e;
Object.defineProperty(o, 'nome', {
  get() { return bValue; },
  set(newValue) { bValue = newValue; },
  enumerable: true,
  configurable: true
});
  o.nome;
  return o.nome}
