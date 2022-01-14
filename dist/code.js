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
    // post the user id and name to the plugin for mixpanel
    // https://figmaplugins.slack.com/archives/CHPTY6TFD/p1641641985013200?thread_ts=1641575674.012800&cid=CHPTY6TFD
    figma.ui.postMessage({ type: 'identify', userID: figma.currentUser.id, username: figma.currentUser.name });
    // TITLE
    //-------------------------------
    if (msg.type === 'title' || msg.type === 'both') {
        // First check is the user has something selected
        if (figma.currentPage.selection.length === 0) {
            // if nothing is selected, show an error
            figma.ui.postMessage({ type: 'warning', warning: "no-layers" });
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
            // figma.ui.postMessage("no-layers");
            figma.ui.postMessage({ type: 'warning', warning: "no-layers" });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFvQjtBQUNwRTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0JBQXdCLGtCQUFrQixjQUFjO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3QkFBd0Isa0JBQWtCLGNBQWM7QUFDaEYsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSx3QkFBd0Isd0JBQXdCLG9CQUFvQjtBQUNwRTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3QkFBd0Isa0JBQWtCLGNBQWM7QUFDaEYsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsMEJBQTBCLHdCQUF3QixvQkFBb0I7QUFDdEU7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0JBQXdCLGtCQUFrQixjQUFjO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0EsQ0FBQzs7Ozs7Ozs7VUUxVEQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiAxODAsIGhlaWdodDogMzg0IH0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJCb2xkXCIgfSk7XG4gICAgLy8gY29uc29sZS5sb2cobXNnLnR5cGUpO1xuICAgIC8vIHBvc3QgdGhlIHVzZXIgaWQgYW5kIG5hbWUgdG8gdGhlIHBsdWdpbiBmb3IgbWl4cGFuZWxcbiAgICAvLyBodHRwczovL2ZpZ21hcGx1Z2lucy5zbGFjay5jb20vYXJjaGl2ZXMvQ0hQVFk2VEZEL3AxNjQxNjQxOTg1MDEzMjAwP3RocmVhZF90cz0xNjQxNTc1Njc0LjAxMjgwMCZjaWQ9Q0hQVFk2VEZEXG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiAnaWRlbnRpZnknLCB1c2VySUQ6IGZpZ21hLmN1cnJlbnRVc2VyLmlkLCB1c2VybmFtZTogZmlnbWEuY3VycmVudFVzZXIubmFtZSB9KTtcbiAgICAvLyBUSVRMRVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlJyB8fCBtc2cudHlwZSA9PT0gJ2JvdGgnKSB7XG4gICAgICAgIC8vIEZpcnN0IGNoZWNrIGlzIHRoZSB1c2VyIGhhcyBzb21ldGhpbmcgc2VsZWN0ZWRcbiAgICAgICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIGlmIG5vdGhpbmcgaXMgc2VsZWN0ZWQsIHNob3cgYW4gZXJyb3JcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCB3YXJuaW5nOiBcIm5vLWxheWVyc1wiIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgc29tZXRoaW5nIGlzIHNlbGVjdGVkLCBidWlsZCB0aGUgY29tcG9uZW50c1xuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCB0aGUgaXRlbXMgdGhhdCBhcmUgc2VsZWN0ZWRcbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICAgICAgICAgIC8vIGdyYWIgdGhlIGN1cnJlbnQgc2VsZWN0aW9uJ3MgeCwgeSwgd2lkdGggYW5kIG5hbWUgdmFsdWVzXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uWCA9IG5vZGUueDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25ZID0gbm9kZS55O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbldpZHRoID0gbm9kZS53aWR0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25OYW1lID0gbm9kZS5uYW1lO1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgZWxlbWVudHNcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgbGluZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IGZpZ21hLmNyZWF0ZUxpbmUoKTtcbiAgICAgICAgICAgICAgICBsaW5lLnggPSBzZWxlY3Rpb25YO1xuICAgICAgICAgICAgICAgIGxpbmUueSA9IHNlbGVjdGlvblkgLSA5MDsgLy8gc2V0IHRoZSBsaW5lcyB5IHZhbHVlIHRvIC02MHB4IGFib3ZlIHRoZSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICBsaW5lLnN0cm9rZVdlaWdodCA9IDQ7XG4gICAgICAgICAgICAgICAgbGluZS5yZXNpemUoc2VsZWN0aW9uV2lkdGgsIDApO1xuICAgICAgICAgICAgICAgIGxpbmUuc3Ryb2tlcyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuNzY4NjI3NDUxLCBnOiAwLjc2ODYyNzQ1MSwgYjogMC43Njg2Mjc0NTEgfSB9XTtcbiAgICAgICAgICAgICAgICBsaW5lLm9wYWNpdHkgPSAwLjY7XG4gICAgICAgICAgICAgICAgbm9kZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHR5cGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgICAgICAgICAgdGV4dC54ID0gc2VsZWN0aW9uWDtcbiAgICAgICAgICAgICAgICB0ZXh0LnkgPSBsaW5lLnkgLSA5NTsgLy8gc2V0IHRoZSB0eXBlcyB5IHZhbHVlIHRvIC03NXB4IGZyb20gdGhlIGxpbmUncyB5IHZhbHVlXG4gICAgICAgICAgICAgICAgdGV4dC5yZXNpemUoc2VsZWN0aW9uV2lkdGgsIDUwKTtcbiAgICAgICAgICAgICAgICAvL3RleHQuZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH1cbiAgICAgICAgICAgICAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIkJvbGRcIiB9O1xuICAgICAgICAgICAgICAgIHRleHQuZm9udFNpemUgPSA1MDtcbiAgICAgICAgICAgICAgICB0ZXh0LmxldHRlclNwYWNpbmcgPSB7IHVuaXQ6ICdQSVhFTFMnLCB2YWx1ZTogLTEgfTtcbiAgICAgICAgICAgICAgICAvL3ZhciB0ZXh0Q2hhcnMgPSBcIldlYiDigKIgRnJhbWUgVGl0bGVcIjtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dENoYXJzID0gXCJGcmFtZSBUaXRsZVwiO1xuICAgICAgICAgICAgICAgIHRleHQuY2hhcmFjdGVycyA9IHRleHRDaGFycztcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRBbGlnblZlcnRpY2FsID0gXCJCT1RUT01cIjtcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRBdXRvUmVzaXplID0gXCJIRUlHSFRcIjtcbiAgICAgICAgICAgICAgICAvL3ZhciB0ZXh0QnJlYWsgPSB0ZXh0Q2hhcnMuaW5kZXhPZihcIuKAolwiKSArIDE7IC8vIGdldCB0aGUgY2hhciBudW1iZXIgd2hlcmUgdGhlIOKAoiBhcHBlYXJzIGFuZCBhZGQgMSwgdGhpcyBpcyB0byBhcHBseSB0aGUgYm9sZCBmb3JtYXR0aW5nXG4gICAgICAgICAgICAgICAgLy92YXIgdGV4dExlbiA9IHRleHRDaGFycy5sZW5ndGg7IC8vIGdldCB0aGUgdG90YWwgY2hhciBjb3VudFxuICAgICAgICAgICAgICAgIC8vdGV4dC5zZXRSYW5nZUZvbnROYW1lKHRleHRCcmVhaywgdGV4dExlbiwgeyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIkJvbGRcIiB9ICk7IC8vIHNldCB0aGUgdGV4dCBhZnRlciB0aGUg4oCiIHRvIGJvbGRcbiAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgICAgIC8vIGdyb3VwIGJvdGggdGhlIGxpbmUgYW5kIHR5cGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZmlnbWEuZ3JvdXAobm9kZXMsIGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgICAgICAgICBncm91cC5uYW1lID0gc2VsZWN0aW9uTmFtZSArICctdGl0bGUnO1xuICAgICAgICAgICAgICAgIGdyb3VwLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRk9PVE5PVEVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdmb290bm90ZScgfHwgbXNnLnR5cGUgPT09ICdib3RoJykge1xuICAgICAgICAvLyBGaXJzdCBjaGVjayBpcyB0aGUgdXNlciBoYXMgc29tZXRoaW5nIHNlbGVjdGVkXG4gICAgICAgIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBpZiBub3RoaW5nIGlzIHNlbGVjdGVkLCBzaG93IGFuIGVycm9yXG4gICAgICAgICAgICAvLyBmaWdtYS51aS5wb3N0TWVzc2FnZShcIm5vLWxheWVyc1wiKTtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCB3YXJuaW5nOiBcIm5vLWxheWVyc1wiIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgc29tZXRoaW5nIGlzIHNlbGVjdGVkLCBidWlsZCB0aGUgY29tcG9uZW50c1xuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCB0aGUgaXRlbXMgdGhhdCBhcmUgc2VsZWN0ZWRcbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICAgICAgICAgIC8vIGdyYWIgdGhlIGN1cnJlbnQgc2VsZWN0aW9uJ3MgeCwgeSwgd2lkdGgsIGhlaWdodCBhbmQgbmFtZSB2YWx1ZXNcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25YID0gbm9kZS54O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvblkgPSBub2RlLnk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uV2lkdGggPSBub2RlLndpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbkhlaWdodCA9IG5vZGUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbk5hbWUgPSBub2RlLm5hbWU7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGFycmF5IHRvIHN0b3JlIHRoZSBlbGVtZW50c1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSB0eXBlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICAgICAgICAgIHRleHQueCA9IHNlbGVjdGlvblg7XG4gICAgICAgICAgICAgICAgdGV4dC55ID0gc2VsZWN0aW9uWSArIHNlbGVjdGlvbkhlaWdodCArIDYwOyAvLyBzZXQgdGhlIHR5cGVzIHkgdmFsdWUgdG8gNTBweCBiZWxvdyB0aGUgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgdGV4dC5yZXNpemUoc2VsZWN0aW9uV2lkdGgsIDUyKTtcbiAgICAgICAgICAgICAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuICAgICAgICAgICAgICAgIHRleHQuZm9udFNpemUgPSAzNjtcbiAgICAgICAgICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBcIkVudGVyIHlvdXIgZGVzY3JpcHRpb24gb3Igbm90ZXMgaGVyZS4uLlwiO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIlRPUFwiO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICAgICAgICAgIHRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjA3NDUwOTgwNCwgZzogMC4xNjA3ODQzMTQsIGI6IDAuMjQ3MDU4ODI0IH0gfV07XG4gICAgICAgICAgICAgICAgdGV4dC5vcGFjaXR5ID0gMC40O1xuICAgICAgICAgICAgICAgIG5vZGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICAgICAgLy8gZ3JvdXAgdHlwZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBmaWdtYS5ncm91cChub2RlcywgZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgICAgICAgICAgICAgIGdyb3VwLm5hbWUgPSBzZWxlY3Rpb25OYW1lICsgJy1mb290bm90ZSc7XG4gICAgICAgICAgICAgICAgZ3JvdXAuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBTVElDS1kgTk9URVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3N0aWNreS1ncmVlbicgfHwgbXNnLnR5cGUgPT09ICdzdGlja3kteWVsbG93JyB8fCBtc2cudHlwZSA9PT0gJ3N0aWNreS1yZWQnKSB7XG4gICAgICAgIC8vIGdyYWIgdGhlIHggYW5kIHkgdmFsdWVzIG9mIHRoZSBjdXJyZW50IHZpZXdwb3J0IGNlbnRyYWwgcG9pbnRcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci54O1xuICAgICAgICBjb25zdCBjZW50ZXJZID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnk7XG4gICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgZWxlbWVudHNcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSByZWN0YW5nbGUgZWxlbWVudFxuICAgICAgICBjb25zdCByZWN0ID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgIHJlY3QucmVzaXplKDQ1MCwgNDUwKTtcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHVzZXIgd2FudGVkIHRoZSBncmVlbiwgeWVsbG93IG9yIHJlZCBzdHlsaW5nXG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3N0aWNreS1ncmVlbicpIHtcbiAgICAgICAgICAgIHJlY3QuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjg0NzA1ODgyNCwgZzogMSwgYjogMC44NjI3NDUwOTggfSwgb3BhY2l0eTogMSB9XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdzdGlja3kteWVsbG93Jykge1xuICAgICAgICAgICAgcmVjdC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDAuOTIxNTY4NjI3LCBiOiAwLjY4MjM1Mjk0MSB9LCBvcGFjaXR5OiAxIH1dO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3N0aWNreS1yZWQnKSB7XG4gICAgICAgICAgICByZWN0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMC44NTg4MjM1MjksIGI6IDAuODU4ODIzNTI5IH0sIG9wYWNpdHk6IDEgfV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIHRoZSBkcm9wIHNoYWRvdyBlZmZlY3RcbiAgICAgICAgbGV0IGRyb3BTaGFkb3dFZmZlY3QgPSB7XG4gICAgICAgICAgICB0eXBlOiBcIkRST1BfU0hBRE9XXCIsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHJhZGl1czogMTAsXG4gICAgICAgICAgICBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwLCBhOiAwLjEgfSxcbiAgICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogNFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZWN0LmVmZmVjdHMgPSBbZHJvcFNoYWRvd0VmZmVjdF07XG4gICAgICAgIC8vIGFwcGx5IHRoZSBsYXlvdXQgY29uc3RyYWludHNcbiAgICAgICAgcmVjdC5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogXCJTQ0FMRVwiLCB2ZXJ0aWNhbDogXCJTQ0FMRVwiIH07XG4gICAgICAgIG5vZGVzLnB1c2gocmVjdCk7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgdHlwZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIHRleHQueCA9IHJlY3QueCArIDMwO1xuICAgICAgICB0ZXh0LnkgPSByZWN0LnkgKyAzMDtcbiAgICAgICAgdGV4dC5yZXNpemUoMzkwLCAzOTApO1xuICAgICAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuICAgICAgICB0ZXh0LmZvbnRTaXplID0gMjQ7XG4gICAgICAgIHRleHQucGFyYWdyYXBoU3BhY2luZyA9IDIwO1xuICAgICAgICB0ZXh0LmxpbmVIZWlnaHQgPSB7IHVuaXQ6ICdQSVhFTFMnLCB2YWx1ZTogMzggfTtcbiAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gXCJFbnRlciBOb3RlIENvbnRlbnQuLi5cIjtcbiAgICAgICAgdGV4dC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuMiwgZzogMC4yLCBiOiAwLjIgfSB9XTtcbiAgICAgICAgdGV4dC50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiVE9QXCI7XG4gICAgICAgIHRleHQuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiU1RSRVRDSFwiLCB2ZXJ0aWNhbDogXCJTVFJFVENIXCIgfTtcbiAgICAgICAgbm9kZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgLy8gY3JlYXRlIGEgZnJhbWUgZWxlbWVudCBhbmQgYXBwZW5kIHRoZSB0eXBlIGFuZCByZWN0IGVsZW1lbnRzIGJlZm9yZSBhZGRpbmcgaXQgdG8gdGhlIGNlbnRlciBvZiB0aGUgdmlld3BvcnRcbiAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBmcmFtZS5yZXNpemUoNDUwLCA0NTApO1xuICAgICAgICBmcmFtZS54ID0gY2VudGVyWDtcbiAgICAgICAgZnJhbWUueSA9IGNlbnRlclk7XG4gICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKHJlY3QpO1xuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgZnJhbWUubmFtZSA9IFwiU3RpY2t5IE5vdGVcIjtcbiAgICAgICAgZnJhbWUuY2xpcHNDb250ZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIEFOTk9UQVRJT04gKExFRlQpXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaWYgKG1zZy50eXBlID09PSAnYW5ub3RhdGlvbicpIHtcbiAgICAgICAgLy8gZ3JhYiB0aGUgeCBhbmQgeSB2YWx1ZXMgb2YgdGhlIGN1cnJlbnQgdmlld3BvcnQgY2VudHJhbCBwb2ludFxuICAgICAgICBjb25zdCBjZW50ZXJYID0gZmlnbWEudmlld3BvcnQuY2VudGVyLng7XG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueTtcbiAgICAgICAgLy8gY3JlYXRlIGFuIGFycmF5IHRvIHN0b3JlIHRoZSBlbGVtZW50c1xuICAgICAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgICAgICAvLyBncmFiIGFsbCB0aGUgZXhpc3RpbmcgYW5ub3RhdGlvbnMgaW4gdGhlIHZpZXdwb3J0LCBnZXQgdGhlIHRvdGFsIGFuZCBhZGQgb25lIHRvIHNldCB0aGUgbmV3IGFubm90YXRpb25zIGNvdW50XG4gICAgICAgIGNvbnN0IGFubm90YXRpb25Db3VudCA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRBbGwobm9kZSA9PiBub2RlLnR5cGUgPT09ICdGUkFNRScgJiYgbm9kZS5uYW1lLmluY2x1ZGVzKCdhbm5vdGF0aW9uLScpKS5sZW5ndGggKyAxO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGFubm90YXRpb25Db3VudCk7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgY291bnRlciBlbGVtZW50XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgcmVjdGFuZ2xlIGZvciB0aGUgY291bnRlclxuICAgICAgICBjb25zdCBkaXNjID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgIGRpc2MucmVzaXplKDI0LCAyNCk7XG4gICAgICAgIGRpc2MuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0sIG9wYWNpdHk6IDEgfV07XG4gICAgICAgIGRpc2MuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiTUlOXCIsIHZlcnRpY2FsOiBcIk1JTlwiIH07XG4gICAgICAgIGRpc2MuY29ybmVyUmFkaXVzID0gMTI7XG4gICAgICAgIG5vZGVzLnB1c2goZGlzYyk7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgdHlwZSBmb3IgdGhlIGNvdW50ZXJcbiAgICAgICAgY29uc3QgbnVtYmVyID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICBudW1iZXIueCA9IGRpc2MueDtcbiAgICAgICAgbnVtYmVyLnkgPSBkaXNjLnk7XG4gICAgICAgIG51bWJlci5yZXNpemUoMjQsIDI0KTtcbiAgICAgICAgbnVtYmVyLmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuICAgICAgICBudW1iZXIuZm9udFNpemUgPSAxMjtcbiAgICAgICAgbnVtYmVyLmxpbmVIZWlnaHQgPSB7IHVuaXQ6ICdQSVhFTFMnLCB2YWx1ZTogMTIgfTtcbiAgICAgICAgbnVtYmVyLmNoYXJhY3RlcnMgPSBhbm5vdGF0aW9uQ291bnQudG9TdHJpbmcoKTtcbiAgICAgICAgbnVtYmVyLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9IH1dO1xuICAgICAgICBudW1iZXIudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiO1xuICAgICAgICBudW1iZXIudGV4dEFsaWduSG9yaXpvbnRhbCA9IFwiQ0VOVEVSXCI7XG4gICAgICAgIG51bWJlci5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogXCJNSU5cIiwgdmVydGljYWw6IFwiTUlOXCIgfTtcbiAgICAgICAgbm9kZXMucHVzaChudW1iZXIpO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIGNvbnRlbnQgZWxlbWVudFxuICAgICAgICAvLyBjcmVhdGUgdGhlIHJlY3RhbmdsZSBmb3IgdGhlIGNvbnRlbnQgYmFja2dyb3VuZFxuICAgICAgICBjb25zdCByZWN0ID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgIHJlY3QueCA9IGRpc2MueCArIDMyO1xuICAgICAgICByZWN0LnkgPSBkaXNjLnk7XG4gICAgICAgIHJlY3QucmVzaXplKDMwOCwgNjApO1xuICAgICAgICByZWN0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCB9LCBvcGFjaXR5OiAxIH1dO1xuICAgICAgICByZWN0LmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiBcIlNUUkVUQ0hcIiwgdmVydGljYWw6IFwiU1RSRVRDSFwiIH07XG4gICAgICAgIHJlY3QuY29ybmVyUmFkaXVzID0gNjtcbiAgICAgICAgbm9kZXMucHVzaChyZWN0KTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSB0eXBlIGZvciB0aGUgY29udGVudCB0ZXh0XG4gICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIHRleHQueCA9IHJlY3QueCArIDEyO1xuICAgICAgICB0ZXh0LnkgPSByZWN0LnkgKyA4O1xuICAgICAgICB0ZXh0LnJlc2l6ZSgyODQsIDQ0KTtcbiAgICAgICAgdGV4dC5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbiAgICAgICAgdGV4dC5mb250U2l6ZSA9IDE0O1xuICAgICAgICB0ZXh0LnBhcmFncmFwaFNwYWNpbmcgPSAxMDtcbiAgICAgICAgdGV4dC5saW5lSGVpZ2h0ID0geyB1bml0OiAnUElYRUxTJywgdmFsdWU6IDIwIH07XG4gICAgICAgIHRleHQuY2hhcmFjdGVycyA9IFwiQWRkIHlvdXIgYW5ub3RhdGlvbiBjb250ZW50IGhlcmUuLi5cIjtcbiAgICAgICAgdGV4dC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSB9XTtcbiAgICAgICAgdGV4dC50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiVE9QXCI7XG4gICAgICAgIHRleHQuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiU1RSRVRDSFwiLCB2ZXJ0aWNhbDogXCJTVFJFVENIXCIgfTtcbiAgICAgICAgbm9kZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgLy8gY3JlYXRlIGEgZnJhbWUgZWxlbWVudCBhbmQgYXBwZW5kIHRoZSBjb3VudGVyIGFuZCBjb250ZW50IGVsZW1lbnRzIGJlZm9yZSBhZGRpbmcgaXQgdG8gdGhlIGNlbnRlciBvZiB0aGUgdmlld3BvcnRcbiAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBmcmFtZS5yZXNpemUoMzQwLCA2MCk7XG4gICAgICAgIGZyYW1lLnggPSBjZW50ZXJYO1xuICAgICAgICBmcmFtZS55ID0gY2VudGVyWTtcbiAgICAgICAgZnJhbWUuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0sIG9wYWNpdHk6IDAgfV07XG4gICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGRpc2MpO1xuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChudW1iZXIpO1xuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChyZWN0KTtcbiAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGZyYW1lLm5hbWUgPSBcImFubm90YXRpb24tXCIgKyBhbm5vdGF0aW9uQ291bnQ7IC8vIGFwcGVuZCB0aGUgbmV4dCBjb3VudCB0byB0aGUgYW5ub3RhdGlvbiB0aXRsZVxuICAgIH1cbiAgICAvLyBBTk5PVEFUSU9OIChSSUdIVClcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdhbm5vdGF0aW9uLWFsdCcpIHtcbiAgICAgICAgLy8gZ3JhYiB0aGUgeCBhbmQgeSB2YWx1ZXMgb2YgdGhlIGN1cnJlbnQgdmlld3BvcnQgY2VudHJhbCBwb2ludFxuICAgICAgICBjb25zdCBjZW50ZXJYID0gZmlnbWEudmlld3BvcnQuY2VudGVyLng7XG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueTtcbiAgICAgICAgLy8gY3JlYXRlIGFuIGFycmF5IHRvIHN0b3JlIHRoZSBlbGVtZW50c1xuICAgICAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgICAgICAvLyBncmFiIGFsbCB0aGUgZXhpc3RpbmcgYW5ub3RhdGlvbnMgaW4gdGhlIHZpZXdwb3J0LCBnZXQgdGhlIHRvdGFsIGFuZCBhZGQgb25lIHRvIHNldCB0aGUgbmV3IGFubm90YXRpb25zIGNvdW50XG4gICAgICAgIGNvbnN0IGFubm90YXRpb25Db3VudCA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRBbGwobm9kZSA9PiBub2RlLnR5cGUgPT09ICdGUkFNRScgJiYgbm9kZS5uYW1lLmluY2x1ZGVzKCdhbm5vdGF0aW9uLScpKS5sZW5ndGggKyAxO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGFubm90YXRpb25Db3VudCk7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgY29udGVudCBlbGVtZW50XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgcmVjdGFuZ2xlIGZvciB0aGUgY29udGVudCBiYWNrZ3JvdW5kXG4gICAgICAgIGNvbnN0IHJlY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgLy9yZWN0LnggPSBkaXNjLnggKyA0MDtcbiAgICAgICAgLy9yZWN0LnkgPSBkaXNjLnk7XG4gICAgICAgIHJlY3QucmVzaXplKDMwOCwgNjApO1xuICAgICAgICByZWN0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCB9LCBvcGFjaXR5OiAxIH1dO1xuICAgICAgICByZWN0LmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiBcIlNUUkVUQ0hcIiwgdmVydGljYWw6IFwiU1RSRVRDSFwiIH07XG4gICAgICAgIHJlY3QuY29ybmVyUmFkaXVzID0gNjtcbiAgICAgICAgbm9kZXMucHVzaChyZWN0KTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSB0eXBlIGZvciB0aGUgY29udGVudCB0ZXh0XG4gICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIHRleHQueCA9IHJlY3QueCArIDEyO1xuICAgICAgICB0ZXh0LnkgPSByZWN0LnkgKyA4O1xuICAgICAgICB0ZXh0LnJlc2l6ZSgyODQsIDQ0KTtcbiAgICAgICAgdGV4dC5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbiAgICAgICAgdGV4dC5mb250U2l6ZSA9IDE0O1xuICAgICAgICB0ZXh0LnBhcmFncmFwaFNwYWNpbmcgPSAxMDtcbiAgICAgICAgdGV4dC5saW5lSGVpZ2h0ID0geyB1bml0OiAnUElYRUxTJywgdmFsdWU6IDIwIH07XG4gICAgICAgIHRleHQuY2hhcmFjdGVycyA9IFwiQWRkIHlvdXIgYW5ub3RhdGlvbiBjb250ZW50IGhlcmUuLi5cIjtcbiAgICAgICAgdGV4dC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSB9XTtcbiAgICAgICAgdGV4dC50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiVE9QXCI7XG4gICAgICAgIHRleHQuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiU1RSRVRDSFwiLCB2ZXJ0aWNhbDogXCJTVFJFVENIXCIgfTtcbiAgICAgICAgbm9kZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBjb3VudGVyIGVsZW1lbnRcbiAgICAgICAgLy8gY3JlYXRlIHRoZSByZWN0YW5nbGUgZm9yIHRoZSBjb3VudGVyXG4gICAgICAgIGNvbnN0IGRpc2MgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgZGlzYy5yZXNpemUoMjQsIDI0KTtcbiAgICAgICAgZGlzYy54ID0gcmVjdC54ICsgMzE2O1xuICAgICAgICBkaXNjLnkgPSByZWN0Lnk7XG4gICAgICAgIGRpc2MuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0sIG9wYWNpdHk6IDEgfV07XG4gICAgICAgIGRpc2MuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiTUFYXCIsIHZlcnRpY2FsOiBcIk1JTlwiIH07XG4gICAgICAgIGRpc2MuY29ybmVyUmFkaXVzID0gMTI7XG4gICAgICAgIG5vZGVzLnB1c2goZGlzYyk7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgdHlwZSBmb3IgdGhlIGNvdW50ZXJcbiAgICAgICAgY29uc3QgbnVtYmVyID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICBudW1iZXIueCA9IGRpc2MueDtcbiAgICAgICAgbnVtYmVyLnkgPSBkaXNjLnk7XG4gICAgICAgIG51bWJlci5yZXNpemUoMjQsIDI0KTtcbiAgICAgICAgbnVtYmVyLmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuICAgICAgICBudW1iZXIuZm9udFNpemUgPSAxMjtcbiAgICAgICAgbnVtYmVyLmxpbmVIZWlnaHQgPSB7IHVuaXQ6ICdQSVhFTFMnLCB2YWx1ZTogMTIgfTtcbiAgICAgICAgbnVtYmVyLmNoYXJhY3RlcnMgPSBhbm5vdGF0aW9uQ291bnQudG9TdHJpbmcoKTtcbiAgICAgICAgbnVtYmVyLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9IH1dO1xuICAgICAgICBudW1iZXIudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiO1xuICAgICAgICBudW1iZXIudGV4dEFsaWduSG9yaXpvbnRhbCA9IFwiQ0VOVEVSXCI7XG4gICAgICAgIG51bWJlci5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogXCJNQVhcIiwgdmVydGljYWw6IFwiTUlOXCIgfTtcbiAgICAgICAgbm9kZXMucHVzaChudW1iZXIpO1xuICAgICAgICAvLyBjcmVhdGUgYSBmcmFtZSBlbGVtZW50IGFuZCBhcHBlbmQgdGhlIGNvdW50ZXIgYW5kIGNvbnRlbnQgZWxlbWVudHMgYmVmb3JlIGFkZGluZyBpdCB0byB0aGUgY2VudGVyIG9mIHRoZSB2aWV3cG9ydFxuICAgICAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGZyYW1lLnJlc2l6ZSgzNDAsIDYwKTtcbiAgICAgICAgZnJhbWUueCA9IGNlbnRlclg7XG4gICAgICAgIGZyYW1lLnkgPSBjZW50ZXJZO1xuICAgICAgICBmcmFtZS5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSwgb3BhY2l0eTogMCB9XTtcbiAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoZGlzYyk7XG4gICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKG51bWJlcik7XG4gICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKHJlY3QpO1xuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgZnJhbWUubmFtZSA9IFwiYW5ub3RhdGlvbi1cIiArIGFubm90YXRpb25Db3VudDsgLy8gYXBwZW5kIHRoZSBuZXh0IGNvdW50IHRvIHRoZSBhbm5vdGF0aW9uIHRpdGxlXG4gICAgfVxufSk7XG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2NvZGUudHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==