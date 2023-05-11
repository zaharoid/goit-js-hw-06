const listRef = document.querySelector('#categories');

const childrenOfList = listRef.children;
console.log(`Number of categories: ${childrenOfList.length}`);

const children = [...childrenOfList]


children.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});
