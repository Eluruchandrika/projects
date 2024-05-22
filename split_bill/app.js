
function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');

    let result = (amount.value / persons.value).toFixed(0);
    let resultDiv = document.getElementById('result')
    resultDiv.innerText = result+"rupees each"
}