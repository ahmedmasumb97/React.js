
const Content = () => {
    return (
     

        <div className="container">
                <h1>Our Store</h1>
                <p>Discover our latest products and meet our commitment to quality.</p>
                <a href="#">Shop Now</a>
                <hr />

                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <img src="https://designsvalley.com/wp-content/uploads/2023/04/product-hunting-1024x576.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Product 1</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <img src="https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0=" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Product 2</h5>
                                <p className="card-text">Some quick example text to build on the card/</p>
                            </div>
                        </div>   
                    </div>
            </div>
            
        </div>
    );
};

export default Content;