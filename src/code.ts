const logEvents = false;

figma.showUI(__html__, { width: 264, height: 216 });
figma.ui.postMessage({
	// post back the user data to the ui for mixpanel
	type: 'identify', 
	userID: figma.currentUser.id, 
	username: figma.currentUser.name
});

figma.ui.onmessage = async(msg) => {

	// Load in fonts
	await figma.loadFontAsync({ family: "Roboto", style: "Regular" });
	await figma.loadFontAsync({ family: "Roboto", style: "Bold" });

	// Base Values
	const defaultWidth = 920;

	
	// TITLE
	//-------------------------------

	if (msg.type === 'title-small' || msg.type === 'title-medium' || msg.type === 'title-large') {

        // post mixpanel event
        var toolSize;
        if (msg.type === 'title-small') {   toolSize = "Small"; }
        if (msg.type === 'title-medium') {  toolSize = "Medium"; }
        if (msg.type === 'title-large') {   toolSize = "Large"; }
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
			const nodes = []

			// create the line element
			const line = figma.createLine();
			line.x = centerX;
			line.y = centerY;
			if (msg.type === 'title-small') 	{ line.strokeWeight = 2; }
			if (msg.type === 'title-medium') 	{ line.strokeWeight = 4; }
			if (msg.type === 'title-large') 	{ line.strokeWeight = 8; }
			line.resize(defaultWidth, 0);
			line.strokes = [{type: 'SOLID', color: {r: 0.768627451, g: 0.768627451, b: 0.768627451}}];
			line.opacity = 0.6;
			nodes.push(line);

			// create the type element
			const text = figma.createText();
			// set the x/y position of the text
			text.x = centerX;
			if (msg.type === 'title-small') 	{ text.y = line.y - 70; }
			if (msg.type === 'title-medium') 	{ text.y = line.y - 80; }
			if (msg.type === 'title-large') 	{ text.y = line.y - 90; }
			// set the width and height
			text.resize(defaultWidth, 50);
			text.fontName = { family: "Roboto", style: "Bold" }
			if (msg.type === 'title-small') { 
				text.fontSize = 30;
			}
			if (msg.type === 'title-medium') { 
				text.fontSize = 50; 
				text.letterSpacing = {unit: 'PIXELS', value: -1};
			}
			if (msg.type === 'title-large') { 
				text.fontSize = 80; 
				text.letterSpacing = {unit: 'PIXELS', value: -1};
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

		} else {

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
				line.strokes = [{type: 'SOLID', color: {r: 0.768627451, g: 0.768627451, b: 0.768627451}}];
				line.opacity = 0.6;
				nodes.push(line);

				// create the type element
				const text = figma.createText();
				text.x = selectionX;
				if (msg.type === 'title-small') 	{ text.y = line.y - 70; }
				if (msg.type === 'title-medium') 	{ text.y = line.y - 80; }
				if (msg.type === 'title-large') 	{ text.y = line.y - 90; }
				text.resize(selectionWidth, 50);
				text.fontName = { family: "Roboto", style: "Bold" }
				if (msg.type === 'title-small') { 
					text.fontSize = 30; 
				}
				if (msg.type === 'title-medium') { 
					text.fontSize = 50; 
					text.letterSpacing = {unit: 'PIXELS', value: -1};
				}
				if (msg.type === 'title-large') { 
					text.fontSize = 80; 
					text.letterSpacing = {unit: 'PIXELS', value: -1};
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
        if (msg.type === 'footnote-small') {   toolSize = "Small"; }
        if (msg.type === 'footnote-medium') {  toolSize = "Medium"; }
        if (msg.type === 'footnote-large') {   toolSize = "Large"; }
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
			const nodes = []

			// create the type element
			const text = figma.createText();
			text.x = centerX;
			text.y = centerY;
			text.resize(defaultWidth, 52);
			text.fontName = { family: "Roboto", style: "Regular" }
			if (msg.type === 'footnote-small') 	{ text.fontSize = 28; }
			if (msg.type === 'footnote-medium') { text.fontSize = 36; }
			if (msg.type === 'footnote-large') 	{ text.fontSize = 54; }
			text.characters = "Enter your description or notes here...";
			text.textAlignVertical = "TOP";
			text.textAutoResize = "HEIGHT";
			text.fills = [{type: 'SOLID', color: {r: 0.074509804, g: 0.160784314, b: 0.247058824}}]
			text.opacity = 0.4
			nodes.push(text);

			// group type element
			const group = figma.group(nodes, figma.currentPage);
			group.name = 'footnote';
			group.expanded = false;

		} else {

			// if something is selected, apply the object to all of the selected nodes

			// loop through all the items that are selected
			for (const node of figma.currentPage.selection) {

				// grab the current selection's x, y, width, height and name values
				const selectionX = node.x
				const selectionY = node.y
				const selectionWidth = node.width
				const selectionHeight = node.height
				const selectionName = node.name

				// create an array to store the elements
				const nodes = []

				// create the type element
				const text = figma.createText();
				text.x = selectionX;
				text.y = selectionY + selectionHeight + 60; // set the types y value to 50px below the selection
				text.resize(selectionWidth, 52);
				text.fontName = { family: "Roboto", style: "Regular" }
				if (msg.type === 'footnote-small') 	{ text.fontSize = 28; }
				if (msg.type === 'footnote-medium') { text.fontSize = 36; }
				if (msg.type === 'footnote-large') 	{ text.fontSize = 54; }
				text.characters = "Enter your description or notes here...";
				text.textAlignVertical = "TOP";
				text.textAutoResize = "HEIGHT";
				text.fills = [{type: 'SOLID', color: {r: 0.074509804, g: 0.160784314, b: 0.247058824}}]
				text.opacity = 0.4
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
        if (msg.type === 'sticky-green') { color = "Green" }
        if (msg.type === 'sticky-yellow') { color = "Yellow" }
        if (msg.type === 'sticky-red') { color = "Red" }
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
		const nodes = []

		// create the rectangle element
		const rect = figma.createRectangle()
		rect.resize(450, 450)
		// check if the user wanted the green, yellow or red styling
		if (msg.type === 'sticky-green') {
			rect.fills = [{ type: 'SOLID', color: {r: 0.847058824, g: 1, b: 0.862745098}, opacity: 1 }];
		}
		if (msg.type === 'sticky-yellow') {
			rect.fills = [{ type: 'SOLID', color: {r: 1, g: 0.921568627, b: 0.682352941},  opacity: 1 }];
		}
		if (msg.type === 'sticky-red') {
			rect.fills = [{ type: 'SOLID', color: {r: 1, g: 0.858823529, b: 0.858823529}, opacity: 1 }];
		}

		// add the drop shadow effect
		let dropShadowEffect: Effect = {
			type: "DROP_SHADOW",
			blendMode: 'NORMAL',
			visible: true,
			radius: 10,
			color: {r: 0, g: 0, b: 0, a: 0.1},
			offset: {
				x: 0,
				y: 4
			}
		}
		rect.effects = [dropShadowEffect];

		// apply the layout constraints
		rect.constraints = { horizontal: "SCALE", vertical: "SCALE" };
		nodes.push(rect)

		// create the type element
		const text = figma.createText();
		text.x = rect.x + 30;
		text.y = rect.y + 30;
		text.resize(390, 390);
		text.fontName = { family: "Roboto", style: "Regular" }
		text.fontSize = 24;
		text.paragraphSpacing = 20;
		text.lineHeight = {unit: 'PIXELS', value: 38};
		text.characters = "Enter Note Content...";
		text.fills = [{type: 'SOLID', color: {r: 0.2, g: 0.2, b: 0.2}}]
		text.textAlignVertical = "TOP";
		text.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
		nodes.push(text);

        // create the name type element
		const name = figma.createText();
		name.x = rect.x + 30;
		name.y = rect.y + 400;
		name.resize(390, 20);
		name.fontName = { family: "Roboto", style: "Bold" }
		name.fontSize = 20;
		name.lineHeight = {unit: 'PIXELS', value: 20}
		name.characters = username;
		name.fills = [{type: 'SOLID', color: {r: 0.2, g: 0.2, b: 0.2}}]
		name.textAlignVertical = "TOP";
		name.textAlignHorizontal = "RIGHT";
		name.constraints = { horizontal: "STRETCH", vertical: "MAX" };
		nodes.push(name);

		// create a frame element and append the type and rect elements before adding it to the center of the viewport
		const frame = figma.createFrame();
		frame.resize(450, 450);
		frame.x = centerX;
		frame.y = centerY;
		frame.appendChild(rect);
		frame.appendChild(text);
        frame.appendChild(name);
		frame.name = "Sticky Note";
		frame.clipsContent = false;
	}



	// ANNOTATION (LEFT)
	//-------------------------------

	if (msg.type === 'annotation-left') {
		
		// post mixpanel event
        figma.ui.postMessage({
            type: 'action', 
            tool: "Annotation", 
            position: "Left",
        });

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
		disc.fills = [{ type: 'SOLID', color: {r: 0, g: 0, b: 0}, opacity: 1 }];
		disc.constraints = { horizontal: "MIN", vertical: "MIN" };
		disc.cornerRadius = 12;
		nodes.push(disc);

		// create the type for the counter
		const number = figma.createText();
		number.x = disc.x;
		number.y = disc.y;
		number.resize(24, 24);
		number.fontName = { family: "Roboto", style: "Regular" }
		number.fontSize = 12;
		number.lineHeight = {unit: 'PIXELS', value: 12};
		number.characters = annotationCount.toString();
		number.fills = [{type: 'SOLID', color: {r: 1, g: 1, b: 1}}]
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
		rect.fills = [{ type: 'SOLID', color: {r: 0, g: 0, b: 0}, opacity: 1 }];
		rect.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
		rect.cornerRadius = 6;
		nodes.push(rect);

		// create the type for the content text
		const text = figma.createText();
		text.x = rect.x + 12;
		text.y = rect.y + 8;
		text.resize(284, 44);
		text.fontName = { family: "Roboto", style: "Regular" }
		text.fontSize = 14;
		text.paragraphSpacing = 10;
		text.lineHeight = {unit: 'PIXELS', value: 20};
		text.characters = "Add your annotation content here...";
		text.fills = [{type: 'SOLID', color: {r: 1, g: 1, b: 1}}];
		text.textAlignVertical = "TOP";
		text.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
		nodes.push(text);

		// create a frame element and append the counter and content elements before adding it to the center of the viewport
		const frame = figma.createFrame();
		frame.resize(340, 60);
		frame.x = centerX;
		frame.y = centerY;
		frame.fills = [{ type: 'SOLID', color: {r: 0, g: 0, b: 0}, opacity: 0 }];
		frame.appendChild(disc);
		frame.appendChild(number);
		frame.appendChild(rect);
		frame.appendChild(text);
		frame.name = "annotation-" + annotationCount; // append the next count to the annotation title
	}



	// ANNOTATION (RIGHT)
	//-------------------------------

	if (msg.type === 'annotation-right') {

		// post mixpanel event
        figma.ui.postMessage({
            type: 'action', 
            tool: "Annotation", 
            position: "Right",
        });

		// grab the x and y values of the current viewport central point
		const centerX = figma.viewport.center.x;
		const centerY = figma.viewport.center.y;

		// create an array to store the elements
		const nodes = [];

		// grab all the existing annotations in the viewport, get the total and add one to set the new annotations count
		const annotationCount = figma.currentPage.findAll(node => node.type === 'FRAME' && node.name.includes('annotation-')).length + 1;

		// create the content element

		// create the rectangle for the content background
		const rect = figma.createRectangle();
		//rect.x = disc.x + 40;
		//rect.y = disc.y;
		rect.resize(308, 60);
		rect.fills = [{ type: 'SOLID', color: {r: 0, g: 0, b: 0}, opacity: 1 }];
		rect.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
		rect.cornerRadius = 6;
		nodes.push(rect);

		// create the type for the content text
		const text = figma.createText();
		text.x = rect.x + 12;
		text.y = rect.y + 8;
		text.resize(284, 44);
		text.fontName = { family: "Roboto", style: "Regular" }
		text.fontSize = 14;
		text.paragraphSpacing = 10;
		text.lineHeight = {unit: 'PIXELS', value: 20};
		text.characters = "Add your annotation content here...";
		text.fills = [{type: 'SOLID', color: {r: 1, g: 1, b: 1}}];
		text.textAlignVertical = "TOP";
		text.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
		nodes.push(text);

		// create the counter element

		// create the rectangle for the counter
		const disc = figma.createRectangle();
		disc.resize(24, 24);
		disc.x = rect.x + 316;
		disc.y = rect.y;
		disc.fills = [{ type: 'SOLID', color: {r: 0, g: 0, b: 0}, opacity: 1 }];
		disc.constraints = { horizontal: "MAX", vertical: "MIN" };
		disc.cornerRadius = 12;
		nodes.push(disc);

		// create the type for the counter
		const number = figma.createText();
		number.x = disc.x;
		number.y = disc.y;
		number.resize(24, 24);
		number.fontName = { family: "Roboto", style: "Regular" }
		number.fontSize = 12;
		number.lineHeight = {unit: 'PIXELS', value: 12};
		number.characters = annotationCount.toString();
		number.fills = [{type: 'SOLID', color: {r: 1, g: 1, b: 1}}]
		number.textAlignVertical = "CENTER";
		number.textAlignHorizontal = "CENTER";
		number.constraints = { horizontal: "MAX", vertical: "MIN" };
		nodes.push(number);

		// create a frame element and append the counter and content elements before adding it to the center of the viewport
		const frame = figma.createFrame();
		frame.resize(340, 60);
		frame.x = centerX;
		frame.y = centerY;
		frame.fills = [{ type: 'SOLID', color: {r: 0, g: 0, b: 0}, opacity: 0 }];
		frame.appendChild(disc);
		frame.appendChild(number);
		frame.appendChild(rect);
		frame.appendChild(text);
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


}