import {monthName} from "./utilities.js";
import {ReactComponent as Arrow} from "../icons/right.svg";
import {ReactComponent as SideArrow} from "../icons/sideArrow.svg";

function HeaderDate( props ){
    const styles={
        icons:{
            fill:colors.onSurfaceVariant
        },
        smallDate:{
            color:colors.onSurfaceVariant
        }
    }
    return (
        <>
            <div className="date"
                 onClick={ ()=>props.setMode('years') }
                 style={ styles.smallDate }
            >
                { monthName(refMonth)},{ refYear }
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
        </>
    )
}
export default HeaderDate;