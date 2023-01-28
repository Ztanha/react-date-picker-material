import './datePicker.scss'
import {Modal} from "../modal/Modal.js";
import React,{useEffect, useRef, useState} from "react";
import {ReactComponent as Pencil} from "./icons/pencil.svg";
import {ThemeProvider, useTheme} from "../../ThemeContext.js";
import DayMode from "./dayMode/DayMode.js";
import YearMode from "./yearMode/YearMode.js";
import {monthName} from "./utilities.js";
const DatePicker = props=><ThemeProvider><ActualDatePicker {...props}/></ThemeProvider>;

function ActualDatePicker(props) {

    const weekday= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const [ mode,setMode ]=useState('days')
    const [ month,setMonth ]=useState(0);
    const [ year,setYear ]=useState(0);
    const [colors, setTheme, setColors]= useTheme();
    const date = useRef(new Date());

    function handleYearChange(year) {
        props.setDate( new Date(props.date).setFullYear(year))
        setMode('days')
    }
    const styles={
        datePicker:{
            color:colors.onSurface,
            background : colors.surface3,
            fontFamily:'Roboto,-apple-system, Ubuntu, sans-serif',
        },
        title:{
            color:colors.onSurfaceVariant,
        },
        calHeader:{
            color:colors.onSurface,
        },
        icons:{
            fill:colors.onSurfaceVariant
        },
    }
    useEffect(()=>{
        if( props.theme) setTheme( props.theme );
    },[setTheme,props.theme])

    useEffect(()=>{
        if( typeof props.colors !== "undefined"){
            setColors (props.colors)
        }
    },[ props.colors,setColors ])

    useEffect(() => {
        const tempDate = new Date(props.date);
        setMonth( tempDate.getMonth() );
        setYear( tempDate.getFullYear() );
        date.current = tempDate;
    }, [ props.date,setMonth,setYear,date ])

    return (
        <div className='DatePicker'
             style={{ ...styles.datePicker}}
        >
            <Modal show={ props.show }
                   hide={ props.hide }
                   style={ props.style }
            >
                <div className="calendar">
                    <div className="calendar-header" >
                        <label style={ styles.title }>
                            { props.title || 'Select date' }
                        </label>
                        <div className="header-date grid-order"
                             style={ styles.calHeader }
                        >
                            { weekday[ date?.current.getDay() ] },
                            {  ' '+ monthName( date?.current.getMonth()).slice(0,3) + ' ' }
                            { date?.current.getDate() }
                            <Pencil style={ styles.icons }/>
                        </div>
                    </div>
                    <div className="line"
                         style={{ backgroundColor:colors.outlineVariant }}
                    />

                { mode === 'days'

                    ? <DayMode setDate={ props.setDate }
                               date={ props.date }
                               setMode={ setMode }
                               hide={ props.hide }
                               selectDate={ props.selectDate }
                    />
                    : <YearMode year={ year }
                                month={ month }
                                onChange={ handleYearChange }
                                setMode={ setMode }
                                hide={ props.hide }
                    />
                }
                </div>

            </Modal>
        </div>
    )
}



export default DatePicker;