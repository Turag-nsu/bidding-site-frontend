import React from 'react';
import { CardGroup } from 'react-bootstrap';
import ProductCard from '../productCard/productCard';

const HomepageProducts = ({allProductDetails}) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "2rem",
                // marginTop: "2rem",
            }}
        >
            
            <div className="card-group-container"
                style={{
                    backgroundColor: "lightgray",
                    borderRadius: "10px",
                }}
            >
                <CardGroup>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            // width: "100%",
                            margin: "0.5rem",
                            padding: "1rem",
                            backgroundColor: "lightgray",
                            borderRadius: "10px",
                            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                        }}
                    >
                        <h1>Products</h1>
                    </div>
                    
                    {allProductDetails.map((product, index) => {
                        //const ProductCard=({title, body, image, price, uploader })=> {
                        return (<ProductCard key={index} 
                            title={product.title} 
                            body={product.body} 
                            image={product.image} 
                            price={product.price} 
                            uploader={product.uploader}
                        />);
                    })}
                    
                </CardGroup>
            </div>
        </div>
    );
};

export default HomepageProducts;