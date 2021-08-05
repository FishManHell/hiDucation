import React from 'react';
import {BlockError, ErrorTextModalForm} from "../../StyledComponents/SrtyledModal";

const ErrorBlockModal = ({valueOne, valueTwo, right, bottom, left, text, topText, leftText}) => {
    return (
        <BlockError left={left} bottom={bottom} right={right}>
            {
                (valueOne && valueTwo)
                &&
                <ErrorTextModalForm top={topText} left={leftText}>{text}</ErrorTextModalForm>
            }
        </BlockError>
    );
};

export default ErrorBlockModal;