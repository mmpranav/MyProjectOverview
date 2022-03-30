console.log("Login-Form");
//var username=document.getElementById("username");
var username=document.querySelector("#username");
var password=document.getElementById("password");
var button=document.querySelector("#submit");
function alertme(message, errtype){
    var toastLiveExample = document.getElementById('liveToast')
    var messagebox =document.querySelector(".toast-body")
    var errortype =document.querySelector(".me-auto")
    messagebox.innerText=message;
    errortype.innerText = errtype;
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
}

/*var div=document.querySelector("#demo");
div.innerText = "Login Form";
console.log(div);*/



console.log(button);
button.addEventListener("click",function(e){
    
    e.preventDefault();



/*
1.username is required
2.password is required
3.password length should be minimum 8 character

Alert:login successfully
*/

if(username.value){
    console.log(username.value)
}
else
{
    alertme("Username is required","Error");
    //alert("user name is required")
    return;
}
if(password.value)
{
    if((password.value).length<8)
{
    alertme("minimum 8 character","Error");
    //alert("minimum 8 character")
    return;
}
else
{
    console.log(password.value)   
}}
else
{
    alertme("password is required","Error");
    //alert("password is required")
    
}


})