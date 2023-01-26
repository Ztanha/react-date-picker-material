
import './modal.scss'
import {useTheme} from "../../ThemeContext.js";
import React, {useEffect, useRef, useState} from "react";

function Modal( props ) {
    const [colors]=useTheme();
    const modal=useRef();
    const scrim=useRef();

    const internalStyle={
        zIndex: 1001
    }

    useEffect(()=>{
        if( modal.current ) {
            let zIndex= parseInt( window.getComputedStyle( modal.current ).zIndex);
            scrim.current.style.zIndex = zIndex - 1;
        }
    },[ modal,scrim ])

    return (
        props.show ? (
            <div className='modal-component'>
                <div
                    className='scrim'
                    onClick={ props.hide }
                    ref={ scrim }
                    style={{
                        backgroundColor:`${ colors.scrim }`
                    }}

                />
                <div
                    className='modal-container'
                    ref={ modal }
                    style={{ ...internalStyle,...props.style }}
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
