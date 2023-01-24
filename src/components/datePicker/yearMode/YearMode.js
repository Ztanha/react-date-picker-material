import {daysInMonth, getMonthStartDay, range} from "../utilities.js";
import {useEffect, useRef, useState} from "react";
import {useTheme} from "../../../ThemeContext.js";

function YearMode(props) {
    const year = useRef(0);
    const [colors] =useTheme();
    const [ cells,setCells ] = useState([]);
    const [ selected,setSelected ] = useState(0);
    const styles = {
        now:{
            backgroundColor: colors.primary,
            color:colors.onPrimary,
        },
        selected:{
            border: `1px solid ${ colors.primary }`,
        }
    }

    function handleYearChange(year){
        setSelected(year)
        const tempDate = new Date(props.date);
        const month = tempDate.getMonth();
        const day =tempDate.getDate();

        props.setDate(new Date(year,month,day))
    }
    useEffect(()=>{
        year.current = new Date(props.date).getFullYear();
        setCells(range(year.current-6,year.current+8));
    },[ props.date,year ])

    console.log(selected)
    return (
        <div className="years" style={{}}>
            <div className="years-grid">
                { cells.map( x=>
                    <div className='cell'
                         onClick={ ()=>handleYearChange(x) }
                         style={ x === selected
                                    ? styles.selected
                                    : x === year.current
                                        ? styles.now
                                        : {}
                                }
                    >
                        {x}
                    </div>
                )}
            </div>
        </div>
    )
}
export default YearMode;