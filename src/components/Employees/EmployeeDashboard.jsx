import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useEmployeeContext } from "./EmployeeContext";

 
 export default function EmployeeDashboard() {
   const {employeeData,updateEmployeeData}=useEmployeeContext();
   const[editableRow,setEditableRow]=useState(null);
   const[localData,setLocalData]=useState(employeeData);//local state to
   const navigate = useNavigate();

   const handleAdd = () => {
     navigate("/addemployee");
   };
 const handleEdit=(index)=>{
 setEditableRow(index);

 };
 
 const handleDelete=(index)=>{
   const updatedData=[...localData]
   updatedData.splice(index,1); 
  setLocalData(updatedData);
  
 }
 const handleInputChange=(index,field,value)=>{
   const updatedData=[...localData];
   updatedData[index][field]=value;
   setLocalData(updatedData);
 }
 const handleSave=() =>{
   updateEmployeeData(localData);
   setEditableRow(null);
 };

    return(

        <div>
             <h2>Employee Dashboard</h2>
            <table className="employee-table-container">
                <thead>
                    <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>DESIGNATION</th>
                    <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {/*map through employeeData to display*/}
                    {localData.map((employee,index)=>(
                    <tr key={index}>
                    <td>
                      {editableRow===index?(
                        <input type="text" value={employee.name} onChange={(e)=>handleInputChange(index,"name",e.target.value)}/>
                      ):(employee.name)}
                        </td>
                    <td>
                        {editableRow===index?(
                        <input type="email" value={employee.email} onChange={(e)=>handleInputChange(index,"email",e.target.value)}/>
                
                        ):(employee.email)}
                        </td>
                    <td>
                    {editableRow===index?(
                        <input type="text" value={employee.designation} onChange={(e)=>handleInputChange(index,"designation",e.target.value)}/>
    
                        ):(employee.designation)}
                        </td>
                     <td>
                        <button onClick={()=>handleEdit(index)}>Edit</button>
                        <button onClick={()=>handleDelete(index)}>Delete</button>
                    </td>
                    </tr>
                    ))}
                </tbody>
            </table>
       
        <div className="button-container">
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSave}>save</button>
        </div>
        </div>
    )
 }










//  import React, {useState} from "react";
//  import { useNavigate } from "react-router-dom";
//  import { useEmployeeContext } from "./EmployeeContext";
 
 
//  export default function EmployeeDashboard() {
//    const {employeeData,updateEmployeeData}=useEmployeeContext();
//    const[editableRow,setEditableRow]=useState(null)
//    const navigate = useNavigate();
//    const handleAdd = () => {
//      navigate("/addemployee");
//    };
//  const handleEdit=(index)=>{
//  setEditableRow(index);
//  }
 
//  const handleDelete=(index)=>{
//    const updatedData=[...employeeData]
//    updatedData.splice(index,1);
//    updateEmployeeData(updatedData); 
//  }
 
//  const handleInputChange=(index,field,value)=>{
//    const updatedData=[...employeeData];
//    updatedData[index][field]=value;
//    updateEmployeeData(updatedData);
//  }
//  const handleSave=(index)=>{
//    // const updatedData=[...employeeData];
//    // updatedData[index]=updatedEmployee;
//    // updateEmployeeData(updatedData);
//    setEditableRow(null);
//  }



//  return (
//     <div>
//       <h2>Employee Dashboard</h2>
//       <table className="employee-table-container">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Designation</th>
//             <th>Action</th>
//           </tr>
//         </thead>
// <tbody>
//           {/*Map through employeeData to display rows */}
//           {employeeData.map((employee,index)=>(
//           <tr key={index}>
//             <td>
//               {editableRow===index?(
//               <input type="text" value={employee.name} onChange={(e)=>handleInputChange(index,'name',e.target.value)}/>
//               ):(
//                 employee.name
//               )}
//             </td>






