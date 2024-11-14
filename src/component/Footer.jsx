
const Footer = () => {
    return (
        <div>

            <footer>
                <p>&copy; 2021 My Website. All rights reserved.</p>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                </ul>

                <div className="social-media">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>

                <div className="payment-methods">
                    <img src="" alt="payment methods" />
                </div>
            </footer>
            
        </div>
    );
};

export default Footer;