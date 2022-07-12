const parola = prompt('inserisci una parola');
const myArray = parola.split("");
console.log(myArray);

const cyclenNmber = Math.floor(myArray.length / 2);
console.log(cyclenNmber);

let found=false;

for( let i=0; i<cyclenNmber; i++){
    if(myArray[i] !== myArray[myArray.length - 1 - i]){
        found=false;
    }else{
        found=true;
    }
    console.log(i);
};

if(found==true){
    alert('la parola è palindroma');
}else{
    alert('la parola non è palindroma'); 
};