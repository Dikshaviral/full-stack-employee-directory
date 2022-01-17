import './App.css';
import {useState, useEffect} from "react";
import {db} from "./firebase-config";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {collection, deleteDoc, doc, getDocs} from "firebase/firestore";
import AddEmployee from './AddEmployee';

import EmployeeTile from './EmployeeTile';


function App() {
  const [employees, setEmployees] = useState([]);
  const empCollection = collection(db,"employees");

  const deleteEmployee = async(id) =>{
      const empdoc = doc(db, "employees", id);
      await deleteDoc(empdoc);
      window.location.href='/';
  }

  useEffect(() => {

    const getEmployees= async()=>{
      const data = await getDocs(empCollection);
      console.log(data);
      setEmployees(data.docs.map((doc)=>({...doc.data(), id: doc.id })));

    }
    getEmployees()
  }, [])
  return ( 
    <BrowserRouter>
    <Routes> 
    <Route path = "/" element={<div><h1 className="heading">Employee Directory</h1>
    <button className="add"><Link to="add">Add an Employee</Link></button>
      {
        employees.map((emp) => {
          return <div className="employeeList">
            <EmployeeTile name = {emp.Name} department= {emp.Department} age = {emp.Age}/>            
            <button className="delete" onClick={()=> deleteEmployee(emp.id)}>Delete Employee</button>
          </div>
        })
      }</div>}>   
   
    
     
      </Route>
    {  <Route path="add" element={<AddEmployee/>}>       

      </Route>}
      
    
   
      
    
    </Routes>
    
    </BrowserRouter>   
    
  );
}

export default App;
