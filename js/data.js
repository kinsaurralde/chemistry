class Data {
    constructor() {
        this.recieved_data;
        this.num_datapoints;
    }

    setData(input_data) {
        output.clearDisplay();
        this.recieved_data = input_data["data"];
        this.num_datapoints = this.recieved_data.length;
        for (let i = 0; i < this.num_datapoints; i++) {
            output.addRow(i);
            output.setRowData(i, this.recieved_data[i]);
        }
    }
}

class DataPoint {
    constructor(input_data) {
        //console.log(in)
    }
}