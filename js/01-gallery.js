import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description}) =>
`<div class="gallery__item">
<a class="gallery__link" href='${original}'>
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/>
</a>
</div>`).join("");

galleryContainer.insertAdjacentHTML("beforeend", markup);

galleryContainer.addEventListener("click", handleClick)

function handleClick(event) {    
    event.preventDefault();
    if (event.target.parentNode.nodeName !== "A") {
        return;
    }
    
    const instance = basicLightbox.create(`<img src="${event.target.parentNode.href}">`)
    instance.show()

    // const visible = instance.visible()
    // if (visible) {   
        window.addEventListener('keydown', (event) => {
            if (event.code === 'Escape') {
                instance.close()
            }},{once:true})
        }
    // }