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
const logEvents = false;
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
            var textChars = "Frame Title";
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
                var textChars = "Frame Title";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx5QkFBeUIseUJBQXlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGdDQUFnQyxvQ0FBb0M7QUFDcEUsZ0NBQWdDLGlDQUFpQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0JBQXdCLGtEQUFrRDtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msd0JBQXdCLGtEQUFrRDtBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0JBQXdCLGtEQUFrRDtBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msd0JBQXdCLGtEQUFrRDtBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLHdCQUF3Qix3QkFBd0IsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0Esd0JBQXdCLHdCQUF3QiwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsd0JBQXdCLHNDQUFzQyxjQUFjO0FBQ3pHO0FBQ0E7QUFDQSw2QkFBNkIsd0JBQXdCLHNDQUFzQyxjQUFjO0FBQ3pHO0FBQ0E7QUFDQSw2QkFBNkIsd0JBQXdCLHNDQUFzQyxjQUFjO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQkFBMEI7QUFDL0Msc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdCQUF3QixrQkFBa0IsY0FBYztBQUNoRiw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLDBCQUEwQix3QkFBd0Isb0JBQW9CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLHdCQUF3Qix3QkFBd0Isb0JBQW9CO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHdCQUF3QixrQkFBa0IsY0FBYztBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3QkFBd0Isa0JBQWtCLGNBQWM7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QixpQkFBaUIsY0FBYztBQUM5RSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLHVCQUF1Qix1QkFBdUIsa0JBQWtCO0FBQ2hFO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix1QkFBdUIsaUJBQWlCLGNBQWM7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QixpQkFBaUIsY0FBYztBQUM5RSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSx5QkFBeUIsdUJBQXVCLGtCQUFrQjtBQUNsRTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix1QkFBdUIsaUJBQWlCLGNBQWM7QUFDbkY7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQyw0Q0FBNEM7QUFDNUM7QUFDQSx5QkFBeUIsdUJBQXVCLGdEQUFnRDtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VFemtCRDtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29kZS50cyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jb25zdCBsb2dFdmVudHMgPSBmYWxzZTtcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogMjY0LCBoZWlnaHQ6IDIxNiB9KTtcbmZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAvLyBwb3N0IGJhY2sgdGhlIHVzZXIgZGF0YSB0byB0aGUgdWkgZm9yIG1peHBhbmVsXG4gICAgdHlwZTogJ2lkZW50aWZ5JyxcbiAgICB1c2VySUQ6IGZpZ21hLmN1cnJlbnRVc2VyLmlkLFxuICAgIHVzZXJuYW1lOiBmaWdtYS5jdXJyZW50VXNlci5uYW1lXG59KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAvLyBMb2FkIGluIGZvbnRzXG4gICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIkJvbGRcIiB9KTtcbiAgICAvLyBCYXNlIFZhbHVlc1xuICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IDkyMDtcbiAgICAvLyBUSVRMRVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlLXNtYWxsJyB8fCBtc2cudHlwZSA9PT0gJ3RpdGxlLW1lZGl1bScgfHwgbXNnLnR5cGUgPT09ICd0aXRsZS1sYXJnZScpIHtcbiAgICAgICAgLy8gcG9zdCBtaXhwYW5lbCBldmVudFxuICAgICAgICB2YXIgdG9vbFNpemU7XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlLXNtYWxsJykge1xuICAgICAgICAgICAgdG9vbFNpemUgPSBcIlNtYWxsXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGl0bGUtbWVkaXVtJykge1xuICAgICAgICAgICAgdG9vbFNpemUgPSBcIk1lZGl1bVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlLWxhcmdlJykge1xuICAgICAgICAgICAgdG9vbFNpemUgPSBcIkxhcmdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogJ2FjdGlvbicsXG4gICAgICAgICAgICB0b29sOiAnVGl0bGUnLFxuICAgICAgICAgICAgc2l6ZTogdG9vbFNpemUsXG4gICAgICAgICAgICBjb3VudDogZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gRmlyc3QgY2hlY2sgaXMgdGhlIHVzZXIgaGFzIHNvbWV0aGluZyBzZWxlY3RlZFxuICAgICAgICBpZiAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gSWYgbm90aGluZyBpcyBzZWxlY3RlZCwgdGhlbiBhZGQgYSBzaW5nbGUgb2JqZWN0IGluIHRoZSBjZW50ZXIgb2YgdGhlIHZpZXdwb3J0XG4gICAgICAgICAgICAvLyBncmFiIHRoZSB4IGFuZCB5IHZhbHVlcyBvZiB0aGUgY3VycmVudCB2aWV3cG9ydCBjZW50cmFsIHBvaW50XG4gICAgICAgICAgICBjb25zdCBjZW50ZXJYID0gZmlnbWEudmlld3BvcnQuY2VudGVyLng7XG4gICAgICAgICAgICBjb25zdCBjZW50ZXJZID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnk7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIGVsZW1lbnRzXG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBsaW5lIGVsZW1lbnRcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBmaWdtYS5jcmVhdGVMaW5lKCk7XG4gICAgICAgICAgICBsaW5lLnggPSBjZW50ZXJYO1xuICAgICAgICAgICAgbGluZS55ID0gY2VudGVyWTtcbiAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlLXNtYWxsJykge1xuICAgICAgICAgICAgICAgIGxpbmUuc3Ryb2tlV2VpZ2h0ID0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlLW1lZGl1bScpIHtcbiAgICAgICAgICAgICAgICBsaW5lLnN0cm9rZVdlaWdodCA9IDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICd0aXRsZS1sYXJnZScpIHtcbiAgICAgICAgICAgICAgICBsaW5lLnN0cm9rZVdlaWdodCA9IDg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW5lLnJlc2l6ZShkZWZhdWx0V2lkdGgsIDApO1xuICAgICAgICAgICAgbGluZS5zdHJva2VzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMC43Njg2Mjc0NTEsIGc6IDAuNzY4NjI3NDUxLCBiOiAwLjc2ODYyNzQ1MSB9IH1dO1xuICAgICAgICAgICAgbGluZS5vcGFjaXR5ID0gMC42O1xuICAgICAgICAgICAgbm9kZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgdHlwZSBlbGVtZW50XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICAgICAgLy8gc2V0IHRoZSB4L3kgcG9zaXRpb24gb2YgdGhlIHRleHRcbiAgICAgICAgICAgIHRleHQueCA9IGNlbnRlclg7XG4gICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICd0aXRsZS1zbWFsbCcpIHtcbiAgICAgICAgICAgICAgICB0ZXh0LnkgPSBsaW5lLnkgLSA3MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlLW1lZGl1bScpIHtcbiAgICAgICAgICAgICAgICB0ZXh0LnkgPSBsaW5lLnkgLSA4MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlLWxhcmdlJykge1xuICAgICAgICAgICAgICAgIHRleHQueSA9IGxpbmUueSAtIDkwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2V0IHRoZSB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgICAgICAgICB0ZXh0LnJlc2l6ZShkZWZhdWx0V2lkdGgsIDUwKTtcbiAgICAgICAgICAgIHRleHQuZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiQm9sZFwiIH07XG4gICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICd0aXRsZS1zbWFsbCcpIHtcbiAgICAgICAgICAgICAgICB0ZXh0LmZvbnRTaXplID0gMzA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICd0aXRsZS1tZWRpdW0nKSB7XG4gICAgICAgICAgICAgICAgdGV4dC5mb250U2l6ZSA9IDUwO1xuICAgICAgICAgICAgICAgIHRleHQubGV0dGVyU3BhY2luZyA9IHsgdW5pdDogJ1BJWEVMUycsIHZhbHVlOiAtMSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGl0bGUtbGFyZ2UnKSB7XG4gICAgICAgICAgICAgICAgdGV4dC5mb250U2l6ZSA9IDgwO1xuICAgICAgICAgICAgICAgIHRleHQubGV0dGVyU3BhY2luZyA9IHsgdW5pdDogJ1BJWEVMUycsIHZhbHVlOiAtMSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRleHRDaGFycyA9IFwiRnJhbWUgVGl0bGVcIjtcbiAgICAgICAgICAgIHRleHQuY2hhcmFjdGVycyA9IHRleHRDaGFycztcbiAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIkJPVFRPTVwiO1xuICAgICAgICAgICAgdGV4dC50ZXh0QXV0b1Jlc2l6ZSA9IFwiSEVJR0hUXCI7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgLy8gZ3JvdXAgYm90aCB0aGUgbGluZSBhbmQgdHlwZSBlbGVtZW50XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IGZpZ21hLmdyb3VwKG5vZGVzLCBmaWdtYS5jdXJyZW50UGFnZSk7XG4gICAgICAgICAgICBncm91cC5uYW1lID0gJ3RpdGxlJztcbiAgICAgICAgICAgIGdyb3VwLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiBzb21ldGhpbmcgaXMgc2VsZWN0ZWQsIGFwcGx5IHRoZSBvYmplY3QgdG8gYWxsIG9mIHRoZSBzZWxlY3RlZCBub2Rlc1xuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCB0aGUgaXRlbXMgdGhhdCBhcmUgc2VsZWN0ZWRcbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBncmFiIHRoZSBjdXJyZW50IHNlbGVjdGlvbidzIHgsIHksIHdpZHRoIGFuZCBuYW1lIHZhbHVlc1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvblggPSBub2RlLng7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uWSA9IG5vZGUueTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25XaWR0aCA9IG5vZGUud2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uTmFtZSA9IG5vZGUubmFtZTtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGxpbmUgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBmaWdtYS5jcmVhdGVMaW5lKCk7XG4gICAgICAgICAgICAgICAgbGluZS54ID0gc2VsZWN0aW9uWDtcbiAgICAgICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICd0aXRsZS1zbWFsbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZS55ID0gc2VsZWN0aW9uWSAtIDUwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnN0cm9rZVdlaWdodCA9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlLW1lZGl1bScpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZS55ID0gc2VsZWN0aW9uWSAtIDcwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnN0cm9rZVdlaWdodCA9IDQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlLWxhcmdlJykge1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnkgPSBzZWxlY3Rpb25ZIC0gOTA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc3Ryb2tlV2VpZ2h0ID0gODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGluZS5yZXNpemUoc2VsZWN0aW9uV2lkdGgsIDApO1xuICAgICAgICAgICAgICAgIGxpbmUuc3Ryb2tlcyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuNzY4NjI3NDUxLCBnOiAwLjc2ODYyNzQ1MSwgYjogMC43Njg2Mjc0NTEgfSB9XTtcbiAgICAgICAgICAgICAgICBsaW5lLm9wYWNpdHkgPSAwLjY7XG4gICAgICAgICAgICAgICAgbm9kZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHR5cGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgICAgICAgICAgdGV4dC54ID0gc2VsZWN0aW9uWDtcbiAgICAgICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICd0aXRsZS1zbWFsbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC55ID0gbGluZS55IC0gNzA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlLW1lZGl1bScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC55ID0gbGluZS55IC0gODA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlLWxhcmdlJykge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LnkgPSBsaW5lLnkgLSA5MDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGV4dC5yZXNpemUoc2VsZWN0aW9uV2lkdGgsIDUwKTtcbiAgICAgICAgICAgICAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIkJvbGRcIiB9O1xuICAgICAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlLXNtYWxsJykge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LmZvbnRTaXplID0gMzA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RpdGxlLW1lZGl1bScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5mb250U2l6ZSA9IDUwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LmxldHRlclNwYWNpbmcgPSB7IHVuaXQ6ICdQSVhFTFMnLCB2YWx1ZTogLTEgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGl0bGUtbGFyZ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQuZm9udFNpemUgPSA4MDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5sZXR0ZXJTcGFjaW5nID0geyB1bml0OiAnUElYRUxTJywgdmFsdWU6IC0xIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0ZXh0Q2hhcnMgPSBcIkZyYW1lIFRpdGxlXCI7XG4gICAgICAgICAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gdGV4dENoYXJzO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIkJPVFRPTVwiO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICAgICAgICAgIG5vZGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICAgICAgLy8gZ3JvdXAgYm90aCB0aGUgbGluZSBhbmQgdHlwZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBmaWdtYS5ncm91cChub2RlcywgZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgICAgICAgICAgICAgIGdyb3VwLm5hbWUgPSBzZWxlY3Rpb25OYW1lICsgJy10aXRsZSc7XG4gICAgICAgICAgICAgICAgZ3JvdXAuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBGT09UTk9URVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2Zvb3Rub3RlLXNtYWxsJyB8fCBtc2cudHlwZSA9PT0gJ2Zvb3Rub3RlLW1lZGl1bScgfHwgbXNnLnR5cGUgPT09ICdmb290bm90ZS1sYXJnZScpIHtcbiAgICAgICAgLy8gcG9zdCBtaXhwYW5lbCBldmVudFxuICAgICAgICB2YXIgdG9vbFNpemU7XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ2Zvb3Rub3RlLXNtYWxsJykge1xuICAgICAgICAgICAgdG9vbFNpemUgPSBcIlNtYWxsXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAnZm9vdG5vdGUtbWVkaXVtJykge1xuICAgICAgICAgICAgdG9vbFNpemUgPSBcIk1lZGl1bVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ2Zvb3Rub3RlLWxhcmdlJykge1xuICAgICAgICAgICAgdG9vbFNpemUgPSBcIkxhcmdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogJ2FjdGlvbicsXG4gICAgICAgICAgICB0b29sOiBcIkZvb3Rub3RlXCIsXG4gICAgICAgICAgICBzaXplOiB0b29sU2l6ZSxcbiAgICAgICAgICAgIGNvdW50OiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBGaXJzdCBjaGVjayBpcyB0aGUgdXNlciBoYXMgc29tZXRoaW5nIHNlbGVjdGVkXG4gICAgICAgIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBJZiBub3RoaW5nIGlzIHNlbGVjdGVkLCB0aGVuIGFkZCBhIHNpbmdsZSBvYmplY3QgaW4gdGhlIGNlbnRlciBvZiB0aGUgdmlld3BvcnRcbiAgICAgICAgICAgIC8vIGdyYWIgdGhlIHggYW5kIHkgdmFsdWVzIG9mIHRoZSBjdXJyZW50IHZpZXdwb3J0IGNlbnRyYWwgcG9pbnRcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlclggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlclkgPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueTtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgZWxlbWVudHNcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHR5cGUgZWxlbWVudFxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgICAgIHRleHQueCA9IGNlbnRlclg7XG4gICAgICAgICAgICB0ZXh0LnkgPSBjZW50ZXJZO1xuICAgICAgICAgICAgdGV4dC5yZXNpemUoZGVmYXVsdFdpZHRoLCA1Mik7XG4gICAgICAgICAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAnZm9vdG5vdGUtc21hbGwnKSB7XG4gICAgICAgICAgICAgICAgdGV4dC5mb250U2l6ZSA9IDI4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAnZm9vdG5vdGUtbWVkaXVtJykge1xuICAgICAgICAgICAgICAgIHRleHQuZm9udFNpemUgPSAzNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ2Zvb3Rub3RlLWxhcmdlJykge1xuICAgICAgICAgICAgICAgIHRleHQuZm9udFNpemUgPSA1NDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRleHQuY2hhcmFjdGVycyA9IFwiRW50ZXIgeW91ciBkZXNjcmlwdGlvbiBvciBub3RlcyBoZXJlLi4uXCI7XG4gICAgICAgICAgICB0ZXh0LnRleHRBbGlnblZlcnRpY2FsID0gXCJUT1BcIjtcbiAgICAgICAgICAgIHRleHQudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICAgICAgdGV4dC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuMDc0NTA5ODA0LCBnOiAwLjE2MDc4NDMxNCwgYjogMC4yNDcwNTg4MjQgfSB9XTtcbiAgICAgICAgICAgIHRleHQub3BhY2l0eSA9IDAuNDtcbiAgICAgICAgICAgIG5vZGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICAvLyBncm91cCB0eXBlIGVsZW1lbnRcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZmlnbWEuZ3JvdXAobm9kZXMsIGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgICAgIGdyb3VwLm5hbWUgPSAnZm9vdG5vdGUnO1xuICAgICAgICAgICAgZ3JvdXAuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHNvbWV0aGluZyBpcyBzZWxlY3RlZCwgYXBwbHkgdGhlIG9iamVjdCB0byBhbGwgb2YgdGhlIHNlbGVjdGVkIG5vZGVzXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHRoZSBpdGVtcyB0aGF0IGFyZSBzZWxlY3RlZFxuICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIGdyYWIgdGhlIGN1cnJlbnQgc2VsZWN0aW9uJ3MgeCwgeSwgd2lkdGgsIGhlaWdodCBhbmQgbmFtZSB2YWx1ZXNcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25YID0gbm9kZS54O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvblkgPSBub2RlLnk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uV2lkdGggPSBub2RlLndpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbkhlaWdodCA9IG5vZGUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbk5hbWUgPSBub2RlLm5hbWU7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGFycmF5IHRvIHN0b3JlIHRoZSBlbGVtZW50c1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSB0eXBlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICAgICAgICAgIHRleHQueCA9IHNlbGVjdGlvblg7XG4gICAgICAgICAgICAgICAgdGV4dC55ID0gc2VsZWN0aW9uWSArIHNlbGVjdGlvbkhlaWdodCArIDYwOyAvLyBzZXQgdGhlIHR5cGVzIHkgdmFsdWUgdG8gNTBweCBiZWxvdyB0aGUgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgdGV4dC5yZXNpemUoc2VsZWN0aW9uV2lkdGgsIDUyKTtcbiAgICAgICAgICAgICAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuICAgICAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ2Zvb3Rub3RlLXNtYWxsJykge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LmZvbnRTaXplID0gMjg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ2Zvb3Rub3RlLW1lZGl1bScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5mb250U2l6ZSA9IDM2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdmb290bm90ZS1sYXJnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5mb250U2l6ZSA9IDU0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBcIkVudGVyIHlvdXIgZGVzY3JpcHRpb24gb3Igbm90ZXMgaGVyZS4uLlwiO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBcIlRPUFwiO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICAgICAgICAgIHRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjA3NDUwOTgwNCwgZzogMC4xNjA3ODQzMTQsIGI6IDAuMjQ3MDU4ODI0IH0gfV07XG4gICAgICAgICAgICAgICAgdGV4dC5vcGFjaXR5ID0gMC40O1xuICAgICAgICAgICAgICAgIG5vZGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICAgICAgLy8gZ3JvdXAgdHlwZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBmaWdtYS5ncm91cChub2RlcywgZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgICAgICAgICAgICAgIGdyb3VwLm5hbWUgPSBzZWxlY3Rpb25OYW1lICsgJy1mb290bm90ZSc7XG4gICAgICAgICAgICAgICAgZ3JvdXAuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBTVElDS1kgTk9URVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3N0aWNreS1ncmVlbicgfHwgbXNnLnR5cGUgPT09ICdzdGlja3kteWVsbG93JyB8fCBtc2cudHlwZSA9PT0gJ3N0aWNreS1yZWQnKSB7XG4gICAgICAgIC8vIHBvc3QgbWl4cGFuZWwgZXZlbnRcbiAgICAgICAgdmFyIGNvbG9yO1xuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdzdGlja3ktZ3JlZW4nKSB7XG4gICAgICAgICAgICBjb2xvciA9IFwiR3JlZW5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdzdGlja3kteWVsbG93Jykge1xuICAgICAgICAgICAgY29sb3IgPSBcIlllbGxvd1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3N0aWNreS1yZWQnKSB7XG4gICAgICAgICAgICBjb2xvciA9IFwiUmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogJ2FjdGlvbicsXG4gICAgICAgICAgICB0b29sOiBcIlN0aWNreSBOb3RlXCIsXG4gICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBncmFiIHRoZSB4IGFuZCB5IHZhbHVlcyBvZiB0aGUgY3VycmVudCB2aWV3cG9ydCBjZW50cmFsIHBvaW50XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci55O1xuICAgICAgICAvLyBncmFiIHVzZXIgaW5mb3JtYXRpb25cbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBmaWdtYS5jdXJyZW50VXNlci5uYW1lO1xuICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgdHlwZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIHRleHQucmVzaXplKDM5MCwgMzkwKTtcbiAgICAgICAgdGV4dC5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbiAgICAgICAgdGV4dC5mb250U2l6ZSA9IDI0O1xuICAgICAgICB0ZXh0LnBhcmFncmFwaFNwYWNpbmcgPSAyMDtcbiAgICAgICAgdGV4dC5saW5lSGVpZ2h0ID0geyB1bml0OiAnUElYRUxTJywgdmFsdWU6IDM4IH07XG4gICAgICAgIHRleHQuY2hhcmFjdGVycyA9IFwiRW50ZXIgeW91ciBub3RlIGNvbnRlbnQgaGVyZS4uLlxcblxcblxcblxcblwiO1xuICAgICAgICB0ZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMC4yLCBnOiAwLjIsIGI6IDAuMiB9IH1dO1xuICAgICAgICB0ZXh0LnRleHRBbGlnblZlcnRpY2FsID0gXCJUT1BcIjtcbiAgICAgICAgdGV4dC50ZXh0QXV0b1Jlc2l6ZSA9IFwiSEVJR0hUXCI7XG4gICAgICAgIHRleHQubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICAgICAgbm9kZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBuYW1lIHR5cGUgZWxlbWVudFxuICAgICAgICBjb25zdCBuYW1lID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICBuYW1lLnJlc2l6ZSgzOTAsIDIwKTtcbiAgICAgICAgbmFtZS5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJCb2xkXCIgfTtcbiAgICAgICAgbmFtZS5mb250U2l6ZSA9IDIwO1xuICAgICAgICBuYW1lLmxpbmVIZWlnaHQgPSB7IHVuaXQ6ICdQSVhFTFMnLCB2YWx1ZTogMjAgfTtcbiAgICAgICAgbmFtZS5jaGFyYWN0ZXJzID0gdXNlcm5hbWU7XG4gICAgICAgIG5hbWUuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjIsIGc6IDAuMiwgYjogMC4yIH0gfV07XG4gICAgICAgIG5hbWUudGV4dEFsaWduVmVydGljYWwgPSBcIlRPUFwiO1xuICAgICAgICBuYW1lLnRleHRBbGlnbkhvcml6b250YWwgPSBcIlJJR0hUXCI7XG4gICAgICAgIG5hbWUubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICAgICAgbm9kZXMucHVzaChuYW1lKTtcbiAgICAgICAgLy8gY3JlYXRlIGEgZnJhbWUgZWxlbWVudCBhbmQgYXBwZW5kIHRoZSB0eXBlIGFuZCByZWN0IGVsZW1lbnRzIGJlZm9yZSBhZGRpbmcgaXQgdG8gdGhlIGNlbnRlciBvZiB0aGUgdmlld3BvcnRcbiAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBmcmFtZS5yZXNpemUoNDUwLCA0NTApO1xuICAgICAgICBmcmFtZS54ID0gY2VudGVyWDtcbiAgICAgICAgZnJhbWUueSA9IGNlbnRlclk7XG4gICAgICAgIC8vIGF1dG8gbGF5b3V0XG4gICAgICAgIGZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgIGZyYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICBmcmFtZS5pdGVtU3BhY2luZyA9IDg7XG4gICAgICAgIGZyYW1lLnBhZGRpbmdUb3AgPSAzMDtcbiAgICAgICAgZnJhbWUucGFkZGluZ1JpZ2h0ID0gMzA7XG4gICAgICAgIGZyYW1lLnBhZGRpbmdCb3R0b20gPSAzMDtcbiAgICAgICAgZnJhbWUucGFkZGluZ0xlZnQgPSAzMDtcbiAgICAgICAgLy8gc3R5bGluZ1xuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdzdGlja3ktZ3JlZW4nKSB7XG4gICAgICAgICAgICBmcmFtZS5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuODQ3MDU4ODI0LCBnOiAxLCBiOiAwLjg2Mjc0NTA5OCB9LCBvcGFjaXR5OiAxIH1dO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3N0aWNreS15ZWxsb3cnKSB7XG4gICAgICAgICAgICBmcmFtZS5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDAuOTIxNTY4NjI3LCBiOiAwLjY4MjM1Mjk0MSB9LCBvcGFjaXR5OiAxIH1dO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3N0aWNreS1yZWQnKSB7XG4gICAgICAgICAgICBmcmFtZS5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDAuODU4ODIzNTI5LCBiOiAwLjg1ODgyMzUyOSB9LCBvcGFjaXR5OiAxIH1dO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkcm9wU2hhZG93RWZmZWN0ID0ge1xuICAgICAgICAgICAgdHlwZTogXCJEUk9QX1NIQURPV1wiLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnTk9STUFMJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICByYWRpdXM6IDEwLFxuICAgICAgICAgICAgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCwgYTogMC4xIH0sXG4gICAgICAgICAgICBvZmZzZXQ6IHsgeDogMCwgeTogNCB9XG4gICAgICAgIH07XG4gICAgICAgIGZyYW1lLmVmZmVjdHMgPSBbZHJvcFNoYWRvd0VmZmVjdF07XG4gICAgICAgIC8vIGFwcGVuZCBvYmplY3RzIHRvIHRoZSBmcmFtZVxuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgIGZyYW1lLm5hbWUgPSBcIlN0aWNreSBOb3RlXCI7XG4gICAgICAgIGZyYW1lLmNsaXBzQ29udGVudCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBBTk5PVEFUSU9OXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaWYgKG1zZy50eXBlID09PSAnYW5ub3RhdGlvbi1sZWZ0JyB8fCBtc2cudHlwZSA9PT0gJ2Fubm90YXRpb24tcmlnaHQnKSB7XG4gICAgICAgIC8vIHBvc3QgbWl4cGFuZWwgZXZlbnRcbiAgICAgICAgdmFyIHRvb2xQb3NpdGlvbjtcbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAnYW5ub3RhdGlvbi1sZWZ0Jykge1xuICAgICAgICAgICAgdG9vbFBvc2l0aW9uID0gXCJMZWZ0XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b29sUG9zaXRpb24gPSBcIlJpZ2h0XCI7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogJ2FjdGlvbicsXG4gICAgICAgICAgICB0b29sOiBcIkFubm90YXRpb25cIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0b29sUG9zaXRpb24sXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBncmFiIHRoZSB4IGFuZCB5IHZhbHVlcyBvZiB0aGUgY3VycmVudCB2aWV3cG9ydCBjZW50cmFsIHBvaW50XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci55O1xuICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIGVsZW1lbnRzXG4gICAgICAgIC8vIGNvbnN0IGRpc2NOb2RlcyA9IFtdO1xuICAgICAgICAvL2NvbnN0IGNvbnRlbnROb2RlcyA9IFtdO1xuICAgICAgICAvLyBncmFiIGFsbCB0aGUgZXhpc3RpbmcgYW5ub3RhdGlvbnMgaW4gdGhlIHZpZXdwb3J0LCBnZXQgdGhlIHRvdGFsIGFuZCBhZGQgb25lIHRvIHNldCB0aGUgbmV3IGFubm90YXRpb25zIGNvdW50XG4gICAgICAgIGNvbnN0IGFubm90YXRpb25Db3VudCA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRBbGwobm9kZSA9PiBub2RlLnR5cGUgPT09ICdGUkFNRScgJiYgbm9kZS5uYW1lLmluY2x1ZGVzKCdhbm5vdGF0aW9uLScpKS5sZW5ndGggKyAxO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIGNvdW50ZXIgZWxlbWVudFxuICAgICAgICAvLyBjcmVhdGUgdGhlIHJlY3RhbmdsZSBmb3IgdGhlIGNvdW50ZXJcbiAgICAgICAgY29uc3QgZGlzYyA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgICAgICBkaXNjLnJlc2l6ZSgyNCwgMjQpO1xuICAgICAgICBkaXNjLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCB9LCBvcGFjaXR5OiAxIH1dO1xuICAgICAgICBkaXNjLmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiBcIk1JTlwiLCB2ZXJ0aWNhbDogXCJNSU5cIiB9O1xuICAgICAgICBkaXNjLmNvcm5lclJhZGl1cyA9IDEyO1xuICAgICAgICAvLyBkaXNjTm9kZXMucHVzaChkaXNjKTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSB0eXBlIGZvciB0aGUgY291bnRlclxuICAgICAgICBjb25zdCBudW1iZXIgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIG51bWJlci54ID0gZGlzYy54O1xuICAgICAgICBudW1iZXIueSA9IGRpc2MueTtcbiAgICAgICAgbnVtYmVyLnJlc2l6ZSgyNCwgMjQpO1xuICAgICAgICAvLyBzdHlsaW5nXG4gICAgICAgIG51bWJlci5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbiAgICAgICAgbnVtYmVyLmZvbnRTaXplID0gMTI7XG4gICAgICAgIG51bWJlci5saW5lSGVpZ2h0ID0geyB1bml0OiAnUElYRUxTJywgdmFsdWU6IDEyIH07XG4gICAgICAgIG51bWJlci5jaGFyYWN0ZXJzID0gYW5ub3RhdGlvbkNvdW50LnRvU3RyaW5nKCk7XG4gICAgICAgIG51bWJlci5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSB9XTtcbiAgICAgICAgLy8gY29uc3RyYWludHNcbiAgICAgICAgbnVtYmVyLnRleHRBbGlnblZlcnRpY2FsID0gXCJDRU5URVJcIjtcbiAgICAgICAgbnVtYmVyLnRleHRBbGlnbkhvcml6b250YWwgPSBcIkNFTlRFUlwiO1xuICAgICAgICBudW1iZXIuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiTUlOXCIsIHZlcnRpY2FsOiBcIk1JTlwiIH07XG4gICAgICAgIC8vIGRpc2NOb2Rlcy5wdXNoKG51bWJlcik7XG4gICAgICAgIC8vIGFkZCB0aGUgZGlzYyBhbmQgbnVtYmVyIHRvIGEgZnJhbWVcbiAgICAgICAgY29uc3QgZGlzY0ZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgZGlzY0ZyYW1lLnJlc2l6ZSgyNCwgMjQpO1xuICAgICAgICAvLyBhcHBlbmQgb2JqZWN0cyBhbmQgbmFtZSB0aGUgZnJhbWVcbiAgICAgICAgZGlzY0ZyYW1lLmFwcGVuZENoaWxkKGRpc2MpO1xuICAgICAgICBkaXNjRnJhbWUuYXBwZW5kQ2hpbGQobnVtYmVyKTtcbiAgICAgICAgZGlzY0ZyYW1lLm5hbWUgPSBcImRpc2NcIjtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBjb250ZW50IGVsZW1lbnRcbiAgICAgICAgLy8gY3JlYXRlIHRoZSB0eXBlIGZvciB0aGUgY29udGVudCB0ZXh0XG4gICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIC8vIHN0eWxpbmdcbiAgICAgICAgdGV4dC5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbiAgICAgICAgdGV4dC5mb250U2l6ZSA9IDE0O1xuICAgICAgICB0ZXh0LnBhcmFncmFwaFNwYWNpbmcgPSAxMDtcbiAgICAgICAgdGV4dC5saW5lSGVpZ2h0ID0geyB1bml0OiAnUElYRUxTJywgdmFsdWU6IDIwIH07XG4gICAgICAgIHRleHQuY2hhcmFjdGVycyA9IFwiQWRkIHlvdXIgYW5ub3RhdGlvbiBjb250ZW50IGhlcmUuLi5cXG5cIjtcbiAgICAgICAgdGV4dC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSB9XTtcbiAgICAgICAgLy8gYXV0byBsYXlvdXRcbiAgICAgICAgdGV4dC50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiVE9QXCI7XG4gICAgICAgIHRleHQudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICB0ZXh0LmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgICAgIC8vY29udGVudE5vZGVzLnB1c2godGV4dCk7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgZnJhbWUgdG8gc3RvcmUgdGhlIGNvbnRlbnQgdXNpbmcgYXV0b2xheW91dCB0byBtYWtlIHN1cmUgaXQgcmVzaXplc1xuICAgICAgICBjb25zdCBjb250ZW50RnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBjb250ZW50RnJhbWUuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0sIG9wYWNpdHk6IDEgfV07XG4gICAgICAgIC8vIHN0eWxpbmdcbiAgICAgICAgY29udGVudEZyYW1lLmNvcm5lclJhZGl1cyA9IDY7XG4gICAgICAgIC8vIGF1dG9sYXlvdXRcbiAgICAgICAgY29udGVudEZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgIGNvbnRlbnRGcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgY29udGVudEZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICBjb250ZW50RnJhbWUubGF5b3V0R3JvdyA9IDE7XG4gICAgICAgIGNvbnRlbnRGcmFtZS5pdGVtU3BhY2luZyA9IDg7XG4gICAgICAgIGNvbnRlbnRGcmFtZS5wYWRkaW5nVG9wID0gODtcbiAgICAgICAgY29udGVudEZyYW1lLnBhZGRpbmdSaWdodCA9IDEyO1xuICAgICAgICBjb250ZW50RnJhbWUucGFkZGluZ0JvdHRvbSA9IDg7XG4gICAgICAgIGNvbnRlbnRGcmFtZS5wYWRkaW5nTGVmdCA9IDEyO1xuICAgICAgICAvLyBhcHBlbmQgb2JqZWN0cyBhbmQgbmFtZSB0aGUgZnJhbWVcbiAgICAgICAgY29udGVudEZyYW1lLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBjb250ZW50RnJhbWUubmFtZSA9IFwiY29udGVudFwiOyAvLyBhcHBlbmQgdGhlIG5leHQgY291bnQgdG8gdGhlIGFubm90YXRpb24gdGl0bGVcbiAgICAgICAgLy8gY3JlYXRlIGEgZnJhbWUgZWxlbWVudCBhbmQgYXBwZW5kIHRoZSBjb3VudGVyIGFuZCBjb250ZW50IGVsZW1lbnRzIGJlZm9yZSBhZGRpbmcgaXQgdG8gdGhlIGNlbnRlciBvZiB0aGUgdmlld3BvcnRcbiAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBmcmFtZS54ID0gY2VudGVyWDtcbiAgICAgICAgZnJhbWUueSA9IGNlbnRlclk7XG4gICAgICAgIC8vIGF1dG9sYXlvdXRcbiAgICAgICAgZnJhbWUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICBmcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgLy8gc3R5bGluZ1xuICAgICAgICBmcmFtZS5yZXNpemUoMzQwLCAzNik7XG4gICAgICAgIGZyYW1lLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCB9LCBvcGFjaXR5OiAwIH1dO1xuICAgICAgICAvLyBhdXRvbGF5b3V0IGNvbnQuICh0aGlzIG9yZGVyaW5nIGlzIGltcG9ydGFudClcbiAgICAgICAgZnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgIGZyYW1lLml0ZW1TcGFjaW5nID0gODtcbiAgICAgICAgZnJhbWUubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICAgICAgLy8gYXBwZW5kIG9iamVjdHMgYW5kIG5hbWUgdGhlIGZyYW1lXG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ2Fubm90YXRpb24tbGVmdCcpIHtcbiAgICAgICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGRpc2NGcmFtZSk7XG4gICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChjb250ZW50RnJhbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoY29udGVudEZyYW1lKTtcbiAgICAgICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGRpc2NGcmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnJhbWUubmFtZSA9IFwiYW5ub3RhdGlvbi1cIiArIGFubm90YXRpb25Db3VudDsgLy8gYXBwZW5kIHRoZSBuZXh0IGNvdW50IHRvIHRoZSBhbm5vdGF0aW9uIHRpdGxlXG4gICAgfVxuICAgIC8vIEFOTk9UQVRJT04gKFNQTElUKVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIGlmIChtc2cudHlwZSA9PT0gJ2Fubm90YXRpb24tc3BsaXQnKSB7XG4gICAgLy8gXHQvLyBwb3N0IG1peHBhbmVsIGV2ZW50XG4gICAgLy8gICAgIC8vIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAvLyAgICAgLy8gICAgIHR5cGU6ICdhY3Rpb24nLCBcbiAgICAvLyAgICAgLy8gICAgIHRvb2w6IFwiQW5ub3RhdGlvblwiLCBcbiAgICAvLyAgICAgLy8gICAgIHBvc2l0aW9uOiBcIlNwbGl0XCIsXG4gICAgLy8gICAgIC8vIH0pO1xuICAgIC8vIFx0Ly8gZ3JhYiB0aGUgeCBhbmQgeSB2YWx1ZXMgb2YgdGhlIGN1cnJlbnQgdmlld3BvcnQgY2VudHJhbCBwb2ludFxuICAgIC8vIFx0Y29uc3QgY2VudGVyWCA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci54O1xuICAgIC8vIFx0Y29uc3QgY2VudGVyWSA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci55O1xuICAgIC8vIFx0Ly8gY3JlYXRlIGFuIGFycmF5IHRvIHN0b3JlIHRoZSBlbGVtZW50c1xuICAgIC8vIFx0Y29uc3Qgbm9kZXMgPSBbXTtcbiAgICAvLyBcdC8vIGdyYWIgYWxsIHRoZSBleGlzdGluZyBhbm5vdGF0aW9ucyBpbiB0aGUgdmlld3BvcnQsIGdldCB0aGUgdG90YWwgYW5kIGFkZCBvbmUgdG8gc2V0IHRoZSBuZXcgYW5ub3RhdGlvbnMgY291bnRcbiAgICAvLyBcdGNvbnN0IGFubm90YXRpb25Db3VudCA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRBbGwobm9kZSA9PiBub2RlLnR5cGUgPT09ICdGUkFNRScgJiYgbm9kZS5uYW1lLmluY2x1ZGVzKCdhbm5vdGF0aW9uLScpKS5sZW5ndGggKyAxO1xuICAgIC8vIFx0Ly8gY3JlYXRlIHRoZSBjb250ZW50IGVsZW1lbnRcbiAgICAvLyBcdC8vIGNyZWF0ZSB0aGUgcmVjdGFuZ2xlIGZvciB0aGUgY29udGVudCBiYWNrZ3JvdW5kXG4gICAgLy8gXHRjb25zdCByZWN0ID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgLy8gXHQvL3JlY3QueCA9IGRpc2MueCArIDQwO1xuICAgIC8vIFx0Ly9yZWN0LnkgPSBkaXNjLnk7XG4gICAgLy8gXHRyZWN0LnJlc2l6ZSgzMDgsIDYwKTtcbiAgICAvLyBcdHJlY3QuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjoge3I6IDAsIGc6IDAsIGI6IDB9LCBvcGFjaXR5OiAxIH1dO1xuICAgIC8vIFx0cmVjdC5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogXCJTVFJFVENIXCIsIHZlcnRpY2FsOiBcIlNUUkVUQ0hcIiB9O1xuICAgIC8vIFx0cmVjdC5jb3JuZXJSYWRpdXMgPSA2O1xuICAgIC8vIFx0bm9kZXMucHVzaChyZWN0KTtcbiAgICAvLyBcdC8vIGNyZWF0ZSB0aGUgdHlwZSBmb3IgdGhlIGNvbnRlbnQgdGV4dFxuICAgIC8vIFx0Y29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAvLyBcdHRleHQueCA9IHJlY3QueCArIDEyO1xuICAgIC8vIFx0dGV4dC55ID0gcmVjdC55ICsgODtcbiAgICAvLyBcdHRleHQucmVzaXplKDI4NCwgNDQpO1xuICAgIC8vIFx0dGV4dC5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfVxuICAgIC8vIFx0dGV4dC5mb250U2l6ZSA9IDE0O1xuICAgIC8vIFx0dGV4dC5wYXJhZ3JhcGhTcGFjaW5nID0gMTA7XG4gICAgLy8gXHR0ZXh0LmxpbmVIZWlnaHQgPSB7dW5pdDogJ1BJWEVMUycsIHZhbHVlOiAyMH07XG4gICAgLy8gXHR0ZXh0LmNoYXJhY3RlcnMgPSBcIkFkZCB5b3VyIGFubm90YXRpb24gY29udGVudCBoZXJlLi4uXCI7XG4gICAgLy8gXHR0ZXh0LmZpbGxzID0gW3t0eXBlOiAnU09MSUQnLCBjb2xvcjoge3I6IDEsIGc6IDEsIGI6IDF9fV07XG4gICAgLy8gXHR0ZXh0LnRleHRBbGlnblZlcnRpY2FsID0gXCJUT1BcIjtcbiAgICAvLyBcdHRleHQuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiU1RSRVRDSFwiLCB2ZXJ0aWNhbDogXCJTVFJFVENIXCIgfTtcbiAgICAvLyBcdG5vZGVzLnB1c2godGV4dCk7XG4gICAgLy8gXHQvLyBjcmVhdGUgYSBmcmFtZSBlbGVtZW50IGFuZCBhcHBlbmQgdGhlIGNvbnRlbnQgZWxlbWVudHMgYmVmb3JlIGFkZGluZyBpdCB0byB0aGUgY2VudGVyIG9mIHRoZSB2aWV3cG9ydFxuICAgIC8vIFx0Y29uc3QgcmVjdEZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAvLyBcdHJlY3RGcmFtZS5yZXNpemUoMzQwLCA2MCk7XG4gICAgLy8gXHRyZWN0RnJhbWUueCA9IGNlbnRlclg7XG4gICAgLy8gXHRyZWN0RnJhbWUueSA9IGNlbnRlclk7XG4gICAgLy8gXHRyZWN0RnJhbWUuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjoge3I6IDAsIGc6IDAsIGI6IDB9LCBvcGFjaXR5OiAwIH1dO1xuICAgIC8vIFx0Ly8gcmVjdEZyYW1lLmFwcGVuZENoaWxkKGRpc2MpO1xuICAgIC8vIFx0Ly8gcmVjdEZyYW1lLmFwcGVuZENoaWxkKG51bWJlcik7XG4gICAgLy8gXHRyZWN0RnJhbWUuYXBwZW5kQ2hpbGQocmVjdCk7XG4gICAgLy8gXHRyZWN0RnJhbWUuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgLy8gXHRyZWN0RnJhbWUubmFtZSA9IFwiYW5ub3RhdGlvbi1cIiArIGFubm90YXRpb25Db3VudDsgLy8gYXBwZW5kIHRoZSBuZXh0IGNvdW50IHRvIHRoZSBhbm5vdGF0aW9uIHRpdGxlXG4gICAgLy8gICAgIC8vIGNyZWF0ZSB0aGUgY291bnRlciBlbGVtZW50XG4gICAgLy8gXHQvLyBjcmVhdGUgdGhlIHJlY3RhbmdsZSBmb3IgdGhlIGNvdW50ZXJcbiAgICAvLyBcdGNvbnN0IGRpc2MgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAvLyBcdGRpc2MucmVzaXplKDI0LCAyNCk7XG4gICAgLy8gXHQvLyBkaXNjLnggPSBjZW50ZXJYO1xuICAgIC8vIFx0Ly8gZGlzYy55ID0gY2VudGVyWDtcbiAgICAvLyBcdGRpc2MuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjoge3I6IDAsIGc6IDAsIGI6IDB9LCBvcGFjaXR5OiAxIH1dO1xuICAgIC8vIFx0ZGlzYy5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogXCJNQVhcIiwgdmVydGljYWw6IFwiTUlOXCIgfTtcbiAgICAvLyBcdGRpc2MuY29ybmVyUmFkaXVzID0gMTI7XG4gICAgLy8gXHRub2Rlcy5wdXNoKGRpc2MpO1xuICAgIC8vIFx0Ly8gY3JlYXRlIHRoZSB0eXBlIGZvciB0aGUgY291bnRlclxuICAgIC8vIFx0Y29uc3QgbnVtYmVyID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgIC8vIFx0bnVtYmVyLnggPSBkaXNjLng7XG4gICAgLy8gXHRudW1iZXIueSA9IGRpc2MueTtcbiAgICAvLyBcdG51bWJlci5yZXNpemUoMjQsIDI0KTtcbiAgICAvLyBcdG51bWJlci5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfVxuICAgIC8vIFx0bnVtYmVyLmZvbnRTaXplID0gMTI7XG4gICAgLy8gXHRudW1iZXIubGluZUhlaWdodCA9IHt1bml0OiAnUElYRUxTJywgdmFsdWU6IDEyfTtcbiAgICAvLyBcdG51bWJlci5jaGFyYWN0ZXJzID0gYW5ub3RhdGlvbkNvdW50LnRvU3RyaW5nKCk7XG4gICAgLy8gXHRudW1iZXIuZmlsbHMgPSBbe3R5cGU6ICdTT0xJRCcsIGNvbG9yOiB7cjogMSwgZzogMSwgYjogMX19XVxuICAgIC8vIFx0bnVtYmVyLnRleHRBbGlnblZlcnRpY2FsID0gXCJDRU5URVJcIjtcbiAgICAvLyBcdG51bWJlci50ZXh0QWxpZ25Ib3Jpem9udGFsID0gXCJDRU5URVJcIjtcbiAgICAvLyBcdG51bWJlci5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogXCJNQVhcIiwgdmVydGljYWw6IFwiTUlOXCIgfTtcbiAgICAvLyBcdG5vZGVzLnB1c2gobnVtYmVyKTtcbiAgICAvLyAgICAgLy8gY3JlYXRlIGEgZnJhbWUgZWxlbWVudCB0byBjb250YWluIHRoZSBjb3VudGVyIGRpc2MgZWxlbWVudCBiZWZvcmUgYWRkaW5nIGl0IHRvIHRoZSBjZW50ZXIgb2YgdGhlIHZpZXdwb3J0XG4gICAgLy8gXHRjb25zdCBkaXNjRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIC8vIFx0ZGlzY0ZyYW1lLnJlc2l6ZSgyNCwgMjQpO1xuICAgIC8vIFx0ZGlzY0ZyYW1lLnggPSBjZW50ZXJYIC0gMTAwO1xuICAgIC8vIFx0ZGlzY0ZyYW1lLnkgPSBjZW50ZXJZIC0gMTAwO1xuICAgIC8vIFx0ZGlzY0ZyYW1lLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHtyOiAwLCBnOiAwLCBiOiAwfSwgb3BhY2l0eTogMCB9XTtcbiAgICAvLyBcdGRpc2NGcmFtZS5hcHBlbmRDaGlsZChkaXNjKTtcbiAgICAvLyBcdGRpc2NGcmFtZS5hcHBlbmRDaGlsZChudW1iZXIpO1xuICAgIC8vIFx0ZGlzY0ZyYW1lLm5hbWUgPSBcImFubm90YXRpb24tXCIgKyBhbm5vdGF0aW9uQ291bnQ7IC8vIGFwcGVuZCB0aGUgbmV4dCBjb3VudCB0byB0aGUgYW5ub3RhdGlvbiB0aXRsZVxuICAgIC8vIH1cbiAgICAvLyBESVZJREVSU1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIGlmIChtc2cudHlwZSA9PT0gJ2RpdmlkZXItdGhpY2snIHx8IG1zZy50eXBlID09PSAnZGl2aWRlci10aGluJykge1xuICAgIC8vICAgICAvLyBwb3N0IG1peHBhbmVsIGV2ZW50XG4gICAgLy8gICAgIHZhciBzaXplO1xuICAgIC8vICAgICBpZiAobXNnLnR5cGUgPT09ICdkaXZpZGVyLXRoaW4nKSB7IHNpemUgPSBcIlRoaW5cIiB9XG4gICAgLy8gICAgIGlmIChtc2cudHlwZSA9PT0gJ2RpdmlkZXItdGhpY2snKSB7IHNpemUgPSBcIlRoaWNrXCIgfVxuICAgIC8vICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgLy8gICAgICAgICB0eXBlOiAnYWN0aW9uJywgXG4gICAgLy8gICAgICAgICB0b29sOiBcIkRpdmlkZXJcIiwgXG4gICAgLy8gICAgICAgICBzaXplOiBzaXplXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIFx0Ly8gZ3JhYiB0aGUgeCBhbmQgeSB2YWx1ZXMgb2YgdGhlIGN1cnJlbnQgdmlld3BvcnQgY2VudHJhbCBwb2ludFxuICAgIC8vIFx0Y29uc3QgY2VudGVyWCA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci54O1xuICAgIC8vIFx0Y29uc3QgY2VudGVyWSA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci55O1xuICAgIC8vIFx0Ly8gY3JlYXRlIGFuIGFycmF5IHRvIHN0b3JlIHRoZSBlbGVtZW50c1xuICAgIC8vIFx0Y29uc3Qgbm9kZXMgPSBbXTtcbiAgICAvLyBcdC8vIGNyZWF0ZSB0aGUgbGluZSBlbGVtZW50XG4gICAgLy8gXHRjb25zdCBsaW5lID0gZmlnbWEuY3JlYXRlTGluZSgpO1xuICAgIC8vIFx0bGluZS54ID0gY2VudGVyWDtcbiAgICAvLyBcdGxpbmUueSA9IGNlbnRlclk7XG4gICAgLy8gICAgIGlmIChtc2cudHlwZSA9PT0gJ2RpdmlkZXItdGhpbicpIHsgIGxpbmUuc3Ryb2tlV2VpZ2h0ID0gMjA7IH1cbiAgICAvLyBcdGlmIChtc2cudHlwZSA9PT0gJ2RpdmlkZXItdGhpY2snKSB7IGxpbmUuc3Ryb2tlV2VpZ2h0ID0gNDA7IH1cbiAgICAvLyBcdGxpbmUucmVzaXplKGRlZmF1bHRXaWR0aCwgMCk7XG4gICAgLy8gXHRsaW5lLnN0cm9rZXMgPSBbe3R5cGU6ICdTT0xJRCcsIGNvbG9yOiB7cjogMC43Njg2Mjc0NTEsIGc6IDAuNzY4NjI3NDUxLCBiOiAwLjc2ODYyNzQ1MX19XTtcbiAgICAvLyBcdGxpbmUub3BhY2l0eSA9IDAuNjtcbiAgICAvLyBcdG5vZGVzLnB1c2gobGluZSk7XG4gICAgLy8gXHQvLyBncm91cCBib3RoIHRoZSBsaW5lIGFuZCB0eXBlIGVsZW1lbnRcbiAgICAvLyBcdGNvbnN0IGdyb3VwID0gZmlnbWEuZ3JvdXAobm9kZXMsIGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAvLyBcdGdyb3VwLm5hbWUgPSAnRGl2aWRlcic7XG4gICAgLy8gXHRncm91cC5leHBhbmRlZCA9IGZhbHNlO1xuICAgIC8vIH1cbn0pO1xuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9jb2RlLnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=