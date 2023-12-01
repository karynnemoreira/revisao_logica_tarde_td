//console.log  é uma função nativa do js que exibe uma mensagem no console do navegador. 

// Entrada - Processamento - Saída

// console.log("Uhull, vamos sextar!!!")

// //VARIÁVEIS: var, let e const 

// //VAR ela tem escopo global (pode ser chamada em qualquer lugar) por isso, ela não é mais utilizada, pq causa bastante conflitos e bugs. NÃO É MAIS UTILIZADA COM FREQUENCIA. 

// var cor = "azul"
// console.log(cor)

// cor = "vermelho"
// console.log(cor)

// cor = "pink"
// console.log(cor)


// //LET não causa danos e bugs e é a preferida entre os programadores.

// let animal = "girafa"
// // console.log(animal)

// animal = "pato"
// console.log(animal)

// let animal2 = "cachorro"
// console.log(animal2)

// //CONST é uma variável constante ela não muda,NÃO CONSIGO REDEFINIR O VALOR DELA.

// const fruta = "laranja"
// console.log(fruta)

// // fruta = "uva"
// //Deu erro pq uma variável constante não pode ser redefinida/alterada. 

// //NOMES DAS VARIÁVEIS: Nomes não podem começar com números ou símbolos, exceto: _ e $

// let carro = "uninho"
// let _carro = "pálio"
// let $carro = "siena"
// let carroNovoDaSogra = "strada" //camelcase

//TIPOS DE VARIÁVEIS

//number
let ano = 2023 // tupe number (tipo de variável numérica) 

//string (tipo textual) o valor é declarado entre "" , ' ' ou ``
let mes = "dezembro" // string- tipo textual
let dia = 'sexta' //string - tipo textual
let frase = `Natal está chegando` //string - tipo textual

//Boolean - Verdadeiro ou falso
let feliz = true
let triste = false

//Vamos ver com calma com o tempo
let teste = null //valor nulo
let teste2 = undefined //valor indefinido 
let teste3 = NaN //Não é um valor numérico

console.log(typeof feliz)//informa o tipo da variável

//TemplateString, também é uma string, porém, ela é mais robusta, elegante. Conseguimos guardar mais informações ou chamar de uma outra forma. Ela é chamada com crase ``
//Forma de chamar o templateString  `${}`


//Aqui estou guardando informações com conteúdos de outras variáveis

let fraseGrande = `Hoje é ${dia} do mês de ${mes} de ${ano} , O ${frase}`

console.log(fraseGrande)

//Aqui não estou guardando nada, o console só mostra uma mensagem
console.log (`Hoje iniciou o mês de ${mes}`)


//CONDIÇÕES
//IF = SE
//ELSE = SENÃO
//ELSE IF = SENÃO SE (usado para nos dar mais opções de escolha)


let a = 3 > 2 //false

if(a == false) { // a = false 
 console.log("Essa condição é verdadeira")   
} else {
    console.log("Essa informação não bate")
}


let estiloMusical = "axé" //imagine o usuário digitando um estilo musical


if(estiloMusical === "rock"){
console.log("O estilo musical é Rock")
} else if (estiloMusical === "sertanejo"){
console.log("O estilo musical é sertanejo")
} else if(estiloMusical === "funk"){
console.log("O estilo musical é funk")
} else{
    console.log("Estilo musical não encontrado")
}

