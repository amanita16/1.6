/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/brends.js":
/*!**************************!*\
  !*** ./src/js/brends.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  }
});

function showBrends() {
  var brendsVisible = document.querySelector(".brends__visible");
  var brendsHidden = document.querySelectorAll(".hidden");
  var brendsImage = document.querySelector(".brends__visible-img");
  brendsHidden.forEach(function (item) {
    brendsVisible.addEventListener("click", function () {
      if (item.style.display === "none") {
        item.style.display = "flex";
        brendsVisible.innerHTML = "Cкрыть";
        brendsVisible.style.marginTop = "40px";
        brendsImage.style.transform = "rotate(180deg)";
      } else {
        item.style.display = "none";
        brendsVisible.innerHTML = "Показать все";
        brendsImage.style.transform = "rotate(0deg)";
      }
    });
  });
}

showBrends();

/***/ }),

/***/ "./src/js/burger.js":
/*!**************************!*\
  !*** ./src/js/burger.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var active = document.querySelectorAll(".nav__btn");

function navBtn(active) {
  active.forEach(function (item) {
    item.classList.remove('active-btn');
    item.addEventListener("click", function () {
      var activeBtn = item;
      active.forEach(function (item) {
        item.classList.remove('active-btn');
      });
      activeBtn.classList.add('active-btn');
    });
  });
}

navBtn(active);
var activeLang = document.querySelectorAll(".footer-burger__lang-btn");

function footerBtn(activeLang) {
  activeLang.forEach(function (item) {
    item.classList.remove('active');
    item.addEventListener("click", function () {
      var activeBtnLang = item;
      activeLang.forEach(function (item) {
        item.classList.remove('active');
      });
      activeBtnLang.classList.add('active');
    });
  });
}

footerBtn(activeLang);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./src/js/main.js");
/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burger.js */ "./src/js/burger.js");
/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_burger_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modal_comm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-comm.js */ "./src/js/modal-comm.js");
/* harmony import */ var _modal_phone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-phone.js */ "./src/js/modal-phone.js");
/* harmony import */ var _brends_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brends.js */ "./src/js/brends.js");
/* harmony import */ var _brends_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_brends_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _repair_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./repair.js */ "./src/js/repair.js");
/* harmony import */ var _repair_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_repair_js__WEBPACK_IMPORTED_MODULE_6__);
!(function webpackMissingModule() { var e = new Error("Cannot find module './prices.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());









/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
var active = document.querySelectorAll(".services__btn");
active.forEach(function (item) {
  item.addEventListener("click", function () {
    var activeBtn = item;
    active.forEach(function (item) {
      item.classList.remove('active');
    });
    activeBtn.classList.add('active');
  });
});
var menu = document.querySelector('.burger-menu');

function burgerMenu() {
  var burger = document.querySelector('.header__menu-link');
  var empty = document.querySelector('.empty');
  var closeMenu = document.querySelector('.header-burger-menu-link');

  if (window.innerWidth <= 1120) {
    burger.addEventListener("click", function (event) {
      event.preventDefault();
      menu.style.display = "flex";
    });
    closeMenu.addEventListener("click", function (event) {
      event.preventDefault();
      menu.style.display = "none";
    });
    empty.addEventListener("click", function () {
      menu.style.display = "none";
    });
  }
}

burgerMenu();

function textHidden() {
  var textDesc = document.querySelector('.services__discription-hidden');
  var textHidd = document.querySelector('.discription-text__hidden');
  var textHiddImg = document.querySelector('.services__visible-img');
  textHidd.style.display = "none";
  textDesc.addEventListener('click', function () {
    // textHidd.style.display = 'block'
    if (textHidd.style.display === "none") {
      textHidd.style.display = 'block';
      textDesc.innerHTML = "Cкрыть";
      textHiddImg.style.transform = "rotate(180deg)";
    } else {
      textHidd.style.display = "none";
      textDesc.innerHTML = "Читать далее";
      textHiddImg.style.transform = "rotate(0deg)";
    }
  });
}

textHidden();

function tab() {
  var tabItem = document.querySelectorAll('.services__item');
  var tabContent = document.querySelectorAll('.tab');
  var tabName;
  tabItem.forEach(function (item) {
    item.addEventListener('click', selectTabNav);
  });

  function selectTabNav() {
    tabItem.forEach(function (item) {
      item.classList.remove('is-active');
    });
    this.classList.add('.is-active');
    tabName = this.getAttribute('data-tab');
    selectTabContent(tabName);
  }

  function selectTabContent() {
    tabContent.forEach(function (item) {
      item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
    });
  }
}

tab();

/***/ }),

/***/ "./src/js/modal-comm.js":
/*!******************************!*\
  !*** ./src/js/modal-comm.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./src/js/main.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function modalComm() {
  var modal = document.querySelector('.modal-comm');
  var message = document.querySelectorAll('.modal-message');
  var modalClose = document.querySelector('.modal-comm__close-link');
  var modalEmpty = document.querySelector('.modal-comm__empty');
  modal.style.display = "none";

  var _iterator = _createForOfIteratorHelper(message),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      item.addEventListener("click", function (event) {
        event.preventDefault();
        modal.style.display = "flex";
        _main_js__WEBPACK_IMPORTED_MODULE_0__["menu"].style.display = "none";
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  modalClose.addEventListener("click", function (event) {
    event.preventDefault();
    modal.style.display = "none";
  });
  modalEmpty.addEventListener("click", function (event) {
    modal.style.display = "none";
  });
}

modalComm();

/***/ }),

/***/ "./src/js/modal-phone.js":
/*!*******************************!*\
  !*** ./src/js/modal-phone.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./src/js/main.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function modal() {
  var modalPhone = document.querySelector('.modal-phones');
  var phone = document.querySelectorAll('.modal-phone');
  var modalClosePhones = document.querySelector('.modal-phones__close-link');
  var modalEmptyPhones = document.querySelector('.modal-phones__empty');
  modalPhone.style.display = "none";

  var _iterator = _createForOfIteratorHelper(phone),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      item.addEventListener("click", function (event) {
        event.preventDefault();
        modalPhone.style.display = "flex";
        _main_js__WEBPACK_IMPORTED_MODULE_0__["menu"].style.display = "none";
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  modalClosePhones.addEventListener("click", function (event) {
    event.preventDefault();
    modalPhone.style.display = "none";
  });
  modalEmptyPhones.addEventListener("click", function (event) {
    modalPhone.style.display = "none";
  });
}

modal();

/***/ }),

/***/ "./src/js/repair.js":
/*!**************************!*\
  !*** ./src/js/repair.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function showRepair() {
  var repairVisible = document.querySelector(".repair__visible");
  var repairHidden = document.querySelectorAll(".repair__item-hidden");
  var repairImage = document.querySelector(".repair__visible-img"); // const repairFour = document.querySelector('.repair__item-four')

  repairHidden.forEach(function (item) {
    repairVisible.addEventListener("click", function () {
      if (item.style.display === "none") {
        item.style.display = "flex"; // repairFour.style.display = "flex";

        repairVisible.innerHTML = "Cкрыть";
        repairVisible.style.marginTop = "40px";
        repairImage.style.transform = "rotate(180deg)";
      } else {
        item.style.display = "none"; // if (window.innerWidth <= 768){
        //   repairFour.style.display = "none";
        // }

        repairVisible.innerHTML = "Показать все";
        repairImage.style.transform = "rotate(0deg)";
      }
    });
  });
}

showRepair();

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map