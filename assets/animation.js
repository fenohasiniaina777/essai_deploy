const images =[
    "assets/images/images.jpeg",
    "assets/images/images2.jpeg",
    "assets/images/music_blog_16.png"
];
let index = 0 ;
const hero = document.querySelector(".hero");

setInterval(() => {
index++;

if(index >= images.length) {
    index= 0;
}

hero.style.backgroundImage = `url(${images[index]})`;
}, 3000);

