const inputs = document.querySelectorAll(".angle-input")
const isTriangleBtn = document.querySelector("#is-triangle-btn")
const outputBox =document.querySelector("#output-box")

function calculateSumOfAngles(angle1,angle2,angle3){
    const sumOfAngles= angle1+ angle2+ angle3
    return sumOfAngles
}

function isTriangle(){
   const sumOfAngles= calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
   if(sumOfAngles===180){
    outputBox.innerText="Bingo!! These angles form a triangle"
   }
   else{
    outputBox.innerText="Oh no !! These angles do not form a triangle"
   }
    
}

isTriangleBtn.addEventListener("click",isTriangle)