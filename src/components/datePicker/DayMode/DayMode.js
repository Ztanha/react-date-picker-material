import {useTheme} from "../../../ThemeContext.js";
import {daysInMonth, getMonthStartDay} from "../utilities.js";
import {ReactComponent as Pencil} from "./icons/pencil.svg";
import {ReactComponent as Arrow} from "./icons/right.svg";
import {ReactComponent as SideArrow} from "./icons/sideArrow.svg";
import {useEffect, useRef, useState} from "react";


const DayMode = props=>{
    const [colors]= useTheme();
    const month= ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weekday= ["S","M","T","W","T","F","S"];
    const [ calendar,setCalendar] = useState();
    const [ dayPointer,setDayPointer ] = useState();
    const [ selectedPointer,setSelectedPointer ] = useState();
    const date = useRef(new Date());
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

        date.current = new Date(props.date)
        setCalendar( makeCalendar(daysInMonth(props.date),getMonthStartDay(props.date)) )
        setDayPointer(date.current.getDate());

    },[props.date,setCalendar,setDayPointer,date])
    return (
        <div className="calendar">
            <div className="calendar-header" >
                <label>{ props.title || 'Select date' }</label>
                <div className="header-date grid-order" style={styles.calHeader} >
                    { weekday[ date?.current.getDay() ] },
                    { month[ date?.current.getMonth() ].slice(0,3) }
                    { date?.current.getDate() }
                    <Pencil style={styles.icons}/>
                </div>
            </div>
            <div className="line" style={{ backgroundColor:colors.outline }}/>
            <div className="localSelectionRow grid-order">
                <div className="date">
                    { month[ date?.current.getMonth() ] },{ date?.current.getFullYear() }
                    <Arrow className='icon-down' style={styles.icons}/>
                </div>
                <div className="icons">
                    <SideArrow style={styles.icons} className="icon-left"/>
                    <SideArrow style={styles.icons} className="icon-right"/>
                </div>
            </div>
            <div className="days" style={styles.calGrids}>
                <div className="days-grid">
                    { calendar?.map((x,index)=>
                        <div key={index}
                             onClick={()=>setSelectedPointer(x)}
                             className={(index < 7)? 'first-row day' : 'day'}
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
    )
}
export default DayMode;