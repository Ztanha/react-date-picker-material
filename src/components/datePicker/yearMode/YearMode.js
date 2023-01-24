import {daysInMonth, getMonthStartDay, range} from "../utilities.js";
import {useEffect, useRef, useState} from "react";
import {useTheme} from "../../../ThemeContext.js";

function YearMode(props) {
    const [colors] = useTheme();
    const cells = range( props.year-6 , props.year+8 )
    const [ selected,setSelected ] = useState(0);
    const styles = {
        cell:{
            color : colors.onSurfaceVariant
        },
        now:{
            backgroundColor: colors.primary,
            color:colors.onPrimary,
        },
        selected:{
            border: `1px solid ${ colors.primary }`,
        }
    }

    // function handleYearChange(year){
    //
    //     const tempDate = new Date(props.date);
    //     const month = tempDate.getMonth();
    //     const day =tempDate.getDate();
    //
    //     props.setDate(new Date(year,month,day))
    // }

    return (
        <div className="years" style={{}}>
            <div className="years-grid">
                { cells.map( x=>
                    <div className={(x === props.year) ? 'now cell': 'cell'}
                         onClick={ ()=>setSelected(x) }
                         key={x}
                         style={ x === selected
                                    ? styles.selected
                                    : x === props.year
                                        ? styles.now
                                        : styles.cell
                        }
                    >
                        {x}
                    </div>
                )}
            </div>
            <div className="line"
                 style={{ backgroundColor:colors.outline }}
            />
        </div>
    )
}
export default YearMode;