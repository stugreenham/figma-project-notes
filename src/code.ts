figma.showUI(__html__, { width: 180, height: 384 });
figma.ui.postMessage({
	// post back the user data to the ui for mixpanel
	type: 'identify', 
	userID: figma.currentUser.id, 
	username: figma.currentUser.name
});

figma.ui.onmessage = async(msg) => {

	await figma.loadFontAsync({ family: "Roboto", style: "Regular" });
	await figma.loadFontAsync({ family: "Roboto", style: "Bold" });
	
	// TITLE
	//-------------------------------

	if (msg.type === 'title' || msg.type === 'both') {

		// First check is the user has something selected
		if (figma.currentPage.selection.length === 0) {

			// if nothing is selected, show an error
			figma.ui.postMessage({type: 'warning', warning: "no-layers"});

		} else {

			// if something is selected, build the components

			// post mixpanel event
			var toolType;
			if (msg.type === 'both') { toolType = "Title and Footnote"; } else { toolType = "Title"; }
			figma.ui.postMessage({
				type: 'action', 
				tool: toolType, 
				count: figma.currentPage.selection.length
			});

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
				line.strokes = [{type: 'SOLID', color: {r: 0.768627451, g: 0.768627451, b: 0.768627451}}];
				line.opacity = 0.6;
				nodes.push(line);

				// create the type element
				const text = figma.createText();
				text.x = selectionX;
				text.y = line.y - 95; // set the types y value to -75px from the line's y value
				text.resize(selectionWidth, 50);
				//text.fontName = { family: "Roboto", style: "Regular" }
				text.fontName = { family: "Roboto", style: "Bold" }
				text.fontSize = 50;
				text.letterSpacing = {unit: 'PIXELS', value: -1};
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
      figma.ui.postMessage({type: 'warning', warning: "no-layers"});

		} else {

			// if something is selected, build the components

			// post mixpanel event
			if (msg.type != 'both') {
				figma.ui.postMessage({
					type: 'action', 
					tool: "Footnote", 
					count: figma.currentPage.selection.length
				});
			}

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
				text.y = selectionY + selectionHeight + 60; // set the types y value to 50px below the selection
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

	if (msg.type === 'annotation-alt') {

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
		//console.log(annotationCount);

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


}