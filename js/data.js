class Data {
    constructor() {
        this.recieved_data;
        this.num_datapoints;
        this.graph_loaded = false;
    }

    setData(input_data) {
        output.clearDisplay();
        this.recieved_data = input_data["data"];
        this.num_datapoints = this.recieved_data.length;
        for (let i = 0; i < this.num_datapoints; i++) {
            output.addRow(i);
            output.setRowData(i, this.recieved_data[i]);
        }
        graph.setData("volume_titrant", "pH", this.recieved_data);
        let calc_time = input_data["calc_time"];
        let display_calc_time = calc_time;
        if (calc_time == 0) {
            display_calc_time = "<1";
        }
        let response_time = timer.getNewestStored() - calc_time;
        timer.storeTimer();
        let page_update_time = timer.getNewestStored() - response_time;
        document.getElementById("info-display-calc-time").innerText = display_calc_time;
        document.getElementById("info-display-response-time").innerText = response_time;
        document.getElementById("info-display-pageupdate-time").innerText = page_update_time;
        document.getElementById("info-display-total-time").innerText = calc_time + response_time + page_update_time;
        setTimeout(function() {
            input.waiting = false;
        }, 2000);
    }
}