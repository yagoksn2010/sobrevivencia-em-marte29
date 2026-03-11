let oxigenio = Number(prompt("insira a quamtidade de oxigênio restante (em litros):"));
let pessoas = Number(prompt("insira aquantidade de pessoas em marte:"));
const consumoDiario = 15; // litros por pessoa.

//consumo total é baseado na quantidade de pessoas multiplicado pelo consumo diário por pessoa.
let consumoTotalbase = pessoas * consumoDiario;
let diasRestantes = oxigenio / consumoTotalbase;

alert(`Relatório de marte: restam ${diasRestantes.toFixed(0)} dias de oxigênio !`);