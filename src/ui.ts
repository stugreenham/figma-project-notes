import * as mixpanel from 'mixpanel-figma'
mixpanel.init("d62616672bc5fbdc87eac6a549c96acb", {
  disable_cookie: true,
  disable_persistence: true
})

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

document.getElementById('annotation-alt').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'annotation-alt' } }, '*')
}


onmessage = (e) => {
  const message = e.data.pluginMessage;
  if(message.type == "identify"){
       mixpanel.identify(message.userID);
       mixpanel.people.set({ "Name": message.username });
  }
  if(message.type == "warning") {
    if(message.warning === 'no-layers') {
      alert("No layers have been selected. Please select a text layer and try again.");
    } else {
      alert(message.warning);
    }
	}
}
