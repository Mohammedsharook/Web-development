let id = (id)=>document.getElementById(id);

let classes = (classes)=>document.getElementsByClassName(classes);

let email = id("email"),
form = id("form"),
password = id("password"),
errorMessage = classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");

form.addEventListener('submit',(e)=>{
    e.preventDefault(); 
    logic(email,0,"email cannot be empty")  
    logic(password,1,"password cannot be empty")  
})


let logic = (id,index,message)=>{
    if (id.value.trim() === ''){
        errorMessage[index].innerHTML = message
        failureIcon[index].style.opacity = "1"
        successIcon[index].style.opacity = "0" 
    }else{
        errorMessage[index].innerHTML = '';
        failureIcon[index].style.opacity = "0"
        successIcon[index].style.opacity = "1"
    }
}

