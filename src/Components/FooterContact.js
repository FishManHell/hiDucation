import React from 'react';
import {Container, HeadingTextSection} from "../StyledComponents/Styled";
import {
    copyright,
    facebook,
    gitHub,
    instagram,
    linkEdin,
    twitter,
    whatsApp,
    youTube
} from "../Utils/Font Awesome/Solid";
import {
    BlockInputTextarea, ButtonSendFooter, EndBlockFooter, InputFooter, LinkFooter,
    MainBlock, MainBlockInputs, MainBlockLinkFooter,
    TextareaFooter,
    TextFooter,
    WrapperFooter
} from "../StyledComponents/StyledFooter";



const FooterContact = () => {
    return (
        <WrapperFooter name={'contact'}>
            <Container width={'80%'}>
                <HeadingTextSection color={'#fff'} padding={'20px 0'}>Get In Touch</HeadingTextSection>
                <TextFooter text_align={'center'}>We'd love to hear your thoughts and be in touch with you</TextFooter>
                <MainBlock>
                    <BlockInputTextarea width={'100%'} height={'80px'}>
                        <TextareaFooter placeholder={'Message'}></TextareaFooter>
                    </BlockInputTextarea>
                    <MainBlockInputs>
                        <BlockInputTextarea width={'220px'} height={'40px'}>
                            <InputFooter type={''} placeholder={'Email Address'}/>
                        </BlockInputTextarea>
                        <BlockInputTextarea width={'220px'} height={'40px'}>
                            <InputFooter type={''} placeholder={'Full Name'}/>
                        </BlockInputTextarea>
                        <ButtonSendFooter>Send</ButtonSendFooter>
                    </MainBlockInputs>
                </MainBlock>
                <EndBlockFooter>
                    <TextFooter>{copyright} 2021 hiMath Gaming</TextFooter>
                    <MainBlockLinkFooter>
                        <LinkFooter href={'https://github.com/'} target={'_blank'}>{gitHub}</LinkFooter>
                        <LinkFooter href={'https://www.facebook.com/'} target={'_blank'}>{facebook}</LinkFooter>
                        <LinkFooter href={'https://www.instagram.com/'} target={'_blank'}>{instagram}</LinkFooter>
                        <LinkFooter href={'https://twitter.com/'} target={'_blank'}>{twitter}</LinkFooter>
                        <LinkFooter href={'https://www.linkedin.com/'} target={'_blank'}>{linkEdin}</LinkFooter>
                        <LinkFooter href={'https://www.whatsapp.com/'} target={'_blank'}>{whatsApp}</LinkFooter>
                        <LinkFooter href={'https://www.youtube.com/'} target={'_blank'}>{youTube}</LinkFooter>
                    </MainBlockLinkFooter>
                </EndBlockFooter>
            </Container>
        </WrapperFooter>
    );
};

export default FooterContact;