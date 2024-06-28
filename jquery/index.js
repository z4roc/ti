let count = 0;

document.getElementById("foo").addEventListener("click", () => {
  count++;
  document.getElementById("foo").innerHTML = "Anzahl Klicks: " + count;
});

//jQuery
$("foo").click(() => {
  count++;
  $("foo").html("Anzahl Klicks: " + count);
});
