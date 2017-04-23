document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.indexOf("demo") >= 0)
        apiLoader.init(true);
    else {
        apiLoader.init(false);
    }
});

var apiLoader = {
    apiLoader: 0,
    init: function(demo) {
        apiLoader.storage = localStorage;
        //console.log(apiLoader.storage.length);
        if (apiLoader.storage.length === 0) {
            localStorage.setItem(0, "Kortrijk");
            apiLoader.storage = localStorage;
        }
        googlePlaces.sendRequest(demo, apiLoader.storage[0], function(googlePlacesData) {
            //console.log(data);
            var restaurantList = document.getElementById("restaurantList");
            var results = googlePlacesData.results;

            for (var i = 0; i < results.length; i++) {
                var section = document.createElement("section");
                var a = document.createElement("a");
                var h1 = document.createElement("h1");
                var pina = document.createElement("p");
                var div = document.createElement("div");

                section.className = "restaurant";
                div.className = "collapsed";
                pina.className = "turnable straight";

                a.id = "restaurant" + i;

                h1.innerHTML = results[i].name;
                pina.innerHTML = ">";

                turingr.sendRequest(demo, results[i].name, function(turingrData) {
                    for (var j = 0; j < turingrData.data.length; j++) {
                        var divindiv = document.createElement("div");
                        var h2 = document.createElement("h2");
                        var p = document.createElement("p");

                        h2.innerHTML = turingrData.data[j].fullName;
                        p.innerHTML = turingrData.data[j].function;
                        p.innerHTML += "<br />" + turingrData.data[j].location;

                        divindiv.appendChild(h2);
                        divindiv.appendChild(p);
                        div.appendChild(divindiv);
                    }
                });

                a.appendChild(h1);
                a.appendChild(pina);
                section.appendChild(a);
                section.appendChild(div);
                restaurantList.appendChild(section);

                buttonManager.init("restaurant" + i, true);
            }
        });
        if (!demo) {
            var inputField = document.getElementById("search");
            inputField.addEventListener("change", function() {
                localStorage.removeItem(0);
                localStorage.setItem(0, inputField.value);
                apiLoader.changeCity(inputField.value);
            });
            inputField.value = apiLoader.storage[0];

            var searchbutton = document.getElementById("searchbutton");
            searchbutton.addEventListener("click", function() {
                localStorage.removeItem(0);
                localStorage.setItem(0, inputField.value);
                apiLoader.changeCity(inputField.value);
            });
        }
    },
    changeCity: function(newCity) {
        var restaurantList = document.getElementById("restaurantList");
        restaurantList.innerHTML = "";

        googlePlaces.sendRequest(false, newCity, function(googlePlacesData) {
            var results = googlePlacesData.results;
            for (var i = 0; i < results.length; i++) {
                var section = document.createElement("section");
                var a = document.createElement("a");
                var h1 = document.createElement("h1");
                var pina = document.createElement("p");
                var div = document.createElement("div");

                section.className = "restaurant";
                div.className = "collapsed";
                pina.className = "turnable straight";

                a.id = "restaurant" + i;
                a.href = "#";

                h1.innerHTML = results[i].name;
                pina.innerHTML = ">";

                turingr.sendRequest(false, results[i].name, function(turingrData) {
                    for (var j = 0; j < turingrData.data.length; j++) {
                        var divindiv = document.createElement("div");
                        var h2 = document.createElement("h2");
                        var p = document.createElement("p");

                        h2.innerHTML = turingrData.data[j].fullName;
                        p.innerHTML = turingrData.data[j].function;
                        p.innerHTML += "<br />" + turingrData.data[j].location;

                        divindiv.appendChild(h2);
                        divindiv.appendChild(p);
                        div.appendChild(divindiv);
                    }
                });

                a.appendChild(h1);
                a.appendChild(pina);
                section.appendChild(a);
                section.appendChild(div);
                restaurantList.appendChild(section);

                buttonManager.init("restaurant" + i, true);
            }
        });
    },
};
