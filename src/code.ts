figma.showUI(__html__, { width: 190, height: 292 });

figma.ui.onmessage = async(msg) => {

	await figma.loadFontAsync({ family: "Roboto", style: "Regular" });
	await figma.loadFontAsync({ family: "Roboto", style: "Bold" });


	// FRAME TITLE
	if (msg.type === 'title' || msg.type === 'both') {

		// Check if selection is present
		if (figma.currentPage.selection.length === 0) {

			// Nothing selected so show an error
			figma.ui.postMessage("no-layers");

		} else {

			// output the current selection
			for (const node of figma.currentPage.selection) {
				//console.log(node)

				// set values from the current frame selected
				const selectionX = node.x
				const selectionY = node.y
				const selectionWidth = node.width
				const selectionName = node.name

				// create an array to store the elements
				const nodes = []

				// line element
				const line = figma.createLine()
				line.x = selectionX
				line.y = selectionY - 100
				line.strokeWeight = 4
				line.resize(selectionWidth, 0)
				line.strokes = [{type: 'SOLID', color: {r: 0.654901961, g: 0.682352941, b: 0.709803922}}] // divide standard rgb values by 255
				line.opacity = 0.6
				nodes.push(line)

				// type element
				const text = figma.createText();
				text.x = selectionX;
				text.y = line.y - 130;
				text.resize(selectionWidth, 70);
				text.fontSize = 70;
				text.letterSpacing = {unit: 'PIXELS', value: -1};
				var textChars = "Web • Frame Title";
				text.characters = textChars;
				text.textAlignVertical = "BOTTOM";
				text.textAutoResize = "HEIGHT";
				var textBreak = textChars.indexOf("•") + 1; // get the char number where the • appears and add 1
				var textLen = textChars.length; // get the total char count
				text.setRangeFontName(textBreak, textLen, { family: "Roboto", style: "Bold" } );
				nodes.push(text);

				// group nodes and append to current page
				const group = figma.group(nodes, figma.currentPage);
				group.name = selectionName + '-title';
				group.expanded = false;
				figma.currentPage.appendChild(group);

			}

		}

	}


	// FRAME FOOTNOTE
	if (msg.type === 'footnote' || msg.type === 'both') {

		// Check if selection is present
		if (figma.currentPage.selection.length === 0) {

			// Nothing selected so show an error
			figma.ui.postMessage("no-layers");

		} else {

			// output the current selection
			for (const node of figma.currentPage.selection) {
				//console.log(node)

				// set values from the current frame selected
				const selectionX = node.x
				const selectionY = node.y
				const selectionWidth = node.width
				const selectionHeight = node.height
				const selectionName = node.name

				// create an array to store the elements
				const nodes = []

				// type element
				const text = figma.createText();
				text.x = selectionX;
				text.y = selectionY + selectionHeight + 50;
				text.resize(selectionWidth, 52);
				text.fontSize = 36;
				//text.letterSpacing = {unit: 'PIXELS', value: -1};
				text.characters = "Enter your description or notes here...";
				text.textAlignVertical = "TOP";
				text.textAutoResize = "HEIGHT";
				text.fills = [{type: 'SOLID', color: {r: 0.074509804, g: 0.160784314, b: 0.247058824}}] // divide standard rgb values by 255
				text.opacity = 0.4
				nodes.push(text);

				// group nodes and append to current page
				const group = figma.group(nodes, figma.currentPage);
				group.name = selectionName + '-description';
				group.expanded = false;
				figma.currentPage.appendChild(group);

			}

		}

	}


	// STICKY NOTES
	if (msg.type === 'sticky-green' || msg.type === 'sticky-yellow' || msg.type === 'sticky-red') {

		// create an array to store the elements
		const nodes = []

		// rect element
		const rect = figma.createRectangle()
		rect.resize(500, 500)
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

		// type element
		const text = figma.createText();
		text.x = rect.x + 40;
		text.y = rect.y + 40;
		text.resize(420, 420);
		text.fontSize = 36;
		text.paragraphSpacing = 20;
		text.lineHeight = {unit: 'PIXELS', value: 46};
		text.characters = "Enter Note Content...";
		text.fills = [{type: 'SOLID', color: {r: 0.2, g: 0.2, b: 0.2}}] // divide standard rgb values by 255
		text.textAlignVertical = "TOP";
		text.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
		nodes.push(text);

		// group nodes and append to current page
		const frame = figma.createFrame();
		frame.resize(500, 500);
		frame.appendChild(rect);
		frame.appendChild(text);
		frame.name = "Sticky Note"
		figma.currentPage.appendChild(frame);


		//figma.viewport.scrollAndZoomIntoView(nodes)
		//figma.viewport.zoom = 0.5

	}

	//figma.closePlugin()
}