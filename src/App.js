import DatePicker from "./components/datePicker/DatePicker.js";
import React,{useState} from "react";

function App() {
    const [ date,setDate ] = useState(Date.now());
    const [ show,setShow ] = useState(false);
    function handleSelect() {
        setShow(false);
    }
  return (
    <div className="App">
      <button onClick={()=>setShow(true)}>
          Click me!
      </button>
        <div>Date: {date}</div>
      <DatePicker date={ date }
                  show={ show }
                  hide={ ()=>setShow(false)}
                  selectDate={ handleSelect }
                  setDate={ setDate }
                  theme={ 'light' }
                  // title={ 'Pick up a date' }
                  // style={{ fontFamily:'Roboto,sans-serif',
                  //           width:'300px',
                  //           // top:'10px',
                  //           zIndex:5
                  // }}
      />
    </div>
  );
}

export default App;
