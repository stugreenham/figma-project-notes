import './ui.css'
import * as mixpanel from 'mixpanel-figma'
mixpanel.init("d62616672bc5fbdc87eac6a549c96acb", {
  disable_cookie: true,
  disable_persistence: true
})

document.getElementById('both').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'both' } }, '*')
  mixpanel.track("Object Added", {"Type": "Title and Footnote"});
}

document.getElementById('title').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'title' } }, '*')
  mixpanel.track("Object Added", {"Type": "Title"});
}

document.getElementById('footnote').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'footnote' } }, '*')
  mixpanel.track("Object Added", {"Type": "Footnote"});
}

document.getElementById('sticky-green').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'sticky-green' } }, '*')
  mixpanel.track("Object Added", {"Type": "Sticky Note", "Color": "Green"});
}

document.getElementById('sticky-yellow').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'sticky-yellow' } }, '*')
  mixpanel.track("Object Added", {"Type": "Sticky Note", "Color": "Yellow"});
}

document.getElementById('sticky-red').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'sticky-red' } }, '*')
  mixpanel.track("Object Added", {"Type": "Sticky Note", "Color": "Red"});
}

document.getElementById('annotation').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'annotation' } }, '*')
  mixpanel.track("Object Added", {"Type": "Annotation", "Position": "Left"});
}

document.getElementById('annotation-alt').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'annotation-alt' } }, '*')
  mixpanel.track("Object Added", {"Type": "Annotation", "Position": "Right"});
}


onmessage = (e) => {
  const message = e.data.pluginMessage;
  if(message.type == "identify"){
       mixpanel.identify(message.userID);
       mixpanel.people.set({ "Name": message.username });
       mixpanel.track("Plugin Started");
  }
  if(message.type == "warning") {
    if(message.warning === 'no-layers') {
      alert("No layers have been selected. Please select a text layer and try again.");
    } else {
      alert(message.warning);
    }
	}
}
