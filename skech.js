var daar, zaar;

function preload() {
    car = loadImage("img/AakaManPng.png");
    buld = loadImage("img/buld.png");
    grass = loadImage("Image/grass.png");
    kang = loadImage("img/Snake.png");
    road = loadImage("image/ground.png");
    sky = loadImage("img/sky.png");
    whe = loadImage("img/whe.png");
    so1 = loadSound("sound/CS.wav");
    tree1 = loadImage("Image/Tree1.png");
    tree2 = loadImage("Image/Tree2.png");
    house = loadImage("Image/House.png");
    mount = loadImage("Image/Mountain.png");
    monk = loadImage("Image/Monkey.png");
    UFO = loadImage("Image/ufo.png");
    jaa = loadImage("img/jadoo.png");
    ant = loadImage("Image/yant.png");
    bark = loadImage("img/Kandog.png");
}

function setup() {
    createCanvas(2000, 840);

    man = createSprite(100, 100);
    man.scale = 1.5;
    man.addImage(sky);
    // man.velocityX = -10
    edge = createEdgeSprites();

    Mount = createSprite(1000, 390);
    Mount.addImage(mount);
    Mount.scale = 1.5;

    caar = createSprite(1000, 350);
    caar.addImage(road);
    // caar.scale = 0.7;

    monkey = createSprite(1300, 265);
    monkey.addImage(monk);
    monkey.scale = 0.18;

    tree = createSprite(1300, 270);
    tree.addImage(tree1);
    tree.scale = 0.45;

    saap = createSprite(1080, 465);
    saap.addImage(kang);
    saap.scale = 0.2;

    bush = createSprite(930, 482);
    bush.addImage(grass);
    bush.scale = 0.02;

    bush = createSprite(955, 475);
    bush.addImage(grass);
    bush.scale = 0.03;

    bush = createSprite(1000, 470);
    bush.addImage(grass);
    bush.scale = 0.035;

    bush = createSprite(1000, 472);
    bush.addImage(grass);
    bush.scale = 0.035;

    bush = createSprite(1040, 474);
    bush.addImage(grass);
    bush.scale = 0.035;

    bush = createSprite(1080, 476);
    bush.addImage(grass);
    bush.scale = 0.035;

    bush = createSprite(1120, 478);
    bush.addImage(grass);
    bush.scale = 0.035;

    bush = createSprite(1160, 482);
    bush.addImage(grass);
    bush.scale = 0.035;

    bush = createSprite(1200, 484);
    bush.addImage(grass);
    bush.scale = 0.035;

    bush = createSprite(1240, 486);
    bush.addImage(grass);
    bush.scale = 0.035;

    bush = createSprite(1280, 488);
    bush.addImage(grass);
    bush.scale = 0.035;

    bush = createSprite(1320, 490);
    bush.addImage(grass);
    bush.scale = 0.035;

    bush = createSprite(1360, 492);
    bush.addImage(grass);
    bush.scale = 0.035;

    bush = createSprite(1399, 498);
    bush.addImage(grass);
    bush.scale = 0.03;

    bush = createSprite(1425, 509);
    bush.addImage(grass);
    bush.scale = 0.02;

    aakash = createSprite(405, 325);
    aakash.addImage(car);
    aakash.scale = 0.5;

    ghaar = createSprite(400, 311);
    ghaar.addImage(house);
    ghaar.scale = 0.5;

    jadoo = createSprite(1900, 50);
    jadoo.scale = 0.4;
    jadoo.addImage(jaa);

    ufo = createSprite(1900, 50);
    ufo.addImage(UFO);
    ufo.scale = 0.27;

    Ant = createSprite(380, 230);
    Ant.addImage(ant);
    Ant.scale = 0.25;

    dog = createSprite(700, 500);
    dog.addImage(bark);
    dog.scale = 0.3;
}

function draw() {
    background("black");
    drawSprites();

    if (keyDown("d")) {
        aakash.x = aakash.x + 7;
    }
    if (keyDown("a")) {
        aakash.x = aakash.x - 7;
    }
    if (keyDown("s")) {
        aakash.y = aakash.y + 7;
    }
    if (keyDown("w")) {
        aakash.y = aakash.y - 7;
    }
    if (keyDown("f")) {
        saap.x = saap.x - 7;
    }

    if (keyDown("t")) {
        saap.y = saap.y - 7;
    }

    if (keyDown("g")) {
        saap.y = saap.y + 7;
    }
    if (keyDown("h")) {
        saap.x = saap.x + 7;
    }

    if (keyDown("j")) {
        monkey.x = monkey.x - 7;
    }
    if (keyDown("k")) {
        monkey.y = monkey.y + 7;
    }
    if (keyDown("i")) {
        monkey.y = monkey.y - 7;
    }
    if (keyDown("l")) {
        monkey.x = monkey.x + 7;
    }

    if (keyDown("1")) {
        ufo.x = ufo.x - 7;
        jadoo.x = jadoo.x - 7;
    }
    if (keyDown("2")) {
        ufo.y = ufo.y + 7;
        jadoo.y = jadoo.y + 7;
    }
    if (keyDown("3")) {
        ufo.y = ufo.y - 7;
        jadoo.y = jadoo.y - 7;
    }
    if (keyDown("4")) {
        ufo.x = ufo.x + 7;
        jadoo.x = jadoo.x + 7;
    }

    if (keyDown("5")) {
        jadoo.x = jadoo.x - 7;
    }
    if (keyDown("6")) {
        jadoo.y = jadoo.y + 7;
    }
    if (keyDown("7")) {
        jadoo.y = jadoo.y - 7;
    }
    if (keyDown("8")) {
        jadoo.x = jadoo.x + 7;
    }

    if (keyDown("z")) {
        Ant.x = Ant.x - 7;
    }
    if (keyDown("x")) {
        Ant.y = Ant.y + 7;
    }
    if (keyDown("c")) {
        Ant.y = Ant.y - 7;
    }
    if (keyDown("v")) {
        Ant.x = Ant.x + 7;
    }

    if (keyDown("b")) {
        dog.x = dog.x - 7;
    }
    if (keyDown("n")) {
        dog.y = dog.y + 7;
    }
    if (keyDown("m")) {
        dog.y = dog.y - 7;
    }
    if (keyDown("shift")) {
        dog.x = dog.x + 7;
    }
}