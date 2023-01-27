import {monthName} from "./utilities.js";
import React from "react";
import {ReactComponent as Arrow} from "./icons/right.svg";
import {ReactComponent as SideArrow} from "./icons/sideArrow.svg";
import {useTheme} from "../../ThemeContext.js";

function HeaderDate( props ){
    const [ colors ]= useTheme();
    const styles={
        icons:{
            fill:colors.onSurfaceVariant
        },
        smallDate:{
            color:colors.onSurfaceVariant
        }
    }
    return (
        <div className="localSelectionRow grid-order">
            <div className="date"
                 onClick={ props.onClickDown }
                 style={ styles.smallDate }
            >
                { monthName(props.month)} { props.year }
                <Arrow className='icon-down'
                       style={ styles.icons }
                />
            </div>
            <div className="icons">
                <SideArrow style={ styles.icons }
                           className="icon-left"
                           onClick={ props.onClickBackward }
                />
                <SideArrow style={ styles.icons }
                           className="icon-right"
                           onClick={ props.onClickForward }
                />
            </div>
        </div>
    )
}
export default HeaderDate;