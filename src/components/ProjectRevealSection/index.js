import React from 'react';
import {
    ProjectRevealContainer,
    ProjectRevealBackground,
    VideoBackground
} from './ProjectRevealSectionStyle';

const ProjectRevealSection = () => {
    return (

        <ProjectRevealContainer>
            <ProjectRevealBackground>
                {/* <VideoBackground autoPlay loop muted src={Video} type='video/mp4' /> */}
            </ProjectRevealBackground>
        </ProjectRevealContainer>
    );
};

export default ProjectRevealSection