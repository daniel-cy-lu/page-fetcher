const request = require('request');
const fs = require('fs');
let arg = process.argv.slice(2);
let info;


  request(arg[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  info = error + response + response.statusCode + body;

  fs.writeFile(arg[1], info, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })
});