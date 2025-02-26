document.getElementById("addMoney-container").style.display = "none";
document.getElementById("cashout-container").style.display = "none";
document.getElementById("transfer-money-container").style.display = "none";
document.getElementById("Bonus-container").style.display = "none";

// for add money
document.getElementById("add-money-box").addEventListener("click", function () {
  document.getElementById("addMoney-container").style.display = "block";
  document.getElementById("cashout-container").style.display = "none";
  document.getElementById("transfer-money-container").style.display = "none";
  document.getElementById("Bonus-container").style.display = "none";
});
// for cashout
document.getElementById("cashout-box").addEventListener("click", function () {
  document.getElementById("cashout-container").style.display = "block";
  document.getElementById("addMoney-container").style.display = "none";
  document.getElementById("transfer-money-container").style.display = "none";
  document.getElementById("Bonus-container").style.display = "none";
});
// for transfer money
document
  .getElementById("transfer-money-box")
  .addEventListener("click", function () {
    document.getElementById("transfer-money-container").style.display = "block";
    document.getElementById("cashout-container").style.display = "none";
    document.getElementById("addMoney-container").style.display = "none";
    document.getElementById("Bonus-container").style.display = "none";
  });
// for bonus
document.getElementById("bonus-box").addEventListener("click", function () {
  document.getElementById("cashout-container").style.display = "none";
  document.getElementById("addMoney-container").style.display = "none";
  document.getElementById("transfer-money-container").style.display = "none";
  document.getElementById("Bonus-container").style.display = "block";
});
