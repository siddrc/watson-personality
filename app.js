
var express = require('express');
var app = express();
var http = require('http').Server(app);
var cfenv = require("cfenv");

var appEnv = cfenv.getAppEnv();

http.listen(appEnv.port, appEnv.bind);

app.use(express.static(__dirname + '/public'));

app.listen(appEnv.port, '0.0.0.0', function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});



var PersonalityInsightsV2 = require('watson-developer-cloud/personality-insights/v2');

var personality_insights = new PersonalityInsightsV2({
  username: '1f0b45c8-8bdf-4382-b3bb-2035f9494aa9',
  password: '10LB4Tqvw430'
});

personality_insights.profile({
  text: "Orestes; so he said to the other gods: See now, how men lay blame upon us gods for what is after all noth- ing but their own folly. Look at Aegisthus; he must needs make love to Agamemnons wife unrighteously and then kill Agamemnon, though he knew it would be the death of him; for I sent Mercury to warn him not to do either of these things, inasmuch as Orestes would be sure to take his revenge when he grew up and wanted to return home. Mercury told him this in all good will but he would not lis- ten, and now he has paid for everything in full.Then Minerva said",

  language: 'en' },
  function (err, response) {
    if (err)
      console.log('error:', err);
    else
      var js = console.log(JSON.stringify(response, null, 2));
      //console.log(JSON.stringify(response, null, 2));
});
