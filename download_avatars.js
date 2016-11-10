var request = require('request');

console.log('\nWelcome to the GitHub Avatar Downloader!\n');

function getRepoContributors(repoOwner, repoName, cb) {

  var GITHUB_USER = "choconnie";
  var GITHUB_TOKEN = "3e2d293a9abc0205cfca3c253bac389eae699571";

  var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  console.log("< URL >\n" + requestURL + "\n");

  var option = {
    headers: {'user-agent': 'GitHub Avatar Downloader'}
  };
  var body = '';

  request.get(requestURL, option)
  .on('error', function(err) {
    throw err;
  })
  .on('response', function(response) {
    console.log('Response Status Code: ', response.statusCode + '\n');
    response.setEncoding('utf8');
    response.on('data', function(data) {
      body = body + data;
    });
  })
  .on('end', function() {
    console.log("Body: " + body + '\n');
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors: ", err);
  console.log("Result: ", result);
});