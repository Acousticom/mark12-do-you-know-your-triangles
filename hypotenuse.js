const sideInputs = document.querySelectorAll("#side-input")
const hypotenuseButton = document.querySelector("#hypotenuse-btn")
const outputBox = document.querySelector("#output-box")



function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b
    return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares= calculateSumOfSquares(Number(sideInputs[0].value),Number(sideInputs[1].value))
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares)
    
    outputBox.innerText = (`Length of hypotenuse is: ${lengthOfHypotenuse}`);
}

hypotenuseButton.addEventListener("click",calculateHypotenuse)