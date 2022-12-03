const sideInputs = document.querySelectorAll("#side-input")
const calculateButton = document.querySelector("#calculate-button")
const outputBox = document.querySelector("#output-box")


function calculateArea(a,b){
    const area = 1/2*(a*b)
    return area;
}
function calculateAreaOfTriangle(){
   const areaOfTriangle =  calculateArea(Number(sideInputs[0].value), Number(sideInputs[1].value));
    outputBox.innerText = `Area of triangle: ${areaOfTriangle}`
}
calculateButton.addEventListener("click",calculateAreaOfTriangle)