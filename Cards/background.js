chrome.runtime.onMessage.addListener(notify);

function notify(message) {
  console.log(message.cardVar);
}

chrome.identity.getAuthToken({interactive: true}, function(token) {
  console.log('got the token', token);
})