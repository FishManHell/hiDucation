import React from 'react';
import {BlockInput, BlockSignInSignUp, Input, LabelInput, MainBlockInput, TextChangeType} from "./SignIn";
import {envelope, eye, graduation_cap, key, university, user} from "../../Utils/Font Awesome/Solid";
import {eye_slash} from "../../Utils/Font Awesome/Regular";
import {BlockError, ErrorTextModalForm} from "../../StyledComponents/SrtyledModal";
import {useSelector} from "react-redux";

const SignUp = ({showPassword, setShowPassword, email, password, userName, learning, study, repeatPassword}) => {
    const emailRedux = useSelector(state => state.getUserInform.userProfile.email)
    const passwordRedux = useSelector(state => state.getUserInform.userProfile.password)

    return (
        <BlockSignInSignUp>
            <MainBlockInput>
                <BlockInput>
                    <LabelInput>{user}</LabelInput>
                    <Input
                        type={'text'}
                        placeholder={'Denys'}
                        value={userName.value}
                        name={'name'}
                        // disabled
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

                <BlockInput>
                    <LabelInput>{graduation_cap}</LabelInput>
                    <Input
                        type={'text'}
                        placeholder={'Where Learning ?'}
                        value={learning.value}
                        disabled
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
                        disabled
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

                <BlockInput>
                    <LabelInput>{envelope}</LabelInput>
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                        value={emailRedux || email.value}
                        required
                        name={'email'}
                        onChange={e => email.onChange(e)}
                        onBlur={e => email.onBlur(e)}
                    />
                    {
                        emailRedux === ''
                            ?
                            <BlockError left={'0'} bottom={'-35px'}>
                                {
                                    (email.isDirty && email.isEmpty)
                                    &&
                                    <ErrorTextModalForm>Field is empty</ErrorTextModalForm>
                                }
                            </BlockError>
                            :
                            null
                    }
                    {
                        emailRedux === ''
                            ?
                            <BlockError right={'0'} bottom={'-35px'}>
                                {(email.isDirty && email.emailError)
                                &&
                                <ErrorTextModalForm>Wrong email</ErrorTextModalForm>}
                            </BlockError>
                            :
                            null
                    }
                </BlockInput>

                <BlockInput>
                    <LabelInput>{key}</LabelInput>
                    <Input
                        type={showPassword ? 'password' : 'text'}
                        placeholder={'Password'}
                        required
                        value={passwordRedux || password.value}
                        name={'password'}
                        onChange={e => password.onChange(e)}
                        onBlur={e => password.onBlur(e)}
                    />
                    <TextChangeType
                        onClick={() => setShowPassword(!showPassword)}>{showPassword ? eye_slash : eye}</TextChangeType>
                    {
                        passwordRedux === ''
                            ?
                            <BlockError left={'0'} bottom={'-35px'}>
                                {
                                    (password.isDirty && password.isEmpty)
                                    &&
                                    <ErrorTextModalForm>Field is empty</ErrorTextModalForm>
                                }
                            </BlockError>
                            :
                            null
                    }
                    {
                        passwordRedux === ''
                            ?
                            <BlockError right={'0'} bottom={'-35px'}>
                                {
                                    (password.isDirty && password.passwordError)
                                    &&
                                    <ErrorTextModalForm>Wrong Password</ErrorTextModalForm>
                                }
                            </BlockError>
                            :
                            null
                    }
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
            </MainBlockInput>
        </BlockSignInSignUp>
    );
};

export default SignUp;