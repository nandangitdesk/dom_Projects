let cont=document.querySelector("#container")

let like=document.querySelector("#frontlike")
 
let botlike=document.querySelector("#botlike")



cont.addEventListener("dblclick",function(){
    like.style.transform="translate(-50% ,-50%) scale(1)";
    like.style.opacity=0.8;

    botlike.style.color="red";
    botlike.style.opacity=1;
    

    setTimeout(function(){
        like.style.opacity=0},2000);    
 
 setTimeout(function(){
    like.style.transform="translate(-50% ,-50%) scale(0);"},2000);
 })
 


