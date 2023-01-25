
import './modal.scss'
import {useTheme} from "../../ThemeContext.js";
import React from "react";

function Modal( props ) {
    const [colors]=useTheme();
    const internalStyle={
        width:props.width+'px'
    }
    return (
        props.show ? (
            <div className='modal-component'>
                <div
                    className='scrim'
                    onClick={ props.hide }
                    style={{
                        backgroundColor:`${colors.scrim}`
                    }}

                />
                <div
                    id='modal-container'
                    style={{...internalStyle,...props.style}}
                >
                    { props.children }

                </div>
            </div>
        ) : (
            ''
        )
    );
}
export { Modal };
