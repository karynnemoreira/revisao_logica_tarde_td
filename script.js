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

// //number
// let ano = 2023 // tupe number (tipo de variável numérica) 

// //string (tipo textual) o valor é declarado entre "" , ' ' ou ``
// let mes = "dezembro" // string- tipo textual
// let dia = 'sexta' //string - tipo textual
// let frase = `Natal está chegando` //string - tipo textual

// //Boolean - Verdadeiro ou falso
// let feliz = true
// let triste = false

// //Vamos ver com calma com o tempo
// let teste = null //valor nulo
// let teste2 = undefined //valor indefinido 
// let teste3 = NaN //Não é um valor numérico

// console.log(typeof feliz)//informa o tipo da variável

// //TemplateString, também é uma string, porém, ela é mais robusta, elegante. Conseguimos guardar mais informações ou chamar de uma outra forma. Ela é chamada com crase ``
// //Forma de chamar o templateString  `${}`


// //Aqui estou guardando informações com conteúdos de outras variáveis

// let fraseGrande = `Hoje é ${dia} do mês de ${mes} de ${ano} , O ${frase}`

// console.log(fraseGrande)

// //Aqui não estou guardando nada, o console só mostra uma mensagem
// console.log (`Hoje iniciou o mês de ${mes}`)


// //CONDIÇÕES
// //IF = SE
// //ELSE = SENÃO
// //ELSE IF = SENÃO SE (usado para nos dar mais opções de escolha)


// let a = 3 > 2 //false

// if(a == false) { // a = false 
//  console.log("Essa condição é verdadeira")   
// } else {
//     console.log("Essa informação não bate")
// }


// let estiloMusical = "axé" //imagine o usuário digitando um estilo musical


// if(estiloMusical === "rock"){
// console.log("O estilo musical é Rock")
// } else if (estiloMusical === "sertanejo"){
// console.log("O estilo musical é sertanejo")
// } else if(estiloMusical === "funk"){
// console.log("O estilo musical é funk")
// } else{
//     console.log("Estilo musical não encontrado")
// }


//OPERADORES LÓGICOS

// && (and / e)  COMPARA SE AS DUAS INFORMAÇÕES SÃO VERDADEIRA,ELAS PRECISAM SER VERDADEIRAS PARA CAIR NO IF.
//um E o outro precisar ser true/verdade

//Exemplo 1 - boolean
// let a = false  
// let b = false 

// if (a === true && b === false ){
// console.log( "tudo certo") 
// } else{
//     console.log("Existe alguma informação falsa")
// }


// //Exemplo 2 - strings

// let animal1 = "galinha"
// let animal2 = "papagaio"

// //galinha é diferente != de cachorro? SIM. papagaio é diferente != de papagaio? NÃO. Uma informação é verdadeira e a outra é falsa, por isso caiu no else. 
// if(animal1 != "cachorro" && animal2 != "papagaio"){
// console.log("As duas informações estão corretas")
// }else{
//     console.log("Tem informação errada aí ")
// }

// == só pra comparar o valor da variável, ex? "cachorro", "gato", "Rihanna", 20, true, false...
// === comparar o valor e o tipo, se é  "cachorro" e string; se é 20 e number, se é true e boolean; 


// || OR/OU  Comparar se um OU o outro são verdadeiros

// let fruta1 = "morango"
// let fruta2 = "abacaxi"

// if(fruta1 === "uva" || fruta2 === "abacaxi"){
// console.log(`Amo essas frutas ${fruta1} e ${fruta2}`)
// }

// //exemplo com carro

// let carro1 = "gol"
// let carro2 = "celta"

// if(carro1 === "gol" || carro2 === "strada"){
// console.log("Um ou/e o outro então corretos")
// }else{
//     console.log("Nenhum dos dois carros estão certos")
// }


// // ! not : inverte um valor que é dado a ele 
// let segunda = true
// console.log(!segunda)


//Exemplo 

// let cantora = "Mariah Carey"
// let mes = "Dezembro"
// let cantor = "Roberto Carlos"
// let natal = `Ano novo em Copacabana com participação especial da cantora ${cantora} e ${cantor}`


// if(mes === "Novembro" || cantora === "Mariah Carey" || cantor != "Roberto Carlos"){
// console.log(`Natal está chegando, vamos descongelar a  ${cantora} e partiu cruzeiro do ${cantor} `)
// } else{
//     console.log(`Estamos longe do natal que é no mês de ${mes}`)
// }

//OPERADORES DE ATRIBUIÇÃO

// = ATRIBUIÇÃO DE TIPO 
// + ATRIBUIÇÃO DE SOMA  +=
// - ATRIBUIÇÃO DE SUBTRAÇÃO -= 
// * ATRIBUIÇÃO DE MULTIPLICAÇÃO *=
// / ATRIBUIÇÃO DE DIVISÃO /=
// ++ ATRIBUI UM INCREMENTO (ADICIONA 1 VALOR)
// -- ATRIBUI UM DECREMENTO (RETIRA 1 VALOR)
// % ATRIBUIÇÃO DE RESTO %= (VAMOS VER COM O TEMPO)

// let precoTotal = 5 

// let precoTotal2 = 5

// //Soma
// console.log(precoTotal = precoTotal + 13) //completa
// console.log(precoTotal += 18) //simplicada

// //Subtração
// console.log(precoTotal = precoTotal - 23) //completa
// console.log(precoTotal -= 44) //simplicada

// //Multiplicação
// console.log(precoTotal2 = precoTotal2 * 39) //completa
// console.log(precoTotal2 *= 7) //simplicada

// //Divisão
// console.log(precoTotal = precoTotal / 22) //completa
// console.log(precoTotal /= 97) //simplicada


//let num = 10 

//console.log(num)
//console.log(num + 28)

//console.log(num = num - 44)

//console.log(num = num * 9)

//console.log(num = num / 4)

//console.log(num += 7) //simplificada


//------LOOPS---------
//LOOPS: SÃO LAÇOS DE REPETIÇÕES, EXECUTAR UMA TAREFA DIVERSAS VEZES.

//IMAGINE UM CONTADOR FEITO DE FORMA MANUAL CONTANDO DE 1 ATÉ 10. 

let contador = 0

// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)


//while (enquanto) Execute o loop enquanto a condição for verdadeira.

// while(condição){
// tarefa
// iteração
// }

//EXEMPLO 1
// let contador2 = 0
// //Contador2 é menor que é 10? É!! Então execute isso {} 
// while (contador2 < 100) {
//     contador2++
//     console.log(`Número: ${contador2}`)
// }

// ++ incremento, pega o valor atual e some 1 valor
// -- decremento, pega o valor atual e retire 1 valor

//EXEMPLO 2
// let contandoPares = 20

// while (contandoPares < 50) {
//     contandoPares += 2 //execute isso
//     console.log(contandoPares) // mostrar o valor atual no console.log
// }

//EXEMPLO 3 

// let contandoImpares = 3
// while (contandoImpares < 50) {
//     contandoImpares += 3
//     console.log(contandoImpares)
// }

//EXEMPLO 4
//DEFININDO AUMENTO DE SALÁRIO

// let salario = 1000 
// while(salario < 3000){
// salario += 100 //O salário vai ser somado de 100 em 100 até chegar os 3000
// console.log(` O salário é R$ ${salario}`)
// }

//EXEMPLO 5 
// let numero = 4

// while(numero < 50){
// numero *= 3    
// //numero = 4, * 3 = 12 é menor que 50? É, então execute.
// //numero = 12, * 3 = 36 é menor que 50? É, então execute.
// //numero = 36, *3 = 108 //108 é menor que 50? Não! então pare por aí.
// console.log(numero)
// }

//---------FOR
// For: Executa o loop enquanto a condição for verdadeira, porém,você pode colocar as variáveis dentro da estrutura. No FOR o ponto er vírgula é obrigatório após cada valor. As  chaves {} são opcionais. 

//Estrutura do for


// for(variavel; condição; iteração){
//     tarefa
// }

for(let i = 1; i <= 10; i++){
//console.log(i)
}


for(let k = 0; k <= 100; k += 10 ){
//console.log(k)
}



//exemplo com while, variável FORA do bloco
let m = 2

while(m <= 10){
m++
//console.log(m)
}



//CUIDADOOO!! Esse código será executado eternamento, ou seja, loop infinito. 

for(let batata = 1; batata < 10; batata++){
//console.log(batata)
}


// //Números pares de 0 a 20 usando o FOR
// for(let j = 0; j <= 20; j+=2){
// console.log(j)
// }

//------------If Else Else If

//If: SE (Se a informação for verdadeira, faça isso)

//else if: senão se (Usado para nos dar mais opções de escolha)

//else: Senão (Se todas as informações forem falsas, cai no else)



let numeroDaSorte = 14


if(numeroDaSorte === 78){
console.log("Parabéns, você foi o primeiro sorteado")
} else if(numeroDaSorte === 21){
    console.log("Parabéns, você foi o segundo sorteado")
} else if(numeroDaSorte === 45){
console.log("Parabéns, você foi o terceiro sorteado")
} else{
    console.log("Hoje não é o seu dia de sorte")
}