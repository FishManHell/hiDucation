import React from 'react';
import {
    BlockProduct,
    BlockText,
    ButtonProduct,
    ImgProducts,
    MainTextProduct,
    TextProduct
} from "../../StyledComponents/StyledProduct";

const Product = ({product}) => {
    return (
        <BlockProduct>
            <ImgProducts src={product.img}/>
            <BlockText>
                <MainTextProduct>{product.mainName}</MainTextProduct>
                <TextProduct>{product.sectionInform}</TextProduct>
            </BlockText>
            <ButtonProduct onClick={() => console.log(product.id)}>Purchase</ButtonProduct>

        </BlockProduct>
    );
};

export default Product;