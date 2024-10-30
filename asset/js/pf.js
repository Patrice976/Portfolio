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
                imgMe.style.marginLeft = "20%"




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
            imgMe.style.marginLeft = "15%"


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
let buttonCV = document.getElementById('CV')
let displayCV = document.querySelector('.CV')
let clickMe = {transform : ["translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(0px)"]}

let logoStack = document.querySelector(".ma_stack .stack_img")
let logoOutils = document.querySelector(".mes_outils .stack_img")
let logoSkills = document.querySelector(".mes_skills .stack_img")

console.log(buttonCV)
function playanimation(cible,animation,temps) {
    cible.animate(animation,temps)
}

buttonMaStack.addEventListener ('click', ()=>{
    console.log('stackCLIC')
    displayStack.classList.remove('hide')
    displayOutils.classList.add('hide')
    displaySkills.classList.add('hide')
    displayStack.scrollIntoView({behavior: "smooth", block: "center"})
    playanimation(logoStack,clickMe,600)
}
)

buttonOutils.addEventListener ('click', ()=>{
    console.log('outilCLIC')
    displayStack.classList.add('hide')
    displayOutils.classList.remove('hide')
    displaySkills.classList.add('hide')
    displayOutils.scrollIntoView({behavior: "smooth", block: "center"})
    playanimation(logoOutils,clickMe,600)

}
)

buttonSkills.addEventListener ('click', ()=>{
    console.log('skillsCLIC')
    displayStack.classList.add('hide')
    displayOutils.classList.add('hide')
    displaySkills.classList.remove('hide')
    displaySkills.scrollIntoView({behavior: "smooth", block: "center"})
    playanimation(logoSkills,clickMe,600)

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
    'creativity_logo' : 'txt_creativity',
    'sociability_logo' : 'txt_sociability',
    'empathy_logo' : 'txt_empathy'

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
        TargetTxt.scrollIntoView({behavior: "smooth", block :"nearest"}) //Faire en sorte que la fin du texte soit visible sur l'écrant utilisateur



    })}



//section 4 : Faire apparaitre du contenu au clic

idProjets = ['Mythe_au_logis','superhero_api','mokey_adventure','portfolio','Dicosaurus','cozyNetwork']

let forge = [ //banque image pour l'animaion 
    'asset/img/animation marteau/Forge.png',
    'asset/img/animation marteau/forge2.png',
    'asset/img/animation marteau/forge3.png',
    'asset/img/animation marteau/forge4.png',
    'asset/img/animation marteau/forge5.png',
    'asset/img/animation marteau/forge6.png',
    'asset/img/animation marteau/Group 7.png',
    'asset/img/animation marteau/Group 8.png',
    'asset/img/animation marteau/Group 8.png',
    'asset/img/animation marteau/Group 7.png',
    'asset/img/animation marteau/forge6.png',
    'asset/img/animation marteau/forge5.png',
    'asset/img/animation marteau/forge4.png',
    'asset/img/animation marteau/forge3.png',
    'asset/img/animation marteau/forge2.png',
    'asset/img/animation marteau/Forge.png'
]

function hideButton(Cible) { //cache toutes les div projets
    for (let index = 0; index < Cible.length; index++) {
        let projetdiv = document.querySelector('#'+Cible[index]+' .project_name') //selectionne la div enfant du projet sélectionné
        let background = document.querySelector('#'+Cible[index]+' .bg_projet')
        let forgeAnimation = document.querySelector('#'+Cible[index]+' .project_name .work_in_progress')
        console.log('#'+Cible[index]+' .project_name .work_in_progress')
        projetdiv.style.display = "none" //désactive la div
        projetdiv.style.opacity = '0' //setup la transition sur l'opacité
        background.style.opacity ='1'
        
    }
}

function showButton(button) {
    let animation;
    for (let index = 0; index < button.length; index++) {
        let div = document.getElementById(button[index]);
        let projetdiv = document.querySelector('#'+button[index]+' .project_name')
        let background = document.querySelector('#'+button[index]+' .bg_projet')
        let forgeAnimation = document.querySelector('#'+button[index]+' .project_name .work_in_progress img')
        
        div.addEventListener('mouseover', () => {
            console.log('ok')
            hideButton(button)
            projetdiv.style.display = 'flex'
            projetdiv.style.opacity = '1'
            background.style.opacity = '0.02'
            forgeAnimation.style.display = 'flex'
            console.log(projetdiv.style.display)
            let forgeindex =0
            animation = setInterval (() => { //animation forge en cours
            forgeAnimation.src = forge[forgeindex];
            console.log(forgeAnimation)
            forgeindex = (forgeindex + 1) % forge.length;
        },60)

        })
        div.addEventListener('mouseout', () => {
            hideButton(button)
            clearInterval(animation)

        })


    }
}





hideButton(idProjets)
showButton(idProjets)







