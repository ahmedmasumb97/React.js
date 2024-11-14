import React from 'react';
import { useParams } from 'react-router-dom';
import Menu from "./menu.jsx";


const profile = () => {

    let {id, name} = useParams()

    return (
        <div>

            <Menu/>
            <h1>Profile page</h1>
            <div>
                <p><strong>ID: </strong>{id}</p>
                <p><strong>Name: </strong>{name}</p>
            </div>
            <p>Welcome to your profile page. Here you can update your profile information, view your orders, and manage your account.</p>

            
            
        </div>
    );
};

export default profile;