export const Categories = (() => {
  const categories = document.createElement("ul");
  categories.classList.add("categories");
  for (let el of ["Home", "Menu", "Contacts"]) {
    const category = document.createElement("li");
    category.classList.add("category");
    category.textContent = el;
    categories.appendChild(category);
  }
  return categories;
})();
