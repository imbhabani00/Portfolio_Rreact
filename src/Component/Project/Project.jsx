import React from "react";
import "./Project.css";
import project1 from '../../img/project1.png';
import project6 from '../../img/project6.png';
const Project = () => {
    return (<>
        <section className="Project" id="Project">
            <div class="section-heading6">
                Project :
            </div>
            <div id="project-container">
                <div class="project-image-container">
                    <img src={project1} />
                    <div class="middle text-center">
                        <div class="project-text">portfolio using React !</div>
                    </div>
                </div>
                <div class="project-image-container">
                    <image />
                    <div class="middle text-center">
                        <div class="project-text"></div>
                    </div>
                </div>
                <div class="project-image-container">
                    <image />
                    <div class="middle text-center">
                        <div class="project-text">Write here basic details about the project.</div>
                    </div>
                </div>
                <div class="project-image-container">
                    <image />
                    <div class="middle text-center">
                        <div class="project-text">Write here basic details about the project.</div>
                    </div>
                </div>
                <div class="project-image-container">
                    <image />
                    <div class="middle text-center">
                        <div class="project-text">Write here basic details about the project.</div>
                    </div>
                </div>
                <div class="project-image-container">
                    <img src={project6} />
                    <div class="middle text-center">
                        <div class="project-text">My Ressume !</div>
                    </div>
                </div>

            </div>
        </section>
    </>)
}
export default Project;