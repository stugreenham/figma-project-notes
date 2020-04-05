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
figma.showUI(__html__, { width: 170, height: 338 });
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    yield figma.loadFontAsync({ family: "Roboto", style: "Regular" });
    yield figma.loadFontAsync({ family: "Roboto", style: "Bold" });
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
                //console.log(node);
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
                line.y = selectionY - 120; // set the lines y value to -100px above the selection
                line.strokeWeight = 4;
                line.resize(selectionWidth, 0);
                line.strokes = [{ type: 'SOLID', color: { r: 0.654901961, g: 0.682352941, b: 0.709803922 } }];
                line.opacity = 0.6;
                nodes.push(line);
                // create the type element
                const text = figma.createText();
                text.x = selectionX;
                text.y = line.y - 110; // set the types y value to -130px from the line's y value
                text.resize(selectionWidth, 70);
                text.fontName = { family: "Roboto", style: "Regular" };
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
                // group both the line and type element
                const group = figma.group(nodes, figma.currentPage);
                group.name = selectionName + '-title';
                group.expanded = false;
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
                //console.log(node);
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
                text.y = selectionY + selectionHeight + 80; // set the types y value to 50px below the selection
                text.resize(selectionWidth, 52);
                text.fontName = { family: "Roboto", style: "Regular" };
                text.fontSize = 36;
                text.characters = "Enter your description or notes here...";
                text.textAlignVertical = "TOP";
                text.textAutoResize = "HEIGHT";
                text.fills = [{ type: 'SOLID', color: { r: 0.074509804, g: 0.160784314, b: 0.247058824 } }];
                text.opacity = 0.4;
                nodes.push(text);
                // group type element
                const group = figma.group(nodes, figma.currentPage);
                group.name = selectionName + '-footnote';
                group.expanded = false;
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
        text.fontName = { family: "Roboto", style: "Regular" };
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
        //console.log(annotationCount);
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
        number.fontName = { family: "Roboto", style: "Regular" };
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
        text.fontName = { family: "Roboto", style: "Regular" };
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
    }
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQSwrQkFBK0IscUNBQXFDO0FBQ3BFLCtCQUErQixrQ0FBa0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0EsaUNBQWlDLHdCQUF3QixpREFBaUQsRUFBRTtBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNELCtDQUErQztBQUMvQywyREFBMkQsa0NBQWtDLEVBQUU7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix3QkFBd0IsaURBQWlELEVBQUU7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsd0JBQXdCLGlEQUFpRCxnQkFBZ0I7QUFDcEgsNkJBQTZCLDhCQUE4QixpREFBaUQsOENBQThDO0FBQzFKO0FBQ0E7QUFDQSwyQkFBMkIsd0JBQXdCLGlEQUFpRCxnQkFBZ0I7QUFDcEgsNkJBQTZCLDhCQUE4QixpREFBaUQsOENBQThDO0FBQzFKO0FBQ0E7QUFDQSwyQkFBMkIsd0JBQXdCLGlEQUFpRCxnQkFBZ0I7QUFDcEgsNkJBQTZCLDhCQUE4QixpREFBaUQsOENBQThDO0FBQzFKO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSx1QkFBdUIsd0JBQXdCLHlCQUF5QixFQUFFO0FBQzFFO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QixtQkFBbUIsY0FBYztBQUNoRiw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSx5QkFBeUIsd0JBQXdCLG1CQUFtQixFQUFFO0FBQ3RFO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCLG1CQUFtQixjQUFjO0FBQ2hGLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsdUJBQXVCLHdCQUF3QixtQkFBbUIsRUFBRTtBQUNwRTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0JBQXdCLG1CQUFtQixjQUFjO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0EsQ0FBQyIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiAxNzAsIGhlaWdodDogMzM4IH0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJCb2xkXCIgfSk7XG4gICAgLy8gVElUTEVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBpZiAobXNnLnR5cGUgPT09ICd0aXRsZScgfHwgbXNnLnR5cGUgPT09ICdib3RoJykge1xuICAgICAgICAvLyBGaXJzdCBjaGVjayBpcyB0aGUgdXNlciBoYXMgc29tZXRoaW5nIHNlbGVjdGVkXG4gICAgICAgIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBpZiBub3RoaW5nIGlzIHNlbGVjdGVkLCBzaG93IGFuIGVycm9yXG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShcIm5vLWxheWVyc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHNvbWV0aGluZyBpcyBzZWxlY3RlZCwgYnVpbGQgdGhlIGNvbXBvbmVudHNcbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgdGhlIGl0ZW1zIHRoYXQgYXJlIHNlbGVjdGVkXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgICAgICAgICAvLyBncmFiIHRoZSBjdXJyZW50IHNlbGVjdGlvbidzIHgsIHksIHdpZHRoIGFuZCBuYW1lIHZhbHVlc1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvblggPSBub2RlLng7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uWSA9IG5vZGUueTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25XaWR0aCA9IG5vZGUud2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uTmFtZSA9IG5vZGUubmFtZTtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGxpbmUgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBmaWdtYS5jcmVhdGVMaW5lKCk7XG4gICAgICAgICAgICAgICAgbGluZS54ID0gc2VsZWN0aW9uWDtcbiAgICAgICAgICAgICAgICBsaW5lLnkgPSBzZWxlY3Rpb25ZIC0gMTIwOyAvLyBzZXQgdGhlIGxpbmVzIHkgdmFsdWUgdG8gLTEwMHB4IGFib3ZlIHRoZSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICBsaW5lLnN0cm9rZVdlaWdodCA9IDQ7XG4gICAgICAgICAgICAgICAgbGluZS5yZXNpemUoc2VsZWN0aW9uV2lkdGgsIDApO1xuICAgICAgICAgICAgICAgIGxpbmUuc3Ryb2tlcyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuNjU0OTAxOTYxLCBnOiAwLjY4MjM1Mjk0MSwgYjogMC43MDk4MDM5MjIgfSB9XTtcbiAgICAgICAgICAgICAgICBsaW5lLm9wYWNpdHkgPSAwLjY7XG4gICAgICAgICAgICAgICAgbm9kZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHR5cGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgICAgICAgICAgdGV4dC54ID0gc2VsZWN0aW9uWDtcbiAgICAgICAgICAgICAgICB0ZXh0LnkgPSBsaW5lLnkgLSAxMTA7IC8vIHNldCB0aGUgdHlwZXMgeSB2YWx1ZSB0byAtMTMwcHggZnJvbSB0aGUgbGluZSdzIHkgdmFsdWVcbiAgICAgICAgICAgICAgICB0ZXh0LnJlc2l6ZShzZWxlY3Rpb25XaWR0aCwgNzApO1xuICAgICAgICAgICAgICAgIHRleHQuZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH07XG4gICAgICAgICAgICAgICAgdGV4dC5mb250U2l6ZSA9IDcwO1xuICAgICAgICAgICAgICAgIHRleHQubGV0dGVyU3BhY2luZyA9IHsgdW5pdDogJ1BJWEVMUycsIHZhbHVlOiAtMSB9O1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0Q2hhcnMgPSBcIldlYiDigKIgRnJhbWUgVGl0bGVcIjtcbiAgICAgICAgICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSB0ZXh0Q2hhcnM7XG4gICAgICAgICAgICAgICAgdGV4dC50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiQk9UVE9NXCI7XG4gICAgICAgICAgICAgICAgdGV4dC50ZXh0QXV0b1Jlc2l6ZSA9IFwiSEVJR0hUXCI7XG4gICAgICAgICAgICAgICAgdmFyIHRleHRCcmVhayA9IHRleHRDaGFycy5pbmRleE9mKFwi4oCiXCIpICsgMTsgLy8gZ2V0IHRoZSBjaGFyIG51bWJlciB3aGVyZSB0aGUg4oCiIGFwcGVhcnMgYW5kIGFkZCAxLCB0aGlzIGlzIHRvIGFwcGx5IHRoZSBib2xkIGZvcm1hdHRpbmdcbiAgICAgICAgICAgICAgICB2YXIgdGV4dExlbiA9IHRleHRDaGFycy5sZW5ndGg7IC8vIGdldCB0aGUgdG90YWwgY2hhciBjb3VudFxuICAgICAgICAgICAgICAgIHRleHQuc2V0UmFuZ2VGb250TmFtZSh0ZXh0QnJlYWssIHRleHRMZW4sIHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJCb2xkXCIgfSk7IC8vIHNldCB0aGUgdGV4dCBhZnRlciB0aGUg4oCiIHRvIGJvbGRcbiAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgICAgIC8vIGdyb3VwIGJvdGggdGhlIGxpbmUgYW5kIHR5cGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZmlnbWEuZ3JvdXAobm9kZXMsIGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgICAgICAgICBncm91cC5uYW1lID0gc2VsZWN0aW9uTmFtZSArICctdGl0bGUnO1xuICAgICAgICAgICAgICAgIGdyb3VwLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRk9PVE5PVEVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdmb290bm90ZScgfHwgbXNnLnR5cGUgPT09ICdib3RoJykge1xuICAgICAgICAvLyBGaXJzdCBjaGVjayBpcyB0aGUgdXNlciBoYXMgc29tZXRoaW5nIHNlbGVjdGVkXG4gICAgICAgIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBpZiBub3RoaW5nIGlzIHNlbGVjdGVkLCBzaG93IGFuIGVycm9yXG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShcIm5vLWxheWVyc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHNvbWV0aGluZyBpcyBzZWxlY3RlZCwgYnVpbGQgdGhlIGNvbXBvbmVudHNcbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgdGhlIGl0ZW1zIHRoYXQgYXJlIHNlbGVjdGVkXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgICAgICAgICAvLyBncmFiIHRoZSBjdXJyZW50IHNlbGVjdGlvbidzIHgsIHksIHdpZHRoLCBoZWlnaHQgYW5kIG5hbWUgdmFsdWVzXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uWCA9IG5vZGUueDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25ZID0gbm9kZS55O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbldpZHRoID0gbm9kZS53aWR0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25IZWlnaHQgPSBub2RlLmhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25OYW1lID0gbm9kZS5uYW1lO1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgZWxlbWVudHNcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgdHlwZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgICAgICAgICB0ZXh0LnggPSBzZWxlY3Rpb25YO1xuICAgICAgICAgICAgICAgIHRleHQueSA9IHNlbGVjdGlvblkgKyBzZWxlY3Rpb25IZWlnaHQgKyA4MDsgLy8gc2V0IHRoZSB0eXBlcyB5IHZhbHVlIHRvIDUwcHggYmVsb3cgdGhlIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIHRleHQucmVzaXplKHNlbGVjdGlvbldpZHRoLCA1Mik7XG4gICAgICAgICAgICAgICAgdGV4dC5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbiAgICAgICAgICAgICAgICB0ZXh0LmZvbnRTaXplID0gMzY7XG4gICAgICAgICAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gXCJFbnRlciB5b3VyIGRlc2NyaXB0aW9uIG9yIG5vdGVzIGhlcmUuLi5cIjtcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRBbGlnblZlcnRpY2FsID0gXCJUT1BcIjtcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRBdXRvUmVzaXplID0gXCJIRUlHSFRcIjtcbiAgICAgICAgICAgICAgICB0ZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMC4wNzQ1MDk4MDQsIGc6IDAuMTYwNzg0MzE0LCBiOiAwLjI0NzA1ODgyNCB9IH1dO1xuICAgICAgICAgICAgICAgIHRleHQub3BhY2l0eSA9IDAuNDtcbiAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgICAgIC8vIGdyb3VwIHR5cGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZmlnbWEuZ3JvdXAobm9kZXMsIGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgICAgICAgICBncm91cC5uYW1lID0gc2VsZWN0aW9uTmFtZSArICctZm9vdG5vdGUnO1xuICAgICAgICAgICAgICAgIGdyb3VwLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gU1RJQ0tZIE5PVEVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdzdGlja3ktZ3JlZW4nIHx8IG1zZy50eXBlID09PSAnc3RpY2t5LXllbGxvdycgfHwgbXNnLnR5cGUgPT09ICdzdGlja3ktcmVkJykge1xuICAgICAgICAvLyBncmFiIHRoZSB4IGFuZCB5IHZhbHVlcyBvZiB0aGUgY3VycmVudCB2aWV3cG9ydCBjZW50cmFsIHBvaW50XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci55O1xuICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgcmVjdGFuZ2xlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgcmVjdCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgICAgICByZWN0LnJlc2l6ZSg1MDAsIDUwMCk7XG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSB1c2VyIHdhbnRlZCB0aGUgZ3JlZW4sIHllbGxvdyBvciByZWQgc3R5bGluZ1xuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdzdGlja3ktZ3JlZW4nKSB7XG4gICAgICAgICAgICByZWN0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMC40MzUyOTQxMTgsIGc6IDAuODExNzY0NzA2LCBiOiAwLjU5MjE1Njg2MyB9LCBvcGFjaXR5OiAwLjUgfV07XG4gICAgICAgICAgICByZWN0LnN0cm9rZXMgPSBbeyBibGVuZE1vZGU6IFwiTk9STUFMXCIsIGNvbG9yOiB7IHI6IDAuMzk2MDc4NDMxLCBnOiAwLjc0MTE3NjQ3MSwgYjogMC41NDExNzY0NzEgfSwgb3BhY2l0eTogMC40LCB0eXBlOiBcIlNPTElEXCIsIHZpc2libGU6IHRydWUgfV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAnc3RpY2t5LXllbGxvdycpIHtcbiAgICAgICAgICAgIHJlY3QuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjk0OTAxOTYwOCwgZzogMC43ODgyMzUyOTQsIGI6IDAuMjk4MDM5MjE2IH0sIG9wYWNpdHk6IDAuNSB9XTtcbiAgICAgICAgICAgIHJlY3Quc3Ryb2tlcyA9IFt7IGJsZW5kTW9kZTogXCJOT1JNQUxcIiwgY29sb3I6IHsgcjogMC44OTgwMzkyMTYsIGc6IDAuNzQ5MDE5NjA4LCBiOiAwLjI4MjM1Mjk0MSB9LCBvcGFjaXR5OiAwLjQsIHR5cGU6IFwiU09MSURcIiwgdmlzaWJsZTogdHJ1ZSB9XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdzdGlja3ktcmVkJykge1xuICAgICAgICAgICAgcmVjdC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuOTIxNTY4NjI3LCBnOiAwLjM0MTE3NjQ3MSwgYjogMC4zNDExNzY0NzEgfSwgb3BhY2l0eTogMC41IH1dO1xuICAgICAgICAgICAgcmVjdC5zdHJva2VzID0gW3sgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLCBjb2xvcjogeyByOiAwLjcyMTU2ODYyNywgZzogMC4yNjY2NjY2NjcsIGI6IDAuMjY2NjY2NjY3IH0sIG9wYWNpdHk6IDAuMiwgdHlwZTogXCJTT0xJRFwiLCB2aXNpYmxlOiB0cnVlIH1dO1xuICAgICAgICB9XG4gICAgICAgIHJlY3Quc3Ryb2tlV2VpZ2h0ID0gMTA7XG4gICAgICAgIHJlY3QuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiU0NBTEVcIiwgdmVydGljYWw6IFwiU0NBTEVcIiB9O1xuICAgICAgICBub2Rlcy5wdXNoKHJlY3QpO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIHR5cGUgZWxlbWVudFxuICAgICAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICB0ZXh0LnggPSByZWN0LnggKyA0MDtcbiAgICAgICAgdGV4dC55ID0gcmVjdC55ICsgNDA7XG4gICAgICAgIHRleHQucmVzaXplKDQyMCwgNDIwKTtcbiAgICAgICAgdGV4dC5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbiAgICAgICAgdGV4dC5mb250U2l6ZSA9IDM2O1xuICAgICAgICB0ZXh0LnBhcmFncmFwaFNwYWNpbmcgPSAyMDtcbiAgICAgICAgdGV4dC5saW5lSGVpZ2h0ID0geyB1bml0OiAnUElYRUxTJywgdmFsdWU6IDQ2IH07XG4gICAgICAgIHRleHQuY2hhcmFjdGVycyA9IFwiRW50ZXIgTm90ZSBDb250ZW50Li4uXCI7XG4gICAgICAgIHRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjIsIGc6IDAuMiwgYjogMC4yIH0gfV07XG4gICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIlRPUFwiO1xuICAgICAgICB0ZXh0LmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiBcIlNUUkVUQ0hcIiwgdmVydGljYWw6IFwiU1RSRVRDSFwiIH07XG4gICAgICAgIG5vZGVzLnB1c2godGV4dCk7XG4gICAgICAgIC8vIGNyZWF0ZSBhIGZyYW1lIGVsZW1lbnQgYW5kIGFwcGVuZCB0aGUgdHlwZSBhbmQgcmVjdCBlbGVtZW50cyBiZWZvcmUgYWRkaW5nIGl0IHRvIHRoZSBjZW50ZXIgb2YgdGhlIHZpZXdwb3J0XG4gICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgZnJhbWUucmVzaXplKDUwMCwgNTAwKTtcbiAgICAgICAgZnJhbWUueCA9IGNlbnRlclg7XG4gICAgICAgIGZyYW1lLnkgPSBjZW50ZXJZO1xuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChyZWN0KTtcbiAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGZyYW1lLm5hbWUgPSBcIlN0aWNreSBOb3RlXCI7XG4gICAgfVxuICAgIC8vIEFOTk9UQVRJT05cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdhbm5vdGF0aW9uJykge1xuICAgICAgICAvLyBncmFiIHRoZSB4IGFuZCB5IHZhbHVlcyBvZiB0aGUgY3VycmVudCB2aWV3cG9ydCBjZW50cmFsIHBvaW50XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci55O1xuICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgICAgIC8vIGdyYWIgYWxsIHRoZSBleGlzdGluZyBhbm5vdGF0aW9ucyBpbiB0aGUgdmlld3BvcnQsIGdldCB0aGUgdG90YWwgYW5kIGFkZCBvbmUgdG8gc2V0IHRoZSBuZXcgYW5ub3RhdGlvbnMgY291bnRcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbkNvdW50ID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZEFsbChub2RlID0+IG5vZGUudHlwZSA9PT0gJ0ZSQU1FJyAmJiBub2RlLm5hbWUuaW5jbHVkZXMoJ2Fubm90YXRpb24tJykpLmxlbmd0aCArIDE7XG4gICAgICAgIC8vY29uc29sZS5sb2coYW5ub3RhdGlvbkNvdW50KTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBjb3VudGVyIGVsZW1lbnRcbiAgICAgICAgLy8gY3JlYXRlIHRoZSByZWN0YW5nbGUgZm9yIHRoZSBjb3VudGVyXG4gICAgICAgIGNvbnN0IGRpc2MgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgZGlzYy5yZXNpemUoMjQsIDI0KTtcbiAgICAgICAgZGlzYy5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSwgb3BhY2l0eTogMSB9XTtcbiAgICAgICAgZGlzYy5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogXCJNSU5cIiwgdmVydGljYWw6IFwiTUlOXCIgfTtcbiAgICAgICAgZGlzYy5jb3JuZXJSYWRpdXMgPSAxMjtcbiAgICAgICAgbm9kZXMucHVzaChkaXNjKTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSB0eXBlIGZvciB0aGUgY291bnRlclxuICAgICAgICBjb25zdCBudW1iZXIgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIG51bWJlci54ID0gZGlzYy54O1xuICAgICAgICBudW1iZXIueSA9IGRpc2MueTtcbiAgICAgICAgbnVtYmVyLnJlc2l6ZSgyNCwgMjQpO1xuICAgICAgICBudW1iZXIuZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH07XG4gICAgICAgIG51bWJlci5mb250U2l6ZSA9IDEyO1xuICAgICAgICBudW1iZXIubGluZUhlaWdodCA9IHsgdW5pdDogJ1BJWEVMUycsIHZhbHVlOiAxMiB9O1xuICAgICAgICBudW1iZXIuY2hhcmFjdGVycyA9IGFubm90YXRpb25Db3VudC50b1N0cmluZygpO1xuICAgICAgICBudW1iZXIuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0gfV07XG4gICAgICAgIG51bWJlci50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiQ0VOVEVSXCI7XG4gICAgICAgIG51bWJlci50ZXh0QWxpZ25Ib3Jpem9udGFsID0gXCJDRU5URVJcIjtcbiAgICAgICAgbnVtYmVyLmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiBcIk1JTlwiLCB2ZXJ0aWNhbDogXCJNSU5cIiB9O1xuICAgICAgICBub2Rlcy5wdXNoKG51bWJlcik7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgY29udGVudCBlbGVtZW50XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgcmVjdGFuZ2xlIGZvciB0aGUgY29udGVudCBiYWNrZ3JvdW5kXG4gICAgICAgIGNvbnN0IHJlY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgcmVjdC54ID0gZGlzYy54ICsgNDA7XG4gICAgICAgIHJlY3QueSA9IGRpc2MueTtcbiAgICAgICAgcmVjdC5yZXNpemUoMzAwLCA2MCk7XG4gICAgICAgIHJlY3QuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0sIG9wYWNpdHk6IDEgfV07XG4gICAgICAgIHJlY3QuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiU1RSRVRDSFwiLCB2ZXJ0aWNhbDogXCJTVFJFVENIXCIgfTtcbiAgICAgICAgcmVjdC5jb3JuZXJSYWRpdXMgPSA2O1xuICAgICAgICBub2Rlcy5wdXNoKHJlY3QpO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIHR5cGUgZm9yIHRoZSBjb250ZW50IHRleHRcbiAgICAgICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgdGV4dC54ID0gcmVjdC54ICsgODtcbiAgICAgICAgdGV4dC55ID0gcmVjdC55ICsgODtcbiAgICAgICAgdGV4dC5yZXNpemUoMjg0LCA0NCk7XG4gICAgICAgIHRleHQuZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH07XG4gICAgICAgIHRleHQuZm9udFNpemUgPSAxNDtcbiAgICAgICAgdGV4dC5wYXJhZ3JhcGhTcGFjaW5nID0gMTA7XG4gICAgICAgIHRleHQubGluZUhlaWdodCA9IHsgdW5pdDogJ1BJWEVMUycsIHZhbHVlOiAyMCB9O1xuICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBcIkFkZCB5b3VyIGFubm90YXRpb24gY29udGVudCBoZXJlLi4uXCI7XG4gICAgICAgIHRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0gfV07XG4gICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIlRPUFwiO1xuICAgICAgICB0ZXh0LmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiBcIlNUUkVUQ0hcIiwgdmVydGljYWw6IFwiU1RSRVRDSFwiIH07XG4gICAgICAgIG5vZGVzLnB1c2godGV4dCk7XG4gICAgICAgIC8vIGNyZWF0ZSBhIGZyYW1lIGVsZW1lbnQgYW5kIGFwcGVuZCB0aGUgY291bnRlciBhbmQgY29udGVudCBlbGVtZW50cyBiZWZvcmUgYWRkaW5nIGl0IHRvIHRoZSBjZW50ZXIgb2YgdGhlIHZpZXdwb3J0XG4gICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgZnJhbWUucmVzaXplKDM0MCwgNjApO1xuICAgICAgICBmcmFtZS54ID0gY2VudGVyWDtcbiAgICAgICAgZnJhbWUueSA9IGNlbnRlclk7XG4gICAgICAgIGZyYW1lLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCB9LCBvcGFjaXR5OiAwIH1dO1xuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChkaXNjKTtcbiAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQobnVtYmVyKTtcbiAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQocmVjdCk7XG4gICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBmcmFtZS5uYW1lID0gXCJhbm5vdGF0aW9uLVwiICsgYW5ub3RhdGlvbkNvdW50OyAvLyBhcHBlbmQgdGhlIG5leHQgY291bnQgdG8gdGhlIGFubm90YXRpb24gdGl0bGVcbiAgICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=