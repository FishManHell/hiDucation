import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {responsiveProduct} from "../../Utils/UtilsCarousel";
import Product from "./Product";

const MultiCarouselProduct = ({products, filterArrayProducts, changeClass}) => {
    const filterArray = () => {
        if (filterArrayProducts.length) {
            return filterArrayProducts.map(product => <Product key={product.id} product={product}/>)
        } else {
            return products.map(product => <Product key={product.id} product={product}/>)
        }
    }

    return (
        <div>
            <Carousel responsive={responsiveProduct} className={`test ${changeClass()}`}>
                {filterArray()}
            </Carousel>
        </div>

    );
};

export default MultiCarouselProduct;