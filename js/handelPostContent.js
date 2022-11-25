

// function handelPostContent () {
//     let content = document.querySelectorAll('p.contnet') ;
//     if (content.length > 0) {
//         return true ;
//     } else {
//         return false ;
//     }
// } ;



// let checkOpenPost = setInterval(() => {
//     if (handelPostContent()) {
//         clearInterval(checkOpenPost) ;
//         handelContent() ;
//     }
// }, 200);


// function handelContent () {
//     let content = document.querySelectorAll('p.contnet') ;
//     content.forEach((el) => {
//         let contentArray = el.innerHTML.split(' ') ;
        

//         for (let i = 0; i < contentArray.length; i++) {
//             if (contentArray[i] == ',' || contentArray[i] == '،' || contentArray[i] == '.') {
//                 contentArray[i] += '<br><br>' ;
//             }
//         }
        
//         el.innerHTML = contentArray.join(' ') ;
//         })
// } ;