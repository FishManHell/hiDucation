import React from 'react';
import NavHeader from "./NavHeader";
import Header from "./Header";
import FirstSectionText from "./FirstSectionText";
import Product from "./Product";
import About from "./About";
import Team from "./Team";
import FooterContact from "./FooterContact";
import Modal from "./Modal/Modal";
import {useSelector} from "react-redux";
import ModalProfile from "./ModalProfile/ModalProfile";

const HiMathMain = ({setOpenModal, openModal}) => {
    const email = useSelector(state => state.userAuth.user.email);

    return (
        <div>
            <NavHeader setOpenModal={setOpenModal}/>
            <Header/>
            <FirstSectionText/>
            <Product/>
            <About/>
            <Team/>
            <FooterContact/>
            {email ? <ModalProfile openModal={openModal} setOpenModal={setOpenModal}/> : <Modal openModal={openModal} setOpenModal={setOpenModal}/>}
        </div>
    );
};

export default HiMathMain;