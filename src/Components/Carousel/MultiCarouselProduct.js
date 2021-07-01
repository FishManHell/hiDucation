import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
    BlockProduct,
    BlockText,
    ButtonProduct,
    ImgProducts,
    MainTextProduct,
    TextProduct
} from "../../StyledComponents/StyledProduct";
import imgProduct from "../../img/two.png";
import {responsiveProduct} from "../../Utils/UtilsCarousel";

const MultiCarouselProduct = () => {
    return (
        <div>
            <Carousel responsive={responsiveProduct}>
                <BlockProduct>
                    <ImgProducts src={imgProduct}/>
                    <BlockText>
                        <MainTextProduct>Main Product</MainTextProduct>
                        <TextProduct>sdasdasdasdasdasdasdasd</TextProduct>
                    </BlockText>
                    <ButtonProduct onClick={() => alert('LOL')}>Purchase</ButtonProduct>
                </BlockProduct>
                <BlockProduct>
                    <ImgProducts src={imgProduct}/>
                    <BlockText>
                        <MainTextProduct>Main Product</MainTextProduct>
                        <TextProduct>sdasdasdasdasdasdasdasd</TextProduct>
                    </BlockText>
                    <ButtonProduct onClick={() => alert('LOL')}>Purchase</ButtonProduct>
                </BlockProduct>
                <BlockProduct>
                    <ImgProducts src={imgProduct}/>
                    <BlockText>
                        <MainTextProduct>Main Product</MainTextProduct>
                        <TextProduct>sdasdasdasdasdasdasdasd</TextProduct>
                    </BlockText>
                    <ButtonProduct onClick={() => alert('LOL')}>Purchase</ButtonProduct>
                </BlockProduct>
                <BlockProduct>
                    <ImgProducts src={imgProduct}/>
                    <BlockText>
                        <MainTextProduct>Main Product</MainTextProduct>
                        <TextProduct>sdasdasdasdasdasdasdasd</TextProduct>
                    </BlockText>
                    <ButtonProduct onClick={() => alert('LOL')}>Purchase</ButtonProduct>
                </BlockProduct>
                <BlockProduct>
                    <ImgProducts src={imgProduct}/>
                    <BlockText>
                        <MainTextProduct>Main Product</MainTextProduct>
                        <TextProduct>sdasdasdasdasdasdasdasd</TextProduct>
                    </BlockText>
                    <ButtonProduct onClick={() => alert('LOL')}>Purchase</ButtonProduct>
                </BlockProduct>
                <BlockProduct>
                    <ImgProducts src={imgProduct}/>
                    <BlockText>
                        <MainTextProduct>Main Product</MainTextProduct>
                        <TextProduct>sdasdasdasdasdasdasdasd</TextProduct>
                    </BlockText>
                    <ButtonProduct onClick={() => alert('LOL')}>Purchase</ButtonProduct>
                </BlockProduct>
                <BlockProduct>
                    <ImgProducts src={imgProduct}/>
                    <BlockText>
                        <MainTextProduct>Main Product</MainTextProduct>
                        <TextProduct>sdasdasdasdasdasdasdasd</TextProduct>
                    </BlockText>
                    <ButtonProduct onClick={() => alert('LOL')}>Purchase</ButtonProduct>
                </BlockProduct>
            </Carousel>
        </div>

    );
};

export default MultiCarouselProduct;