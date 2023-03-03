import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

galleryContainer.addEventListener("click", addOriginalImg);

galleryContainer.insertAdjacentHTML(
  "afterbegin",
  createGalaryMarkup(galleryItems)
);

function createGalaryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

createGalaryMarkup(galleryItems);

function addOriginalImg(events) {
  events.preventDefault();
  if (!events.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${events.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  galleryContainer.addEventListener("keydown", imgClose);

  function imgClose(event) {
    console.log(event.code);
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
