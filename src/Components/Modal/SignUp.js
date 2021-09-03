import React from 'react';
import {envelope, eye, graduation_cap, key, repeat, university, user} from "../../Utils/Font Awesome/Solid";
import {eye_slash} from "../../Utils/Font Awesome/Regular";
import {useSelector} from "react-redux";
import ErrorBlockModal from "./ErrorBlockModal";
import {Formik} from 'formik';
import {
    BlockInput,
    BlockSignInSignUp, BlockWithProfile, ButtonSend,
    Form,
    Input, LabelInput,
    MainBlockInput, TextChangeType
} from "../../StyledComponents/SrtyledModal";
import FooterModalProfileStatistics from "../ModalProfile/FooterModalProfileStatistics";


const SignUp = ({width, handleBooleanForms, funcCheckYup, requestSend}) => {
    const emailRedux = useSelector(state => state.userAuth.user.email);
    const passwordRedux = useSelector(state => state.userAuth.user.password);

    const objectStateProfile = {
        firstName: '',
        lastName: '',
        learning: '',
        study: '',
        email: '' || emailRedux,
        password: '' || passwordRedux,
        confirmPassword: ''
    }


    const handleShowPassword = () => {
        handleBooleanForms().setShowPassword(!handleBooleanForms().showPassword)
    }

    return (
        <BlockSignInSignUp width={width} margin={emailRedux ? '50px 0 0 0 ' : '0'}>
            <MainBlockInput>
                <Formik
                    initialValues={objectStateProfile}
                    validationSchema={funcCheckYup}
                    onSubmit={(values, onSubmitProps) => {
                        requestSend(values, onSubmitProps.resetForm)
                        onSubmitProps.setSubmitting(false)

                    }}
                >
                    {formik => (
                        <Form onSubmit={formik.handleSubmit} display={emailRedux ? 'flex' : 'block'}>
                            <BlockWithProfile width={emailRedux ? '49%' : '100%'}>
                                <BlockInput>
                                    <LabelInput htmlFor={'firstName'}>{user}</LabelInput>
                                    <Input type={'text'} id={'firstName'}
                                           placeholder={'First Name'}
                                           {...formik.getFieldProps('firstName')}
                                    />
                                    <ErrorBlockModal
                                        valueOne={formik.touched.firstName}
                                        valueTwo={formik.errors.firstName}
                                        text={formik.errors.firstName}
                                        left={'0'}
                                    />
                                </BlockInput>
                                {emailRedux
                                    ?
                                    <BlockInput>
                                        <LabelInput>{user}</LabelInput>
                                        <Input
                                            type={'text'}
                                            id={'lastName'}
                                            placeholder={'lastName'}
                                            {...formik.getFieldProps('lastName')}
                                        />
                                        <ErrorBlockModal
                                            valueOne={formik.touched.lastName}
                                            valueTwo={formik.errors.lastName}
                                            text={formik.errors.lastName}
                                            left={'0'}
                                        />
                                    </BlockInput>
                                    :
                                    null
                                }
                                <BlockInput>
                                    <LabelInput htmlFor={'learning'}>{graduation_cap}</LabelInput>
                                    <Input
                                        type={'text'} id={'learning'}
                                        placeholder={'Where Learning ?'}
                                        {...formik.getFieldProps('learning')}
                                    />
                                    <ErrorBlockModal
                                        valueOne={formik.touched.learning}
                                        valueTwo={formik.errors.learning}
                                        text={formik.errors.learning}
                                        left={'0'}
                                    />
                                </BlockInput>
                                <BlockInput>
                                    <LabelInput htmlFor={'study'}>{university}</LabelInput>
                                    <Input
                                        type={'text'}
                                        placeholder={'What study ?'}
                                        id={'study'}
                                        {...formik.getFieldProps('study')}
                                    />
                                    <ErrorBlockModal
                                        valueOne={formik.touched.study}
                                        valueTwo={formik.errors.study}
                                        text={formik.errors.study}
                                        left={'0'}
                                    />
                                </BlockInput>
                            </BlockWithProfile>
                            <BlockWithProfile width={emailRedux ? '49%' : '100%'}>
                                <BlockInput>
                                    <LabelInput htmlFor={'email'}>{envelope}</LabelInput>
                                    <Input
                                        type={'email'}
                                        placeholder={'test@gmail.com'}
                                        id={'email'}
                                        {...formik.getFieldProps('email')}
                                    />
                                    <ErrorBlockModal
                                        valueOne={formik.touched.email}
                                        valueTwo={formik.errors.email}
                                        text={formik.errors.email} left={'0'} bottom={'-35px'}
                                    />
                                </BlockInput>
                                <BlockInput>
                                    <LabelInput htmlFor={'password'}>{key}</LabelInput>
                                    <Input
                                        type={handleBooleanForms().showPassword ? 'password' : 'text'}
                                        placeholder={'Password'}
                                        id={'password'}
                                        {...formik.getFieldProps('password')}
                                    />
                                    <TextChangeType
                                        onClick={() => handleShowPassword()}>
                                        {handleBooleanForms().showPassword ? eye_slash : eye}
                                    </TextChangeType>
                                    <ErrorBlockModal
                                        valueOne={formik.touched.password}
                                        valueTwo={formik.errors.password}
                                        text={formik.errors.password} left={'0'} bottom={'-35px'}
                                    />
                                </BlockInput>
                                <BlockInput>
                                    <LabelInput htmlFor={'confirmPassword'}>{repeat}</LabelInput>
                                    <Input
                                        type={handleBooleanForms().showPassword ? 'password' : 'text'}
                                        placeholder={'Repeat Password'}
                                        id={'confirmPassword'}
                                        {...formik.getFieldProps('confirmPassword')}
                                    />
                                    <ErrorBlockModal
                                        valueOne={formik.touched.confirmPassword}
                                        valueTwo={formik.errors.confirmPassword}
                                        text={formik.errors.confirmPassword} left={'0'} bottom={'-35px'}
                                    />
                                </BlockInput>
                            </BlockWithProfile>
                            {emailRedux
                                ?
                                <FooterModalProfileStatistics handleBooleanForms={handleBooleanForms} formik={formik}/>
                                :
                                <ButtonSend
                                    type={'submit'}
                                    disabled={!formik.values.email || !formik.values.confirmPassword || !formik.isValid}
                                >
                                    Registration
                                </ButtonSend>
                            }
                        </Form>
                    )}
                </Formik>
            </MainBlockInput>
        </BlockSignInSignUp>
    );
};
export default SignUp;