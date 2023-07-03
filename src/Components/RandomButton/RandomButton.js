import React from "react";
import './RandomButton.css';

export const RandomButton = ({onClick}) => {
    return <button onClick={onClick}>Get a task</button>
}