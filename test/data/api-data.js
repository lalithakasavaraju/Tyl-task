var request = require('sync-request');

var res= request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments');
var contactUsDetails = JSON.parse(res.getBody().toString('utf8'));

contactUsDetails.forEach(function (contactDetail) {
    

})