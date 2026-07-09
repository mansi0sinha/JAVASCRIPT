let currentDisplay = '';
function processInput(currentEle) {
    currentDisplay += currentEle;
    document.querySelector('#display').value = currentDisplay;
}
function clearDisplay() {
    currentDisplay = '';
    document.querySelector('#display').value = currentDisplay;
}
function result() {
    let result_value = eval(currentDisplay)
    document.querySelector('#display').value = result_value;
}