import React from 'react'
import "./EmployeeTile.css"

const EmployeeTile = (props) => {
    return (
        <div className= "tile">
            <p><span>Name -</span> {props.name}</p>
            <p><span>Department -</span> {props.department}</p>
            <p><span>Age -</span> {props.age}</p>
            
        </div>
    )
}

export default EmployeeTile
