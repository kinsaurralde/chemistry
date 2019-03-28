class Input {
    constructor() {
        this.input_data = {};
        this.input_is_valid = {};
        this.checkAll();
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
        var target = document.getElementById("input-type");
        this.input_data["type"] = target.value;
        this.input_is_valid["type"] = true;
        console.log("Updating input-type:", this.input_data.type);
    }

    checkNumCycles() {
        var target = document.getElementById("input-num-cycles");
        this.input_data["num_cycles"] = target.value;
        this.input_is_valid["num_cycles"] = this.validateInputNumber(target.value, 0, 10000, true);
        console.log("Updating input-num-cycles:", this.input_data.num_cycles, this.input_is_valid.num_cycles);
    }

    checkTitrandConcentration() {
        var target = document.getElementById("input-titrand-concentration");
        this.input_data["titrand_conc"] = target.value;
        this.input_is_valid["titrand_conc"] = this.validateInputNumber(target.value, 0, 6, false);
        console.log("Updating input-titrand_conc:", this.input_data.titrand_conc, this.input_is_valid.titrand_conc);
    }

    checkTitrandVolume() {
        var target = document.getElementById("input-titrand-volume");
        this.input_data["titrand_vol"] = target.value;
        this.input_is_valid["titrand_vol"] = this.validateInputNumber(target.value, 0, 10000, false);
        console.log("Updating input-titrand_vol:", this.input_data.titrand_vol, this.input_is_valid.titrand_vol);
    }

    checkTitrantConcentration() {
        var target = document.getElementById("input-titrant-concentration");
        this.input_data["titrant_conc"] = target.value;
        this.input_is_valid["titrant_conc"] = this.validateInputNumber(target.value, 0, 6, false);
        console.log("Updating input-titrant_conc:", this.input_data.titrant_conc, this.input_is_valid.titrant_conc);
    }

    checkTitrantVolume() {
        var target = document.getElementById("input-titrant-volume");
        this.input_data["titrant_vol"] = target.value;
        this.input_is_valid["titrant_vol"] = this.validateInputNumber(target.value, 0, 10000, false);
        console.log("Updating input-titrant_vol:", this.input_data.titrant_vol, this.input_is_valid.titrant_vol);
    }

    checkCalculate() {
        console.log("Preparing to calcualte");
        this.checkAll();
        for (var value in this.input_is_valid) {
            if (!this.input_is_valid[value]) {
                alert("The value of " + value + " is not valid");
                return;
            }
        }
        createRequest(this.input_data);
    }

    validateInputNumber(number, min, max, is_integer) {
        var is_valid = true;
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