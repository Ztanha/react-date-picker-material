import './App.css';
import DatePicker from "./components/datePicker/DatePicker.js";

function App() {
  return (
    <div className="App">
        salam
      <DatePicker date={new Date()} show={true}/>
    </div>
  );
}

export default App;
