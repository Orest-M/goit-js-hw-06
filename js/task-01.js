const categoriesEl = document.querySelector('#categories');

// 1
const categoriesItems = categoriesEl.children.length;
console.log(categoriesItems);
//

// 2
const categoriesItemsEl = [...categoriesEl.children];
categoriesItemsEl.forEach((element) => {
  console.log('Category:', element.firstElementChild.textContent);
  console.log('Elements:', element.lastElementChild.childElementCount);
});
//
