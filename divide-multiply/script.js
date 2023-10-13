var num1;
var num2;
var valExist;

function setNumbers() {
    num1 = Number(document.querySelector(`.firstNumber`).value);
    num2 = Number(document.querySelector(`.secondNumber`).value);
    console.log(num1, num2);
    if (!num1 || !num2) {

        alert(`please fill both values`);
        valExist = false;

    } else {

        valExist = true;

    }
}


document.querySelector(`.btn--mult`).addEventListener(`click`, function () {

    setNumbers();
    if (valExist)
        document.querySelector(".result")
            .textContent = num1 * num2;
});

document.querySelector(`.btn--dvd`).addEventListener(`click`, function () {
    setNumbers();
    if (valExist)
        document.querySelector(".result")
            .textContent = num1 / num2;
});



