//Initiate the stop and start of the clock
function init() {
  var tick = setInterval(function() {
    output(time());
  }, 1000);
  stopClick(clearInterval, tick);
  startClick(init);
}

//Time setting
function time() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var array = [hours, minutes, seconds];
  var newArray = array.map(function(num) {
    return num < 10 ? "0" + num : String(num);
  });
  hours = newArray[0];
  minutes = newArray[1];
  seconds = newArray[2];

  return hours + ":" + minutes + ":" + seconds;
}

// Helper functions
function startClick(callback) {
  document.addEventListener("dblclick", function(event) {
    callback();
  });
}

function stopClick(callback, name) {
  document.addEventListener("click", function(event) {
    callback(name);
  });
}

//Display function
function output(time) {
  var color = time;
  document.body.bgColor = color;
  document.getElementById("clock").textContent = color;
}

init();
