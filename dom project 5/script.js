
const prg = document.querySelector(".progress");
const h4 = document.querySelector("h4")


let count = 0;
 const int = setInterval(function()  {
    if (count === 100) {
        clearInterval(int)
        h4.style.opacity=1;
    }

    count++;
    prg.style.width = count + '%' ;
    
},50);