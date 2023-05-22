const first_card= document.getElementById("first-card");
const second_card= document.getElementById("second-card");
const hidden_content = document.querySelector(".hidden-content")
const top_layer = document.querySelector(".top-layer")
const first_shell = document.getElementById("first-shell")
const second_shell= document.getElementById("second-shell")
const third_shell = document.getElementById("third-shell")

// =======================first card event listener==========================


first_card.addEventListener("click",()=>{


    first_shell.childNodes[0].addEventListener("click",()=>{
        // first_card.removeAttribute("change-first-card")
setTimeout(()=>{
    first_shell.classList.remove("zoom-to-full", "cancel-zoom-to-full")

    second_shell.classList.remove("do-not-display")
    third_shell.classList.remove("do-not-display")
    top_layer.classList.remove("tiny-fade", "do-not-display")


    first_shell.childNodes[0].removeEventListener("click")
    
},1000)
       
first_shell.classList.add("cancel-zoom-to-full")

    })


        // first_card.setAttribute("change-first-card",true);


        first_shell.classList.add("zoom-to-full")



        second_shell.classList.add("do-not-display")
        third_shell.classList.add("do-not-display")
        top_layer.classList.add("tiny-fade")
        setTimeout(()=>{
        top_layer.classList.add("do-not-display")
        }, 1000)
}
)



//===============================second card event listener=================================


second_card.addEventListener("click",(e)=>{



second_shell.childNodes[0].addEventListener("click",()=>{

    // second_card.removeAttribute("change-first-card")

    setTimeout(()=>{
        second_shell.classList.remove("zoom-to-full","cancel-zoom-to-full")

        
        first_shell.classList.remove("do-not-display")
        third_shell.classList.remove("do-not-display")
        top_layer.classList.remove("do-not-display","tiny-fade");
        
    
        second_shell.childNodes[0].removeEventListener("click")
    },1000)


    second_shell.classList.add("cancel-zoom-to-full")
    
})


    // second_card.setAttribute("change-first-card",true);


    second_shell.classList.add("zoom-to-full")
    
    
    
    first_shell.classList.add("do-not-display")
    third_shell.classList.add("do-not-display")
    top_layer.classList.add("tiny-fade")
        setTimeout(()=>{
            top_layer.classList.add("do-not-display")
        }, 1000)
    })






