import React, {useState} from 'react';
import NavHeader from "./NavHeader";
import Header from "./Header";
import FirstSectionText from "./FirstSectionText";
import Product from "./Product";
import About from "./About";
import Team from "./Team";
import FooterContact from "./FooterContact";
import Modal from "./Modal/Modal";
import {useSelector} from "react-redux";
// import ModalProfile from "./ModalProfile/ModalProfile";
import ModalProfileTwo from "./ModalProfile/ModalProfileTwo";
import {useInput} from "../Utils/Hook/HookFormModal";

const HiMathMain = ({setOpenModal, openModal}) => {
    const passwordRedux = useSelector(state => state.userAuth.user.password);
    const emailRedux = useSelector(state => state.userAuth.user.email);
    const email = useInput('' || emailRedux, {isEmpty: true, isEmail: true});
    const password = useInput('' || passwordRedux, {isEmpty: true, isPassword: true});
    const userName = useInput('', {isEmpty: true, isName: true});
    const learning = useInput('', {isEmpty: true});
    const study = useInput('', {isEmpty: true});
    const repeatPassword = useInput('', {isEmpty: true});
    const [form, setForm] = useState(true);
    const [showPassword, setShowPassword] = useState(true);



    const clearState = () => {
        email.onClear()
        password.onClear()
        userName.onClear()
        learning.onClear()
        study.onClear()
        repeatPassword.onClear()
    }

    return (
        <div>
            <NavHeader setOpenModal={setOpenModal}/>
            <Header/>
            <FirstSectionText/>
            <Product/>
            <About/>
            <Team/>
            <FooterContact/>
            {emailRedux
                ? <ModalProfileTwo
                    email={email}
                    password={password}
                    userName={userName}
                    learning={learning}
                    study={study}
                    repeatPassword={repeatPassword}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    form={form}
                    setForm={setForm}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    clearState={clearState}
                />
                : <Modal
                    email={email}
                    password={password}
                    userName={userName}
                    learning={learning}
                    study={study}
                    repeatPassword={repeatPassword}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    form={form}
                    setForm={setForm}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    clearState={clearState}
                />
            }
        </div>
    );
};

export default HiMathMain;