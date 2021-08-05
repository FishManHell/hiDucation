import React from 'react';
import {BlockInput, BlockSignInSignUp, ButtonSend, Input, LabelInput, MainBlockInput, TextChangeType} from "./SignIn";
import {envelope, eye, graduation_cap, key, university, user} from "../../Utils/Font Awesome/Solid";
import {eye_slash} from "../../Utils/Font Awesome/Regular";
import {useSelector} from "react-redux";
import styled from "styled-components";
import {device} from "../../Utils/MediaSize";
import ErrorBlockModal from "./ErrorBlockModal";

const BlockWithProfile = styled.div`
  width: ${props => props.width};

  @media all and ${device.tabletS} {
    width: 100%;
  }
`

const SignUp = ({showPassword, setShowPassword, width, handleSwitchRequest, handleUseValue}) => {
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
                            value={handleUseValue().userName.value}
                            name={'name'}
                            onChange={e => handleUseValue().userName.onChange(e)}
                            onBlur={e => handleUseValue().userName.onBlur(e)}
                        />

                        <ErrorBlockModal
                            valueOne={handleUseValue().userName.isDirty}
                            valueTwo={handleUseValue().userName.isEmpty}
                            text={'Field is empty'} left={'0'}
                        />
                        <ErrorBlockModal
                            valueOne={handleUseValue().userName.isDirty}
                            valueTwo={handleUseValue().userName.nameError}
                            right={'0'} text={'Wrong name'}
                            topText={'45px'} leftText={'90px'}
                        />
                    </BlockInput>

                    {
                        emailRedux
                            ?
                            <BlockInput>
                                <LabelInput>{user}</LabelInput>
                                <Input
                                    type={'text'}
                                    placeholder={'Last Name'}
                                    value={handleUseValue().userLastName.value}
                                    name={'lastName'}
                                    onChange={e => handleUseValue().userLastName.onChange(e)}
                                    onBlur={e => handleUseValue().userLastName.onBlur(e)}
                                />
                                <ErrorBlockModal
                                    valueOne={handleUseValue().userLastName.isDirty}
                                    valueTwo={handleUseValue().userLastName.isEmpty}
                                    text={'Field is empty'} left={'0'}
                                />
                                <ErrorBlockModal
                                    valueOne={handleUseValue().userLastName.isDirty}
                                    valueTwo={handleUseValue().userLastName.lastNameError}
                                    right={'0'} text={'Wrong LastName'}
                                    topText={'45px'} leftText={'90px'}
                                />
                            </BlockInput>
                            :
                            null
                    }

                    <BlockInput>
                        <LabelInput>{graduation_cap}</LabelInput>
                        <Input
                            type={'text'}
                            placeholder={'Where Learning ?'}
                            value={handleUseValue().learning.value}
                            // disabled
                            required
                            name={'learning'}
                            onChange={e => handleUseValue().learning.onChange(e)}
                            onBlur={e => handleUseValue().learning.onBlur(e)}
                        />
                        <ErrorBlockModal
                            valueOne={handleUseValue().learning.isDirty}
                            valueTwo={handleUseValue().learning.isEmpty}
                            text={'Field is empty'} left={'0'}
                        />
                    </BlockInput>

                    <BlockInput>
                        <LabelInput>{university}</LabelInput>
                        <Input
                            type={'text'}
                            placeholder={'What study ?'}
                            value={handleUseValue().study.value}
                            // disabled
                            required
                            name={'text'}
                            onChange={e => handleUseValue().study.onChange(e)}
                            onBlur={e => handleUseValue().study.onBlur(e)}
                        />
                        <ErrorBlockModal
                            valueOne={handleUseValue().study.isDirty}
                            valueTwo={handleUseValue().study.isEmpty}
                            text={'Field is empty'} left={'0'}
                        />
                    </BlockInput>
                </BlockWithProfile>

                <BlockWithProfile width={emailRedux ? '49%' : '100%'}>
                    <BlockInput>
                        <LabelInput>{envelope}</LabelInput>
                        <Input
                            type={'email'}
                            placeholder={'E-mail'}
                            value={handleUseValue().email.value}
                            required
                            name={'email'}
                            onChange={e => handleUseValue().email.onChange(e)}
                            onBlur={e => handleUseValue().email.onBlur(e)}
                        />
                        <ErrorBlockModal
                            valueOne={handleUseValue().email.isDirty}
                            valueTwo={handleUseValue().email.isEmpty}
                            text={'Field is empty'} left={'0'} bottom={'-35px'}
                        />
                        <ErrorBlockModal
                            valueOne={handleUseValue().email.isDirty}
                            valueTwo={handleUseValue().email.emailError}
                            right={'0'} bottom={'-35px'}
                            text={'Wrong email'}
                        />
                    </BlockInput>

                    <BlockInput>
                        <LabelInput>{key}</LabelInput>
                        <Input
                            type={showPassword ? 'password' : 'text'}
                            placeholder={'Password'}
                            required
                            value={handleUseValue().password.value}
                            name={'password'}
                            onChange={e => handleUseValue().password.onChange(e)}
                            onBlur={e => handleUseValue().password.onBlur(e)}
                        />
                        <TextChangeType
                            onClick={() => setShowPassword(!showPassword)}>{showPassword ? eye_slash : eye}</TextChangeType>
                        <ErrorBlockModal
                            valueOne={handleUseValue().password.isDirty}
                            valueTwo={handleUseValue().password.isEmpty}
                            text={'Field is empty'} left={'0'} bottom={'-35px'}
                        />
                        <ErrorBlockModal
                            valueOne={handleUseValue().password.isDirty}
                            valueTwo={handleUseValue().password.passwordError}
                            right={'0'} bottom={'-35px'}
                            text={'Wrong Password'}
                        />
                    </BlockInput>

                    <BlockInput>
                        <LabelInput>{key}</LabelInput>
                        <Input
                            type={'password'}
                            placeholder={'Repeat Password'}
                            required
                            name={'password'}
                            value={handleUseValue().repeatPassword.value}
                            onChange={e => handleUseValue().repeatPassword.onChange(e)}
                            onBlur={e => handleUseValue().repeatPassword.onBlur(e)}
                        />
                        <ErrorBlockModal
                            valueOne={handleUseValue().repeatPassword.isDirty}
                            valueTwo={handleUseValue().repeatPassword.isEmpty}
                            text={'Field is empty'} left={'0'} bottom={'-35px'}
                        />
                        <ErrorBlockModal
                            valueOne={handleUseValue().repeatPassword.isDirty}
                            valueTwo={handleUseValue().repeatPassword.value !== handleUseValue().password.value}
                            right={'0'}
                            text={'Пароли не совпадают'}
                        />
                    </BlockInput>
                </BlockWithProfile>
            </MainBlockInput>
            {emailRedux
                ?
                null
                :
                <BlockInput>
                    <ButtonSend
                        onClick={() => handleSwitchRequest(handleUseValue().email.value, handleUseValue().password.value, 2)}
                        disabled={
                            !handleUseValue().email.inputValid || !handleUseValue().password.inputValid
                            || !handleUseValue().userName.inputValid || !handleUseValue().repeatPassword.inputValid
                        }
                    >
                        Registration
                    </ButtonSend>
                </BlockInput>
            }
        </BlockSignInSignUp>
    );
};

export default SignUp;