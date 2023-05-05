import './Box.css'
const Box = (props) => {
    return(
        <button className="Box" onClick={props.onClick} style = {props.value === "X" ? {
            color : "red" 
        } : {
            color : "green"
        }}>
            {props.value}
        </button>
    )
}

export default Box