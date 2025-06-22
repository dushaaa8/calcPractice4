document.addEventListener("DOMContentLoaded", function () {
    let calcDisplay = document.getElementById("result-text")
    const defBtns = document.querySelectorAll(".num")

    let expression =""
    defBtns.forEach(btn =>{
        btn.addEventListener("click",function () {
            expression += btn.innerText;
            updateCalcDisplay()

        })
    })

    function updateCalcDisplay(){
        let displayValue = expression.toString();

        if (displayValue.length > 10) {
            displayValue = displayValue.slice(0, 10);
        }

        calcDisplay.innerText = displayValue;
    }

    document.getElementById("clear").addEventListener("click", function (){
        expression = ""
        updateCalcDisplay()
    })
    document.getElementById("back").addEventListener("click", function (){
        expression = expression.slice(0, -1)
        updateCalcDisplay()
    })
    document.getElementById("result").addEventListener("click", function (){
        expression = eval(expression)
        updateCalcDisplay()
    })
    document.getElementById("sqr").addEventListener("click", function (){
        expression = eval(expression)
        expression = expression*expression
        updateCalcDisplay()
    })
    document.getElementById("sqrt").addEventListener("click", function (){
        expression = Math.sqrt(eval(expression))
        updateCalcDisplay()
    })
    document.getElementById("fact").addEventListener("click", function (){
        expression = 'factorial) xd'
        updateCalcDisplay()
    })
})
