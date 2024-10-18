// 1. Variáveis e Operadores
// Solicite ao usuário dois números e armazene-os em variáveis.
// Some, subtraia, multiplique e divida esses dois números, e exiba cada um dos resultados.

function numeros(n1, n2) {
  const some = n1 + n2;
  const subtra = n1 - n2;
  const multiplicar = n1 * n2;
  const dividir = n1 / n2;
  console.log(`
        SOMA DE ${n1} é ${n2} = ${some}
        Subtração DE ${n1} é ${n2} = ${subtra}
        Multiplicação DE ${n1} é ${n2} = ${multiplicar}
        Divisão DE ${n1} é ${n2} = ${dividir.toFixed(2)}

`);
}
numeros(8, 3);

// 2. Condicionais (if/else)
// Crie um programa que pergunte a idade do usuário.
// Se a idade for maior ou igual a 18, exiba a mensagem: "Você é maior de idade".
// Caso contrário, exiba: "Você é menor de idade".
const idade = 18;
if (idade < 18) console.log("Você é menor de idade");
else console.log("Você é maior de idade");

// 3. Funções
// Crie uma função que receba dois números como parâmetros e retorne o maior dos dois.
// Depois, use essa função com diferentes pares de números para testar.

function maior(n1, n2) {
  if (n1 > n2) console.log(`O Numero maior é ${n1}`);
  if (n1 == n2) return console.log(`Os Numeros São Iguais: ${n1} é ${n2}`);
  else console.log(`O Numero maior é ${n2}`);
}
maior(3, 3);

// 4. Loops (for e while)
// Escreva um programa que utilize um loop for para exibir todos os números de 1 a 10.
// Depois, crie um loop while que continue pedindo ao usuário para inserir um número até que ele digite um número maior que 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 4. Loops (for e while)
// Escreva um programa que utilize um loop for para exibir todos os números de 1 a 10.
// Depois, crie um loop while que continue pedindo ao usuário para inserir um número até que ele digite um número maior que 10.

const n3 = 11;
while (n3 <= 10) {
  if (n3 <= 10) console.log("Digite um numero maior do que 10");
  break;
}

// 5. Funções e Loops Combinados
// Crie uma função que receba um número como parâmetro e retorne a soma de todos os números de 1 até o número passado como argumento.
// Utilize um loop para fazer a soma.

function soma2(numero) {
  for (let i = 1; i <= numero; i++) {
    console.log(`${i} x ${numero} = ${i * numero}`);

}
}

soma2(20); 
