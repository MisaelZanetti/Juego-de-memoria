let red;
let green;
let blue;
let yellow;
let colores;
let indice = 0;
let intervalo;
let secuencia = [];
let secuencia_usuario = [];
let largo = 9;
let NumeroRandom;
let verificacion = true;
let largo_verificacion = largo;
let botonIniciar;
let puntaje = 4;
let Sound1;
let Sound2;
let Sound3;
let Sound4;
let start;
let velocidad;
let secuencia_funcionando = true;
let delay2 = 0;
let spriteactivo = false;
let dice = '...';

function preload() {
    simon_dice = loadImage('simon_dice.png')
    button_start = loadImage('button_start.png');
    Sound1 = loadSound('Sound1.mp3');
    Sound2 = loadSound('Sound2.mp3');
    Sound3 = loadSound('Sound3.mp3');
    Sound4 = loadSound('Sound4.mp3');
    start = loadSound('Start.mp3');
}

function setup() {
    createCanvas(windowWidth - 22, windowHeight - 22);
    botonIniciar = createImg('button_start.png', 'Imagen de Start');
    botonIniciar.position(windowWidth / 2 - 57, 610);
    botonIniciar.mousePressed(iniciarSecuencia);
    botonReiniciar = createImg('reset.png', 'Imagen Reset');
    botonReiniciar.position(4, windowHeight - 105);
    botonReiniciar.size(100, 100);
    botonReiniciar.mousePressed(() => { location.reload(); });
    slider = createSlider(600, 1700, 1200);
    slider.position(windowWidth - 150, windowHeight - 60);
    slider.size(100);
    red = createSprite(windowWidth / 2 + 125, windowHeight / 2 - 125, 250, 250);
    red.shapeColor = color(168, 0, 0);
    red.onMousePressed = function () {
        if (!secuencia_funcionando && !spriteactivo) {
            spriteactivo = true;
            red.shapeColor = color(255, 0, 0);
            secuencia_usuario.push(2);
            console.log(secuencia_usuario);
            Sound2.play();
            setTimeout(apagar_colores, 700);
        }
    };
    red.onMouseReleased = function () {
        if (!secuencia_funcionando) {
            spriteactivo = false;
            red.shapeColor = color(168, 0, 0);
        }
    };

    green = createSprite(windowWidth / 2 - 125, windowHeight / 2 - 125, 250, 250);
    green.shapeColor = color(0, 144, 2);
    green.onMousePressed = function () {
        if (!secuencia_funcionando && !spriteactivo) {
            spriteactivo = true;
            green.shapeColor = color(55, 218, 29);
            secuencia_usuario.push(3);
            console.log(secuencia_usuario);
            Sound1.play();
            setTimeout(apagar_colores, 700);
        }
    };
    green.onMouseReleased = function () {
        if (!secuencia_funcionando) {
            spriteactivo = false;
            green.shapeColor = color(0, 144, 2);
        }
    };

    blue = createSprite(windowWidth / 2 + 125, windowHeight / 2 + 125, 250, 250);
    blue.shapeColor = color(0, 7, 120);
    blue.onMousePressed = function () {
        if (!secuencia_funcionando && !spriteactivo) {
            spriteactivo = true;
            blue.shapeColor = color(0, 15, 255);
            secuencia_usuario.push(0);
            console.log(secuencia_usuario);
            Sound4.play();
            setTimeout(apagar_colores, 700);
        }
    };
    blue.onMouseReleased = function () {
        if (!secuencia_funcionando) {
            spriteactivo = false;
            blue.shapeColor = color(0, 7, 120);
        }
    };

    yellow = createSprite(windowWidth / 2 - 125, windowHeight / 2 + 125, 250, 250);
    yellow.shapeColor = color(143, 150, 0);
    yellow.onMousePressed = function () {
        if (!secuencia_funcionando && !spriteactivo) {
            spriteactivo = true;
            yellow.shapeColor = color(255, 255, 0);
            secuencia_usuario.push(1);
            console.log(secuencia_usuario);
            Sound3.play();
            setTimeout(apagar_colores, 700);
        }
    };
    yellow.onMouseReleased = function () {
        if (!secuencia_funcionando) {
            spriteactivo = false;
            yellow.shapeColor = color(136, 147, 0);
        }
    };

    colores = [red, green, blue, yellow];
}

function draw() {
    background(0);
    drawSprites();
    image(simon_dice, windowWidth / 2 - 250, windowHeight / 2 - 250);
    fill(0);
    rect(windowWidth / 2 - 40, windowHeight / 2 + 27, 42, 27);
    fill(255);
    textSize(30);
    textAlign(CENTER, TOP);
    text(`${puntaje}`, windowWidth / 2 - 20, windowHeight / 2 + 27);
    textSize(95);
    textAlign(LEFT);
    text(`PUPI DICE${dice}`, 10, 10);
    velocidad = slider.value();
    textSize(35);
    vel_seg = slider.value() * 0.001;
    let redondeado = Math.round(vel_seg * 2) / 2;
    text(`Espera: ${redondeado}`, windowWidth - 220, windowHeight - 110);
    if (largo_verificacion === 9) {
        fill(color('yellow'))
        rect(15, 95, 350, 105);
        fill(0)
        textSize(20);
        aviso =text('En el siguiente turno los colores del juego van a cambiar de lugar, asi que memorizate el orden de colores y no de lugares', 20, 100, 350);
    }
    console.log(secuencia);
}

function intercambiarPosiciones() {
    let posiciones = [
        { x: red.position.x, y: red.position.y },
        { x: green.position.x, y: green.position.y },
        { x: blue.position.x, y: blue.position.y },
        { x: yellow.position.x, y: yellow.position.y }
    ];

    red.position.set(posiciones[1].x, posiciones[1].y);
    green.position.set(posiciones[2].x, posiciones[2].y);
    blue.position.set(posiciones[3].x, posiciones[3].y);
    yellow.position.set(posiciones[0].x, posiciones[0].y);
}

function iniciarSecuencia() {
    if (largo_verificacion >= 10) {
        clear(aviso);
        intercambiarPosiciones();
    }
    secuencia_funcionando = true;
    start.play(0, 1, 1, 0, 1);
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
    }, 500);
}

function iluminarColor(secuencia) {
    secuencia.forEach((indice, i) => {
        let delay = 100 + i * velocidad;
        delay2 = delay + 1000;
        if (indice === 0) {
            setTimeout(() => iluminar(blue, color(0, 15, 255), color(0, 7, 120), Sound4), delay);
        } else if (indice === 1) {
            setTimeout(() => iluminar(yellow, color(255, 255, 0), color(143, 150, 0), Sound3), delay);
        } else if (indice === 2) {
            setTimeout(() => iluminar(red, color(255, 0, 0), color(168, 0, 0), Sound2), delay);
        } else if (indice === 3) {
            setTimeout(() => iluminar(green, color(55, 218, 29), color(0, 144, 2), Sound1), delay);
        }
    });
    setTimeout(apagar_colores, delay2);
    let tiempo_total = 100 + (secuencia.length - 1) * velocidad;
    setTimeout(() => { secuencia_funcionando = false; }, tiempo_total);
}

const iluminar = (sprite, colorEncendido, colorApagado, sonido) => {
    sprite.shapeColor = color(colorEncendido);
    setTimeout(() => apagarColor(sprite, color(colorApagado)), 500);
    sonido.play();
    if (sprite === red) {
        dice = ' ROJO'
    } else if (sprite === green) {
        dice = ' VERDE'
    } else if (sprite === blue) {
        dice = ' AZUL'
    } else if (sprite === yellow) {
        dice = ' AMARILLO'
    }
};

function apagar_colores() {
    yellow.shapeColor = color(136, 147, 0);
    blue.shapeColor = color(0, 7, 120);
    green.shapeColor = color(0, 144, 2);
    red.shapeColor = color(168, 0, 0);
    verificar_juego();
}

function apagarColor(sprite, colorApagado) {
    sprite.shapeColor = color(colorApagado);
    dice = '...';
}

function verificar_juego() {
    for (let i = 0; i < secuencia_usuario.length; i++) {
        if (secuencia_usuario[i] != secuencia[i]) {
            verificacion = false;
            alert("¡MAL! Reinicia la página para volver a jugar");
            break;
        }
    }
    if (secuencia_usuario.length === largo_verificacion && secuencia.length === largo_verificacion) {
        if (verificacion === true) {
            console.log("¡Bien hecho! 👌🏻");
            secuencia_usuario = [];
            largo = 0;
            largo_verificacion++;
            let color_nuevo = floor(random(0, 4));
            secuencia.push(color_nuevo);
            puntaje++;
            iniciarSecuencia();
        }
    }
}