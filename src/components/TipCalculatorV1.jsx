import { useState } from "react";

export default function TipCalculatorV1() {
  const [bill, setBill] = useState("");
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleBillChange(event) {
    setBill(+event.target.value);
  }

  function handleMyTipChange(event) {
    setMyTip(+event.target.value);
  }

  function handleFriendTipChange(event) {
    setFriendTip(+event.target.value);
  }

  function handleReset() {
    setBill("");
    setMyTip(0);
    setFriendTip(0);
  }

  const averageTip = (myTip + friendTip) / 2;
  const totalTip = (bill * averageTip) / 100;
  const totalBill = bill + totalTip;

  return (
    <div className="calculator">
      <Bill bill={bill} onBillChange={handleBillChange} />

      <Tip
        text="How did you like the service?"
        tip={myTip}
        onTipChange={handleMyTipChange}
      />

      <Tip
        text="How did your friend like the service?"
        tip={friendTip}
        onTipChange={handleFriendTipChange}
      />
      {bill > 0 && (
        <>
          <Total totalBill={totalBill} bill={bill} tip={totalTip} />{" "}
          <Button onReset={handleReset} />{" "}
        </>
      )}
    </div>
  );
}

function Bill({ bill, onBillChange }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="number"
        placeholder="Enter Bill Amount"
        value={bill}
        onChange={onBillChange}
      />
    </div>
  );
}

function Tip({ text, tip, onTipChange }) {
  return (
    <div>
      <label> {text} </label>
      <select value={tip} onChange={onTipChange}>
        <option value="0">Dissatisfied 0%</option>
        <option value="5">It was Okay 5%</option>
        <option value="10">It was Good 10%</option>
        <option value="20">Absolutely Amazing! 20%</option>
      </select>
    </div>
  );
}

function Total({ totalBill, bill, tip }) {
  return (
    <div>
      <h2>
        You pay: ${totalBill} (${bill} + ${tip} Tip)
      </h2>
    </div>
  );
}

function Button({ onReset }) {
  return (
    <button className="btn" onClick={onReset}>
      RESET
    </button>
  );
}
