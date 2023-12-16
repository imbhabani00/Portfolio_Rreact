import React from "react";
import './Education.css'
const Education = () => {
    return (<>
        <section className="Education" id="Education">
            <div class="section-heading5">
                Education :
            </div>
            <div class="timeline">
                <div class="timeline-box">
                    <div class="timeline-head">
                        <h1>BCA</h1>
                        <h4 class="no-bold">Academy of Business Adminstration</h4>
                        <h6 class="no-bold">August 2017 - August 2020</h6>
                    </div>
                    <div class="timeline-body">
                        <p>After i have completed my intermediate ,I have done my bachelor of computer application in 2017-2020 at Academy of business Adminstration at Balasore.</p>
                    </div>
                </div>
                <div class="timeline-box">
                    <div class="timeline-head">
                        <h1>MCA</h1>
                        <h4 class="no-bold">Trident Academy of Creative And Technology</h4>
                        <h6 class="no-bold">August 2021 - August 2023</h6>
                    </div>
                    <div class="timeline-body">
                        <p>After i have completed my bachelor ,I have done my masters of computer application in 2021-2023 at Trident Academy Of Creative And Technology at Bhubaneswar.</p>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default Education;