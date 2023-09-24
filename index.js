let statusHeroi = ["Grok", 0]
let rank = ""
let notificacao = ("O Herói de nome " + statusHeroi[0] + " está no nível de " )


if (statusHeroi[1] <= 1000) {
    rank = "Ferro"
    console.log(notificacao + rank)
}else if((statusHeroi[1] > 1000) && (statusHeroi[1] <= 2000)) {
    rank = "Bronze"
    console.log(notificacao + rank)
}else if((statusHeroi[1] > 2000) && (statusHeroi[1] <= 5000)) {
    rank = "Prata"
    console.log(notificacao + rank)
} else if((statusHeroi[1] > 5000) && (statusHeroi[1] <= 7000)) {
    rank = "Ouro"
    console.log(notificacao + rank)
} else if((statusHeroi[1] > 7000) && (statusHeroi[1] <= 8000)) {
    rank = "Platina"
    console.log(notificacao + rank)
} else if((statusHeroi[1] > 8000) && (statusHeroi[1] <= 9000)) {
    rank = "Ascendente"
    console.log(notificacao + rank)
} else if((statusHeroi[1] > 9000) && (statusHeroi[1] <= 10000)) {
    rank = "Imortal"
    console.log(notificacao + rank)
}else {
    rank = "Radiante"
    console.log(notificacao + rank)
}



