function generateList(array) {
  const list = document.createElement("ul");

  for (let i = 0; i < array.length; i++) {
    const item = document.createElement("li");

    if (Array.isArray(array[i])) {
      const subList = document.createElement("ul");

      for (let j = 0; j < array[i].length; j++) {
        const subItem = document.createElement("li");
        subItem.textContent = array[i][j];
        subList.appendChild(subItem);
      }

      item.appendChild(subList);
    } else {
      item.textContent = array[i];
    }

    list.appendChild(item);
  }

  return list;
}
const myList = document.getElementById("myList");
const myArray = [1, 2, 3];

myList.appendChild(generateList(myArray));