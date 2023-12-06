// 1.Generare un numero random da 1 a 6 per il giocatore
// 2.Generare un numero random da 1 a 6 per il giocatore
// 3.Se il punteggio del giocatore è maggiore nel punteggio del computer allora ha vinto il giocatore
// 4.Se il punteggio del giocatore è uguale nel punteggio del computer allora il punteggio è pari
// 5.Se il punteggio del giocatore è minore nel punteggio del computer allora ha vinto il computer

//scrittura della variabile
let giocatore = document.getElementById('umano');
giocatore.addEventListener('click', function () {
    //calcolo random del punteggio giocatore
    let punteggioUmano = Math.floor(Math.random() * 6) + 1;
    alert(' hai realizzato ' + punteggioUmano + ' punti');
    //calcolo random del punteggio computer
    let punteggioComputer = Math.floor(Math.random() * 6) + 1;
    alert('Il computer ha fatto' + punteggioComputer + 'punti');
    //condizione
    if (punteggioUmano > punteggioComputer) {
        alert('YOU WIN!');
    } else if (punteggioUmano == punteggioComputer) {
        alert('PAREGGIO');
    } else {
        alert('LOSE');
    }
});
