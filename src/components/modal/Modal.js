
import './modal.scss'
import {useTheme} from "../../ThemeContext.js";
import React from "react";

function Modal( props ) {
    const [colors]=useTheme();
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
                    style={{
                             // color : colors.onSurface,
                             width:props.width+'px'
                    }}
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
