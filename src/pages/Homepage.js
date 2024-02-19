import React from "react";
import CustomCarousel from "../components/customCarousel/customCarousel";
import HomepageProducts from "../components/homepageProducts/homepageProducts";
import AboutUs from "../components/aboutUs/aboutUs";
import ServiceArea from "../components/serviceArea/serviceArea";
import { Helmet } from "react-helmet-async";


const Homepage = () => {
    return (
        <div>
            <Helmet>
                <title>Homepage</title>
            </Helmet>
            <CustomCarousel />
            {/* <h1>Hi</h1> */}
            <HomepageProducts
            allProductDetails={[
                //const ProductCard=({title, body, image, price, uploader })=> {
                {
                    title: "Car",
                    body: "This is a car",
                    image: "car.jpeg",
                    price: 100000,
                    uploader: "John Doe",
                },
                {
                    title: "Bike",
                    body: "This is a bike",
                    image: "bike.jpeg",
                    price: 20000,
                    uploader: "John Doe",
                },
                {
                    title: "Truck",
                    body: "This is a truck",
                    image: "truck.jpeg",
                    price: 300000,
                    uploader: "John Doe",
                },
            ]}
            />
            <AboutUs />
            <ServiceArea />
        </div>
    );
}

export default Homepage;