'use strict';

/**
 * @function removeClass
 * @description remove class from Dom element/s
 * @param {Object} elem - Dom element
 * @param {String} className - class name to remove
 *
 **/
function removeClass(elem, className) {
    var l = elem.length;

    if (l == undefined) {
        _removeClass(elem, className);
    } else {
        var i = l - 1;

        while (i >= 0) {
            _removeClass(elem[i], className);
            i--;
        }
    }
}

/**
 * @function _removeClass
 * @description internal method to remove class from Dom element
 * @param {Object} elem - Dom element
 * @param {String} newClass - class name to remove
 *
 **/
function _removeClass(elem, newClass) {
    if (elem.classList) {
        elem.classList.remove(newClass);
    } else {
        var exp = '(^|\\b)' + newClass.split(' ').join('|') + '(\\b|$)';
        elem.className = elem.className.replace(new RegExp(exp, 'gi'), ' ');
    }
}

/**
 * @function addClass
 * @description add class to Dom element
 * @param {Object} elem - Dom element
 * @param {String} className - class name to add
 *
 **/
function addClass(elem, className) {
    var l = elem.length;

    if (l == undefined) {
        _addClass(elem, className);
    } else {
        var i = l - 1;

        while (i >= 0) {
            _addClass(elem[i], className);
            i--;
        }
    }
}

/**
 * @function _addClass
 * @description internal method add class to Dom element
 * @param {Object} elem - Dom element
 * @param {String} newClass - class name to add
 *
 **/
function _addClass(elem, newClass) {
    if (elem.classList) {
        elem.classList.add(newClass);
    } else {
        elem.className += ' ' + className;
    }
}

var loaderDashoffsetTotal = 502;
var preloader = document.querySelector('.preloader');
var preloaderOuter = preloader.querySelector('.outer');
var logo = preloader.querySelector('.logo');
var loaded = 0;
var total = 10;

function onProgress() {
    var percentLoaded = Math.round(loaded / total * 100);
    var calc = loaderDashoffsetTotal / 100;
    var percent = Math.round(calc * percentLoaded);
    var offset = loaderDashoffsetTotal - percent;
    preloaderOuter.style.strokeDashoffset = offset + 'px';
}

function init() {
    var startLength = loaderDashoffsetTotal + 'px';
    preloaderOuter.style.strokeDashoffset = startLength;
    preloaderOuter.style.opacity = 1;

    setTimeout(function () {
        var newLength = loaderDashoffsetTotal + 'px';
        preloaderOuter.style.strokeDashoffset = newLength;
        addClass(preloaderOuter, 'loading');
        loadImages();
    }, 400);
}

init();

function loadImages() {

    load();
}

function load() {

    loaded++;
    onProgress();

    if (loaded == total) {
        setTimeout(function () {
            onDone();
        }, 800);
    } else {
        setTimeout(function () {
            load();
        }, 100);
    }
}

function onDone() {
    addClass(preloader, 'out');
    removeClass(logo, 'fade-in');
    addClass(logo, 'fade-out');

    setTimeout(function () {
        loaded = 0;
        removeClass(preloader, 'out');
        addClass(logo, 'fade-in');
        removeClass(logo, 'fade-out');
        preloaderOuter.style.strokeDashoffset = loaderDashoffsetTotal + 'px';
        removeClass(preloaderOuter, 'loading');

        init();
    }, 800);
}
// document.addEventListener("DOMContentLoaded", function(event) {
//     var preloader = document.querySelector('.overlay');
//     console.log(preloader);
//     preloader.classList.add('deactivate');
//     setTimeout(function(){
//        preloader.style.display = 'none';
//     }, 600);
// });