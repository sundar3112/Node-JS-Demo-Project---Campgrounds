var request = require("request");
console.log("Weather in paris is...")
request('http://api.apixu.com/v1/current.json?key=165e4cf43dee47fc9bd143525192207&q=Paris',function(error,response,body)
{
    if(!error && response.statusCode==200)
    {
        var parsedData = JSON.parse(body);
        console.log(parsedData["current"]["temp_c"] + " degrees");
    }
});
