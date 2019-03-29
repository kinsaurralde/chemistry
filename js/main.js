function pageLoad() {
    input = new Input();
    output = new Output();
    data = new Data();
    timer = new Timer();
    setTimeout(function() {
        document.getElementById("load-plotly").src = "plotly/minified.js";
    },10)
}

function plotlyLoaded() {
    document.getElementById("graph-loading-message").innerHTML = "";
    graph = new Graph();
}

function scrollToBottom() {
    let element = document.getElementById("info");
    element.scrollIntoView({behavior: "smooth"});
}