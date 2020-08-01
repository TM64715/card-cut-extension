
chrome.identity.getAuthToken({interactive: true}, function(token) {
  console.log(token);
});

const API_KEY = 'AIzaSyBrDAEr8faW9JEyAvTfJaoZgPl86Z21Ugo';
const DISCOVERY_DOCS = ["https://docs.googleapis.com/$discovery/rest?version=v1"];
const DOCUMENT_ID = '19hcDl5W8E8QjlfF2ZY1-SQ_F6khdAj2L_o91MnPz2Qo';
const SPREADSHEET_TAB_NAME = 'main';

function onGAPILoad() {
  gapi.client.init({
    // Don't pass client nor scope as these will init auth2, which we don't want
    apiKey: API_KEY,
    discoveryDocs: DISCOVERY_DOCS,
  }).then(function () {
    console.log('gapi initialized')
    chrome.identity.getAuthToken({interactive: true}, function(token) {
      gapi.auth.setToken({
        'access_token': token,
      });
    })
    function makeApiCall() {
      var updateObject = {
        documentId: '1iELp-ojEgsjHEMBbMjD7ScReuktbah_rzDLYqeb7ac0',
        resource: {
          requests: [{
            insertText: {
              text: "Inserted Test",
              location: {
                index: 1, // Modified
              },
            },
          }],
        },
      };
      gapi.client.docs.documents.batchUpdate(updateObject)
      .then(function(res) { // Modified
        console.log(res);
      },function(err) {
        console.error(err);
      });
    }
    makeApiCall();    
  }, function(error) {
    console.log('error', error)
  });
}


function makeApiCall() {
  var updateObject = {
    documentId: '1iELp-ojEgsjHEMBbMjD7ScReuktbah_rzDLYqeb7ac0',
    resource: {
      requests: [{
        insertText: {
          text: "Inserted Test",
          location: {
            index: 1, // Modified
          },
        },
      }],
    },
  };
  gapi.client.docs.documents.batchUpdate(updateObject)
  .then(function(res) { // Modified
    console.log(res);
  },function(err) {
    console.error(err);
  });
}

