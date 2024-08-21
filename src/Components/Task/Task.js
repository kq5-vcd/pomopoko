import './Task.css';


export const Task = (props) => {
    const click = () => {
        props.onButtonClick(props.track)
    }

    return (
        <div className="Task">
            <div className="task-name">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            <button className="Track-action" onClick={click}>
                {props.isRemoval ? '-' : '+'}
            </button>
        </div>
    );
}