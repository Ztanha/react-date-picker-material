import Button from "../button/Button.js";

function Actions() {
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