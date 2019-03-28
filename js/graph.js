class Graph {
    constructor() {
        this.graph = document.getElementById("graph-main");
        this.x = [];
        this.y = [];
        setTimeout(function() {
            graph.drawGraph();
        }, 10);
    }

    resetGraph() {
        Plotly.purge(this.graph);
    }

    resetPoints() {
        this.resetGraph();
        this.x = [];
        this.y = [];
        this.drawGraph();
    }

    addPoint(x, y) {
        this.x.push(x);
        this.y.push(y);
    }

    drawGraph() {
        this.resetGraph();
        let data = [{
            x: this.x,
            y: this.y,
            mode: "lines+markers",
            marker: {
                symbol: "circle",
                color: 'rgb(150, 0, 200)',
                size: 2,
            },
            line: {
                color: 'rgb(0,200,30)',
            }
        }];
        let layout = {
            margin: {
                t: 50,
                b: 50
            },
            title: {
                text: "Titration Curve",
            },
            xaxis: {
                title: {
                    text: 'Volume Titrant Added (l)',
                    font: {
                        size: 18,
                        color: '#FF5100'
                    }
                },
            },
            yaxis: {
                title: {
                    text: 'pH',
                    font: {
                        size: 18,
                        color: '#FF5100'
                    }
                }
            },
            showLassoSelect: false,
        };
        Plotly.plot(this.graph, data, layout, { responsive: true });
    }

    setData(x_name, y_name, data) {
        //console.log("Data:",data);
        this.resetPoints();
        for (let i = 0; i < data.length; i++) {
            this.addPoint(data[i][x_name], data[i][y_name]);
        }
        this.drawGraph();
    }
}