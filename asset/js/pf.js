// variable première section 

let imgMe = document.getElementById('me')
let mediv = document.querySelector(".img_container")
let body = document.querySelector('body')
let header = document.querySelector('header')
let red = false
let passion = document.querySelector('.passions')


// première section : changement de theme au survol de l'image 

imgMe.addEventListener('mouseover', ()=>{
    if(red === false) { 
            imgMe.style.opacity = 0 ;
            setTimeout(()=> {
                imgMe.src = 'asset/img/selfr.jpeg' ;
                imgMe.alt = "Jeune métisse allongé dans des feuille d'automne, thème rouge. Sweat rouge avec capuche blanche, un pulle marron/noir et un collier"
                imgMe.style.opacity = 1 ;
                imgMe.style.height = '55%';
                mediv.style.marginLeft = '15em';
                
            
            },300)
            document.documentElement.style.setProperty('--main-color', '#400101');
            document.documentElement.style.setProperty('--lightest-color', '#F2A663');
            document.documentElement.style.setProperty('--secondary-light-color', '#8C1E14');
            document.documentElement.style.setProperty('--secondary-dark-color', '#261515');
            document.documentElement.style.setProperty('--darkest-color', '#BF2626');
            document.documentElement.style.setProperty('--police-color', '#F2ECE4');

        
        red = true 
    }
    else {
        imgMe.style.opacity = 0 ;
        setTimeout(()=> {
            imgMe.src = "asset/img/slefy.jpeg"
            imgMe.alt = "illustration jeune métisse sur fond jaune , cheuveux bouclé, lunette de soleil aux verres orangées , boucle d'oreils, tatouage sur le cou et sweat jaune "
            imgMe.style.opacity = 1 ;
            imgMe.style.height = '65%';
            mediv.style.marginLeft = '10em';

        },300)
        document.documentElement.style.setProperty('--main-color', '#8C4303');
        document.documentElement.style.setProperty('--lightest-color', '#f2bf5e');
        document.documentElement.style.setProperty('--secondary-light-color', '#D97F11');
        document.documentElement.style.setProperty('--secondary-dark-color', '#40261D');
        document.documentElement.style.setProperty('--darkest-color', '#0D0D0D');

        red = false
    }})


//troisième section : Quand on appuie sur un des boutons, le contenu de ce dernier s'afficher 


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




// troisième section : au clique sur l'image affiche le texte qui lui correspond 

const StackToText = {
    'img_js' : 'txt_js',
    'img_python' : 'txt_python'
}

imgSec3= document.querySelector('.stack_img img')

console.log(document)
const ImgToText = {
    //Partie Stack
    'img_js' : 'txt_js',
    'img_python' : 'txt_python',
    //Partie Outils
    'figma_logo' : 'txt_figma',
    'github_logo' : 'txt_github',
    'git_logo' : 'txt_git',
    'notion_logo' : 'txt_notion',
    'slack_logo' : 'txt_slack',
    'vscode_logo' : 'txt_vscode',
    //Parti SoftSkillz
    'teamwork_logo' : 'txt_teamwork',
    'creativity_logo' : 'txt_creativity'

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
        TargetTxt.classList.remove('hide')  // aficher le texte
        TargetTxt.scrollIntoView({behavior: "smooth", block :"nearest"})
        


    })}


