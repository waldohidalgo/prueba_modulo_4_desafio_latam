import { Aguila, Serpiente, Oso, Lobo, Leon } from "./modulos.js";

const nombreClaseAsociacion = {
  leon: Leon,
  lobo: Lobo,
  oso: Oso,
  serpiente: Serpiente,
  aguila: Aguila,
};
let nombreClase = null;

(async function cargarData() {
  try {
    const responseObject = await fetch("../../animales.json");
    const { animales } = await responseObject.json();
    let objConClase = {};

    animales.forEach((elem) => {
      objConClase[elem.name] = {
        clase: nombreClaseAsociacion[elem.name],
        img: `./assets/imgs/${elem.imagen}`,
        sound: `./assets/sounds/${elem.sonido}`,
      };
    });
    nombreClase = objConClase;
  } catch (error) {
    console.log(error);
  }
})();

$(function () {
  const formTag = $("#form");
  const selectAnimal = $("#animal");
  const selectEdad = $("#edad");
  const textAreaComentarios = $("#comentarios");

  formTag.submit(function (eventObj) {
    eventObj.preventDefault();
    try {
      const { clase, img, sound } = nombreClase[selectAnimal.val()];
      const objeto = new clase(
        selectAnimal.val(),
        selectEdad.val(),
        img,
        textAreaComentarios.val(),
        sound
      );
      resetearFormulario(selectAnimal, selectEdad, textAreaComentarios);
      const elementoAgregado = mostrarAnimalAgregado(objeto);
      controlEliminarAnimal(elementoAgregado);
      reproducirSonido(elementoAgregado);
      cargarModal(elementoAgregado, objeto);
    } catch (error) {
      console.log(error);
    }
  });

  selectAnimal.change(function () {
    try {
      const { img } = nombreClase[selectAnimal.val()];
      cargarImagen(img);
    } catch (error) {
      console.log(error);
    }
  });
});

const cargarImagen = (() => {
  return async function (srcImage) {
    const promesaDeCarga = new Promise((resolve, reject) => {
      const img = $("#preview");
      img.attr("src", srcImage);
      img.on("load", () => {
        resolve("Imagen Cargada");
      });
      img.on("error", () => {
        reject("Ha ocurrido un error en la carga de la imagen");
      });
    });
    try {
      const resultado = await promesaDeCarga;
      //console.log(resultado);
    } catch (error) {
      console.log(error);
    }
  };
})();

function mostrarAnimalAgregado(objetoAnimal) {
  const imagenAnimal = objetoAnimal.img;
  const contenedorAnimales = $(".contenedor_animales");
  const contenedorAnimal = $("<div>");
  contenedorAnimal.addClass("animal_insertado");
  const contenido = `
      <div class="animal_insertado_close" title='Haz click aquí para eliminar el elemento'>
        <i class="fa-solid fa-circle-xmark"></i>
      </div>
      <img src=${imagenAnimal} alt=${objetoAnimal.nombre} title='Haz click aquí para mostrar un modal'/>
      <button class="boton_sonido" type="button" title="Haz click aquí para reproducir el sonido" data-sonido=${objetoAnimal.sonido}>
        <i class="fa-solid fa-volume-high"></i>
      </button>
  `;
  contenedorAnimal.html(contenido);
  contenedorAnimales.append(contenedorAnimal);
  return contenedorAnimal;
}

const reproducirSonido = (elementoAgregado) => {
  const botonSonido = elementoAgregado.find(".boton_sonido");

  botonSonido.on("click", function () {
    const audioTag = $("#player");
    audioTag.html(`<source src=${$(this).attr(
      "data-sonido"
    )} type="audio/mpeg">  
      Tu navegador no soporta la etiqueta de audio.
      `);
    audioTag[0].load();
    audioTag.on("loadedmetadata", () => {
      audioTag[0].play();
    });
  });
};

function resetearFormulario(selectAnimal, selectEdad, textAreaComentarios) {
  selectAnimal.val("");
  selectEdad.val("");
  textAreaComentarios.val("");
  const img = $("#preview");
  img.attr("src", "./assets/imgs/lion.svg");
}
const controlEliminarAnimal = (elementoAgregado) => {
  const botonClose = elementoAgregado.find(".animal_insertado_close");
  botonClose.on("click", () => {
    elementoAgregado.remove();
  });
};
function cargarModal(elementoAgregado, objeto) {
  const imgTag = elementoAgregado.find("img");
  imgTag.on("click", function () {
    const modalTag = $("#Modal");

    modalTag.find(".modal-body").html(`
    <img src=${imgTag.attr("src")} alt='imagen animal'>
    <p>Edad: ${objeto.edad}</p>
    <h3 class='modal-body_comentarios_titulo'>Comentarios</h3>
    <p class='modal-body_comentarios_contenido'>${objeto.comentarios}</p>
    `);

    const modalObj = new bootstrap.Modal(modalTag[0]);
    modalObj.show();
  });
}
