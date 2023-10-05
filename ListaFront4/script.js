var notas = [9.0,5.0,8.0];
var media = (notas[0] + notas[1] + notas[2]) / 3;


if (media > 4 && media < 7){
    console.log("Você está na recuperação.");
    let notaRec = 9;
    let mediaFinal = (notaRec + media) / 2;
    if (mediaFinal >= 5){
        console.log("Parabéns! Você está aprovado.")
    } else{
        console.log("Que pena, você foi reprovado.")
    }
} else if(media >= 7){
    console.log("Eba! Você foi aprovado por média.")
    typeof media
}