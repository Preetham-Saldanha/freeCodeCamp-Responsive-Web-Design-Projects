const first_card= document.getElementById("first-card");
const second_card= document.getElementById("second-card");
const hidden_content = document.querySelector(".hidden-content")
const top_layer = document.querySelector(".top-layer")
const first_shell = document.getElementById("first-shell")
const second_shell= document.getElementById("second-shell")
const third_shell = document.getElementById("third-shell")

first_card.addEventListener("click",()=>{

first_card.setAttribute("change-first-card",true);


first_shell.classList.add("zoom-to-full")



second_shell.classList.add("do-not-display")
third_shell.classList.add("do-not-display")
top_layer.classList.add("tiny-fade")
    setTimeout(()=>{
        top_layer.classList.add("do-not-display")
    }, 1000)
}
)




second_card.addEventListener("click",(e)=>{

console.log(second_shell.childNodes)

second_shell.childNodes[0].addEventListener("click",()=>{
    console.log("lets see")
    second_shell.classList.remove("zoom-to-full")
    top_layer.classList.remove("do-not-display","tiny-fade");

})

console.log("fired second listener")
    second_shell.setAttribute("change-first-card",true);


    second_shell.classList.add("zoom-to-full")
    
    
    
    first_shell.classList.add("do-not-display")
    third_shell.classList.add("do-not-display")
    top_layer.classList.add("tiny-fade")
        setTimeout(()=>{
            top_layer.classList.add("do-not-display")
        }, 1000)
    }

)






