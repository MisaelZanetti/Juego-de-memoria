const palabras = [
    "amor", "amistad", "cielo", "familia", "felicidad", "esperanza", "luz", "mar", "montana", "tierra",
    "agua", "fuego", "aire", "sol", "luna", "estrella", "nube", "rio", "bosque", "flor",
    "fruta", "hoja", "arbol", "nieve", "lluvia", "viento", "trueno", "tormenta", "noche", "dia",
    "musica", "arte", "pintura", "cancion", "poesia", "historia", "libro", "pelicula", "teatro", "danza",
    "fuerza", "valentia", "paz", "guerra", "silencio", "ruido", "alegria", "tristeza", "risa", "llanto",
    "viaje", "aventura", "camino", "puente", "montana", "valle", "ciudad", "pueblo", "castillo", "palacio",
    "puerta", "ventana", "pared", "casa", "edificio", "escuela", "universidad", "hospital", "tienda", "mercado",
    "trabajo", "oficina", "dinero", "coche", "bicicleta", "moto", "tren", "avion", "barco", "puerto",
    "jardin", "parque", "plaza", "playa", "desierto", "selva", "isla", "volcan", "cueva", "acantilado",
    "amor", "pasion", "respeto", "tolerancia", "gratitud", "inspiracion", "creatividad", "imaginacion", "descubrimiento", "innovacion",
    "comida", "bebida", "fruta", "verdura", "carne", "pescado", "pollo", "pan", "arroz", "pasta",
    "queso", "leche", "huevo", "aceite", "azucar", "sal", "pimienta", "ajo", "cebolla", "tomate",
    "manzana", "platano", "naranja", "uva", "pera", "durazno", "melocoton", "fresa", "cereza", "mora",
    "sandia", "melon", "pina", "coco", "limon", "mango", "guayaba", "papaya", "kiwi", "frambuesa",
    "almendra", "nuez", "avellana", "cacahuete", "pistacho", "castana", "especias", "vainilla", "canela", "jengibre",
    "chocolate", "miel", "caramelo", "dulce", "pastel", "tarta", "helado", "galleta", "flan", "bizcocho",
    "empanada", "pizza", "hamburguesa", "bocadillo", "sopa", "ensalada", "pasta", "lasagna", "tortilla", "sushi",
    "noche", "dia", "tarde", "amanecer", "atardecer", "mediodia", "oscuro", "luz", "claridad", "sombras",
    "paisaje", "montanas", "mar", "rio", "bosque", "desierto", "pradera", "playa", "selva", "volcan",
    "campo", "colina", "valle", "laguna", "lago", "cascada", "acantilado", "glaciar", "cueva", "pantano",
    "oceano", "golfo", "bahia", "fiordo", "peninsula", "isla", "archipielago", "continente", "planeta", "estrella",
    "galaxia", "universo", "sol", "luna", "cometa", "meteorito", "asteroide", "saturno", "jupiter", "venus",
    "mercurio", "neptuno", "urano", "tierra", "marte", "cosmos", "constelacion", "nebula", "orbita", "eclipse",
    "animal", "perro", "gato", "tigre", "leon", "elefante", "jirafa", "cebra", "oso", "panda",
    "lobo", "zorro", "conejo", "ardilla", "ciervo", "reno", "camello", "cabra", "oveja", "vaca",
    "cerdo", "gallina", "pollo", "pato", "cisne", "aguila", "halcon", "buho", "lechuza", "colibri",
    "pajaro", "flamenco", "pinguino", "pelicano", "ballena", "delfin", "tiburon", "pulpo", "calamar", "medusa",
    "pez", "trucha", "sardina", "atun", "salmon", "caballa", "langosta", "cangrejo", "camaron", "gamba",
    "molusco", "almeja", "ostras", "mejillon", "calamar", "pulpo", "anemona", "estrella", "marina", "caballito",
    "marino", "tortuga", "cocodrilo", "serpiente", "lagarto", "iguana", "camaleon", "rana", "sapo", "salamandra",
    "mosca", "mosquito", "abeja", "avispa", "mariposa", "polilla", "hormiga", "arana", "escorpion", "cucaracha",
    "grillo", "saltamontes", "escarabajo", "libelula", "luciernaga", "ciempies", "milenpies", "caracol", "babosa", "alacran",
    "hoja", "ramas", "tronco", "raiz", "flores", "petalos", "semillas", "fruto", "brote", "capullo",
    "fronda", "helecho", "musgo", "hiedra", "cactus", "orquidea", "girasol", "margarita", "rosa", "tulipan",
    "narciso", "violeta", "clavel", "lirios", "jacinto", "jazmin", "lavanda", "azucena", "gardenia", "magnolia",
    "vegetal", "papa", "zanahoria", "lechuga", "pepino", "tomate", "calabaza", "berenjena", "cebolla", "ajo",
    "maiz", "choclo", "brocoli", "coliflor", "espinaca", "alcachofa", "esparrago", "remolacha", "pepino", "rabanito",
    "pimiento", "chile", "jalapeno", "habanero", "calabacin", "berza", "col", "guisante", "judia", "lenteja",
    "garbanzo", "frijol", "soja", "alga", "tofu", "seta", "champinon", "trufa", "puerro", "escarola",
    "endivia", "apio", "nabos", "rapini", "habas", "alubias", "arvejas", "mijo", "quinoa", "amaranto",
    "pollo", "pavo", "ternera", "cerdo", "cordero", "cabrito", "conejo", "codorniz", "perdiz", "faisan",
    "venado", "bufalo", "bisonte", "jabali", "cocodrilo", "iguana", "caiman", "puma", "jaguar", "pantera",
    "leopardo", "guepardo", "lince", "gato", "gallina", "avestruz", "pavo", "paloma", "gorrion", "ruisenor",
    "canario", "cotorras", "guacamayo", "papagayo", "tucan", "periquito", "loros", "cuervo", "urraca", "corneja",
    "lagartija", "tortuga", "cobra", "iguana", "hipopotamo", "rinoceronte", "ciervo", "koala", "canguro", "zorrillo",
    "ballena", "delfin", "tiburon", "tigre", "leon", "puma", "lince", "gato", "loro", "avestruz",
    "iguana", "camaleon", "caiman", "cocodrilo", "ciempies", "araña"
];

let palabra;
let boton;
let input;
let intentosRestantes = 6;
let letrasIncorrectas = [];
let letrasAdivinadas = [];
let game_over_sound;
let game_won_sound;

function preload() {
    game_over_sound = loadSound('gameover.mp3');
    game_won_sound = loadSound('Victory.mp3');
}

function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20);
    background(0);
    mostrar_palabra();

    input = createInput('');
    input.position(windowWidth / 2 - 100, 100);
    input.changed(() => { comparar(); });
    boton = createButton('Intentar');
    boton.position(windowWidth / 2 - 45, 125);
    boton.mousePressed(() => { comparar(); });

    stroke(255);
    strokeWeight(4);
    let y = windowHeight / 2;
    line(200, y + 100, 400, y + 100);// Base
    line(300, y + 100, 300, y - 200);// Poste vertical
    line(300, y - 200, 350, y - 200);// Poste horizontal
    line(350, y - 200, 350, y - 150);// Cuerda
}

function comparar() {
    let letraEncontrada = false;
    let letraIngresada = input.value().toLowerCase();
    let largopalabra = palabra.length
    if (letrasIncorrectas.includes(letraIngresada) || letrasAdivinadas.includes(letraIngresada)) {
        letra_repetida();
        input.value('');
        return;
    }

    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === letraIngresada) {
            letraEncontrada = true;
            letrasAdivinadas.push(letraIngresada);
            strokeWeight(1);
            fill(255, 0, 0);
            let posx = windowWidth - 800 + i * 50
            square(posx, 500, 50, 10);
            fill(255);
            textSize(40);
            textAlign(CENTER, CENTER);
            text(letraIngresada, posx + 25, 525);
        }
    }
    if (!letraEncontrada) {
        intentosRestantes -= 1;
        letrasIncorrectas.push(letraIngresada);
    }
    input.value('');

    dibujarAhorcado();

    if (letrasAdivinadas.length === largopalabra) {
        ganaste();
    }
}

function letra_repetida() {
    let alerta = createImg('alert_red.png', 'Imagen de Alerta');
    alerta.position(windowWidth - 275, 60);
    alerta.size(256, 108);
    setTimeout(() => alerta.remove(), 1000);
}

function draw() {
    
}

function mostrar_palabra() {
    let i = random(0, 100);
    i = Math.floor(i);
    palabra = palabras[i];
    letrasAdivinadas = [];
    console.log(palabra);
    dibujar();
}

function dibujar() {
    for (let i = 0; i < palabra.length; i++) {
        fill(255);
        let posx = windowWidth - 800 + i * 50
        square(posx, 500, 50, 10);
    }
}

function dibujarAhorcado() {
    stroke(255);
    strokeWeight(4);
    let y = windowHeight / 2;

    if (intentosRestantes < 6) {
        ellipse(350, y - 120, 50, 50);// Cabeza
    }
    if (intentosRestantes < 5) {
        line(350, y - 95, 350, y);// Cuerpo
    }
    if (intentosRestantes < 4) {
        line(350, y - 70, 320, y - 40);// Brazo izquierdo
    }
    if (intentosRestantes < 3) {
        line(350, y - 70, 380, y - 40);// Brazo derecho
    }
    if (intentosRestantes < 2)
        line(350, y, 320, y + 40); {// Pierna izquierda
    }
    if (intentosRestantes < 1) {
        line(350, y, 380, y + 40);// Pierna derecha
        gameover();
    }
}

function gameover() {
    game_over_sound.play(0);
    input.remove();
    boton.remove();
    background(255, 0, 0);
    strokeWeight(3);
    textAlign(CENTER,CENTER);
    textSize(50);
    text('¡Perdiste!', windowWidth / 2, 200);
    strokeWeight(1);
    textSize(25);
    text(`La palabra era: ${palabra}`, windowWidth / 2, 300);
    text(`Toca el boton de abajo para volver a jugar`, windowWidth / 2, 330);
    botonReiniciar = createImg('reset.png', 'Imagen Reset');
    botonReiniciar.position(windowWidth / 2 - 50, windowHeight - 105);
    botonReiniciar.size(100, 100);
    botonReiniciar.mousePressed(() => { location.reload(); });
}

function ganaste() {
    game_won_sound.play(0);
    input.remove();
    boton.remove();
    background(0, 255, 0);
    strokeWeight(3);
    textAlign(CENTER, CENTER);
    textSize(50);
    text('¡Ganaste!', windowWidth / 2, 200);
    strokeWeight(1);
    textSize(25);
    text('¡Felicidades! Adivinaste la palabra.', windowWidth / 2, 300);
    text('Toca el boton de abajo para volver a jugar', windowWidth / 2, 330);
    botonReiniciar = createImg('reset.png', 'Imagen Reset');
    botonReiniciar.position(windowWidth / 2 - 50, windowHeight - 105);
    botonReiniciar.size(100, 100);
    botonReiniciar.mousePressed(() => { location.reload(); });
}