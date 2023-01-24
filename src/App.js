import DatePicker from "./components/datePicker/DatePicker.js";
import {useState} from "react";

function App() {
    const [ date,setDate ] = useState(Date.now());
  return (
    <div className="App">
        salam
      <DatePicker date={ date }
                  show={ true }
                  setDate={ setDate }
      />
    </div>
  );
}

export default App;
