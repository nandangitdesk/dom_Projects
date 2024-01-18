let h5=document.querySelector("h5")
let btn=document.querySelector("button")

let value = 0;
btn.addEventListener("click",function(){

   if(value===0){
    h5.innerHTML="Friends"
    h5.style.color="green"
    btn.innerHTML="Remove Friend"
    value=1
   }else{
    h5.innerHTML="Stranger"
    h5.style.color="red"
    btn.innerHTML="Add Friend"
    value=0
   }



})
