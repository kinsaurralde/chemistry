class Output {
    constructor() {
        this.container = document.getElementById("output-display-table-data");
        this.table = document.getElementById("output-display-table");
        this.rows = [];
    }

    clearDisplay() {
        this.rows = [];
        while (this.table.rows.length > 1) {
            this.table.deleteRow(1);
        }
    }

    addRow(id) {
        let row = this.table.insertRow();
        row.className = "output-display-table-row";
        let cells = [];
        for (let i = 0; i < 9; i++) {
            cells.push(row.insertCell());
            cells[i].innerHTML = "---";
        }
        cells[0].innerHTML = id;
        cells[3].className = "datapoint-acid";
        cells[4].className = "datapoint-acid";
        cells[5].className = "datapoint-base";
        cells[6].className = "datapoint-base";
        cells[8].className = "datapoint-ph";
        this.rows.push(cells);
    }

    setRowData(i, data) {
        this.rows[i][0].innerHTML = data["id"];
        this.rows[i][1].innerHTML = data["moles_titrant"];
        this.rows[i][2].innerHTML = data["volume_titrant"];
        this.rows[i][3].innerHTML = data["moles_acid"];
        this.rows[i][4].innerHTML = data["concentration_acid"];
        this.rows[i][5].innerHTML = data["moles_base"];
        this.rows[i][6].innerHTML = data["concentration_base"];
        this.rows[i][7].innerHTML = data["total_volume"];
        this.rows[i][8].innerHTML = data["pH"];
        this.setpHColor(this.rows[i][8], data["pH"]);
    }

    setpHColor(cell, pH) {
        let r = 255 - (pH * 18);
        let g = 0;
        let b = pH * 18;
        cell.style.color = "rgb("+r+","+g+","+b+")";
    }
}