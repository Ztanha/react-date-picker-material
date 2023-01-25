import {useTheme} from "../../../ThemeContext.js";
import {daysInMonth, getMonthStartDay, monthName} from "../utilities.js";

import {useEffect, useRef, useState} from "react";
import Button from "../../button/Button.js";
import {ReactComponent as Arrow} from "../icons/right.svg";
import {ReactComponent as SideArrow} from "../icons/sideArrow.svg";


const DayMode = props=>{
    const [ colors ]= useTheme();
    const weekday= ["Su","Mo","Tu","We","Th","Fr","Sa"];
    const [ cells,setCells] = useState();
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
        const year = new Date(monthTimeStamp).getFullYear()
        const month = new Date(monthTimeStamp).getMonth()
        const days = daysInMonth( monthTimeStamp );
        const firstDay = getMonthStartDay( monthTimeStamp )

        for(let i = 1; i <= days; i++) {
            calendar.push( new Date(year,month,i).getTime() );
        }
        for(let j = 0; j < firstDay; j++) {
            calendar.unshift(" ");
        }
        setCells(calendar);
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
        reloadCells( new Date(refYear,refMonth+1,0).getTime() )
    },[refMonth,setCells,refYear])

    useEffect(()=>{

        date.current = new Date(props.date)
        setRefMonth( date.current.getMonth() );
        setRefYear( date.current.getFullYear() );
        reloadCells( props.date )

    },[props.date,setCells])

    console.log(props.date)
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
                    { cells?.map(( x,index )=>
                        <div key={ index }
                             onClick={()=>setSelectedDay( x )}
                             className='cell'
                             id={x}
                             style={ (x === props.date)
                                     ? styles.today
                                     : ( x === selectedDay )
                                             ? styles.selectedCell
                                             : {}
                             }
                        >
                            { new Date(x).getDate() || '' }
                        </div>
                    ) }
                </div>
                <div className="actions">
                    <div className='btns-container'>
                        <Button type={ 'text' }
                                click={ props.hide }
                        >
                            Cancel
                        </Button>
                        <Button type={ 'text' }
                                click={ ()=>props.setDate(selectedDay) }
                        >
                            OK
                        </Button>
                    </div>
                </div>
            </div>
       </>)
}
export default DayMode;