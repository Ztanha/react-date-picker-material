import DatePicker from "./components/datePicker/DatePicker.js";
import {useState} from "react";

function App() {
    const [ date,setDate ] = useState(Date.now());
    const [ show,setShow ] = useState(true);
  return (
    <div className="App">
      <button onClick={()=>setShow(true)}>
          Click me!
      </button>
        <div>Date: {date}</div>
      <DatePicker date={ date }
                  show={ show }
                  hide={ ()=>setShow(false)}
                  setDate={ setDate }
                  buttons={[
                      {
                          label:'Cancel',
                          onClick:()=>setShow(false)
                      },
                      {
                          label:'OK'
                      }
                  ]}
      />
    </div>
  );
}

export default App;
