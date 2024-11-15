let vitoria = 32
let derrota = 9

function saldoRankeada(vitoria, derrota){
var saldo = vitoria - derrota;
console.log( "O saldo de viorias rankeadas é de: " + saldo);
return saldo;
}

let saldo = saldoRankeada(vitoria, derrota);

if (saldo < 10) {
ranked = "Ferro";
} else if (saldo >= 11 && saldo <= 20) {
ranked = "Bronze";
} else if (saldo >= 21 && saldo <= 50) {
ranked = "Prata";
} else if (saldo >= 51 && saldo <= 80) {
ranked = "Ouro";
} else if (saldo >= 81 && saldo <= 90) {
ranked = "Diamante";
} else if (saldo >= 91 && saldo <= 100) {
ranked = "Lendario";
} else if (saldo >= 101) {
ranked = "Imortal";
}

console.log("O nível rankeado é: " + ranked)