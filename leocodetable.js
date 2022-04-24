function start() {
    //function for start event for button
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop() {
     //function for stop event for button
         document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}