class Timer {
    constructor() {
        this.start_time = Date.now();
        this.stored_time = [];
    }

    start() {
        this.start_time = Date.now();
    }

    getElapsed() {
        var time = Date.now() - this.start_time;
        return time;
    }

    storeTimer() {
        this.stored_time.push(this.getElapsed());
    }

    getStored(i) {
        return this.stored_time[i];
    }
}