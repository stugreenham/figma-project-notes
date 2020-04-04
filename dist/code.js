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
//figma.showUI(__html__, { width: 190, height: 292 });
figma.showUI(__html__, { width: 170, height: 338 });
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    yield figma.loadFontAsync({ family: "Roboto", style: "Regular" });
    yield figma.loadFontAsync({ family: "Roboto", style: "Bold" });
    const debug = true;
    // TITLE
    //-------------------------------
    if (msg.type === 'title' || msg.type === 'both') {
        // First check is the user has something selected
        if (figma.currentPage.selection.length === 0) {
            // if nothing is selected, show an error
            figma.ui.postMessage("no-layers");
        }
        else {
            // if something is selected, build the components
            // loop through all the items that are selected
            for (const node of figma.currentPage.selection) {
                if (debug == true) {
                    console.log(node);
                }
                // grab the current selection's x, y, width and name values
                const selectionX = node.x;
                const selectionY = node.y;
                const selectionWidth = node.width;
                const selectionName = node.name;
                // create an array to store the elements
                const nodes = [];
                // create the line element
                const line = figma.createLine();
                line.x = selectionX;
                line.y = selectionY - 100; // set the lines y value to -100px above the selection
                line.strokeWeight = 4;
                line.resize(selectionWidth, 0);
                line.strokes = [{ type: 'SOLID', color: { r: 0.654901961, g: 0.682352941, b: 0.709803922 } }];
                line.opacity = 0.6;
                nodes.push(line);
                // create the type element
                const text = figma.createText();
                text.x = selectionX;
                text.y = line.y - 130; // set the types y value to -130px from the line's y value
                text.resize(selectionWidth, 70);
                text.fontSize = 70;
                text.letterSpacing = { unit: 'PIXELS', value: -1 };
                var textChars = "Web • Frame Title";
                text.characters = textChars;
                text.textAlignVertical = "BOTTOM";
                text.textAutoResize = "HEIGHT";
                var textBreak = textChars.indexOf("•") + 1; // get the char number where the • appears and add 1, this is to apply the bold formatting
                var textLen = textChars.length; // get the total char count
                text.setRangeFontName(textBreak, textLen, { family: "Roboto", style: "Bold" }); // set the text after the • to bold
                nodes.push(text);
                // group both the line and type element, then append it to the current page
                const group = figma.group(nodes, figma.currentPage);
                group.name = selectionName + '-title';
                group.expanded = false;
                figma.currentPage.appendChild(group);
            }
        }
    }
    // FOOTNOTE
    //-------------------------------
    if (msg.type === 'footnote' || msg.type === 'both') {
        // First check is the user has something selected
        if (figma.currentPage.selection.length === 0) {
            // if nothing is selected, show an error
            figma.ui.postMessage("no-layers");
        }
        else {
            // if something is selected, build the components
            // loop through all the items that are selected
            for (const node of figma.currentPage.selection) {
                if (debug == true) {
                    console.log(node);
                }
                // grab the current selection's x, y, width, height and name values
                const selectionX = node.x;
                const selectionY = node.y;
                const selectionWidth = node.width;
                const selectionHeight = node.height;
                const selectionName = node.name;
                // create an array to store the elements
                const nodes = [];
                // create the type element
                const text = figma.createText();
                text.x = selectionX;
                text.y = selectionY + selectionHeight + 50; // set the types y value to 50px below the selection
                text.resize(selectionWidth, 52);
                text.fontSize = 36;
                text.characters = "Enter your description or notes here...";
                text.textAlignVertical = "TOP";
                text.textAutoResize = "HEIGHT";
                text.fills = [{ type: 'SOLID', color: { r: 0.074509804, g: 0.160784314, b: 0.247058824 } }];
                text.opacity = 0.4;
                nodes.push(text);
                // group the type element, then append it to the current page
                const group = figma.group(nodes, figma.currentPage);
                group.name = selectionName + '-description';
                group.expanded = false;
                figma.currentPage.appendChild(group);
            }
        }
    }
    // STICKY NOTE
    //-------------------------------
    if (msg.type === 'sticky-green' || msg.type === 'sticky-yellow' || msg.type === 'sticky-red') {
        // grab the x and y values of the current viewport central point
        const centerX = figma.viewport.center.x;
        const centerY = figma.viewport.center.y;
        // create an array to store the elements
        const nodes = [];
        // create the rectangle element
        const rect = figma.createRectangle();
        rect.resize(500, 500);
        // check if the user wanted the green, yellow or red styling
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
        // create the type element
        const text = figma.createText();
        text.x = rect.x + 40;
        text.y = rect.y + 40;
        text.resize(420, 420);
        text.fontSize = 36;
        text.paragraphSpacing = 20;
        text.lineHeight = { unit: 'PIXELS', value: 46 };
        text.characters = "Enter Note Content...";
        text.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
        text.textAlignVertical = "TOP";
        text.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        nodes.push(text);
        // create a frame element and append the type and rect elements before adding it to the center of the viewport
        const frame = figma.createFrame();
        frame.resize(500, 500);
        frame.x = centerX;
        frame.y = centerY;
        frame.appendChild(rect);
        frame.appendChild(text);
        frame.name = "Sticky Note";
        figma.currentPage.appendChild(frame);
    }
    // ANNOTATION
    //-------------------------------
    if (msg.type === 'annotation') {
        // grab the x and y values of the current viewport central point
        const centerX = figma.viewport.center.x;
        const centerY = figma.viewport.center.y;
        // create an array to store the elements
        const nodes = [];
        // grab all the existing annotations in the viewport, get the total and add one to set the new annotations count
        const annotationCount = figma.currentPage.findAll(node => node.type === 'FRAME' && node.name.includes('annotation-')).length + 1;
        if (debug == true) {
            console.log(annotationCount);
        }
        // create the counter element
        // create the rectangle for the counter
        const disc = figma.createRectangle();
        disc.resize(24, 24);
        disc.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 }, opacity: 1 }];
        disc.constraints = { horizontal: "MIN", vertical: "MIN" };
        disc.cornerRadius = 12;
        nodes.push(disc);
        // create the type for the counter
        const number = figma.createText();
        number.x = disc.x;
        number.y = disc.y;
        number.resize(24, 24);
        number.fontSize = 12;
        number.lineHeight = { unit: 'PIXELS', value: 12 };
        number.characters = annotationCount.toString();
        number.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        number.textAlignVertical = "CENTER";
        number.textAlignHorizontal = "CENTER";
        number.constraints = { horizontal: "MIN", vertical: "MIN" };
        nodes.push(number);
        // create the content element
        // create the rectangle for the content background
        const rect = figma.createRectangle();
        rect.x = disc.x + 40;
        rect.y = disc.y;
        rect.resize(300, 60);
        rect.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 }, opacity: 1 }];
        rect.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        rect.cornerRadius = 6;
        nodes.push(rect);
        // create the type for the content text
        const text = figma.createText();
        text.x = rect.x + 8;
        text.y = rect.y + 8;
        text.resize(284, 44);
        text.fontSize = 14;
        text.paragraphSpacing = 10;
        text.lineHeight = { unit: 'PIXELS', value: 20 };
        text.characters = "Add your annotation content here...";
        text.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        text.textAlignVertical = "TOP";
        text.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        nodes.push(text);
        // create a frame element and append the counter and content elements before adding it to the center of the viewport
        const frame = figma.createFrame();
        frame.resize(340, 60);
        frame.x = centerX;
        frame.y = centerY;
        frame.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 }, opacity: 0 }];
        frame.appendChild(disc);
        frame.appendChild(number);
        frame.appendChild(rect);
        frame.appendChild(text);
        frame.name = "annotation-" + annotationCount; // append the next count to the annotation title
        figma.currentPage.appendChild(frame);
    }
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQiwwQkFBMEI7QUFDcEQsd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBLCtCQUErQixxQ0FBcUM7QUFDcEUsK0JBQStCLGtDQUFrQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQSxpQ0FBaUMsd0JBQXdCLGlEQUFpRCxFQUFFO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRCwrQ0FBK0M7QUFDL0MsMkRBQTJELGtDQUFrQyxFQUFFO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix3QkFBd0IsaURBQWlELEVBQUU7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3QkFBd0IsaURBQWlELGdCQUFnQjtBQUNwSCw2QkFBNkIsOEJBQThCLGlEQUFpRCw4Q0FBOEM7QUFDMUo7QUFDQTtBQUNBLDJCQUEyQix3QkFBd0IsaURBQWlELGdCQUFnQjtBQUNwSCw2QkFBNkIsOEJBQThCLGlEQUFpRCw4Q0FBOEM7QUFDMUo7QUFDQTtBQUNBLDJCQUEyQix3QkFBd0IsaURBQWlELGdCQUFnQjtBQUNwSCw2QkFBNkIsOEJBQThCLGlEQUFpRCw4Q0FBOEM7QUFDMUo7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsdUJBQXVCLHdCQUF3Qix5QkFBeUIsRUFBRTtBQUMxRTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0IsbUJBQW1CLGNBQWM7QUFDaEYsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSx5QkFBeUIsd0JBQXdCLG1CQUFtQixFQUFFO0FBQ3RFO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCLG1CQUFtQixjQUFjO0FBQ2hGLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSx1QkFBdUIsd0JBQXdCLG1CQUFtQixFQUFFO0FBQ3BFO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3QkFBd0IsbUJBQW1CLGNBQWM7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8vZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiAxOTAsIGhlaWdodDogMjkyIH0pO1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiAxNzAsIGhlaWdodDogMzM4IH0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJCb2xkXCIgfSk7XG4gICAgY29uc3QgZGVidWcgPSB0cnVlO1xuICAgIC8vIFRJVExFXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaWYgKG1zZy50eXBlID09PSAndGl0bGUnIHx8IG1zZy50eXBlID09PSAnYm90aCcpIHtcbiAgICAgICAgLy8gRmlyc3QgY2hlY2sgaXMgdGhlIHVzZXIgaGFzIHNvbWV0aGluZyBzZWxlY3RlZFxuICAgICAgICBpZiAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gaWYgbm90aGluZyBpcyBzZWxlY3RlZCwgc2hvdyBhbiBlcnJvclxuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoXCJuby1sYXllcnNcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiBzb21ldGhpbmcgaXMgc2VsZWN0ZWQsIGJ1aWxkIHRoZSBjb21wb25lbnRzXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHRoZSBpdGVtcyB0aGF0IGFyZSBzZWxlY3RlZFxuICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1ZyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBncmFiIHRoZSBjdXJyZW50IHNlbGVjdGlvbidzIHgsIHksIHdpZHRoIGFuZCBuYW1lIHZhbHVlc1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvblggPSBub2RlLng7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uWSA9IG5vZGUueTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25XaWR0aCA9IG5vZGUud2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uTmFtZSA9IG5vZGUubmFtZTtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGxpbmUgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBmaWdtYS5jcmVhdGVMaW5lKCk7XG4gICAgICAgICAgICAgICAgbGluZS54ID0gc2VsZWN0aW9uWDtcbiAgICAgICAgICAgICAgICBsaW5lLnkgPSBzZWxlY3Rpb25ZIC0gMTAwOyAvLyBzZXQgdGhlIGxpbmVzIHkgdmFsdWUgdG8gLTEwMHB4IGFib3ZlIHRoZSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICBsaW5lLnN0cm9rZVdlaWdodCA9IDQ7XG4gICAgICAgICAgICAgICAgbGluZS5yZXNpemUoc2VsZWN0aW9uV2lkdGgsIDApO1xuICAgICAgICAgICAgICAgIGxpbmUuc3Ryb2tlcyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuNjU0OTAxOTYxLCBnOiAwLjY4MjM1Mjk0MSwgYjogMC43MDk4MDM5MjIgfSB9XTtcbiAgICAgICAgICAgICAgICBsaW5lLm9wYWNpdHkgPSAwLjY7XG4gICAgICAgICAgICAgICAgbm9kZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHR5cGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgICAgICAgICAgdGV4dC54ID0gc2VsZWN0aW9uWDtcbiAgICAgICAgICAgICAgICB0ZXh0LnkgPSBsaW5lLnkgLSAxMzA7IC8vIHNldCB0aGUgdHlwZXMgeSB2YWx1ZSB0byAtMTMwcHggZnJvbSB0aGUgbGluZSdzIHkgdmFsdWVcbiAgICAgICAgICAgICAgICB0ZXh0LnJlc2l6ZShzZWxlY3Rpb25XaWR0aCwgNzApO1xuICAgICAgICAgICAgICAgIHRleHQuZm9udFNpemUgPSA3MDtcbiAgICAgICAgICAgICAgICB0ZXh0LmxldHRlclNwYWNpbmcgPSB7IHVuaXQ6ICdQSVhFTFMnLCB2YWx1ZTogLTEgfTtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dENoYXJzID0gXCJXZWIg4oCiIEZyYW1lIFRpdGxlXCI7XG4gICAgICAgICAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gdGV4dENoYXJzO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIkJPVFRPTVwiO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0QnJlYWsgPSB0ZXh0Q2hhcnMuaW5kZXhPZihcIuKAolwiKSArIDE7IC8vIGdldCB0aGUgY2hhciBudW1iZXIgd2hlcmUgdGhlIOKAoiBhcHBlYXJzIGFuZCBhZGQgMSwgdGhpcyBpcyB0byBhcHBseSB0aGUgYm9sZCBmb3JtYXR0aW5nXG4gICAgICAgICAgICAgICAgdmFyIHRleHRMZW4gPSB0ZXh0Q2hhcnMubGVuZ3RoOyAvLyBnZXQgdGhlIHRvdGFsIGNoYXIgY291bnRcbiAgICAgICAgICAgICAgICB0ZXh0LnNldFJhbmdlRm9udE5hbWUodGV4dEJyZWFrLCB0ZXh0TGVuLCB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiQm9sZFwiIH0pOyAvLyBzZXQgdGhlIHRleHQgYWZ0ZXIgdGhlIOKAoiB0byBib2xkXG4gICAgICAgICAgICAgICAgbm9kZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgICAgICAvLyBncm91cCBib3RoIHRoZSBsaW5lIGFuZCB0eXBlIGVsZW1lbnQsIHRoZW4gYXBwZW5kIGl0IHRvIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGZpZ21hLmdyb3VwKG5vZGVzLCBmaWdtYS5jdXJyZW50UGFnZSk7XG4gICAgICAgICAgICAgICAgZ3JvdXAubmFtZSA9IHNlbGVjdGlvbk5hbWUgKyAnLXRpdGxlJztcbiAgICAgICAgICAgICAgICBncm91cC5leHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGdyb3VwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBGT09UTk9URVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2Zvb3Rub3RlJyB8fCBtc2cudHlwZSA9PT0gJ2JvdGgnKSB7XG4gICAgICAgIC8vIEZpcnN0IGNoZWNrIGlzIHRoZSB1c2VyIGhhcyBzb21ldGhpbmcgc2VsZWN0ZWRcbiAgICAgICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIGlmIG5vdGhpbmcgaXMgc2VsZWN0ZWQsIHNob3cgYW4gZXJyb3JcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKFwibm8tbGF5ZXJzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgc29tZXRoaW5nIGlzIHNlbGVjdGVkLCBidWlsZCB0aGUgY29tcG9uZW50c1xuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCB0aGUgaXRlbXMgdGhhdCBhcmUgc2VsZWN0ZWRcbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVidWcgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZ3JhYiB0aGUgY3VycmVudCBzZWxlY3Rpb24ncyB4LCB5LCB3aWR0aCwgaGVpZ2h0IGFuZCBuYW1lIHZhbHVlc1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvblggPSBub2RlLng7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uWSA9IG5vZGUueTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25XaWR0aCA9IG5vZGUud2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uSGVpZ2h0ID0gbm9kZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uTmFtZSA9IG5vZGUubmFtZTtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHR5cGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgICAgICAgICAgdGV4dC54ID0gc2VsZWN0aW9uWDtcbiAgICAgICAgICAgICAgICB0ZXh0LnkgPSBzZWxlY3Rpb25ZICsgc2VsZWN0aW9uSGVpZ2h0ICsgNTA7IC8vIHNldCB0aGUgdHlwZXMgeSB2YWx1ZSB0byA1MHB4IGJlbG93IHRoZSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICB0ZXh0LnJlc2l6ZShzZWxlY3Rpb25XaWR0aCwgNTIpO1xuICAgICAgICAgICAgICAgIHRleHQuZm9udFNpemUgPSAzNjtcbiAgICAgICAgICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBcIkVudGVyIHlvdXIgZGVzY3JpcHRpb24gb3Igbm90ZXMgaGVyZS4uLlwiO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIlRPUFwiO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICAgICAgICAgIHRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjA3NDUwOTgwNCwgZzogMC4xNjA3ODQzMTQsIGI6IDAuMjQ3MDU4ODI0IH0gfV07XG4gICAgICAgICAgICAgICAgdGV4dC5vcGFjaXR5ID0gMC40O1xuICAgICAgICAgICAgICAgIG5vZGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICAgICAgLy8gZ3JvdXAgdGhlIHR5cGUgZWxlbWVudCwgdGhlbiBhcHBlbmQgaXQgdG8gdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZmlnbWEuZ3JvdXAobm9kZXMsIGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgICAgICAgICBncm91cC5uYW1lID0gc2VsZWN0aW9uTmFtZSArICctZGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgICAgIGdyb3VwLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQoZ3JvdXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFNUSUNLWSBOT1RFXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaWYgKG1zZy50eXBlID09PSAnc3RpY2t5LWdyZWVuJyB8fCBtc2cudHlwZSA9PT0gJ3N0aWNreS15ZWxsb3cnIHx8IG1zZy50eXBlID09PSAnc3RpY2t5LXJlZCcpIHtcbiAgICAgICAgLy8gZ3JhYiB0aGUgeCBhbmQgeSB2YWx1ZXMgb2YgdGhlIGN1cnJlbnQgdmlld3BvcnQgY2VudHJhbCBwb2ludFxuICAgICAgICBjb25zdCBjZW50ZXJYID0gZmlnbWEudmlld3BvcnQuY2VudGVyLng7XG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueTtcbiAgICAgICAgLy8gY3JlYXRlIGFuIGFycmF5IHRvIHN0b3JlIHRoZSBlbGVtZW50c1xuICAgICAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIHJlY3RhbmdsZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IHJlY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgcmVjdC5yZXNpemUoNTAwLCA1MDApO1xuICAgICAgICAvLyBjaGVjayBpZiB0aGUgdXNlciB3YW50ZWQgdGhlIGdyZWVuLCB5ZWxsb3cgb3IgcmVkIHN0eWxpbmdcbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAnc3RpY2t5LWdyZWVuJykge1xuICAgICAgICAgICAgcmVjdC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuNDM1Mjk0MTE4LCBnOiAwLjgxMTc2NDcwNiwgYjogMC41OTIxNTY4NjMgfSwgb3BhY2l0eTogMC41IH1dO1xuICAgICAgICAgICAgcmVjdC5zdHJva2VzID0gW3sgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLCBjb2xvcjogeyByOiAwLjM5NjA3ODQzMSwgZzogMC43NDExNzY0NzEsIGI6IDAuNTQxMTc2NDcxIH0sIG9wYWNpdHk6IDAuNCwgdHlwZTogXCJTT0xJRFwiLCB2aXNpYmxlOiB0cnVlIH1dO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3N0aWNreS15ZWxsb3cnKSB7XG4gICAgICAgICAgICByZWN0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMC45NDkwMTk2MDgsIGc6IDAuNzg4MjM1Mjk0LCBiOiAwLjI5ODAzOTIxNiB9LCBvcGFjaXR5OiAwLjUgfV07XG4gICAgICAgICAgICByZWN0LnN0cm9rZXMgPSBbeyBibGVuZE1vZGU6IFwiTk9STUFMXCIsIGNvbG9yOiB7IHI6IDAuODk4MDM5MjE2LCBnOiAwLjc0OTAxOTYwOCwgYjogMC4yODIzNTI5NDEgfSwgb3BhY2l0eTogMC40LCB0eXBlOiBcIlNPTElEXCIsIHZpc2libGU6IHRydWUgfV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAnc3RpY2t5LXJlZCcpIHtcbiAgICAgICAgICAgIHJlY3QuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjkyMTU2ODYyNywgZzogMC4zNDExNzY0NzEsIGI6IDAuMzQxMTc2NDcxIH0sIG9wYWNpdHk6IDAuNSB9XTtcbiAgICAgICAgICAgIHJlY3Quc3Ryb2tlcyA9IFt7IGJsZW5kTW9kZTogXCJOT1JNQUxcIiwgY29sb3I6IHsgcjogMC43MjE1Njg2MjcsIGc6IDAuMjY2NjY2NjY3LCBiOiAwLjI2NjY2NjY2NyB9LCBvcGFjaXR5OiAwLjIsIHR5cGU6IFwiU09MSURcIiwgdmlzaWJsZTogdHJ1ZSB9XTtcbiAgICAgICAgfVxuICAgICAgICByZWN0LnN0cm9rZVdlaWdodCA9IDEwO1xuICAgICAgICByZWN0LmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiBcIlNDQUxFXCIsIHZlcnRpY2FsOiBcIlNDQUxFXCIgfTtcbiAgICAgICAgbm9kZXMucHVzaChyZWN0KTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSB0eXBlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgdGV4dC54ID0gcmVjdC54ICsgNDA7XG4gICAgICAgIHRleHQueSA9IHJlY3QueSArIDQwO1xuICAgICAgICB0ZXh0LnJlc2l6ZSg0MjAsIDQyMCk7XG4gICAgICAgIHRleHQuZm9udFNpemUgPSAzNjtcbiAgICAgICAgdGV4dC5wYXJhZ3JhcGhTcGFjaW5nID0gMjA7XG4gICAgICAgIHRleHQubGluZUhlaWdodCA9IHsgdW5pdDogJ1BJWEVMUycsIHZhbHVlOiA0NiB9O1xuICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBcIkVudGVyIE5vdGUgQ29udGVudC4uLlwiO1xuICAgICAgICB0ZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMC4yLCBnOiAwLjIsIGI6IDAuMiB9IH1dO1xuICAgICAgICB0ZXh0LnRleHRBbGlnblZlcnRpY2FsID0gXCJUT1BcIjtcbiAgICAgICAgdGV4dC5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogXCJTVFJFVENIXCIsIHZlcnRpY2FsOiBcIlNUUkVUQ0hcIiB9O1xuICAgICAgICBub2Rlcy5wdXNoKHRleHQpO1xuICAgICAgICAvLyBjcmVhdGUgYSBmcmFtZSBlbGVtZW50IGFuZCBhcHBlbmQgdGhlIHR5cGUgYW5kIHJlY3QgZWxlbWVudHMgYmVmb3JlIGFkZGluZyBpdCB0byB0aGUgY2VudGVyIG9mIHRoZSB2aWV3cG9ydFxuICAgICAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGZyYW1lLnJlc2l6ZSg1MDAsIDUwMCk7XG4gICAgICAgIGZyYW1lLnggPSBjZW50ZXJYO1xuICAgICAgICBmcmFtZS55ID0gY2VudGVyWTtcbiAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQocmVjdCk7XG4gICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBmcmFtZS5uYW1lID0gXCJTdGlja3kgTm90ZVwiO1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChmcmFtZSk7XG4gICAgfVxuICAgIC8vIEFOTk9UQVRJT05cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdhbm5vdGF0aW9uJykge1xuICAgICAgICAvLyBncmFiIHRoZSB4IGFuZCB5IHZhbHVlcyBvZiB0aGUgY3VycmVudCB2aWV3cG9ydCBjZW50cmFsIHBvaW50XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci55O1xuICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgICAgIC8vIGdyYWIgYWxsIHRoZSBleGlzdGluZyBhbm5vdGF0aW9ucyBpbiB0aGUgdmlld3BvcnQsIGdldCB0aGUgdG90YWwgYW5kIGFkZCBvbmUgdG8gc2V0IHRoZSBuZXcgYW5ub3RhdGlvbnMgY291bnRcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbkNvdW50ID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZEFsbChub2RlID0+IG5vZGUudHlwZSA9PT0gJ0ZSQU1FJyAmJiBub2RlLm5hbWUuaW5jbHVkZXMoJ2Fubm90YXRpb24tJykpLmxlbmd0aCArIDE7XG4gICAgICAgIGlmIChkZWJ1ZyA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhbm5vdGF0aW9uQ291bnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgY291bnRlciBlbGVtZW50XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgcmVjdGFuZ2xlIGZvciB0aGUgY291bnRlclxuICAgICAgICBjb25zdCBkaXNjID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgIGRpc2MucmVzaXplKDI0LCAyNCk7XG4gICAgICAgIGRpc2MuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0sIG9wYWNpdHk6IDEgfV07XG4gICAgICAgIGRpc2MuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiTUlOXCIsIHZlcnRpY2FsOiBcIk1JTlwiIH07XG4gICAgICAgIGRpc2MuY29ybmVyUmFkaXVzID0gMTI7XG4gICAgICAgIG5vZGVzLnB1c2goZGlzYyk7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgdHlwZSBmb3IgdGhlIGNvdW50ZXJcbiAgICAgICAgY29uc3QgbnVtYmVyID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICBudW1iZXIueCA9IGRpc2MueDtcbiAgICAgICAgbnVtYmVyLnkgPSBkaXNjLnk7XG4gICAgICAgIG51bWJlci5yZXNpemUoMjQsIDI0KTtcbiAgICAgICAgbnVtYmVyLmZvbnRTaXplID0gMTI7XG4gICAgICAgIG51bWJlci5saW5lSGVpZ2h0ID0geyB1bml0OiAnUElYRUxTJywgdmFsdWU6IDEyIH07XG4gICAgICAgIG51bWJlci5jaGFyYWN0ZXJzID0gYW5ub3RhdGlvbkNvdW50LnRvU3RyaW5nKCk7XG4gICAgICAgIG51bWJlci5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSB9XTtcbiAgICAgICAgbnVtYmVyLnRleHRBbGlnblZlcnRpY2FsID0gXCJDRU5URVJcIjtcbiAgICAgICAgbnVtYmVyLnRleHRBbGlnbkhvcml6b250YWwgPSBcIkNFTlRFUlwiO1xuICAgICAgICBudW1iZXIuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiTUlOXCIsIHZlcnRpY2FsOiBcIk1JTlwiIH07XG4gICAgICAgIG5vZGVzLnB1c2gobnVtYmVyKTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBjb250ZW50IGVsZW1lbnRcbiAgICAgICAgLy8gY3JlYXRlIHRoZSByZWN0YW5nbGUgZm9yIHRoZSBjb250ZW50IGJhY2tncm91bmRcbiAgICAgICAgY29uc3QgcmVjdCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgICAgICByZWN0LnggPSBkaXNjLnggKyA0MDtcbiAgICAgICAgcmVjdC55ID0gZGlzYy55O1xuICAgICAgICByZWN0LnJlc2l6ZSgzMDAsIDYwKTtcbiAgICAgICAgcmVjdC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSwgb3BhY2l0eTogMSB9XTtcbiAgICAgICAgcmVjdC5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogXCJTVFJFVENIXCIsIHZlcnRpY2FsOiBcIlNUUkVUQ0hcIiB9O1xuICAgICAgICByZWN0LmNvcm5lclJhZGl1cyA9IDY7XG4gICAgICAgIG5vZGVzLnB1c2gocmVjdCk7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgdHlwZSBmb3IgdGhlIGNvbnRlbnQgdGV4dFxuICAgICAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICB0ZXh0LnggPSByZWN0LnggKyA4O1xuICAgICAgICB0ZXh0LnkgPSByZWN0LnkgKyA4O1xuICAgICAgICB0ZXh0LnJlc2l6ZSgyODQsIDQ0KTtcbiAgICAgICAgdGV4dC5mb250U2l6ZSA9IDE0O1xuICAgICAgICB0ZXh0LnBhcmFncmFwaFNwYWNpbmcgPSAxMDtcbiAgICAgICAgdGV4dC5saW5lSGVpZ2h0ID0geyB1bml0OiAnUElYRUxTJywgdmFsdWU6IDIwIH07XG4gICAgICAgIHRleHQuY2hhcmFjdGVycyA9IFwiQWRkIHlvdXIgYW5ub3RhdGlvbiBjb250ZW50IGhlcmUuLi5cIjtcbiAgICAgICAgdGV4dC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSB9XTtcbiAgICAgICAgdGV4dC50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiVE9QXCI7XG4gICAgICAgIHRleHQuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiU1RSRVRDSFwiLCB2ZXJ0aWNhbDogXCJTVFJFVENIXCIgfTtcbiAgICAgICAgbm9kZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgLy8gY3JlYXRlIGEgZnJhbWUgZWxlbWVudCBhbmQgYXBwZW5kIHRoZSBjb3VudGVyIGFuZCBjb250ZW50IGVsZW1lbnRzIGJlZm9yZSBhZGRpbmcgaXQgdG8gdGhlIGNlbnRlciBvZiB0aGUgdmlld3BvcnRcbiAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBmcmFtZS5yZXNpemUoMzQwLCA2MCk7XG4gICAgICAgIGZyYW1lLnggPSBjZW50ZXJYO1xuICAgICAgICBmcmFtZS55ID0gY2VudGVyWTtcbiAgICAgICAgZnJhbWUuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0sIG9wYWNpdHk6IDAgfV07XG4gICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGRpc2MpO1xuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChudW1iZXIpO1xuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChyZWN0KTtcbiAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGZyYW1lLm5hbWUgPSBcImFubm90YXRpb24tXCIgKyBhbm5vdGF0aW9uQ291bnQ7IC8vIGFwcGVuZCB0aGUgbmV4dCBjb3VudCB0byB0aGUgYW5ub3RhdGlvbiB0aXRsZVxuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChmcmFtZSk7XG4gICAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9