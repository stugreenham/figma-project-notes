import './ui.css'

document.getElementById('both').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'both' } }, '*')
}

document.getElementById('title').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'title' } }, '*')
}

document.getElementById('footnote').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'footnote' } }, '*')
}

document.getElementById('sticky-green').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'sticky-green' } }, '*')
}

document.getElementById('sticky-yellow').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'sticky-yellow' } }, '*')
}

document.getElementById('sticky-red').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'sticky-red' } }, '*')
}

document.getElementById('annotation').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'annotation' } }, '*')
}

// Listen out for messages back from the sandbox
onmessage = e => {
	//@ts-ignore
	var msg = event.data.pluginMessage;
	if (msg === "no-layers") {
		alert("No layers have been selected. Please select a text layer and try again.");
	} else {
		alert(msg);
		console.log(msg);
	}
};