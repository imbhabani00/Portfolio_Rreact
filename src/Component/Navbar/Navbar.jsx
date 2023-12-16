import React from "react";
import './Navbar.css';
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
class Navbar extends React.Component {
    render() {
        return (
            <>
                <div className="n-wrapper">
                    <div className="n-left">
                        <div className="n-name">Bhabani</div>
                        <Toggle />
                    </div>
                    <div className="n-right">
                        <div className="n-list">
                            <ul >
                                <Link
                                    activeClass="activeClass"
                                    to="Home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <li>Home</li>
                                </Link>
                                <Link
                                    activeClass="activeClass"
                                    to="About"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <li>About</li>
                                </Link>
                                <Link
                                    activeClass="activeClass"
                                    to="Skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <li>Skills</li>
                                </Link>
                                <Link
                                    activeClass="activeClass"
                                    to="Experience"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <li>Experience </li>
                                </Link>
                                <Link
                                    activeClass="activeClass"
                                    to="Education"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <li>Education </li>
                                </Link>
                                <Link
                                    activeClass="activeClass"
                                    to="Project"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <li>Project </li>
                                </Link>

                                <Link
                                    activeClass="activeClass"
                                    to="Contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <li>Contact </li>
                                </Link>
                            </ul>
                        </div>
                        <button className="button">Contact</button>
                    </div>
                </div>
            </>
        )
    }
}
export default Navbar;