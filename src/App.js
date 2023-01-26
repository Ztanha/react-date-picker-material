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
                  theme={ 'dark' }
                  // title={ 'Pick up a date' }
                  style={{ fontFamily:'Roboto',
                            width:'300px',
                            // top:'10px',
                            zIndex:'1'
                  }}
                  // colors={{
                  //     light:{
                  //     primary : '#674444',
                  //     onSurfaceVariant: '#49454F',
                  //     onSurface: '#1C1B1F',
                  //     outlineVariant:'#CAC4D0',
                  //     scrim:'rgb(0,0,0,0.25)',
                  //     onPrimary: '#ffffff',
                  //     surface3: `linear-gradient(0deg, #FFFBFE, #FFFBFE),` +
                  //     `linear-gradient(0deg, rgba(103, 80, 164, 0.11), rgba(103, 80, 164, 0.11))`
                  //
                  //    },
                  //     dark: {
                  //     primary : '#D00000',
                  //     onSurfaceVariant: '#CAC4D0',
                  //     onSurface: '#E6E1E5',
                  //     outlineVariant:'#49454F',
                  //     scrim:'rgb(0,0,0,0.25)',
                  //     onPrimary: '#381E72',
                  //     surface3: 'linear-gradient(0deg, #1C1B1F, #1C1B1F),' +
                  //     '    linear-gradient(0deg, rgba(208, 188, 255, 0.11), rgba(208, 188, 255, 0.11))'
                  //   }
                  // }}
      />
    </div>
  );
}

export default App;
