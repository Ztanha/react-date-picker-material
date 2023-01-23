import './datePicker.scss'
import {Modal} from "../modal/Modal.js";
import {useEffect, useRef, useState} from "react";
import {ReactComponent as Pencil} from "./icons/pencil.svg";
import {ReactComponent as Arrow} from "./icons/right.svg";
import {ReactComponent as SideArrow} from "./icons/sideArrow.svg";
import {ThemeProvider, useTheme} from "../../ThemeContext.js";
import {daysInMonth, getMonthStartDay} from "./utilities.js";
const DatePicker = props=><ThemeProvider><ActualDatePicker {...props}/></ThemeProvider>;
function ActualDatePicker(props) {

    const month= ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weekday= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const [ calendar,setCalendar] = useState();
    const [ dayPointer,setDayPointer ] = useState();
    const [ selectedPointer,setSelectedPointer ] = useState();
    const [ mode,setMode ]=useState('days')
    const [colors]= useTheme();
    const styles={
        datePicker:{
            color:colors.onSurfaceVariant,
            backgroundColor:colors.surface3,
            fontFamily:'Roboto'
        },
        icons:{
          fill:colors.onSurfaceVariant
        },
        calGrids:{
           color:colors.onSurface,
        },
        calHeader:{
            color:colors.onSurface,
        },
        today:{
            backgroundColor: colors.primary,
            color:colors.onPrimary,
        },
        selectedCell:{
            border: `1px solid ${colors.primary}`,
        }
    }
    let timeStamp = Date.now()
    let date = new Date(timeStamp) ;

    function makeCalendar(daysInMonth,firstDay) {
        let calendar = [...weekday];
        for(let i = 1; i <= daysInMonth; i++) {
            calendar.push(i);
        }
        for(let j = 0; j < firstDay; j++) {
            calendar.unshift(" ");
        }
        return calendar
    }
    useEffect(()=>{

        let date = new Date(props.date)
        setCalendar( makeCalendar(daysInMonth(props.date),getMonthStartDay(props.date)) )
        setDayPointer(date.getDate());

    },[props.date,setCalendar,setDayPointer])

    console.log(props.date ,dayPointer || '')
    return (
        <div className='DatePicker'
             style={{ ...styles.datePicker,...props.style }}
        >
            <Modal show={ props.show }
                   hide={ props.hide }>

                { mode === 'days'

                    ? <div className="calendar">
                        <div className="calendar-header" >
                            <label>{ props.title || 'Select date' }</label>
                            <div className="header-date grid-order" style={styles.calHeader} >
                                { weekday[ date.getDay() ] },
                                { month[ date.getMonth() ].slice(0,3) }
                                { date.getDate() }
                                <Pencil style={styles.icons}/>
                            </div>
                        </div>
                        <div className="line" style={{ backgroundColor:colors.outline }}/>
                        <div className="localSelectionRow grid-order">
                            <div className="date">
                                { month[ date.getMonth() ] },{ date.getFullYear() }
                                <Arrow className='icon-down' style={styles.icons}/>
                            </div>
                            <div className="icons">
                                <SideArrow style={styles.icons} className="icon-left"/>
                                <SideArrow style={styles.icons} className="icon-right"/>
                            </div>
                        </div>
                        <div className="days" style={styles.calGrids}>
                            <div className="days-grid">
                                { calendar?.map(x=>
                                    <div key={x}
                                         onClick={()=>setSelectedPointer(x)}
                                         className='day'
                                         style={ x === dayPointer
                                                    ? styles.today
                                                    : ( x === selectedPointer)
                                                        ? styles.selectedCell
                                                        : {}
                                                }
                                    >
                                        {x}
                                    </div>
                                ) }
                            </div>
                        </div>
                        <div className="actions">
                        </div>
                    </div>

                    : mode === 'months'

                        ? <div className="months">Months</div>
                        : <div className="years">Years</div>
                }
            </Modal>
        </div>
    )
}

export default DatePicker;