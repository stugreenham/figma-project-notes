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
figma.showUI(__html__, { width: 180, height: 384 });
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    yield figma.loadFontAsync({ family: "Roboto", style: "Regular" });
    yield figma.loadFontAsync({ family: "Roboto", style: "Bold" });
    // console.log(msg.type);
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
                line.y = selectionY - 60; // set the lines y value to -60px above the selection
                line.strokeWeight = 4;
                line.resize(selectionWidth, 0);
                line.strokes = [{ type: 'SOLID', color: { r: 0.654901961, g: 0.682352941, b: 0.709803922 } }];
                line.opacity = 0.6;
                nodes.push(line);
                // create the type element
                const text = figma.createText();
                text.x = selectionX;
                text.y = line.y - 75; // set the types y value to -75px from the line's y value
                text.resize(selectionWidth, 50);
                //text.fontName = { family: "Roboto", style: "Regular" }
                text.fontName = { family: "Roboto", style: "Bold" };
                text.fontSize = 50;
                text.letterSpacing = { unit: 'PIXELS', value: -1 };
                //var textChars = "Web • Frame Title";
                var textChars = "Frame Title";
                text.characters = textChars;
                text.textAlignVertical = "BOTTOM";
                text.textAutoResize = "HEIGHT";
                //var textBreak = textChars.indexOf("•") + 1; // get the char number where the • appears and add 1, this is to apply the bold formatting
                //var textLen = textChars.length; // get the total char count
                //text.setRangeFontName(textBreak, textLen, { family: "Roboto", style: "Bold" } ); // set the text after the • to bold
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
                text.y = selectionY + selectionHeight + 60; // set the types y value to 50px below the selection
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
    // ANNOTATION (LEFT)
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
        rect.x = disc.x + 32;
        rect.y = disc.y;
        rect.resize(308, 60);
        rect.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 }, opacity: 1 }];
        rect.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        rect.cornerRadius = 6;
        nodes.push(rect);
        // create the type for the content text
        const text = figma.createText();
        text.x = rect.x + 12;
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
    // ANNOTATION (RIGHT)
    //-------------------------------
    if (msg.type === 'annotation-alt') {
        // grab the x and y values of the current viewport central point
        const centerX = figma.viewport.center.x;
        const centerY = figma.viewport.center.y;
        // create an array to store the elements
        const nodes = [];
        // grab all the existing annotations in the viewport, get the total and add one to set the new annotations count
        const annotationCount = figma.currentPage.findAll(node => node.type === 'FRAME' && node.name.includes('annotation-')).length + 1;
        //console.log(annotationCount);
        // create the content element
        // create the rectangle for the content background
        const rect = figma.createRectangle();
        //rect.x = disc.x + 40;
        //rect.y = disc.y;
        rect.resize(308, 60);
        rect.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 }, opacity: 1 }];
        rect.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        rect.cornerRadius = 6;
        nodes.push(rect);
        // create the type for the content text
        const text = figma.createText();
        text.x = rect.x + 12;
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
        // create the counter element
        // create the rectangle for the counter
        const disc = figma.createRectangle();
        disc.resize(24, 24);
        disc.x = rect.x + 316;
        disc.y = rect.y;
        disc.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 }, opacity: 1 }];
        disc.constraints = { horizontal: "MAX", vertical: "MIN" };
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
        number.constraints = { horizontal: "MAX", vertical: "MIN" };
        nodes.push(number);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQSwrQkFBK0IscUNBQXFDO0FBQ3BFLCtCQUErQixrQ0FBa0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUMzQjtBQUNBLHVCQUF1Qix3QkFBd0IsbUJBQW1CLEVBQUU7QUFDcEU7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCLG1CQUFtQixjQUFjO0FBQ2hGLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLHlCQUF5Qix3QkFBd0IsbUJBQW1CLEVBQUU7QUFDdEU7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0JBQXdCLG1CQUFtQixjQUFjO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0EsQ0FBQyIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiAxODAsIGhlaWdodDogMzg0IH0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJCb2xkXCIgfSk7XG4gICAgLy8gY29uc29sZS5sb2cobXNnLnR5cGUpO1xuICAgIC8vIFRJVExFXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaWYgKG1zZy50eXBlID09PSAndGl0bGUnIHx8IG1zZy50eXBlID09PSAnYm90aCcpIHtcbiAgICAgICAgLy8gRmlyc3QgY2hlY2sgaXMgdGhlIHVzZXIgaGFzIHNvbWV0aGluZyBzZWxlY3RlZFxuICAgICAgICBpZiAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gaWYgbm90aGluZyBpcyBzZWxlY3RlZCwgc2hvdyBhbiBlcnJvclxuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoXCJuby1sYXllcnNcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiBzb21ldGhpbmcgaXMgc2VsZWN0ZWQsIGJ1aWxkIHRoZSBjb21wb25lbnRzXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHRoZSBpdGVtcyB0aGF0IGFyZSBzZWxlY3RlZFxuICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobm9kZSk7XG4gICAgICAgICAgICAgICAgLy8gZ3JhYiB0aGUgY3VycmVudCBzZWxlY3Rpb24ncyB4LCB5LCB3aWR0aCBhbmQgbmFtZSB2YWx1ZXNcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25YID0gbm9kZS54O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvblkgPSBub2RlLnk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uV2lkdGggPSBub2RlLndpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbk5hbWUgPSBub2RlLm5hbWU7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGFycmF5IHRvIHN0b3JlIHRoZSBlbGVtZW50c1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBsaW5lIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gZmlnbWEuY3JlYXRlTGluZSgpO1xuICAgICAgICAgICAgICAgIGxpbmUueCA9IHNlbGVjdGlvblg7XG4gICAgICAgICAgICAgICAgbGluZS55ID0gc2VsZWN0aW9uWSAtIDYwOyAvLyBzZXQgdGhlIGxpbmVzIHkgdmFsdWUgdG8gLTYwcHggYWJvdmUgdGhlIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIGxpbmUuc3Ryb2tlV2VpZ2h0ID0gNDtcbiAgICAgICAgICAgICAgICBsaW5lLnJlc2l6ZShzZWxlY3Rpb25XaWR0aCwgMCk7XG4gICAgICAgICAgICAgICAgbGluZS5zdHJva2VzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMC42NTQ5MDE5NjEsIGc6IDAuNjgyMzUyOTQxLCBiOiAwLjcwOTgwMzkyMiB9IH1dO1xuICAgICAgICAgICAgICAgIGxpbmUub3BhY2l0eSA9IDAuNjtcbiAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgdHlwZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgICAgICAgICB0ZXh0LnggPSBzZWxlY3Rpb25YO1xuICAgICAgICAgICAgICAgIHRleHQueSA9IGxpbmUueSAtIDc1OyAvLyBzZXQgdGhlIHR5cGVzIHkgdmFsdWUgdG8gLTc1cHggZnJvbSB0aGUgbGluZSdzIHkgdmFsdWVcbiAgICAgICAgICAgICAgICB0ZXh0LnJlc2l6ZShzZWxlY3Rpb25XaWR0aCwgNTApO1xuICAgICAgICAgICAgICAgIC8vdGV4dC5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfVxuICAgICAgICAgICAgICAgIHRleHQuZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiQm9sZFwiIH07XG4gICAgICAgICAgICAgICAgdGV4dC5mb250U2l6ZSA9IDUwO1xuICAgICAgICAgICAgICAgIHRleHQubGV0dGVyU3BhY2luZyA9IHsgdW5pdDogJ1BJWEVMUycsIHZhbHVlOiAtMSB9O1xuICAgICAgICAgICAgICAgIC8vdmFyIHRleHRDaGFycyA9IFwiV2ViIOKAoiBGcmFtZSBUaXRsZVwiO1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0Q2hhcnMgPSBcIkZyYW1lIFRpdGxlXCI7XG4gICAgICAgICAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gdGV4dENoYXJzO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIkJPVFRPTVwiO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICAgICAgICAgIC8vdmFyIHRleHRCcmVhayA9IHRleHRDaGFycy5pbmRleE9mKFwi4oCiXCIpICsgMTsgLy8gZ2V0IHRoZSBjaGFyIG51bWJlciB3aGVyZSB0aGUg4oCiIGFwcGVhcnMgYW5kIGFkZCAxLCB0aGlzIGlzIHRvIGFwcGx5IHRoZSBib2xkIGZvcm1hdHRpbmdcbiAgICAgICAgICAgICAgICAvL3ZhciB0ZXh0TGVuID0gdGV4dENoYXJzLmxlbmd0aDsgLy8gZ2V0IHRoZSB0b3RhbCBjaGFyIGNvdW50XG4gICAgICAgICAgICAgICAgLy90ZXh0LnNldFJhbmdlRm9udE5hbWUodGV4dEJyZWFrLCB0ZXh0TGVuLCB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiQm9sZFwiIH0gKTsgLy8gc2V0IHRoZSB0ZXh0IGFmdGVyIHRoZSDigKIgdG8gYm9sZFxuICAgICAgICAgICAgICAgIG5vZGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICAgICAgLy8gZ3JvdXAgYm90aCB0aGUgbGluZSBhbmQgdHlwZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBmaWdtYS5ncm91cChub2RlcywgZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgICAgICAgICAgICAgIGdyb3VwLm5hbWUgPSBzZWxlY3Rpb25OYW1lICsgJy10aXRsZSc7XG4gICAgICAgICAgICAgICAgZ3JvdXAuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBGT09UTk9URVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2Zvb3Rub3RlJyB8fCBtc2cudHlwZSA9PT0gJ2JvdGgnKSB7XG4gICAgICAgIC8vIEZpcnN0IGNoZWNrIGlzIHRoZSB1c2VyIGhhcyBzb21ldGhpbmcgc2VsZWN0ZWRcbiAgICAgICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIGlmIG5vdGhpbmcgaXMgc2VsZWN0ZWQsIHNob3cgYW4gZXJyb3JcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKFwibm8tbGF5ZXJzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgc29tZXRoaW5nIGlzIHNlbGVjdGVkLCBidWlsZCB0aGUgY29tcG9uZW50c1xuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCB0aGUgaXRlbXMgdGhhdCBhcmUgc2VsZWN0ZWRcbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICAgICAgICAgIC8vIGdyYWIgdGhlIGN1cnJlbnQgc2VsZWN0aW9uJ3MgeCwgeSwgd2lkdGgsIGhlaWdodCBhbmQgbmFtZSB2YWx1ZXNcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25YID0gbm9kZS54O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvblkgPSBub2RlLnk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uV2lkdGggPSBub2RlLndpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbkhlaWdodCA9IG5vZGUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbk5hbWUgPSBub2RlLm5hbWU7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGFycmF5IHRvIHN0b3JlIHRoZSBlbGVtZW50c1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSB0eXBlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICAgICAgICAgIHRleHQueCA9IHNlbGVjdGlvblg7XG4gICAgICAgICAgICAgICAgdGV4dC55ID0gc2VsZWN0aW9uWSArIHNlbGVjdGlvbkhlaWdodCArIDYwOyAvLyBzZXQgdGhlIHR5cGVzIHkgdmFsdWUgdG8gNTBweCBiZWxvdyB0aGUgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgdGV4dC5yZXNpemUoc2VsZWN0aW9uV2lkdGgsIDUyKTtcbiAgICAgICAgICAgICAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuICAgICAgICAgICAgICAgIHRleHQuZm9udFNpemUgPSAzNjtcbiAgICAgICAgICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBcIkVudGVyIHlvdXIgZGVzY3JpcHRpb24gb3Igbm90ZXMgaGVyZS4uLlwiO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIlRPUFwiO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICAgICAgICAgIHRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjA3NDUwOTgwNCwgZzogMC4xNjA3ODQzMTQsIGI6IDAuMjQ3MDU4ODI0IH0gfV07XG4gICAgICAgICAgICAgICAgdGV4dC5vcGFjaXR5ID0gMC40O1xuICAgICAgICAgICAgICAgIG5vZGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICAgICAgLy8gZ3JvdXAgdHlwZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBmaWdtYS5ncm91cChub2RlcywgZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgICAgICAgICAgICAgIGdyb3VwLm5hbWUgPSBzZWxlY3Rpb25OYW1lICsgJy1mb290bm90ZSc7XG4gICAgICAgICAgICAgICAgZ3JvdXAuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBTVElDS1kgTk9URVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3N0aWNreS1ncmVlbicgfHwgbXNnLnR5cGUgPT09ICdzdGlja3kteWVsbG93JyB8fCBtc2cudHlwZSA9PT0gJ3N0aWNreS1yZWQnKSB7XG4gICAgICAgIC8vIGdyYWIgdGhlIHggYW5kIHkgdmFsdWVzIG9mIHRoZSBjdXJyZW50IHZpZXdwb3J0IGNlbnRyYWwgcG9pbnRcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci54O1xuICAgICAgICBjb25zdCBjZW50ZXJZID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnk7XG4gICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgZWxlbWVudHNcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSByZWN0YW5nbGUgZWxlbWVudFxuICAgICAgICBjb25zdCByZWN0ID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgIHJlY3QucmVzaXplKDUwMCwgNTAwKTtcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHVzZXIgd2FudGVkIHRoZSBncmVlbiwgeWVsbG93IG9yIHJlZCBzdHlsaW5nXG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3N0aWNreS1ncmVlbicpIHtcbiAgICAgICAgICAgIHJlY3QuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjQzNTI5NDExOCwgZzogMC44MTE3NjQ3MDYsIGI6IDAuNTkyMTU2ODYzIH0sIG9wYWNpdHk6IDAuNSB9XTtcbiAgICAgICAgICAgIHJlY3Quc3Ryb2tlcyA9IFt7IGJsZW5kTW9kZTogXCJOT1JNQUxcIiwgY29sb3I6IHsgcjogMC4zOTYwNzg0MzEsIGc6IDAuNzQxMTc2NDcxLCBiOiAwLjU0MTE3NjQ3MSB9LCBvcGFjaXR5OiAwLjQsIHR5cGU6IFwiU09MSURcIiwgdmlzaWJsZTogdHJ1ZSB9XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdzdGlja3kteWVsbG93Jykge1xuICAgICAgICAgICAgcmVjdC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuOTQ5MDE5NjA4LCBnOiAwLjc4ODIzNTI5NCwgYjogMC4yOTgwMzkyMTYgfSwgb3BhY2l0eTogMC41IH1dO1xuICAgICAgICAgICAgcmVjdC5zdHJva2VzID0gW3sgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLCBjb2xvcjogeyByOiAwLjg5ODAzOTIxNiwgZzogMC43NDkwMTk2MDgsIGI6IDAuMjgyMzUyOTQxIH0sIG9wYWNpdHk6IDAuNCwgdHlwZTogXCJTT0xJRFwiLCB2aXNpYmxlOiB0cnVlIH1dO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3N0aWNreS1yZWQnKSB7XG4gICAgICAgICAgICByZWN0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMC45MjE1Njg2MjcsIGc6IDAuMzQxMTc2NDcxLCBiOiAwLjM0MTE3NjQ3MSB9LCBvcGFjaXR5OiAwLjUgfV07XG4gICAgICAgICAgICByZWN0LnN0cm9rZXMgPSBbeyBibGVuZE1vZGU6IFwiTk9STUFMXCIsIGNvbG9yOiB7IHI6IDAuNzIxNTY4NjI3LCBnOiAwLjI2NjY2NjY2NywgYjogMC4yNjY2NjY2NjcgfSwgb3BhY2l0eTogMC4yLCB0eXBlOiBcIlNPTElEXCIsIHZpc2libGU6IHRydWUgfV07XG4gICAgICAgIH1cbiAgICAgICAgcmVjdC5zdHJva2VXZWlnaHQgPSAxMDtcbiAgICAgICAgcmVjdC5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogXCJTQ0FMRVwiLCB2ZXJ0aWNhbDogXCJTQ0FMRVwiIH07XG4gICAgICAgIG5vZGVzLnB1c2gocmVjdCk7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgdHlwZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIHRleHQueCA9IHJlY3QueCArIDQwO1xuICAgICAgICB0ZXh0LnkgPSByZWN0LnkgKyA0MDtcbiAgICAgICAgdGV4dC5yZXNpemUoNDIwLCA0MjApO1xuICAgICAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuICAgICAgICB0ZXh0LmZvbnRTaXplID0gMzY7XG4gICAgICAgIHRleHQucGFyYWdyYXBoU3BhY2luZyA9IDIwO1xuICAgICAgICB0ZXh0LmxpbmVIZWlnaHQgPSB7IHVuaXQ6ICdQSVhFTFMnLCB2YWx1ZTogNDYgfTtcbiAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gXCJFbnRlciBOb3RlIENvbnRlbnQuLi5cIjtcbiAgICAgICAgdGV4dC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuMiwgZzogMC4yLCBiOiAwLjIgfSB9XTtcbiAgICAgICAgdGV4dC50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiVE9QXCI7XG4gICAgICAgIHRleHQuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiU1RSRVRDSFwiLCB2ZXJ0aWNhbDogXCJTVFJFVENIXCIgfTtcbiAgICAgICAgbm9kZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgLy8gY3JlYXRlIGEgZnJhbWUgZWxlbWVudCBhbmQgYXBwZW5kIHRoZSB0eXBlIGFuZCByZWN0IGVsZW1lbnRzIGJlZm9yZSBhZGRpbmcgaXQgdG8gdGhlIGNlbnRlciBvZiB0aGUgdmlld3BvcnRcbiAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBmcmFtZS5yZXNpemUoNTAwLCA1MDApO1xuICAgICAgICBmcmFtZS54ID0gY2VudGVyWDtcbiAgICAgICAgZnJhbWUueSA9IGNlbnRlclk7XG4gICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKHJlY3QpO1xuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgZnJhbWUubmFtZSA9IFwiU3RpY2t5IE5vdGVcIjtcbiAgICB9XG4gICAgLy8gQU5OT1RBVElPTiAoTEVGVClcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdhbm5vdGF0aW9uJykge1xuICAgICAgICAvLyBncmFiIHRoZSB4IGFuZCB5IHZhbHVlcyBvZiB0aGUgY3VycmVudCB2aWV3cG9ydCBjZW50cmFsIHBvaW50XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci55O1xuICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgICAgIC8vIGdyYWIgYWxsIHRoZSBleGlzdGluZyBhbm5vdGF0aW9ucyBpbiB0aGUgdmlld3BvcnQsIGdldCB0aGUgdG90YWwgYW5kIGFkZCBvbmUgdG8gc2V0IHRoZSBuZXcgYW5ub3RhdGlvbnMgY291bnRcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbkNvdW50ID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZEFsbChub2RlID0+IG5vZGUudHlwZSA9PT0gJ0ZSQU1FJyAmJiBub2RlLm5hbWUuaW5jbHVkZXMoJ2Fubm90YXRpb24tJykpLmxlbmd0aCArIDE7XG4gICAgICAgIC8vY29uc29sZS5sb2coYW5ub3RhdGlvbkNvdW50KTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBjb3VudGVyIGVsZW1lbnRcbiAgICAgICAgLy8gY3JlYXRlIHRoZSByZWN0YW5nbGUgZm9yIHRoZSBjb3VudGVyXG4gICAgICAgIGNvbnN0IGRpc2MgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgZGlzYy5yZXNpemUoMjQsIDI0KTtcbiAgICAgICAgZGlzYy5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSwgb3BhY2l0eTogMSB9XTtcbiAgICAgICAgZGlzYy5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogXCJNSU5cIiwgdmVydGljYWw6IFwiTUlOXCIgfTtcbiAgICAgICAgZGlzYy5jb3JuZXJSYWRpdXMgPSAxMjtcbiAgICAgICAgbm9kZXMucHVzaChkaXNjKTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSB0eXBlIGZvciB0aGUgY291bnRlclxuICAgICAgICBjb25zdCBudW1iZXIgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIG51bWJlci54ID0gZGlzYy54O1xuICAgICAgICBudW1iZXIueSA9IGRpc2MueTtcbiAgICAgICAgbnVtYmVyLnJlc2l6ZSgyNCwgMjQpO1xuICAgICAgICBudW1iZXIuZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH07XG4gICAgICAgIG51bWJlci5mb250U2l6ZSA9IDEyO1xuICAgICAgICBudW1iZXIubGluZUhlaWdodCA9IHsgdW5pdDogJ1BJWEVMUycsIHZhbHVlOiAxMiB9O1xuICAgICAgICBudW1iZXIuY2hhcmFjdGVycyA9IGFubm90YXRpb25Db3VudC50b1N0cmluZygpO1xuICAgICAgICBudW1iZXIuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0gfV07XG4gICAgICAgIG51bWJlci50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiQ0VOVEVSXCI7XG4gICAgICAgIG51bWJlci50ZXh0QWxpZ25Ib3Jpem9udGFsID0gXCJDRU5URVJcIjtcbiAgICAgICAgbnVtYmVyLmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiBcIk1JTlwiLCB2ZXJ0aWNhbDogXCJNSU5cIiB9O1xuICAgICAgICBub2Rlcy5wdXNoKG51bWJlcik7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgY29udGVudCBlbGVtZW50XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgcmVjdGFuZ2xlIGZvciB0aGUgY29udGVudCBiYWNrZ3JvdW5kXG4gICAgICAgIGNvbnN0IHJlY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgcmVjdC54ID0gZGlzYy54ICsgMzI7XG4gICAgICAgIHJlY3QueSA9IGRpc2MueTtcbiAgICAgICAgcmVjdC5yZXNpemUoMzA4LCA2MCk7XG4gICAgICAgIHJlY3QuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0sIG9wYWNpdHk6IDEgfV07XG4gICAgICAgIHJlY3QuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiU1RSRVRDSFwiLCB2ZXJ0aWNhbDogXCJTVFJFVENIXCIgfTtcbiAgICAgICAgcmVjdC5jb3JuZXJSYWRpdXMgPSA2O1xuICAgICAgICBub2Rlcy5wdXNoKHJlY3QpO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIHR5cGUgZm9yIHRoZSBjb250ZW50IHRleHRcbiAgICAgICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgdGV4dC54ID0gcmVjdC54ICsgMTI7XG4gICAgICAgIHRleHQueSA9IHJlY3QueSArIDg7XG4gICAgICAgIHRleHQucmVzaXplKDI4NCwgNDQpO1xuICAgICAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuICAgICAgICB0ZXh0LmZvbnRTaXplID0gMTQ7XG4gICAgICAgIHRleHQucGFyYWdyYXBoU3BhY2luZyA9IDEwO1xuICAgICAgICB0ZXh0LmxpbmVIZWlnaHQgPSB7IHVuaXQ6ICdQSVhFTFMnLCB2YWx1ZTogMjAgfTtcbiAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gXCJBZGQgeW91ciBhbm5vdGF0aW9uIGNvbnRlbnQgaGVyZS4uLlwiO1xuICAgICAgICB0ZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9IH1dO1xuICAgICAgICB0ZXh0LnRleHRBbGlnblZlcnRpY2FsID0gXCJUT1BcIjtcbiAgICAgICAgdGV4dC5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogXCJTVFJFVENIXCIsIHZlcnRpY2FsOiBcIlNUUkVUQ0hcIiB9O1xuICAgICAgICBub2Rlcy5wdXNoKHRleHQpO1xuICAgICAgICAvLyBjcmVhdGUgYSBmcmFtZSBlbGVtZW50IGFuZCBhcHBlbmQgdGhlIGNvdW50ZXIgYW5kIGNvbnRlbnQgZWxlbWVudHMgYmVmb3JlIGFkZGluZyBpdCB0byB0aGUgY2VudGVyIG9mIHRoZSB2aWV3cG9ydFxuICAgICAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGZyYW1lLnJlc2l6ZSgzNDAsIDYwKTtcbiAgICAgICAgZnJhbWUueCA9IGNlbnRlclg7XG4gICAgICAgIGZyYW1lLnkgPSBjZW50ZXJZO1xuICAgICAgICBmcmFtZS5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSwgb3BhY2l0eTogMCB9XTtcbiAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoZGlzYyk7XG4gICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKG51bWJlcik7XG4gICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKHJlY3QpO1xuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgZnJhbWUubmFtZSA9IFwiYW5ub3RhdGlvbi1cIiArIGFubm90YXRpb25Db3VudDsgLy8gYXBwZW5kIHRoZSBuZXh0IGNvdW50IHRvIHRoZSBhbm5vdGF0aW9uIHRpdGxlXG4gICAgfVxuICAgIC8vIEFOTk9UQVRJT04gKFJJR0hUKVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2Fubm90YXRpb24tYWx0Jykge1xuICAgICAgICAvLyBncmFiIHRoZSB4IGFuZCB5IHZhbHVlcyBvZiB0aGUgY3VycmVudCB2aWV3cG9ydCBjZW50cmFsIHBvaW50XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci55O1xuICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgICAgIC8vIGdyYWIgYWxsIHRoZSBleGlzdGluZyBhbm5vdGF0aW9ucyBpbiB0aGUgdmlld3BvcnQsIGdldCB0aGUgdG90YWwgYW5kIGFkZCBvbmUgdG8gc2V0IHRoZSBuZXcgYW5ub3RhdGlvbnMgY291bnRcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbkNvdW50ID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZEFsbChub2RlID0+IG5vZGUudHlwZSA9PT0gJ0ZSQU1FJyAmJiBub2RlLm5hbWUuaW5jbHVkZXMoJ2Fubm90YXRpb24tJykpLmxlbmd0aCArIDE7XG4gICAgICAgIC8vY29uc29sZS5sb2coYW5ub3RhdGlvbkNvdW50KTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBjb250ZW50IGVsZW1lbnRcbiAgICAgICAgLy8gY3JlYXRlIHRoZSByZWN0YW5nbGUgZm9yIHRoZSBjb250ZW50IGJhY2tncm91bmRcbiAgICAgICAgY29uc3QgcmVjdCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgICAgICAvL3JlY3QueCA9IGRpc2MueCArIDQwO1xuICAgICAgICAvL3JlY3QueSA9IGRpc2MueTtcbiAgICAgICAgcmVjdC5yZXNpemUoMzA4LCA2MCk7XG4gICAgICAgIHJlY3QuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0sIG9wYWNpdHk6IDEgfV07XG4gICAgICAgIHJlY3QuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiU1RSRVRDSFwiLCB2ZXJ0aWNhbDogXCJTVFJFVENIXCIgfTtcbiAgICAgICAgcmVjdC5jb3JuZXJSYWRpdXMgPSA2O1xuICAgICAgICBub2Rlcy5wdXNoKHJlY3QpO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIHR5cGUgZm9yIHRoZSBjb250ZW50IHRleHRcbiAgICAgICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgdGV4dC54ID0gcmVjdC54ICsgMTI7XG4gICAgICAgIHRleHQueSA9IHJlY3QueSArIDg7XG4gICAgICAgIHRleHQucmVzaXplKDI4NCwgNDQpO1xuICAgICAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuICAgICAgICB0ZXh0LmZvbnRTaXplID0gMTQ7XG4gICAgICAgIHRleHQucGFyYWdyYXBoU3BhY2luZyA9IDEwO1xuICAgICAgICB0ZXh0LmxpbmVIZWlnaHQgPSB7IHVuaXQ6ICdQSVhFTFMnLCB2YWx1ZTogMjAgfTtcbiAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gXCJBZGQgeW91ciBhbm5vdGF0aW9uIGNvbnRlbnQgaGVyZS4uLlwiO1xuICAgICAgICB0ZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9IH1dO1xuICAgICAgICB0ZXh0LnRleHRBbGlnblZlcnRpY2FsID0gXCJUT1BcIjtcbiAgICAgICAgdGV4dC5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogXCJTVFJFVENIXCIsIHZlcnRpY2FsOiBcIlNUUkVUQ0hcIiB9O1xuICAgICAgICBub2Rlcy5wdXNoKHRleHQpO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIGNvdW50ZXIgZWxlbWVudFxuICAgICAgICAvLyBjcmVhdGUgdGhlIHJlY3RhbmdsZSBmb3IgdGhlIGNvdW50ZXJcbiAgICAgICAgY29uc3QgZGlzYyA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgICAgICBkaXNjLnJlc2l6ZSgyNCwgMjQpO1xuICAgICAgICBkaXNjLnggPSByZWN0LnggKyAzMTY7XG4gICAgICAgIGRpc2MueSA9IHJlY3QueTtcbiAgICAgICAgZGlzYy5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSwgb3BhY2l0eTogMSB9XTtcbiAgICAgICAgZGlzYy5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogXCJNQVhcIiwgdmVydGljYWw6IFwiTUlOXCIgfTtcbiAgICAgICAgZGlzYy5jb3JuZXJSYWRpdXMgPSAxMjtcbiAgICAgICAgbm9kZXMucHVzaChkaXNjKTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSB0eXBlIGZvciB0aGUgY291bnRlclxuICAgICAgICBjb25zdCBudW1iZXIgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIG51bWJlci54ID0gZGlzYy54O1xuICAgICAgICBudW1iZXIueSA9IGRpc2MueTtcbiAgICAgICAgbnVtYmVyLnJlc2l6ZSgyNCwgMjQpO1xuICAgICAgICBudW1iZXIuZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH07XG4gICAgICAgIG51bWJlci5mb250U2l6ZSA9IDEyO1xuICAgICAgICBudW1iZXIubGluZUhlaWdodCA9IHsgdW5pdDogJ1BJWEVMUycsIHZhbHVlOiAxMiB9O1xuICAgICAgICBudW1iZXIuY2hhcmFjdGVycyA9IGFubm90YXRpb25Db3VudC50b1N0cmluZygpO1xuICAgICAgICBudW1iZXIuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0gfV07XG4gICAgICAgIG51bWJlci50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiQ0VOVEVSXCI7XG4gICAgICAgIG51bWJlci50ZXh0QWxpZ25Ib3Jpem9udGFsID0gXCJDRU5URVJcIjtcbiAgICAgICAgbnVtYmVyLmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiBcIk1BWFwiLCB2ZXJ0aWNhbDogXCJNSU5cIiB9O1xuICAgICAgICBub2Rlcy5wdXNoKG51bWJlcik7XG4gICAgICAgIC8vIGNyZWF0ZSBhIGZyYW1lIGVsZW1lbnQgYW5kIGFwcGVuZCB0aGUgY291bnRlciBhbmQgY29udGVudCBlbGVtZW50cyBiZWZvcmUgYWRkaW5nIGl0IHRvIHRoZSBjZW50ZXIgb2YgdGhlIHZpZXdwb3J0XG4gICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgZnJhbWUucmVzaXplKDM0MCwgNjApO1xuICAgICAgICBmcmFtZS54ID0gY2VudGVyWDtcbiAgICAgICAgZnJhbWUueSA9IGNlbnRlclk7XG4gICAgICAgIGZyYW1lLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCB9LCBvcGFjaXR5OiAwIH1dO1xuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChkaXNjKTtcbiAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQobnVtYmVyKTtcbiAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQocmVjdCk7XG4gICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBmcmFtZS5uYW1lID0gXCJhbm5vdGF0aW9uLVwiICsgYW5ub3RhdGlvbkNvdW50OyAvLyBhcHBlbmQgdGhlIG5leHQgY291bnQgdG8gdGhlIGFubm90YXRpb24gdGl0bGVcbiAgICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=