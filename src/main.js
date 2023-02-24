let aside = document.querySelector("aside");
let closeBtn = document.querySelector(".close__btn");
let menu = document.querySelector(".btn__menu");
closeBtn.addEventListener("click",()=> {
    aside.style.display="none"
})
menu.addEventListener("click", ()=> {
    aside.style.display="block"
})
// the dark themes
let dark = document.querySelector(".theme__toggler .dark")
let light = document.querySelector(".theme__toggler .light")
dark.addEventListener("click", ()=>{
    document.body.classList.remove("light__theme__variables")
    document.body.classList.add("dark__theme__variables");
});
light.addEventListener("click", ()=>{
    document.body.classList.remove("dark__theme__variables")
    document.body.classList.add("light__theme__variables");
});

