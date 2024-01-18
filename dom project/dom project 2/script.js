let elem = document.querySelectorAll(".elem")
let cursr=document.querySelector("#cursr")
let main=document.querySelector("#main")
elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity=1
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0
    })
    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left=dets.x+"px"
        val.childNodes[3].style.top=dets.y+"px"
    })
})

main.addEventListener("mousemove",function(info){
    cursr.style.left=info.x+"px"
    cursr.style.top=info.y+"px"
})