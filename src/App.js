import DatePicker from "./components/datePicker/DatePicker.js";
import React,{useState} from "react";

function App() {
    const [ date,setDate ] = useState(Date.now());
    const [ show,setShow ] = useState(false);
    function handleSelect() {
        alert('Saved!')
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
                  theme={ 'dark' }
                  // title={ 'Pick up a date' }
                  style={{ fontFamily:'Roboto',
                            width:'300px',
                            // top:'10px',
                            zIndex:'1'
                  }}
      />
    </div>
  );
}

export default App;
