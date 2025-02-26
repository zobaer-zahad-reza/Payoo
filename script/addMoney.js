document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById("amount").value);
    const pin = parseInt(document.getElementById("ac-pin").value);
    const mainBalance = parseFloat(
      document.getElementById("main-balance").innerText
    );
    const bankSelect = document.getElementById("select-bank").value;
    const acNum = document.getElementById("ac-num").value;
    console.log(bankSelect);
    if (bankSelect !== "Select a bank") {
      if (acNum.length !== 0) {
        if (pin === 1234) {
          const sum = mainBalance + amount;
          document.getElementById("main-balance").innerText = sum;
          alert(`Added money successfully.Your current balance is ${sum}`);
        } else {
          alert("Plz enter 1234 as a pin.");
        }
      } else {
        alert("Enter a account number.");
      }
    } else {
      alert("Select a bank");
    }
  });
