import React from 'react';
import {BounceLoader} from "react-spinners";

const MainLoading = () => {
    return (
        <div className={'wrapper_loading '}>
            <BounceLoader color={"rgb(47,163,152)"} size={400}/>
        </div>
    );
};

export default MainLoading;