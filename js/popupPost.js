let closeButton = document.querySelector('.close-container').cloneNode(true) ;

num = 0;
let chickCreatePosts = setInterval(() => {
    openPost() ;
    num++ ;
    if (num >= 100) {
        clearInterval(chickCreatePosts) ;
    } ;
}, 100);


function openPost () {
    let posts = document.querySelectorAll('.post-title') ;
    let close = document.createElement('div') ;
    
    posts.forEach((el) => {
                el.addEventListener('click', () => {
                    close.innerHTML = 'Close' ;
                    close.classList.add('close-post');
                    el.parentElement.classList.add('post-popup') ;
                    el.parentElement.children[4].classList.remove('demo-content') ;
                    el.parentElement.children[5].classList.add('post-contnet') ;
                  
                    if (el.parentElement.children['0'].classList.contains('close-post')) {
                    } else {
                        el.parentElement.prepend(close) ;
                    } ;
                })
            }) ;
            
            function closePost (el) {
                el.addEventListener('click', () => {
                el.parentElement.classList.remove('post-popup') ;
                el.parentElement.children[5].classList.add('demo-content') ;
                el.parentElement.children[5].classList.remove('post-contnet') ;
                el.remove() ;
                }) ;
            } ;
            closePost(close) ;
    } ;
    



