class Input {
    constructor() {
        this.input_data = {};
        this.input_is_valid = {};
        this.checkAll();
    }

    updateTitrandTitrantDisplay(type) {
        let titrand_targets = document.getElementsByClassName("input-display-titrand");
        let titrant_targets = document.getElementsByClassName("input-display-titrant");
        let titrand;
        let titrant;
        if (type == "SASB") {
            titrand = "Acid";
            titrant = "Base";
        } else if (type == "SBSA") {
            titrand = "Base";
            titrant = "Acid";
        }
        for (let i = 0; i < titrand_targets.length; i++) {
            titrand_targets[i].innerText = titrand;
            titrant_targets[i].innerText = titrant;
        }
    }


    /* Update from page */

    checkAll() {
        this.checkType();
        this.checkNumCycles();
        this.checkTitrandConcentration();
        this.checkTitrandVolume();
        this.checkTitrantConcentration();
        this.checkTitrantVolume();
    }

    checkType() {
        let target = document.getElementById("input-type");
        this.input_data["type"] = target.value;
        this.updateTitrandTitrantDisplay(target.value);
        this.input_is_valid["type"] = true;
        console.log("Updating input-type:", this.input_data.type);
    }

    checkNumCycles() {
        let target = document.getElementById("input-num-cycles");
        this.input_data["num_cycles"] = target.value;
        this.input_is_valid["num_cycles"] = this.validateInputNumber(target.value, 0, 10000, true);
        console.log("Updating input-num-cycles:", this.input_data.num_cycles, this.input_is_valid.num_cycles);
    }

    checkTitrandConcentration() {
        let target = document.getElementById("input-titrand-concentration");
        this.input_data["titrand_conc"] = target.value;
        this.input_is_valid["titrand_conc"] = this.validateInputNumber(target.value, 0, 6, false);
        console.log("Updating input-titrand_conc:", this.input_data.titrand_conc, this.input_is_valid.titrand_conc);
    }

    checkTitrandVolume() {
        let target = document.getElementById("input-titrand-volume");
        this.input_data["titrand_vol"] = target.value;
        this.input_is_valid["titrand_vol"] = this.validateInputNumber(target.value, 0, 10000, false);
        console.log("Updating input-titrand_vol:", this.input_data.titrand_vol, this.input_is_valid.titrand_vol);
    }

    checkTitrantConcentration() {
        let target = document.getElementById("input-titrant-concentration");
        this.input_data["titrant_conc"] = target.value;
        this.input_is_valid["titrant_conc"] = this.validateInputNumber(target.value, 0, 6, false);
        console.log("Updating input-titrant_conc:", this.input_data.titrant_conc, this.input_is_valid.titrant_conc);
    }

    checkTitrantVolume() {
        let target = document.getElementById("input-titrant-volume");
        this.input_data["titrant_vol"] = target.value;
        this.input_is_valid["titrant_vol"] = this.validateInputNumber(target.value, 0, 10000, false);
        console.log("Updating input-titrant_vol:", this.input_data.titrant_vol, this.input_is_valid.titrant_vol);
    }

    checkCalculate() {
        console.log("Preparing to calcualte");
        this.checkAll();
        for (let value in this.input_is_valid) {
            if (!this.input_is_valid[value]) {
                alert("The value of " + value + " is not valid");
                return;
            }
        }
        createRequest(this.input_data);
    }

    validateInputNumber(number, min, max, is_integer) {
        let is_valid = true;
        if (number < min || number > max) {   // check bounds
            is_valid = false;
        }
        if (is_integer) {   // check if number is integer
            if (Math.floor(number) != number) {
                is_valid = false;
            }
        }
        if (number == "" || number == " " || number == null) {  // check if number empty
            is_valid = false;
        }
        return is_valid;
    }
}