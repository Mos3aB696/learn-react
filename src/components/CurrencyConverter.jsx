import { useEffect, useState } from "react";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (amount === "" || amount === 0) {
      setResult("");
      return;
    }

    const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`;
    const dataFetch = async () => {
      try {
        const res = await fetch(url, { signal });

        if (res.ok) {
          const data = await res.json();
          setResult(data.rates[toCurrency]);
          console.log(data.rates[toCurrency]);
        }
      } catch (err) {
        if (!err.name === "AbortError") {
          console.log(err.message);
        }
      }
    };

    if (fromCurrency === toCurrency) {
      setResult(amount);
      return;
    }

    dataFetch();
    return () => controller.abort();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>

        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>
      <div>
        <p>Result: {result ? `${result} ${toCurrency}` : null}</p>
      </div>
    </div>
  );
}
