import React from 'react';
import {BounceLoader} from "react-spinners";

const MainLoading = () => {
    return (
        <div className={'wrapper_loadingg '}>
            <BounceLoader color={"#861653"} size={400}/>
        </div>
    );
};

export default MainLoading;