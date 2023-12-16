let nomeDoHeroi = "Marcelo"
let nivelDeExperiencia = 650
let eloDoHeroi

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 6.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

switch (true) {
  case nivelDeExperiencia < 1000:
    eloDoHeroi = 'Ferro';
    break;
  case nivelDeExperiencia >= 1000 && nivelDeExperiencia < 2000:
    eloDoHeroi = 'Bronze';
    break;
  case nivelDeExperiencia >= 2000 && nivelDeExperiencia < 5000:
    eloDoHeroi = 'Prata';
    break;
  case nivelDeExperiencia >= 5000 && nivelDeExperiencia < 7000:
    eloDoHeroi = 'Ouro';
    break;
  case nivelDeExperiencia >= 7000 && nivelDeExperiencia < 8000:
    eloDoHeroi = 'Platina';
    break;
  case nivelDeExperiencia >= 8000 && nivelDeExperiencia < 9000:
    eloDoHeroi = 'Ascendente';
    break;
  case nivelDeExperiencia >= 9000 && nivelDeExperiencia < 10000:
    eloDoHeroi = 'Imortal';
    break;
  case nivelDeExperiencia >= 10000:
    eloDoHeroi = 'Radiante';
    break;
  default:
    console.log("Elo incorreto");
}

if (eloDoHeroi) {
  console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + eloDoHeroi);
}