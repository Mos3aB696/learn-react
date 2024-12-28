export default function Bill({ bill, onBillChange }) {
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
