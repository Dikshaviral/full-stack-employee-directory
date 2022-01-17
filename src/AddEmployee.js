import React from 'react'
import {useState} from "react";
import {db} from "./firebase-config";
import {addDoc, collection} from "firebase/firestore";

import "./AddEmployee.css"

const AddEmployee = () => {
    
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState("");
    const [newDepartment, setNewDepartment] = useState("");
    const empCollection = collection(db,"employees");

    const addEmployee = async()=>{
        await addDoc(empCollection, {Name : newName, Department: newDepartment, Age: newAge});
        window.location.href='/';
        
      }
      
    return (
        <div className="box">
              <input placeholder="Name..." onChange={(event)=> {setNewName(event.target.value)}}></input>   
                 <input placeholder="Department..."  onChange={(event)=> {setNewDepartment(event.target.value)}}></input>   
    <input placeholder="Age..."  onChange={(event)=> {setNewAge(event.target.value)}}></input>   
                <button onClick = {addEmployee}>Add Employee</button>
        </div>
    )
}

export default AddEmployee
