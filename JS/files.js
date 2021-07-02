const height = document.getElementById("height");
const weight = document.getElementById("weight");
const calculate = document.getElementById("calculate");
const yourBMI = document.getElementById("yourBMI");

var a = document.getElementById("low");
var b = document.getElementById("good");
var c = document.getElementById("hight");
var d = document.getElementById("spHight");

calculate.addEventListener("click" , ()=>{
    //BMI = Body Mass Index
    //m = Mass Means Weight (KG)
    //h = Height (CM)
    //Formula = B = m/h²
    
    
    if(height.value != "" && weight.value != ""){
        let bmiValue = weight.value / (height.value * height.value) * 10000;
        yourBMI.innerHTML = `BMI của bạn là : <span> ${bmiValue.toFixed(2)} </span>`
        if(bmiValue < 18.5){
            a.style.display = 'block';
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'none';
        }else if(bmiValue < 25){
            a.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'none';
            b.style.display = 'block';
        }else if(bmiValue < 30){
            c.style.display = 'block';
            a.style.display = 'none';
            b.style.display = 'none';
            d.style.display = 'none';
        }else{
            d.style.display = 'block';
            a.style.display = 'none';
            c.style.display = 'none';
            b.style.display = 'none';
        }
    }
    else
        {
            yourBMI.innerHTML = `Please Enter Correct Value`;
        }
});
