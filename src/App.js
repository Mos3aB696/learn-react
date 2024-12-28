import StateChallangeOne from "./components/StateChallangeOne";
import StateChallangeTwo from "./components/StateChallangeTwo";
import FlashCards from "./components/FlashCards";
import Accordion from "./components/Accordion";
import TipCalculatorV1 from "./components/TipCalculator/TipCalculatorV1";
import Steps from "./components/Steps/Steps";

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
    </>
  );
}
