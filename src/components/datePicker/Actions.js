import Button from "../button/Button.js";
import React from "react";

function Actions(props) {
    return (
        <div className="actions">
            <div className='btns-container'>
                <Button type={ 'text' }
                        click={ props.onClickLeftOne }
                >
                    Cancel
                </Button>
                <Button type={ 'text' }
                        click={ props.onClickRightOne }
                >
                    OK
                </Button>
            </div>
        </div>
    )
}
export default Actions;