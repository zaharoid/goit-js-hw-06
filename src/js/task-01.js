const listRef = document.querySelector('#categories');

const childrenOfList = listRef.children;
console.log(`Number of categories: ${childrenOfList.length}`);

const children = [...childrenOfList]
const arr = [1, 2, 3, 4]


children.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});
