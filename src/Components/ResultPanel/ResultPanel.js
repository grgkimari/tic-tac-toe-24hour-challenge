import './ResultPanel.css'

const ResultPanel = (props) => {
    return(
        <div className='ResultPanel'>
            Status : {props.status}
            <button onClick={props.resetHandler}>
                Reset
            </button>
        </div>
    )
}

export default ResultPanel