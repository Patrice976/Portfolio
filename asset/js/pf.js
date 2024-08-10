
let imgMe = document.getElementById('me')
let body = document.querySelector('body')
let header = document.querySelector('header')
let blue = false
let passion = document.querySelector('.passions')

imgMe.addEventListener('mouseover', ()=>{
console.log('hi')
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


    // else {
   
                
    //     },400)
    //     body.classList.remove('yellowTheme')
    //     body.classList.add('blueTheme')
    //     header.classList.remove('headery')
    //     header.classList.add('headerb')
        
       

    //     blue = true
        
    // }
    // console.log(blue)



