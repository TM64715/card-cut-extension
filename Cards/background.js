chrome.runtime.onMessage.addListener(notify);

function notify(message) {
  console.log(message.cardVar);
}


chrome.identity.getAuthToken({interactive: true}, function(token) {
  console.log('got the token', token);
})

const API_KEY = 'AIzaSyCwmCj-bS5PPxqFKYJhvgE8Pmj5YINX1rM';
const DISCOVERY_DOCS = ["https://docs.googleapis.com/$discovery/rest?version=v1"];

function onGAPILoad() {
  gapi.client.init({
    // Don't pass client nor scope as these will init auth2, which we don't want
    apiKey: API_KEY,
    discoveryDocs: DISCOVERY_DOCS,
  }).then(function () {
    console.log('gapi initialized')
  }, function(error) {
    console.log('error', error)
  });
}




  gapi.client.docs.documents.get({
  documentId: '195j9eDD3ccgjQRttHhJPymLJUCOUjs-jmwTrekvdjFE'
}).then(function(response) {
  var doc = response.result;
  var title = doc.title;
  console.log(title)
}, function(response) {
});