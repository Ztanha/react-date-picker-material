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
    const [ selectedDay,setSelectedDay ] = useState();
    const date = useRef(new Date());
    const [ refMonth,setRefMonth ] = useState();
    const [ refYear,setRefYear ] = useState();
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
    function reloadCells( monthTimeStamp ) {
        let calendar = [];
        const days = daysInMonth( monthTimeStamp );
        const firstDay = getMonthStartDay( monthTimeStamp )
        for(let i = 1; i <= days; i++) {
            calendar.push(i);
        }
        for(let j = 0; j < firstDay; j++) {
            calendar.unshift(" ");
        }
        setCells(calendar);
    }

    function handleSave() {
        props.setDate(new Date(refYear,refMonth,selectedDay).getTime())
    }
    function handleSelect(day) {

    }

    function resetRefMonth( newValue ) {
        let value;

        if ( newValue > 12 ){
            setRefYear(refYear+1);
            value = newValue%12;
        } else if ( newValue === 0 ) {
            value = 0
        } else if ( newValue < 0 ) {
            setRefYear(refYear-1);
            value = 12+newValue
        } else if( newValue === 12){
            setRefYear(refYear+1);
            value = 0
        } else {
            value = newValue;
        }
        setRefMonth(value);
    }

    useEffect(()=>{
        reloadCells(new Date(props.year,refMonth+1,0).getTime())
    },[refMonth,setCells])

    useEffect(()=>{

        date.current = new Date(props.date)
        setRefMonth(date.current.getMonth());
        setRefYear(date.current.getFullYear());
        reloadCells(props.date)
        setDayPointer(date.current.getDate());

    },[props.date,setCells,setDayPointer,date])

    return (<>
        <div className="localSelectionRow grid-order">
            <div className="date"
                 onClick={ ()=>props.setMode('years') }
            >
                { monthName(refMonth)},{ refYear }
                <Arrow className='icon-down'
                       style={ styles.icons }
                />
            </div>
            <div className="icons">
                <SideArrow style={ styles.icons }
                           className="icon-left"
                           onClick={ ()=>resetRefMonth(refMonth-1) }
                />
                <SideArrow style={ styles.icons }
                           className="icon-right"
                           onClick={ ()=>resetRefMonth(refMonth+1 ) }
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
                             onClick={()=>setSelectedDay(x)}
                             className='cell'
                             style={ refMonth === props.month
                                 ? x === dayPointer
                                     ? styles.today
                                     : ( x === selectedDay )
                                         ? styles.selectedCell
                                         : {}
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
                                click={ ()=>handleSave }
                        >
                            OK
                        </Button>
                    </div>
                </div>
            </div>
       </>)
}
export default DayMode;