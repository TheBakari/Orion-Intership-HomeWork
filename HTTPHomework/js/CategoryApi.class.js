export class CategoryApi {
  constructor() {}
  getCategoriesApi() {
    return fetch("http://localhost:3001/category")
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => {
        console.log("There is a problem with server check for the warning");
      });
  }

  addCategoryApi(catName) {
    //Json je uvek string
    fetch("http://localhost:3001/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ categoryName: catName }),
    }).catch((error) => {
      console.log("Provera da li radi");
    });
  }

  deleteCategoryApi(id) {
    fetch("http://localhost:3001/category/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).catch((error) => {
      console.log("Provera da li radi DELETE");
    });
  }
}
