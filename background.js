// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    
//     if (request.type === 'getTabs') {
//         chrome.tabs.query({}, function(tabs) {
//             sendResponse(tabs);
//         });
//     }

//     if (request.type === 'redirect') {
//         chrome.tabs.update(request.id, {url: request.redirect});
//     }
//     return true;
// });