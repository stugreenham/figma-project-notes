figma.showUI(__html__, { width: 170, height: 338 });

figma.ui.onmessage = async(msg) => {

	await figma.loadFontAsync({ family: "Roboto", style: "Regular" });
	await figma.loadFontAsync({ family: "Roboto", style: "Bold" });


	// TITLE
	//-------------------------------

	if (msg.type === 'title' || msg.type === 'both') {

		// First check is the user has something selected
		if (figma.currentPage.selection.length === 0) {

			// if nothing is selected, show an error
			figma.ui.postMessage("no-layers");

		} else {

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
				line.strokes = [{type: 'SOLID', color: {r: 0.654901961, g: 0.682352941, b: 0.709803922}}];
				line.opacity = 0.6;
				nodes.push(line);

				// create the type element
				const text = figma.createText();
				text.x = selectionX;
				text.y = line.y - 110; // set the types y value to -130px from the line's y value
				text.resize(selectionWidth, 70);
				text.fontName = { family: "Roboto", style: "Regular" }
				text.fontSize = 70;
				text.letterSpacing = {unit: 'PIXELS', value: -1};
				var textChars = "Web • Frame Title";
				text.characters = textChars;
				text.textAlignVertical = "BOTTOM";
				text.textAutoResize = "HEIGHT";
				var textBreak = textChars.indexOf("•") + 1; // get the char number where the • appears and add 1, this is to apply the bold formatting
				var textLen = textChars.length; // get the total char count
				text.setRangeFontName(textBreak, textLen, { family: "Roboto", style: "Bold" } ); // set the text after the • to bold
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

		} else {

			// if something is selected, build the components

			// loop through all the items that are selected
			for (const node of figma.currentPage.selection) {
				//console.log(node);

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
				text.y = selectionY + selectionHeight + 80; // set the types y value to 50px below the selection
				text.resize(selectionWidth, 52);
				text.fontName = { family: "Roboto", style: "Regular" }
				text.fontSize = 36;
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

		// grab the x and y values of the current viewport central point
		const centerX = figma.viewport.center.x;
		const centerY = figma.viewport.center.y;

		// create an array to store the elements
		const nodes = []

		// create the rectangle element
		const rect = figma.createRectangle()
		rect.resize(500, 500)
		// check if the user wanted the green, yellow or red styling
		if (msg.type === 'sticky-green') {
			rect.fills = [{ type: 'SOLID', color: {r: 0.435294118, g: 0.811764706, b: 0.592156863}, opacity: 0.5 }];
			rect.strokes = [{ blendMode: "NORMAL", color: {r: 0.396078431, g: 0.741176471, b: 0.541176471}, opacity: 0.4, type: "SOLID", visible: true }];
		}
		if (msg.type === 'sticky-yellow') {
			rect.fills = [{ type: 'SOLID', color: {r: 0.949019608, g: 0.788235294, b: 0.298039216},  opacity: 0.5 }];
			rect.strokes = [{ blendMode: "NORMAL", color: {r: 0.898039216, g: 0.749019608, b: 0.282352941}, opacity: 0.4, type: "SOLID", visible: true }];
		}
		if (msg.type === 'sticky-red') {
			rect.fills = [{ type: 'SOLID', color: {r: 0.921568627, g: 0.341176471, b: 0.341176471}, opacity: 0.5 }];
			rect.strokes = [{ blendMode: "NORMAL", color: {r: 0.721568627, g: 0.266666667, b: 0.266666667}, opacity: 0.2, type: "SOLID", visible: true }];
		}
		rect.strokeWeight = 10;
		rect.constraints = { horizontal: "SCALE", vertical: "SCALE" };
		nodes.push(rect)

		// create the type element
		const text = figma.createText();
		text.x = rect.x + 40;
		text.y = rect.y + 40;
		text.resize(420, 420);
		text.fontName = { family: "Roboto", style: "Regular" }
		text.fontSize = 36;
		text.paragraphSpacing = 20;
		text.lineHeight = {unit: 'PIXELS', value: 46};
		text.characters = "Enter Note Content...";
		text.fills = [{type: 'SOLID', color: {r: 0.2, g: 0.2, b: 0.2}}]
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
		rect.x = disc.x + 40;
		rect.y = disc.y;
		rect.resize(300, 60);
		rect.fills = [{ type: 'SOLID', color: {r: 0, g: 0, b: 0}, opacity: 1 }];
		rect.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
		rect.cornerRadius = 6;
		nodes.push(rect);

		// create the type for the content text
		const text = figma.createText();
		text.x = rect.x + 8;
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

}