import {useTheme} from "../../../ThemeContext.js";
import {daysInMonth, getMonthStartDay, monthName} from "../utilities.js";

import {useEffect, useRef, useState} from "react";
import Button from "../../button/Button.js";
import {ReactComponent as Arrow} from "../icons/right.svg";
import {ReactComponent as SideArrow} from "../icons/sideArrow.svg";


const DayMode = props=>{
    const [ colors ]= useTheme();
    const weekday= ["S","M","T","W","T","F","S"];
    const [ cells,setCells] = useState();
    const [ dayPointer,setDayPointer ] = useState();
    const [ selectedPointer,setSelectedPointer ] = useState();
    const date = useRef(new Date());
    const styles={
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
        },
        icons:{
            fill:colors.onSurfaceVariant
        }
    }
    function makeCalendar(daysInMonth,firstDay) {
        let calendar = [];
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
        setCells( makeCalendar(daysInMonth(props.date),getMonthStartDay(props.date)) )
        setDayPointer(date.current.getDate());

    },[props.date,setCells,setDayPointer,date])
    return (<>
        <div className="localSelectionRow grid-order">
            <div className="date"
                 onClick={ ()=>props.setMode('years') }
            >
                { monthName(props.month) },{ props.year }
                <Arrow className='icon-down'
                       style={ styles.icons }
                />
            </div>
            <div className="icons">
                <SideArrow style={ styles.icons }
                           className="icon-left"
                    // onClick={ ()=>handleShift('b') }
                />
                <SideArrow style={ styles.icons }
                           className="icon-right"
                    // onClick={ ()=>handleShift('f') }
                />
            </div>
        </div>
            <div className="days" style={styles.calGrids}>
                <div className="days-grid">
                    { weekday.map((x,index)=>
                        <div key={index}
                             className='first-row cell'
                        >
                            {x}
                        </div>
                    )}
                    { cells?.map((x,index)=>
                        <div key={index}
                             onClick={()=>setSelectedPointer(x)}
                             className='cell'
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
                <div className="actions">
                    <div className='btns-container'>
                        <Button type={ 'text' }
                                // click={ props.hide() }
                        >
                            Cancel
                        </Button>
                        <Button type={ 'text' }
                                // click={ ()=>props.onChange(selected)}
                        >
                            OK
                        </Button>
                    </div>
                </div>
            </div>
       </>)
}
export default DayMode;