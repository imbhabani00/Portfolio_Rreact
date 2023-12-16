import React from "react";
import './Skill.css';
import Ressume from '../Skills/ressume.pdf.pdf';
const Skills = () => {
    return (<>
        <section className="Skills" id="Skills">
            <div class="section-heading3">
                Skills :
            </div>
            <div className="cv">
                <a href={Ressume}>
                    <button className="button ii-button">Download CV
                    </button>
                </a>
            </div>
            <div id="skills-container">
                <div class="skill-progress"><div id="skill-1" class="eighty-five-percent"><div class="skill-name">HTML</div></div></div>
                <div class="skill-progress"><div id="skill-2" class="eighty-five-percent"><div class="skill-name">CSS</div></div></div>
                <div class="skill-progress"><div id="skill-3" class="eighty-five-percent"><div class="skill-name">JAVASCRIPT</div></div></div>
                <div class="skill-progress"><div id="skill-4" class="eighty-five-percent"><div class="skill-name">BOOTSTRAP</div></div></div>
                <div class="skill-progress"><div id="skill-5" class="eighty-five-percent"><div class="skill-name">NodeJs</div></div></div>
                <div class="skill-progress"><div id="skill-6" class="eighty-five-percent"><div class="skill-name">JAVA</div></div></div>
                <div class="skill-progress"><div id="skill-7" class="eighty-five-percent"><div class="skill-name">REACTJS</div></div></div>
                <div class="skill-progress"><div id="skill-6" class="eighty-five-percent"><div class="skill-name">MONGODB</div></div></div>
                <div class="skill-progress"><div id="skill-6" class="eighty-five-percent"><div class="skill-name">DBMS</div></div></div>
            </div>
        </section>
    </>)
}
export default Skills;