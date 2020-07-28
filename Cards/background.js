chrome.runtime.onMessage.addListener(notify);

function notify(message) {
  console.log(message.cardVar);
}