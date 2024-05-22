let counter = 0;
let counterResult = document.getElementById('counterResult');
function increment(){
    counter = counter+1;
    counterResult.innerText = counter
}
function decrement(){
    if(counter > 0){
        counter = counter-1;
        counterResult.innerText = counter
    }
    
}
