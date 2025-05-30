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

                




            },300)
            document.documentElement.style.setProperty('--main-color', '#400101');
            document.documentElement.style.setProperty('--lightest-color', '#F2A663');
            document.documentElement.style.setProperty('--secondary-light-color', '#8C1E14');
            document.documentElement.style.setProperty('--secondary-dark-color', '#261515');
            document.documentElement.style.setProperty('--darkest-color', '#BF2626');
            document.documentElement.style.setProperty('--police-color','#ffff');



        red = true
    }
    else {
        imgMe.style.opacity = 0 ;
        imgMe.style.height = '';
        imgMe.style.marginLeft = ""
        setTimeout(()=> {
            imgMe.src = "asset/img/slefy.jpeg"
            imgMe.alt = "illustration jeune métisse sur fond jaune , cheuveux bouclé, lunette de soleil aux verres orangées , boucle d'oreils, tatouage sur le cou et sweat jaune "
            imgMe.style.opacity = 1 ;
           
           



        },300)
        document.documentElement.style.setProperty('--main-color', '#ad5b13');
        document.documentElement.style.setProperty('--lightest-color', '#fadda7');
        document.documentElement.style.setProperty('--secondary-light-color', '#DC7E26');
        document.documentElement.style.setProperty('--secondary-dark-color', '#421E00');
        document.documentElement.style.setProperty('--darkest-color', '#0D0D0D');

        red = false
    }})

// deuxème section : logique d'affichage en cascade des éléments avec fondue (géré en css)

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
    else {
        entry.target.classList.remove('visible')
    }
  });
}, {
  threshold: 0.2 
});

reveals.forEach(reveal => {
  observer.observe(reveal);
});

// troisième section : Ajoute/retire la classe "tooltip-open" sur le bon élément

document.querySelectorAll('.competence_block').forEach(block => {
    block.addEventListener('click', (e) => {
      // Évite que le clic sur l’image ou l’intérieur de la stack_item déclenche deux fois
      if (!e.target.closest('.tooltip')) {
        block.classList.toggle('tooltip-open');
      }
    });
  });
  



//section 4 : Faire apparaitre du contenu au clic

idProjets = ['Mythe_au_logis','superhero_api','mokey_adventure','portfolio','Dicosaurus','cozyNetwork','Vente2Meuble','MainMaker']

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

function hideContent(div) { //cache toutes les div projets
    for (let index = 0; index < div.length; index++) {
        let projetdiv = document.querySelector('#'+div[index]+' .project_name') //selectionne la div enfant du projet sélectionné
        let background = document.querySelector('#'+div[index]+' .bg_projet')
        projetdiv.style.display = "none" //désactive la div
        projetdiv.style.opacity = '0' //setup la transition sur l'opacité
        background.style.opacity ='1'
        
    }
}

function showContent(content) {
    let animation;
    for (let index = 0; index < content.length; index++) {
        let div = document.getElementById(content[index]);
        let projetName = document.querySelector('#'+content[index]+' .project_name')
        let background = document.querySelector('#'+content[index]+' .bg_projet')
        let forgeAnimation = document.querySelector('#'+content[index]+' .project_name .work_in_progress img')
        
        div.addEventListener('mouseover', () => {
            hideContent(content)
            projetName.style.display = 'flex'
            projetName.style.opacity = '1'
            background.style.opacity = '0.02'
            forgeAnimation.style.display = 'flex'
            console.log(projetName.style.display)
            let forgeindex =0
            animation = setInterval (() => { //animation forge en cours
            forgeAnimation.src = forge[forgeindex];
            forgeindex = (forgeindex + 1) % forge.length;
        },60)

        })
        div.addEventListener('mouseout', () => {
            hideContent(content)
            clearInterval(animation)

        })


    }
}







hideContent(idProjets)
showContent(idProjets)








