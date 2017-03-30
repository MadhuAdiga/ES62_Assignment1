var apiDetail= {        // Create an object called apiDetail
	url: ("http://mytraining.edu/training"), // Base URL that remains constant on the URL tab
	someMethod () { console.log("Method is executed")}, // Some method is defined
	apiParam : "GET /tutorials/other/top-20-mysql-best-practices/ HTTP/1.1", // 4 more properties are defined
	Header : "Transfer-Encoding: chunked Date: Sat, 28 Nov 2009 04:36:25 GMT Server: LiteSpeed Connection: close X-Powered-By: W3 Total Cache/0.8 Pragma: public",
    methodType: "post",
	postData :  "POST /path/script.cgi HTTP/1.0  From: frog@jmarshall.com User-Agent: HTTPTool/1.0 Content-Type: application/x-www-form-urlencoded"	,		
}


function makeAjaxRequest(obj){ // Create a function makeAjaxRequest which takes in an object as an argument
var { baseUrl, method, apiParam2,headerVal,type, data } = obj; // Using the destructure assignment syntax to assign object values to function variables
$.ajax(baseUrl, method, apiParam2,headerVal,type, data ); 
}
