import React from 'react';
import {HeadingTextSection} from "../StyledComponents/Styled";
import {Carousel} from "react-bootstrap";
import four from '../img/four.jpg'
import five from '../img/five.jpg'
import six from '../img/six.jpg'
import {BlockImgItem, BlockInformation, BlockItem, ContainerItemCarousel, InformationText, NameTeam, WrapperTeam} from "../StyledComponents/StyledTeam";



const Team = () => {
    return (
        <WrapperTeam name={'team'}>
            <HeadingTextSection color={'#fff'} padding={'20px 0 50px 0'}>The Team</HeadingTextSection>
            <Carousel>
                <Carousel.Item>
                    <ContainerItemCarousel>
                        <BlockItem>
                            <BlockImgItem background_image={four}/>
                            <BlockInformation>
                                <NameTeam>Denis</NameTeam>
                                <InformationText>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                    quis,
                                    sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                                    vulputate eget, arcu. In enim justo, rhoncus ut,
                                </InformationText>
                            </BlockInformation>
                        </BlockItem>
                    </ContainerItemCarousel>
                </Carousel.Item>
                <Carousel.Item>
                    <ContainerItemCarousel>
                        <BlockItem>
                            <BlockImgItem background_image={five}/>
                            <BlockInformation>
                                <NameTeam>Kesha</NameTeam>
                                <InformationText>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                    quis,
                                    sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                                    vulputate eget, arcu. In enim justo, rhoncus ut,
                                </InformationText>
                            </BlockInformation>
                        </BlockItem>
                    </ContainerItemCarousel>
                </Carousel.Item>
                <Carousel.Item>
                    <ContainerItemCarousel>
                        <BlockItem>
                            <BlockImgItem background_image={six}/>
                            <BlockInformation>
                                <NameTeam>Sasha</NameTeam>
                                <InformationText>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                    quis,
                                    sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                                    vulputate eget, arcu. In enim justo, rhoncus ut,
                                </InformationText>
                            </BlockInformation>
                        </BlockItem>
                    </ContainerItemCarousel>
                </Carousel.Item>
            </Carousel>
        </WrapperTeam>
    );
};

export default Team;