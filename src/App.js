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
                  // title={ 'Pick up a date' }
                  style={{ fontFamily:'Roboto',
                            width:'300px',
                            top:'10px',
                            zIndex:'1'
                  }}
      />
    </div>
  );
}

export default App;
