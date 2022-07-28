import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description}) =>
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join("");

galleryContainer.insertAdjacentHTML("beforeend", markup);


galleryContainer.addEventListener("click", handleClick)

function handleClick(event) {
    event.preventDefault();
    console.log(event.target.alt)
    
    var lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
    });
}