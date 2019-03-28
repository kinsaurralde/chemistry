function sendRequest(url, target) {
    console.log("Sending request to:", url);
    timer.start();
    /* From http://youmightnotneedjquery.com/ */
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            timer.storeTimer();
            document.getElementById("info-display-response-time").innerText = timer.getStored(timer.stored_time.length - 1);
            var data = JSON.parse(request.responseText);
            target(data);
        } else {
            // We reached our target server, but it returned an error
            alert("We reached our target server, but it returned an error");
        }
    };

    request.onerror = function () {
        // There was a connection error of some sort
        alert("There was a connection error of some sort");
    };

    request.send();
    /* */
}

function recieveAWSStrongAB(data) {
    console.log("Recieved Data:", data);
    var response_time = timer.getElapsed();
    console.log(response_time);
}

function createRequest(input_data) {
    console.log("Creating request from:", input_data);
    var url = "https://myeav38ywg.execute-api.us-west-1.amazonaws.com/prod/?";
    var target;
    for (var name in input_data) {
        url += name + "=" + input_data[name] + "&";
    }
    if (input_data["type"] == "SASB" || input_data["type"] == "SBSA") {
        target = recieveAWSStrongAB;
    }
    var disaply_url = document.getElementById("info-display-request-url");
    disaply_url.href = url;
    disaply_url.innerText = url;
    sendRequest(url, target);
}