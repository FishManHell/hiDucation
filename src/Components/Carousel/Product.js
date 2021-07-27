import React from 'react';
import {
    BlockProduct,
    BlockText,
    ButtonProduct,
    ImgProducts,
    MainTextProduct,
    TextProduct
} from "../../StyledComponents/StyledProduct";
import {products} from "../../Utils/ObjectProduct";

const Product = ({product}) => {
    const test = products.filter(item => item.mainName === product.mainName)


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