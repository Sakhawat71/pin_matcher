//Math.round(Math.random()*10000)


function getPin(){
    const rendom = Math.random()*10000;
    const pin = (rendom + '').split('.')[0];
    if(pin.length === 4){
        return pin;   
    }
    else{
        return getPin();
    }
};

function genaretPin(){
    const getInput = document.getElementById('pinInput');
    getInput.value = getPin();
}

const button = document.getElementById('all-digit');
button.addEventListener('click', function(event){
    const digit = event.target.innerText;

    if(isNaN(digit)){
        if(digit === 'C'){
            const inputDigit = document.getElementById('digitInput');
            inputDigit.value = '';
        }
        if(digit === '<'){
            const inputDigit = document.getElementById('digitInput');
            inputDigit.value = inputDigit.value - digit;
        }
    }
    else{
        const inputDigit = document.getElementById('digitInput');
        inputDigit.value = inputDigit.value + digit;
    }
});

function comparePin(){
    const genPin = document.getElementById('pinInput').value;
    const typePin = document.getElementById('digitInput').value;

    if(genPin === typePin){
        notifyDisplay('block','none');
    }
    else{
        notifyDisplay('none','block');
    }
};

function notifyDisplay(correctStutas, incorrectStutas){
    const correct = document.getElementById('pin-match');
    correct.style.display = correctStutas;

    const incorrect = document.getElementById('didnt-match');
    incorrect.style.display = incorrectStutas;
};

// const correct = document.getElementById('pin-match');
// correct.style.display = 'block';

// const incorrect = document.getElementById('didnt-match');
// incorrect.style.display = 'block';