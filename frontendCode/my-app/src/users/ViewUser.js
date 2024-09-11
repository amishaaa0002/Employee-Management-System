import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';

function ViewUser() {
    const { id } = useParams(); 

    const [user,setUser]=useState({
        name:"",
        email:"",
        username:""
    });

    const{name,email,username}=user;
    
    useEffect(()=>{
        loadUsersData();
    },[]);

    const loadUsersData=async()=>{
        const response = await axios.get(`http://localhost:8080/getUserById/${id}`);
        console.log(response);
        setUser(response.data)
    };

   

  return (
<div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">User Details</h2>

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            value={user.name}
                            readOnly
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your username"
                            value={user.username}
                            readOnly
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">E-mail</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your e-mail address"
                            value={user.email}
                            readOnly
                        />
                    </div>

                    <Link className="btn btn-outline-primary" to="/">
                        Back to List
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default ViewUser