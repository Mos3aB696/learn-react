import { useState } from "react";
import StateChallangeOne from "./components/StateChallangeOne";
import StateChallangeTwo from "./components/StateChallangeTwo";
import FlashCards from "./components/FlashCards";
import Accordion from "./components/Accordion";
import TipCalculatorV1 from "./components/TipCalculatorV1";
import Steps from "./components/Steps";
import StarRating from "./components/StarRating";
import TextExpander from "./components/TextExpander";
import CurrencyConverter from "./components/CurrencyConverter";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating size={40} color="#f177dc" movieRating={setMovieRating} />
      <p style={{ margin: "2px 0" }}>Your rate is: {movieRating}</p>
    </>
  );
}
export default function App() {
  return (
    <>
      <div className="challanges">
        <StateChallangeOne />
        <StateChallangeTwo />
      </div>
      <FlashCards />
      <Steps />
      <Accordion />
      <TipCalculatorV1 />

      <StarRating maxRating={10} />
      <StarRating
        size={30}
        color="#e8524a"
        messages={["Terrified", "Bad", "Good", "Great", "Excellent"]}
        className="test"
      />
      <StarRating size={50} color="#59c737" maxRating={7} />
      <StarRating
        size={30}
        color="#007acc"
        maxRating={3}
        messages={["Bad", "Good", "Great"]}
      />
      <Test />

      <div className="expander">
        <TextExpander>
          Space travel is the ultimate adventure! Imagine soaring past the stars
          and exploring new worlds. It's the stuff of dreams and science
          fiction, but believe it or not, space travel is a real thing. Humans
          and robots are constantly venturing out into the cosmos to uncover its
          secrets and push the boundaries of what's possible.
        </TextExpander>

        <TextExpander
          collapsedNumWords={20}
          expandButtonText="Show text"
          collapseButtonText="Collapse text"
          buttonColor="#ff6622"
        >
          Space travel requires some seriously amazing technology and
          collaboration between countries, private companies, and international
          space organizations. And while it's not always easy (or cheap), the
          results are out of this world. Think about the first time humans
          stepped foot on the moon or when rovers were sent to roam around on
          Mars.
        </TextExpander>

        <TextExpander expanded={true} className="box">
          Space missions have given us incredible insights into our universe and
          have inspired future generations to keep reaching for the stars. Space
          travel is a pretty cool thing to think about. Who knows what we'll
          discover next!
        </TextExpander>
      </div>
      <CurrencyConverter />
    </>
  );
}
