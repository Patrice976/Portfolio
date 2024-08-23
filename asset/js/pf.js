// variable première section 

let imgMe = document.getElementById('me')
let body = document.querySelector('body')
let header = document.querySelector('header')
let blue = false
let passion = document.querySelector('.passions')

//variable troisième section 
//Objet stack/text 
const StackToText = {
    'img_js' : 'txt_js',
    'img_python' : 'txt_python'
}

imgSec3= document.querySelector('.stack_img img')

console.log(document)
// première section : changement de theme au survol de l'image 

imgMe.addEventListener('mouseover', ()=>{
    if(blue === false) { 
            imgMe.style.opacity = 0 ;
            setTimeout(()=> {
                imgMe.src = 'asset/img/artbreeder-director-2024-07-27T19_54_34.427Z.png' ;
                imgMe.style.opacity = 1 ;
            
            },300)
        document.documentElement.style.setProperty('--main-color', '#324873');
        document.documentElement.style.setProperty('--lightest-color', '#9973BF');
        document.documentElement.style.setProperty('--secondary-light-color', '#1E2640');
        document.documentElement.style.setProperty('--secondary-dark-color', 'white');
        blue = true 
    }
    else {
        imgMe.style.opacity = 0 ;
        setTimeout(()=> {
            imgMe.src = "asset/img/artbreeder-director-2024-07-30T17_33_41.824Z.png"
            imgMe.style.opacity = 1 ;

        },300)
        document.documentElement.style.setProperty('--main-color', '#8C4303');
        document.documentElement.style.setProperty('--lightest-color', '#f2bf5e');
        document.documentElement.style.setProperty('--secondary-light-color', '#D97F11');
        document.documentElement.style.setProperty('--secondary-dark-color', '#40261D');
        blue = false
    }})
//troisième section : Quand on appuie sur un des boutons, le contenu de ce dernier s'afficher 

//Créer un objet qui lie mes boutons et mes éléments d'affichage 

let buttonMaStack = document.getElementById('stack')
let displayStack = document.querySelector('.ma_stack')
let buttonOutils = document.getElementById('outils')
let displayOutils = document.querySelector('.mes_outils')
let buttonSkills = document.getElementById('skills')
let displaySkills = document.querySelector('.mes_skills')

console.log(displayStack)
console.log(displayOutils)
console.log(displaySkills)

buttonMaStack.addEventListener ('click', ()=>{
    displayStack.classList.remove('hide')
    displayOutils.classList.add('hide')
    displaySkills.classList.add('hide')
}
)

buttonOutils.addEventListener ('click', ()=>{
    displayStack.classList.add('hide')
    displayOutils.classList.remove('hide')
    displaySkills.classList.add('hide')
}
)

buttonSkills.addEventListener ('click', ()=>{
    displayStack.classList.add('hide')
    displayOutils.classList.add('hide')
    displaySkills.classList.remove('hide')
}
)




// troisième section : au clique sur l'image de la stack afficher le texte qui lui correspond 

const ImgToText = {
    'img_js' : 'txt_js',
    'img_python' : 'txt_python'
}
let stack_txt = document.querySelectorAll(".stack_txt span")
let stack_img = document.querySelectorAll(".stack_img img")


for (let index = 0; index < stack_img.length; index++) { //On parcours l'enssemble des image clicable
    const interactible_img = stack_img[index];
    interactible_img.addEventListener ('click',function() { //On attache au image clicable un event listener 
        for (let i = 0; i < stack_txt.length; i++) { // Boucle pour cacher tout les éléments texte lié aux images 
            const txtForImg = stack_txt[i];
            txtForImg.classList.add('hide')
        }
        let imgID= this.getAttribute('id') //récupération de l'ID lié à l'image cliqué 
        let txt = ImgToText[imgID] // récupéré l'id du txt correspondant à l'img 

        let TargetTxt = document.getElementById(txt) // on selectionne l'élément grace à l'id récupérer dans l'objet ImgToText
        console.log(imgID)
        TargetTxt.classList.remove('hide') // aficher le texte

    })}


