import React from 'react';
import {
    BlockImgSuccessStories,
    ImgSuccessStories, InformationTextSuccessStories,
    MainBlockSuccessStories, MainSecondTextSuccessStories, MainTextSuccessStories
} from "../StyledComponents/StyledCarouselSuccessStories";

const StoryItem = ({item}) => {
    return (
        <MainBlockSuccessStories>
            <BlockImgSuccessStories>
                <ImgSuccessStories src={item.img}/>
            </BlockImgSuccessStories>
            <MainTextSuccessStories>{item.company}</MainTextSuccessStories>
            <MainSecondTextSuccessStories>{item.name}</MainSecondTextSuccessStories>
            <InformationTextSuccessStories>{item.sectionInform}</InformationTextSuccessStories>
        </MainBlockSuccessStories>
    )
};

export default StoryItem;