displayNoneById("addMoney-container");
displayNoneById("cashout-container");
displayNoneById("transfer-money-container");
displayNoneById("Bonus-container");

// for add money
document.getElementById("add-money-box").addEventListener("click", function () {
  document.getElementById("addMoney-container").style.display = "block";
  displayNoneById("cashout-container");
  displayNoneById("transfer-money-container");
  displayNoneById("Bonus-container");
});
// for cashout
document.getElementById("cashout-box").addEventListener("click", function () {
  document.getElementById("cashout-container").style.display = "block";
  displayNoneById("addMoney-container");
  displayNoneById("transfer-money-container");
  displayNoneById("Bonus-container");
});
// for transfer money
document
  .getElementById("transfer-money-box")
  .addEventListener("click", function () {
    document.getElementById("transfer-money-container").style.display = "block";
    displayNoneById("cashout-container");
    displayNoneById("addMoney-container");
    displayNoneById("Bonus-container");
  });
// for bonus
document.getElementById("bonus-box").addEventListener("click", function () {
  document.getElementById("Bonus-container").style.display = "block";
  displayNoneById("cashout-container");
  displayNoneById("addMoney-container");
  displayNoneById("transfer-money-container");
});

// for pay bill
document.getElementById("pay-bill-box").addEventListener("click", function () {
  displayNoneById("addMoney-container");
  displayNoneById("cashout-container");
  displayNoneById("transfer-money-container");
  displayNoneById("Bonus-container");
  alert("This option is under construction...");
});

// for transactions
document
  .getElementById("transactions-box")
  .addEventListener("click", function () {
    displayNoneById("addMoney-container");
    displayNoneById("cashout-container");
    displayNoneById("transfer-money-container");
    displayNoneById("Bonus-container");
    alert("This option is under construction...");
  });

// make extra function for display none
function displayNoneById(id) {
  document.getElementById(id).style.display = "none";
}
