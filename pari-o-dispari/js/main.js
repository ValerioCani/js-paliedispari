const myNumber = prompt('inserisci un numero tra 1 e 5');

//blocco aggressivo di controllo dei dati in ingresso
if(isNaN(myNumber)){
    alert('INSERISCI UN NUMERO IDIOTA!');

}else if(myNumber<1 || myNumber>5){
    alert('SAI LEGGERE? DEVI INSERIRE UN NUMERO TRA 1 E 5!');

}else{
    const choice = prompt('digita pari o dispari').toUpperCase();

    if(choice!=='PARI' && choice!=='DISPARI'){
    alert('HAI SCRITTO MALE!');
    }
}

const 

    

