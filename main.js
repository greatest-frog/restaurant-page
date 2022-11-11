/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/Cards/Cards.js":
/*!***********************************!*\
  !*** ./components/Cards/Cards.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cards": () => (/* binding */ Cards)
/* harmony export */ });
/* harmony import */ var _ContactsCard_ContactsCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ContactsCard/ContactsCard */ "./components/ContactsCard/ContactsCard.js");
/* harmony import */ var _HomeCard_HomeCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HomeCard/HomeCard */ "./components/HomeCard/HomeCard.js");
/* harmony import */ var _MenuCard_MenuCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MenuCard/MenuCard */ "./components/MenuCard/MenuCard.js");




const Cards = () => {
  const cards = document.createElement("div");
  cards.classList.add("card");

  let activeCard = 0;
  const categories = [
    document.querySelector(".home"),
    document.querySelector(".menu"),
    document.querySelector(".contacts"),
  ];
  const categoryCards = [_HomeCard_HomeCard__WEBPACK_IMPORTED_MODULE_1__.HomeCard, _MenuCard_MenuCard__WEBPACK_IMPORTED_MODULE_2__.MenuCard, _ContactsCard_ContactsCard__WEBPACK_IMPORTED_MODULE_0__.ContactsCard];

  const changeCategory = (index) => {
    activeCard = index;
    cards.innerHTML = null;
    cards.appendChild(categoryCards[index]);
  };

  categories[activeCard].classList.add("active_category");
  changeCategory(activeCard);

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    category.addEventListener("click", (e) => {
      document
        .querySelector(".active_category")
        ?.classList.remove("active_category");
      e.target.classList.add("active_category");
      if (i != activeCard) {
        changeCategory(i);
      }
    });
  }

  return cards;
};


/***/ }),

/***/ "./components/Categories/Categories.js":
/*!*********************************************!*\
  !*** ./components/Categories/Categories.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Categories": () => (/* binding */ Categories)
/* harmony export */ });
/* harmony import */ var _Category_Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Category/Category */ "./components/Category/Category.js");


const Categories = (() => {
  const categories = document.createElement("ul");
  categories.classList.add("categories");

  ["Home", "Menu", "Contacts"].forEach((el) => {
    categories.appendChild((0,_Category_Category__WEBPACK_IMPORTED_MODULE_0__.Category)(el));
  });

  return categories;
})();


/***/ }),

/***/ "./components/Category/Category.js":
/*!*****************************************!*\
  !*** ./components/Category/Category.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Category": () => (/* binding */ Category)
/* harmony export */ });
const Category = (el) => {
  const category = document.createElement("li");
  category.classList.add("category");
  category.classList.add(el.toLowerCase());
  category.textContent = el;

  return category;
};


/***/ }),

/***/ "./components/ContactsCard/ContactsCard.js":
/*!*************************************************!*\
  !*** ./components/ContactsCard/ContactsCard.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsCard": () => (/* binding */ ContactsCard)
/* harmony export */ });
const ContactsCard = (() => {
  const contactsCard = document.createElement("div");

  const title = document.createElement("h2");
  title.textContent = "Contacts";
  contactsCard.appendChild(title);

  const phone = document.createElement("p");
  phone.textContent = "Phone: +1 206 555 0100";
  contactsCard.appendChild(phone);

  const email = document.createElement("p");
  email.textContent = "Email: restaurant@example.com";
  contactsCard.appendChild(email);

  return contactsCard;
})();


/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
const Footer = (() => {
  const footer = document.createElement("footer");

  const info = document.createElement("h6");
  info.textContent = "Copyright © Maxim Popov 2022";
  footer.appendChild(info);

  return footer;
})();


/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
const Header = (() => {
  const header = document.createElement("header");

  const name = document.createElement("h1");
  name.textContent = "Restaurant";
  header.appendChild(name);

  const info = document.createElement("div");
  info.classList.add("info");

  const logoLink = document.createElement("a");
  logoLink.classList.add("github");
  const githubImage = document.createElement("img");
  githubImage.src = "./images/GitHub-Mark-Light-32px.png";
  githubImage.alt = "Github logo";
  logoLink.appendChild(githubImage);
  logoLink.href = "https://github.com/greatest-frog";
  info.appendChild(logoLink);

  const projectLink = document.createElement("a");
  projectLink.href = "https://github.com/greatest-frog/restaurant-page";
  projectLink.textContent = "Project page";
  info.appendChild(projectLink);

  header.appendChild(info);
  return header;
})();


/***/ }),

/***/ "./components/HomeCard/HomeCard.js":
/*!*****************************************!*\
  !*** ./components/HomeCard/HomeCard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeCard": () => (/* binding */ HomeCard)
/* harmony export */ });
const HomeCard = (() => {
  const homeCard = document.createElement("div");
  homeCard.classList.add("home_card");

  const title = document.createElement("h2");
  title.textContent = "Welcome to Restaurant!";
  homeCard.appendChild(title);

  const description = document.createElement("p");
  description.textContent =
    "Our restaurant is famous for its excellent cuisine, beautiful interiors and first-class service.";
  homeCard.appendChild(description);

  return homeCard;
})();


/***/ }),

/***/ "./components/Meal/Meal.js":
/*!*********************************!*\
  !*** ./components/Meal/Meal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Meal": () => (/* binding */ Meal)
/* harmony export */ });
const Meal = (meal) => {
  const mealDiv = document.createElement("div");
  mealDiv.classList.add("meal");

  const image = document.createElement("img");
  image.classList.add("meal_image");
  image.src = meal.image;
  image.alt = meal.name;
  mealDiv.appendChild(image);

  const title = document.createElement("h3");
  title.textContent = meal.name;
  mealDiv.appendChild(title);

  const description = document.createElement("p");
  description.textContent = meal.description;
  mealDiv.append(description);

  return mealDiv;
};


/***/ }),

/***/ "./components/MenuCard/MenuCard.js":
/*!*****************************************!*\
  !*** ./components/MenuCard/MenuCard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuCard": () => (/* binding */ MenuCard)
/* harmony export */ });
/* harmony import */ var _Meal_Meal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Meal/Meal */ "./components/Meal/Meal.js");


const mealsMoc = [
  {
    name: "Shrimps",
    image: "./images/shrimps.jpg",
    description: "Tiger shrimps with soy sauce",
  },
  {
    name: "Steak",
    image: "./images/steak.jpg",
    description: "Excellent steaks of any kind of roasting",
  },
  {
    name: "Pasta",
    image: "./images/pasta.jpg",
    description: "Pasta from the best Italian chefs",
  },
  {
    name: "Salad",
    image: "./images/salad.jpg",
    description: "Olive oil salad with Parma cheese",
  },
];

const MenuCard = (() => {
  const menuCard = document.createElement("div");
  menuCard.classList.add("menu_card");

  const title = document.createElement("h2");
  title.textContent = "Menu";
  menuCard.appendChild(title);

  const meals = document.createElement("div");
  meals.classList.add("meals");
  mealsMoc.forEach((meal) => meals.appendChild((0,_Meal_Meal__WEBPACK_IMPORTED_MODULE_0__.Meal)(meal)));
  menuCard.appendChild(meals);

  return menuCard;
})();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Categories_Categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Categories/Categories */ "./components/Categories/Categories.js");
/* harmony import */ var _components_Cards_Cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Cards/Cards */ "./components/Cards/Cards.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");





const contentRoot = document.getElementById("content");

contentRoot.appendChild(_components_Header_Header__WEBPACK_IMPORTED_MODULE_0__.Header);

contentRoot.appendChild(_components_Categories_Categories__WEBPACK_IMPORTED_MODULE_1__.Categories);

const mainWrapper = document.createElement("div");
mainWrapper.classList.add("main-wrapper");
mainWrapper.appendChild((0,_components_Cards_Cards__WEBPACK_IMPORTED_MODULE_2__.Cards)());
contentRoot.appendChild(mainWrapper);

contentRoot.append(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__.Footer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUNaO0FBQ0E7O0FBRXpDO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0RBQVEsRUFBRSx3REFBUSxFQUFFLG9FQUFZOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDZ0Q7O0FBRXpDO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQiw0REFBUTtBQUNuQyxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWE07QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJNO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDUk07QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxQk07QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2RNO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25Cb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLGdEQUFJO0FBQ25EOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7OztVQ3ZDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnFEO0FBQ1k7QUFDZjtBQUNHOztBQUVyRDs7QUFFQSx3QkFBd0IsNkRBQU07O0FBRTlCLHdCQUF3Qix5RUFBVTs7QUFFbEM7QUFDQTtBQUNBLHdCQUF3Qiw4REFBSztBQUM3Qjs7QUFFQSxtQkFBbUIsNkRBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9jb21wb25lbnRzL0NhcmRzL0NhcmRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL2NvbXBvbmVudHMvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL2NvbXBvbmVudHMvQ2F0ZWdvcnkvQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vY29tcG9uZW50cy9Db250YWN0c0NhcmQvQ29udGFjdHNDYXJkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vY29tcG9uZW50cy9Ib21lQ2FyZC9Ib21lQ2FyZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9jb21wb25lbnRzL01lYWwvTWVhbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9jb21wb25lbnRzL01lbnVDYXJkL01lbnVDYXJkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWN0c0NhcmQgfSBmcm9tIFwiLi4vQ29udGFjdHNDYXJkL0NvbnRhY3RzQ2FyZFwiO1xuaW1wb3J0IHsgSG9tZUNhcmQgfSBmcm9tIFwiLi4vSG9tZUNhcmQvSG9tZUNhcmRcIjtcbmltcG9ydCB7IE1lbnVDYXJkIH0gZnJvbSBcIi4uL01lbnVDYXJkL01lbnVDYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBDYXJkcyA9ICgpID0+IHtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkcy5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcblxuICBsZXQgYWN0aXZlQ2FyZCA9IDA7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RzXCIpLFxuICBdO1xuICBjb25zdCBjYXRlZ29yeUNhcmRzID0gW0hvbWVDYXJkLCBNZW51Q2FyZCwgQ29udGFjdHNDYXJkXTtcblxuICBjb25zdCBjaGFuZ2VDYXRlZ29yeSA9IChpbmRleCkgPT4ge1xuICAgIGFjdGl2ZUNhcmQgPSBpbmRleDtcbiAgICBjYXJkcy5pbm5lckhUTUwgPSBudWxsO1xuICAgIGNhcmRzLmFwcGVuZENoaWxkKGNhdGVnb3J5Q2FyZHNbaW5kZXhdKTtcbiAgfTtcblxuICBjYXRlZ29yaWVzW2FjdGl2ZUNhcmRdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVfY2F0ZWdvcnlcIik7XG4gIGNoYW5nZUNhdGVnb3J5KGFjdGl2ZUNhcmQpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllc1tpXTtcbiAgICBjYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZV9jYXRlZ29yeVwiKVxuICAgICAgICA/LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVfY2F0ZWdvcnlcIik7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlX2NhdGVnb3J5XCIpO1xuICAgICAgaWYgKGkgIT0gYWN0aXZlQ2FyZCkge1xuICAgICAgICBjaGFuZ2VDYXRlZ29yeShpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjYXJkcztcbn07XG4iLCJpbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gXCIuLi9DYXRlZ29yeS9DYXRlZ29yeVwiO1xuXG5leHBvcnQgY29uc3QgQ2F0ZWdvcmllcyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNhdGVnb3JpZXMuY2xhc3NMaXN0LmFkZChcImNhdGVnb3JpZXNcIik7XG5cbiAgW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0c1wiXS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGNhdGVnb3JpZXMuYXBwZW5kQ2hpbGQoQ2F0ZWdvcnkoZWwpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNhdGVnb3JpZXM7XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IENhdGVnb3J5ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnlcIik7XG4gIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoZWwudG9Mb3dlckNhc2UoKSk7XG4gIGNhdGVnb3J5LnRleHRDb250ZW50ID0gZWw7XG5cbiAgcmV0dXJuIGNhdGVnb3J5O1xufTtcbiIsImV4cG9ydCBjb25zdCBDb250YWN0c0NhcmQgPSAoKCkgPT4ge1xuICBjb25zdCBjb250YWN0c0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdHNcIjtcbiAgY29udGFjdHNDYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwaG9uZS50ZXh0Q29udGVudCA9IFwiUGhvbmU6ICsxIDIwNiA1NTUgMDEwMFwiO1xuICBjb250YWN0c0NhcmQuYXBwZW5kQ2hpbGQocGhvbmUpO1xuXG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVtYWlsLnRleHRDb250ZW50ID0gXCJFbWFpbDogcmVzdGF1cmFudEBleGFtcGxlLmNvbVwiO1xuICBjb250YWN0c0NhcmQuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gIHJldHVybiBjb250YWN0c0NhcmQ7XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5cbiAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKTtcbiAgaW5mby50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIE1heGltIFBvcG92IDIwMjJcIjtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gIHJldHVybiBmb290ZXI7XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9IFwiUmVzdGF1cmFudFwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG5cbiAgY29uc3QgbG9nb0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbG9nb0xpbmsuY2xhc3NMaXN0LmFkZChcImdpdGh1YlwiKTtcbiAgY29uc3QgZ2l0aHViSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBnaXRodWJJbWFnZS5zcmMgPSBcIi4vaW1hZ2VzL0dpdEh1Yi1NYXJrLUxpZ2h0LTMycHgucG5nXCI7XG4gIGdpdGh1YkltYWdlLmFsdCA9IFwiR2l0aHViIGxvZ29cIjtcbiAgbG9nb0xpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSW1hZ2UpO1xuICBsb2dvTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vZ3JlYXRlc3QtZnJvZ1wiO1xuICBpbmZvLmFwcGVuZENoaWxkKGxvZ29MaW5rKTtcblxuICBjb25zdCBwcm9qZWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBwcm9qZWN0TGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vZ3JlYXRlc3QtZnJvZy9yZXN0YXVyYW50LXBhZ2VcIjtcbiAgcHJvamVjdExpbmsudGV4dENvbnRlbnQgPSBcIlByb2plY3QgcGFnZVwiO1xuICBpbmZvLmFwcGVuZENoaWxkKHByb2plY3RMaW5rKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gIHJldHVybiBoZWFkZXI7XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IEhvbWVDYXJkID0gKCgpID0+IHtcbiAgY29uc3QgaG9tZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lQ2FyZC5jbGFzc0xpc3QuYWRkKFwiaG9tZV9jYXJkXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBSZXN0YXVyYW50IVwiO1xuICBob21lQ2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgIFwiT3VyIHJlc3RhdXJhbnQgaXMgZmFtb3VzIGZvciBpdHMgZXhjZWxsZW50IGN1aXNpbmUsIGJlYXV0aWZ1bCBpbnRlcmlvcnMgYW5kIGZpcnN0LWNsYXNzIHNlcnZpY2UuXCI7XG4gIGhvbWVDYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICByZXR1cm4gaG9tZUNhcmQ7XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IE1lYWwgPSAobWVhbCkgPT4ge1xuICBjb25zdCBtZWFsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVhbERpdi5jbGFzc0xpc3QuYWRkKFwibWVhbFwiKTtcblxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJtZWFsX2ltYWdlXCIpO1xuICBpbWFnZS5zcmMgPSBtZWFsLmltYWdlO1xuICBpbWFnZS5hbHQgPSBtZWFsLm5hbWU7XG4gIG1lYWxEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG1lYWwubmFtZTtcbiAgbWVhbERpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBtZWFsLmRlc2NyaXB0aW9uO1xuICBtZWFsRGl2LmFwcGVuZChkZXNjcmlwdGlvbik7XG5cbiAgcmV0dXJuIG1lYWxEaXY7XG59O1xuIiwiaW1wb3J0IHsgTWVhbCB9IGZyb20gXCIuLi9NZWFsL01lYWxcIjtcblxuY29uc3QgbWVhbHNNb2MgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlNocmltcHNcIixcbiAgICBpbWFnZTogXCIuL2ltYWdlcy9zaHJpbXBzLmpwZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRpZ2VyIHNocmltcHMgd2l0aCBzb3kgc2F1Y2VcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU3RlYWtcIixcbiAgICBpbWFnZTogXCIuL2ltYWdlcy9zdGVhay5qcGdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFeGNlbGxlbnQgc3RlYWtzIG9mIGFueSBraW5kIG9mIHJvYXN0aW5nXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlBhc3RhXCIsXG4gICAgaW1hZ2U6IFwiLi9pbWFnZXMvcGFzdGEuanBnXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGFzdGEgZnJvbSB0aGUgYmVzdCBJdGFsaWFuIGNoZWZzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNhbGFkXCIsXG4gICAgaW1hZ2U6IFwiLi9pbWFnZXMvc2FsYWQuanBnXCIsXG4gICAgZGVzY3JpcHRpb246IFwiT2xpdmUgb2lsIHNhbGFkIHdpdGggUGFybWEgY2hlZXNlXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgTWVudUNhcmQgPSAoKCkgPT4ge1xuICBjb25zdCBtZW51Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDYXJkLmNsYXNzTGlzdC5hZGQoXCJtZW51X2NhcmRcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIG1lbnVDYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBtZWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lYWxzLmNsYXNzTGlzdC5hZGQoXCJtZWFsc1wiKTtcbiAgbWVhbHNNb2MuZm9yRWFjaCgobWVhbCkgPT4gbWVhbHMuYXBwZW5kQ2hpbGQoTWVhbChtZWFsKSkpO1xuICBtZW51Q2FyZC5hcHBlbmRDaGlsZChtZWFscyk7XG5cbiAgcmV0dXJuIG1lbnVDYXJkO1xufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IHsgQ2F0ZWdvcmllcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NhdGVnb3JpZXMvQ2F0ZWdvcmllc1wiO1xuaW1wb3J0IHsgQ2FyZHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkcy9DYXJkc1wiO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xuXG5jb25zdCBjb250ZW50Um9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuY29udGVudFJvb3QuYXBwZW5kQ2hpbGQoSGVhZGVyKTtcblxuY29udGVudFJvb3QuYXBwZW5kQ2hpbGQoQ2F0ZWdvcmllcyk7XG5cbmNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm1haW5XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLXdyYXBwZXJcIik7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZChDYXJkcygpKTtcbmNvbnRlbnRSb290LmFwcGVuZENoaWxkKG1haW5XcmFwcGVyKTtcblxuY29udGVudFJvb3QuYXBwZW5kKEZvb3Rlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=