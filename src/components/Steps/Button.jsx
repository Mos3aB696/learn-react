export default function Button({ onClick, condition, children }) {
  return (
    <button
      style={{
        background: condition ? "#ccc" : "#f0ad1b",
        color: "#373737",
        opacity: condition ? 0.5 : 1,
        cursor: condition ? "not-allowed" : "pointer",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
