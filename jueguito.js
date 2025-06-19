let vida = 5;
let miembros = 3;
let mochila = [];
let dialogoInicial = alert(
  "Has logrado sobrevivir al impacto inicial del apagón global. La ciudad es un caos. El grupo tiene pocas provisiones, sin saber qué ocurrió realmente. Todo indica que si no logran encontrar suministros, se convertirán en una estadística más. Hay rumores de una salida segura a través del sistema subterráneo de metro. Pero antes, debes resistir en la superficie el tiempo suficiente para prepararte."
);

function dialogo() {
  alert(
    `total vida: ${vida}, miembros: ${miembros}, elementos en la mochila: ${mochila}`
  );
}

function buscarComida() {
  dialogo();
  let opcionComida = prompt(
    "El hambre aprieta y la sed comienza a nublar el juicio del grupo. Es momento de actuar con rapidez, pero también con cautela. ¿Dónde buscar recursos vitales? \n[A]  Ir al supermercado abandonado \n[B] Robar mochila a un sobreviviente"
  ).toUpperCase();
  if (opcionComida == "A") {
    alert("Encuentran comida y agua");
    mochila.push("comida", "agua");
    vida = vida--;
  } else if (opcionComida == "B") {
    alert("Obtienen linterna, pero pierden 1 miembro por represalia.");
    mochila.push("linterna");
    miembros--;
  } else {
    alert("Opción inválida");
  }
  return vida, miembros, mochila;
}

function lugarRefugio() {
  dialogo();
  let opcionRefugio = prompt(
    "Con algo de alimento en la mochila, el grupo necesita un lugar seguro donde recuperarse y planear el siguiente movimiento. ¿Dónde decides refugiarte? \n[A] En una farmacia \n[B] Estación de buses \n[C] En una tienda de campaña abandonada"
  ).toUpperCase;
  if (opcionRefugio == "A") {
    alert("Encuentran botiquín y descansan.");
    mochila.push("botiquin");
    vida++;
  } else if (opcionRefugio == "B") {
    alert("Hay escombros, uno se lastima.");
    vida--;
  } else if (opcionRefugio == "C") {
    alert(
      "Encuentran una batería portátil, pero hay signos de radioactividad cerca."
    );
    mochila.push("bateria");
    vida--;
  } else {
    alert("Opción inválida");
  }
  return vida, mochila;
}

function ayudarIgnorar() {
  dialogo();
  let opcionAyudar = prompt(
    "Mientras avanzan, escuchan gritos de auxilio desde un callejón. Ayudar podría ser un acto heroico... o un riesgo innecesario. ¿Cuál será su decisión? \n[A] Ayudar a una familia atrapada \n[B] Ignorar y seguir avanzando \n[C] Distraer a los enemigos y liberar a la familia a distancia \n[D] Robar los recursos de la familia sin ser vistos"
  );
  if (opcionAyudar == "A") {
    alert("Ganan un miembro agradecido con recursos.");
    miembros++;
    mochila.push("mapa");
  } else if (opcionAyudar == "B") {
    alert("Nada ganado.");
    miembros--;
  } else if (opcionAyudar == "C") {
    alert(" Obtienen una linterna.");
    mochila.push("linterna");
    vida--;
  } else if (opcionAyudar == "D") {
    alert("Obtienen comida, pero pierden 2 miembros por represalia.");
    mochila.push("comida");
    miembros -= 2;
  } else {
    alert("Opción inválida");
  }
  return vida, miembros, mochila;
}

function señalHumo() {
  dialogo();
  let opcionHumo = prompt(
    "Desde lo alto de un edificio, una columna de humo se eleva a lo lejos. ¿Es una señal de auxilio o una trampa mortal?. Elige \n[A] Investigar la señal \n[B] Evitar la zona"
  );
  if (opcionHumo == "A") {
    alert("Encuentran gasolina y una llave vieja.");
    mochila.push("llave", "gasolina");
  } else if (opcionHumo == "B") {
    alert(
      "Evitan una emboscada, pero pierden oportunidad de obtener objetos. Nada ocurre"
    );
  } else {
    alert("Opción inválida");
  }
  return mochila;
}

function exploracion() {
  dialogo();
  let opcionExploracion = prompt(
    "El grupo necesita información. Las rutas están colapsadas, y moverse sin saber puede ser letal. ¿Mejor buscar una vista panorámica o seguir entre las sombras? \n[A] Subir a un edificio a observar [B] Moverse por callejones [C] Usar una alcantarilla conectada al metro"
  );
  if (opcionExploracion == "A") {
    alert("Encuentran un dron con información.");
    mochila.push("intel");
  } else if (opcionExploracion == "B") {
    alert("Se enfrentan a animales salvajes.");
    vida--;
  } else if (opcionExploracion == "C") {
    alert("Llegan cerca de una entrada secreta al siguiente nivel.");
    mochila.push("tarjeta-acceso");
  } else {
    alert("Opción inválida");
  }
  dialogo = alert(
    `total vida: ${vida}, miembros: ${miembros}, elementos en la mochila: ${mochila}`
  );
  return vida, mochila;
}

function medioTransporte() {
  let opcionTransporte = prompt(
    "La noche se acerca. Para avanzar rápido deben decidir: improvisar un medio de transporte o confiar en sus propias fuerzas. El tiempo es limitado. ¿Qué escoges? [A] Reparar una bicicleta [B] Ir a pie "
  );
  if (opcionTransporte == "A") {
    alert("Avanzan rápido, encuentran mochila con recursos.");
    mochila.push("medicinas", "bateria");
  } else if (opcionTransporte == "B") {
    alert("Caminan mucho, cansancio general.");
    vida--;
  } else {
    alert("Opción inválida");
  }
  dialogo();
  return vida, mochila;
}

function juego() {
  buscarComida();
  lugarRefugio();
  ayudarIgnorar();
  señalHumo();
  exploracion();
  medioTransporte();
}

juego();
