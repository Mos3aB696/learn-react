import { useState } from "react";

export default function TextExpander({
  children,
  className = "",
  collapsedNumWords = 20,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  expanded = false,
  buttonColor,
}) {
  const [expand, setExpand] = useState(expanded);

  const btn = {
    backgroundColor: "transparent",
    color: buttonColor || "#59c837",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
  };
  return (
    <div className={className}>
      {expand
        ? children
        : children
            .split(" ")
            .slice(0, collapsedNumWords)
            .join(" ")
            .concat("... ")}
      <button style={btn} onClick={() => setExpand(!expand)}>
        {expand ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
