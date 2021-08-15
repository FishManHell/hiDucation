import React, {useState} from 'react';
import NavHeader from "./NavHeader";
import Header from "./Header";
import Product from "./Product";
import About from "./About";
import Team from "./Team";
import FooterContact from "./FooterContact";
import Modal from "./Modal/Modal";
import {useSelector} from "react-redux";
import ModalProfile from "./ModalProfile/ModalProfile";
import {useInput} from "../Utils/Hook/HookFormModal";

const HiMathMain = () => {
    const passwordRedux = useSelector(state => state.userAuth.user.password);
    const emailRedux = useSelector(state => state.userAuth.user.email);

    const [openModal, setOpenModal] = useState(false);
    const [form, setForm] = useState(true);
    const [showPassword, setShowPassword] = useState(true);
    const [forgetPassword, setForgetPassword] = useState(false);

    const email = useInput('' || emailRedux, {isEmpty: true, isEmail: true});
    const password = useInput('' || passwordRedux, {isEmpty: true, isPassword: true});
    const userName = useInput('', {isEmpty: true, isName: true});
    const userLastName = useInput('', {isEmpty: true, isLastName: true});
    const learning = useInput('', {isEmpty: true});
    const study = useInput('', {isEmpty: true});
    const repeatPassword = useInput('', {isEmpty: true});

    const clearState = () => {
        email.onClear()
        password.onClear()
        userName.onClear()
        learning.onClear()
        study.onClear()
        repeatPassword.onClear()
    }

    const handleUseValue = () => ({
        email,
        password,
        userName,
        userLastName,
        learning,
        study,
        repeatPassword
    })

    const handleChangeValuesBooleanForms = () => ({
        openModal,
        setOpenModal,
        form,
        setForm,
        showPassword,
        setShowPassword,
        forgetPassword,
        setForgetPassword
    })

    const handleShowPassword = () => setShowPassword(!showPassword)

    return (
        <div>
            <NavHeader setOpenModal={setOpenModal}/>
            <Header/>
            <Product/>
            <About/>
            <Team/>
            <FooterContact/>
            {emailRedux
                ? <ModalProfile
                    handleShowPassword={handleShowPassword}
                    handleBooleanForms={handleChangeValuesBooleanForms}
                    handleUseValue={handleUseValue}
                    clearState={clearState}
                />
                : <Modal
                    handleShowPassword={handleShowPassword}
                    handleBooleanForms={handleChangeValuesBooleanForms}
                    clearState={clearState}
                />
            }
        </div>
    );
};

export default HiMathMain;