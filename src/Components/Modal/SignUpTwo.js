import React from 'react';
import {BlockInput, BlockSignInSignUp, Input, LabelInput, MainBlockInput, TextChangeType} from "./SignIn";
import {envelope, eye, graduation_cap, key, university, user} from "../../Utils/Font Awesome/Solid";
import {eye_slash} from "../../Utils/Font Awesome/Regular";

const SignUpTwo = ({showPassword, setShowPassword}) => {
    return (
        <BlockSignInSignUp>
            <MainBlockInput>
                <BlockInput>
                    <LabelInput>{user}</LabelInput>
                    <Input type={'text'} placeholder={'Denys'}/>
                </BlockInput>

                <BlockInput>
                    <LabelInput>{graduation_cap}</LabelInput>
                    <Input type={'text'} placeholder={'Where Learning ?'}/>
                </BlockInput>

                <BlockInput>
                    <LabelInput>{university}</LabelInput>
                    <Input type={'text'} placeholder={'What study ?'}/>
                </BlockInput>

                <BlockInput>
                    <LabelInput>{envelope}</LabelInput>
                    <Input type={'text'} placeholder={'E-mail'}/>
                </BlockInput>

                <BlockInput>
                    <LabelInput>{key}</LabelInput>
                    <Input type={showPassword ? 'password' : 'text'} placeholder={'Password'}/>
                    <TextChangeType onClick={() => setShowPassword(!showPassword)}>{showPassword ? eye : eye_slash}</TextChangeType>
                </BlockInput>

                <BlockInput>
                    <LabelInput>{key}</LabelInput>
                    <Input type={'password'} placeholder={'Repeat Password'}/>
                </BlockInput>
            </MainBlockInput>
        </BlockSignInSignUp>
    );
};

export default SignUpTwo;