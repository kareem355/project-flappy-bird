const hole = document.getElementById("hole");
const bird = document.getElementById("bird");
const obelisk = document.getElementById("obelisk");

let score = 0;
hole.addEventListener("animationiteration", ()=>{
    let random = Math.random() * (500 - 100);
    hole.style.top = random + 'px';
    score++;
});
setInterval(function(){
    let birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top"));
    if(!isJumping){
    bird.style.top = birdTop + 3 +"px";
    }
    let obeliskLeft = parseInt(getComputedStyle(obelisk).getPropertyValue("left"));
    let holeTop = parseInt(getComputedStyle(hole).getPropertyValue("top"));
    if(birdTop > 470 || (obeliskLeft < 30 && (birdTop > holeTop + 100 || birdTop < holeTop))){
        alert(`Game over your score: ${score}`);
        bird.style.top = 50 + 'px';
        /*obelisk.style.top = "100%";
        hole.style.top = "100%";*/

        score = 0;
    }
    
}, 10);

let isJumping = false;
document.addEventListener('click', ()=>{
    isJumping = true;
    let jumpTimer = 0;
    let jumpInterval = setInterval(function(){
        jumpTimer++;
        let birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top")); 
        if(birdTop > 0 && jumpTimer < 15){
            bird.style.top = birdTop - 10 + 'px';
        }
        if(jumpTimer > 25){
            clearInterval(jumpInterval)
            isJumping = false;
            jumpTimer = 0;
        }
    }, 10)
});