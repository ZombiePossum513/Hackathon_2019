var allLinks = [];
var visibleLinks = [];

// Display all visible links.
function showLinks() {
  var listOfLinks = document.getElementById('links');
  while (listOfLinks.children.length > 1) {
    listOfLinks.removeChild(listOfLinks.children[listOfLinks.children.length - 1])
  }
  for (var i = 0; i < visibleLinks.length; ++i) {
    var row = document.createElement('tr');
    var col0 = document.createElement('td');
    col0.innerText = visibleLinks[i];
    col0.style.whiteSpace = 'nowrap';
    row.appendChild(col0);
    listOfLinks.appendChild(row);
  }
 }



// Add links to allLinks and visibleLinks, sort and show them.  send_links.js is
// injected into all frames of the active tab, so this listener may be called
// multiple times.
chrome.extension.onMessage.addListener(function(links) {
  for (var index in links) {
    allLinks.push(links[index]);
  }
  allLinks.sort();
  visibleLinks = allLinks;
  //console.log(links);
  showLinks();
});

// Set up event handlers and inject send_links.js into all frames in the active
// tab.
window.onload = function() {


  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({active: true, windowId: currentWindow.id},
                      function(activeTabs) {
      chrome.tabs.executeScript(
        activeTabs[0].id, {file: 'send_links.js', allFrames: true});
    });
  });
};