# webclient
node js equivalent of C# WebClient class. Provides dummy download operations over http and https.

##Usage examples
###downloadString
```js
const webclient = require('csharp-webclient')

var wc = webclient.createWebClient();
wc.downloadString({
	url: 'https://raw.githubusercontent.com/AkshayVats/webclient/master/README.md',
	done: function(msg){
	    console.log(msg)
	},
	error: function(obj){
	    console.log('[Error]' + obj)
	}
});
```
###downloadFile
```js
const webclient = require('csharp-webclient')

var wc = webclient.createWebClient();
wc.downloadFile({
    url: 'https://raw.githubusercontent.com/AkshayVats/webclient/master/README.md',
    path: 'temp.txt',
    done: function(){
        console.log('done!')
    },
    error: function(obj){
        console.log('[Error]' + obj)
    }
});
```