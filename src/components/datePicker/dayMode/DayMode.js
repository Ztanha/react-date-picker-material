import {useTheme} from "../../../ThemeContext.js";
import {daysInMonth, getMonthStartDay} from "../utilities.js";

import {useEffect, useRef, useState} from "react";


const DayMode = props=>{
    const [ colors ]= useTheme();
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
            <div className="days" style={styles.calGrids}>
                <div className="days-grid">
                    { calendar?.map((x,index)=>
                        <div key={index}
                             onClick={()=>setSelectedPointer(x)}
                             className={(index < 7)? 'first-row cell' : 'cell'}
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
        )
}
export default DayMode;