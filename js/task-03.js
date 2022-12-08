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

//Создание коллекции разметки элементов: 
// Получаем массив элементов, где для каждой картинки
// создаем li и img теги, которые по итогу вставляем
// в дерево DOM в ul с классом "gallery".

const GalleryEl = document.querySelector('.gallery');

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

const makeImagesMass = (images) => {
  return images.map(image => {
    const LiForImgEl = document.createElement('li');
    LiForImgEl.classList.add('mySlides');
    LiForImgEl.classList.add('fade');

    const ImageEl = document.createElement('img');
    ImageEl.classList.add('gallery_img');
    ImageEl.src = image.url;
    ImageEl.alt = image.alt;

    LiForImgEl.appendChild(ImageEl);
    return LiForImgEl;
  });
};

const elements = makeImagesMass(images);
GalleryEl.append(...elements);
console.log(elements);



// const GalleryEl = document.querySelector('.gallery');
// GalleryEl.appendChild(LiForImgEl);
// GalleryEl.insertAdjacentHTML('afterbegin', ImageEl);

// const ButPrevEl = document.createElement('a');
// ButPrevEl.classList.add('prev');
// ButPrevEl.textContent('&#10094');
// ButPrevEl.onclick(plusSlides(-1));

// const ButNextEl = document.createElement('a');
// ButNextEl.classList.add('next');
// ButPrevEl.textContent('#10095');
// ButNextEl.onclick(plusSlides(1));

// document.body.appendChild(ButPrevEl);
// document.body.appendChild(ButNextEl);

// // let slideIndex = 1;
// // showSlides(slideIndex);

// // function plusSlides(n) {
// //   showSlides(slideIndex += n);
// // }

// // function currentSlide(n) {
// //   showSlides(slideIndex = n);
// // }

// // function showSlides(n) {
// //   let i;
// //   let slides = document.getElementsByClassName("mySlides");
// //   let dots = document.getElementsByClassName("dot");
// //   if (n > slides.length) {slideIndex = 1}    
// //   if (n < 1) {slideIndex = slides.length}
// //   for (i = 0; i < slides.length; i++) {
// //       slides[i].style.display = "none";  
// //   }
// //   for (i = 0; i < dots.length; i++) {
// //       dots[i].className = dots[i].className.replace("active", "");
// //   }
// //   slides[slideIndex-1].style.display = "block";  
// //   dots[slideIndex-1].className += "active";
// // }

