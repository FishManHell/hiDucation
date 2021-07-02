import React, {useState} from "react";
import './App.sass';
import {useSelector} from "react-redux";
import {BounceLoader} from "react-spinners";
import HiMathMain from "./Components/hiMathMain";
function App() {
    const loading = useSelector(state => state.userAuth.loading);

    const [openModal, setOpenModal] = useState(false);


    const hiMath = () => {
        return (
            <div className={'wrapper'}>
                <HiMathMain openModal={openModal} setOpenModal={setOpenModal}/>
            </div>
        )
    }

    const handleLoading = () => {
        return (
            <div className={'wrapper_loading '}>
                <BounceLoader color={"#861653"} size={400}/>
            </div>
        )
    }

    return loading ? handleLoading() : hiMath()
}

export default App;
