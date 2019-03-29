class Timer {
    constructor() {
        this.start_time = Date.now();
        this.stored_time = [];
    }

    start() {
        this.start_time = Date.now();
    }

    getElapsed() {
        let time = Date.now() - this.start_time;
        return time;
    }

    storeTimer() {
        this.stored_time.push(this.getElapsed());
    }

    getStored(i) {
        return this.stored_time[i];
    }
}

/* From: https://stackoverflow.com/questions/3665115/create-a-file-in-memory-for-user-to-download-not-through-server */
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
  /* */