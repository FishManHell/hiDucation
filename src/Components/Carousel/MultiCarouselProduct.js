import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {responsiveProduct} from "../../Utils/UtilsCarousel";
import {products} from "../../Utils/ObjectProduct";
import Product from "./Product";

const MultiCarouselProduct = () => {

    return (
        <div>
            <Carousel responsive={responsiveProduct}>
                {products.map(product => <Product key={product.id} product={product}/>)}
            </Carousel>
        </div>

    );
};

export default MultiCarouselProduct;