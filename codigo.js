let red;
let green;
let blue;
let yellow;
let colores;
let indice = 0;
let intervalo;
let secuencia = [];
let secuencia_usuario = [];
let largo = 4;
let NumeroRandom;
let verificacion = true;
let largo_verificacion = largo;
let botonIniciar;
let puntaje = 4;
let fondo;
let Sound1;
let Sound2;
let Sound3;
let Sound4;
let start;

function preload() {
    fondo = loadImage('background.png');
    Sound1 = loadSound('Sound1.mp3');
    Sound2 = loadSound('Sound2.mp3');
    Sound3 = loadSound('Sound3.mp3');
    Sound4 = loadSound('Sound4.mp3');
    start = loadSound('Start.mp3');
}

function setup() {
    createCanvas(windowWidth - 22, windowHeight - 22);
    Sound1.setVolume(200)
    Sound2.setVolume(200)
    Sound3.setVolume(200)
    Sound4.setVolume(200)
    red = createSprite(windowWidth / 2 - 125, windowHeight / 2 + 125, 250, 250);
    red.shapeColor = color(168, 0, 0);
    red.onMousePressed = function () {
        red.shapeColor = color(255, 0, 0);
        secuencia_usuario.push(2);
        console.log(secuencia_usuario);
        Sound2.play();
        verificarSecuencia();
    };
    red.onMouseReleased = function () {
        red.shapeColor = color(168, 0, 0);
    };
    
    green = createSprite(windowWidth / 2 + 125, windowHeight / 2 + 125, 250, 250);
    green.shapeColor = color(0, 144, 2);
    green.onMousePressed = function () {
        green.shapeColor = color(55, 218, 29);
        secuencia_usuario.push(3);
        console.log(secuencia_usuario);
        Sound1.play();
        verificarSecuencia();
    };
    green.onMouseReleased = function () {
        green.shapeColor = color(0, 144, 2);
    };
    
    blue = createSprite(windowWidth / 2 - 125, windowHeight / 2 - 125, 250, 250);
    blue.shapeColor = color(0, 7, 120);
    blue.onMousePressed = function () {
        blue.shapeColor = color(0, 15, 255);
        secuencia_usuario.push(0);
        console.log(secuencia_usuario);
        Sound4.play();
        verificarSecuencia();
    };
    blue.onMouseReleased = function () {
        blue.shapeColor = color(0, 7, 120);
    };
    
    yellow = createSprite(windowWidth / 2 + 125, windowHeight / 2 - 125, 250, 250);
    yellow.shapeColor = color(143, 150, 0);
    yellow.onMousePressed = function () {
        yellow.shapeColor = color(255, 255, 0);
        secuencia_usuario.push(1);
        console.log(secuencia_usuario);
        Sound3.play();
        verificarSecuencia();
    };
    yellow.onMouseReleased = function () {
        yellow.shapeColor = color(136, 147, 0);
    };
    
    colores = [red, green, blue, yellow];
    botonIniciar = createButton('Iniciar Juego');
    botonIniciar.position(windowWidth / 2 - 40, windowHeight - 50);
    botonIniciar.mousePressed(iniciarSecuencia);
}

function draw() {
    background(fondo);
    drawSprites();
    fill(255);
    textSize(35);
    text(`Puntaje: ${puntaje}`, windowWidth / 3 + 3, 100);
}

function iniciarSecuencia() {
    start.setVolume(500)
    start.play(0,1,1,0,1);
    indice = 0;
    intervalo = setInterval(() => {
        if (indice < largo) {
            NumeroRandom = floor(random(0, 4));
            secuencia.push(NumeroRandom);
            indice++;
        } else {
            clearInterval(intervalo);
            iluminarColor(secuencia);
        }
    }, 1000);
}

function iluminarColor(secuencia) {
    for (let i = 0; i < secuencia.length; i++) {
        let sprite = secuencia[i];
        if (sprite === 2) {
            let time_red = 100 + i * 1200;
            setTimeout(() => ilumina_red(), time_red);
        } else if (sprite === 3) {
            let time_green = 100 + i * 1200;
            setTimeout(() => ilumina_green(), time_green);
        } else if (sprite === 0) {
            let time_blue = 100 + i * 1200;
            setTimeout(() => ilumina_blue(), time_blue);
        } else if (sprite === 1) {
            let time_yellow = 100 + i * 1200;
            setTimeout(() => ilumina_yellow(), time_yellow);
        }
    }
    console.log(secuencia);
}

function ilumina_red() {
    red.shapeColor = color(255, 0, 0);
    setTimeout(() => apagarColor(red, color(168, 0, 0)), 900);
    Sound2.play();
}

function ilumina_green() {
    green.shapeColor = color(55, 218, 29);
    setTimeout(() => apagarColor(green, color(0, 144, 2)), 900);
    Sound1.play();
}

function ilumina_blue() {
    blue.shapeColor = color(0, 15, 255);
    setTimeout(() => apagarColor(blue, color(0, 7, 120)), 900);
    Sound4.play();
}

function ilumina_yellow() {
    yellow.shapeColor = color(255, 255, 0);
    setTimeout(() => apagarColor(yellow, color(143, 150, 0)), 900);
    Sound3.play();
}

function apagarColor(sprite, colorApagado) {
    sprite.shapeColor = color(colorApagado);
}

function verificarSecuencia() {
    if (secuencia_usuario.length === largo_verificacion && secuencia.length === largo_verificacion) {
        for (let i = 0; i < secuencia.length; i++) {
            if (secuencia[i] !== secuencia_usuario[i]) {
                verificacion = false;
                alert(`¡MAL! Reinicia la página para volver a jugar`);
                return;
            }
        }
        if (verificacion === true) {
            console.log("¡Bien hecho! 👌🏻");
            secuencia_usuario = [];
            largo = 0;
            largo_verificacion++;
            let color_nuevo = floor(random(0, 4));
            secuencia.push(color_nuevo);
            puntaje ++;
            iniciarSecuencia();
        }
    }
}