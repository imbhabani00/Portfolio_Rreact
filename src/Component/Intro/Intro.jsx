import React, { useContext } from "react";
import "./Intro.css";
import FlotingDiv from "../FlotingDiv/Floting";
import Github from "../../img/icons8-github-50.png";
import Linkedin from "../../img/icons8-linkedin-50.png";
import Instagram from "../../img/icons8-instagram-50.png";
import Icon1 from "../../img/1.jpg";
import Icon2 from "../../img/2.png";
import Icon3 from "../../img/3.png";
import Icon4 from "../../img/6.png";
import Crown from "../../img/4.png";
import ThumbsUp from "../../img/5.png";
import { themeContext } from "../../Context";
import { motion } from 'framer-motion';

const Intro = () => {
    const { darkMode } = useContext(themeContext);
    const transition = { duration: 2, type: 'spring' };

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hey! I'M</span>
                    <span>BhabaniShankar Mishra</span>
                    <div className="bio">Front-end developer with a high level of experience in web designing and development, producing quality work.</div>
                </div>
                <button className="button i-button">Hire Me!</button>
                <div className="i-icons">
                    <a href="">
                        <img src={Github} alt="Github" />
                        <img src={Linkedin} alt="Linkedin" />
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Icon1} alt="background_img" />
                <img src={Icon2} alt="user_photos" />
                <img src={Icon3} alt="photo_down_png" />
                <motion.img
                    initial={{ left: '-30%' }}
                    whileInView={{ left: '5%' }}
                    transition={transition}
                    src={Icon4} alt="Smile_png" />
                <FlotingDiv image={Crown} txt1='Web' txt2='Developer' />
                <div style={{ top: '17rem', left: '-21rem' }}>
                    <FlotingDiv image={ThumbsUp} txt1='Best Design' txt2='Award' />
                </div>
                <div>
                    <div className="blur" style={{ backgroundColor: '' }}></div>
                    <div className="blur2" style={{ backgroundColor: '' }}></div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
