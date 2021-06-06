import './ToggleButton.css'

const ToggleButton = (props) => {
    function clickHandler(evt) {
        props.onClick();
    }
    return (
        <div id={props.value ? 'on' : 'off'} className="ToggleButton" onClick={clickHandler}>
            <div className="bar">
                <div className="circle"></div>
            </div>
        </div>
    )
}

export default ToggleButton;