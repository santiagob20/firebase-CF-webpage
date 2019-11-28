$(document).ready(function() {
  $(".sidenav").sidenav();

  $("#btnHome").click(gotoHome);
  $("#btnLogout").click(logout);
});

var currentUrl = window.location.href;

function gotoHome() {}
function logout() {
  sessionStorage.removeItem("session");
  sessionStorage.removeItem("user");
  let arr = currentUrl.split("/");
  window.location =
    arr[0] +
    "/" +
    arr[1] +
    "/" +
    arr[2] +
    "/" +
    arr[3] +
    "/" +
    arr[4] +
    "/" +
    arr[5] +
    "/" +
    arr[6] +
    "/" +
    "login";
}

function hideAllCards() {}

function modalInfo(modalTitle, modalBody, dismis, redirect) {
  document.getElementById("modalHeader").innerHTML = modalTitle;
  document.getElementById("modalBody").innerHTML = modalBody;

  const elem = document.getElementById("modal1");
  const instance = M.Modal.init(elem, { dismissible: dismis });
  instance.open();

  if (redirect === true) {
    document
      .getElementById("btnCloseModal")
      .setAttribute("onclick", "window.location.replace('')");
  }
}
