import React from "react";
import './App.sass';
import {useSelector} from "react-redux";
import HiMathMain from "./Components/hiMathMain";
import MainLoading from "./Components/Loading/MainLoading";

function App() {
    const loading = useSelector(state => state.userAuth.loading);

    const hiMath = () => {
        return (
            <div className={'wrapper'}>
                <HiMathMain/>
            </div>
        )
    }

    const handleLoading = () => <MainLoading/>

    return loading ? handleLoading() : hiMath()
}

export default App;