import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Home() {

    const[ users, setUser]=useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        // console.log("Hello world")
    //    try {
        
    //     const response = await axios.get(`http://localhost:8080/getAllUsers`);
    //     console.log(response);

    //    } catch (error) {
    //     console.log(error);
    //    }
    loadUsers();
    },[]);

    const loadUsers=async()=>{

        const result = await axios.get("http://localhost:8080/getAllUsers");
        console.log(result);
        setUser(result.data);
        console.log(users);
    };

    const viewProfile = (id) => {
        navigate(`/viewUser/${id}`);
    };
    const editProfile = (id) => {
        navigate(`/editUser/${id}`);
    };
    const deleteUser = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:8080/deleteUser/${id}`);
                // After successful deletion, reload the users
                loadUsers();
            } catch (error) {
                console.log("Error deleting user:", error);
            }
        }
    };


  return (
    <div  className='container'>

        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    

        {
            users.map((user, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <button className='btn btn-primary max-2'onClick={() => viewProfile(user.id)}>View</button>
                            <button className='btn btn-primary-outlined max-2' onClick={() => editProfile(user.id)}>Edit</button>
                            <button className='btn btn-danger max-2'onClick={() => deleteUser(user.id)}>delete</button>
                        </td>
                    </tr>
                );
            })
        }
      
    
    
  </tbody>
</table>

        </div>
        
    </div>
  )
}
