import './datePicker.scss'
import {Modal} from "../modal/Modal.js";
import {useEffect, useRef, useState} from "react";
import {ReactComponent as Pencil} from "./icons/pencil.svg";
import {ThemeProvider, useTheme} from "../../ThemeContext.js";
import DayMode from "./dayMode/DayMode.js";
import YearMode from "./yearMode/YearMode.js";
import Button from "../button/Button.js";
import {monthName} from "./utilities.js";
const DatePicker = props=><ThemeProvider><ActualDatePicker {...props}/></ThemeProvider>;

function ActualDatePicker(props) {

    const weekday= ["Sun","Mon","Tue","Wed","Thu","Fri","Sau"];
    const [ mode,setMode ]=useState('days')
    const [ month,setMonth ]=useState(0);
    const [ year,setYear ]=useState(0);
    const [colors]= useTheme();
    const date = useRef(new Date());

    function handleYearChange(year) {
        const tempDate = new Date(props.date);
        const month = tempDate.getMonth();
        const day =tempDate.getDate();
        props.setDate(new Date(year,month,day).getTime())
        setMode('days')
    }
    function handleDayChange(){

    }
    const styles={
        datePicker:{
            color:colors.onSurfaceVariant,
            backgroundColor:colors.surface3,
            fontFamily:'Roboto'
        },

    }
    useEffect(() => {
        const tempDate = new Date(props.date);
        setMonth( tempDate.getMonth() );
        setYear( tempDate.getFullYear() );
    }, [ props.date,setMonth,setYear ])

    return (
        <div className='DatePicker'
             style={{ ...styles.datePicker,...props.style }}
        >
            <Modal show={ props.show }
                   hide={ props.hide }
            >
                <div className="calendar">
                    <div className="calendar-header" >
                        <label>
                            { props.title || 'Select date' }
                        </label>
                        <div className="header-date grid-order"
                             style={ styles.calHeader }
                        >
                            { weekday[ date?.current.getDay() ] },
                            { monthName( date?.current.getMonth()).slice(0,3) }
                            { date?.current.getDate() }
                            <Pencil style={ styles.icons }/>
                        </div>
                    </div>
                    <div className="line"
                         style={{ backgroundColor:colors.outline }}
                    />

                { mode === 'days'

                    ? <DayMode month={ month }
                               setMonth={setMonth}
                               date={props.date}
                               year={ year }
                               setMode={setMode}
                               onChange={handleDayChange}
                               hide={props.hide}
                    />
                    : mode === 'years'

                        ? <YearMode year={ year }
                                    month={ month }
                                    onChange={handleYearChange}
                                    buttons={props.buttons}
                                    setMode={setMode}
                                    hide={props.hide}
                        />
                        : <div className="years">
                            Years
                        </div>
                }
                </div>

            </Modal>
        </div>
    )
}



export default DatePicker;