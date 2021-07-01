import React from 'react';
import {Container} from "../StyledComponents/Styled";
import {BlockContentMain, HeaderNav, MainHeaderTextOne, MainHeaderTextTwo} from "../StyledComponents/StyledHeader";

const Header = () => {
    return (
        <HeaderNav name={'home'}>
            <Container width={'80%'}>
                <BlockContentMain>
                    <MainHeaderTextOne >
                        hiDucation
                    </MainHeaderTextOne>
                    <MainHeaderTextTwo>
                        Revolutionize Learning
                    </MainHeaderTextTwo>
                </BlockContentMain>
            </Container>
        </HeaderNav>
    );
};

export default Header;