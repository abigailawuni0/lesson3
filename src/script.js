let name = prompt("What is your name?")
alert(`Hello ${name}`)
let age = prompt("What is your age?")
alert(`You are ${age} years old`)
let email = prompt("What is your email?")
alert(`Your email is ${email}`)

if(age<=12)(
    else(alert(`Hi ${name}, you are ${age} years old and you are to young to register`))
)
else if(age<18 && age>12)(
    alert(`Hi ${name}, you are ${age} years old and you have limited options to register for.`)
)
else if(age<18)(
    alert(`Hi ${name}, you are ${age} years old and you can register for all the options.`)
)


