import {monthName, range} from "../utilities.js";
import {useEffect, useRef, useState} from "react";
import {useTheme} from "../../../ThemeContext.js";
import Button from "../../button/Button.js";
import {ReactComponent as Arrow} from "../icons/right.svg";
import {ReactComponent as SideArrow} from "../icons/sideArrow.svg";
import HeaderDate from "../HeaderDate.js";

function YearMode(props) {
    const [colors] = useTheme();
    const [ cells,setCells ]=useState([]);
    const refYear= useRef()
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
        },
        icons:{
            fill:colors.onSurfaceVariant
        },
        smallDate:{
            color:colors.onSurfaceVariant
        }
    }
    function reloadCells(referenceYear) {
        setCells( range(referenceYear-6 , referenceYear+8))
        refYear.current = referenceYear;
    }

    useEffect(()=>{
        reloadCells(props.year)

    },[props.year])

    return (<>
        <HeaderDate onClickForward={ ()=>reloadCells(refYear.current+15) }
                    onClickBackward={ ()=>reloadCells(refYear.current-15) }
                    onClickDown={ ()=>props.setMode('days') }
                    month={ props.month }
                    year={ (selectedYear || props.year) }
        />
        {/*<div className="localSelectionRow grid-order">*/}
        {/*    <div className="date"*/}
        {/*         onClick={ ()=>props.setMode('days') }*/}
        {/*         style={styles.smallDate}*/}
        {/*    >*/}
        {/*        { monthName(props.month) },{ selectedYear || props.year }*/}
        {/*        <Arrow className='icon-down'*/}
        {/*               style={ styles.icons }*/}
        {/*        />*/}
        {/*    </div>*/}
        {/*    <div className="icons">*/}
        {/*        <SideArrow style={ styles.icons }*/}
        {/*                   className="icon-left"*/}
        {/*                   onClick={ ()=>reloadCells(refYear.current-15)}*/}
        {/*        />*/}
        {/*        <SideArrow style={ styles.icons }*/}
        {/*                   className="icon-right"*/}
        {/*                   onClick={ ()=>reloadCells(refYear.current+15)}*/}
        {/*        />*/}
        {/*    </div>*/}
        {/*</div>*/}
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
                 style={{ backgroundColor:colors.outlineVariant }}
            />
            <div className="actions">
                <div className='btns-container'>
                    <Button type={ 'text' }
                            click={ props.hide }
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