import './datePicker.scss'
import {Modal} from "../modal/Modal.js";
import {useState} from "react";

import {ThemeProvider, useTheme} from "../../ThemeContext.js";
import DayMode from "./DayMode/DayMode.js";
const DatePicker = props=><ThemeProvider><ActualDatePicker {...props}/></ThemeProvider>;
function ActualDatePicker(props) {


    const [ mode,setMode ]=useState('days')
    const [colors]= useTheme();

    // console.log(props.date ,dayPointer || '')
    return (
        <div className='DatePicker'
             // style={{ ...styles.datePicker,...props.style }}
        >
            <Modal show={ props.show }
                   hide={ props.hide }>

                { mode === 'days'

                    ? <DayMode {...props}/>

                    : mode === 'months'

                        ? <div className="months">Months</div>
                        : <div className="years">Years</div>
                }
            </Modal>
        </div>
    )
}



export default DatePicker;