var googlePlaces = {
    endpointdemo: "./services/googlePlacesSample.json?q=",
    endpoint: "./services/getdata.php?q=",
    //	endpoint: "https://maps.googleapis.com/maps/api/place/textsearch/json?key=" + "KEY" + "&query=restaurants+in+",

    sendRequest: function(demo, city, nextFunction) {
        if (demo)
            url = googlePlaces.endpointdemo + city;
        else
            url = googlePlaces.endpoint + city;
        //console.log(url);
        request.newRequest(url, nextFunction);
    }
};
