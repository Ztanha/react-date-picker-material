import './datePicker.scss'
import {Modal} from "../modal/Modal.js";
import {useRef, useState} from "react";
import {ReactComponent as Pencil} from "./icons/pencil.svg";
import {ReactComponent as Arrow} from "./icons/right.svg";
import {ReactComponent as SideArrow} from "./icons/sideArrow.svg";
import {ThemeProvider, useTheme} from "../../ThemeContext.js";
import DayMode from "./dayMode/DayMode.js";
import YearMode from "./yearMode/YearMode.js";
const DatePicker = props=><ThemeProvider><ActualDatePicker {...props}/></ThemeProvider>;

function ActualDatePicker(props) {

    const month= ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weekday= ["Sun","Mon","Tue","Wed","Thu","Fri","Sau"];
    const [ mode,setMode ]=useState('days')
    const [colors]= useTheme();
    const date = useRef(new Date());
    const styles={
        datePicker:{
            color:colors.onSurfaceVariant,
            backgroundColor:colors.surface3,
            fontFamily:'Roboto'
        },
        icons:{
            fill:colors.onSurfaceVariant
        },
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
        }
    }
    return (
        <div className='DatePicker'
             style={{ ...styles.datePicker,...props.style }}
        >
            <Modal show={ props.show }
                   hide={ props.hide }>
                <div className="calendar">
                    <div className="calendar-header" >
                        <label>{ props.title || 'Select date' }</label>
                        <div className="header-date grid-order" style={styles.calHeader} >
                            { weekday[ date?.current.getDay() ] },
                            { month[ date?.current.getMonth() ].slice(0,3) }
                            { date?.current.getDate() }
                            <Pencil style={styles.icons}/>
                        </div>
                    </div>
                    <div className="line" style={{ backgroundColor:colors.outline }}/>
                    <div className="localSelectionRow grid-order">
                        <div className="date" onClick={ ()=>setMode(mode === 'years' ? 'days': 'years' ) }>
                            { month[ date?.current.getMonth() ] },{ date?.current.getFullYear() }
                            <Arrow className='icon-down' style={styles.icons}/>
                        </div>
                        <div className="icons">
                            <SideArrow style={styles.icons} className="icon-left"/>
                            <SideArrow style={styles.icons} className="icon-right"/>
                        </div>
                    </div>

                { mode === 'days'

                    ? <DayMode {...props}/>

                    : mode === 'years'

                        ? <YearMode {...props} />
                        : <div className="years">Years</div>
                }
                </div>
                <div className="actions">
                </div>
            </Modal>
        </div>
    )
}



export default DatePicker;