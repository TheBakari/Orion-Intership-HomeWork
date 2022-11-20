import { CategoryApi } from "./CategoryApi.class.js";
const categoriesTable = document.getElementById("categories");
const addCategoryBtn = document.getElementById("addCategory");
const categoryName = document.getElementById("categoryName");

//console.log(categoryDelete);

const fetchCategories = new CategoryApi();
const categories = await fetchCategories.getCategoriesApi();

categories.map((category) => {
  categoriesTable.innerHTML += `<td >${category.id}</td> <td>${category.categoryName}</td><td class="deleteCategory" data-id="${category.id}" style="cursor:pointer; color:red" >Delete</td>`;
});

addCategoryBtn.addEventListener("click", function () {
  fetchCategories.addCategoryApi(categoryName.value);
});

const categoryDelete = document.querySelectorAll(".deleteCategory");
categoryDelete.forEach((item) => {
  item.addEventListener("click", () => {
    const categoryId = item.getAttribute("data-id");
    fetchCategories.deleteCategoryApi(categoryId);
    //console.log(categoryId);
  });
});
