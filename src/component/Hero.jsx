
const Hero = (props) => {
    return (
        <div>

            <div className="hero">
                <h1>Welcome to Our Store</h1>
                <p>Discover our latest products and meet our commitment to quality.</p>

               <img src="https://static01.nyt.com/images/2024/01/31/multimedia/31walmart-tpvq/31walmart-tpvq-articleLarge.jpg?quality=75&auto=webp&disable=upscale" ></img>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim reiciendis delectus velit sunt numquam aliquid ex quisquam cupiditate. Id ex ratione dolore a quae, ipsam, eveniet delectus consectetur aliquam aut minima vel, nostrum asperiores debitis adipisci sed distinctio deleniti. Aut nam voluptas assumenda provident, perspiciatis error vero libero consequatur similique.</p>
                <a href="#">More </a>

            </div>


            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>Type: {props.type}</p>

            {/* obj */}
            {/* <ul>
                <li>Name: {props.item['name']}</li>
                <li>Age: {props.item['age']}</li>
                <li>Address: {props.item['address']}</li>
            </ul>
 */}


                <p>
                    <button onClick={props.btn}>Click Me</button>
                </p>

                
    
            
        </div>
    );
};

export default Hero;