var position = 0;

function scrollNext() {
    if (position < 2) {
        var slider = document.getElementById("slider");
        position += 1;
        var offset = position * 254;
        slider.style.transform = "translateY(-" + offset + "px)";
    }
}

function scrollPrev() {
    if (position > 0) {
        var slider = document.getElementById("slider");
        position -= 1;
        var offset = position * 254;
        slider.style.transform = "translateY(-" + offset + "px)";
    }
}

function addTask() {
    var task = document.getElementById("displayName").value;
    var newTask = document.createElement("li");
    newTask.innerHTML = task;

    var dateCol = document.getElementById("dateCol");
    dateCol.appendChild(newTask);
}

function removeTasks() {
    var dateCol = document.getElementById("dateCol");
    dateCol.innerHTML = "";
}