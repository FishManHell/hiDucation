import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {responsiveProduct} from "../../Utils/UtilsCarousel";
import Product from "./Product";

const MultiCarouselProduct = ({products, filterArrayProducts, changeClass}) => {
    return (
        <div>
            <Carousel responsive={responsiveProduct} className={`change_product ${changeClass()}`}>
                {filterArrayProducts.length
                    ? filterArrayProducts.map((product) => <Product key={product.id} product={product} />)
                    : products.map((product) => <Product key={product.id} product={product}/>)
                }
            </Carousel>
        </div>
    );
};

export default MultiCarouselProduct;