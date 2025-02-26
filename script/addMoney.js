document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById("amount").value);
    const pin = parseInt(document.getElementById("ac-pin").value);
    const mainBalance = parseFloat(
      document.getElementById("main-balance").innerText
    );
    if (amount && pin) {
      if (pin === 1234) {
        const sum = mainBalance + amount;
        document.getElementById("main-balance").innerText = sum;
      } else {
        alert("Plz enter 1234 as a pin.");
      }
    } else {
      alert("Enter amount & pin");
    }
  });
