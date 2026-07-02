const images =[
    "assets/images/man-composer-producer-arranger-songwriter-musician-hands-arranging-music_169016-26743.avif",
    "assets/images/images.jpeg",
    "assets/images/music_blog_16.png",
    "https://writethroughthenight.com/wp-content/uploads/2022/02/piano_composer.png"
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



// animation .hero h1
const title = document.querySelector(".hero h1");

let scale = 1;
let opacity = 1;
let growing = true;

function animate() {
    if (growing) {
        scale += 0.004;
        opacity -= 0.01;
    } else {
        scale -= 0.004;
        opacity += 0.01;
    }
    if (scale >= 1.2) growing = false;
    if (scale <= 1) growing = true;

    title.style.transform = `scale(${scale})`;
    title.style.opacity = opacity;

    requestAnimationFrame(animate);

}
animate();