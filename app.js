const number = document.getElementById('number');
const btn = document.getElementById('btn');

const randomNumber = Math.floor(Math.random()*6)+1;
console.log(randomNumber);
btn.addEventListener('click',function(e){
const userVal = parseInt (numberInput.value,10);
if (userVal === randomNumber){
    alert('You are Right');
return;
}
if (userVak > randomNumber){
    alert('smaller');
    return;
}
if (userVal < randomNumber){
    alert('larger');
    return
}

});