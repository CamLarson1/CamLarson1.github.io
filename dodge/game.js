    var player;
    var enemy;
    var isGameOver;

function preload() {
    var playerImage = loadImage("https://yt3.ggpht.com/a-/AK162_7sSLBxGCR2KSiRnmtSHj2L0frEeYdW_tmV9w=s900-mo-c-c0xffffffff-rj-k-no");
    var backgroundImage = loadImage("https://veteransdayblog.com/wp-content/uploads/2017/09/USA-Flag-1.jpg");
    var enemyImage = loadImage("https://inthesetimes.com/images/articles/trump_flicker_face_yess.jpg");
    }
   
    
    function setup() {
        isGameOver = false;
        createCanvas(500, 500);
        player = createSprite(width/2, height-(playerImage.height/2), 50, 50);
        player.addImage(playerImage);
        enemy = createSprite(width/2, 0, 0, 0);
        enemy.addImage(enemyImage);
        enemy.rotationSpeed = 4.0;
    }


    function draw() {
    /*    if (isGameOver) {
            gameOver();
            
        } else {
            if (enemy.overlap(player)) {
                isGameOver = true;
    }
    if (enemy.overlap(player)) {
        gameOver();
    }*/
    
    background(backroundImage);
   
    //if (keyDown(RIGHT_ARROW) && player.position.x < (width - (PlayerImage.width/2))) {
    /*    player.position.x += 2;
    }

    if (keyDown(LEFT_ARROW) && player.position.x > (PlayerImage.width/2)) {
        player.position.x -= 2;
    }*/

    ememy.position.y = enemy.position.y + 3;

    /*if (enemy.position.y > height) {
        enemy.position.y = 0;
        enemy.position.x = random(5, width-5);
}*/

    drawSprites();
}


    function gameOver() {
        background(0);
        textAlign(CENTER);
        fill("white");
        text("Game Over!", width/2, height/2);
        text("Click anywhere to try again", width/2, 3*height/4);
}


function mouseClicked() {
    if (isGameOver) {
        isGameOver = false;
        player.position.x = width/2;
        player.position.y = height-(playerImage.height/2);
        enemy.position.x = width/2;
        enemy.position.y = 0;
        }
    }



