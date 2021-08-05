import React from 'react';
import {BlockImgItem, BlockInformation, BlockItem, InformationText, NameTeam} from "../StyledComponents/StyledTeam";

const TeamItem = ({item}) => {
    return (
        <BlockItem>
            <BlockImgItem background_image={item.img}/>
            <BlockInformation>
                <NameTeam>{item.name}</NameTeam>
                <InformationText>{item.sectionInform}</InformationText>
            </BlockInformation>
        </BlockItem>
    );
};

export default TeamItem;