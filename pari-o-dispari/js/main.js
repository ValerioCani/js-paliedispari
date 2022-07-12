const myNumber = prompt('inserisci un numero tra 1 e 5');
console.log(myNumber);
const choice = prompt('digita pari o dispari').toUpperCase();
//blocco aggressivo di controllo dei dati in ingresso
if(isNaN(myNumber)){
    alert('INSERISCI UN NUMERO IDIOTA!');
    
}else if(myNumber<1 || myNumber>5){
    alert('SAI LEGGERE? DEVI INSERIRE UN NUMERO TRA 1 E 5!');
    
}else if(choice!=='PARI' && choice!=='DISPARI'){
    alert('HAI SCRITTO MALE!');
  
};

const compNumber = RandomNumber(1, 5);
console.log(compNumber);

const sum = myNumber + compNumber;

if(oddEven(sum) == 'even'){
    if(choice == 'PARI'){
        alert('Complimenti Hai Vinto!');
    }else{
        alert('Mi dispaice Hai Perso');
    }
} else {
    if(choice == 'PARI'){
        alert('Mi dispaice Hai Perso');
    }else{
        alert('Complimenti Hai Vinto!');
    }
};


function RandomNumber(min, max){
if (typeof min == "number" && typeof max == "number") {
    return  Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
    }
};

function oddEven(number){
    if(number % 2 == 0){
        return 'even';
    }
    else{
        return 'odd';
    }
};

