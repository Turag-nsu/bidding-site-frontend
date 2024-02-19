import React from "react";
import ProductCard from "../../components/productCard/productCard";
import product1 from "../../Images/car.jpeg"
import { useState, useEffect } from "react";
import { Row, Col, CardGroup } from "react-bootstrap";
import axios from "axios";
import { Helmet } from "react-helmet-async";
const ProductPage = () => {
    const baseUrl = 'https://bidding-site.onrender.com/api';
    const [products, setProducts] = useState([]);
    const [pageLoading, setPageLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sort, setSort] = useState('asc');
    const [sortField, setSortField] = useState('title');
    const [category, setCategory] = useState('all');
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);
    const [totalPages, setTotalPages] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Fetch products
        axios.get(`${baseUrl}/products`)
            .then(response => {
                setProducts(response.data);
                setPageLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setError(error);
                setPageLoading(false);
            });
    }, []);
    return (
        <div>
            <Helmet>
                <title>All Products</title>
            </Helmet>
            <h1>All Products</h1>
            <CardGroup>
                {products.map((product, index) => (
                    // const ProductCard=({title, body, image, price, uploader })=> {
                    <ProductCard
                        key={index}
                        id={product.id}
                        title={product.name}
                        body={product.description}
                        image={product.image}
                        price={product.price}
                        // uploader={product.uploader}
                    />

                ))}
            </CardGroup>
        </div>
    );
}
export default ProductPage;