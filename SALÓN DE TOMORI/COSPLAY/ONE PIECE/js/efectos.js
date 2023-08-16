let isMediaMatch = false;

function generateCards(cardData, cardContainer) {
  cardContainer.innerHTML = "";
  for (const data of cardData) {
    const card = `
            <div class="card1">
                <div class="face front">
                    <img loading="lazy" src="${data.imageSrc}" alt="">
                    <h3>${data.title}</h3>
                </div>
                <div class="face back">
                    <h3>Curiosidad</h3>
                    <p>${data.curiosity}</p>
                    <div class="link">
                        <a href="${data.detailsLink}">Details</a>
                    </div>
                </div>
            </div>
            <br><br>
        `;
    cardContainer.innerHTML += card;
  }
}

function checkWindowWidth() {
  const cardContainer = document.getElementById("card-container");
  const cardContainer2 = document.getElementById("card-container2");
  const mediaMatch = window.matchMedia(
    "(min-width: 769px) and (max-width: 820px)"
  ).matches;

  if (mediaMatch !== isMediaMatch) {
    isMediaMatch = mediaMatch;

    const cardData = [
      {
        imageSrc: "../imagenes/ma2.jpg",
        title: "Japan",
        curiosity:
          "La serie fue producida por el estudio MAPPA y dirigida por Park Sung-hoo.",
        detailsLink: "#",
      },
      {
        imageSrc: "../imagenes/ma4.jpg",
        title: "Japan",
        curiosity:
          "Si bien el anime tuvo un debut de transmisión avanzada en YouTube y Twitter el 19 de septiembre de 2020, se emitió oficialmente en el bloque Super Animeism de MBS y TBS del 3 de octubre de 2020 al 27 de marzo de 2021.",
        detailsLink: "#",
      },
      {
        imageSrc: "../imagenes/ma1.jpg",
        title: "Japan",
        curiosity:
          "Es una serie de manga japonés escrita e ilustrada por Gege Akutami. Shūeisha publica sus capítulos en la revista Shūkan Shōnen Jump desde el 5 de marzo de 2018.",
        detailsLink: "#",
      },
      {
        imageSrc: "../imagenes/ma3.jpg",
        title: "Japan",
        curiosity:
          "El primer volumen se publicó el 4 de julio de 2018, y hasta el momento han sido publicados veinte volúmenes.",
        detailsLink: "#",
      },
      {
        imageSrc: "../imagenes/ma1.jpg",
        title: "Japan",
        curiosity:
          "Es una serie de manga japonés escrita e ilustrada por Gege Akutami. Shūeisha publica sus capítulos en la revista Shūkan Shōnen Jump desde el 5 de marzo de 2018.",
        detailsLink: "#",
      },
      {
        imageSrc: "../imagenes/ma3.jpg",
        title: "Japan",
        curiosity:
          "El primer volumen se publicó el 4 de julio de 2018, y hasta el momento han sido publicados veinte volúmenes.",
        detailsLink: "#",
      },
      {
        imageSrc: "../imagenes/ma1.jpg",
        title: "Japan",
        curiosity:
          "Es una serie de manga japonés escrita e ilustrada por Gege Akutami. Shūeisha publica sus capítulos en la revista Shūkan Shōnen Jump desde el 5 de marzo de 2018.",
        detailsLink: "#",
      },
      {
        imageSrc: "../imagenes/ma3.jpg",
        title: "Japan",
        curiosity:
          "El primer volumen se publicó el 4 de julio de 2018, y hasta el momento han sido publicados veinte volúmenes.",
        detailsLink: "#",
      },
    ];
    //
    const cardData2 = [
      {
        imageSrc: "../imagenes/ma2.jpg",
        title: "Japan",
        curiosity:
          "La serie fue producida por el estudio MAPPA y dirigida por Park Sung-hoo.",
        detailsLink: "#",
      },
      {
        imageSrc: "../imagenes/ma4.jpg",
        title: "Japan",
        curiosity:
          "Si bien el anime tuvo un debut de transmisión avanzada en YouTube y Twitter el 19 de septiembre de 2020, se emitió oficialmente en el bloque Super Animeism de MBS y TBS del 3 de octubre de 2020 al 27 de marzo de 2021.",
        detailsLink: "#",
      },
      {
        imageSrc: "../imagenes/ma1.jpg",
        title: "Japan",
        curiosity:
          "Es una serie de manga japonés escrita e ilustrada por Gege Akutami. Shūeisha publica sus capítulos en la revista Shūkan Shōnen Jump desde el 5 de marzo de 2018.",
        detailsLink: "#",
      },
      {
        imageSrc: "../imagenes/ma3.jpg",
        title: "Japan",
        curiosity:
          "El primer volumen se publicó el 4 de julio de 2018, y hasta el momento han sido publicados veinte volúmenes.",
        detailsLink: "#",
      },
      {
        imageSrc: "../imagenes/ma1.jpg",
        title: "Japan",
        curiosity:
          "Es una serie de manga japonés escrita e ilustrada por Gege Akutami. Shūeisha publica sus capítulos en la revista Shūkan Shōnen Jump desde el 5 de marzo de 2018.",
        detailsLink: "#",
      },
      {
        imageSrc: "../imagenes/ma3.jpg",
        title: "Japan",
        curiosity:
          "El primer volumen se publicó el 4 de julio de 2018, y hasta el momento han sido publicados veinte volúmenes.",
        detailsLink: "#",
      },
      {
        imageSrc: "../imagenes/ma1.jpg",
        title: "Japan",
        curiosity:
          "Es una serie de manga japonés escrita e ilustrada por Gege Akutami. Shūeisha publica sus capítulos en la revista Shūkan Shōnen Jump desde el 5 de marzo de 2018.",
        detailsLink: "#",
      },
      {
        imageSrc: "../imagenes/ma3.jpg",
        title: "Japan",
        curiosity:
          "El primer volumen se publicó el 4 de julio de 2018, y hasta el momento han sido publicados veinte volúmenes.",
        detailsLink: "#",
      },
    ];
    if (mediaMatch) {
      generateCards(cardData, cardContainer);
      generateCards(cardData2, cardContainer2);
    } else {
      cardContainer.innerHTML = "";
      cardContainer2.innerHTML = "";
    }
  }
}

// Verificar el ancho de la ventana al cargar y al cambiar el tamaño
window.addEventListener("DOMContentLoaded", () => {
  checkWindowWidth();
  window.addEventListener("resize", checkWindowWidth);
});


window.addEventListener("resize", function () {
    location.reload(); // Recargar la página cuando cambia la resolución
  });
  