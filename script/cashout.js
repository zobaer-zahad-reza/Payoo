document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById("cashout-amount").value);
    const pin = parseInt(document.getElementById("cashout-pin").value);
    const agentNum = document.getElementById("agent-num").value;
    const mainBalance = parseFloat(
      document.getElementById("main-balance").innerText
    );
    if (agentNum.length !== 0) {
      if (agentNum.length === 11) {
        if (pin === 1234) {
          if (mainBalance >= amount) {
            const biog = mainBalance - amount;
            document.getElementById("main-balance").innerText = biog;
            alert(`cashout ${amount} done.`);
          } else {
            alert("Insufficient balance");
          }
        } else {
          alert("Plz enter 1234 as a pin.");
        }
      } else {
        alert("Enter a valid agent number.");
      }
    } else {
      alert("Enter an agent number.");
    }
  });
