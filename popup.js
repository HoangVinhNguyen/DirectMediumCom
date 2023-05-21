// window.addEventListener("DOMContentLoaded", function() {
//     chrome.runtime.sendMessage({type: 'getTabs'}, function(response) {
//         allTabs = response;
//         response.forEach((tab, index) => {
//             if (tab.active) {
//                 document.getElementById('listAutoDirect').innerText = tab.url;
//                 let url = tab.url.replace('google', 'medium0');
//                 chrome.runtime.sendMessage({type: 'redirect', redirect: url, id: tab.id}, function(response) {});
//             }
//         });
//     });
// });

// chrome.runtime.sendMessage({type: 'getTabs'}, function(response) {
//     allTabs = response;
//     response.forEach((tab, index) => {
//         if (tab.active) {
//             document.getElementById('listAutoDirect').innerText = tab.url;
//             let url = tab.url.replace('google', 'medium0');
//             chrome.runtime.sendMessage({type: 'redirect', redirect: url, id: tab.id}, function(response) {});
//         }
//     });
// });
