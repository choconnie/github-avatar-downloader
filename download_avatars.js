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
    console.log("< avatar_url >\n");

    body = JSON.parse(body);
    body.forEach(function(key) {
      console.log(key.avatar_url);
    });
  });
}

function downloadImageByURL(url, filePath) {
  var fs = require('fs');

  request.get(url)
  .on('error', function(err) {
    throw err;
  })
  .on('response', function(response) {
    console.log('Response Status Message: ', response.statusMessage);
    console.log('Downloading image...');
  })
  .pipe(fs.createWriteStream(filePath))
  .on('finish', function(response) {
    console.log('Downloaded complete.');
  });
}

// getRepoContributors("jquery", "jquery", function(err, result) {
//   console.log("Errors: ", err);
//   console.log("Result: ", result);
// });

downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "./kvirani.jpg");