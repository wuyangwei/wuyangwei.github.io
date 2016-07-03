
var w;

function startWorker() {
    if (typeof (Worker) !== "undefined") {
        if (typeof (w) == "undefined") {
            w = new Worker("javascripts/show_current_time/worker_count_time.js");
        }
        w.onmessage = function (event) {
            document.getElementById("current_time").innerHTML = event.data;
        };
    } else {
        document.getElementById("current_time").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}

function stopWorker() {
    w.terminate();
}
