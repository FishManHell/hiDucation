import React from 'react';
import {apple, facebook, google} from "../../Utils/Font Awesome/Solid";
import {
    BlockButtonLogin, BlockError,
    BlockInput,
    BlockLeftModal,
    BlockRightModal,
    BlockSectionModal,
    ButtonLoginRegistration,
    ErrorTextModalForm,
    ForgetPassword,
    Input,
    LabelInput,
    OrParagraph,
    SectionSocialModal,
    SocialButton,
    SocialButtonBlock,
    SocialButtonSpanImgText,
} from "../../StyledComponents/SrtyledModal";
import {base_url} from "../../Utils/Url";
import {useDispatch} from "react-redux";
import {getUserInform, postLogin} from "../../ReduxToolkit/ReducerUserAuth";
import {getUserProfile} from "../../ReduxToolkit/ReducerUserGetByEmail";

const SignIn = ({email, password, setOpenModal, clearState, handleCloseModal}) => {
    const dispatch = useDispatch()

    const handleTest = (email, password) => {
        dispatch(postLogin(`${base_url}/user/login?userEmail=${email}&password=${password}`))
        dispatch(getUserInform({email, password}))
        dispatch(getUserProfile(`${base_url}/user/${email}`))
        setOpenModal(false)
        clearState()
        handleCloseModal()
    }

    return (
        <div>
            <BlockSectionModal>
                <BlockLeftModal>
                    <BlockInput>
                        <LabelInput margin={'0 0 10px 0'}>
                            EMAIL
                        </LabelInput>
                        <Input
                            margin={'0 0 10px 0'}
                            width={'100%'}
                            type={'email'}
                            placeholder={'name@email.com'}
                            value={email.value}
                            name={'email'}
                            onChange={e => email.onChange(e)}
                            onBlur={e => email.onBlur(e)}
                        />
                    </BlockInput>
                    <BlockInput>
                        <LabelInput margin={'0 0 10px 0'}>
                            PASSWORD
                        </LabelInput>
                        <Input
                            margin={'0 0 10px 0'}
                            width={'100%'}
                            type={'password'}
                            placeholder={'Enter your password....'}
                            value={password.value}
                            name={'password'}
                            onChange={e => password.onChange(e)}
                            onBlur={e => password.onBlur(e)}
                        />
                        <ForgetPassword>
                            Forgot password?
                        </ForgetPassword>
                    </BlockInput>
                </BlockLeftModal>
                <BlockRightModal>
                    <BlockError top={'25px'} width={'100%'}>
                        {(email.isDirty && email.isEmpty)
                        &&
                        <ErrorTextModalForm color={'#A34258'}>The field cannot be
                            empty</ErrorTextModalForm>}
                        {(email.isDirty && email.emailError)
                        &&
                        <ErrorTextModalForm>Wrong email</ErrorTextModalForm>}
                    </BlockError>
                    <BlockError top={'105px'} width={'100%'}>
                        {(password.isDirty && password.isEmpty)
                        &&
                        <ErrorTextModalForm color={'#A34258'}>The field cannot be
                            empty</ErrorTextModalForm>}
                        {(password.isDirty && password.passwordError)
                        &&
                        <ErrorTextModalForm>Wrong Password</ErrorTextModalForm>}
                    </BlockError>
                </BlockRightModal>
            </BlockSectionModal>
            <BlockButtonLogin margin={'10px 0 0 0'}>
                <ButtonLoginRegistration
                    onClick={() => handleTest(email.value, password.value)}
                    disabled={!email.inputValid || !password.inputValid}>
                    Login
                </ButtonLoginRegistration>
            </BlockButtonLogin>
            <OrParagraph>
                Or
            </OrParagraph>
            <SectionSocialModal>
                <SocialButtonBlock>
                    <SocialButton>
                        <SocialButtonSpanImgText margin={'10px'} width={'30px'} height={'30px'}>
                            {google}
                        </SocialButtonSpanImgText>
                        <SocialButtonSpanImgText width={'100%'}>
                            Continue with Google
                        </SocialButtonSpanImgText>
                    </SocialButton>
                </SocialButtonBlock>
                <SocialButtonBlock>
                    <SocialButton>
                        <SocialButtonSpanImgText margin={'10px'} width={'30px'} height={'30px'}>
                            {facebook}
                        </SocialButtonSpanImgText>
                        <SocialButtonSpanImgText width={'100%'}>
                            Continue with Facebook
                        </SocialButtonSpanImgText>
                    </SocialButton>
                </SocialButtonBlock>
                <SocialButtonBlock>
                    <SocialButton>
                        <SocialButtonSpanImgText margin={'10px'} width={'30px'} height={'30px'}>
                            {apple}
                        </SocialButtonSpanImgText>
                        <SocialButtonSpanImgText width={'100%'}>
                            Continue with Apple
                        </SocialButtonSpanImgText>
                    </SocialButton>
                </SocialButtonBlock>
            </SectionSocialModal>
        </div>
    );
};

export default SignIn;