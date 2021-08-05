import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {responsiveSuccessStories} from "../../Utils/UtilsCarousel";
import {arrayObjectsStories} from "../../Utils/SuccessStoriesObject";
import StoryItem from "../StoryItem";

const MultiCarouselSuccessStories = () => {
    return (
        <div>
            <Carousel responsive={responsiveSuccessStories}>
                {arrayObjectsStories.map(item => <StoryItem key={item.id} item={item}/>)}
            </Carousel>
        </div>

    );
};
export default MultiCarouselSuccessStories;