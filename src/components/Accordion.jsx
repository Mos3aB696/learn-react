import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function Accordion() {
  const [currentOpen, setCurrentOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((fag, index) => (
        <Accordionitem
          num={index}
          title={fag.title}
          key={index}
          currentOpen={currentOpen}
          onOpen={setCurrentOpen}
        >
          {fag.text}
        </Accordionitem>
      ))}

      <Accordionitem
        num={10}
        title="Think Like React Developers"
        key={10}
        currentOpen={currentOpen}
        onOpen={setCurrentOpen}
      >
        <ul>
          <li>Breake down the UI into componentes</li>
          <li>Make theses componentes reusable</li>
          <li>Add some interactivty by using state</li>
          <li>Put all theses states in the right place</li>
        </ul>
      </Accordionitem>
    </div>
  );
}

function Accordionitem({ num, title, currentOpen, onOpen, children }) {
  const isOpen = currentOpen === num;

  function handleToggle() {
    onOpen(num === currentOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
