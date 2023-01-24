import {daysInMonth, getMonthStartDay, range} from "../utilities.js";
import {useEffect, useRef, useState} from "react";

function YearMode(props) {
    const year = useRef(0);
    const [ cells,setCells ] = useState([]);

    function makeTable() {
        for( let i = 0 ;i <= year ;i++) {

        }
    }
    useEffect(()=>{
        year.current = new Date(props.date).getFullYear();
        setCells(range(year.current-6,year.current+9));
    },[props.date,year])

    console.log(cells)
    return (
        <div className="days">
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