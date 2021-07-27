import React, {useState} from 'react';
import {Container, HeadingTextSection} from "../StyledComponents/Styled";
import {search} from "../Utils/Font Awesome/Solid";
import {
    MainBlockButtonSearch,
    WrapperProductsSection,
    ButtonSearch,
    BlockButtonSearch,
    ButtonSearchSpan,
    MainBlockInputSearch,
    BlockInputSearch,
    InputSearchInvisible,
} from "../StyledComponents/StyledProduct";
import MultiCarouselProduct from "./Carousel/MultiCarouselProduct";

const Product = () => {
    const [searchInput, setSearchInput] = useState(false);
    const [textSearchInput, setTextSearchInput] = useState('');


    const handleSearchInput = e => {
        setTextSearchInput(e.target.value)
    }

    const handleCloseSearchInput = () => {
        setSearchInput(false);
    }

    return (
        <WrapperProductsSection name={'product'}>
            <Container width={'80%'}>
            <HeadingTextSection color={'#fff'}>Product</HeadingTextSection>
                <MainBlockButtonSearch>
                    <BlockButtonSearch>
                        <ButtonSearch onClick={() => handleCloseSearchInput()}>All</ButtonSearch>
                    </BlockButtonSearch>
                    <BlockButtonSearch>
                        <ButtonSearch onClick={() => handleCloseSearchInput()}>Math</ButtonSearch>
                    </BlockButtonSearch>
                    <BlockButtonSearch>
                        <ButtonSearch onClick={() => handleCloseSearchInput()}>Programming</ButtonSearch>
                    </BlockButtonSearch>
                    <BlockButtonSearch>
                        <ButtonSearch onClick={() => handleCloseSearchInput()}>Physics</ButtonSearch>
                    </BlockButtonSearch>
                    <BlockButtonSearch>
                        <ButtonSearch onClick={() => setSearchInput(!searchInput)}>
                            <ButtonSearchSpan margin_right={'20px'} rotate={'90deg'}>{search}</ButtonSearchSpan>
                            <ButtonSearchSpan>Search</ButtonSearchSpan>
                        </ButtonSearch>
                    </BlockButtonSearch>
                </MainBlockButtonSearch>
                <MainBlockInputSearch>
                    {searchInput
                        ?
                        <BlockInputSearch>
                            <InputSearchInvisible
                                type={'text'}
                                placeholder={'Search_Product'}
                                value={textSearchInput}
                                onChange={e => handleSearchInput(e)}
                            />
                        </BlockInputSearch>
                        :
                        null
                    }
                </MainBlockInputSearch>
                <MultiCarouselProduct/>
            </Container>
        </WrapperProductsSection>
    );
};

export default Product;