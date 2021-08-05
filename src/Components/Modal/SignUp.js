import React from 'react';
import {BlockInput, BlockSignInSignUp, ButtonSend, Input, LabelInput, MainBlockInput, TextChangeType} from "./SignIn";
import {envelope, eye, graduation_cap, key, university, user} from "../../Utils/Font Awesome/Solid";
import {eye_slash} from "../../Utils/Font Awesome/Regular";
import {BlockError, ErrorTextModalForm} from "../../StyledComponents/SrtyledModal";
import {useSelector} from "react-redux";
import styled from "styled-components";
import {device} from "../../Utils/MediaSize";

const BlockWithProfile = styled.div`
  width: ${props => props.width};

  @media all and ${device.tabletS} {
    width: 100%;
  }
`

const SignUp = ({showPassword, setShowPassword, email, password, userName, userLastName, learning, study, repeatPassword, width, handleSwitchRequest}) => {
    const emailRedux = useSelector(state => state.userAuth.user.email);

    return (
        <BlockSignInSignUp width={width} margin={emailRedux ? '50px 0 0 0 ' : '0'}>
            <MainBlockInput display={emailRedux ? 'flex' : 'block'}>
                <BlockWithProfile width={emailRedux ? '49%' : '100%'}>
                    <BlockInput>
                        <LabelInput>{user}</LabelInput>
                        <Input
                            type={'text'}
                            placeholder={'First Name'}
                            value={userName.value}
                            name={'name'}
                            onChange={e => userName.onChange(e)}
                            onBlur={e => userName.onBlur(e)}
                        />
                        <BlockError left={'0'}>
                            {(userName.isDirty && userName.isEmpty)
                            &&
                            <ErrorTextModalForm>Field is empty</ErrorTextModalForm>}
                        </BlockError>
                        <BlockError right={'0'}>
                            {(userName.isDirty && userName.nameError)
                            &&
                            <ErrorTextModalForm top={'45px'} left={'90px'}>Wrong name</ErrorTextModalForm>}
                        </BlockError>
                    </BlockInput>

                    {
                        emailRedux
                            ?
                            <BlockInput>
                                <LabelInput>{user}</LabelInput>
                                <Input
                                    type={'text'}
                                    placeholder={'Last Name'}
                                    value={userLastName.value}
                                    name={'lastName'}
                                    onChange={e => userLastName.onChange(e)}
                                    onBlur={e => userLastName.onBlur(e)}
                                />
                                <BlockError left={'0'}>
                                    {(userLastName.isDirty && userLastName.isEmpty)
                                    &&
                                    <ErrorTextModalForm>Field is empty</ErrorTextModalForm>}
                                </BlockError>
                                <BlockError right={'0'}>
                                    {(userLastName.isDirty && userLastName.lastNameError)
                                    &&
                                    <ErrorTextModalForm top={'45px'} left={'90px'}>Wrong name</ErrorTextModalForm>}
                                </BlockError>
                            </BlockInput>
                            :
                            null
                    }


                    <BlockInput>
                        <LabelInput>{graduation_cap}</LabelInput>
                        <Input
                            type={'text'}
                            placeholder={'Where Learning ?'}
                            value={learning.value}
                            // disabled
                            required
                            name={'learning'}
                            onChange={e => learning.onChange(e)}
                            onBlur={e => learning.onBlur(e)}
                        />
                        <BlockError left={'0'}>
                            {(learning.isDirty && learning.isEmpty)
                            &&
                            <ErrorTextModalForm>Field is empty</ErrorTextModalForm>}
                        </BlockError>
                    </BlockInput>

                    <BlockInput>
                        <LabelInput>{university}</LabelInput>
                        <Input
                            type={'text'}
                            placeholder={'What study ?'}
                            value={study.value}
                            // disabled
                            required
                            name={'text'}
                            onChange={e => study.onChange(e)}
                            onBlur={e => study.onBlur(e)}
                        />
                        <BlockError left={'0'}>
                            {(study.isDirty && study.isEmpty)
                            &&
                            <ErrorTextModalForm>Field is empty</ErrorTextModalForm>}
                        </BlockError>
                    </BlockInput>
                </BlockWithProfile>

                <BlockWithProfile width={emailRedux ? '49%' : '100%'}>
                    <BlockInput>
                        <LabelInput>{envelope}</LabelInput>
                        <Input
                            type={'email'}
                            placeholder={'E-mail'}
                            value={email.value}
                            required
                            name={'email'}
                            onChange={e => email.onChange(e)}
                            onBlur={e => email.onBlur(e)}
                        />
                        <BlockError left={'0'} bottom={'-35px'}>
                            {
                                (email.isDirty && email.isEmpty)
                                &&
                                <ErrorTextModalForm>Field is empty</ErrorTextModalForm>
                            }
                        </BlockError>
                        <BlockError right={'0'} bottom={'-35px'}>
                            {(email.isDirty && email.emailError)
                            &&
                            <ErrorTextModalForm>Wrong email</ErrorTextModalForm>}
                        </BlockError>
                    </BlockInput>

                    <BlockInput>
                        <LabelInput>{key}</LabelInput>
                        <Input
                            type={showPassword ? 'password' : 'text'}
                            placeholder={'Password'}
                            required
                            value={password.value}
                            name={'password'}
                            onChange={e => password.onChange(e)}
                            onBlur={e => password.onBlur(e)}
                        />
                        <TextChangeType
                            onClick={() => setShowPassword(!showPassword)}>{showPassword ? eye_slash : eye}</TextChangeType>
                        <BlockError left={'0'} bottom={'-35px'}>
                            {
                                (password.isDirty && password.isEmpty)
                                &&
                                <ErrorTextModalForm>Field is empty</ErrorTextModalForm>
                            }
                        </BlockError>
                        <BlockError right={'0'} bottom={'-35px'}>
                            {
                                (password.isDirty && password.passwordError)
                                &&
                                <ErrorTextModalForm>Wrong Password</ErrorTextModalForm>
                            }
                        </BlockError>
                    </BlockInput>

                    <BlockInput>
                        <LabelInput>{key}</LabelInput>
                        <Input
                            type={'password'}
                            placeholder={'Repeat Password'}
                            required
                            name={'password'}
                            value={repeatPassword.value}
                            onChange={e => repeatPassword.onChange(e)}
                            onBlur={e => repeatPassword.onBlur(e)}
                        />
                        <BlockError left={0}>
                            {
                                (repeatPassword.isDirty && repeatPassword.isEmpty)
                                &&
                                <ErrorTextModalForm>Field is empty</ErrorTextModalForm>
                            }
                        </BlockError>
                        <BlockError right={'0'}>
                            {
                                (repeatPassword.isDirty && repeatPassword.value !== password.value)
                                &&
                                <ErrorTextModalForm>Пароли не совпадают</ErrorTextModalForm>
                            }
                        </BlockError>
                    </BlockInput>
                </BlockWithProfile>
            </MainBlockInput>
            {emailRedux
                ?
                null
                :
                <BlockInput>
                    <ButtonSend
                        onClick={() => {
                            // handleSendReg(email.value, password.value)
                            handleSwitchRequest(email.value, password.value, 2)
                        }}
                        disabled={!email.inputValid || !password.inputValid || !userName.inputValid || !repeatPassword.inputValid}
                    >
                        Registration
                    </ButtonSend>
                </BlockInput>
            }

        </BlockSignInSignUp>
    );
};

export default SignUp;