let chamada = somarRanked(19, 44);
console.log(chamada);

function somarRanked(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivelDoHeroi;

  if (vitorias < 10) nivelDoHeroi = "Ferro";
  else if (vitorias >= 11 && vitorias <= 20) nivelDoHeroi = "Bronze";
  else if (vitorias >= 21 && vitorias <= 50) nivelDoHeroi = "Prata";
  else if (vitorias >= 51 && vitorias <= 80) nivelDoHeroi = "Ouro";
  else if (vitorias >= 81 && vitorias <= 90) nivelDoHeroi = "Diamante";
  else if (vitorias >= 91 && vitorias <= 100) nivelDoHeroi = "Lendário";
  else nivelDoHeroi = "Imortal";

  return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivelDoHeroi}`;
}
