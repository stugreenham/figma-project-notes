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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 190, height: 292 });
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    yield figma.loadFontAsync({ family: "Roboto", style: "Regular" });
    yield figma.loadFontAsync({ family: "Roboto", style: "Bold" });
    // FRAME TITLE
    if (msg.type === 'title' || msg.type === 'both') {
        // Check if selection is present
        if (figma.currentPage.selection.length === 0) {
            // Nothing selected so show an error
            figma.ui.postMessage("no-layers");
        }
        else {
            // output the current selection
            for (const node of figma.currentPage.selection) {
                //console.log(node)
                // set values from the current frame selected
                const selectionX = node.x;
                const selectionY = node.y;
                const selectionWidth = node.width;
                const selectionName = node.name;
                // create an array to store the elements
                const nodes = [];
                // line element
                const line = figma.createLine();
                line.x = selectionX;
                line.y = selectionY - 100;
                line.strokeWeight = 4;
                line.resize(selectionWidth, 0);
                line.strokes = [{ type: 'SOLID', color: { r: 0.654901961, g: 0.682352941, b: 0.709803922 } }]; // divide standard rgb values by 255
                line.opacity = 0.6;
                nodes.push(line);
                // type element
                const text = figma.createText();
                text.x = selectionX;
                text.y = line.y - 130;
                text.resize(selectionWidth, 70);
                text.fontSize = 70;
                text.letterSpacing = { unit: 'PIXELS', value: -1 };
                var textChars = "Web • Frame Title";
                text.characters = textChars;
                text.textAlignVertical = "BOTTOM";
                text.textAutoResize = "HEIGHT";
                var textBreak = textChars.indexOf("•") + 1; // get the char number where the • appears and add 1
                var textLen = textChars.length; // get the total char count
                text.setRangeFontName(textBreak, textLen, { family: "Roboto", style: "Bold" });
                nodes.push(text);
                // group nodes and append to current page
                const group = figma.group(nodes, figma.currentPage);
                group.name = selectionName + '-title';
                group.expanded = false;
                figma.currentPage.appendChild(group);
            }
        }
    }
    // FRAME FOOTNOTE
    if (msg.type === 'footnote' || msg.type === 'both') {
        // Check if selection is present
        if (figma.currentPage.selection.length === 0) {
            // Nothing selected so show an error
            figma.ui.postMessage("no-layers");
        }
        else {
            // output the current selection
            for (const node of figma.currentPage.selection) {
                //console.log(node)
                // set values from the current frame selected
                const selectionX = node.x;
                const selectionY = node.y;
                const selectionWidth = node.width;
                const selectionHeight = node.height;
                const selectionName = node.name;
                // create an array to store the elements
                const nodes = [];
                // type element
                const text = figma.createText();
                text.x = selectionX;
                text.y = selectionY + selectionHeight + 50;
                text.resize(selectionWidth, 52);
                text.fontSize = 36;
                //text.letterSpacing = {unit: 'PIXELS', value: -1};
                text.characters = "Enter your description or notes here...";
                text.textAlignVertical = "TOP";
                text.textAutoResize = "HEIGHT";
                text.fills = [{ type: 'SOLID', color: { r: 0.074509804, g: 0.160784314, b: 0.247058824 } }]; // divide standard rgb values by 255
                text.opacity = 0.4;
                nodes.push(text);
                // group nodes and append to current page
                const group = figma.group(nodes, figma.currentPage);
                group.name = selectionName + '-description';
                group.expanded = false;
                figma.currentPage.appendChild(group);
            }
        }
    }
    // STICKY NOTES
    if (msg.type === 'sticky-green' || msg.type === 'sticky-yellow' || msg.type === 'sticky-red') {
        // create an array to store the elements
        const nodes = [];
        // rect element
        const rect = figma.createRectangle();
        rect.resize(500, 500);
        if (msg.type === 'sticky-green') {
            rect.fills = [{ type: 'SOLID', color: { r: 0.435294118, g: 0.811764706, b: 0.592156863 }, opacity: 0.5 }];
            rect.strokes = [{ blendMode: "NORMAL", color: { r: 0.396078431, g: 0.741176471, b: 0.541176471 }, opacity: 0.4, type: "SOLID", visible: true }];
        }
        if (msg.type === 'sticky-yellow') {
            rect.fills = [{ type: 'SOLID', color: { r: 0.949019608, g: 0.788235294, b: 0.298039216 }, opacity: 0.5 }];
            rect.strokes = [{ blendMode: "NORMAL", color: { r: 0.898039216, g: 0.749019608, b: 0.282352941 }, opacity: 0.4, type: "SOLID", visible: true }];
        }
        if (msg.type === 'sticky-red') {
            rect.fills = [{ type: 'SOLID', color: { r: 0.921568627, g: 0.341176471, b: 0.341176471 }, opacity: 0.5 }];
            rect.strokes = [{ blendMode: "NORMAL", color: { r: 0.721568627, g: 0.266666667, b: 0.266666667 }, opacity: 0.2, type: "SOLID", visible: true }];
        }
        rect.strokeWeight = 10;
        rect.constraints = { horizontal: "SCALE", vertical: "SCALE" };
        nodes.push(rect);
        // type element
        const text = figma.createText();
        text.x = rect.x + 40;
        text.y = rect.y + 40;
        text.resize(420, 420);
        text.fontSize = 36;
        text.paragraphSpacing = 20;
        text.lineHeight = { unit: 'PIXELS', value: 46 };
        text.characters = "Enter Note Content...";
        text.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }]; // divide standard rgb values by 255
        text.textAlignVertical = "TOP";
        text.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        nodes.push(text);
        // group nodes and append to current page
        const frame = figma.createFrame();
        frame.resize(500, 500);
        frame.appendChild(rect);
        frame.appendChild(text);
        frame.name = "Sticky Note";
        figma.currentPage.appendChild(frame);
        //figma.viewport.scrollAndZoomIntoView(nodes)
        //figma.viewport.zoom = 0.5
    }
    //figma.closePlugin()
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQSwrQkFBK0IscUNBQXFDO0FBQ3BFLCtCQUErQixrQ0FBa0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHdCQUF3QixpREFBaUQsRUFBRSxFQUFFO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0QsK0NBQStDO0FBQy9DLDJEQUEyRCxrQ0FBa0M7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdCQUF3QixpREFBaUQsRUFBRSxFQUFFO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3QkFBd0IsaURBQWlELGdCQUFnQjtBQUNwSCw2QkFBNkIsOEJBQThCLGlEQUFpRCw4Q0FBOEM7QUFDMUo7QUFDQTtBQUNBLDJCQUEyQix3QkFBd0IsaURBQWlELGdCQUFnQjtBQUNwSCw2QkFBNkIsOEJBQThCLGlEQUFpRCw4Q0FBOEM7QUFDMUo7QUFDQTtBQUNBLDJCQUEyQix3QkFBd0IsaURBQWlELGdCQUFnQjtBQUNwSCw2QkFBNkIsOEJBQThCLGlEQUFpRCw4Q0FBOEM7QUFDMUo7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsdUJBQXVCLHdCQUF3Qix5QkFBeUIsRUFBRSxFQUFFO0FBQzVFO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogMTkwLCBoZWlnaHQ6IDI5MiB9KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiQm9sZFwiIH0pO1xuICAgIC8vIEZSQU1FIFRJVExFXG4gICAgaWYgKG1zZy50eXBlID09PSAndGl0bGUnIHx8IG1zZy50eXBlID09PSAnYm90aCcpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgc2VsZWN0aW9uIGlzIHByZXNlbnRcbiAgICAgICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIE5vdGhpbmcgc2VsZWN0ZWQgc28gc2hvdyBhbiBlcnJvclxuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoXCJuby1sYXllcnNcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBvdXRwdXQgdGhlIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhub2RlKVxuICAgICAgICAgICAgICAgIC8vIHNldCB2YWx1ZXMgZnJvbSB0aGUgY3VycmVudCBmcmFtZSBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvblggPSBub2RlLng7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uWSA9IG5vZGUueTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25XaWR0aCA9IG5vZGUud2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uTmFtZSA9IG5vZGUubmFtZTtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBsaW5lIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gZmlnbWEuY3JlYXRlTGluZSgpO1xuICAgICAgICAgICAgICAgIGxpbmUueCA9IHNlbGVjdGlvblg7XG4gICAgICAgICAgICAgICAgbGluZS55ID0gc2VsZWN0aW9uWSAtIDEwMDtcbiAgICAgICAgICAgICAgICBsaW5lLnN0cm9rZVdlaWdodCA9IDQ7XG4gICAgICAgICAgICAgICAgbGluZS5yZXNpemUoc2VsZWN0aW9uV2lkdGgsIDApO1xuICAgICAgICAgICAgICAgIGxpbmUuc3Ryb2tlcyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuNjU0OTAxOTYxLCBnOiAwLjY4MjM1Mjk0MSwgYjogMC43MDk4MDM5MjIgfSB9XTsgLy8gZGl2aWRlIHN0YW5kYXJkIHJnYiB2YWx1ZXMgYnkgMjU1XG4gICAgICAgICAgICAgICAgbGluZS5vcGFjaXR5ID0gMC42O1xuICAgICAgICAgICAgICAgIG5vZGVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgLy8gdHlwZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgICAgICAgICB0ZXh0LnggPSBzZWxlY3Rpb25YO1xuICAgICAgICAgICAgICAgIHRleHQueSA9IGxpbmUueSAtIDEzMDtcbiAgICAgICAgICAgICAgICB0ZXh0LnJlc2l6ZShzZWxlY3Rpb25XaWR0aCwgNzApO1xuICAgICAgICAgICAgICAgIHRleHQuZm9udFNpemUgPSA3MDtcbiAgICAgICAgICAgICAgICB0ZXh0LmxldHRlclNwYWNpbmcgPSB7IHVuaXQ6ICdQSVhFTFMnLCB2YWx1ZTogLTEgfTtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dENoYXJzID0gXCJXZWIg4oCiIEZyYW1lIFRpdGxlXCI7XG4gICAgICAgICAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gdGV4dENoYXJzO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIkJPVFRPTVwiO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0QnJlYWsgPSB0ZXh0Q2hhcnMuaW5kZXhPZihcIuKAolwiKSArIDE7IC8vIGdldCB0aGUgY2hhciBudW1iZXIgd2hlcmUgdGhlIOKAoiBhcHBlYXJzIGFuZCBhZGQgMVxuICAgICAgICAgICAgICAgIHZhciB0ZXh0TGVuID0gdGV4dENoYXJzLmxlbmd0aDsgLy8gZ2V0IHRoZSB0b3RhbCBjaGFyIGNvdW50XG4gICAgICAgICAgICAgICAgdGV4dC5zZXRSYW5nZUZvbnROYW1lKHRleHRCcmVhaywgdGV4dExlbiwgeyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIkJvbGRcIiB9KTtcbiAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgICAgIC8vIGdyb3VwIG5vZGVzIGFuZCBhcHBlbmQgdG8gY3VycmVudCBwYWdlXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBmaWdtYS5ncm91cChub2RlcywgZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgICAgICAgICAgICAgIGdyb3VwLm5hbWUgPSBzZWxlY3Rpb25OYW1lICsgJy10aXRsZSc7XG4gICAgICAgICAgICAgICAgZ3JvdXAuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChncm91cCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRlJBTUUgRk9PVE5PVEVcbiAgICBpZiAobXNnLnR5cGUgPT09ICdmb290bm90ZScgfHwgbXNnLnR5cGUgPT09ICdib3RoJykge1xuICAgICAgICAvLyBDaGVjayBpZiBzZWxlY3Rpb24gaXMgcHJlc2VudFxuICAgICAgICBpZiAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gTm90aGluZyBzZWxlY3RlZCBzbyBzaG93IGFuIGVycm9yXG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShcIm5vLWxheWVyc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIG91dHB1dCB0aGUgY3VycmVudCBzZWxlY3Rpb25cbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG5vZGUpXG4gICAgICAgICAgICAgICAgLy8gc2V0IHZhbHVlcyBmcm9tIHRoZSBjdXJyZW50IGZyYW1lIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uWCA9IG5vZGUueDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25ZID0gbm9kZS55O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbldpZHRoID0gbm9kZS53aWR0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25IZWlnaHQgPSBub2RlLmhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25OYW1lID0gbm9kZS5uYW1lO1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgZWxlbWVudHNcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIHR5cGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgICAgICAgICAgdGV4dC54ID0gc2VsZWN0aW9uWDtcbiAgICAgICAgICAgICAgICB0ZXh0LnkgPSBzZWxlY3Rpb25ZICsgc2VsZWN0aW9uSGVpZ2h0ICsgNTA7XG4gICAgICAgICAgICAgICAgdGV4dC5yZXNpemUoc2VsZWN0aW9uV2lkdGgsIDUyKTtcbiAgICAgICAgICAgICAgICB0ZXh0LmZvbnRTaXplID0gMzY7XG4gICAgICAgICAgICAgICAgLy90ZXh0LmxldHRlclNwYWNpbmcgPSB7dW5pdDogJ1BJWEVMUycsIHZhbHVlOiAtMX07XG4gICAgICAgICAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gXCJFbnRlciB5b3VyIGRlc2NyaXB0aW9uIG9yIG5vdGVzIGhlcmUuLi5cIjtcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRBbGlnblZlcnRpY2FsID0gXCJUT1BcIjtcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRBdXRvUmVzaXplID0gXCJIRUlHSFRcIjtcbiAgICAgICAgICAgICAgICB0ZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMC4wNzQ1MDk4MDQsIGc6IDAuMTYwNzg0MzE0LCBiOiAwLjI0NzA1ODgyNCB9IH1dOyAvLyBkaXZpZGUgc3RhbmRhcmQgcmdiIHZhbHVlcyBieSAyNTVcbiAgICAgICAgICAgICAgICB0ZXh0Lm9wYWNpdHkgPSAwLjQ7XG4gICAgICAgICAgICAgICAgbm9kZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgICAgICAvLyBncm91cCBub2RlcyBhbmQgYXBwZW5kIHRvIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZmlnbWEuZ3JvdXAobm9kZXMsIGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgICAgICAgICBncm91cC5uYW1lID0gc2VsZWN0aW9uTmFtZSArICctZGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgICAgIGdyb3VwLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQoZ3JvdXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFNUSUNLWSBOT1RFU1xuICAgIGlmIChtc2cudHlwZSA9PT0gJ3N0aWNreS1ncmVlbicgfHwgbXNnLnR5cGUgPT09ICdzdGlja3kteWVsbG93JyB8fCBtc2cudHlwZSA9PT0gJ3N0aWNreS1yZWQnKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgZWxlbWVudHNcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICAgICAgLy8gcmVjdCBlbGVtZW50XG4gICAgICAgIGNvbnN0IHJlY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgcmVjdC5yZXNpemUoNTAwLCA1MDApO1xuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdzdGlja3ktZ3JlZW4nKSB7XG4gICAgICAgICAgICByZWN0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMC40MzUyOTQxMTgsIGc6IDAuODExNzY0NzA2LCBiOiAwLjU5MjE1Njg2MyB9LCBvcGFjaXR5OiAwLjUgfV07XG4gICAgICAgICAgICByZWN0LnN0cm9rZXMgPSBbeyBibGVuZE1vZGU6IFwiTk9STUFMXCIsIGNvbG9yOiB7IHI6IDAuMzk2MDc4NDMxLCBnOiAwLjc0MTE3NjQ3MSwgYjogMC41NDExNzY0NzEgfSwgb3BhY2l0eTogMC40LCB0eXBlOiBcIlNPTElEXCIsIHZpc2libGU6IHRydWUgfV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAnc3RpY2t5LXllbGxvdycpIHtcbiAgICAgICAgICAgIHJlY3QuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjk0OTAxOTYwOCwgZzogMC43ODgyMzUyOTQsIGI6IDAuMjk4MDM5MjE2IH0sIG9wYWNpdHk6IDAuNSB9XTtcbiAgICAgICAgICAgIHJlY3Quc3Ryb2tlcyA9IFt7IGJsZW5kTW9kZTogXCJOT1JNQUxcIiwgY29sb3I6IHsgcjogMC44OTgwMzkyMTYsIGc6IDAuNzQ5MDE5NjA4LCBiOiAwLjI4MjM1Mjk0MSB9LCBvcGFjaXR5OiAwLjQsIHR5cGU6IFwiU09MSURcIiwgdmlzaWJsZTogdHJ1ZSB9XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdzdGlja3ktcmVkJykge1xuICAgICAgICAgICAgcmVjdC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuOTIxNTY4NjI3LCBnOiAwLjM0MTE3NjQ3MSwgYjogMC4zNDExNzY0NzEgfSwgb3BhY2l0eTogMC41IH1dO1xuICAgICAgICAgICAgcmVjdC5zdHJva2VzID0gW3sgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLCBjb2xvcjogeyByOiAwLjcyMTU2ODYyNywgZzogMC4yNjY2NjY2NjcsIGI6IDAuMjY2NjY2NjY3IH0sIG9wYWNpdHk6IDAuMiwgdHlwZTogXCJTT0xJRFwiLCB2aXNpYmxlOiB0cnVlIH1dO1xuICAgICAgICB9XG4gICAgICAgIHJlY3Quc3Ryb2tlV2VpZ2h0ID0gMTA7XG4gICAgICAgIHJlY3QuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiU0NBTEVcIiwgdmVydGljYWw6IFwiU0NBTEVcIiB9O1xuICAgICAgICBub2Rlcy5wdXNoKHJlY3QpO1xuICAgICAgICAvLyB0eXBlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgdGV4dC54ID0gcmVjdC54ICsgNDA7XG4gICAgICAgIHRleHQueSA9IHJlY3QueSArIDQwO1xuICAgICAgICB0ZXh0LnJlc2l6ZSg0MjAsIDQyMCk7XG4gICAgICAgIHRleHQuZm9udFNpemUgPSAzNjtcbiAgICAgICAgdGV4dC5wYXJhZ3JhcGhTcGFjaW5nID0gMjA7XG4gICAgICAgIHRleHQubGluZUhlaWdodCA9IHsgdW5pdDogJ1BJWEVMUycsIHZhbHVlOiA0NiB9O1xuICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBcIkVudGVyIE5vdGUgQ29udGVudC4uLlwiO1xuICAgICAgICB0ZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMC4yLCBnOiAwLjIsIGI6IDAuMiB9IH1dOyAvLyBkaXZpZGUgc3RhbmRhcmQgcmdiIHZhbHVlcyBieSAyNTVcbiAgICAgICAgdGV4dC50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiVE9QXCI7XG4gICAgICAgIHRleHQuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiU1RSRVRDSFwiLCB2ZXJ0aWNhbDogXCJTVFJFVENIXCIgfTtcbiAgICAgICAgbm9kZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgLy8gZ3JvdXAgbm9kZXMgYW5kIGFwcGVuZCB0byBjdXJyZW50IHBhZ2VcbiAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBmcmFtZS5yZXNpemUoNTAwLCA1MDApO1xuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChyZWN0KTtcbiAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGZyYW1lLm5hbWUgPSBcIlN0aWNreSBOb3RlXCI7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICAgICAgLy9maWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcobm9kZXMpXG4gICAgICAgIC8vZmlnbWEudmlld3BvcnQuem9vbSA9IDAuNVxuICAgIH1cbiAgICAvL2ZpZ21hLmNsb3NlUGx1Z2luKClcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==