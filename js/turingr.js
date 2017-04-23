var turingr = {
    endpointdemo: "./services/turingrSample.json?q=",
    //endpoint: "./services/turingrSample.json?q=",
    endpoint: "http://turingr.com/api/company?token=" + "KEY" + "&secret=" + "SECRET",

    sendRequest: function(demo, restaurant, nextFunction) {
        if (demo)
            url = turingr.endpointdemo + "&profile=restaurant&company=" + restaurant + "&country=BE";
        else
            url = turingr.endpoint + "&profile=restaurant&company=" + restaurant + "&country=BE";
        request.newRequest(url, nextFunction);
    }
};
