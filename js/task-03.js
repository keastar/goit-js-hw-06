const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const GalleryEl = document.querySelector('.gallery');

const elements = images
  .map((image) => `<li class = "mySlides fade" ><img class = "gallery_img" src = "${image.url}" alt = "${image.alt}" > </li>`)
  .join("");

console.log(elements);
GalleryEl.insertAdjacentHTML("afterbegin", elements);


// Создание коллекции разметки элементов: 
// Получаем массив элементов, где для каждой картинки
// создаем li и img теги, которые по итогу вставляем
// в дерево DOM в ul с классом "gallery".

// const elements = images.map(image => {
//   const LiForImgEl = document.createElement('li');
//   LiForImgEl.classList.add('mySlides');
//   LiForImgEl.classList.add('fade');

//   const ImageEl = document.createElement('img');
//   ImageEl.classList.add('gallery_img');
//   ImageEl.src = image.url;
//   ImageEl.alt = image.alt;

//   LiForImgEl.appendChild(ImageEl);
//   return LiForImgEl;
// });

// console.log(elements);
// GalleryEl.append(...elements);



// Напишем функцию, которая будет получать массив из 3х картинок и
// возвращать массив разметки для этих трех картинок в виде li и img тегов
// и вставлять этот массив в HTML.

// const makeImagesMass = (images) => {
//   return images.map(image => {
//     const LiForImgEl = document.createElement('li');
//     LiForImgEl.classList.add('mySlides');
//     LiForImgEl.classList.add('fade');

//     const ImageEl = document.createElement('img');
//     ImageEl.classList.add('gallery_img');
//     ImageEl.src = image.url;
//     ImageEl.alt = image.alt;

//     LiForImgEl.appendChild(ImageEl);
//     return LiForImgEl;
//   });
// };

// const elements = makeImagesMass(images);
// GalleryEl.append(...elements);
// console.log(elements);



