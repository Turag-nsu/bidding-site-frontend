import React from "react";
import ProductCard from "../components/productCard/productCard";
import product1 from "../Images/car.jpeg"


const ProductPage = () => {
    return (
        <div>
            <ProductCard title="test" body="test" image={product1} price="test" uploader="test" />
        </div>
    );
}
export default ProductPage;