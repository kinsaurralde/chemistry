function sendRequest(url, target) {
    console.log("Sending request to:", url);
    timer.start();
    /* From http://youmightnotneedjquery.com/ */
    let request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            timer.storeTimer();
            document.getElementById("info-display-response-time").innerText = timer.getStored(timer.stored_time.length - 1);
            let data = JSON.parse(request.responseText);
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

function recieveAWSStrongAB(recieved_data) {
    console.log("Recieved Data:", recieved_data);
    data.setData(recieved_data);
}

function createRequest(input_data) {
    console.log("Creating request from:", input_data);
    let url = "https://myeav38ywg.execute-api.us-west-1.amazonaws.com/prod/?";
    let target;
    for (let name in input_data) {
        url += name + "=" + input_data[name] + "&";
    }
    if (input_data["type"] == "SASB" || input_data["type"] == "SBSA") {
        target = recieveAWSStrongAB;
    }
    url = url.substr(0, url.length - 1);
    let disaply_url = document.getElementById("info-display-request-url");
    disaply_url.href = url;
    disaply_url.innerText = url;
    sendRequest(url, target);
}