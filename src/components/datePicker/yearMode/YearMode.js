import {daysInMonth, getMonthStartDay, range} from "../utilities.js";
import {useEffect, useRef, useState} from "react";
import {useTheme} from "../../../ThemeContext.js";
import Button from "../../button/Button.js";
import {ReactComponent as Arrow} from "../icons/right.svg";
import {ReactComponent as SideArrow} from "../icons/sideArrow.svg";

function YearMode(props) {
    const [colors] = useTheme();
    const cells = range( props.year-6 , props.year+8 )
    const [ selectedYear,setSelectedYear ] = useState();
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

    return (<>
        <div className="localSelectionRow grid-order">
            <div className="date"
                 onClick={ ()=>props.setMode('days') }
            >
                { props.month },{ selectedYear || props.year }
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
        <div className="years" style={{}}>
            <div className="years-grid">
                { cells.map( x=>
                    <div className={(x === props.year) ? 'now cell': 'cell'}
                         onClick={ ()=>setSelectedYear(x) }
                         key={x}
                         style={ x === selectedYear
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
            <div className="actions">
                <div className='btns-container'>
                    <Button type={ 'text' }
                            click={ props.onClick }
                    >
                        Cancel
                    </Button>
                    <Button type={ 'text' }
                            click={ ()=>props.onChange(selectedYear)}
                    >
                        OK
                    </Button>
                </div>
            </div>
        </div>
    </>)
}
export default YearMode;