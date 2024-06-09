import React, { useState } from 'react'
import NavBar from './NavBar'

const SearchStudent = () => {
    const[data,setData]=useState(
        {
            "first":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="form-label">FirstName</label>
                            <input type="text" className="form-control" name='first'value={data.first}onChange={inputHandler} />
                        </div>
                        <center>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button class="btn btn-success"onClick={readValue}>SEARCH</button>
                        </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchStudent