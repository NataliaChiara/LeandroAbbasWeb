// ARRAY, ELEMENTOS Y FUNCIONES

let coleccionProd = [
  {
    id: 1,
    title: "Lorem Ipsum",
    price: 11.111,
    description: "Lorem ipsum dolor sit amet.",
    image: "./img/mesa1.jfif",
    galeria: [
      {
        id: 2,
        title: "Lorem Ipsum",
        price: 11.111,
        description: "Lorem ipsum dolor sit amet.",
        image: "./img/mesa2.jfif",
      },
      {
        id: 3,
        title: "Lorem Ipsum",
        price: 11.111,
        description: "Lorem ipsum dolor sit amet.",
        image: "./img/mesa3.jfif",
      },
    ],
  },
  {
    id: 6,
    title: "Lorem Ipsum",
    price: 11.111,
    description: "Lorem ipsum dolor sit amet.",
    image: "./img/mesa6.jfif",
    galeria: [
      {
        id: 4,
        title: "Lorem Ipsum",
        price: 11.111,
        description: "Lorem ipsum dolor sit amet.",
        image: "./img/mesa4.jfif",
      },
      {
        id: 5,
        title: "Lorem Ipsum",
        price: 11.111,
        description: "Lorem ipsum dolor sit amet.",
        image: "./img/mesa8.jfif",
      },
    ],
  },
  {
    id: 9,
    title: "Lorem Ipsum",
    price: 11.111,
    description: "Lorem ipsum dolor sit amet.",
    image: "./img/mesa9.jfif",
    galeria: [
      {
        id: 7,
        title: "Lorem Ipsum",
        price: 11.111,
        description: "Lorem ipsum dolor sit amet.",
        image: "./img/mesa7.jfif",
      },
      {
        id: 10,
        title: "Lorem Ipsum",
        price: 11.111,
        description: "Lorem ipsum dolor sit amet.",
        image: "./img/mesa10.jfif",
      },
    ],
  },
  {
    id: 12,
    title: "Lorem Ipsum",
    price: 11.111,
    description: "Lorem ipsum dolor sit amet.",
    image: "./img/Lampara2.jpg",
    galeria: [
      {
        id: 11,
        title: "Lorem Ipsum",
        price: 11.111,
        description: "Lorem ipsum dolor sit amet.",
        image: "./img/lampara1.jpg",
      },
    ],
  },
];

const main = document.getElementById("main");

let i = 1;

initApp();

function initApp() {
  pintarInicio();
}

function izquierdaGaleria() {
  i--;
  if (i <= 0) {
    i = 10;
    const containerPres = document.querySelector(".containerPres");
    const presentacion = document.querySelector(".presentacion");
    presentacion.innerHTML = "";
    presentacion.innerHTML = `
    <img class="imagenCentral" id="galeria" src="./img/mesa${i}.jfif">
    `;

    containerPres.appendChild(presentacion);
  } else {
    const containerPres = document.querySelector(".containerPres");
    const presentacion = document.querySelector(".presentacion");
    presentacion.innerHTML = "";
    presentacion.innerHTML = `
    <img class="imagenCentral" id="galeria" src="./img/mesa${i}.jfif">
    `;

    containerPres.appendChild(presentacion);
  }
}

function derechaGaleria() {
  if (i >= 10) {
    i = 0;
    i++;
    const containerPres = document.querySelector(".containerPres");
    const presentacion = document.querySelector(".presentacion");
    presentacion.innerHTML = "";
    presentacion.innerHTML = `
    <img class="imagenCentral" id="galeria" src="./img/mesa${i}.jfif">
    `;

    containerPres.appendChild(presentacion);
  } else {
    i++;
    const containerPres = document.querySelector(".containerPres");
    const presentacion = document.querySelector(".presentacion");
    presentacion.innerHTML = "";
    presentacion.innerHTML = `
    <img class="imagenCentral" id="galeria" src="./img/mesa${i}.jfif">
    `;

    containerPres.appendChild(presentacion);
  }
}

// INTERACCION

const inicio = document.getElementById("inicio");
inicio.addEventListener("click", () => {
  pintarInicio();
});

const productos = document.getElementById("productos");
productos.addEventListener("click", () => {
  pintarProductos();
});

const acercaDeMi = document.getElementById("acercaDeMi");
acercaDeMi.addEventListener("click", () => {
  pintarAcerca();
});

const flechaIzq = document.getElementById("flechaIzq");
flechaIzq.addEventListener("click", () => {
  izquierdaGaleria();
});

const flechaDer = document.getElementById("flechaDer");
flechaDer.addEventListener("click", () => {
  derechaGaleria();
});

const galeria = document.getElementById("presentacion");
galeria.addEventListener("click", () => {
  pintarProductos();
});

// VISTAS

function pintarInicio() {
  main.innerHTML = "";
  const mainInicio = document.createElement("div");
  mainInicio.classList.add("mainInicio");
  mainInicio.innerHTML = `
        <div class="descripcionInicio">
            <img src="./img/logo.png" alt="logo" width="200px" class="logo">
            <div class="parrafo">
                <h3>Lorem ipsum</h3>
                <p>Todas las maderas que utilizo son especies que crecen y se replantan en
                    Argentina: eucalipto rojo, cedro azul, cipr??s, acacia blanca, quebracho colorado, para??so. No
                    uso solventes ni diluyentes derivados del petr??leo, todos los aceites para el tratamiento de las
                    maderas son vegetales: lino, tung, coco, teka y cera de abejas. Las bases son de hierro pintados
                    con pintura en polvo base acuosa, o esmalte convertidor base agua. No uso pinturas con solvente
                    mineral.</p>
            </div>
        </div>

        <hr>

    `;
  main.appendChild(mainInicio);
}

function pintarProductos() {
  main.innerHTML = "";
  const mainProductos = document.createElement("div");
  mainProductos.setAttribute("id", "mainProductos");
  coleccionProd.forEach((element) => {
    const gridProductos = document.createElement("div");
    gridProductos.classList.add("grid");
    gridProductos.innerHTML = `
                <a href="#main" class="tarjetaProd" onclick="encontrarElemento(${element.id})">
                    <div class="cat">
                        <img src="${element.image}" alt="">
                    </div>
                        <h2>${element.title}</h2>
                </a>
                `;

    mainProductos.appendChild(gridProductos);
  });
  main.appendChild(mainProductos);
}

function encontrarElemento(id) {
  const productoAgrandado = coleccionProd.find((element) => element.id === id);
  agrandarProd(productoAgrandado);
  galeriaZoom(productoAgrandado);
}

function agrandarProd(id) {
  main.innerHTML = "";
  const zoom = document.createElement("div");
  zoom.classList.add("zoom");
  zoom.innerHTML = `
    <div class="prodZoom">
        <div class="producto">
            <div class="marco">
                <img src="${id.image}">
            </div>
            <div class="galeriaProd" id="galeriaProd">
            </div>
        </div>
        
        <div class="descripcion">
            <h2>${id.title}</h2>
            <p>${id.description}</p>
            <p>$${id.price}</p>
        </div>
        <button class="btnOut" id="btnOut"><img src="./img/cruz.png"></button>
    </div>
    `;
  main.appendChild(zoom);

  const btnOut = document.getElementById("btnOut");
  btnOut.addEventListener("click", () => pintarProductos());
}

function galeriaZoom(id) {
  const galeriaProd = document.getElementById("galeriaProd");
  id.galeria.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("marco2");
    div.innerHTML = `
        <img src="${element.image}">
        `;
    galeriaProd.appendChild(div);
  });
}

function pintarAcerca() {
  main.innerHTML = "";
  const mainFot = document.createElement("div");
  mainFot.classList.add("mainFot");
  mainFot.innerHTML = `
    <img src="./img/logo.png" width="200px">
    <p>El origen de mi carpinter??a comenz?? en 1973, en primer a??o del colegio industrial, el profesor Alfano, un
        carpintero italiano de unos 60 a??os en ese momento, que hablaba una mezcla de espa??ol e italiano, nos
        ense??aba el manejo de la madera con mucha paciencia y arte al mismo tiempo.
        A los 9 a??os empec?? a experimentar la fotograf??a con una c??mara Kodak Brownie muy b??sica, despu??s con
        una Kodak pocket y muchos a??os mas tarde con una 35mm de verdad, una Nikon FE, la fotograf??a la sigo
        practicando.
        Despu??s del servicio militar, ya con 19 a??os, me interno en la jungla de las multinacionales,
        dedic??ndome a compras y comercio internacional.
        Durante un tiempo tambi??n me dediqu?? a hacer esculturas con hierro reciclado (le pido disculpas a David
        Smith y a Eduardo Chillida)
        A partir de 2015, decido emprender un viaje personal que me lleva de vuelta a la carpinter??a.
        Incre??blemente los conocimientos de mis 13 a??os todav??a estaban disponibles para ser usados y mejorados
        con nuevas tecnolog??as.
        Y aqu?? estoy, haciendo estos trabajos que pueden ver en la p??gina.
        Menos es mas (concepto minimalista), y la calidad, a la larga, siempre cuesta menos.

        Gracias por visitar la web.
        Claudio Alejandro Abbas
    </p>

        <hr>

    `;
  main.appendChild(mainFot);
}
