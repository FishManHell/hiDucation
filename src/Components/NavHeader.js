import React, {useEffect, useState} from 'react';
import {BlockHeaderContent, BlockList, List} from "../StyledComponents/StyledHeader";
import {Container, LogoBlock, LogoImg} from "../StyledComponents/Styled";
import {BlockBurgerMenu, BurgerMenu, WrapperBurgerMenu, WrapperNavHeader} from "../StyledComponents/StyledNavHeader";
import {useSelector} from "react-redux";
import {Link, Events} from "react-scroll";
import styled from "styled-components";
import logo from '../img/hieducation.svg'

const ListItem = styled.li`
  position: relative;
  margin: 0 20px;
`

const NavHeader = ({setOpenModal}) => {
    const email = useSelector(state => state.userAuth.user.email)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleBurgerMenu = () => setIsMenuOpen(!isMenuOpen);
    const handleCloseModal = () => setIsMenuOpen(false)

    const handleOpenModal = () => {
        handleCloseModal()
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
            <Container width={'85%'}>
                <BlockHeaderContent>
                    <LogoBlock>
                        <Link to={'home'} spy={true} smooth={true} duration={1000} onClick={() => handleCloseModal()}>
                            <LogoImg src={logo} alt={'hiDucation'}/>
                        </Link>
                    </LogoBlock>
                    <BlockList>
                        <WrapperBurgerMenu open={isMenuOpen} className={isMenuOpen ? 'open' : ''}/>

                        <BlockBurgerMenu
                            className={isMenuOpen ? 'open' : ''}
                            onClick={() => handleBurgerMenu()}
                            open={isMenuOpen}>
                            <BurgerMenu open={isMenuOpen}/>
                        </BlockBurgerMenu>

                        <List open={isMenuOpen} close={!isMenuOpen} className={isMenuOpen ? 'open' : ''}>
                            <ListItem className={'list_header'}>
                                <Link
                                    to={'home'}
                                    activeClass={'active'}
                                    className={'list_header-button'}
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                    onClick={() => handleCloseModal()}
                                >home</Link>
                            </ListItem>
                            <ListItem className={'list_header'}>
                                <Link
                                    to={'product'}
                                    activeClass={'active'}
                                    className={'list_header-button'}
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                    onClick={() => handleCloseModal()}
                                >product</Link>
                            </ListItem>
                            <ListItem className={'list_header'}>
                                <Link
                                    to={'about'}
                                    activeClass={'active'}
                                    className={'list_header-button'}
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                    onClick={() => handleCloseModal()}
                                >about</Link>
                            </ListItem>
                            <ListItem className={'list_header'}>
                                <Link
                                    to={'team'}
                                    activeClass={'active'}
                                    className={'list_header-button'}
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                    onClick={() => handleCloseModal()}
                                >team</Link>
                            </ListItem>
                            <ListItem className={'list_header'}>
                                <Link
                                    to={'contact'}
                                    activeClass={'active'}
                                    className={'list_header-button'}
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                    onClick={() => handleCloseModal()}
                                >contact</Link>
                            </ListItem>
                            <ListItem className={'list_header'}>
                                <button
                                    className={'list_header-button'}
                                    onClick={() => handleOpenModal()}
                                >
                                    {email ? 'Profile' : 'login'}
                                </button>
                            </ListItem>
                        </List>
                    </BlockList>
                </BlockHeaderContent>
            </Container>
        </WrapperNavHeader>
    );
};

export default NavHeader;