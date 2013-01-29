chrome.webRequest.onCompleted.addListener(
  function(details) {
    chrome.tabs.getSelected(null, function(tab) {
	  chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
	});
   },{
    urls:["*://sugarcrm.atlassian.net/*"],
    types:["xmlhttprequest"]
  });