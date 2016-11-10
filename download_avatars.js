var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {

  var GITHUB_USER = "choconnie";
  var GITHUB_TOKEN = "3e2d293a9abc0205cfca3c253bac389eae699571";

  var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  console.log(requestURL);
}

// function printResult(err, result) {
//   console.log("Errors: ", err);
//   console.log("Result: ", result);
// }

// var repoInfo = {
//   repoOwner: "jquery",
//   repoName: "jquery"
// };

// getRepoContributors(repoInfo.repoOwner, repoInfo.repoName, printResult);

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors: ", err);
  console.log("Result: ", result);
});