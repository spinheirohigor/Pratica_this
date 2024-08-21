// ## Atividade 2: This

// Dada a função `calculaIdade`, utilize os métodos call e apply para modificar o valor de `this`. Crie seus próprios objetos para esta atividade!

// ```js
// function calculaIdade(anos) {
// 	return `Daqui a ${anos} anos, ${this.nome} terá ${
// 		this.idade + anos
// 	} anos de idade.`;
// }
// ```



// usando call na manipulação do this
const filho = {
    nome: 'Samuel',
    idade: 6,
}
const pai = {
    nome: 'Higor',
    idade: 31,
}


function calculaIdade(anos) {
    anos = 10;
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calculaIdade.call(pai));

// usando apply na manipulação do this
const filho = {
    nome: 'Samuel',
    idade: 6,
}
const pai = {
    nome: 'Higor',
    idade: 31,
}

function calculaIdade(anos) {

    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calculaIdade.apply(filho,[20]));