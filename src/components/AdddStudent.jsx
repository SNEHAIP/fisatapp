import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AdddStudent = () => {
    const[data,setData]=useState(
        {

            "firstname":"",
            "lastname": "",
            "college":"",
            "dob":"",
            "course":"",
            "mobile":"",
            "email":"",
            "address":""
       }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
        const readValue=()=>{
            console.log(data)
            axios.post("https://courseapplogix.onrender.com/addstudents",data).then(
                (response)=>{
                    console.log(response.data)
                    if(response.data.status=="success") 
                        { 
                             alert("successfully added")
                        
                    } else { 
                        alert("error")
                        
                    }
                }
            ).catch()
        }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="form-label">FirstName</label>
                            <input type="text" className="form-control" name='firstname'value={data.first}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="form-label">LastName</label>
                        <input type="text" className="form-control"name='lastname'value={data.last}onChange={inputHandler} />


                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="form-label">College</label>
                        <input type="text" className="form-control" name='college'value={data.college}onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="form-label">DOB</label>
                        <input type="date" name="dob" id="" className="form-control"value={data.dob}onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="form-label">Course</label>
                        <select name="course" id="" className="form-control"value={data.course}onChange={inputHandler}>
                            <option value="MCA">MCA</option>
                            <option value="MBA">MBA</option>
                            <option value="MTECH">MTECH</option>
                            <option value="MECH">MECH</option>
                        </select>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="form-label">Mobileno</label>
                        <input type="text" className="form-control"name='mobile'value={data.mobile}onChange={inputHandler} />



                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="form-label">Email</label>
                        <input type="email" name="" id="" className="form-control" name='email' value={data.email}onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="form-label">Address</label>
                        <textarea name="address" id="" className="form-control"value={data.address} onChange={inputHandler}></textarea>

                        </div>
                        <center>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button class="btn btn-success"onClick={readValue}>SUBMIT</button>
                        </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdddStudent