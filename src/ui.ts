import './ui.css'
import * as mixpanel from 'mixpanel-figma'
mixpanel.init("d62616672bc5fbdc87eac6a549c96acb", {
  disable_cookie: true,
  disable_persistence: true
})


// TITLE AND FOOTNOTE
//--------------------------------------------------------------

// document.getElementById('both-small').onclick = () => {
//   parent.postMessage({ pluginMessage: { type: 'both-small' } }, '*')
// }
// document.getElementById('both-medium').onclick = () => {
//   parent.postMessage({ pluginMessage: { type: 'both-medium' } }, '*')
// }
// document.getElementById('both-large').onclick = () => {
//   parent.postMessage({ pluginMessage: { type: 'both-large' } }, '*')
// }

// TITLES
//--------------------------------------------------------------

document.getElementById('title-small').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'title-small' } }, '*')
}
document.getElementById('title-medium').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'title-medium' } }, '*')
}
document.getElementById('title-large').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'title-large' } }, '*')
}

// FOOTNOTE
//--------------------------------------------------------------

document.getElementById('footnote-small').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'footnote-small' } }, '*')
}
document.getElementById('footnote-medium').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'footnote-medium' } }, '*')
}
document.getElementById('footnote-large').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'footnote-large' } }, '*')
}

// STICKY NOTES
//--------------------------------------------------------------

document.getElementById('sticky-green').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'sticky-green' } }, '*')
}
document.getElementById('sticky-yellow').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'sticky-yellow' } }, '*')
}
document.getElementById('sticky-red').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'sticky-red' } }, '*')
}

// ANNOTATIONS
//--------------------------------------------------------------

document.getElementById('annotation-left').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'annotation-left' } }, '*')
}
document.getElementById('annotation-right').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'annotation-right' } }, '*')
}
// document.getElementById('annotation-split').onclick = () => {
//   parent.postMessage({ pluginMessage: { type: 'annotation-split' } }, '*')
// }

// DIVIDERS
//--------------------------------------------------------------

// document.getElementById('divider-thick').onclick = () => {
//   parent.postMessage({ pluginMessage: { type: 'divider-thick' } }, '*')
// }
// document.getElementById('divider-thin').onclick = () => {
//   parent.postMessage({ pluginMessage: { type: 'divider-thin' } }, '*')
// }


onmessage = (e) => {
  const message = e.data.pluginMessage;
  console.log(message);

  // track user info
  if(message.type == "identify"){
    mixpanel.identify(message.userID);
    mixpanel.people.set({ "Name": message.username });
    mixpanel.track("Plugin Started");
  }

  // track events
  if(message.type == "action") {
    if(message.tool == "Sticky Note") {
      console.log("Sticky");
      mixpanel.track("Object Added", {
        "Type": message.tool,
        "Color": message.color
      });
    } else if(message.tool == "Annotation") {
      console.log("Annotation");
      mixpanel.track("Object Added", {
        "Type": message.tool,
        "Position": message.position
      });
    } else {
      console.log("Other");
      mixpanel.track("Object Added", {
        "Type": message.tool,
        "Size": message.size,
        "Count": message.count
      });
    }
  }
  
  // track warnings
  if(message.type == "warning") {
    if(message.warning === 'no-layers') {
      alert("No layers have been selected. Please select a text layer and try again.");
    } else {
      alert(message.warning);
    }
	}
}
