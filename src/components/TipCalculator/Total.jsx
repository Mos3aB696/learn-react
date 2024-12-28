export default function Total({ totalBill, bill, tip }) {
  return (
    <div>
      <h2>
        You pay: ${totalBill} (${bill} + ${tip} Tip)
      </h2>
    </div>
  );
}
