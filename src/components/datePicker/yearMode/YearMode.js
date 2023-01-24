import {daysInMonth, getMonthStartDay, range} from "../utilities.js";
import {useEffect, useRef, useState} from "react";

function YearMode(props) {
    const year = useRef(0);
    const [ cells,setCells ] = useState([]);

    useEffect(()=>{
        year.current = new Date(props.date).getFullYear();
        setCells(range(year.current-6,year.current+8));
    },[props.date,year])

    console.log(cells)
    return (
        <div className="years" style={{}}>
            <div className="years-grid">
                { cells.map(x=>
                    <div className='cell'>
                        {x}
                    </div>
                )}
            </div>
        </div>
    )
}
export default YearMode;