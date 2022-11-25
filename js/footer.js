let pageRight = document.querySelector('.page-right') ;
let footer = document.createElement('footer') ;
    footer.classList.add('main-footer') ;


let divFooterTop = document.createElement('div') ;
    divFooterTop.classList.add('footer-top') ;
    footer.appendChild(divFooterTop) ;

let divFollowsUs = document.createElement('div') ;
    divFollowsUs.classList.add('follows-us') ;
    divFooterTop.appendChild(divFollowsUs) ;

let headeingFollows = document.createElement('h3') ;
    headeingFollows.innerHTML = 'Follows Us' ;
    divFollowsUs.appendChild(headeingFollows) ;

let link_1 = document.createElement('a') ;
    link_1.innerHTML = 'Facebook' ;
    link_1.href = 'https://www.facebook.com/abdulrahmanroston' ;
    divFollowsUs.appendChild(link_1) ;

let link_2 = document.createElement('a') ;
    link_2.innerHTML = 'Linkedin' ;
    link_2.href = 'https://www.linkedin.com/in/abdulrahman-roston-a907641a1/' ;
    divFollowsUs.appendChild(link_2) ;

let link_3 = document.createElement('a') ;
    link_3.innerHTML = 'Facebook' ;
    link_3.href = 'https://www.youtube.com/@user-gn6ue1ei8s' ;
    divFollowsUs.appendChild(link_3) ;

let footerBottom = document.createElement('div') ;
    footerBottom.classList.add('footer-bottom') ;
    footerBottom.innerHTML = 'Copyright <span>2022</span> Abdulrahman Roston, All Right Reserved' ;
    footer.appendChild(footerBottom) ;


    pageRight.appendChild(footer)
    console.log(footer)
