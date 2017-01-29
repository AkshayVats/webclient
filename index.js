'use strict'

const http = require('http')
const https = require('https')

function webclient() {
  
}
webclient.prototype.downloadString = function(opts) {
	var response = "";
	download(opts.url, {
		data: function(chunk) {
			response += chunk;
		},
		end: function() {
			opts.done(response);
		},
		error: function(obj) {
			opts.error(obj);
		}
	});
}

function download(url, cb) {
    var http_or_https = http;
    if (/^https:\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(url)) {
        http_or_https = https;
    }
    http_or_https.get(url, function(response) {
        var headers = JSON.stringify(response.headers);
        switch(response.statusCode) {
            case 200:
                response.on('data', function(chunk){
                    cb.data(chunk);
                }).on('end', function(){
                    cb.end();
                });
                break;
            case 301:
            case 302:
            case 303:
            case 307:
                download(response.headers.location, cb);
                break;
            default:
                cb.error(new Error('Server responded with status code ' + response.statusCode));
        }

    })
    .on('error', function(err) {
        cb.error(err);
    });
}

exports.createWebClient = () => {
	return new webclient();
}