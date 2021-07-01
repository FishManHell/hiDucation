import React from 'react';
import {Container, HeadingTextSection} from "../StyledComponents/Styled";
import bestTeacher from '../img/four.jpg'
import MultiCarouselSuccessStories from "./Carousel/MultiCarouselSuccessStories";
import {
    BlockBestText,
    BlockImgBestTeacher, DescriptionBestTeacher,
    ImgBestTeacher,
    MainBlockBestTeacher, MainTextBestTeacher,
    WrapperSectionAbout
} from "../StyledComponents/StyledAbout";

const About = () => {
    return (
        <WrapperSectionAbout name={'about'}>
            <Container width={'80%'}>
            <HeadingTextSection color={'#323232'}>About hiDucation Mission</HeadingTextSection>
                <MainBlockBestTeacher>
                    <BlockImgBestTeacher>
                        <ImgBestTeacher src={bestTeacher}/>
                    </BlockImgBestTeacher>
                    <BlockBestText>
                        <MainTextBestTeacher>Your best teacher is <br/> YOU</MainTextBestTeacher>
                        <DescriptionBestTeacher>hiDucation intends to improve(by revolution) students eLearning experience by providing them the best  conditions </DescriptionBestTeacher>
                    </BlockBestText>
                </MainBlockBestTeacher>
                <HeadingTextSection color={'#323232'} padding={'20px 0 50px 0'}>Success Stories</HeadingTextSection>
            </Container>
            <Container width={'99%'}>
                <MultiCarouselSuccessStories/>
            </Container>
        </WrapperSectionAbout>
    );
};

export default About;