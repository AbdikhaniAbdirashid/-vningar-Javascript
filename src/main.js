 

 const emailInput = document.getElementById("email")
 const nameInput = document.getElementById("name")
 const submit = document.getElementById("button") 



 submit.onclick = function SubmitForm() {
    event.preventDefault(); 
    console.log("test")

    const name = nameInput.value.trim() 
    const email = emailInput.value.trim()


    if(/\d/.test(name) || name == "")  {
        alert("must not contain numbers, and cant be empty")
    } else if (!email.includes("@") || email == "" ||!email.includes(".") ) {
        alert("please use # or . in your input")
    } else { 

    const container = document.createElement("div")

    const p = document.createElement("p") 

    p.textContent = "ditt förmulär ät skickat" 

    container.appendChild(p)

    document.body.appendChild(container) 
    nameInput.value = ""
     emailInput.value = ""
    }  
     

 }  


