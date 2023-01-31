
import './modal.scss'
import {useTheme} from "../../ThemeContext.js";
import React, {useEffect, useRef} from "react";

function Modal( props ) {
    const [colors]=useTheme();
    const modal=useRef();
    const scrim=useRef();

    const internalStyle={
        zIndex: 1001,
    }

    return (
        props.show ? (
            <div className='modal-component'>
                <div
                    className='scrim'
                    onClick={ props.hide }
                    ref={ scrim }
                    style={{
                        backgroundColor:`${ colors.scrim }`,
                        zIndex: (props.style?.zIndex-1 || 1000)
                    }}

                />
                <div
                    className='modal-container'
                    ref={ modal }
                    style={{ ...internalStyle,...(props.style || {}) }}
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
