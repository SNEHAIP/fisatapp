import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.get("https://courseapplogix.onrender.com/getdata").then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
        ).catch((error)=>{
            console.log(error.message)
        }).finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">FirstName</th>
                                    <th scope="col">LastName</th>
                                    <th scope="col">college</th>
                                    <th scope="col">dob</th>
                                    <th scope="col">course</th>
                                    <th scope="col">mobile</th>
                                    <th scope="col">email</th>
                                    <th scope="col">address</th>



                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value, index) => {
                                        return (<tr>
                                            <th scope="row">{value._id}</th>
                                            <th scope="row">{value.firstname}</th>
                                            <th scope="row">{value.lastname}</th>
                                            <th scope="row">{value.college}</th>
                                            <th scope="row">{value.dob}</th>                                            
                                            <th scope="row">{value.course}</th>
                                            <th scope="row">{value.mobile}</th>
                                            <th scope="row">{value.email}</th>
                                            <th scope="row">{value.address}</th>
                                           
                                        </tr>)
                                    }
                                )

                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll