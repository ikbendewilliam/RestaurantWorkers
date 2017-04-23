var request = {
    newRequest: function(url, nextFunction, method) {
        var result;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            //console.log(this.responseText);
            if (this.readyState == 4 && this.status == 200) {
                result = JSON.parse(this.responseText);
                nextFunction(result);
            }
        };

        xmlhttp.open(method == "POST" ? "POST" : "GET", url, false);
        xmlhttp.send();
    },

    // The same, but in ajax
    /*newRequest: function(endpoint, nextFunction, method) {
		console.log(endpoint);
		method = method == "POST" ? "POST" : "GET";
        $.ajax({
            type: method,
            url: endpoint,
            success: function(data) {

					console.log(data);
	                result = JSON.parse(data);
					console.log(result);
	                nextFunction(result);

            },
			error: function(err) {
				console.log("An error occured: " + err.status + " " + err.statusText);
			}
        });
    }*/
};
