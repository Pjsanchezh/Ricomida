$(document).ready(function () {

  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  $(".card").click(function () {
    $(".card-body").toggle("slow");
  });

  $("#R2-D2").on("dblclick", function () {
    $(this).css("color", "#DC3545");
  });

  $("#C-3P0").on("dblclick", function () {
    $(this).css("color", "#DC3545");
  });

  console.log("Funcionando los sistemas!")
});
