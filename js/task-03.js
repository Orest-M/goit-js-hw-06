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

const list = document.querySelector('.gallery');

list.style.listStyle = 'none';
list.style.display = 'flex';
list.style.justifyContent = 'space-around';
list.style.paddingLeft = '0px';

// const listImages = images.map((image) => {
//   // const li = document.createElement('li');
//   // const img = document.createElement('img');
//   // img.src = image.url;
//   // img.alt = image.alt;
//   // img.style.width = '220px';
//   // img.style.height = '100%';
//   // li.append(img);
//   // list.append(li);
// });

const obj = images
  .map(
    ({ url, alt }) =>
      `<li><img src='${url}' alt='${alt}' width='200px' height='100%'><li>`
  )
  .join('');

list.insertAdjacentHTML('afterbegin', obj);
