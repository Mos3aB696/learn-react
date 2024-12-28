import { useState } from "react";

import Bill from "./Bill";
import Tip from "./Tip";
import Total from "./Total";
import Button from "./Button";

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
