chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    jQuery('a.external-link:not([target=_blank])').attr('target','_blank');
  });