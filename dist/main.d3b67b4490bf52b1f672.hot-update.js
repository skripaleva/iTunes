/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateiTunes"]("main",{

/***/ "./src/module/musicPlayer.js":
/*!***********************************!*\
  !*** ./src/module/musicPlayer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"musicPlayerInit\": () => /* binding */ musicPlayerInit\n/* harmony export */ });\n/* harmony import */ var _supScript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supScript.js */ \"./src/module/supScript.js\");\n\nvar musicPlayerInit = function musicPlayerInit() {\n  var audio = document.querySelector('.audio');\n  var audioImg = document.querySelector('.audio-img');\n  var audioHeader = document.querySelector('.audio-header');\n  var audioPlayer = document.querySelector('.audio-player');\n  var audioNavigation = document.querySelector('.audio-navigation');\n  var audioButtonPlay = document.querySelector('.audio-button__play');\n  var audioProgress = document.querySelector('.audio-progress');\n  var audioProgressTiming = document.querySelector('.audio-progress__timing');\n  var audioTimePassed = document.querySelector('.audio-time__passed');\n  var audioTimeTotal = document.querySelector('.audio-time__total');\n  var playList = ['hello', 'flow', 'speed'];\n  var trackIndex = 0;\n\n  var loadTrack = function loadTrack() {\n    var isPlayed = audioPlayer.paused;\n    var track = playList[trackIndex];\n    audioImg.src = \"./audio/\".concat(track, \".jpg\");\n    audioHeader.textContent = track.toUpperCase();\n    audioPlayer.src = \"./audio/\".concat(track, \".mp3\");\n\n    if (isPlayed) {\n      audioPlayer.pause();\n    } else {\n      audioPlayer.play();\n    }\n  };\n\n  var prevTrack = function prevTrack() {\n    if (trackIndex !== 0) {\n      trackIndex--;\n    } else {\n      trackIndex = playList.length - 1;\n    }\n\n    loadTrack();\n    audioProgressTiming.style.width = 0;\n  };\n\n  var nextTrack = function nextTrack() {\n    if (trackIndex === playList.length - 1) {\n      trackIndex = 0;\n    } else {\n      trackIndex++;\n    }\n\n    loadTrack();\n    audioProgressTiming.style.width = 0;\n  };\n\n  audioNavigation.addEventListener('click', function (ev) {\n    var target = ev.target;\n\n    if (target.classList.contains('audio-button__play')) {\n      audio.classList.toggle('play');\n      audioButtonPlay.classList.toggle('fa-play');\n      audioButtonPlay.classList.toggle('fa-pause');\n\n      if (audioPlayer.paused) {\n        audioPlayer.play();\n      } else {\n        audioPlayer.pause();\n      }\n\n      var track = playList[trackIndex];\n      audioHeader.textContent = track.toUpperCase();\n    }\n\n    if (target.classList.contains('audio-button__prev')) {\n      prevTrack();\n    }\n\n    if (target.classList.contains('audio-button__next')) {\n      nextTrack();\n    }\n  });\n  audioPlayer.addEventListener('ended', function () {\n    nextTrack();\n    audioPlayer.play();\n  });\n  audioPlayer.addEventListener('timeupdate', function () {\n    var duration = audioPlayer.duration;\n    var currentTime = audioPlayer.currentTime;\n    var progress = currentTime / duration * 100;\n    audioProgressTiming.style.width = progress + '%';\n    var minutesPassed = Math.floor(currentTime / 60) || '0';\n    var secondsPassed = Math.floor(currentTime % 60) || '0';\n    var minutesTotal = Math.floor(duration / 60) || '0';\n    var secondsTotal = Math.floor(duration % 60) || '0';\n    audioTimePassed.textContent = \"\".concat((0,_supScript_js__WEBPACK_IMPORTED_MODULE_0__.addZero)(minutesPassed), \":\").concat((0,_supScript_js__WEBPACK_IMPORTED_MODULE_0__.addZero)(secondsPassed));\n    audioTimeTotal.textContent = \"\".concat((0,_supScript_js__WEBPACK_IMPORTED_MODULE_0__.addZero)(minutesTotal), \":\").concat((0,_supScript_js__WEBPACK_IMPORTED_MODULE_0__.addZero)(secondsTotal));\n  });\n  audioProgress.addEventListener('click', function (e) {\n    var x = e.offsetX;\n    var allWidth = audioProgress.clientWidth;\n    var progress = x / allWidth * audioPlayer.duration;\n    audioPlayer.currentTime = progress;\n  });\n\n  musicPlayerInit.stop = function () {\n    audioPlayer.pause();\n  };\n};\n\n//# sourceURL=webpack://iTunes/./src/module/musicPlayer.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "88a0b06c8f60aa44ad8d"
/******/ 	})();
/******/ 	
/******/ }
);