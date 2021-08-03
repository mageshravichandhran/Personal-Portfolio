const btnAbout=document.querySelector(".btnAbout")
const btnPortfolio=document.querySelector(".btnPortfolio")
const btnSkills=document.querySelector(".btnSkills")
const btnContact=document.querySelector(".btnContact")
const btnBottom=document.querySelector(".bottom--btn")
const overview=document.querySelector("#overview--nav")
const intro=document.querySelector("#intro--nav")
const Portfolio=document.querySelector("#project--nav")
const skills=document.querySelector("#skill--nav")
const contact=document.querySelector("#contact--nav")

btnAbout.addEventListener("click",function(e){
    e.preventDefault()
    intro.scrollIntoView({behavior:"smooth"})
})


btnPortfolio.addEventListener("click",function(e){
    e.preventDefault()
    Portfolio.scrollIntoView({behavior:"smooth"})
})


btnSkills.addEventListener("click",function(e){
    e.preventDefault()
    skills.scrollIntoView({behavior:"smooth"})
})



btnContact.addEventListener("click",function(e){
    e.preventDefault()
    contact.scrollIntoView({behavior:"smooth"})
})

btnBottom.addEventListener("click",function(e){
    e.preventDefault()
    overview.scrollIntoView({behavior:"smooth"})
})


