// let titlePageCategorie = document.querySelector('title') ;

// let linkePopulate = 'http://localhost:1337/api/articles/?populate=*' ;

// fetch(linkePopulate)
// .then((response) => {
//     window.localStorage.setItem('status', response.status) ;
//     return response.json(); // or .text() or .blob() ...
// })
// .then((text) => {
//   // text is the response body
//   getData(text) ;     
// })
// .catch((e) => {
//   // error in e.message
//   console.log(e) ;
// });


// function getData(text)  {
    
//     for (i in text.data) {
//         let categoryName = text.data[i].attributes.category.data.attributes.name ;

//         if (categoryName === titlePageCategorie.innerHTML) {
            
//             let post = {
//                 postAttributes: text.data[i] ,
//                 postId: text.data[i].id ,
//                 postTitle: text.data[i].attributes.title ,
//                 postContent: text.data[i].attributes.content ,
//                 postLanguage: text.data[i].attributes.language ,
//                 postLiks: text.data[i].attributes.like ,
//                 postViews: text.data[i].attributes.views ,
//                 postedBy: text.data[i].attributes.postedBy ,
//                 postedDate: text.data[i].attributes.date ,
//                 postcategory: text.data[i].attributes.category.data.attributes.name ,
//                 postImageUrl: text.data[i].attributes.image.data.attributes.url ,
//             }

//             //  
//             createPost
//             (
//             post.postAttributes,
//             post.postId,
//             post.postTitle,
//             post.postContent,
//             post.postLanguage,
//             post.postLiks,
//             post.postViews,
//             post.postcategory,
//             post.postImageUrl,
//             post.postedBy,
//             post.postedDate,
//             ) ;
//             buttunLike() ;
//         }

//     }

// }


// function createPost (postAttributes, postId, postTitle, postContent, postLanguage, postLiks, postViews, postcategory, postImageUrl, postedBy, postedDate ) {
//     let recent_articles = document.querySelector('.recent-articles .content') ;

//     let divPost = document.createElement('div') ;
//         divPost.classList.add('post') ;
//         divPost.setAttribute('data-id', postId) ;
//     let divImage = document.createElement('div') ;
//         divImage.classList.add('image') ;
//         divPost.appendChild(divImage) ;
//     let elImg = document.createElement('img') ;
//         elImg.src = `http://localhost:1337${postImageUrl}` ;
//         divImage.appendChild(elImg) ;
//     let mainDivLikes = document.createElement('div') ;
//         mainDivLikes.classList.add('likes') ;
//         divImage.appendChild(mainDivLikes) ;
//     let divLikesCount = document.createElement('div') ;
//         divLikesCount.classList.add('count-likes') ;
//         divLikesCount.innerHTML = postLiks ;
//         mainDivLikes.appendChild(divLikesCount) ;
//     let mainDivCountViews = document.createElement('div') ;
//         mainDivCountViews.classList.add('views') ;
//         divPost.appendChild(mainDivCountViews) ;
//     let divCountViews = document.createElement('div') ;
//         divCountViews.classList.add('count-views') ;
//         divCountViews.innerHTML = postViews ;
//         sendNumber(postViews++, 'views' , postId) ;
//         mainDivCountViews.appendChild(divCountViews)
//     let aCategoryLink = document.createElement('a') ;
//         aCategoryLink.href = '#' ;
//         aCategoryLink.classList.add('category-name') ;
//         aCategoryLink.setAttribute('data-language', 'en') ;
//         aCategoryLink.innerHTML = postcategory ;
//         divPost.appendChild(aCategoryLink) ;
//     let aPostTitle = document.createElement('a') ;
//         aPostTitle.classList.add('post-title') ;
//         aPostTitle.innerHTML = postTitle ;
//         aPostTitle.setAttribute('data-language', 'ar')
//         divPost.appendChild(aPostTitle) ;
//     let postDemoContent = document.createElement('p')
//         postDemoContent.classList.add('demo-content') ;
//         postDemoContent.classList.add('contnet') ;
//         postDemoContent.innerHTML = postContent ;
//         postDemoContent.setAttribute('data-language', 'ar')
//         divPost.appendChild(postDemoContent) ;  
//     let divPostInfo = document.createElement('div') ;
//         divPostInfo.classList.add('post-info') ;
//         divPostInfo.setAttribute('data-language', 'en') ;
//         divPost.appendChild(divPostInfo) ;
//     let divPostedBy = document.createElement('div') ;
//         divPostedBy.classList.add('create-by') ;
//         divPostedBy.innerHTML = postedBy ;
//         divPostInfo.appendChild(divPostedBy) ;
//     let divPostDate = document.createElement('div') ;
//         divPostDate.classList.add('date') ;
//         divPostDate.innerHTML = postedDate ;
//         divPostInfo.appendChild(divPostDate) ;

//         recent_articles.appendChild(divPost) ;
// } ;




// function sendNumber (number, name, targetId) {
//     const headers = new Headers();
//     headers.append('content-type', 'application/json');
//     headers.append('authorization', 'Bearer');

//     const body = `{
//     "data": {
//         "${name}": ${++number}
//     }
//     }`;

//     const init = {
//     method: 'PUT',
//     headers,
//     body
//     };

//     fetch(`http://localhost:1337/api/articles/${targetId}`, init)
//     .then((response) => {
//     return response.json(); // or .text() or .blob() ...
//     })
//     .then((text) => {
//     // text is the response body
//     })
//     .catch((e) => {
//     // error in e.message
//     });
// }




// function buttunLike () {
//     let countLikes = document.querySelectorAll('.likes') ;

//     countLikes.forEach((el) => {
//         el.addEventListener('click', () => {
//             let elmentCountLike = el.children[0].innerHTML ;
//             let targetId = el.parentElement.parentElement.getAttribute('data-id') ;
//             sendNumber(+el.children[0].innerHTML, 'like', targetId) ;
//             el.children[0].innerHTML++ ;
//         }) ;
// })
// }

// function sendNumber (number, name, targetId) {
//     const headers = new Headers();
//     headers.append('content-type', 'application/json');
//     headers.append('authorization', 'Bearer');

//     const body = `{
//     "data": {
//         "${name}": ${++number}
//     }
//     }`;

//     const init = {
//     method: 'PUT',
//     headers,
//     body
//     };

//     fetch(`http://localhost:1337/api/articles/${targetId}`, init)
//     .then((response) => {
//     return response.json(); // or .text() or .blob() ...
//     })
//     .then((text) => {
//     // text is the response body
//     })
//     .catch((e) => {
//     // error in e.message
//     });
// }
