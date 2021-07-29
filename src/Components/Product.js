import React, {useState} from 'react';
import {Container, HeadingTextSection} from "../StyledComponents/Styled";
import {
    MainBlockButtonSearch,
    WrapperProductsSection,
    ButtonSearch,
    BlockButtonSearch,
} from "../StyledComponents/StyledProduct";
import MultiCarouselProduct from "./Carousel/MultiCarouselProduct";
import {useDispatch, useSelector} from "react-redux";
import {filterProduct} from "../ReduxToolkit/ReducerFilter";

const Product = () => {
    const products = useSelector(state => state.filterSlice.products);
    const filterArrayProducts = useSelector(state => state.filterSlice.filterArrayProducts);
    const dispatch = useDispatch()
    const valueButton = ['All', 'Math', 'Programming', 'Physics']

    const changeClass = () => filterArrayProducts.length >= 3 ? 'center' : 'not_change'

    const handleCloseSearchInput = (e) => {
        console.log(e.target.value)
        if (e.target.value === 'All') {
            dispatch(filterProduct())
        } else {
            dispatch(filterProduct(e.target.value))
        }
    }

    return (
        <WrapperProductsSection name={'product'}>
            <Container width={'80%'}>
                <HeadingTextSection color={'#fff'}>Product</HeadingTextSection>
                <MainBlockButtonSearch>
                    {valueButton.map(item =>
                        <BlockButtonSearch key={item}>
                            <ButtonSearch
                                value={item}
                                onClick={e => handleCloseSearchInput(e)}>
                                {item}
                            </ButtonSearch>
                        </BlockButtonSearch>
                    )}
                </MainBlockButtonSearch>
                <MultiCarouselProduct products={products} filterArrayProducts={filterArrayProducts} changeClass={changeClass}/>
            </Container>
        </WrapperProductsSection>
    );
};

export default Product;