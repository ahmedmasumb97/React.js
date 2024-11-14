import React from 'react';
import { useParams } from 'react-router-dom';
import Menu from "./menu.jsx";

const product = () => {

    let {id,name} = useParams()

    return (


        <div>
            <Menu />
            <h1>product page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab delectus, voluptatum voluptas quas perferendis, voluptatibus molestias, commodi hic nemo veniam ea rerum? Nisi, expedita? Ipsam, impedit.
            </p>

            <div>
                <p><strong>ID: </strong>{id}</p>
                <p><strong>Name: </strong>{name}</p>
            </div>

            <div className="card-group">
                <div className="card">this card</div>
                <div className="card-body">
                    <h5 className="card-title">Product 1</h5>
                    <p className="card-text">Some quick example text to build on the card/</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <img src="https://designsvalley.com/wp-content/uploads/2023/04/product-hunting-1024x576.jpg" className="card-img-top" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default product;