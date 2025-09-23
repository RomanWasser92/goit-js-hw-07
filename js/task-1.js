

const categoriesList = document.querySelector("#categories");
const categoriesItems = document.querySelectorAll(".item");

console.log('Number of categories: ${categoriesItems.lenth}');

categoriesItems.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    const elementsCount = item.querySelectorAll("ul li").length;

    console.log('Category: ${title}');
    console.log('Elements: ${elementsCount}');
});