/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/maskPhone */ \"./modules/maskPhone.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_fancybox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fancybox */ \"./modules/fancybox.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_fancybox__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('20 december 2022', 0);\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('20 december 2022', 1);\r\n(0,_modules_maskPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('[name=\"phone\"]');\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\r\n    formId: 'action-form',\r\n    someElement: [\r\n        {\r\n            type: 'block',\r\n            id: 'calc'\r\n        }\r\n    ] \r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\r\n    formId: 'action-form2',\r\n    someElement: [\r\n        {\r\n            type: 'block',\r\n            id: 'calc'\r\n        }\r\n    ] \r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\r\n    formId: 'callback-form',\r\n    someElement: [\r\n        {\r\n            type: 'block',\r\n            id: 'calc'\r\n        }\r\n    ] \r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\r\n    formId: 'application-form',\r\n    someElement: [\r\n        {\r\n            type: 'block',\r\n            id: 'calc'\r\n        }\r\n    ] \r\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n    const calcType = document.querySelector('#calc-type')\r\n    const calcInput = document.querySelector('#calc-input')\r\n    const calcTotal = document.querySelector('#calc-total')\r\n    const calcMaterial = document.querySelector('#calc-type-material')\r\n    const calcBlock = document.querySelector('#calc')\r\n\r\n\r\n    if(calcBlock) {\r\n        calcBlock.addEventListener('input', (e) => {\r\n        \r\n            if(e.target === calcType || e.target === calcInput || \r\n                e.target === calcMaterial) {\r\n\r\n    \r\n                calcTotal.value = ((+calcType.value * +calcInput.value * +calcMaterial.value).toFixed(1))\r\n            }\r\n        })\r\n    }\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/checkValidation.js":
/*!************************************!*\
  !*** ./modules/checkValidation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkValidation\": () => (/* binding */ checkValidation)\n/* harmony export */ });\nconst checkValidation = elems => {\r\n    let status = true;\r\n    elems.forEach(elem => {\r\n        switch (elem.getAttribute('name')) {\r\n            case 'fio':\r\n                if(/^[а-яёa-z]{2,}/gi.test(elem.value)) {\r\n                    elem.classList.add('success')\r\n                    elem.classList.remove('error')\r\n                } else {\r\n                    elem.classList.add('error')\r\n                    elem.classList.remove('success')\r\n                }\r\n                break;\r\n            case 'phone':\r\n                if(elem.value.length >= 17) {\r\n                    elem.classList.add('success')\r\n                    elem.classList.remove('error')\r\n                } else {\r\n                    elem.classList.add('error')\r\n                    elem.classList.remove('success')\r\n                }\r\n                break;\r\n            default: return;\r\n        }\r\n        \r\n        elems.forEach(input => {\r\n            if (input.classList.contains('error')) {\r\n                status = false\r\n            }\r\n        })\r\n    })\r\n    return status\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/checkValidation.js?");

/***/ }),

/***/ "./modules/fancybox.js":
/*!*****************************!*\
  !*** ./modules/fancybox.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fancybox = () => {\r\n\r\n    const sertificate = document.querySelectorAll(\".sertificate-document\")\r\n    const modal = document.querySelector(\".img-modal\")\r\n    const closeModal = document.querySelector(\".img-modal__close\") \r\n\r\n    sertificate.forEach(item => {\r\n        item.removeAttribute('href')\r\n        item.classList.add('document-inner')\r\n        item.addEventListener(\"click\", () => {\r\n            modal.style.display = 'block'\r\n        })\r\n    })\r\n    closeModal.addEventListener(\"click\", () => {\r\n        modal.style.display = 'none'\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fancybox);\n\n//# sourceURL=webpack:///./modules/fancybox.js?");

/***/ }),

/***/ "./modules/maskPhone.js":
/*!******************************!*\
  !*** ./modules/maskPhone.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst maskPhone = (selector, masked = '+7 (___) ___-__-__') => {\r\n    const elems = document.querySelectorAll(selector);\r\n  \r\n    const mask = event => {\r\n      const {keyCode, target} = event;\r\n      const template = masked;\r\n      const\tdef = template.replace(/\\D/g, '');\r\n      const\tval = target.value.replace(/\\D/g, '');\r\n  \r\n      let i = 0;\r\n      let newValue = template.replace(/[_\\d]/g, (a) =>\r\n        i < val.length ? val.charAt(i++) || def.charAt(i) : a);\r\n      \r\n      i = newValue.indexOf('_');\r\n  \r\n      if (i !== -1)\r\n        newValue = newValue.slice(0, i);\r\n  \r\n      let reg = template.substr(0, target.value.length)\r\n        .replace(/_+/g, ({length}) => `\\\\d{1,${length}}`)\r\n        .replace(/[+()]/g, '\\\\$&');\r\n  \r\n      reg = new RegExp(`^${reg}$`);\r\n  \r\n      if (!reg.test(target.value) || target.value.length < 5 || keyCode > 47 && keyCode < 58) {\r\n        target.value = newValue;\r\n      }\r\n  \r\n      if (event.type == 'blur' && target.value.length < 5) {\r\n        target.value = '';\r\n      }\r\n    };\r\n  \r\n    for (const elem of elems) {\r\n        elem.addEventListener(\"input\", mask);\r\n        elem.addEventListener(\"focus\", mask);\r\n        elem.addEventListener(\"blur\", mask);\r\n    }\r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskPhone);\n\n//# sourceURL=webpack:///./modules/maskPhone.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    \r\n    const overlay = document.querySelector('.overlay')\r\n\r\n    //Модальное окно при клике на Заказать звонок\r\n\r\n    const btnCall = document.querySelector('.col-sm-12 .button')\r\n    const modalCall = document.querySelector('.header-modal')\r\n    const modalCallClose = document.querySelector('.header-modal__close')\r\n\r\n\r\n    // console.log(btnCall);\r\n\r\n    const viewModal = (btn, modal) => {\r\n        btn.addEventListener('click', (e) => {\r\n            e.preventDefault()\r\n            modal.style.display = 'block'\r\n            overlay.style.display = 'block'\r\n        })\r\n\r\n    }\r\n    const closeModal = (modal, close) => {\r\n        close.addEventListener('click', (e) => {\r\n                modal.style.display = 'none'\r\n                overlay.style.display = 'none'\r\n        })\r\n    }\r\n\r\n    viewModal(btnCall, modalCall)\r\n    closeModal(modalCall, modalCallClose)\r\n\r\n    //Модальное окно в блоке наши услуги при клике на кнопку Вызвать замерщика\r\n\r\n    const btnServices = document.querySelectorAll('.service-button')\r\n    const modalServices = document.querySelector('.services-modal')\r\n    const modalServicesClose = document.querySelector('.services-modal__close')\r\n\r\n    btnServices.forEach(btn => btn.addEventListener('click', viewModal(btn, modalServices)))\r\n    closeModal(modalServices, modalServicesClose)\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n\r\n\r\n    const goTopBtn = document.querySelector('.smooth-scroll');\r\n\r\n    const trackScroll = () => {\r\n        let scrolled = window.pageYOffset;\r\n        let coords = document.documentElement.clientHeight;\r\n    \r\n        if (scrolled > coords) {\r\n          goTopBtn.style.display = 'block';\r\n        }\r\n        if (scrolled < coords) {\r\n            goTopBtn.style.display = 'none';\r\n        }\r\n      }\r\n    \r\n      const backToTop = () =>{\r\n        if (window.pageYOffset > 0) {\r\n          window.scrollBy(0, -30);\r\n          setTimeout(backToTop, 0);\r\n        }\r\n      }\r\n    \r\n\r\n    \r\n      window.addEventListener('scroll', trackScroll);\r\n      goTopBtn.addEventListener('click', backToTop);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\r\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _checkValidation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkValidation.js */ \"./modules/checkValidation.js\");\n\r\n\r\nconst sendForm = ({\r\n    formId, \r\n    someElement = [] \r\n}) => {\r\n    const form = document.querySelector(`form[name=${formId}]`)\r\n    const statusBlock = document.createElement('div')\r\n    const loadText = 'Загрузка...'\r\n    const errorText = 'Ошибка'\r\n    const successText = 'Спасибо! Наш менеджер с вами свяжется!'\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: { \r\n                'Content-Type': 'application/json' \r\n            }\r\n        }).then((response) => response.json())\r\n    }\r\n    \r\n    const clearCalc = () => {\r\n        \r\n        const calcType = document.querySelector('#calc-type')\r\n        const calcInput = document.querySelector('#calc-input')\r\n        const calcTotal = document.querySelector('#calc-total')\r\n        const calcMaterial = document.querySelector('#calc-type-material')\r\n        if(calcType) {\r\n            calcType.selectedIndex = '0'\r\n            calcInput.value = ''\r\n            calcTotal.value = ''\r\n            calcMaterial.selectedIndex = '0'\r\n        }\r\n    }\r\n\r\n    const getSomeElement = () => {\r\n        const formElements = form.querySelectorAll('input')\r\n        const formBody = {}\r\n        const formData = new FormData(form)\r\n\r\n        statusBlock.style.color = 'black'\r\n        statusBlock.style.textAlign = 'center'\r\n        form.append(statusBlock)\r\n\r\n        formData.forEach((value, key) => {\r\n            formBody[key] = value\r\n        })\r\n\r\n        someElement.forEach(elem => {\r\n            const calcType = document.querySelector('#calc-type')\r\n            const calcInput = document.querySelector('#calc-input')\r\n            const calcTotal = document.querySelector('#calc-total')\r\n            const calcMaterial = document.querySelector('#calc-type-material')\r\n            if(calcType && elem.type === 'block' && calcTotal.value != '') {\r\n                formBody['Тип объекта'] = calcType.options[calcType.selectedIndex].innerText\r\n                formBody['Общая площадь'] = calcInput.value\r\n                formBody['Стоимость'] = calcTotal.value\r\n                formBody['Тип остекления'] = calcMaterial.options[calcMaterial.selectedIndex].innerText\r\n            }\r\n        })\r\n        return { formBody, formElements }\r\n    }\r\n\r\n    const submitForm = () => {\r\n        const {formBody, formElements} = getSomeElement()\r\n\r\n        if((0,_checkValidation_js__WEBPACK_IMPORTED_MODULE_0__.checkValidation)(formElements)) {\r\n            clearCalc()\r\n\r\n            statusBlock.textContent = loadText\r\n\r\n            sendData(formBody)\r\n            .then(data => {\r\n                statusBlock.textContent = successText\r\n                \r\n                formElements.forEach(input => {\r\n                    if(input.value == 'Окна') {\r\n                        return\r\n                    }\r\n                    input.value = ''\r\n                    input.classList.remove('success')\r\n                })\r\n                console.log(data)\r\n            })\r\n            .catch(error => {\r\n                statusBlock.textContent = errorText\r\n            })\r\n        }setTimeout(() => {\r\n            statusBlock.textContent = '';\r\n        }, 4000);\r\n    }\r\n\r\n    try {\r\n        if(!form) {\r\n            throw new Error('Верните форму на место')\r\n        }\r\n\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault()\r\n            submitForm()\r\n\r\n        })\r\n    } catch(error) {\r\n        console.error(error.message)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const swiperClients = new Swiper('.benefits-inner', {\r\n        // Optional parameters\r\n        // direction: 'vertical',\r\n        loop: true,\r\n      \r\n\r\n        // Navigation arrows\r\n        navigation: {\r\n          nextEl: '.benefits__arrow--right',\r\n          prevEl: '.benefits__arrow--left',\r\n        },\r\n        breakpoints: {\r\n            320: {\r\n                // loop: true,\r\n                slidesPerView: 1,\r\n                slidesPerGroup: 1\r\n                // loopedSlides: 1,\r\n                // spaceBetween: 25\r\n              },\r\n            576: {\r\n                // loop: false,\r\n                slidesPerView: 3,\r\n                slidesPerGroup: 3\r\n                // spaceBetween: 50\r\n            }\r\n        }\r\n      \r\n    });\r\n\r\n    const swiperServices = new Swiper('.row-swiper', {\r\n        // Optional parameters\r\n        \r\n        loop: true,\r\n        allowTouchMove: false,\r\n      \r\n\r\n        // Navigation arrows\r\n        navigation: {\r\n          nextEl: '.services__arrow--right',\r\n          prevEl: '.services__arrow--left',\r\n        },\r\n        breakpoints: {\r\n            320: {\r\n                // loop: true,\r\n                slidesPerView: 1,\r\n                slidesPerGroup: 1,\r\n                direction: 'horizontal', \r\n                \r\n                // loopedSlides: 1,\r\n                // spaceBetween: 25\r\n              },\r\n            576: {\r\n                // loop: false,\r\n                slidesPerView: 2,\r\n                slidesPerGroup: 2,\r\n                direction: 'vertical',\r\n                // spaceBetween: 50\r\n            },\r\n            1200: {\r\n                slidesPerView: 2,\r\n                slidesPerGroup: 2,\r\n                direction: 'horizontal', \r\n            }\r\n\r\n        }\r\n      \r\n    });\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadLine, id) => {\r\n    const timerDays = document.querySelectorAll('.count_1 span')[id]\r\n    const timerHours = document.querySelectorAll('.count_2 span')[id]\r\n    const timerMinutes = document.querySelectorAll('.count_3 span')[id]\r\n    const timerSeconds = document.querySelectorAll('.count_4 span')[id]\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadLine).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let days = Math.floor(timeRemaining / 3600 / 24)\r\n        let hours = Math.floor((timeRemaining / 3600) % 24)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60) \r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        return {timeRemaining, days, hours, minutes, seconds}\r\n    }\r\n\r\n    const updateClock = () => {\r\n        const {timeRemaining, days, hours, minutes, seconds} = getTimeRemaining();\r\n        timerDays.textContent = days\r\n        timerHours.textContent = hours\r\n        timerMinutes.textContent = minutes\r\n        timerSeconds.textContent = seconds\r\n\r\n        if (days < 10) timerDays.textContent = '0' + days;\r\n        if (hours < 10) timerHours.textContent = '0' + hours;\r\n        if (minutes < 10) timerMinutes.textContent = '0' + minutes;\r\n        if (seconds < 10) timerSeconds.textContent = '0' + seconds;\r\n\r\n        if (timeRemaining < 0) {\r\n            timerDays.textContent = '00';\r\n            timerHours.textContent = '00';\r\n            timerMinutes.textContent = '00';\r\n            timerSeconds.textContent = '00';\r\n            return false;\r\n        }\r\n        return true;\r\n    }\r\n\r\n    const startClock = () => {\r\n        if(updateClock()) {\r\n            let idInterval = setInterval(() => !updateClock() && clearInterval(idInterval), 1000)\r\n        }\r\n    }\r\n\r\n    startClock();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _checkValidation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkValidation.js */ \"./modules/checkValidation.js\");\n \r\n\r\nconst validation = () => {\r\n    const calcInput = document.querySelector('#calc-input')\r\n    const inputsText = document.querySelectorAll('input[name=fio]')\r\n    const inputsPhone = document.querySelectorAll('input[name=phone]')\r\n\r\n    \r\n\r\n    const validationCalc = () => {\r\n        if(calcInput) {\r\n            calcInput.addEventListener('input', (e) => {\r\n                e.target.value = e.target.value.replace(/\\D+/,\"\")\r\n            });\r\n        }\r\n    };\r\n\r\n    const validationName = () => {\r\n        inputsText.forEach((item) => {\r\n            item.removeAttribute('required') //удаление валидации которая прописана в строке\r\n            item.addEventListener('input', (e) => {\r\n                e.target.value = e.target.value.replace(/[^а-яёa-z\\-\\s]+/gi, \"\")\r\n\r\n                if (item.classList.contains('error') || item.classList.contains('success')) { \r\n                    (0,_checkValidation_js__WEBPACK_IMPORTED_MODULE_0__.checkValidation)([e.target])\r\n                }\r\n            });\r\n        });\r\n    };\r\n\r\n    const validationPhone = () => {\r\n        inputsPhone.forEach((item) => {\r\n            item.removeAttribute('required') //удаление валидации которая прописана в строке\r\n            item.addEventListener('input', (e) => {\r\n                e.target.value = e.target.value.replace(/[^0-9-()]+/,\"\")\r\n\r\n                if (item.classList.contains('error') || item.classList.contains('success')) { \r\n                    (0,_checkValidation_js__WEBPACK_IMPORTED_MODULE_0__.checkValidation)([e.target])\r\n                }\r\n            });\r\n        });\r\n    };\r\n\r\n\r\n    validationCalc();\r\n    validationPhone();\r\n    validationName();\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./modules/validation.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;