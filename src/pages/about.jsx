import React from "react";
import Menu from "./menu.jsx";



const about = () => {
    return (
        <div>

            <Menu />

            <h1>About page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laborum nulla in ducimus labore neque, temporibus error nostrum dolor nesciunt?</p>
            <div className="button-group">
                <button type="button">Login</button>
                <button type="button">Register</button>
            </div>
        </div>
    );
};

export default about;