/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/***/ (function() {

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
                line.y = selectionY - 90; // set the lines y value to -60px above the selection
                line.strokeWeight = 4;
                line.resize(selectionWidth, 0);
                line.strokes = [{ type: 'SOLID', color: { r: 0.768627451, g: 0.768627451, b: 0.768627451 } }];
                line.opacity = 0.6;
                nodes.push(line);
                // create the type element
                const text = figma.createText();
                text.x = selectionX;
                text.y = line.y - 95; // set the types y value to -75px from the line's y value
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
        rect.resize(450, 450);
        // check if the user wanted the green, yellow or red styling
        if (msg.type === 'sticky-green') {
            rect.fills = [{ type: 'SOLID', color: { r: 0.847058824, g: 1, b: 0.862745098 }, opacity: 1 }];
        }
        if (msg.type === 'sticky-yellow') {
            rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.921568627, b: 0.682352941 }, opacity: 1 }];
        }
        if (msg.type === 'sticky-red') {
            rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.858823529, b: 0.858823529 }, opacity: 1 }];
        }
        // add the drop shadow effect
        let dropShadowEffect = {
            type: "DROP_SHADOW",
            blendMode: 'NORMAL',
            visible: true,
            radius: 10,
            color: { r: 0, g: 0, b: 0, a: 0.1 },
            offset: {
                x: 0,
                y: 4
            }
        };
        rect.effects = [dropShadowEffect];
        // apply the layout constraints
        rect.constraints = { horizontal: "SCALE", vertical: "SCALE" };
        nodes.push(rect);
        // create the type element
        const text = figma.createText();
        text.x = rect.x + 30;
        text.y = rect.y + 30;
        text.resize(390, 390);
        text.fontName = { family: "Roboto", style: "Regular" };
        text.fontSize = 24;
        text.paragraphSpacing = 20;
        text.lineHeight = { unit: 'PIXELS', value: 38 };
        text.characters = "Enter Note Content...";
        text.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
        text.textAlignVertical = "TOP";
        text.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
        nodes.push(text);
        // create a frame element and append the type and rect elements before adding it to the center of the viewport
        const frame = figma.createFrame();
        frame.resize(450, 450);
        frame.x = centerX;
        frame.y = centerY;
        frame.appendChild(rect);
        frame.appendChild(text);
        frame.name = "Sticky Note";
        frame.clipsContent = false;
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

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/code.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHdCQUF3QixrQkFBa0IsY0FBYztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0JBQXdCLGtCQUFrQixjQUFjO0FBQ2hGLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0Esd0JBQXdCLHdCQUF3QixvQkFBb0I7QUFDcEU7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0JBQXdCLGtCQUFrQixjQUFjO0FBQ2hGLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLDBCQUEwQix3QkFBd0Isb0JBQW9CO0FBQ3RFO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdCQUF3QixrQkFBa0IsY0FBYztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBLENBQUM7Ozs7Ozs7O1VFdFREO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb2RlLnRzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogMTgwLCBoZWlnaHQ6IDM4NCB9KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiQm9sZFwiIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKG1zZy50eXBlKTtcbiAgICAvLyBUSVRMRVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlJyB8fCBtc2cudHlwZSA9PT0gJ2JvdGgnKSB7XG4gICAgICAgIC8vIEZpcnN0IGNoZWNrIGlzIHRoZSB1c2VyIGhhcyBzb21ldGhpbmcgc2VsZWN0ZWRcbiAgICAgICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIGlmIG5vdGhpbmcgaXMgc2VsZWN0ZWQsIHNob3cgYW4gZXJyb3JcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKFwibm8tbGF5ZXJzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgc29tZXRoaW5nIGlzIHNlbGVjdGVkLCBidWlsZCB0aGUgY29tcG9uZW50c1xuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCB0aGUgaXRlbXMgdGhhdCBhcmUgc2VsZWN0ZWRcbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICAgICAgICAgIC8vIGdyYWIgdGhlIGN1cnJlbnQgc2VsZWN0aW9uJ3MgeCwgeSwgd2lkdGggYW5kIG5hbWUgdmFsdWVzXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uWCA9IG5vZGUueDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25ZID0gbm9kZS55O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbldpZHRoID0gbm9kZS53aWR0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25OYW1lID0gbm9kZS5uYW1lO1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgZWxlbWVudHNcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgbGluZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IGZpZ21hLmNyZWF0ZUxpbmUoKTtcbiAgICAgICAgICAgICAgICBsaW5lLnggPSBzZWxlY3Rpb25YO1xuICAgICAgICAgICAgICAgIGxpbmUueSA9IHNlbGVjdGlvblkgLSA5MDsgLy8gc2V0IHRoZSBsaW5lcyB5IHZhbHVlIHRvIC02MHB4IGFib3ZlIHRoZSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICBsaW5lLnN0cm9rZVdlaWdodCA9IDQ7XG4gICAgICAgICAgICAgICAgbGluZS5yZXNpemUoc2VsZWN0aW9uV2lkdGgsIDApO1xuICAgICAgICAgICAgICAgIGxpbmUuc3Ryb2tlcyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuNzY4NjI3NDUxLCBnOiAwLjc2ODYyNzQ1MSwgYjogMC43Njg2Mjc0NTEgfSB9XTtcbiAgICAgICAgICAgICAgICBsaW5lLm9wYWNpdHkgPSAwLjY7XG4gICAgICAgICAgICAgICAgbm9kZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHR5cGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgICAgICAgICAgdGV4dC54ID0gc2VsZWN0aW9uWDtcbiAgICAgICAgICAgICAgICB0ZXh0LnkgPSBsaW5lLnkgLSA5NTsgLy8gc2V0IHRoZSB0eXBlcyB5IHZhbHVlIHRvIC03NXB4IGZyb20gdGhlIGxpbmUncyB5IHZhbHVlXG4gICAgICAgICAgICAgICAgdGV4dC5yZXNpemUoc2VsZWN0aW9uV2lkdGgsIDUwKTtcbiAgICAgICAgICAgICAgICAvL3RleHQuZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH1cbiAgICAgICAgICAgICAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIkJvbGRcIiB9O1xuICAgICAgICAgICAgICAgIHRleHQuZm9udFNpemUgPSA1MDtcbiAgICAgICAgICAgICAgICB0ZXh0LmxldHRlclNwYWNpbmcgPSB7IHVuaXQ6ICdQSVhFTFMnLCB2YWx1ZTogLTEgfTtcbiAgICAgICAgICAgICAgICAvL3ZhciB0ZXh0Q2hhcnMgPSBcIldlYiDigKIgRnJhbWUgVGl0bGVcIjtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dENoYXJzID0gXCJGcmFtZSBUaXRsZVwiO1xuICAgICAgICAgICAgICAgIHRleHQuY2hhcmFjdGVycyA9IHRleHRDaGFycztcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRBbGlnblZlcnRpY2FsID0gXCJCT1RUT01cIjtcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRBdXRvUmVzaXplID0gXCJIRUlHSFRcIjtcbiAgICAgICAgICAgICAgICAvL3ZhciB0ZXh0QnJlYWsgPSB0ZXh0Q2hhcnMuaW5kZXhPZihcIuKAolwiKSArIDE7IC8vIGdldCB0aGUgY2hhciBudW1iZXIgd2hlcmUgdGhlIOKAoiBhcHBlYXJzIGFuZCBhZGQgMSwgdGhpcyBpcyB0byBhcHBseSB0aGUgYm9sZCBmb3JtYXR0aW5nXG4gICAgICAgICAgICAgICAgLy92YXIgdGV4dExlbiA9IHRleHRDaGFycy5sZW5ndGg7IC8vIGdldCB0aGUgdG90YWwgY2hhciBjb3VudFxuICAgICAgICAgICAgICAgIC8vdGV4dC5zZXRSYW5nZUZvbnROYW1lKHRleHRCcmVhaywgdGV4dExlbiwgeyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIkJvbGRcIiB9ICk7IC8vIHNldCB0aGUgdGV4dCBhZnRlciB0aGUg4oCiIHRvIGJvbGRcbiAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgICAgIC8vIGdyb3VwIGJvdGggdGhlIGxpbmUgYW5kIHR5cGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZmlnbWEuZ3JvdXAobm9kZXMsIGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgICAgICAgICBncm91cC5uYW1lID0gc2VsZWN0aW9uTmFtZSArICctdGl0bGUnO1xuICAgICAgICAgICAgICAgIGdyb3VwLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRk9PVE5PVEVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdmb290bm90ZScgfHwgbXNnLnR5cGUgPT09ICdib3RoJykge1xuICAgICAgICAvLyBGaXJzdCBjaGVjayBpcyB0aGUgdXNlciBoYXMgc29tZXRoaW5nIHNlbGVjdGVkXG4gICAgICAgIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBpZiBub3RoaW5nIGlzIHNlbGVjdGVkLCBzaG93IGFuIGVycm9yXG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShcIm5vLWxheWVyc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHNvbWV0aGluZyBpcyBzZWxlY3RlZCwgYnVpbGQgdGhlIGNvbXBvbmVudHNcbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgdGhlIGl0ZW1zIHRoYXQgYXJlIHNlbGVjdGVkXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgICAgICAgICAvLyBncmFiIHRoZSBjdXJyZW50IHNlbGVjdGlvbidzIHgsIHksIHdpZHRoLCBoZWlnaHQgYW5kIG5hbWUgdmFsdWVzXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uWCA9IG5vZGUueDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25ZID0gbm9kZS55O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbldpZHRoID0gbm9kZS53aWR0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25IZWlnaHQgPSBub2RlLmhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25OYW1lID0gbm9kZS5uYW1lO1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgZWxlbWVudHNcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgdHlwZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgICAgICAgICB0ZXh0LnggPSBzZWxlY3Rpb25YO1xuICAgICAgICAgICAgICAgIHRleHQueSA9IHNlbGVjdGlvblkgKyBzZWxlY3Rpb25IZWlnaHQgKyA2MDsgLy8gc2V0IHRoZSB0eXBlcyB5IHZhbHVlIHRvIDUwcHggYmVsb3cgdGhlIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIHRleHQucmVzaXplKHNlbGVjdGlvbldpZHRoLCA1Mik7XG4gICAgICAgICAgICAgICAgdGV4dC5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbiAgICAgICAgICAgICAgICB0ZXh0LmZvbnRTaXplID0gMzY7XG4gICAgICAgICAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gXCJFbnRlciB5b3VyIGRlc2NyaXB0aW9uIG9yIG5vdGVzIGhlcmUuLi5cIjtcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRBbGlnblZlcnRpY2FsID0gXCJUT1BcIjtcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRBdXRvUmVzaXplID0gXCJIRUlHSFRcIjtcbiAgICAgICAgICAgICAgICB0ZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMC4wNzQ1MDk4MDQsIGc6IDAuMTYwNzg0MzE0LCBiOiAwLjI0NzA1ODgyNCB9IH1dO1xuICAgICAgICAgICAgICAgIHRleHQub3BhY2l0eSA9IDAuNDtcbiAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgICAgIC8vIGdyb3VwIHR5cGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZmlnbWEuZ3JvdXAobm9kZXMsIGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgICAgICAgICBncm91cC5uYW1lID0gc2VsZWN0aW9uTmFtZSArICctZm9vdG5vdGUnO1xuICAgICAgICAgICAgICAgIGdyb3VwLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gU1RJQ0tZIE5PVEVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdzdGlja3ktZ3JlZW4nIHx8IG1zZy50eXBlID09PSAnc3RpY2t5LXllbGxvdycgfHwgbXNnLnR5cGUgPT09ICdzdGlja3ktcmVkJykge1xuICAgICAgICAvLyBncmFiIHRoZSB4IGFuZCB5IHZhbHVlcyBvZiB0aGUgY3VycmVudCB2aWV3cG9ydCBjZW50cmFsIHBvaW50XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci55O1xuICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgcmVjdGFuZ2xlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgcmVjdCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgICAgICByZWN0LnJlc2l6ZSg0NTAsIDQ1MCk7XG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSB1c2VyIHdhbnRlZCB0aGUgZ3JlZW4sIHllbGxvdyBvciByZWQgc3R5bGluZ1xuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdzdGlja3ktZ3JlZW4nKSB7XG4gICAgICAgICAgICByZWN0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMC44NDcwNTg4MjQsIGc6IDEsIGI6IDAuODYyNzQ1MDk4IH0sIG9wYWNpdHk6IDEgfV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAnc3RpY2t5LXllbGxvdycpIHtcbiAgICAgICAgICAgIHJlY3QuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAxLCBnOiAwLjkyMTU2ODYyNywgYjogMC42ODIzNTI5NDEgfSwgb3BhY2l0eTogMSB9XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdzdGlja3ktcmVkJykge1xuICAgICAgICAgICAgcmVjdC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDAuODU4ODIzNTI5LCBiOiAwLjg1ODgyMzUyOSB9LCBvcGFjaXR5OiAxIH1dO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCB0aGUgZHJvcCBzaGFkb3cgZWZmZWN0XG4gICAgICAgIGxldCBkcm9wU2hhZG93RWZmZWN0ID0ge1xuICAgICAgICAgICAgdHlwZTogXCJEUk9QX1NIQURPV1wiLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICByYWRpdXM6IDEwLFxuICAgICAgICAgICAgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCwgYTogMC4xIH0sXG4gICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVjdC5lZmZlY3RzID0gW2Ryb3BTaGFkb3dFZmZlY3RdO1xuICAgICAgICAvLyBhcHBseSB0aGUgbGF5b3V0IGNvbnN0cmFpbnRzXG4gICAgICAgIHJlY3QuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiU0NBTEVcIiwgdmVydGljYWw6IFwiU0NBTEVcIiB9O1xuICAgICAgICBub2Rlcy5wdXNoKHJlY3QpO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIHR5cGUgZWxlbWVudFxuICAgICAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICB0ZXh0LnggPSByZWN0LnggKyAzMDtcbiAgICAgICAgdGV4dC55ID0gcmVjdC55ICsgMzA7XG4gICAgICAgIHRleHQucmVzaXplKDM5MCwgMzkwKTtcbiAgICAgICAgdGV4dC5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbiAgICAgICAgdGV4dC5mb250U2l6ZSA9IDI0O1xuICAgICAgICB0ZXh0LnBhcmFncmFwaFNwYWNpbmcgPSAyMDtcbiAgICAgICAgdGV4dC5saW5lSGVpZ2h0ID0geyB1bml0OiAnUElYRUxTJywgdmFsdWU6IDM4IH07XG4gICAgICAgIHRleHQuY2hhcmFjdGVycyA9IFwiRW50ZXIgTm90ZSBDb250ZW50Li4uXCI7XG4gICAgICAgIHRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjIsIGc6IDAuMiwgYjogMC4yIH0gfV07XG4gICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIlRPUFwiO1xuICAgICAgICB0ZXh0LmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiBcIlNUUkVUQ0hcIiwgdmVydGljYWw6IFwiU1RSRVRDSFwiIH07XG4gICAgICAgIG5vZGVzLnB1c2godGV4dCk7XG4gICAgICAgIC8vIGNyZWF0ZSBhIGZyYW1lIGVsZW1lbnQgYW5kIGFwcGVuZCB0aGUgdHlwZSBhbmQgcmVjdCBlbGVtZW50cyBiZWZvcmUgYWRkaW5nIGl0IHRvIHRoZSBjZW50ZXIgb2YgdGhlIHZpZXdwb3J0XG4gICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgZnJhbWUucmVzaXplKDQ1MCwgNDUwKTtcbiAgICAgICAgZnJhbWUueCA9IGNlbnRlclg7XG4gICAgICAgIGZyYW1lLnkgPSBjZW50ZXJZO1xuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChyZWN0KTtcbiAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGZyYW1lLm5hbWUgPSBcIlN0aWNreSBOb3RlXCI7XG4gICAgICAgIGZyYW1lLmNsaXBzQ29udGVudCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBBTk5PVEFUSU9OIChMRUZUKVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2Fubm90YXRpb24nKSB7XG4gICAgICAgIC8vIGdyYWIgdGhlIHggYW5kIHkgdmFsdWVzIG9mIHRoZSBjdXJyZW50IHZpZXdwb3J0IGNlbnRyYWwgcG9pbnRcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci54O1xuICAgICAgICBjb25zdCBjZW50ZXJZID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnk7XG4gICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgZWxlbWVudHNcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICAgICAgLy8gZ3JhYiBhbGwgdGhlIGV4aXN0aW5nIGFubm90YXRpb25zIGluIHRoZSB2aWV3cG9ydCwgZ2V0IHRoZSB0b3RhbCBhbmQgYWRkIG9uZSB0byBzZXQgdGhlIG5ldyBhbm5vdGF0aW9ucyBjb3VudFxuICAgICAgICBjb25zdCBhbm5vdGF0aW9uQ291bnQgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kQWxsKG5vZGUgPT4gbm9kZS50eXBlID09PSAnRlJBTUUnICYmIG5vZGUubmFtZS5pbmNsdWRlcygnYW5ub3RhdGlvbi0nKSkubGVuZ3RoICsgMTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhhbm5vdGF0aW9uQ291bnQpO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIGNvdW50ZXIgZWxlbWVudFxuICAgICAgICAvLyBjcmVhdGUgdGhlIHJlY3RhbmdsZSBmb3IgdGhlIGNvdW50ZXJcbiAgICAgICAgY29uc3QgZGlzYyA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgICAgICBkaXNjLnJlc2l6ZSgyNCwgMjQpO1xuICAgICAgICBkaXNjLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCB9LCBvcGFjaXR5OiAxIH1dO1xuICAgICAgICBkaXNjLmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiBcIk1JTlwiLCB2ZXJ0aWNhbDogXCJNSU5cIiB9O1xuICAgICAgICBkaXNjLmNvcm5lclJhZGl1cyA9IDEyO1xuICAgICAgICBub2Rlcy5wdXNoKGRpc2MpO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIHR5cGUgZm9yIHRoZSBjb3VudGVyXG4gICAgICAgIGNvbnN0IG51bWJlciA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgbnVtYmVyLnggPSBkaXNjLng7XG4gICAgICAgIG51bWJlci55ID0gZGlzYy55O1xuICAgICAgICBudW1iZXIucmVzaXplKDI0LCAyNCk7XG4gICAgICAgIG51bWJlci5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbiAgICAgICAgbnVtYmVyLmZvbnRTaXplID0gMTI7XG4gICAgICAgIG51bWJlci5saW5lSGVpZ2h0ID0geyB1bml0OiAnUElYRUxTJywgdmFsdWU6IDEyIH07XG4gICAgICAgIG51bWJlci5jaGFyYWN0ZXJzID0gYW5ub3RhdGlvbkNvdW50LnRvU3RyaW5nKCk7XG4gICAgICAgIG51bWJlci5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSB9XTtcbiAgICAgICAgbnVtYmVyLnRleHRBbGlnblZlcnRpY2FsID0gXCJDRU5URVJcIjtcbiAgICAgICAgbnVtYmVyLnRleHRBbGlnbkhvcml6b250YWwgPSBcIkNFTlRFUlwiO1xuICAgICAgICBudW1iZXIuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiTUlOXCIsIHZlcnRpY2FsOiBcIk1JTlwiIH07XG4gICAgICAgIG5vZGVzLnB1c2gobnVtYmVyKTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBjb250ZW50IGVsZW1lbnRcbiAgICAgICAgLy8gY3JlYXRlIHRoZSByZWN0YW5nbGUgZm9yIHRoZSBjb250ZW50IGJhY2tncm91bmRcbiAgICAgICAgY29uc3QgcmVjdCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgICAgICByZWN0LnggPSBkaXNjLnggKyAzMjtcbiAgICAgICAgcmVjdC55ID0gZGlzYy55O1xuICAgICAgICByZWN0LnJlc2l6ZSgzMDgsIDYwKTtcbiAgICAgICAgcmVjdC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSwgb3BhY2l0eTogMSB9XTtcbiAgICAgICAgcmVjdC5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogXCJTVFJFVENIXCIsIHZlcnRpY2FsOiBcIlNUUkVUQ0hcIiB9O1xuICAgICAgICByZWN0LmNvcm5lclJhZGl1cyA9IDY7XG4gICAgICAgIG5vZGVzLnB1c2gocmVjdCk7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgdHlwZSBmb3IgdGhlIGNvbnRlbnQgdGV4dFxuICAgICAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICB0ZXh0LnggPSByZWN0LnggKyAxMjtcbiAgICAgICAgdGV4dC55ID0gcmVjdC55ICsgODtcbiAgICAgICAgdGV4dC5yZXNpemUoMjg0LCA0NCk7XG4gICAgICAgIHRleHQuZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH07XG4gICAgICAgIHRleHQuZm9udFNpemUgPSAxNDtcbiAgICAgICAgdGV4dC5wYXJhZ3JhcGhTcGFjaW5nID0gMTA7XG4gICAgICAgIHRleHQubGluZUhlaWdodCA9IHsgdW5pdDogJ1BJWEVMUycsIHZhbHVlOiAyMCB9O1xuICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBcIkFkZCB5b3VyIGFubm90YXRpb24gY29udGVudCBoZXJlLi4uXCI7XG4gICAgICAgIHRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0gfV07XG4gICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIlRPUFwiO1xuICAgICAgICB0ZXh0LmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiBcIlNUUkVUQ0hcIiwgdmVydGljYWw6IFwiU1RSRVRDSFwiIH07XG4gICAgICAgIG5vZGVzLnB1c2godGV4dCk7XG4gICAgICAgIC8vIGNyZWF0ZSBhIGZyYW1lIGVsZW1lbnQgYW5kIGFwcGVuZCB0aGUgY291bnRlciBhbmQgY29udGVudCBlbGVtZW50cyBiZWZvcmUgYWRkaW5nIGl0IHRvIHRoZSBjZW50ZXIgb2YgdGhlIHZpZXdwb3J0XG4gICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgZnJhbWUucmVzaXplKDM0MCwgNjApO1xuICAgICAgICBmcmFtZS54ID0gY2VudGVyWDtcbiAgICAgICAgZnJhbWUueSA9IGNlbnRlclk7XG4gICAgICAgIGZyYW1lLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCB9LCBvcGFjaXR5OiAwIH1dO1xuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChkaXNjKTtcbiAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQobnVtYmVyKTtcbiAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQocmVjdCk7XG4gICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBmcmFtZS5uYW1lID0gXCJhbm5vdGF0aW9uLVwiICsgYW5ub3RhdGlvbkNvdW50OyAvLyBhcHBlbmQgdGhlIG5leHQgY291bnQgdG8gdGhlIGFubm90YXRpb24gdGl0bGVcbiAgICB9XG4gICAgLy8gQU5OT1RBVElPTiAoUklHSFQpXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaWYgKG1zZy50eXBlID09PSAnYW5ub3RhdGlvbi1hbHQnKSB7XG4gICAgICAgIC8vIGdyYWIgdGhlIHggYW5kIHkgdmFsdWVzIG9mIHRoZSBjdXJyZW50IHZpZXdwb3J0IGNlbnRyYWwgcG9pbnRcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci54O1xuICAgICAgICBjb25zdCBjZW50ZXJZID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnk7XG4gICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgZWxlbWVudHNcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICAgICAgLy8gZ3JhYiBhbGwgdGhlIGV4aXN0aW5nIGFubm90YXRpb25zIGluIHRoZSB2aWV3cG9ydCwgZ2V0IHRoZSB0b3RhbCBhbmQgYWRkIG9uZSB0byBzZXQgdGhlIG5ldyBhbm5vdGF0aW9ucyBjb3VudFxuICAgICAgICBjb25zdCBhbm5vdGF0aW9uQ291bnQgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kQWxsKG5vZGUgPT4gbm9kZS50eXBlID09PSAnRlJBTUUnICYmIG5vZGUubmFtZS5pbmNsdWRlcygnYW5ub3RhdGlvbi0nKSkubGVuZ3RoICsgMTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhhbm5vdGF0aW9uQ291bnQpO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIGNvbnRlbnQgZWxlbWVudFxuICAgICAgICAvLyBjcmVhdGUgdGhlIHJlY3RhbmdsZSBmb3IgdGhlIGNvbnRlbnQgYmFja2dyb3VuZFxuICAgICAgICBjb25zdCByZWN0ID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgIC8vcmVjdC54ID0gZGlzYy54ICsgNDA7XG4gICAgICAgIC8vcmVjdC55ID0gZGlzYy55O1xuICAgICAgICByZWN0LnJlc2l6ZSgzMDgsIDYwKTtcbiAgICAgICAgcmVjdC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSwgb3BhY2l0eTogMSB9XTtcbiAgICAgICAgcmVjdC5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogXCJTVFJFVENIXCIsIHZlcnRpY2FsOiBcIlNUUkVUQ0hcIiB9O1xuICAgICAgICByZWN0LmNvcm5lclJhZGl1cyA9IDY7XG4gICAgICAgIG5vZGVzLnB1c2gocmVjdCk7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgdHlwZSBmb3IgdGhlIGNvbnRlbnQgdGV4dFxuICAgICAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICB0ZXh0LnggPSByZWN0LnggKyAxMjtcbiAgICAgICAgdGV4dC55ID0gcmVjdC55ICsgODtcbiAgICAgICAgdGV4dC5yZXNpemUoMjg0LCA0NCk7XG4gICAgICAgIHRleHQuZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH07XG4gICAgICAgIHRleHQuZm9udFNpemUgPSAxNDtcbiAgICAgICAgdGV4dC5wYXJhZ3JhcGhTcGFjaW5nID0gMTA7XG4gICAgICAgIHRleHQubGluZUhlaWdodCA9IHsgdW5pdDogJ1BJWEVMUycsIHZhbHVlOiAyMCB9O1xuICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBcIkFkZCB5b3VyIGFubm90YXRpb24gY29udGVudCBoZXJlLi4uXCI7XG4gICAgICAgIHRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0gfV07XG4gICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIlRPUFwiO1xuICAgICAgICB0ZXh0LmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiBcIlNUUkVUQ0hcIiwgdmVydGljYWw6IFwiU1RSRVRDSFwiIH07XG4gICAgICAgIG5vZGVzLnB1c2godGV4dCk7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgY291bnRlciBlbGVtZW50XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgcmVjdGFuZ2xlIGZvciB0aGUgY291bnRlclxuICAgICAgICBjb25zdCBkaXNjID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgIGRpc2MucmVzaXplKDI0LCAyNCk7XG4gICAgICAgIGRpc2MueCA9IHJlY3QueCArIDMxNjtcbiAgICAgICAgZGlzYy55ID0gcmVjdC55O1xuICAgICAgICBkaXNjLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCB9LCBvcGFjaXR5OiAxIH1dO1xuICAgICAgICBkaXNjLmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiBcIk1BWFwiLCB2ZXJ0aWNhbDogXCJNSU5cIiB9O1xuICAgICAgICBkaXNjLmNvcm5lclJhZGl1cyA9IDEyO1xuICAgICAgICBub2Rlcy5wdXNoKGRpc2MpO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIHR5cGUgZm9yIHRoZSBjb3VudGVyXG4gICAgICAgIGNvbnN0IG51bWJlciA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgbnVtYmVyLnggPSBkaXNjLng7XG4gICAgICAgIG51bWJlci55ID0gZGlzYy55O1xuICAgICAgICBudW1iZXIucmVzaXplKDI0LCAyNCk7XG4gICAgICAgIG51bWJlci5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbiAgICAgICAgbnVtYmVyLmZvbnRTaXplID0gMTI7XG4gICAgICAgIG51bWJlci5saW5lSGVpZ2h0ID0geyB1bml0OiAnUElYRUxTJywgdmFsdWU6IDEyIH07XG4gICAgICAgIG51bWJlci5jaGFyYWN0ZXJzID0gYW5ub3RhdGlvbkNvdW50LnRvU3RyaW5nKCk7XG4gICAgICAgIG51bWJlci5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSB9XTtcbiAgICAgICAgbnVtYmVyLnRleHRBbGlnblZlcnRpY2FsID0gXCJDRU5URVJcIjtcbiAgICAgICAgbnVtYmVyLnRleHRBbGlnbkhvcml6b250YWwgPSBcIkNFTlRFUlwiO1xuICAgICAgICBudW1iZXIuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiTUFYXCIsIHZlcnRpY2FsOiBcIk1JTlwiIH07XG4gICAgICAgIG5vZGVzLnB1c2gobnVtYmVyKTtcbiAgICAgICAgLy8gY3JlYXRlIGEgZnJhbWUgZWxlbWVudCBhbmQgYXBwZW5kIHRoZSBjb3VudGVyIGFuZCBjb250ZW50IGVsZW1lbnRzIGJlZm9yZSBhZGRpbmcgaXQgdG8gdGhlIGNlbnRlciBvZiB0aGUgdmlld3BvcnRcbiAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBmcmFtZS5yZXNpemUoMzQwLCA2MCk7XG4gICAgICAgIGZyYW1lLnggPSBjZW50ZXJYO1xuICAgICAgICBmcmFtZS55ID0gY2VudGVyWTtcbiAgICAgICAgZnJhbWUuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0sIG9wYWNpdHk6IDAgfV07XG4gICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGRpc2MpO1xuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChudW1iZXIpO1xuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChyZWN0KTtcbiAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGZyYW1lLm5hbWUgPSBcImFubm90YXRpb24tXCIgKyBhbm5vdGF0aW9uQ291bnQ7IC8vIGFwcGVuZCB0aGUgbmV4dCBjb3VudCB0byB0aGUgYW5ub3RhdGlvbiB0aXRsZVxuICAgIH1cbn0pO1xuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9jb2RlLnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=