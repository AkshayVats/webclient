# webclient
node js equivalent of C# WebClient class. Provides dummy download operations over http and https.

##Usage examples
###downloadString
```js
const webclient = require('csharp-webclient')
var wc = webclient.createWebClient();
wc.downloadString({
url: url,
done: function(msg){
    console.log(msg)
},
error: function(obj){
    console.log('[Error]' + obj)
}
});
```