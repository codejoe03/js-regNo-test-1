const userInput = document.getElementById('randomNumbers');

function checkNumberFieldLength() {
    if (userInput.value.length > 8) {
        userInput.value = userInput.value.slice(0, 8);
    }
}

// Checking the value input on submit
function alertSubmit() {
    let modal = document.getElementById('myModal');
    modal.style.display = "block";
    const userInput = document.getElementById('randomNumbers').value;
    let regNumRGEX = /\d{6}\-[MA]/;
    let regResult = regNumRGEX.test(userInput);
    let modalTxt = document.getElementById('resultTxt');
    // modalTxt.innerText = ""
    if (regResult) {
        modalTxt.innerText += 'True';
    } else {
        modalTxt.innerText += 'False';
    }
}


// - Add function on input field using 'oninput'.
// - Create function where we check that the user's input should not go more than 8 characters. If it exceeds, it will not let the user enter more characters

// Modal

let modal = document.getElementById('myModal');
let span = document.getElementsByClassName("close")[0];

// clickValue.onclick = function () {
//     modal.style.display = "block";
// }


span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
