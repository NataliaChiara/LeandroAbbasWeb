// ARRAY, ELEMENTOS Y FUNCIONES

let coleccionProd = [
  {
    id: 1,
    title: "Lorem Ipsum",
    price: 11.111,
    description: "Lorem ipsum dolor sit amet.",
    image: "./img/productos/mesa1.jfif",
    galeria: [
      {
        id: 2,
        title: "Lorem Ipsum",
        price: 11.111,
        description: "Lorem ipsum dolor sit amet.",
        image: "./img/productos/mesa2.jfif",
      },
      {
        id: 3,
        title: "Lorem Ipsum",
        price: 11.111,
        description: "Lorem ipsum dolor sit amet.",
        image: "./img/productos/mesa3.jfif",
      },
    ],
  },
  {
    id: 6,
    title: "Lorem Ipsum",
    price: 11.111,
    description: "Lorem ipsum dolor sit amet.",
    image: "./img/productos/mesa6.jfif",
    galeria: [
      {
        id: 4,
        title: "Lorem Ipsum",
        price: 11.111,
        description: "Lorem ipsum dolor sit amet.",
        image: "./img/productos/mesa4.jfif",
      },
      {
        id: 5,
        title: "Lorem Ipsum",
        price: 11.111,
        description: "Lorem ipsum dolor sit amet.",
        image: "./img/productos/mesa8.jfif",
      },
    ],
  },
  {
    id: 9,
    title: "Lorem Ipsum",
    price: 11.111,
    description: "Lorem ipsum dolor sit amet.",
    image: "./img/productos/mesa9.jfif",
    galeria: [
      {
        id: 7,
        title: "Lorem Ipsum",
        price: 11.111,
        description: "Lorem ipsum dolor sit amet.",
        image: "./img/productos/mesa7.jfif",
      },
      {
        id: 10,
        title: "Lorem Ipsum",
        price: 11.111,
        description: "Lorem ipsum dolor sit amet.",
        image: "./img/productos/mesa10.jfif",
      },
    ],
  },
  {
    id: 12,
    title: "Lorem Ipsum",
    price: 11.111,
    description: "Lorem ipsum dolor sit amet.",
    image: "./img/productos/Lampara2.jpg",
    galeria: [
      {
        id: 11,
        title: "Lorem Ipsum",
        price: 11.111,
        description: "Lorem ipsum dolor sit amet.",
        image: "./img/productos/lampara1.jpg",
      },
    ],
  },
];

let coleccionFotografia = [
  "./img/fotografia/1.jpg",
  "./img/fotografia/2.jpg",
  "./img/fotografia/3.jpg",
  "./img/fotografia/4.jpg",
  "./img/fotografia/5.jpg",
  "./img/fotografia/6.jpg",
  "./img/fotografia/7.jpg",
  "./img/fotografia/8.jpg",
  "./img/fotografia/9.jpg",
  "./img/fotografia/10.jpg",
  "./img/fotografia/11.jpg",
  "./img/fotografia/12.jpg",
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
    <img class="imagenCentral" id="galeria" src="./img/productos/mesa${i}.jfif">
    `;

    containerPres.appendChild(presentacion);
  } else {
    const containerPres = document.querySelector(".containerPres");
    const presentacion = document.querySelector(".presentacion");
    presentacion.innerHTML = "";
    presentacion.innerHTML = `
    <img class="imagenCentral" id="galeria" src="./img/productos/mesa${i}.jfif">
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
    <img class="imagenCentral" id="galeria" src="./img/productos/mesa${i}.jfif">
    `;

    containerPres.appendChild(presentacion);
  } else {
    i++;
    const containerPres = document.querySelector(".containerPres");
    const presentacion = document.querySelector(".presentacion");
    presentacion.innerHTML = "";
    presentacion.innerHTML = `
    <img class="imagenCentral" id="galeria" src="./img/productos/mesa${i}.jfif">
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

const fotografia = document.getElementById("fotografia");
fotografia.addEventListener("click", () => {
  pintarFotografia();
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

            <img align="left" src="./img/logo.jpg" alt="logo" width="200px" class="logo">
            <div class="parrafo">
                <h3>Lorem ipsum</h3>
                <p>Todas las maderas que utilizo son especies que crecen y se replantan en
                    Argentina: eucalipto rojo, cedro azul, ciprés, acacia blanca, quebracho colorado, paraíso. No
                    uso solventes ni diluyentes derivados del petróleo, todos los aceites para el tratamiento de las
                    maderas son vegetales: lino, tung, coco, teka y cera de abejas. Las bases son de hierro pintados
                    con pintura en polvo base acuosa, o esmalte convertidor base agua. No uso pinturas con solvente
                    mineral.</p>
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

function pintarFotografia() {
  main.innerHTML = "";
  const mainFotografia = document.createElement("div");
  mainFotografia.setAttribute("id", "mainFotografia");
  coleccionFotografia.forEach((element) => {
    const itemFotografia = document.createElement("div");
    itemFotografia.classList.add("infoFotografia");
    itemFotografia.innerHTML = `
    <img class="fotografiaImg" src="${element}" alt"imagen">
    `;

    mainFotografia.appendChild(itemFotografia);
  });
  main.appendChild(mainFotografia);
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
  mainFot.classList.add("mainAcerca");
  mainFot.innerHTML = `
    <div class="imgAcercaContainer">
      <img align="left" src="./img/retrato.png">
    </div>
    <p>El origen de mi carpintería comenzó en 1973, en primer año del colegio industrial, el profesor Alfano, un
        carpintero italiano de unos 60 años en ese momento, que hablaba una mezcla de español e italiano, nos
        enseñaba el manejo de la madera con mucha paciencia y arte al mismo tiempo.
        A los 9 años empecé a experimentar la fotografía con una cámara Kodak Brownie muy básica, después con
        una Kodak pocket y muchos años mas tarde con una 35mm de verdad, una Nikon FE, la fotografía la sigo
        practicando.
        Después del servicio militar, ya con 19 años, me interno en la jungla de las multinacionales,
        dedicándome a compras y comercio internacional.
        Durante un tiempo también me dediqué a hacer esculturas con hierro reciclado (le pido disculpas a David
        Smith y a Eduardo Chillida)
        A partir de 2015, decido emprender un viaje personal que me lleva de vuelta a la carpintería.
        Increíblemente los conocimientos de mis 13 años todavía estaban disponibles para ser usados y mejorados
        con nuevas tecnologías.
        Y aquí estoy, haciendo estos trabajos que pueden ver en la página.
        Menos es mas (concepto minimalista), y la calidad, a la larga, siempre cuesta menos.

        Gracias por visitar la web.
        Claudio Alejandro Abbas
    </p>

        <hr>

    `;
  main.appendChild(mainFot);
}
