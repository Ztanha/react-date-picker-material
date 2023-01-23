import './datePicker.scss'
import {Modal} from "../modal/Modal.js";
import {useEffect, useState} from "react";
import {ReactComponent as Pencil} from "./icons/pencil.svg";
import {ReactComponent as Arrow} from "./icons/right.svg";
import {ReactComponent as SideArrow} from "./icons/sideArrow.svg";
import {ThemeProvider, useTheme} from "../../ThemeContext.js";
const DatePicker = props=><ThemeProvider><ActualDatePicker {...props}/></ThemeProvider>;
function ActualDatePicker(props) {

    const month= ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weekday= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const days= [...Array(30).keys()]
    const [ mode,setMode ]=useState('days')
    const [colors]= useTheme();
    const styles={
        datePicker:{
            color:colors.onSurfaceVariant,
            backgroundColor:colors.surface3,
            fontFamily:'Roboto'
        },
        icons:{
          fill:colors.onSurfaceVariant
        }
    }
    let date = new Date();

    // useEffect(()=>{
    //     console.log(props.date);
    //     setMode('day')
    // },[props.date])

    return (
        <div className='DatePicker'
             style={{ ...styles.datePicker,...props.style }}
        >
            <Modal show={ props.show }
                   hide={ props.hide }>

                { mode === 'days'

                    ? <div className="calendar">
                        <div className="calendar-header">
                            <label>{ props.title || 'Select date' }</label>
                            <div className="header-date grid-order" style={{ color:colors.onSurface,fontSize:'2em' }}>
                                { weekday[ date.getDay() ] },
                                { month[ date.getMonth() ].slice(0,3) }
                                { date.getDate() }
                                <Pencil style={styles.icons}/>
                            </div>
                        </div>
                        <div className="line" style={{ backgroundColor:colors.outline }}/>
                        <div className="localSelectionRow grid-order">
                            <div className="date">
                                { month[ date.getMonth() ] },{ date.getFullYear() }
                                <Arrow className='icon-down'/>
                            </div>
                            <div className="icons">
                                <SideArrow style={styles.icons} className="icon-left"/>
                                <SideArrow style={styles.icons} className="icon-right"/>
                            </div>
                        </div>
                        <div className="days">
                            <div className="days-grid">
                                { weekday.map((x,index)=>
                                    <span key={index}>
                                        { x.charAt(0) }
                                    </span>
                                )}
                                { days.map(x=>
                                    <span className="day" key={x}>
                                        {x}
                                    </span>
                                ) }
                            </div>
                        </div>
                        <div className="actions">
                        </div>
                    </div>

                    : mode === 'months'

                        ? <div className="months">Months</div>
                        : <div className="years">Years</div>
                }
            </Modal>
        </div>
    )
}

export default DatePicker;