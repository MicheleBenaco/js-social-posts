const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
    const conteinerPage = document.getElementById('container');

// Funzione che disegna i post 

function DrawCard(){
    posts.forEach((value,index) => {
        const conteinerPost = document.createElement('div');
    conteinerPost.classList.add('post');
    conteinerPost.innerHTML = `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${value.author.image}" alt="${value.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${value.author.name}</div>
                        <div class="post-meta__time">${value.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${value.content}</div>
            <div class="post__image">
                <img src="${value.media}" alt="${value.author.name}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${value.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `;
    conteinerPage.appendChild(conteinerPost);
        
    });
    
}


DrawCard();

// funzione che cambia il coloro al like 
const buttonLikes = document.querySelectorAll('.like-button');
buttonLikes.forEach(oneBtnLike => {
    oneBtnLike.addEventListener('click', ()=> {
        oneBtnLike.classList.toggle('like-button--liked');
        likeAdd();
    }) 
});

// incremento like 

function likeAdd(){
    const likeCounter = document.querySelectorAll('.js-likes-counter');
    console.log(likeCounter)
    likeCounter.forEach(oneLike => {
    console.log(parseInt(oneLike))


    
})
}



















