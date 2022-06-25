let result=0

const num1 = parseFloat(prompt("Enter number 1: "))
if(isNaN(num1))
{
    alert("You have not entered a number.")
    location.reload()
}else
{
    const operator = prompt("Enter an operator: + or - or * or /")
    if((operator == '+') || (operator == '-') || (operator == '*') || (operator == '/')) 
    {
        const num2 = parseFloat(prompt("Enter number 2: "))
        if(isNaN(num2))
        {
            alert("You have not entered a number.")
            location.reload()
        }else
        {
            if(operator == '+')
            {
                result = num1 + num2   
                alert(num1 + ' ' + operator + ' ' + num2 + ' '+ '=' +' ' + result)
                location.reload()
            }
            if(operator == '-')
            {
                result = num1 - num2
                alert(num1 + ' ' + operator + ' ' + num2 + ' '+ '=' +' '+ result)
                location.reload()
            }
            if(operator == '*')
            {
                result = num1 * num2
                alert(num1 + ' ' + operator + ' ' + num2 +' '+ '=' +' '+ result)
                location.reload()
            }
            if(operator == '/')
            {
                result = num1 / num2
                alert(num1 + ' ' + operator + ' ' + num2 + ' '+ '=' +' ' + result)
                location.reload()
            }    
        }
    }else
    {
        alert("Invalid operator.")
        location.reload()
    }
}



