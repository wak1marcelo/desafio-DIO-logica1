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

if (nivelDeExperiencia < 1000) {
  eloDoHeroi = 'Ferro'
} else if ((nivelDeExperiencia >= 1001) || (nivelDeExperiencia < 2000)) {
  eloDoHeroi = 'Bronze'
} else if ((nivelDeExperiencia >= 2001) || (nivelDeExperiencia < 5000)) {
  eloDoHeroi = 'Prata'
} else if ((nivelDeExperiencia >= 5001) || (nivelDeExperiencia < 7000)) {
  eloDoHeroi = 'Ouro'
} else if ((nivelDeExperiencia >= 7001) || (nivelDeExperiencia < 8000)) {
  eloDoHeroi = 'Platina'
} else if ((nivelDeExperiencia >= 8001) || (nivelDeExperiencia < 9000)) {
  eloDoHeroi = 'Ascendente'
} else if ((nivelDeExperiencia >= 9001) || (nivelDeExperiencia < 10000)) {
  eloDoHeroi = 'Imortal'
} else if (nivelDeExperiencia >= 10001) {
  eloDoHeroi = 'Radiante'
} else {
  console.log("Elo incorreto")
}
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + eloDoHeroi)