const button = document.getElementById("openBtn");

const container = document.querySelector(".container");

const birthday = document.getElementById("birthdayPage");

button.onclick = ()=>{

    const music = document.getElementById("bgMusic");
music.play();

    container.style.opacity="0";

    container.style.transform="scale(.8)";

    container.style.transition=".6s";

    setTimeout(()=>{

        container.style.display="none";

        birthday.classList.add("show");

    },600);

}
const memoryPage = document.getElementById("memoryPage");
const nextBtn = document.getElementById("nextBtn");

nextBtn.onclick = () => {

    birthday.classList.remove("show");

    setTimeout(() => {

        birthday.style.display = "none";

        memoryPage.classList.add("show");

    }, 800);

}
const nextMemory = document.getElementById("nextMemory");
const letterPage = document.getElementById("letterPage");

nextMemory.onclick = () => {

    memoryPage.classList.remove("show");

    setTimeout(() => {

        memoryPage.style.display = "none";

        letterPage.classList.add("show");

    }, 600);
const homeBtn = document.getElementById("homeBtn");

homeBtn.onclick = () => {

    location.reload();

}
}
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

musicBtn.onclick = ()=>{

    music.muted = !music.muted;

    musicBtn.innerHTML = music.muted ? "🔇" : "🔊";

}