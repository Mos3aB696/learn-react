export default function Tip({ text, tip, onTipChange }) {
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
