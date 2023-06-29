import { useState } from "react";
import "../App.css";
import Input from "./Input";
import BillInput from "./BillInput";
import Total from "./Total";
import ResetButton from "./ResetButton";

function App() {
  const [cost, setCost] = useState(0);
  const [service, setService] = useState(0);
  const [friendService, setFriendService] = useState(0);

  const tip = (service + friendService).toFixed(2);

  const total = cost + cost * tip;

  const tipString = `£${total} (${cost} + £${tip})`;

  console.log(total);

  function handleCostChange(e) {
    setCost(+e.target.value);
  }

  function handleReset() {
    setCost(0);
    setFriendService(0);
    setService(0);
  }

  return (
    <div className="App">
      <h1 className="title">Tip Calculator</h1>
      <BillInput text="How much is the bill?">
        <input type="number" value={cost} onChange={handleCostChange} />
      </BillInput>
      <Input service={service} onSetService={setService}>
        <p className="question-text">How did you like the service?</p>
      </Input>
      <Input service={friendService} onSetService={setFriendService}>
        <p className="question-text">How did you friend rate the service?</p>
      </Input>
      <Total tipString={tipString} />
      <ResetButton onClick={handleReset} />
    </div>
  );
}

export default App;

//we need 3 inputs with different text and input options, i think we use props for text and children for the input
//we need a h1 that displays a string that shows the amount to pay
//and we need a reset btn
