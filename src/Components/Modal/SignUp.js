import React, {useState} from 'react';
import {
    BlockButtonLogin, BlockError,
    BlockInput,
    BlockLeftModal,
    BlockRightModal,
    BlockSectionModal,
    ButtonLoginRegistration, ErrorTextModalForm,
    Input,
    LabelInput, WindowPasswordMatch
} from "../../StyledComponents/SrtyledModal";
import styled from "styled-components";
import {BASE_URL} from "../../Utils/Url";


const SignUp = ({email, password, userName, learning, study, clearState}) => {
    const [repeatedPassword, setRepeatedPassword] = useState('');

    const handleRepeatedPassword = e => {
        setRepeatedPassword(e.target.value)
    }

    const regPost = (email, password) => {
        const user = {
            email: email,
            password: password
        }
        fetch(`${BASE_URL}/user/registration`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                if (response.ok) {
                    return response
                } else {
                    throw new Error(response.status + '');
                }
            })
            .then(data => console.log(data))
            .catch(e => console.log(e.message))
    }

    return (
        <div>
            <BlockSectionModal>
                <BlockLeftModal>
                    <BlockInput>
                        <LabelInput margin={'0 0 10px 0'}>
                            Username
                        </LabelInput>
                        <Input
                            margin={'0 0 10px 0'}
                            width={'100%'}
                            type={'text'}
                            value={userName.value}
                            name={'name'}
                            disabled
                            placeholder={'Enter your Name'}
                            onChange={e => userName.onChange(e)}
                            onBlur={e => userName.onBlur(e)}
                        />
                    </BlockInput>
                    <BlockInput>
                        <LabelInput margin={'0 0 10px 0'}>
                            Where Learning <span style={{color: 'red'}}>*</span>
                        </LabelInput>
                        <Input
                            margin={'0 0 10px 0'}
                            width={'100%'}
                            required
                            type={'text'}
                            value={learning.value}
                            disabled
                            placeholder={'DMU'}
                            name={'learning'}
                            onChange={e => learning.onChange(e)}
                            onBlur={e => learning.onBlur(e)}
                        />
                    </BlockInput>
                    <BlockInput>
                        <LabelInput margin={'0 0 10px 0'}>
                            What study <span style={{color: 'red'}}>*</span>
                        </LabelInput>
                        <Input
                            margin={'0 0 10px 0'}
                            width={'100%'}
                            required
                            type={'text'}
                            value={study.value}
                            disabled
                            placeholder={'Math'}
                            name={'text'}
                            onChange={e => study.onChange(e)}
                            onBlur={e => study.onBlur(e)}
                        />
                    </BlockInput>
                    <BlockInput>
                        <LabelInput margin={'0 0 10px 0'}>
                            Email <span style={{color: 'red'}}>*</span>
                        </LabelInput>
                        <Input
                            margin={'0 0 10px 0'}
                            width={'100%'}
                            required
                            type={'email'}
                            value={email.value}
                            placeholder={'name@email.com'}
                            name={'email'}
                            onChange={e => email.onChange(e)}
                            onBlur={e => email.onBlur(e)}
                        />
                    </BlockInput>
                    <BlockInput>
                        <LabelInput margin={'0 0 10px 0'}>
                            Password <span style={{color: 'red'}}>*</span>
                        </LabelInput>
                        <Input
                            margin={'0 0 10px 0'}
                            width={'100%'}
                            required
                            type={'password'}
                            value={password.value}
                            placeholder={'Enter your password....'}
                            name={'password'}
                            onChange={e => password.onChange(e)}
                            onBlur={e => password.onBlur(e)}
                        />
                    </BlockInput>
                    <BlockInput>
                        <LabelInput margin={'0 0 10px 0'}>
                            repeated Password
                        </LabelInput>
                        <Input
                            margin={'0 0 10px 0'}
                            width={'100%'}
                            type={'password'}
                            value={repeatedPassword}
                            placeholder={'Enter your repeated password'}
                            disabled
                            onChange={e => handleRepeatedPassword(e)}
                            onBlur={e => password.onBlur(e)}
                        />
                    </BlockInput>

                </BlockLeftModal>
                <BlockRightModal>
                    <BlockError top={'25px'} width={'100%'}>
                        {(userName.isDirty && userName.isEmpty)
                        &&
                        <ErrorTextModalForm color={'#A34258'} top={'25px'} left={'45px'}>The field cannot be
                            empty</ErrorTextModalForm>}
                        {(userName.isDirty && userName.nameError)
                        &&
                        <ErrorTextModalForm top={'45px'} left={'90px'}>Wrong name</ErrorTextModalForm>}
                    </BlockError>
                    <BlockError top={'120px'} width={'100%'}>
                        {(learning.isDirty && learning.isEmpty)
                        &&
                        <ErrorTextModalForm color={'#A34258'}>The field cannot be
                            empty</ErrorTextModalForm>}
                    </BlockError>
                    <BlockError top={'205px'} width={'100%'}>
                        {(study.isDirty && study.isEmpty)
                        &&
                        <ErrorTextModalForm color={'#A34258'}>The field cannot be
                            empty</ErrorTextModalForm>}
                    </BlockError>
                    <BlockError bottom={'170px'} width={'100%'}>
                        {(email.isDirty && email.isEmpty)
                        &&
                        <ErrorTextModalForm color={'#A34258'}>The field cannot be
                            empty</ErrorTextModalForm>}
                        {(email.isDirty && email.emailError)
                        &&
                        <ErrorTextModalForm>Wrong email</ErrorTextModalForm>}
                    </BlockError>
                    <BlockError bottom={'85px'} width={'100%'}>
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
            <WindowPasswordMatch>Password must be at least 8 characters - first letter Capital</WindowPasswordMatch>
            <BlockButtonLogin  margin={'0 0 10px 0'}>
                <ButtonLoginRegistration
                    disabled={!email.inputValid || !password.inputValid}
                    onClick={() => regPost(email.value, password.value)}
                >
                    Registration
                </ButtonLoginRegistration>
                {/*|| !userName.inputValid*/}
            </BlockButtonLogin>
        </div>
    );
};

export default SignUp;