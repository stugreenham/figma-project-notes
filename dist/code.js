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
figma.showUI(__html__, { width: 264, height: 216 });
figma.ui.postMessage({
    // post back the user data to the ui for mixpanel
    type: 'identify',
    userID: figma.currentUser.id,
    username: figma.currentUser.name
});
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    // Load in fonts
    yield figma.loadFontAsync({ family: "Roboto", style: "Regular" });
    yield figma.loadFontAsync({ family: "Roboto", style: "Bold" });
    // Base Values
    const defaultWidth = 920;
    // TITLE
    //-------------------------------
    if (msg.type === 'title-small' || msg.type === 'title-medium' || msg.type === 'title-large') {
        // post mixpanel event
        var toolSize;
        if (msg.type === 'title-small') {
            toolSize = "Small";
        }
        if (msg.type === 'title-medium') {
            toolSize = "Medium";
        }
        if (msg.type === 'title-large') {
            toolSize = "Large";
        }
        figma.ui.postMessage({
            type: 'action',
            tool: 'Title',
            size: toolSize,
            count: figma.currentPage.selection.length
        });
        // First check is the user has something selected
        if (figma.currentPage.selection.length === 0) {
            // If nothing is selected, then add a single object in the center of the viewport
            // grab the x and y values of the current viewport central point
            const centerX = figma.viewport.center.x;
            const centerY = figma.viewport.center.y;
            // create an array to store the elements
            const nodes = [];
            // create the line element
            const line = figma.createLine();
            line.x = centerX;
            line.y = centerY;
            if (msg.type === 'title-small') {
                line.strokeWeight = 2;
            }
            if (msg.type === 'title-medium') {
                line.strokeWeight = 4;
            }
            if (msg.type === 'title-large') {
                line.strokeWeight = 8;
            }
            line.resize(defaultWidth, 0);
            line.strokes = [{ type: 'SOLID', color: { r: 0.768627451, g: 0.768627451, b: 0.768627451 } }];
            line.opacity = 0.6;
            nodes.push(line);
            // create the type element
            const text = figma.createText();
            // set the x/y position of the text
            text.x = centerX;
            if (msg.type === 'title-small') {
                text.y = line.y - 70;
            }
            if (msg.type === 'title-medium') {
                text.y = line.y - 80;
            }
            if (msg.type === 'title-large') {
                text.y = line.y - 90;
            }
            // set the width and height
            text.resize(defaultWidth, 50);
            text.fontName = { family: "Roboto", style: "Bold" };
            if (msg.type === 'title-small') {
                text.fontSize = 30;
            }
            if (msg.type === 'title-medium') {
                text.fontSize = 50;
                text.letterSpacing = { unit: 'PIXELS', value: -1 };
            }
            if (msg.type === 'title-large') {
                text.fontSize = 80;
                text.letterSpacing = { unit: 'PIXELS', value: -1 };
            }
            var textChars = "Enter Title...";
            text.characters = textChars;
            text.textAlignVertical = "BOTTOM";
            text.textAutoResize = "HEIGHT";
            nodes.push(text);
            // group both the line and type element
            const group = figma.group(nodes, figma.currentPage);
            group.name = 'title';
            group.expanded = false;
        }
        else {
            // if something is selected, apply the object to all of the selected nodes
            // loop through all the items that are selected
            for (const node of figma.currentPage.selection) {
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
                if (msg.type === 'title-small') {
                    line.y = selectionY - 50;
                    line.strokeWeight = 2;
                }
                if (msg.type === 'title-medium') {
                    line.y = selectionY - 70;
                    line.strokeWeight = 4;
                }
                if (msg.type === 'title-large') {
                    line.y = selectionY - 90;
                    line.strokeWeight = 8;
                }
                line.resize(selectionWidth, 0);
                line.strokes = [{ type: 'SOLID', color: { r: 0.768627451, g: 0.768627451, b: 0.768627451 } }];
                line.opacity = 0.6;
                nodes.push(line);
                // create the type element
                const text = figma.createText();
                text.x = selectionX;
                if (msg.type === 'title-small') {
                    text.y = line.y - 70;
                }
                if (msg.type === 'title-medium') {
                    text.y = line.y - 80;
                }
                if (msg.type === 'title-large') {
                    text.y = line.y - 90;
                }
                text.resize(selectionWidth, 50);
                text.fontName = { family: "Roboto", style: "Bold" };
                if (msg.type === 'title-small') {
                    text.fontSize = 30;
                }
                if (msg.type === 'title-medium') {
                    text.fontSize = 50;
                    text.letterSpacing = { unit: 'PIXELS', value: -1 };
                }
                if (msg.type === 'title-large') {
                    text.fontSize = 80;
                    text.letterSpacing = { unit: 'PIXELS', value: -1 };
                }
                var textChars = "Enter Title...";
                text.characters = textChars;
                text.textAlignVertical = "BOTTOM";
                text.textAutoResize = "HEIGHT";
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
    if (msg.type === 'footnote-small' || msg.type === 'footnote-medium' || msg.type === 'footnote-large') {
        // post mixpanel event
        var toolSize;
        if (msg.type === 'footnote-small') {
            toolSize = "Small";
        }
        if (msg.type === 'footnote-medium') {
            toolSize = "Medium";
        }
        if (msg.type === 'footnote-large') {
            toolSize = "Large";
        }
        figma.ui.postMessage({
            type: 'action',
            tool: "Footnote",
            size: toolSize,
            count: figma.currentPage.selection.length
        });
        // First check is the user has something selected
        if (figma.currentPage.selection.length === 0) {
            // If nothing is selected, then add a single object in the center of the viewport
            // grab the x and y values of the current viewport central point
            const centerX = figma.viewport.center.x;
            const centerY = figma.viewport.center.y;
            // create an array to store the elements
            const nodes = [];
            // create the type element
            const text = figma.createText();
            text.x = centerX;
            text.y = centerY;
            text.resize(defaultWidth, 52);
            text.fontName = { family: "Roboto", style: "Regular" };
            if (msg.type === 'footnote-small') {
                text.fontSize = 28;
            }
            if (msg.type === 'footnote-medium') {
                text.fontSize = 36;
            }
            if (msg.type === 'footnote-large') {
                text.fontSize = 54;
            }
            text.characters = "Enter your description or notes here...";
            text.textAlignVertical = "TOP";
            text.textAutoResize = "HEIGHT";
            text.fills = [{ type: 'SOLID', color: { r: 0.074509804, g: 0.160784314, b: 0.247058824 } }];
            text.opacity = 0.4;
            nodes.push(text);
            // group type element
            const group = figma.group(nodes, figma.currentPage);
            group.name = 'footnote';
            group.expanded = false;
        }
        else {
            // if something is selected, apply the object to all of the selected nodes
            // loop through all the items that are selected
            for (const node of figma.currentPage.selection) {
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
                if (msg.type === 'footnote-small') {
                    text.fontSize = 28;
                }
                if (msg.type === 'footnote-medium') {
                    text.fontSize = 36;
                }
                if (msg.type === 'footnote-large') {
                    text.fontSize = 54;
                }
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
        // post mixpanel event
        var color;
        if (msg.type === 'sticky-green') {
            color = "Green";
        }
        if (msg.type === 'sticky-yellow') {
            color = "Yellow";
        }
        if (msg.type === 'sticky-red') {
            color = "Red";
        }
        figma.ui.postMessage({
            type: 'action',
            tool: "Sticky Note",
            color: color,
        });
        // grab the x and y values of the current viewport central point
        const centerX = figma.viewport.center.x;
        const centerY = figma.viewport.center.y;
        // grab user information
        const username = figma.currentUser.name;
        // create an array to store the elements
        const nodes = [];
        // create the type element
        const text = figma.createText();
        text.resize(390, 390);
        text.fontName = { family: "Roboto", style: "Regular" };
        text.fontSize = 24;
        text.paragraphSpacing = 20;
        text.lineHeight = { unit: 'PIXELS', value: 38 };
        text.characters = "Enter your note content here...\n\n\n\n";
        text.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
        text.textAlignVertical = "TOP";
        text.textAutoResize = "HEIGHT";
        text.layoutAlign = "STRETCH";
        nodes.push(text);
        // create the name type element
        const name = figma.createText();
        name.resize(390, 20);
        name.fontName = { family: "Roboto", style: "Bold" };
        name.fontSize = 20;
        name.lineHeight = { unit: 'PIXELS', value: 20 };
        name.characters = username;
        name.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
        name.textAlignVertical = "TOP";
        name.textAlignHorizontal = "RIGHT";
        name.layoutAlign = "STRETCH";
        nodes.push(name);
        // create a frame element and append the type and rect elements before adding it to the center of the viewport
        const frame = figma.createFrame();
        frame.resize(450, 450);
        frame.x = centerX;
        frame.y = centerY;
        // auto layout
        frame.layoutMode = "VERTICAL";
        frame.primaryAxisSizingMode = "AUTO";
        frame.itemSpacing = 8;
        frame.paddingTop = 30;
        frame.paddingRight = 30;
        frame.paddingBottom = 30;
        frame.paddingLeft = 30;
        // styling
        if (msg.type === 'sticky-green') {
            frame.fills = [{ type: 'SOLID', color: { r: 0.847058824, g: 1, b: 0.862745098 }, opacity: 1 }];
        }
        if (msg.type === 'sticky-yellow') {
            frame.fills = [{ type: 'SOLID', color: { r: 1, g: 0.921568627, b: 0.682352941 }, opacity: 1 }];
        }
        if (msg.type === 'sticky-red') {
            frame.fills = [{ type: 'SOLID', color: { r: 1, g: 0.858823529, b: 0.858823529 }, opacity: 1 }];
        }
        let dropShadowEffect = {
            type: "DROP_SHADOW",
            blendMode: 'NORMAL',
            visible: true,
            radius: 10,
            color: { r: 0, g: 0, b: 0, a: 0.1 },
            offset: { x: 0, y: 4 }
        };
        frame.effects = [dropShadowEffect];
        // append objects to the frame
        frame.appendChild(text);
        frame.appendChild(name);
        frame.name = "Sticky Note";
        frame.clipsContent = false;
    }
    // ANNOTATION
    //-------------------------------
    if (msg.type === 'annotation-left' || msg.type === 'annotation-right') {
        // post mixpanel event
        var toolPosition;
        if (msg.type === 'annotation-left') {
            toolPosition = "Left";
        }
        else {
            toolPosition = "Right";
        }
        figma.ui.postMessage({
            type: 'action',
            tool: "Annotation",
            position: toolPosition,
        });
        // grab the x and y values of the current viewport central point
        const centerX = figma.viewport.center.x;
        const centerY = figma.viewport.center.y;
        // create an array to store the elements
        // const discNodes = [];
        //const contentNodes = [];
        // grab all the existing annotations in the viewport, get the total and add one to set the new annotations count
        const annotationCount = figma.currentPage.findAll(node => node.type === 'FRAME' && node.name.includes('annotation-')).length + 1;
        // create the counter element
        // create the rectangle for the counter
        const disc = figma.createRectangle();
        disc.resize(24, 24);
        disc.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 }, opacity: 1 }];
        disc.constraints = { horizontal: "MIN", vertical: "MIN" };
        disc.cornerRadius = 12;
        // discNodes.push(disc);
        // create the type for the counter
        const number = figma.createText();
        number.x = disc.x;
        number.y = disc.y;
        number.resize(24, 24);
        // styling
        number.fontName = { family: "Roboto", style: "Regular" };
        number.fontSize = 12;
        number.lineHeight = { unit: 'PIXELS', value: 12 };
        number.characters = annotationCount.toString();
        number.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        // constraints
        number.textAlignVertical = "CENTER";
        number.textAlignHorizontal = "CENTER";
        number.constraints = { horizontal: "MIN", vertical: "MIN" };
        // discNodes.push(number);
        // add the disc and number to a frame
        const discFrame = figma.createFrame();
        discFrame.resize(24, 24);
        // append objects and name the frame
        discFrame.appendChild(disc);
        discFrame.appendChild(number);
        discFrame.name = "disc";
        // create the content element
        // create the type for the content text
        const text = figma.createText();
        // styling
        text.fontName = { family: "Roboto", style: "Regular" };
        text.fontSize = 14;
        text.paragraphSpacing = 10;
        text.lineHeight = { unit: 'PIXELS', value: 20 };
        text.characters = "Add your annotation content here...\n";
        text.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        // auto layout
        text.textAlignVertical = "TOP";
        text.textAutoResize = "HEIGHT";
        text.layoutAlign = "STRETCH";
        //contentNodes.push(text);
        // create the frame to store the content using autolayout to make sure it resizes
        const contentFrame = figma.createFrame();
        contentFrame.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 }, opacity: 1 }];
        // styling
        contentFrame.cornerRadius = 6;
        // autolayout
        contentFrame.layoutMode = "VERTICAL";
        contentFrame.primaryAxisSizingMode = "AUTO";
        contentFrame.counterAxisSizingMode = "AUTO";
        contentFrame.layoutGrow = 1;
        contentFrame.itemSpacing = 8;
        contentFrame.paddingTop = 8;
        contentFrame.paddingRight = 12;
        contentFrame.paddingBottom = 8;
        contentFrame.paddingLeft = 12;
        // append objects and name the frame
        contentFrame.appendChild(text);
        contentFrame.name = "content"; // append the next count to the annotation title
        // create a frame element and append the counter and content elements before adding it to the center of the viewport
        const frame = figma.createFrame();
        frame.x = centerX;
        frame.y = centerY;
        // autolayout
        frame.layoutMode = "HORIZONTAL";
        frame.primaryAxisSizingMode = "AUTO";
        // styling
        frame.resize(340, 36);
        frame.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 }, opacity: 0 }];
        // autolayout cont. (this ordering is important)
        frame.counterAxisSizingMode = "AUTO";
        frame.itemSpacing = 8;
        frame.layoutAlign = "STRETCH";
        // append objects and name the frame
        if (msg.type === 'annotation-left') {
            frame.appendChild(discFrame);
            frame.appendChild(contentFrame);
        }
        else {
            frame.appendChild(contentFrame);
            frame.appendChild(discFrame);
        }
        frame.name = "annotation-" + annotationCount; // append the next count to the annotation title
    }
    // ANNOTATION (SPLIT)
    //-------------------------------
    // if (msg.type === 'annotation-split') {
    // 	// post mixpanel event
    //     // figma.ui.postMessage({
    //     //     type: 'action', 
    //     //     tool: "Annotation", 
    //     //     position: "Split",
    //     // });
    // 	// grab the x and y values of the current viewport central point
    // 	const centerX = figma.viewport.center.x;
    // 	const centerY = figma.viewport.center.y;
    // 	// create an array to store the elements
    // 	const nodes = [];
    // 	// grab all the existing annotations in the viewport, get the total and add one to set the new annotations count
    // 	const annotationCount = figma.currentPage.findAll(node => node.type === 'FRAME' && node.name.includes('annotation-')).length + 1;
    // 	// create the content element
    // 	// create the rectangle for the content background
    // 	const rect = figma.createRectangle();
    // 	//rect.x = disc.x + 40;
    // 	//rect.y = disc.y;
    // 	rect.resize(308, 60);
    // 	rect.fills = [{ type: 'SOLID', color: {r: 0, g: 0, b: 0}, opacity: 1 }];
    // 	rect.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    // 	rect.cornerRadius = 6;
    // 	nodes.push(rect);
    // 	// create the type for the content text
    // 	const text = figma.createText();
    // 	text.x = rect.x + 12;
    // 	text.y = rect.y + 8;
    // 	text.resize(284, 44);
    // 	text.fontName = { family: "Roboto", style: "Regular" }
    // 	text.fontSize = 14;
    // 	text.paragraphSpacing = 10;
    // 	text.lineHeight = {unit: 'PIXELS', value: 20};
    // 	text.characters = "Add your annotation content here...";
    // 	text.fills = [{type: 'SOLID', color: {r: 1, g: 1, b: 1}}];
    // 	text.textAlignVertical = "TOP";
    // 	text.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
    // 	nodes.push(text);
    // 	// create a frame element and append the content elements before adding it to the center of the viewport
    // 	const rectFrame = figma.createFrame();
    // 	rectFrame.resize(340, 60);
    // 	rectFrame.x = centerX;
    // 	rectFrame.y = centerY;
    // 	rectFrame.fills = [{ type: 'SOLID', color: {r: 0, g: 0, b: 0}, opacity: 0 }];
    // 	// rectFrame.appendChild(disc);
    // 	// rectFrame.appendChild(number);
    // 	rectFrame.appendChild(rect);
    // 	rectFrame.appendChild(text);
    // 	rectFrame.name = "annotation-" + annotationCount; // append the next count to the annotation title
    //     // create the counter element
    // 	// create the rectangle for the counter
    // 	const disc = figma.createRectangle();
    // 	disc.resize(24, 24);
    // 	// disc.x = centerX;
    // 	// disc.y = centerX;
    // 	disc.fills = [{ type: 'SOLID', color: {r: 0, g: 0, b: 0}, opacity: 1 }];
    // 	disc.constraints = { horizontal: "MAX", vertical: "MIN" };
    // 	disc.cornerRadius = 12;
    // 	nodes.push(disc);
    // 	// create the type for the counter
    // 	const number = figma.createText();
    // 	number.x = disc.x;
    // 	number.y = disc.y;
    // 	number.resize(24, 24);
    // 	number.fontName = { family: "Roboto", style: "Regular" }
    // 	number.fontSize = 12;
    // 	number.lineHeight = {unit: 'PIXELS', value: 12};
    // 	number.characters = annotationCount.toString();
    // 	number.fills = [{type: 'SOLID', color: {r: 1, g: 1, b: 1}}]
    // 	number.textAlignVertical = "CENTER";
    // 	number.textAlignHorizontal = "CENTER";
    // 	number.constraints = { horizontal: "MAX", vertical: "MIN" };
    // 	nodes.push(number);
    //     // create a frame element to contain the counter disc element before adding it to the center of the viewport
    // 	const discFrame = figma.createFrame();
    // 	discFrame.resize(24, 24);
    // 	discFrame.x = centerX - 100;
    // 	discFrame.y = centerY - 100;
    // 	discFrame.fills = [{ type: 'SOLID', color: {r: 0, g: 0, b: 0}, opacity: 0 }];
    // 	discFrame.appendChild(disc);
    // 	discFrame.appendChild(number);
    // 	discFrame.name = "annotation-" + annotationCount; // append the next count to the annotation title
    // }
    // DIVIDERS
    //-------------------------------
    // if (msg.type === 'divider-thick' || msg.type === 'divider-thin') {
    //     // post mixpanel event
    //     var size;
    //     if (msg.type === 'divider-thin') { size = "Thin" }
    //     if (msg.type === 'divider-thick') { size = "Thick" }
    //     figma.ui.postMessage({
    //         type: 'action', 
    //         tool: "Divider", 
    //         size: size
    //     });
    // 	// grab the x and y values of the current viewport central point
    // 	const centerX = figma.viewport.center.x;
    // 	const centerY = figma.viewport.center.y;
    // 	// create an array to store the elements
    // 	const nodes = [];
    // 	// create the line element
    // 	const line = figma.createLine();
    // 	line.x = centerX;
    // 	line.y = centerY;
    //     if (msg.type === 'divider-thin') {  line.strokeWeight = 20; }
    // 	if (msg.type === 'divider-thick') { line.strokeWeight = 40; }
    // 	line.resize(defaultWidth, 0);
    // 	line.strokes = [{type: 'SOLID', color: {r: 0.768627451, g: 0.768627451, b: 0.768627451}}];
    // 	line.opacity = 0.6;
    // 	nodes.push(line);
    // 	// group both the line and type element
    // 	const group = figma.group(nodes, figma.currentPage);
    // 	group.name = 'Divider';
    // 	group.expanded = false;
    // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0EseUJBQXlCLHlCQUF5QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxnQ0FBZ0Msb0NBQW9DO0FBQ3BFLGdDQUFnQyxpQ0FBaUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdCQUF3QixrREFBa0Q7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHdCQUF3QixrREFBa0Q7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdCQUF3QixrREFBa0Q7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHdCQUF3QixrREFBa0Q7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSx3QkFBd0Isd0JBQXdCLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLHdCQUF3Qix3QkFBd0IsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHdCQUF3QixzQ0FBc0MsY0FBYztBQUN6RztBQUNBO0FBQ0EsNkJBQTZCLHdCQUF3QixzQ0FBc0MsY0FBYztBQUN6RztBQUNBO0FBQ0EsNkJBQTZCLHdCQUF3QixzQ0FBc0MsY0FBYztBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMEJBQTBCO0FBQy9DLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3QkFBd0Isa0JBQWtCLGNBQWM7QUFDaEYsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSwwQkFBMEIsd0JBQXdCLG9CQUFvQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSx3QkFBd0Isd0JBQXdCLG9CQUFvQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx3QkFBd0Isa0JBQWtCLGNBQWM7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0JBQXdCLGtCQUFrQixjQUFjO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUIsaUJBQWlCLGNBQWM7QUFDOUUsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSx1QkFBdUIsdUJBQXVCLGtCQUFrQjtBQUNoRTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdUJBQXVCLGlCQUFpQixjQUFjO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUIsaUJBQWlCLGNBQWM7QUFDOUUsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EseUJBQXlCLHVCQUF1QixrQkFBa0I7QUFDbEU7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdUJBQXVCLGlCQUFpQixjQUFjO0FBQ25GO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0MsNENBQTRDO0FBQzVDO0FBQ0EseUJBQXlCLHVCQUF1QixnREFBZ0Q7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztVRXhrQkQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiAyNjQsIGhlaWdodDogMjE2IH0pO1xuZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgIC8vIHBvc3QgYmFjayB0aGUgdXNlciBkYXRhIHRvIHRoZSB1aSBmb3IgbWl4cGFuZWxcbiAgICB0eXBlOiAnaWRlbnRpZnknLFxuICAgIHVzZXJJRDogZmlnbWEuY3VycmVudFVzZXIuaWQsXG4gICAgdXNlcm5hbWU6IGZpZ21hLmN1cnJlbnRVc2VyLm5hbWVcbn0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIC8vIExvYWQgaW4gZm9udHNcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiQm9sZFwiIH0pO1xuICAgIC8vIEJhc2UgVmFsdWVzXG4gICAgY29uc3QgZGVmYXVsdFdpZHRoID0gOTIwO1xuICAgIC8vIFRJVExFXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaWYgKG1zZy50eXBlID09PSAndGl0bGUtc21hbGwnIHx8IG1zZy50eXBlID09PSAndGl0bGUtbWVkaXVtJyB8fCBtc2cudHlwZSA9PT0gJ3RpdGxlLWxhcmdlJykge1xuICAgICAgICAvLyBwb3N0IG1peHBhbmVsIGV2ZW50XG4gICAgICAgIHZhciB0b29sU2l6ZTtcbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGl0bGUtc21hbGwnKSB7XG4gICAgICAgICAgICB0b29sU2l6ZSA9IFwiU21hbGxcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICd0aXRsZS1tZWRpdW0nKSB7XG4gICAgICAgICAgICB0b29sU2l6ZSA9IFwiTWVkaXVtXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGl0bGUtbGFyZ2UnKSB7XG4gICAgICAgICAgICB0b29sU2l6ZSA9IFwiTGFyZ2VcIjtcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiAnYWN0aW9uJyxcbiAgICAgICAgICAgIHRvb2w6ICdUaXRsZScsXG4gICAgICAgICAgICBzaXplOiB0b29sU2l6ZSxcbiAgICAgICAgICAgIGNvdW50OiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBGaXJzdCBjaGVjayBpcyB0aGUgdXNlciBoYXMgc29tZXRoaW5nIHNlbGVjdGVkXG4gICAgICAgIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBJZiBub3RoaW5nIGlzIHNlbGVjdGVkLCB0aGVuIGFkZCBhIHNpbmdsZSBvYmplY3QgaW4gdGhlIGNlbnRlciBvZiB0aGUgdmlld3BvcnRcbiAgICAgICAgICAgIC8vIGdyYWIgdGhlIHggYW5kIHkgdmFsdWVzIG9mIHRoZSBjdXJyZW50IHZpZXdwb3J0IGNlbnRyYWwgcG9pbnRcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlclggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlclkgPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueTtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgZWxlbWVudHNcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGxpbmUgZWxlbWVudFxuICAgICAgICAgICAgY29uc3QgbGluZSA9IGZpZ21hLmNyZWF0ZUxpbmUoKTtcbiAgICAgICAgICAgIGxpbmUueCA9IGNlbnRlclg7XG4gICAgICAgICAgICBsaW5lLnkgPSBjZW50ZXJZO1xuICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGl0bGUtc21hbGwnKSB7XG4gICAgICAgICAgICAgICAgbGluZS5zdHJva2VXZWlnaHQgPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGl0bGUtbWVkaXVtJykge1xuICAgICAgICAgICAgICAgIGxpbmUuc3Ryb2tlV2VpZ2h0ID0gNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlLWxhcmdlJykge1xuICAgICAgICAgICAgICAgIGxpbmUuc3Ryb2tlV2VpZ2h0ID0gODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbmUucmVzaXplKGRlZmF1bHRXaWR0aCwgMCk7XG4gICAgICAgICAgICBsaW5lLnN0cm9rZXMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjc2ODYyNzQ1MSwgZzogMC43Njg2Mjc0NTEsIGI6IDAuNzY4NjI3NDUxIH0gfV07XG4gICAgICAgICAgICBsaW5lLm9wYWNpdHkgPSAwLjY7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSB0eXBlIGVsZW1lbnRcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgICAgICAvLyBzZXQgdGhlIHgveSBwb3NpdGlvbiBvZiB0aGUgdGV4dFxuICAgICAgICAgICAgdGV4dC54ID0gY2VudGVyWDtcbiAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlLXNtYWxsJykge1xuICAgICAgICAgICAgICAgIHRleHQueSA9IGxpbmUueSAtIDcwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGl0bGUtbWVkaXVtJykge1xuICAgICAgICAgICAgICAgIHRleHQueSA9IGxpbmUueSAtIDgwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGl0bGUtbGFyZ2UnKSB7XG4gICAgICAgICAgICAgICAgdGV4dC55ID0gbGluZS55IC0gOTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzZXQgdGhlIHdpZHRoIGFuZCBoZWlnaHRcbiAgICAgICAgICAgIHRleHQucmVzaXplKGRlZmF1bHRXaWR0aCwgNTApO1xuICAgICAgICAgICAgdGV4dC5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJCb2xkXCIgfTtcbiAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlLXNtYWxsJykge1xuICAgICAgICAgICAgICAgIHRleHQuZm9udFNpemUgPSAzMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlLW1lZGl1bScpIHtcbiAgICAgICAgICAgICAgICB0ZXh0LmZvbnRTaXplID0gNTA7XG4gICAgICAgICAgICAgICAgdGV4dC5sZXR0ZXJTcGFjaW5nID0geyB1bml0OiAnUElYRUxTJywgdmFsdWU6IC0xIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICd0aXRsZS1sYXJnZScpIHtcbiAgICAgICAgICAgICAgICB0ZXh0LmZvbnRTaXplID0gODA7XG4gICAgICAgICAgICAgICAgdGV4dC5sZXR0ZXJTcGFjaW5nID0geyB1bml0OiAnUElYRUxTJywgdmFsdWU6IC0xIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdGV4dENoYXJzID0gXCJFbnRlciBUaXRsZS4uLlwiO1xuICAgICAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gdGV4dENoYXJzO1xuICAgICAgICAgICAgdGV4dC50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiQk9UVE9NXCI7XG4gICAgICAgICAgICB0ZXh0LnRleHRBdXRvUmVzaXplID0gXCJIRUlHSFRcIjtcbiAgICAgICAgICAgIG5vZGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICAvLyBncm91cCBib3RoIHRoZSBsaW5lIGFuZCB0eXBlIGVsZW1lbnRcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZmlnbWEuZ3JvdXAobm9kZXMsIGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgICAgIGdyb3VwLm5hbWUgPSAndGl0bGUnO1xuICAgICAgICAgICAgZ3JvdXAuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHNvbWV0aGluZyBpcyBzZWxlY3RlZCwgYXBwbHkgdGhlIG9iamVjdCB0byBhbGwgb2YgdGhlIHNlbGVjdGVkIG5vZGVzXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHRoZSBpdGVtcyB0aGF0IGFyZSBzZWxlY3RlZFxuICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIGdyYWIgdGhlIGN1cnJlbnQgc2VsZWN0aW9uJ3MgeCwgeSwgd2lkdGggYW5kIG5hbWUgdmFsdWVzXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uWCA9IG5vZGUueDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25ZID0gbm9kZS55O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbldpZHRoID0gbm9kZS53aWR0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25OYW1lID0gbm9kZS5uYW1lO1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgZWxlbWVudHNcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgbGluZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IGZpZ21hLmNyZWF0ZUxpbmUoKTtcbiAgICAgICAgICAgICAgICBsaW5lLnggPSBzZWxlY3Rpb25YO1xuICAgICAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlLXNtYWxsJykge1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnkgPSBzZWxlY3Rpb25ZIC0gNTA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc3Ryb2tlV2VpZ2h0ID0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGl0bGUtbWVkaXVtJykge1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnkgPSBzZWxlY3Rpb25ZIC0gNzA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc3Ryb2tlV2VpZ2h0ID0gNDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGl0bGUtbGFyZ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUueSA9IHNlbGVjdGlvblkgLSA5MDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zdHJva2VXZWlnaHQgPSA4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaW5lLnJlc2l6ZShzZWxlY3Rpb25XaWR0aCwgMCk7XG4gICAgICAgICAgICAgICAgbGluZS5zdHJva2VzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMC43Njg2Mjc0NTEsIGc6IDAuNzY4NjI3NDUxLCBiOiAwLjc2ODYyNzQ1MSB9IH1dO1xuICAgICAgICAgICAgICAgIGxpbmUub3BhY2l0eSA9IDAuNjtcbiAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgdHlwZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgICAgICAgICB0ZXh0LnggPSBzZWxlY3Rpb25YO1xuICAgICAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlLXNtYWxsJykge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LnkgPSBsaW5lLnkgLSA3MDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGl0bGUtbWVkaXVtJykge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LnkgPSBsaW5lLnkgLSA4MDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGl0bGUtbGFyZ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQueSA9IGxpbmUueSAtIDkwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0ZXh0LnJlc2l6ZShzZWxlY3Rpb25XaWR0aCwgNTApO1xuICAgICAgICAgICAgICAgIHRleHQuZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiQm9sZFwiIH07XG4gICAgICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGl0bGUtc21hbGwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQuZm9udFNpemUgPSAzMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGl0bGUtbWVkaXVtJykge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LmZvbnRTaXplID0gNTA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQubGV0dGVyU3BhY2luZyA9IHsgdW5pdDogJ1BJWEVMUycsIHZhbHVlOiAtMSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICd0aXRsZS1sYXJnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5mb250U2l6ZSA9IDgwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LmxldHRlclNwYWNpbmcgPSB7IHVuaXQ6ICdQSVhFTFMnLCB2YWx1ZTogLTEgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRleHRDaGFycyA9IFwiRW50ZXIgVGl0bGUuLi5cIjtcbiAgICAgICAgICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSB0ZXh0Q2hhcnM7XG4gICAgICAgICAgICAgICAgdGV4dC50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiQk9UVE9NXCI7XG4gICAgICAgICAgICAgICAgdGV4dC50ZXh0QXV0b1Jlc2l6ZSA9IFwiSEVJR0hUXCI7XG4gICAgICAgICAgICAgICAgbm9kZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgICAgICAvLyBncm91cCBib3RoIHRoZSBsaW5lIGFuZCB0eXBlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGZpZ21hLmdyb3VwKG5vZGVzLCBmaWdtYS5jdXJyZW50UGFnZSk7XG4gICAgICAgICAgICAgICAgZ3JvdXAubmFtZSA9IHNlbGVjdGlvbk5hbWUgKyAnLXRpdGxlJztcbiAgICAgICAgICAgICAgICBncm91cC5leHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEZPT1ROT1RFXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaWYgKG1zZy50eXBlID09PSAnZm9vdG5vdGUtc21hbGwnIHx8IG1zZy50eXBlID09PSAnZm9vdG5vdGUtbWVkaXVtJyB8fCBtc2cudHlwZSA9PT0gJ2Zvb3Rub3RlLWxhcmdlJykge1xuICAgICAgICAvLyBwb3N0IG1peHBhbmVsIGV2ZW50XG4gICAgICAgIHZhciB0b29sU2l6ZTtcbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAnZm9vdG5vdGUtc21hbGwnKSB7XG4gICAgICAgICAgICB0b29sU2l6ZSA9IFwiU21hbGxcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdmb290bm90ZS1tZWRpdW0nKSB7XG4gICAgICAgICAgICB0b29sU2l6ZSA9IFwiTWVkaXVtXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAnZm9vdG5vdGUtbGFyZ2UnKSB7XG4gICAgICAgICAgICB0b29sU2l6ZSA9IFwiTGFyZ2VcIjtcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiAnYWN0aW9uJyxcbiAgICAgICAgICAgIHRvb2w6IFwiRm9vdG5vdGVcIixcbiAgICAgICAgICAgIHNpemU6IHRvb2xTaXplLFxuICAgICAgICAgICAgY291bnQ6IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGhcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEZpcnN0IGNoZWNrIGlzIHRoZSB1c2VyIGhhcyBzb21ldGhpbmcgc2VsZWN0ZWRcbiAgICAgICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIElmIG5vdGhpbmcgaXMgc2VsZWN0ZWQsIHRoZW4gYWRkIGEgc2luZ2xlIG9iamVjdCBpbiB0aGUgY2VudGVyIG9mIHRoZSB2aWV3cG9ydFxuICAgICAgICAgICAgLy8gZ3JhYiB0aGUgeCBhbmQgeSB2YWx1ZXMgb2YgdGhlIGN1cnJlbnQgdmlld3BvcnQgY2VudHJhbCBwb2ludFxuICAgICAgICAgICAgY29uc3QgY2VudGVyWCA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci54O1xuICAgICAgICAgICAgY29uc3QgY2VudGVyWSA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci55O1xuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGFycmF5IHRvIHN0b3JlIHRoZSBlbGVtZW50c1xuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgdHlwZSBlbGVtZW50XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICAgICAgdGV4dC54ID0gY2VudGVyWDtcbiAgICAgICAgICAgIHRleHQueSA9IGNlbnRlclk7XG4gICAgICAgICAgICB0ZXh0LnJlc2l6ZShkZWZhdWx0V2lkdGgsIDUyKTtcbiAgICAgICAgICAgIHRleHQuZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH07XG4gICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdmb290bm90ZS1zbWFsbCcpIHtcbiAgICAgICAgICAgICAgICB0ZXh0LmZvbnRTaXplID0gMjg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdmb290bm90ZS1tZWRpdW0nKSB7XG4gICAgICAgICAgICAgICAgdGV4dC5mb250U2l6ZSA9IDM2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAnZm9vdG5vdGUtbGFyZ2UnKSB7XG4gICAgICAgICAgICAgICAgdGV4dC5mb250U2l6ZSA9IDU0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gXCJFbnRlciB5b3VyIGRlc2NyaXB0aW9uIG9yIG5vdGVzIGhlcmUuLi5cIjtcbiAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIlRPUFwiO1xuICAgICAgICAgICAgdGV4dC50ZXh0QXV0b1Jlc2l6ZSA9IFwiSEVJR0hUXCI7XG4gICAgICAgICAgICB0ZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMC4wNzQ1MDk4MDQsIGc6IDAuMTYwNzg0MzE0LCBiOiAwLjI0NzA1ODgyNCB9IH1dO1xuICAgICAgICAgICAgdGV4dC5vcGFjaXR5ID0gMC40O1xuICAgICAgICAgICAgbm9kZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgIC8vIGdyb3VwIHR5cGUgZWxlbWVudFxuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBmaWdtYS5ncm91cChub2RlcywgZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgICAgICAgICAgZ3JvdXAubmFtZSA9ICdmb290bm90ZSc7XG4gICAgICAgICAgICBncm91cC5leHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgc29tZXRoaW5nIGlzIHNlbGVjdGVkLCBhcHBseSB0aGUgb2JqZWN0IHRvIGFsbCBvZiB0aGUgc2VsZWN0ZWQgbm9kZXNcbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgdGhlIGl0ZW1zIHRoYXQgYXJlIHNlbGVjdGVkXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gZ3JhYiB0aGUgY3VycmVudCBzZWxlY3Rpb24ncyB4LCB5LCB3aWR0aCwgaGVpZ2h0IGFuZCBuYW1lIHZhbHVlc1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvblggPSBub2RlLng7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uWSA9IG5vZGUueTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25XaWR0aCA9IG5vZGUud2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uSGVpZ2h0ID0gbm9kZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uTmFtZSA9IG5vZGUubmFtZTtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHR5cGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgICAgICAgICAgdGV4dC54ID0gc2VsZWN0aW9uWDtcbiAgICAgICAgICAgICAgICB0ZXh0LnkgPSBzZWxlY3Rpb25ZICsgc2VsZWN0aW9uSGVpZ2h0ICsgNjA7IC8vIHNldCB0aGUgdHlwZXMgeSB2YWx1ZSB0byA1MHB4IGJlbG93IHRoZSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICB0ZXh0LnJlc2l6ZShzZWxlY3Rpb25XaWR0aCwgNTIpO1xuICAgICAgICAgICAgICAgIHRleHQuZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH07XG4gICAgICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAnZm9vdG5vdGUtc21hbGwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQuZm9udFNpemUgPSAyODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAnZm9vdG5vdGUtbWVkaXVtJykge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LmZvbnRTaXplID0gMzY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ2Zvb3Rub3RlLWxhcmdlJykge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LmZvbnRTaXplID0gNTQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRleHQuY2hhcmFjdGVycyA9IFwiRW50ZXIgeW91ciBkZXNjcmlwdGlvbiBvciBub3RlcyBoZXJlLi4uXCI7XG4gICAgICAgICAgICAgICAgdGV4dC50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiVE9QXCI7XG4gICAgICAgICAgICAgICAgdGV4dC50ZXh0QXV0b1Jlc2l6ZSA9IFwiSEVJR0hUXCI7XG4gICAgICAgICAgICAgICAgdGV4dC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuMDc0NTA5ODA0LCBnOiAwLjE2MDc4NDMxNCwgYjogMC4yNDcwNTg4MjQgfSB9XTtcbiAgICAgICAgICAgICAgICB0ZXh0Lm9wYWNpdHkgPSAwLjQ7XG4gICAgICAgICAgICAgICAgbm9kZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgICAgICAvLyBncm91cCB0eXBlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGZpZ21hLmdyb3VwKG5vZGVzLCBmaWdtYS5jdXJyZW50UGFnZSk7XG4gICAgICAgICAgICAgICAgZ3JvdXAubmFtZSA9IHNlbGVjdGlvbk5hbWUgKyAnLWZvb3Rub3RlJztcbiAgICAgICAgICAgICAgICBncm91cC5leHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFNUSUNLWSBOT1RFXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaWYgKG1zZy50eXBlID09PSAnc3RpY2t5LWdyZWVuJyB8fCBtc2cudHlwZSA9PT0gJ3N0aWNreS15ZWxsb3cnIHx8IG1zZy50eXBlID09PSAnc3RpY2t5LXJlZCcpIHtcbiAgICAgICAgLy8gcG9zdCBtaXhwYW5lbCBldmVudFxuICAgICAgICB2YXIgY29sb3I7XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3N0aWNreS1ncmVlbicpIHtcbiAgICAgICAgICAgIGNvbG9yID0gXCJHcmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3N0aWNreS15ZWxsb3cnKSB7XG4gICAgICAgICAgICBjb2xvciA9IFwiWWVsbG93XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAnc3RpY2t5LXJlZCcpIHtcbiAgICAgICAgICAgIGNvbG9yID0gXCJSZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiAnYWN0aW9uJyxcbiAgICAgICAgICAgIHRvb2w6IFwiU3RpY2t5IE5vdGVcIixcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGdyYWIgdGhlIHggYW5kIHkgdmFsdWVzIG9mIHRoZSBjdXJyZW50IHZpZXdwb3J0IGNlbnRyYWwgcG9pbnRcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci54O1xuICAgICAgICBjb25zdCBjZW50ZXJZID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnk7XG4gICAgICAgIC8vIGdyYWIgdXNlciBpbmZvcm1hdGlvblxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGZpZ21hLmN1cnJlbnRVc2VyLm5hbWU7XG4gICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgZWxlbWVudHNcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSB0eXBlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgdGV4dC5yZXNpemUoMzkwLCAzOTApO1xuICAgICAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuICAgICAgICB0ZXh0LmZvbnRTaXplID0gMjQ7XG4gICAgICAgIHRleHQucGFyYWdyYXBoU3BhY2luZyA9IDIwO1xuICAgICAgICB0ZXh0LmxpbmVIZWlnaHQgPSB7IHVuaXQ6ICdQSVhFTFMnLCB2YWx1ZTogMzggfTtcbiAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gXCJFbnRlciB5b3VyIG5vdGUgY29udGVudCBoZXJlLi4uXFxuXFxuXFxuXFxuXCI7XG4gICAgICAgIHRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjIsIGc6IDAuMiwgYjogMC4yIH0gfV07XG4gICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIlRPUFwiO1xuICAgICAgICB0ZXh0LnRleHRBdXRvUmVzaXplID0gXCJIRUlHSFRcIjtcbiAgICAgICAgdGV4dC5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgICAgICBub2Rlcy5wdXNoKHRleHQpO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIG5hbWUgdHlwZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IG5hbWUgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIG5hbWUucmVzaXplKDM5MCwgMjApO1xuICAgICAgICBuYW1lLmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIkJvbGRcIiB9O1xuICAgICAgICBuYW1lLmZvbnRTaXplID0gMjA7XG4gICAgICAgIG5hbWUubGluZUhlaWdodCA9IHsgdW5pdDogJ1BJWEVMUycsIHZhbHVlOiAyMCB9O1xuICAgICAgICBuYW1lLmNoYXJhY3RlcnMgPSB1c2VybmFtZTtcbiAgICAgICAgbmFtZS5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuMiwgZzogMC4yLCBiOiAwLjIgfSB9XTtcbiAgICAgICAgbmFtZS50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiVE9QXCI7XG4gICAgICAgIG5hbWUudGV4dEFsaWduSG9yaXpvbnRhbCA9IFwiUklHSFRcIjtcbiAgICAgICAgbmFtZS5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgICAgICBub2Rlcy5wdXNoKG5hbWUpO1xuICAgICAgICAvLyBjcmVhdGUgYSBmcmFtZSBlbGVtZW50IGFuZCBhcHBlbmQgdGhlIHR5cGUgYW5kIHJlY3QgZWxlbWVudHMgYmVmb3JlIGFkZGluZyBpdCB0byB0aGUgY2VudGVyIG9mIHRoZSB2aWV3cG9ydFxuICAgICAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGZyYW1lLnJlc2l6ZSg0NTAsIDQ1MCk7XG4gICAgICAgIGZyYW1lLnggPSBjZW50ZXJYO1xuICAgICAgICBmcmFtZS55ID0gY2VudGVyWTtcbiAgICAgICAgLy8gYXV0byBsYXlvdXRcbiAgICAgICAgZnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgZnJhbWUucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgIGZyYW1lLml0ZW1TcGFjaW5nID0gODtcbiAgICAgICAgZnJhbWUucGFkZGluZ1RvcCA9IDMwO1xuICAgICAgICBmcmFtZS5wYWRkaW5nUmlnaHQgPSAzMDtcbiAgICAgICAgZnJhbWUucGFkZGluZ0JvdHRvbSA9IDMwO1xuICAgICAgICBmcmFtZS5wYWRkaW5nTGVmdCA9IDMwO1xuICAgICAgICAvLyBzdHlsaW5nXG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3N0aWNreS1ncmVlbicpIHtcbiAgICAgICAgICAgIGZyYW1lLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMC44NDcwNTg4MjQsIGc6IDEsIGI6IDAuODYyNzQ1MDk4IH0sIG9wYWNpdHk6IDEgfV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAnc3RpY2t5LXllbGxvdycpIHtcbiAgICAgICAgICAgIGZyYW1lLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMC45MjE1Njg2MjcsIGI6IDAuNjgyMzUyOTQxIH0sIG9wYWNpdHk6IDEgfV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAnc3RpY2t5LXJlZCcpIHtcbiAgICAgICAgICAgIGZyYW1lLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMC44NTg4MjM1MjksIGI6IDAuODU4ODIzNTI5IH0sIG9wYWNpdHk6IDEgfV07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRyb3BTaGFkb3dFZmZlY3QgPSB7XG4gICAgICAgICAgICB0eXBlOiBcIkRST1BfU0hBRE9XXCIsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdOT1JNQUwnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHJhZGl1czogMTAsXG4gICAgICAgICAgICBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwLCBhOiAwLjEgfSxcbiAgICAgICAgICAgIG9mZnNldDogeyB4OiAwLCB5OiA0IH1cbiAgICAgICAgfTtcbiAgICAgICAgZnJhbWUuZWZmZWN0cyA9IFtkcm9wU2hhZG93RWZmZWN0XTtcbiAgICAgICAgLy8gYXBwZW5kIG9iamVjdHMgdG8gdGhlIGZyYW1lXG4gICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgZnJhbWUubmFtZSA9IFwiU3RpY2t5IE5vdGVcIjtcbiAgICAgICAgZnJhbWUuY2xpcHNDb250ZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIEFOTk9UQVRJT05cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdhbm5vdGF0aW9uLWxlZnQnIHx8IG1zZy50eXBlID09PSAnYW5ub3RhdGlvbi1yaWdodCcpIHtcbiAgICAgICAgLy8gcG9zdCBtaXhwYW5lbCBldmVudFxuICAgICAgICB2YXIgdG9vbFBvc2l0aW9uO1xuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdhbm5vdGF0aW9uLWxlZnQnKSB7XG4gICAgICAgICAgICB0b29sUG9zaXRpb24gPSBcIkxlZnRcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvb2xQb3NpdGlvbiA9IFwiUmlnaHRcIjtcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiAnYWN0aW9uJyxcbiAgICAgICAgICAgIHRvb2w6IFwiQW5ub3RhdGlvblwiLFxuICAgICAgICAgICAgcG9zaXRpb246IHRvb2xQb3NpdGlvbixcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGdyYWIgdGhlIHggYW5kIHkgdmFsdWVzIG9mIHRoZSBjdXJyZW50IHZpZXdwb3J0IGNlbnRyYWwgcG9pbnRcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci54O1xuICAgICAgICBjb25zdCBjZW50ZXJZID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnk7XG4gICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgZWxlbWVudHNcbiAgICAgICAgLy8gY29uc3QgZGlzY05vZGVzID0gW107XG4gICAgICAgIC8vY29uc3QgY29udGVudE5vZGVzID0gW107XG4gICAgICAgIC8vIGdyYWIgYWxsIHRoZSBleGlzdGluZyBhbm5vdGF0aW9ucyBpbiB0aGUgdmlld3BvcnQsIGdldCB0aGUgdG90YWwgYW5kIGFkZCBvbmUgdG8gc2V0IHRoZSBuZXcgYW5ub3RhdGlvbnMgY291bnRcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbkNvdW50ID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZEFsbChub2RlID0+IG5vZGUudHlwZSA9PT0gJ0ZSQU1FJyAmJiBub2RlLm5hbWUuaW5jbHVkZXMoJ2Fubm90YXRpb24tJykpLmxlbmd0aCArIDE7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgY291bnRlciBlbGVtZW50XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgcmVjdGFuZ2xlIGZvciB0aGUgY291bnRlclxuICAgICAgICBjb25zdCBkaXNjID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgIGRpc2MucmVzaXplKDI0LCAyNCk7XG4gICAgICAgIGRpc2MuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0sIG9wYWNpdHk6IDEgfV07XG4gICAgICAgIGRpc2MuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiTUlOXCIsIHZlcnRpY2FsOiBcIk1JTlwiIH07XG4gICAgICAgIGRpc2MuY29ybmVyUmFkaXVzID0gMTI7XG4gICAgICAgIC8vIGRpc2NOb2Rlcy5wdXNoKGRpc2MpO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIHR5cGUgZm9yIHRoZSBjb3VudGVyXG4gICAgICAgIGNvbnN0IG51bWJlciA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgbnVtYmVyLnggPSBkaXNjLng7XG4gICAgICAgIG51bWJlci55ID0gZGlzYy55O1xuICAgICAgICBudW1iZXIucmVzaXplKDI0LCAyNCk7XG4gICAgICAgIC8vIHN0eWxpbmdcbiAgICAgICAgbnVtYmVyLmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuICAgICAgICBudW1iZXIuZm9udFNpemUgPSAxMjtcbiAgICAgICAgbnVtYmVyLmxpbmVIZWlnaHQgPSB7IHVuaXQ6ICdQSVhFTFMnLCB2YWx1ZTogMTIgfTtcbiAgICAgICAgbnVtYmVyLmNoYXJhY3RlcnMgPSBhbm5vdGF0aW9uQ291bnQudG9TdHJpbmcoKTtcbiAgICAgICAgbnVtYmVyLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9IH1dO1xuICAgICAgICAvLyBjb25zdHJhaW50c1xuICAgICAgICBudW1iZXIudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiO1xuICAgICAgICBudW1iZXIudGV4dEFsaWduSG9yaXpvbnRhbCA9IFwiQ0VOVEVSXCI7XG4gICAgICAgIG51bWJlci5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogXCJNSU5cIiwgdmVydGljYWw6IFwiTUlOXCIgfTtcbiAgICAgICAgLy8gZGlzY05vZGVzLnB1c2gobnVtYmVyKTtcbiAgICAgICAgLy8gYWRkIHRoZSBkaXNjIGFuZCBudW1iZXIgdG8gYSBmcmFtZVxuICAgICAgICBjb25zdCBkaXNjRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBkaXNjRnJhbWUucmVzaXplKDI0LCAyNCk7XG4gICAgICAgIC8vIGFwcGVuZCBvYmplY3RzIGFuZCBuYW1lIHRoZSBmcmFtZVxuICAgICAgICBkaXNjRnJhbWUuYXBwZW5kQ2hpbGQoZGlzYyk7XG4gICAgICAgIGRpc2NGcmFtZS5hcHBlbmRDaGlsZChudW1iZXIpO1xuICAgICAgICBkaXNjRnJhbWUubmFtZSA9IFwiZGlzY1wiO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIGNvbnRlbnQgZWxlbWVudFxuICAgICAgICAvLyBjcmVhdGUgdGhlIHR5cGUgZm9yIHRoZSBjb250ZW50IHRleHRcbiAgICAgICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgLy8gc3R5bGluZ1xuICAgICAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuICAgICAgICB0ZXh0LmZvbnRTaXplID0gMTQ7XG4gICAgICAgIHRleHQucGFyYWdyYXBoU3BhY2luZyA9IDEwO1xuICAgICAgICB0ZXh0LmxpbmVIZWlnaHQgPSB7IHVuaXQ6ICdQSVhFTFMnLCB2YWx1ZTogMjAgfTtcbiAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gXCJBZGQgeW91ciBhbm5vdGF0aW9uIGNvbnRlbnQgaGVyZS4uLlxcblwiO1xuICAgICAgICB0ZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9IH1dO1xuICAgICAgICAvLyBhdXRvIGxheW91dFxuICAgICAgICB0ZXh0LnRleHRBbGlnblZlcnRpY2FsID0gXCJUT1BcIjtcbiAgICAgICAgdGV4dC50ZXh0QXV0b1Jlc2l6ZSA9IFwiSEVJR0hUXCI7XG4gICAgICAgIHRleHQubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICAgICAgLy9jb250ZW50Tm9kZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBmcmFtZSB0byBzdG9yZSB0aGUgY29udGVudCB1c2luZyBhdXRvbGF5b3V0IHRvIG1ha2Ugc3VyZSBpdCByZXNpemVzXG4gICAgICAgIGNvbnN0IGNvbnRlbnRGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGNvbnRlbnRGcmFtZS5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSwgb3BhY2l0eTogMSB9XTtcbiAgICAgICAgLy8gc3R5bGluZ1xuICAgICAgICBjb250ZW50RnJhbWUuY29ybmVyUmFkaXVzID0gNjtcbiAgICAgICAgLy8gYXV0b2xheW91dFxuICAgICAgICBjb250ZW50RnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgY29udGVudEZyYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICBjb250ZW50RnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgIGNvbnRlbnRGcmFtZS5sYXlvdXRHcm93ID0gMTtcbiAgICAgICAgY29udGVudEZyYW1lLml0ZW1TcGFjaW5nID0gODtcbiAgICAgICAgY29udGVudEZyYW1lLnBhZGRpbmdUb3AgPSA4O1xuICAgICAgICBjb250ZW50RnJhbWUucGFkZGluZ1JpZ2h0ID0gMTI7XG4gICAgICAgIGNvbnRlbnRGcmFtZS5wYWRkaW5nQm90dG9tID0gODtcbiAgICAgICAgY29udGVudEZyYW1lLnBhZGRpbmdMZWZ0ID0gMTI7XG4gICAgICAgIC8vIGFwcGVuZCBvYmplY3RzIGFuZCBuYW1lIHRoZSBmcmFtZVxuICAgICAgICBjb250ZW50RnJhbWUuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGNvbnRlbnRGcmFtZS5uYW1lID0gXCJjb250ZW50XCI7IC8vIGFwcGVuZCB0aGUgbmV4dCBjb3VudCB0byB0aGUgYW5ub3RhdGlvbiB0aXRsZVxuICAgICAgICAvLyBjcmVhdGUgYSBmcmFtZSBlbGVtZW50IGFuZCBhcHBlbmQgdGhlIGNvdW50ZXIgYW5kIGNvbnRlbnQgZWxlbWVudHMgYmVmb3JlIGFkZGluZyBpdCB0byB0aGUgY2VudGVyIG9mIHRoZSB2aWV3cG9ydFxuICAgICAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGZyYW1lLnggPSBjZW50ZXJYO1xuICAgICAgICBmcmFtZS55ID0gY2VudGVyWTtcbiAgICAgICAgLy8gYXV0b2xheW91dFxuICAgICAgICBmcmFtZS5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgIGZyYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAvLyBzdHlsaW5nXG4gICAgICAgIGZyYW1lLnJlc2l6ZSgzNDAsIDM2KTtcbiAgICAgICAgZnJhbWUuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0sIG9wYWNpdHk6IDAgfV07XG4gICAgICAgIC8vIGF1dG9sYXlvdXQgY29udC4gKHRoaXMgb3JkZXJpbmcgaXMgaW1wb3J0YW50KVxuICAgICAgICBmcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgZnJhbWUuaXRlbVNwYWNpbmcgPSA4O1xuICAgICAgICBmcmFtZS5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgICAgICAvLyBhcHBlbmQgb2JqZWN0cyBhbmQgbmFtZSB0aGUgZnJhbWVcbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAnYW5ub3RhdGlvbi1sZWZ0Jykge1xuICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoZGlzY0ZyYW1lKTtcbiAgICAgICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGNvbnRlbnRGcmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChjb250ZW50RnJhbWUpO1xuICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoZGlzY0ZyYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBmcmFtZS5uYW1lID0gXCJhbm5vdGF0aW9uLVwiICsgYW5ub3RhdGlvbkNvdW50OyAvLyBhcHBlbmQgdGhlIG5leHQgY291bnQgdG8gdGhlIGFubm90YXRpb24gdGl0bGVcbiAgICB9XG4gICAgLy8gQU5OT1RBVElPTiAoU1BMSVQpXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gaWYgKG1zZy50eXBlID09PSAnYW5ub3RhdGlvbi1zcGxpdCcpIHtcbiAgICAvLyBcdC8vIHBvc3QgbWl4cGFuZWwgZXZlbnRcbiAgICAvLyAgICAgLy8gZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgIC8vICAgICAvLyAgICAgdHlwZTogJ2FjdGlvbicsIFxuICAgIC8vICAgICAvLyAgICAgdG9vbDogXCJBbm5vdGF0aW9uXCIsIFxuICAgIC8vICAgICAvLyAgICAgcG9zaXRpb246IFwiU3BsaXRcIixcbiAgICAvLyAgICAgLy8gfSk7XG4gICAgLy8gXHQvLyBncmFiIHRoZSB4IGFuZCB5IHZhbHVlcyBvZiB0aGUgY3VycmVudCB2aWV3cG9ydCBjZW50cmFsIHBvaW50XG4gICAgLy8gXHRjb25zdCBjZW50ZXJYID0gZmlnbWEudmlld3BvcnQuY2VudGVyLng7XG4gICAgLy8gXHRjb25zdCBjZW50ZXJZID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnk7XG4gICAgLy8gXHQvLyBjcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIGVsZW1lbnRzXG4gICAgLy8gXHRjb25zdCBub2RlcyA9IFtdO1xuICAgIC8vIFx0Ly8gZ3JhYiBhbGwgdGhlIGV4aXN0aW5nIGFubm90YXRpb25zIGluIHRoZSB2aWV3cG9ydCwgZ2V0IHRoZSB0b3RhbCBhbmQgYWRkIG9uZSB0byBzZXQgdGhlIG5ldyBhbm5vdGF0aW9ucyBjb3VudFxuICAgIC8vIFx0Y29uc3QgYW5ub3RhdGlvbkNvdW50ID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZEFsbChub2RlID0+IG5vZGUudHlwZSA9PT0gJ0ZSQU1FJyAmJiBub2RlLm5hbWUuaW5jbHVkZXMoJ2Fubm90YXRpb24tJykpLmxlbmd0aCArIDE7XG4gICAgLy8gXHQvLyBjcmVhdGUgdGhlIGNvbnRlbnQgZWxlbWVudFxuICAgIC8vIFx0Ly8gY3JlYXRlIHRoZSByZWN0YW5nbGUgZm9yIHRoZSBjb250ZW50IGJhY2tncm91bmRcbiAgICAvLyBcdGNvbnN0IHJlY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAvLyBcdC8vcmVjdC54ID0gZGlzYy54ICsgNDA7XG4gICAgLy8gXHQvL3JlY3QueSA9IGRpc2MueTtcbiAgICAvLyBcdHJlY3QucmVzaXplKDMwOCwgNjApO1xuICAgIC8vIFx0cmVjdC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7cjogMCwgZzogMCwgYjogMH0sIG9wYWNpdHk6IDEgfV07XG4gICAgLy8gXHRyZWN0LmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiBcIlNUUkVUQ0hcIiwgdmVydGljYWw6IFwiU1RSRVRDSFwiIH07XG4gICAgLy8gXHRyZWN0LmNvcm5lclJhZGl1cyA9IDY7XG4gICAgLy8gXHRub2Rlcy5wdXNoKHJlY3QpO1xuICAgIC8vIFx0Ly8gY3JlYXRlIHRoZSB0eXBlIGZvciB0aGUgY29udGVudCB0ZXh0XG4gICAgLy8gXHRjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgIC8vIFx0dGV4dC54ID0gcmVjdC54ICsgMTI7XG4gICAgLy8gXHR0ZXh0LnkgPSByZWN0LnkgKyA4O1xuICAgIC8vIFx0dGV4dC5yZXNpemUoMjg0LCA0NCk7XG4gICAgLy8gXHR0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9XG4gICAgLy8gXHR0ZXh0LmZvbnRTaXplID0gMTQ7XG4gICAgLy8gXHR0ZXh0LnBhcmFncmFwaFNwYWNpbmcgPSAxMDtcbiAgICAvLyBcdHRleHQubGluZUhlaWdodCA9IHt1bml0OiAnUElYRUxTJywgdmFsdWU6IDIwfTtcbiAgICAvLyBcdHRleHQuY2hhcmFjdGVycyA9IFwiQWRkIHlvdXIgYW5ub3RhdGlvbiBjb250ZW50IGhlcmUuLi5cIjtcbiAgICAvLyBcdHRleHQuZmlsbHMgPSBbe3R5cGU6ICdTT0xJRCcsIGNvbG9yOiB7cjogMSwgZzogMSwgYjogMX19XTtcbiAgICAvLyBcdHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIlRPUFwiO1xuICAgIC8vIFx0dGV4dC5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogXCJTVFJFVENIXCIsIHZlcnRpY2FsOiBcIlNUUkVUQ0hcIiB9O1xuICAgIC8vIFx0bm9kZXMucHVzaCh0ZXh0KTtcbiAgICAvLyBcdC8vIGNyZWF0ZSBhIGZyYW1lIGVsZW1lbnQgYW5kIGFwcGVuZCB0aGUgY29udGVudCBlbGVtZW50cyBiZWZvcmUgYWRkaW5nIGl0IHRvIHRoZSBjZW50ZXIgb2YgdGhlIHZpZXdwb3J0XG4gICAgLy8gXHRjb25zdCByZWN0RnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIC8vIFx0cmVjdEZyYW1lLnJlc2l6ZSgzNDAsIDYwKTtcbiAgICAvLyBcdHJlY3RGcmFtZS54ID0gY2VudGVyWDtcbiAgICAvLyBcdHJlY3RGcmFtZS55ID0gY2VudGVyWTtcbiAgICAvLyBcdHJlY3RGcmFtZS5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7cjogMCwgZzogMCwgYjogMH0sIG9wYWNpdHk6IDAgfV07XG4gICAgLy8gXHQvLyByZWN0RnJhbWUuYXBwZW5kQ2hpbGQoZGlzYyk7XG4gICAgLy8gXHQvLyByZWN0RnJhbWUuYXBwZW5kQ2hpbGQobnVtYmVyKTtcbiAgICAvLyBcdHJlY3RGcmFtZS5hcHBlbmRDaGlsZChyZWN0KTtcbiAgICAvLyBcdHJlY3RGcmFtZS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAvLyBcdHJlY3RGcmFtZS5uYW1lID0gXCJhbm5vdGF0aW9uLVwiICsgYW5ub3RhdGlvbkNvdW50OyAvLyBhcHBlbmQgdGhlIG5leHQgY291bnQgdG8gdGhlIGFubm90YXRpb24gdGl0bGVcbiAgICAvLyAgICAgLy8gY3JlYXRlIHRoZSBjb3VudGVyIGVsZW1lbnRcbiAgICAvLyBcdC8vIGNyZWF0ZSB0aGUgcmVjdGFuZ2xlIGZvciB0aGUgY291bnRlclxuICAgIC8vIFx0Y29uc3QgZGlzYyA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgIC8vIFx0ZGlzYy5yZXNpemUoMjQsIDI0KTtcbiAgICAvLyBcdC8vIGRpc2MueCA9IGNlbnRlclg7XG4gICAgLy8gXHQvLyBkaXNjLnkgPSBjZW50ZXJYO1xuICAgIC8vIFx0ZGlzYy5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7cjogMCwgZzogMCwgYjogMH0sIG9wYWNpdHk6IDEgfV07XG4gICAgLy8gXHRkaXNjLmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiBcIk1BWFwiLCB2ZXJ0aWNhbDogXCJNSU5cIiB9O1xuICAgIC8vIFx0ZGlzYy5jb3JuZXJSYWRpdXMgPSAxMjtcbiAgICAvLyBcdG5vZGVzLnB1c2goZGlzYyk7XG4gICAgLy8gXHQvLyBjcmVhdGUgdGhlIHR5cGUgZm9yIHRoZSBjb3VudGVyXG4gICAgLy8gXHRjb25zdCBudW1iZXIgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgLy8gXHRudW1iZXIueCA9IGRpc2MueDtcbiAgICAvLyBcdG51bWJlci55ID0gZGlzYy55O1xuICAgIC8vIFx0bnVtYmVyLnJlc2l6ZSgyNCwgMjQpO1xuICAgIC8vIFx0bnVtYmVyLmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9XG4gICAgLy8gXHRudW1iZXIuZm9udFNpemUgPSAxMjtcbiAgICAvLyBcdG51bWJlci5saW5lSGVpZ2h0ID0ge3VuaXQ6ICdQSVhFTFMnLCB2YWx1ZTogMTJ9O1xuICAgIC8vIFx0bnVtYmVyLmNoYXJhY3RlcnMgPSBhbm5vdGF0aW9uQ291bnQudG9TdHJpbmcoKTtcbiAgICAvLyBcdG51bWJlci5maWxscyA9IFt7dHlwZTogJ1NPTElEJywgY29sb3I6IHtyOiAxLCBnOiAxLCBiOiAxfX1dXG4gICAgLy8gXHRudW1iZXIudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiO1xuICAgIC8vIFx0bnVtYmVyLnRleHRBbGlnbkhvcml6b250YWwgPSBcIkNFTlRFUlwiO1xuICAgIC8vIFx0bnVtYmVyLmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiBcIk1BWFwiLCB2ZXJ0aWNhbDogXCJNSU5cIiB9O1xuICAgIC8vIFx0bm9kZXMucHVzaChudW1iZXIpO1xuICAgIC8vICAgICAvLyBjcmVhdGUgYSBmcmFtZSBlbGVtZW50IHRvIGNvbnRhaW4gdGhlIGNvdW50ZXIgZGlzYyBlbGVtZW50IGJlZm9yZSBhZGRpbmcgaXQgdG8gdGhlIGNlbnRlciBvZiB0aGUgdmlld3BvcnRcbiAgICAvLyBcdGNvbnN0IGRpc2NGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgLy8gXHRkaXNjRnJhbWUucmVzaXplKDI0LCAyNCk7XG4gICAgLy8gXHRkaXNjRnJhbWUueCA9IGNlbnRlclggLSAxMDA7XG4gICAgLy8gXHRkaXNjRnJhbWUueSA9IGNlbnRlclkgLSAxMDA7XG4gICAgLy8gXHRkaXNjRnJhbWUuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjoge3I6IDAsIGc6IDAsIGI6IDB9LCBvcGFjaXR5OiAwIH1dO1xuICAgIC8vIFx0ZGlzY0ZyYW1lLmFwcGVuZENoaWxkKGRpc2MpO1xuICAgIC8vIFx0ZGlzY0ZyYW1lLmFwcGVuZENoaWxkKG51bWJlcik7XG4gICAgLy8gXHRkaXNjRnJhbWUubmFtZSA9IFwiYW5ub3RhdGlvbi1cIiArIGFubm90YXRpb25Db3VudDsgLy8gYXBwZW5kIHRoZSBuZXh0IGNvdW50IHRvIHRoZSBhbm5vdGF0aW9uIHRpdGxlXG4gICAgLy8gfVxuICAgIC8vIERJVklERVJTXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gaWYgKG1zZy50eXBlID09PSAnZGl2aWRlci10aGljaycgfHwgbXNnLnR5cGUgPT09ICdkaXZpZGVyLXRoaW4nKSB7XG4gICAgLy8gICAgIC8vIHBvc3QgbWl4cGFuZWwgZXZlbnRcbiAgICAvLyAgICAgdmFyIHNpemU7XG4gICAgLy8gICAgIGlmIChtc2cudHlwZSA9PT0gJ2RpdmlkZXItdGhpbicpIHsgc2l6ZSA9IFwiVGhpblwiIH1cbiAgICAvLyAgICAgaWYgKG1zZy50eXBlID09PSAnZGl2aWRlci10aGljaycpIHsgc2l6ZSA9IFwiVGhpY2tcIiB9XG4gICAgLy8gICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAvLyAgICAgICAgIHR5cGU6ICdhY3Rpb24nLCBcbiAgICAvLyAgICAgICAgIHRvb2w6IFwiRGl2aWRlclwiLCBcbiAgICAvLyAgICAgICAgIHNpemU6IHNpemVcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gXHQvLyBncmFiIHRoZSB4IGFuZCB5IHZhbHVlcyBvZiB0aGUgY3VycmVudCB2aWV3cG9ydCBjZW50cmFsIHBvaW50XG4gICAgLy8gXHRjb25zdCBjZW50ZXJYID0gZmlnbWEudmlld3BvcnQuY2VudGVyLng7XG4gICAgLy8gXHRjb25zdCBjZW50ZXJZID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnk7XG4gICAgLy8gXHQvLyBjcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIGVsZW1lbnRzXG4gICAgLy8gXHRjb25zdCBub2RlcyA9IFtdO1xuICAgIC8vIFx0Ly8gY3JlYXRlIHRoZSBsaW5lIGVsZW1lbnRcbiAgICAvLyBcdGNvbnN0IGxpbmUgPSBmaWdtYS5jcmVhdGVMaW5lKCk7XG4gICAgLy8gXHRsaW5lLnggPSBjZW50ZXJYO1xuICAgIC8vIFx0bGluZS55ID0gY2VudGVyWTtcbiAgICAvLyAgICAgaWYgKG1zZy50eXBlID09PSAnZGl2aWRlci10aGluJykgeyAgbGluZS5zdHJva2VXZWlnaHQgPSAyMDsgfVxuICAgIC8vIFx0aWYgKG1zZy50eXBlID09PSAnZGl2aWRlci10aGljaycpIHsgbGluZS5zdHJva2VXZWlnaHQgPSA0MDsgfVxuICAgIC8vIFx0bGluZS5yZXNpemUoZGVmYXVsdFdpZHRoLCAwKTtcbiAgICAvLyBcdGxpbmUuc3Ryb2tlcyA9IFt7dHlwZTogJ1NPTElEJywgY29sb3I6IHtyOiAwLjc2ODYyNzQ1MSwgZzogMC43Njg2Mjc0NTEsIGI6IDAuNzY4NjI3NDUxfX1dO1xuICAgIC8vIFx0bGluZS5vcGFjaXR5ID0gMC42O1xuICAgIC8vIFx0bm9kZXMucHVzaChsaW5lKTtcbiAgICAvLyBcdC8vIGdyb3VwIGJvdGggdGhlIGxpbmUgYW5kIHR5cGUgZWxlbWVudFxuICAgIC8vIFx0Y29uc3QgZ3JvdXAgPSBmaWdtYS5ncm91cChub2RlcywgZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgIC8vIFx0Z3JvdXAubmFtZSA9ICdEaXZpZGVyJztcbiAgICAvLyBcdGdyb3VwLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgLy8gfVxufSk7XG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2NvZGUudHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==