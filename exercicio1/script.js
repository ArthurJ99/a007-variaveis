//Exercicio 1
//Parte 1
let nome;
let idade;
console.log(typeof nome)
console.log(typeof idade)
/*como não foi atribuido valor as variáveis elas foram 
identificadas como undefined*/

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

/*as variaveis que antes estavam como undefined agora
estão descritas como strings*/

console.log("Olá",nome ,"você tem",idade,"anos")

//Parte 2

let resposta1;
let resposta2;
let resposta3;

resposta1 = prompt("Você tem um pet?")
resposta2 = prompt("você é casado(a)?")
resposta3 = prompt("você é brasileiro(a)?")

console.log(resposta1)
console.log(resposta2)
console.log(resposta3)

const perguntaPet = "Você tem um pet?";
const perguntaCasado = "você é casado(a)?";
const perguntaBrasileiro = "você é brasileiro(a)?";
console.log(perguntaPet + "" + resposta1);
console.log(perguntaCasado + "" + resposta2);
console.log(perguntaBrasileiro + "" + resposta3);