import {useTheme} from "../../../ThemeContext.js";
import {daysInMonth, getMonthStartDay, getTimestampWithoutTime} from "../utilities.js";

import React,{useEffect, useRef, useState} from "react";
import HeaderDate from "../HeaderDate.js";
import Actions from "../Actions.js";



const DayMode = props=>{
    const [ colors ]= useTheme();
    const weekday= ["Su","Mo","Tu","We","Th","Fr","Sa"];
    const [ cells,setCells] = useState();
    const [ selectedDay,setSelectedDay ] = useState();
    const date = useRef(getTimestampWithoutTime(props.date));
    const [ refMonth,setRefMonth ] = useState(new Date( date.current).getMonth());
    const [ refYear,setRefYear ] = useState(new Date(date.current).getFullYear());
    const styles={
        calGrids:{
            color:colors.onSurface,
        },
        today:{
            backgroundColor: colors.primary,
            color:colors.onPrimary,
        },
        selectedCell:{
            border: `1px solid ${colors.primary}`,
        },
    }
    function reloadCells( timestamp ) {
        let calendar = [];
        let date = new Date( timestamp )
        const days = daysInMonth( timestamp );
        const firstDay = getMonthStartDay( timestamp )

        for(let i = 1; i <= days; i++) {
            calendar.push( date.setDate(i) );
        }
        for(let j = 0; j < firstDay; j++) {
            calendar.unshift(" ");
        }
        setCells(calendar);
    }
    console.log(cells)
    function handleSave(){
        props.setDate(selectedDay || props.date);
        props.selectDate()
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
    },[ refMonth,setCells,refYear ])

    useEffect(()=>{

        const t = new Date(props.date);
        const m = t.getMonth();
        const y = t.getFullYear();
        date.current = getTimestampWithoutTime(props.date);
        setRefMonth( m );
        setRefYear( y );
        reloadCells( props.date )

    },[ props.date,date,setRefMonth,setRefYear ])

    console.log(date.current)
    return (<>
        <div>
            <HeaderDate onClickForward={ ()=>resetRefMonth(refMonth+1 ) }
                        onClickBackward={ ()=>resetRefMonth(refMonth-1) }
                        onClickDown={ ()=>props.setMode('years') }
                        month={ refMonth }
                        year={ refYear }
            />
        </div>
            <div className="days" style={ styles.calGrids }>
                <div className="days-grid">
                    { weekday.map((x,index)=>
                        <div key={ index }
                             className='first-row cell'
                        >
                            {x}
                        </div>
                    )}
                    { cells?.map(( x,index )=>
                        <div key={ index }
                             onClick={()=>setSelectedDay( x ) }
                             className={ (x !==" ") ? 'cell' :'empty-cell' }
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
                <Actions onClickLeftOne={ props.hide }
                         onClickRightOne={ handleSave }
                />
            </div>
       </>)
}
export default DayMode;