import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEmployeeContext } from "./EmployeeContext";


export default  function AddEmployeeForm(){


     const[formData,setFormData]=useState({
        name:'',
        email:'',
        designation:''
     })

     const{updateEmployeeData}=useEmployeeContext();

     const[showPopup,setShowPopup]=useState(false);
     const navigate=useNavigate()
       
     const handleChange=(e)=>{
        setFormData({
            ...formData,[e.target.name]:e.target.value
        })
    }
     
      const handleSubmit=(e)=>{
        e.preventDefault();
        
        setShowPopup(true);
      }
       
       const handlePopupClose=(e)=>{
        updateEmployeeData(formData);
        setFormData({name:'',email:'',designation:''})
        setShowPopup(false);
        navigate('/employees');
       }

    return(
        <div className="form-container">
        <h2>Add Employee</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange}/>
        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange}/>
        <input type="text" placeholder="Designation" name="designation"value={formData.designation} onChange={handleChange}/>
        <button type="submit" className="oksubmission">Submit</button>
        </form>
        {showPopup&&(
            <div className="popup">
                <p>{`${formData.name}has been added`}</p>
                <button onClick={handlePopupClose} >ok</button>
            </div>
        )}
        </div>

    )
}