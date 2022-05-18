function validate(){
    //event.preventDefault();
    //console.log("entered")
    let userid = document.getElementById("email").value
    let password = document.getElementById("password").value
    
    let user_records=new Array();
   user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
   if(user_records.some((v)=>{return v.email==userid && v.password==password}))
  {
    alert("Logged in successfully!");
  }
  else
{
  alert('Login Failed!');
}

}
