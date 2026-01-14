const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* ⭐ Create floating stars everywhere */
const starsContainer = document.getElementById("stars");

for (let i = 0; i < 40; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.innerText = "✨";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = (5 + Math.random() * 10) + "s";
    star.style.fontSize = (12 + Math.random() * 20) + "px";
    starsContainer.appendChild(star);
}

/* 🎆 Confetti */
let confetti = [];
let active = false;

function startCelebration() {
    confetti = [];
    active = true;

    for (let i = 0; i < 300; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 6 + 3,
            speed: Math.random() * 5 + 2,
            color: `hsl(${Math.random() * 360},100%,50%)`
        });
    }
    animate();
}

function animate() {
    if (!active) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        p.y += p.speed;
        if (p.y > canvas.height) p.y = -10;
    });

    requestAnimationFrame(animate);
}

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
