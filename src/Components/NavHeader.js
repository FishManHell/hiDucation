import React, {useEffect, useState} from 'react';
import {BlockHeaderContent, BlockList, List} from "../StyledComponents/StyledHeader";
import {Container, LogoBlock, LogoSpanFirst, LogoSpanLittleSpan, LogoSpanSecond} from "../StyledComponents/Styled";
import {BlockBurgerMenu, BurgerMenu, WrapperBurgerMenu, WrapperNavHeader} from "../StyledComponents/StyledNavHeader";
import {useSelector} from "react-redux";
import {Link, Events} from "react-scroll";

const NavHeader = ({setOpenModal}) => {
    const email = useSelector(state => state.userAuth.user.email)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleBurgerMenu = () => setIsMenuOpen(!isMenuOpen);


    const handleOpenModal = () => {
        setOpenModal(true)
        if (document.body.style.overflow !== "hidden") {
            document.body.style.overflow = "hidden";
        }
    }

    useEffect(() => {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

    }, [])

    return (
        <WrapperNavHeader>
            <Container width={'80%'}>
                <BlockHeaderContent>
                    <LogoBlock>
                        <LogoSpanFirst font_size={'2.3rem'} line_height={'2.563rem'}>
                            <LogoSpanLittleSpan font_size={'2.2rem'}>hi</LogoSpanLittleSpan>Ducation
                        </LogoSpanFirst>
                    </LogoBlock>
                    <BlockList>
                        <WrapperBurgerMenu open={isMenuOpen} className={isMenuOpen ? 'open' : ''}>
                        </WrapperBurgerMenu>

                        <BlockBurgerMenu className={isMenuOpen ? 'open' : ''} onClick={() => handleBurgerMenu()} open={isMenuOpen}>
                            <BurgerMenu open={isMenuOpen}/>
                        </BlockBurgerMenu>

                        <List open={isMenuOpen} close={!isMenuOpen} className={isMenuOpen ? 'open' : ''}>
                            <li className={'list_header'}>
                                <Link to={'home'} activeClass={'active'} className={'list_header-button'} spy={true} smooth={true} duration={1000}>home</Link>
                            </li>
                            <li className={'list_header'}>
                                <Link to={'product'} activeClass={'active'} className={'list_header-button'} spy={true} smooth={true} duration={1000}>product</Link>
                            </li>
                            <li className={'list_header'}>
                                <Link to={'about'} activeClass={'active'} className={'list_header-button'} offset={-100} spy={true} smooth={true} duration={1000}>about</Link>
                            </li>
                            <li className={'list_header'}>
                                <Link to={'team'} activeClass={'active'} className={'list_header-button'} spy={true} smooth={true} duration={1000}>team</Link>
                            </li>
                            <li className={'list_header'}>
                                <Link to={'contact'} activeClass={'active'} className={'list_header-button'} spy={true} smooth={true} duration={1000}>contact</Link>
                            </li>
                            <li className={'list_header'}>
                                <button className={'list_header-button'} onClick={() => handleOpenModal()}>{email ? 'Profile' : 'login'}</button>
                            </li>
                        </List>
                    </BlockList>
                </BlockHeaderContent>
            </Container>
        </WrapperNavHeader>
    );
};

export default NavHeader;