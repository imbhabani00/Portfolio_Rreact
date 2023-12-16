import React from "react";
import "./Floting.css"
const FlotingDiv = ({ image, txt1, txt2 }) => {
    return (<>
        <div className="floatingDiv1">
            <img src={image} alt="Crown Image" />
            <span>{txt1} <br />{txt2}</span>
        </div>
    </>
    );
}
export default FlotingDiv;
