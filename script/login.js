document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const acNum = document.getElementById("ac-num").value;
    const acPin = document.getElementById("ac-pin").value;
    if (acNum.length === 11) {
      if (parseInt(acPin) === 1234) {
        window.location.href = "main.html";
      } else {
        alert("plz enter 1234 as a pin");
      }
    } else {
      alert("invalid account number");
    }
  });
