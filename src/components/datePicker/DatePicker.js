import './datePicker.scss'
import {Modal} from "../modal/Modal.js";
import {useEffect, useRef, useState} from "react";
import {ReactComponent as Pencil} from "./icons/pencil.svg";
import {ReactComponent as Arrow} from "./icons/right.svg";
import {ReactComponent as SideArrow} from "./icons/sideArrow.svg";
import {ThemeProvider, useTheme} from "../../ThemeContext.js";
import DayMode from "./dayMode/DayMode.js";
import YearMode from "./yearMode/YearMode.js";
import Button from "../button/Button.js";
const DatePicker = props=><ThemeProvider><ActualDatePicker {...props}/></ThemeProvider>;

function ActualDatePicker(props) {

    const months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weekday= ["Sun","Mon","Tue","Wed","Thu","Fri","Sau"];
    const [ mode,setMode ]=useState('days')
    const [ month,setMonth ]=useState(0);
    const [ year,setYear ]=useState(0);
    const [colors]= useTheme();
    const date = useRef(new Date());

    function handleShift( direction ) {
        if( mode === 'days') {
            if( direction === 'f') {
                //go to next month
            } else {

            }
        } else {
            if( direction === 'f') {
                //go to next 15 years
            } else {

            }
        }
    }
    function handleYearChange(year) {
        const tempDate = new Date(props.date);
        const month = tempDate.getMonth();
        const day =tempDate.getDate();
        props.setDate(new Date(year,month,day))
    }
    const styles={
        datePicker:{
            color:colors.onSurfaceVariant,
            backgroundColor:colors.surface3,
            fontFamily:'Roboto'
        },
        icons:{
            fill:colors.onSurfaceVariant
        }
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
                            { months[ date?.current.getMonth() ].slice(0,3) }
                            { date?.current.getDate() }
                            <Pencil style={ styles.icons }/>
                        </div>
                    </div>
                    <div className="line"
                         style={{ backgroundColor:colors.outline }}
                    />
                    <div className="localSelectionRow grid-order">
                        <div className="date"
                             onClick={ ()=>setMode(mode === 'years' ? 'days': 'years' ) }
                        >
                            { months[ date?.current.getMonth() ] },{ date?.current.getFullYear() }
                            <Arrow className='icon-down'
                                   style={ styles.icons }
                            />
                        </div>
                        <div className="icons">
                            <SideArrow style={ styles.icons }
                                       className="icon-left"
                                       onClick={ ()=>handleShift('b') }
                            />
                            <SideArrow style={ styles.icons }
                                       className="icon-right"
                                       onClick={ ()=>handleShift('f') }
                            />
                        </div>
                    </div>

                { mode === 'days'

                    ? <DayMode month={ month } setMonth={setMonth} date={props.date} />
                    : mode === 'years'

                        ? <YearMode year={ year } onChange={handleYearChange} buttons={props.buttons} />
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