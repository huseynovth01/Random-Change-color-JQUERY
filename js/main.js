$(document).ready(function () {
  function generateRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  $(".generate-btn").click(function () {
    let color = generateRandomColor();
    $("#inputField").css({
      "border-color": color,
      "color": color
    });
    $(".color-preview").css({
     "background-color": color
    });
    $(".copy-btn").css("background-color", color);
    $("#inputField").val(color);
  });

  $(".copy-btn").click(function () {
    var inputField = $("#inputField").select();
    document.execCommand("copy");

    var alertMsg = $(".alert-msg");
    alertMsg.addClass("slide-effect").find(".code").text(inputField.val());

    setTimeout(() => alertMsg.removeClass("slide-effect"), 3000);
  });
});
