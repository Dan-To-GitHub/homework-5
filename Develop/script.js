var currentDay = $("#currentDay")
var container = $(".container")
var timeblocks = document.querySelectorAll(".time-block")

currentDay.text(moment().format("dddd, MMMM Do"));

timeblocks.forEach(function(timeblock, i) {
    if ((i + 9) < moment().format("H")) {
        timeblock.classList.remove("past", "present", "future");
        timeblock.classList.add("past");
    } else if ((i + 9) === Number(moment().format("H"))) {
        timeblock.classList.remove("past", "present", "future");
        timeblock.classList.add("present");
    } else {
        timeblock.classList.remove("past", "present", "future");
        timeblock.classList.add("future");
    };
});

container.on("click", ".saveBtn", function() {
    var dataHour = $(this).data("hour");
    var textContent = $("#" + dataHour).val();
    console.log(dataHour, textContent);
    localStorage.setItem(dataHour, textContent);
})

$().ready(function() {
    timeblocks.forEach(function(timeblock, i) {
        $("#" + (i+9)).val(localStorage.getItem(i+9));
    });
});