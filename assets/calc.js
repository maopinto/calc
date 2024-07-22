function handleCalendatClick(key) {
    const inputValue = getInputExerciseValue();
    switch (key) {
        case "AC":
            clean();
            break;
        case "=":
            const value = eval(inputValue) 
            setResultContent(value)
            break;

        default:
          
            setInputExerciseValue(inputValue + key);
            break;
    }
}


//Return inputExercise
function getInputExercise() {
    return document.getElementById("inputExercise");
}

//
function getInputExerciseValue() {
    const input = getInputExercise()
    return input.value;
}


function setInputExerciseValue(value) {
    const input = getInputExercise()
    input.value = value
}

function getResultDiv() {
    return document.getElementById("result");
}

function setResultContent(content) {
    const div =  getResultDiv()
    div.innerHTML = content;
}

function clean() {
    const inputExercise = getInputExercise();
    inputExercise.value = "";
    const resultDiv = getResultDiv();
    resultDiv.innerHTML = "";
}