# js-paliedispari

Ciao ragazzi,
Esercizio di oggi:
nome repo: js-paliedispari
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:


ricerca palindroma:
1-chiedere una parola all'utente;
    1.1-prompt;
    1.2-mettere la parola in un array;

2-controllare che la parola sia palindroma:
    2.1-controllare se le lettere in posizione opposta partendo da quelle esterne sono uguali o diverse con un ciclo della durata massima della 
    approssimazione per difetto del numero delle lettere diviso due(nel caso le lettere siano dispari) es.(lettera in pos.0 con let in ultima pos.);
    2.3-se in almeno una coppia di lettere, le due risultano diverse fermare il ciclo;

3-restituire il risultato:
    3.1-stampare con alert;
