function tbh() {
    console.log("the creature")

    for (let i = 0; i < 100; i++) {
        confetti({
            particleCount: 10,
            spread: 70,
            origin: { y: 1.2 }
        });
        confetti({
            particleCount: 10,
            spread: 70,
            angle: 60,
            origin: { y: 0.7, x: 0 }
        });
        confetti({
            particleCount: 10,
            spread: 70,
            angle: 120,
            origin: { y: 0.7, x: 1 }
        });
   }
    
    let audio = document.getElementById("audio");
    audio.play();
}