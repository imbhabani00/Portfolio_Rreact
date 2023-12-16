import React from "react";
import './Experience.css';
const Experience = () => {
    return (<>
        <section className="Experience" id="Experience">
            <div className="section-heading4">
                Experience :
            </div>
            <div className="timeline">
                <div className="timeline-box">
                    <div className="timeline-head">
                        <h1>Internship</h1>
                        <h4 className="no-bold"><span>java C Enterprises</span></h4>
                        <h6 className="no-bold">April 2023 - July 2023</h6>
                    </div>
                    <div className="timeline-body">
                        <p>Here I worked on a group, there were 3 members with me. We had done <span>"Bitcoin_wallet_system"</span>, it was a major project I worked on the front-end part.</p>
                    </div>
                </div>
                <div className="timeline-box">
                    <div className="timeline-head">
                        <h1>Learner</h1>
                        <h4 className="no-bold"><span>Coding Ninja</span></h4>
                        <h6 className="no-bold">December 2022 - February 2024</h6>
                    </div>
                    <div className="timeline-body">
                        <p>Here I am doing a  <span> "full-stack web development"</span> course.</p>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Experience;
