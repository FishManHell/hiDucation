import React from 'react';
import {HeadingTextSection} from "../StyledComponents/Styled";
import {Carousel} from "react-bootstrap";
import {ContainerItemCarousel, WrapperTeam} from "../StyledComponents/StyledTeam";
import {arrayTeamObjects} from "../Utils/ObectsInform/TeamObject";
import TeamItem from "./TeamItem";

const Team = () => {
    return (
        <WrapperTeam name={'team'}>
            <HeadingTextSection color={'#fff'} padding={'20px 0 50px 0'}>The Team</HeadingTextSection>
            <Carousel>
                {
                    arrayTeamObjects.map(item =>
                        <Carousel.Item key={item.id}>
                            <ContainerItemCarousel>
                                <TeamItem item={item}/>
                            </ContainerItemCarousel>
                        </Carousel.Item>)
                }
            </Carousel>
        </WrapperTeam>
    );
};

export default Team;