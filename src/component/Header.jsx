

// must be returned a single parent element
// you can write js code in html using only curly brackets
// self-closing  must be: </img>
//class will be: ClassName='list'
//can not use inline style but you can do this inside the double carly brackets: syle ={{color:'red',BackgroundColor:'black'}} it is just like a js object
//write attributes in camale case like: onClick ={ () => {alter('hello')}}




const Header = () => {
    return (
        <div>


            <nav>
                <ul className="unorder_list">
                    <li style = {{ display:'inline-block',padding:'5px' }}><a href="#">Home</a></li>
                    <li style = {{ display:'inline-block',padding:'5px' }}><a href="#">About</a></li>
                    <li style = {{ display:'inline-block',padding:'5px' }}><a href="#">Contact</a></li>
                    <li style = {{ display:'inline-block',padding:'5px' }}><a href="#">Services</a></li>
                    <li style = {{ display:'inline-block',padding:'5px' }}><a href="#">Blog</a></li>
                    <li style = {{ display:'inline-block',padding:'5px' }}><a href="#">Login</a></li>
                    <li style = {{ display:'inline-block',padding:'5px' }}><a href="#">Sign Up</a></li>
                    <li style = {{ display:'inline-block',padding:'5px' }}><a href="#">Cart</a></li>
                    <li style = {{ display:'inline-block',padding:'5px' }}><a href="#">Wishlist</a></li>
                    <li style = {{ display:'inline-block',padding:'5px' }}><a href="#">Checkout</a></li>
                   
                </ul>
            </nav>

            <button onClick={ () => {
                alert('Checkout')
            }} type="button">Click</button>

     

            
            
        </div>
    );
};

export default Header;