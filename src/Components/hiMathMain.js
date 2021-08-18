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

const HiMathMain = () => {
    const emailRedux = useSelector(state => state.userAuth.user.email);
    const [openModal, setOpenModal] = useState(false);
    const [form, setForm] = useState(true);
    const [showPassword, setShowPassword] = useState(true);
    const [forgetPassword, setForgetPassword] = useState(false);
    const [changeTextButtonProfile, setChangeTextButtonProfile] = useState(true);

    const handleChangeBooleanForms = () => ({
        openModal,
        setOpenModal,
        form,
        setForm,
        showPassword,
        setShowPassword,
        forgetPassword,
        setForgetPassword,
        changeTextButtonProfile,
        setChangeTextButtonProfile
    })


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
                    handleBooleanForms={handleChangeBooleanForms}
                />
                : <Modal
                    handleBooleanForms={handleChangeBooleanForms}
                />
            }
        </div>
    );
};

export default HiMathMain;