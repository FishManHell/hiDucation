import React from 'react';
import {
    BlockError,
    BlockInput,
    BlockLeftModal,
    BlockRightModal,
    BlockSectionModal, ErrorTextModalForm,
    Input,
    LabelInput
} from "../../StyledComponents/SrtyledModal";
import styled from "styled-components";
import {useSelector} from "react-redux";

const MainBlockInputs = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 20px;
`

const MainBlockImgProfile = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #FFCF40;
  padding-bottom: 20px;
  flex-direction: column;
`

const BlockImgProfile = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid #FFBF00;
  border-radius: 20px;
`

const BlockButtonImg = styled.div`

`
const ButtonGetImgAndRemove = styled.button`
  margin-top: 10px;
  width: 90px;
  height: 30px;
  border-radius: 20px;
  
  &:first-child {
    margin-right: 15px;
  }
  
`
const ImgProfile = styled.img`
    
`

const Profile = ({email, password, userName, lastName, institute, degree}) => {



    return (
        <div>
            <BlockSectionModal flex_direction={'column'}>
                <MainBlockInputs>
                    <BlockLeftModal>
                        <BlockInput width={'70%'}>
                            <LabelInput width={'100%'} margin={'0 auto 5px auto'}>
                                FirstName
                            </LabelInput>
                            <Input
                                margin={'0 auto 5px auto'}
                                width={'100%'}
                                type={'text'}
                                value={userName.value}
                                name={'name'}
                                placeholder={'Fish'}
                                onChange={e => userName.onChange(e)}
                                onBlur={e => userName.onBlur(e)}
                            />
                        </BlockInput>
                        <BlockInput width={'70%'}>
                            <LabelInput width={'100%'} margin={'0 auto 5px auto'}>
                                LastName
                            </LabelInput>
                            <Input
                                margin={'0 auto 5px auto'}
                                width={'100%'}
                                type={'text'}
                                placeholder={'Man'}
                                value={lastName.value}
                                name={'lastName'}
                                onChange={e => lastName.onChange(e)}
                                onBlur={e => lastName.onBlur(e)}
                            />
                        </BlockInput>
                        <BlockInput width={'70%'}>
                            <LabelInput width={'100%'} margin={'0 auto 5px auto'}>
                                Institute
                            </LabelInput>
                            <Input
                                margin={'0 auto 5px auto'}
                                width={'100%'}
                                type={'text'}
                                placeholder={'DMU'}
                                value={institute.value}
                                name={'institute'}
                                onChange={e => institute.onChange(e)}
                                onBlur={e => institute.onBlur(e)}
                            />
                        </BlockInput>
                    </BlockLeftModal>
                    <BlockRightModal>
                        <BlockInput margin_left={'auto'} width={'70%'}>
                            <LabelInput text_align={'right'} width={'100%'} margin={'0 auto 5px auto'}>
                                Degree
                            </LabelInput>
                            <Input
                                margin={'0 auto 5px auto'}
                                width={'100%'}
                                type={'text'}
                                placeholder={'bachelor'}
                                value={degree.value}
                                name={'degree'}
                                onChange={e => degree.onChange(e)}
                                onBlur={e => degree.onBlur(e)}
                            />
                        </BlockInput>
                        <BlockInput margin_left={'auto'} width={'70%'}>
                            <LabelInput text_align={'right'} width={'100%'} margin={'0 auto 5px auto'}>
                                Email
                            </LabelInput>
                            <Input
                                margin={'0 auto 5px auto'}
                                width={'100%'}
                                type={'email'}
                                placeholder={'name@email.com'}
                                value={email.value}
                                name={'email'}
                                onChange={e => email.onChange(e)}
                                onBlur={e => email.onBlur(e)}
                            />
                        </BlockInput>
                        <BlockInput margin_left={'auto'} width={'70%'}>
                            <LabelInput text_align={'right'} width={'100%'} margin={'0 auto 5px auto'}>
                                Password
                            </LabelInput>
                            <Input
                                margin={'0 auto 5px auto'}
                                width={'100%'}
                                type={'password'}
                                placeholder={'12345678'}
                                value={password.value}
                                name={'password'}
                                onChange={e => password.onChange(e)}
                                onBlur={e => password.onBlur(e)}
                            />
                        </BlockInput>
                    </BlockRightModal>

                </MainBlockInputs>

                <MainBlockImgProfile>
                    <BlockError left={'0'} top={'0'}>
                        {(userName.isDirty && userName.isEmpty)
                        &&
                        <ErrorTextModalForm color={'#fff'}>The field cannot be
                            empty</ErrorTextModalForm>}
                        {(userName.isDirty && userName.nameError)
                        &&
                        <ErrorTextModalForm>Wrong name</ErrorTextModalForm>}
                    </BlockError>
                    <BlockError left={'0'} top={'60px'}>
                        {(lastName.isDirty && lastName.isEmpty)
                        &&
                        <ErrorTextModalForm color={'#fff'}>The field cannot be
                            empty</ErrorTextModalForm>}
                        {(lastName.isDirty && lastName.lastNameError)
                        &&
                        <ErrorTextModalForm>Wrong lastName</ErrorTextModalForm>}
                    </BlockError>
                    <BlockError left={'0'} top={'120px'}>
                        {(institute.isDirty && institute.isEmpty)
                        &&
                        <ErrorTextModalForm color={'#fff'}>The field cannot be
                            empty</ErrorTextModalForm>}
                    </BlockError>
                    <BlockError right={'0'} top={'0'}>
                        {(degree.isDirty && degree.isEmpty)
                        &&
                        <ErrorTextModalForm color={'#fff'}>The field cannot be
                            empty</ErrorTextModalForm>}
                    </BlockError>
                    <BlockError right={'0'} top={'60px'}>
                        {(email.isDirty && email.isEmpty)
                        &&
                        <ErrorTextModalForm color={'#fff'}>The field cannot be
                            empty</ErrorTextModalForm>}
                        {(email.isDirty && email.emailError)
                        &&
                        <ErrorTextModalForm>Wrong email</ErrorTextModalForm>}
                    </BlockError>
                    <BlockError right={'0'} top={'120px'}>
                        {(password.isDirty && password.isEmpty)
                        &&
                        <ErrorTextModalForm color={'#fff'}>The field cannot be
                            empty</ErrorTextModalForm>}
                        {(password.isDirty && password.passwordError)
                        &&
                        <ErrorTextModalForm>Wrong password</ErrorTextModalForm>}
                    </BlockError>
                    <BlockImgProfile>
                        <ImgProfile>

                        </ImgProfile>
                    </BlockImgProfile>
                    <BlockButtonImg>
                        <ButtonGetImgAndRemove>Add</ButtonGetImgAndRemove>
                        <ButtonGetImgAndRemove>Dell</ButtonGetImgAndRemove>
                    </BlockButtonImg>
                </MainBlockImgProfile>
            </BlockSectionModal>
        </div>
    );
};

export default Profile;